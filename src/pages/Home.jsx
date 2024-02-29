import React from 'react'
import Register from '../template/Register'

const Home = () => {

    const [ values, setValues ] = React.useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <Register onChange={ onChange } onSubmit={ onSubmit } values={ values } />
    )

}


export default Home