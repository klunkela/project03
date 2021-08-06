import React, {useEffect, useState} from "react";
import {userAPI} from "../../api/api";
import Preloader from "../Preloader/Preloader";

function Content(props) {
    let [userData, setUserData] = useState({})

    useEffect(() => {
        userAPI.getLogin(props.id).then(res => {
            setUserData(res.data)
        })
    }, []);

    return <div>
        {
            userData.login && userData.email &&
            <div>
                id - {props.id}
                <br/>
                login - {userData.login}
                <br/>
                email - {userData.email}
            </div>
        }
        {
            (!userData.login || !userData.email) &&
            <Preloader/>
        }
    </div>
}


export default Content;