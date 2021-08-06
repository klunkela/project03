import React from "react";

function AfterRegisterPage(props) {
    return <div>
        Спасибо за регистрацию.
        <button onClick={() => {
            props.setIsJustRegistered(false)
        }}>Далее</button>
    </div>

}

export default AfterRegisterPage