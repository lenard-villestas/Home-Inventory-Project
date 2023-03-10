import React, { useState } from "react";
import axios from "axios";
import LogInPageMaster from "./LogInPageMaster";
import { useTranslation} from 'react-i18next';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let navigate = useNavigate();

  const { t} = useTranslation();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (accountObject) => {
    axios
      .post("http://localhost:4000/users/login", accountObject)
      .then((res) => {
        if (res.status === 200) {
            alert("Login successful!!");

            localStorage.setItem('user',JSON.stringify(res.data));

            console.log(res.data);


            
            window.location.reload(false);
          //navigate('/inventory');
        }  else Promise.reject();
    })
    .catch((err) => {
        if (err.response) {
            alert("Invalid Credentials or Unverified Account");
        } else
        alert("Something went wrong")});
};

    return (
        <LogInPageMaster initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            {t('navbar.login')}
        </LogInPageMaster>
    );
}
export default LogIn;
