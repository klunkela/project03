import {React, useState} from "react";
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";

function Wrapper() {
    let [isAuth, setIsAuth] = useState(false)
    return (
        <div>
            {isAuth && <Content/>}
            {!isAuth && <Login setIsAuth={setIsAuth}/>}
        </div>
    );
}

export default Wrapper;