import "./index.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

function RegisterForm () {

    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('E-mail obrigatório')
            .email('E-mail inválido')
    })

    const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(formSchema)})

    const onSubmit = (data) => {
        axios.post("https://dogbreed-api.q9.com.br/register", data)
            .then((response) => handleSuccess(response.data.user))
            .catch((err) => handleError(err))
    }

    const handleSuccess = (data) => {
        toast.success("Registrado com sucesso!")
        localStorage.setItem('token', data.token)
        navigate("/dogs")
    }

    const handleError = (err) => {
        toast.error("Ops, algo deu errado!")
    }

    return(
        <div className="containerLogin">
            <form onSubmit={handleSubmit(onSubmit)} className='formLogin'>
                <label className="labelLogin">Para continuar, insira seu e-mail</label>
                <input placeholder='E-mail' type="text" {...register('email')}/>
                {errors.email && <span className="errorSpan">{errors.email.message}</span>}
                <button type='submit' className="btnContinue">Continuar</button>
            </form>
        </div>
    )
}

export default RegisterForm