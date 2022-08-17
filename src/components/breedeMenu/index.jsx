import "./style.css"

import chihuahua from "../../images/chihuahua.svg"
import husky from "../../images/husky.svg"
import labrador from "../../images/labrador.svg"
import pug from "../../images/pug.svg"

function BreedMenu (props) {

   const { setBreed } = props

    return(
        <div>
            <ul className="ulMenuDogs">
                <div onClick={() => setBreed('chihuahua')} className="menuDogsItem">
                    <img height={80} src={chihuahua} alt="Chihuahua" />
                    <li className="breedName">Chihuahua</li>
                </div>
                <div onClick={() => setBreed('husky')} className="menuDogsItem">
                    <img height={80} src={husky} alt="Husky" />
                    <li className="breedName">Husky</li>
                </div>
                <div onClick={() => setBreed('labrador')} className="menuDogsItem">
                    <img height={80} src={labrador} alt="Labrador" />
                    <li className="breedName">Labrador</li>
                </div>
                <div onClick={() => setBreed('pug')} className="menuDogsItem">
                    <img height={80} src={pug} alt="Pug" />
                    <li className="breedName">Pug</li>
                </div>
            </ul>
        </div>
    )
}

export default BreedMenu