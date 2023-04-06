import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-zinc-800 px-8 py-2 lg:flex justify-between'>
            <img src="ruqyahbd-logo.png" alt="logo" className='w-32 h-10' />
            <div className='text-white'>
                <ul className='flex gap-12'>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? "active ": "default" }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="./books" className={({isActive})=> isActive ? "active ": "default" }>Books</NavLink>
                    </li>
                    <li>
                        <NavLink to ="./audio" className={({isActive})=> isActive ? "active ": "default" }>Audio</NavLink>
                    </li>
                    <li>
                        <NavLink to ="./blog" className={({isActive})=> isActive ? "active ": "default" }>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="./about" className={({isActive})=> isActive ? "active ": "default" }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to ="./contact" className={({isActive})=> isActive ? "active ": "default" }>Contat Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;