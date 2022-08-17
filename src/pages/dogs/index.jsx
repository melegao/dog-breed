import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import DogList from "../../components/dogList"
import { useNavigate } from 'react-router-dom';


function Dogs () {

    const navigate = useNavigate()

    const [dogList, setDogList] = useState([])

    
    useEffect(() => {
        
        
        if(localStorage.token === undefined){
                toast.error('Sem permissão!')
                navigate("/")
            }

        axios.get('https://dogbreed-api.q9.com.br/list', {
            headers: {
                Authorization: `${localStorage.token}`,
            },
        })
        .then((res) => setDogList(res.data.list))
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <h1>Dogs</h1>
            <DogList dogList={dogList}/>
        </div>
    )
}

export default Dogs