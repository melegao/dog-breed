import "./style.css"
import RegisterForm from "../../components/registerForm"
import cuteDogsLogo from "../../images/cuteDogsLogo.svg"


function Register () {


    return (
        <div className="mainLogin">
            <img height={150} src={cuteDogsLogo} alt="CuteDog"/>
            <RegisterForm />
        </div>
    )
}

export default Register