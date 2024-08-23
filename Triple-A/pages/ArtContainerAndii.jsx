import { Link } from "react-router-dom"

const ArtContainer = () => {
    return (
        <>
            <h1>Art</h1>
            <ul>
                <li><Link to="194155">Art Example 194155</Link></li>
                <li><Link to="2">Art Example 2</Link></li>
                <li><Link to="3">Art Example 3</Link></li>
            </ul>
        </>
    )
}

export default ArtContainer