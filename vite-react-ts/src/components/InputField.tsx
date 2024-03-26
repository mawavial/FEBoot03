import React, { ChangeEvent, ReactNode } from 'react'

interface InputFieldProps {
    value: string
    onChange: (value: string) => void
    title?: string
    placeholder?: string
    type: string
}


// function InputField (props: InputFieldProps): ReactNode {
//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         onChange(event.target.value)
//     }

//     return (
//         <div>
//             { title && <label>{ title }</label> }
//             <input type={ type } value={ value } onChange={ handleChange } placeholder={ !title ? placeholder : undefined } />
//         </div>
//     )
// }


const InputField: React.FC<InputFieldProps> = ({ value, onChange, title, placeholder, type }): ReactNode => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div>
            { title && <label>{ title }</label> }
            <input type={ type } value={ value } onChange={ handleChange } placeholder={ !title ? placeholder : undefined } />
        </div>
    )
}

export default InputField


// import React, { ChangeEvent, ReactNode } from 'react'

// interface Props {
//     value: string
//     onChange: (value: string) => void
//     title?: string
//     placeholder?: string
//     type: string
//     children?: ReactNode
// }


// const InputField = (props: Props): ReactNode => {
//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         props.onChange(event.target.value)
//     }

//     return (
//         <div>
//             { props.title && <label>{ props.title }</label> }
//             <input type={ props.type } value={ props.value } onChange={ handleChange } placeholder={ !props.title ? props.placeholder : undefined } />
//             { props.children }
//         </div>
//     )
// }

// export default InputField