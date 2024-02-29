import React from 'react'
import Button from '../components/Button'
import Textfield from '../components/Textfield'
import Form from '../UI/Form'


const Register = ({ onChange, onSubmit, values }) => {
    return (
        <div>
            <h1>Register</h1>
            <Form>
                <Textfield onChange={ onChange } value={ values.username } name="username" placeholder="Username" />
                <Textfield onChange={ onChange } value={ values.email } name="email" placeholder="Email" />
            </Form>
            <Button onClick={ onSubmit } label="Register" />
        </div>
    )
}

export default Register