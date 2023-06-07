//used command "rafc" and it just added this react snippet automatically

import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='shopTitle'>
                <h1>The Berry Patch</h1>
            </div>
            <div className='links'>
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={20} />
                </Link>
            </div>
        </div>
    )
}
