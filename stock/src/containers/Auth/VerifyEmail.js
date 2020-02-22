import React from 'react'
import {connect} from 'react-redux'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import authReducer from '../../store/reducers/authReducer'

const VerifyEmail = ({sendVerification}) =>{
    return (
        <div>
            Verify your email.
            You are not verified.
            <Button onClick={()=>sendVerification()}>Re-send verification email</Button>
        </div>
    )
}

const mapStateToProps = ({auth})=>({
    loading: auth.verifyEmail.loading, 
    error: auth.verifyEmail.error
    
})
const mapDispatchToProps={
    sendVerification:actions.verifyEmail
}

export default connect(mapStateToProps,mapDispatchToProps)(VerifyEmail)