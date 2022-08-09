import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, Button} from "react-bootstrap";

const ManageUsers = (props) => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("You have to enter an invalid email address").required("Required"),
        password: Yup.string().required("Required"),
    });

    console.log(props);
    return (
        <div className="regisForm">
            <Formik {...props} validationSchema={validationSchema}
                    initialValues={{firstName: '', lastName: '', email: '', password: ''}}>
                <Form>
                    <FormGroup className="firstName">
                        First Name:
                        <Field name="firstName" type="text" className="field-control"/>
                        <ErrorMessage name="first" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup className="lastName">
                        Last Name:
                        <Field name="lastName" type="text" className="field-control"/>
                        <ErrorMessage name="last" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup className="email">
                        Email:
                        <Field name="email" type="text" className="field-control"/>
                        <ErrorMessage name="first" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup className="password">
                        password:
                        <Field name="password" type="password" className="field-control"/>
                        <ErrorMessage name="password" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <div className="regisButton">
                        <Button variant="danger" size="lg" block="block" type="submit">
                            {props.children}
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
export default ManageUsers;