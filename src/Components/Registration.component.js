import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';



const RegisUser = () => {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();



    const [formValues, setFormValues] =
        useState({ firstName: '', lastName: '', email: '', password: '' })
    
    const onSubmit = accountObject => {
        axios
            .post('http://localhost:4000/users/create-user', accountObject)
            .then(res => {
                if (res.status === 200){

                
               
              
    
                  navigate("/emailVerification")
                }
              
                   
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong1313'))

    }
    return (
        <SignUpForm initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            {t('login.register')}
            
        </SignUpForm>
    )
}

export default RegisUser