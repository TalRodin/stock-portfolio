import React, {useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'
import Message from '../../components/UI/Message'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required.')
    .min(8,'Too short.'),

})



const Login = ({login, loading, error, cleanUp}) =>{
    useEffect(()=>{
        return ()=>{
            cleanUp()
        }
    },[cleanUp])
    return (
        <div>
            <Formik
            initialValues={{
                email:'email',
                password:'password'
            }}
            validationSchema={LoginSchema}
            onSubmit={ async (values, {setSubmitting})=>
                {
                    await login(values)
                    setSubmitting(false)
                }
            
            }
            >{({isSubmitting, isValid})=>(
                <Form>
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
                <Button disabled={!isValid || isSubmitting} 
                        loading={loading ? 'Logging in...': null}
                        type="submit">
                    Login
                </Button>
                <Message >{error}</Message>
            </Form>
            )}
           
            </Formik>
        </div>
    )
}

const mapStateToProps = ({auth}) =>({
    loading:auth.loading,
    error: auth.error
})
const mapDispatchToProps ={
    login: actions.signIn,
    cleanUp: actions.clean
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)