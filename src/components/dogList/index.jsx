import "./style.css"
import DogCard from "../dogCard"
import { v4 as uuidv4 } from 'uuid';


function DogList (props){

    const {dogList} = props


    return(
        <div className="dogList">
            {dogList.map((elem) => 
                <DogCard key={uuidv4()} img={elem}/>
            )}
        </div>
    )
}

export default DogList