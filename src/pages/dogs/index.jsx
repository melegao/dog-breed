import "./style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import DogList from "../../components/dogList"
import { useNavigate } from 'react-router-dom';
import BreedMenu from "../../components/breedeMenu";
import MenuBar from "../../components/menuBar"
function Dogs () {

    const navigate = useNavigate()

    const [dogList, setDogList] = useState([])
    const [breed, setBreed] = useState('chihuahua')


    
    useEffect(() => {
        
        
        if(localStorage.token === undefined){
                toast.error('Sem permissão!')
                navigate("/")
            }

        axios.get(`https://dogbreed-api.q9.com.br/list?breed=${breed}`, {
            headers: {
                Authorization: `${localStorage.token}`,
            },
        })
        .then((res) => setDogList(res.data.list))
        .catch((err) => console.log(err))
    }, [breed])


    return (
        <div className="dogPage">
            <MenuBar />
            <BreedMenu setBreed={setBreed}/>
            <div className="dogListContainer">
                <DogList dogList={dogList}/>
            </div>
        </div>
    )
}

export default Dogs