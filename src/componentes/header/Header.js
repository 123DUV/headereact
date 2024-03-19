import React from 'react';
import './header.css'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { HowToReg } from '@mui/icons-material';
import ContactsIcon from '@mui/icons-material/Contacts';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';


function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.png' className='logo' alt='logo' />
                    <a className="navbar-brand" href="#">Navbar</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <SchoolIcon/>
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item">
                                <DensityMediumIcon/>
                                <a className="nav-link disabled" >Referencias</a>
                            </li>
                            <li className="nav-item">
                                <CleanHandsIcon/>
                                <a className="nav-link disabled" >Recursos</a>
                            </li>
                            <li className="nav-item">
                                <ContactsIcon/>
                                <a className="nav-link disabled" >Contactos</a>
                            </li>
                            <li className="nav-item">
                                <HowToRegIcon/>
                                <a className="nav-link disabled" >Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link disabled" >Iniciar Sesion</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header