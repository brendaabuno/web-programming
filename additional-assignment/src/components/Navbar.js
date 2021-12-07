import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <div> 
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item dropdown">            
                        <a className="nav-link" href="#">Popular Product</a>
                    </li>

                    <li className="nav-item text-center">
                        <a className="nav-link" href="#">Low Price</a>
                    </li>
                
                    <li className="nav-item text-center">
                        <a className="nav-link" href="#">High Price</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar
