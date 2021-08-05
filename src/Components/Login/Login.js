import {React, useState} from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {loginAPI} from "../../api/api";
import * as Yup from "yup";

function Login(props) {
    let [isNewAcc, setIsNewAcc] = useState(false)

    return (
        <div>
            {
                !isNewAcc &&
                <div>
                    <LoginForm setIsAuth={props.setIsAuth}/>
                    <button onClick={() => setIsNewAcc(true)}>Create new account</button>
                </div>
            }
            {isNewAcc && "REG"}

        </div>
    );
}

function LoginForm(props) {
    return (
        <Formik
            initialValues={{
                login: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
                login: Yup.string()
                    .required('login is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(2, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
            onSubmit={fields => {
                console.log(fields)
                loginAPI.check(fields.login, fields.password, props.setIsAuth)
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({errors, status, touched}) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="login">First Name</label>
                        <Field name="login" type="text"
                               className={'form-control' + (errors.login && touched.login ? ' is-invalid' : '')}/>
                        <ErrorMessage name="login" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text"
                               className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                        <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"
                               className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                        <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field name="confirmPassword" type="password"
                               className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Enter</button>
                    </div>
                </Form>
            )}
        />
    )
}

export default Login
