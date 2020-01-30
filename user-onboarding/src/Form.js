import React from 'react';
import { withFormik, Form, Field } from 'formik';
import './OBForm.css';

const OBForm = ({values, handleChange}) => {
    return(
        <div>
            Welcome to MyCorp!<br></br>
            Please fill out the form
            <Form className = 'mainForm'>
                <label htmlFor = 'name'>Name</label>
                    <Field
                    id = 'name'
                    type = 'text'
                    name = "name"
                    />
                <label htmlFor = 'email'>Email</label>    
                    <Field
                    id = 'email'
                    type = 'email'
                    name = 'email'
                    />
                <label htmlFor = 'password'>password</label>    
                    <Field
                    id = 'password'
                    type = 'password'
                    name = 'password'
                    />
                <label htmlFor = 'tos'>Agree to the Terms of Service</label>    
                    <Field
                    id = 'tos'
                    type = 'checkbox'
                    name = 'tos'
                    />
                    
                
                <button>Submit!</button>
            </Form>
        </div>

    )
}

const FormikForm = withFormik({mapPropsToValues(name, email, password, tos ){
    return {
        name: name || '',
        email: email || '',
        password: '',
        tos: tos || ''    

    };
}
})(OBForm);
export default FormikForm;