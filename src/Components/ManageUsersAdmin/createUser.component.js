import React, {useState} from "react";
import axios from "axios";
import ManageUsersForm from "./ManageUsersForm";
const CreateUser = () => {
    const [formValues, setFormValues] =
        useState({firstName: '', lastName: '', email: '', password: ''})

    const onSubmit = accountObject => {
        axios
            .post('http://localhost:4000/users/create-user', accountObject)
            .then(res => {
                if (res.status === 200)
                    alert('Registration successful')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))

    }
    return (
        <ManageUsersForm initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            Register
        </ManageUsersForm>
    )
}

export default CreateUser