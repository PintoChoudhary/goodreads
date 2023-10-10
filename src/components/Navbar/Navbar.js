import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const [loggedIn, SetLoggedIn] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token');
                if (token) {
            SetLoggedIn(true);
        } else {
            SetLoggedIn(false);
        }
    }, []);
    const logoutHandler = () => {
        localStorage.clear()
        SetLoggedIn(false)
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">BookRead</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                </ul>
                    <div className='form-inline my-2 my-lg-0'>
                        {loggedIn ? (
                            <Link onClick={logoutHandler} className='btn btn-block btn-danger'>Log out</Link>
                        ):(
                            <Link to='/login' className='btn btn-block btn-primary'>Log in</Link>
                        )}
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
