import React from 'react'
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }


    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "Yellow" }}>

                    <img className='mx-3' src="https://www.pngmart.com/files/15/Yellow-Best-Buy-Logo-Transparent-PNG.png" width="80" height="50" alt="" />

                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><strong>B-MART</strong></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {auth ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link active" aria-current="page" to="/"><strong>Products</strong></Link>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <Link className="nav-link active" aria-current="page" to="/add"><strong>AddProduct</strong></Link>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <Link className="nav-link active" aria-current="page" to="/update"><strong>UpdateProduct</strong></Link>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link active" aria-current="page" to="/profile"><strong>UserProfile</strong></Link>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <Link className="nav-link active" to="/signup" onClick={logout}><strong>Logout : ({JSON.parse(auth).name})  </strong></Link>
                                    </li>

                                </ul>
                                :

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4 ">
                                    <li><Link className="nav-link active mx-2" to="/signup"><strong>SignUp</strong></Link></li>
                                    <li><Link className="nav-link active mx-2" to="/login"><strong>Login</strong></Link></li>
                                </ul>


                            }
                        </div>
                    </div>
                </nav>


            </div>
        </>
    )
}

export default Navbar
