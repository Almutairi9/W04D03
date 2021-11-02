import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className = "nav">
            <ul>
                <li>
                    <Link to="/Home" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="link">About</Link>
                </li>
                <li>
                    <Link to="/Contact" className="link">Contact</Link>
                </li>
                <li>
                    <Link to="/Cards" className="link">Cards</Link>
                </li>
                <li> 
                    <Link to="/Card" className="link">Card</Link> 
                </li>
            </ul>

        </div>
    )
}
 
export default Nav;