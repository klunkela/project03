import {React, useState} from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import ReactModal from 'react-modal';
import s from './Login.module.css';
function Login(props) {
    let [isNewAcc, setIsNewAcc] = useState(false)

    let handleCloseModal = () => {
        setIsNewAcc(false)
    };
    return (
        <div>
            <button onClick={() => setIsNewAcc(true)}>Create new account</button>
            <LoginForm setIsAuth={props.setIsAuth} setId={props.setId}/>

            {
                isNewAcc &&
                <ReactModal ariaHideApp={false} isOpen={true} onRequestClose={handleCloseModal}>
                    <Register setIsAuth={props.setIsAuth} setId={props.setId} setIsJustRegistered={props.setIsJustRegistered}/>
                </ReactModal>
            }

        </div>
    )
}

export default Login
