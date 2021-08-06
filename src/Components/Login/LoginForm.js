import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {loginAPI} from "../../api/api";
import {React} from "react";

function LoginForm(props) {
    return (
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                login: Yup.string()
                    .required('login is required'),
                password: Yup.string()
                    .min(2, 'Password must be at least 6 characters')
                    .required('Password is required')
            })}
            onSubmit={fields => {
                loginAPI.check(fields.login, fields.password, props.setIsAuth, props.setId)
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
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"
                               className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                        <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Enter</button>
                    </div>
                </Form>
            )}
        />
    )
}

export default LoginForm