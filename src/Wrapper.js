import {React, useState} from "react";
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";
import AfterRegisterPage from "./Components/Content/AfterRegisterPage";

function Wrapper() {
    let [isAuth, setIsAuth] = useState(false)
    let [isJustRegistered, setIsJustRegistered] = useState(false)
    let [id, setId] = useState(0)

    return (
        <div>
            {isJustRegistered && <AfterRegisterPage id={id} setIsJustRegistered={setIsJustRegistered}/>}
            {isAuth && !isJustRegistered && <Content id={id}/>}
            {!isAuth && <Login setIsAuth={setIsAuth} setId={setId} setIsJustRegistered={setIsJustRegistered}/>}
        </div>
    );
}

export default Wrapper;