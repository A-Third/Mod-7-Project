import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="Nav">
            <ul className="NavUL">
                <h2>Triple-A Art Exhibit</h2>
                <li className="NavLI"><Link to="/">Home</Link></li>
                <li className="NavLI"><Link to="/about">About</Link></li>
                <li className="NavLI"><Link to="/location">Location</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar