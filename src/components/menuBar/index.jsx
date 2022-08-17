import "./style.css"

import { useNavigate } from 'react-router-dom';

function MenuBar() {

    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.clear()
        navigate("/")
    }

    return(
        <div className="menuBarContainer">
            <button className="btnLogout" onClick={() => handleLogout()}>Sair</button>
        </div>
    )
}

export default MenuBar