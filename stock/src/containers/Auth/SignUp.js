import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'


const SignUpSchema = Yup.object().shape({
    firstName:Yup.string().required('Your first name is required')
    .min(3,'Too short').max(25, 'Too long'),
    lastName: Yup.string().required('Your last name is required')
    .min(3,'Too short').max(25, 'Too long'),
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required.'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),null], 'Password does not match')
    .required('You need to confirm your password.')
})

const SignUp = () =>{
    return (
        <div>
            <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'email',
                password:'password',
                confirmPassword: ''
            }}
            validationSchema={SignUpSchema}
            onSubmit={
                (values, {setSubmitting})=>
                {
                    console.log(values)
                }
            
            }
            >{({isSubmitting, isValid})=>(
                <Form>
                <Field type='firstName'
                       name='firstName'
                       placeholder='Your firstName...' 
                       component={Input}
                       />
                <ErrorMessage name='firstName'/>
                <Field type='lastName'
                       name='lastName'
                       placeholder='Your lastName...' 
                       component={Input}
                       />
                <ErrorMessage name='lastName'/>
                <Field type='email'
                       name='email'
                       placeholder='Your email...' 
                       component={Input}
                       />
                <ErrorMessage name='email'/>
                <Field type='password'
                       name='password'
                       placeholder='Your password...'
                       component={Input} />
                <ErrorMessage name='password'/>
                <Field type='password'
                       name='confirmPassword'
                       placeholder='Your confirmPassword...'
                       component={Input} />
                <ErrorMessage name='confirmPassword'/>


                <Button disabled={!isValid} type="submit">SignUp</Button>
            </Form>
            )}
           
            </Formik>
        </div>
    )
}
export default SignUp