import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './OBForm.css';

const OBForm = ({values, errors, touched, status}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    

    return(
        <div>
            <h2>Welcome to MyCorp!</h2><br></br>
            Please fill out all fields
            <Form className = 'mainForm'>
                <label htmlFor = 'name'>
                    Name
                    <Field
                    id = 'name'
                    type = 'text'
                    name = "name"
                    placeholder = 'Your Name'
                    />
                    {touched.name && errors.name && (
                     <p className="errors">{errors.name}</p>
                     )}
                </label>
                <label htmlFor = 'email'>
                    Email    
                    <Field
                    id = 'email'
                    type = 'email'
                    name = 'email'
                    placeholder = 'xxx@email.com'
                    />
                    {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                    )}
                </label>
                <label htmlFor = 'password'>
                    password  
                    <Field
                    id = 'password'
                    type = 'password'
                    name = 'password'
                    />
                    {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                    )}
                </label>      
                <label htmlFor = 'tos'>
                    Agree to the Terms of Service   
                    <Field
                    id = 'tos'
                    type = 'checkbox'
                    name = 'tos'
                    checked = {values.tos}
                    />
                    {touched.tos && errors.tos && (
                    <p className="errors">{errors.tos}</p>
                    )}
                    </label> 
                <button type = 'submit'>Submit!</button>
            </Form>
            {users.map(user => {
                return (
                    <ul key = {user.id}>
                        <li>Name: {user.name}</li>
                        <li>eMail: {user.email}</li>
                    </ul>
                );
            })}
        </div>

    );
};

const FormikForm = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name || '',
            email: props.email || '',
            password: props.password || '',
            tos: props.tos || false  

        };
    },

    validationSchema: Yup.object().shape({
       name: Yup.string().required("Name is required"), 
       email: Yup.string().required('Needs to be a valid email'),
       password: Yup.string().required('at least 8 characters')

    }),

    handleSubmit(values, { setStatus, resetForm }) {
        axios
        .post('https://reqres.in/api/users/', values)
        .then(res => {
            console.log('success', res);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }

})(OBForm);
export default FormikForm;