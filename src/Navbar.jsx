import {Link, NavLink, useLocation } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = ()=> {
        setIsOpen(!isOpen);
    }
    return ( 
        <>
         {/* <div className="destination-background"></div> */}
        <nav className="navbar">
              
            <div className="nav-logo">
                <Link to= '/'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 2">
                <circle id="Oval" cx="24" cy="24" r="24" fill="white"/>
                <path id="Path" fillRule="evenodd" clipRule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
                </g>
                </svg>
                </Link>
            </div>
            <div className={isOpen ? "drop" : "hamburger drop"} onClick= {toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                </g>
                </svg>
            </div>
            <div className="start"><hr /></div>
            <div className={isOpen ? "open" : "drop not-drop"}>
            <div className={isOpen ? "x drop" : "drop"} onClick= {toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                </g>
                </svg>
            </div>
            <ul className={isOpen ? "mobile-nav-link nav-link" : "drop nav-link"}>
                <CustomLink className = "nav-item first-list" to= '/' style={linkStyle}><span>00</span> Home</CustomLink>
                <CustomLink className="nav-item" to= '/destinationData' style={linkStyle}><span>01</span> Destination</CustomLink>
                <CustomLink className="nav-item" to= '/crew' style={linkStyle}><span>02</span> Crew</CustomLink>
                <CustomLink className="nav-item" to= '/technology' style={linkStyle}><span>03</span> Technology</CustomLink>
            </ul>
            </div>
        </nav>
        </>
     );
}

function CustomLink ({to, children, style, ...rest}){
    const location = useLocation(to)
    const isActive = location.pathname === to;
    console.log(location.pathname);
    return (
        <li className = {isActive ? "active" : " "}>
            
                <NavLink to={to} style={style} {...rest}>
                <div style={{ paddingTop:'31px', paddingBottom:'31px'}}>
                    {children}
                </div>
                </NavLink>
            
        </li>
    )
}






export default Navbar;