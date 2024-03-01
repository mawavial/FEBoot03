import React, { useEffect } from 'react'

const WelcomePage = () => {

    const [ dog, setDog ] = React.useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data =>
                setDog(data.message)
            )
    }, [])

    return (
        <div>
            <h1>Welcome to the Welcome Page</h1>
            <img src={ dog } alt="Random Dog" />
        </div>
    )
}

export default WelcomePage