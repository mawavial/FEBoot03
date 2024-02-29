import React from 'react'

const Textfield = ({ onChange, value, name, placeholder }) => {
    return <input type="text" onChange={ onChange } value={ value } name={ name } placeholder={ placeholder } />

}

export default Textfield
