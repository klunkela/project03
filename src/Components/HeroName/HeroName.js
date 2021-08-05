import React from "react"
import {Formik, Field, Form} from 'formik';
import {useState} from "react";

export const HeroName = (props) => {
    let [isEditMode, setIsEditMode] = useState(false)
    return (
        <div>
            {
                isEditMode &&
                <HeroNameForm setIsEditMode={setIsEditMode} heroName={props.heroName} setHeroName={props.setHeroName}/>
            }
            {
                !isEditMode &&
                <div>
                    {props.heroName}
                    <button type="submit"
                            onClick={() => setIsEditMode(true)}
                    >
                        Изменить имя
                    </button>
                </div>
            }
        </div>
    );
}
const HeroNameForm = (props) => {
    let [localHeroName, setLocalHeroName] = useState(props.heroName)
    let onChangeHandler = (e) => {
        setLocalHeroName(e.target.value);
    }

    return <Formik
        initialValues={{firstName: ''}}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
           // console.log(JSON.stringify(values, null, 2));
            props.setIsEditMode(false)
            props.setHeroName(localHeroName)
        }}
    >
        <Form
            onBlur={
                (e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        props.setIsEditMode(false)
                    }
                }
            }
        >
            <Field
                id="firstName"
                name="firstName"
                value={localHeroName}
                onChange={onChangeHandler}
                placeholder={"props.heroName"}
                autoFocus
            />
            <button type="submit">Сохранить</button>
        </Form>
    </Formik>
}