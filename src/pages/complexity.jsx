import { useParams, Link } from 'react-router-dom'


const Complexity = () => {
    const { level } = useParams()
    console.log('%c%s', 'color: #ff0000', level)

    return (
        <div>
            <h2>Complexity Level: { level }</h2>
            <p>The level of complexity for this guy is { level }</p>
            <Link to="/">Go back to homepage</Link>
        </div>
    )
}

export default Complexity
