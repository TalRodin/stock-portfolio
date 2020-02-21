import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required'),
    password: Yup.string()
    .required('The password is required.'),

})



const Login = () =>{
    return (
        <div>
            <Formik
            initialValues={{
                email:'email',
                password:'password'
            }}
            validationSchema={LoginSchema}
            onSubmit={
                (values, {setSubmitting})=>
                {
                    console.log(values)
                }
            
            }
            >{({isSubmitting, isValid})=>(
                <Form>
                <Field type='email'
                       name='email'
                       placeholder='Your email...' />
                <ErrorMessage name='email'></ErrorMessage>
                <Field type='password'
                       name='password'
                       placeholder='Your password...' />
                <ErrorMessage name='password'></ErrorMessage>
            </Form>
            )}
           
            </Formik>
        </div>
    )
}
export default Login