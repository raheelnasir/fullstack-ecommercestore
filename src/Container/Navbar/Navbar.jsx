import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="center-navbar-main">
                <div className='navbar-first'>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/sale"}>Sale</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Rewards</Link>
                        </li>

                    </ul>
                </div>
                <div className='navbar-second'>
                    <ul>
                        <li>
                            <Link to={"/"}>Help</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar