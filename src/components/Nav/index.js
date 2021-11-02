import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
    return (
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
            </ul>
    )
}
export default Nav;

