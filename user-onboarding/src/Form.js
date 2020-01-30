import React from 'react';
import { withFormik, Field } from 'formik';

const Form = ({values, handleChange}) => {
    return(
        <div>
            This is my initial Form
            <Form>
                <label htmlFor='name'>Name</label>
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
        password: password || '',
        tos: tos || ''    

    };
}
})(Form);
export default FormikForm;