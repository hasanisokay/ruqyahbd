import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    return (
        <div className=''>
            <div className='bg-zinc-800  px-8 py-2 flex justify-between relative'>
                <Link to="/"><img src="ruqyahbd-logo.png" alt="logo" className='w-32 h-10' /></Link>
                    <ul className='lg:flex gap-12 hidden items-center text-white'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active " : "default"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="./books" className={({ isActive }) => isActive ? "active " : "default"}>Books</NavLink>
                        </li>
                        <li>
                            <NavLink to="./audio" className={({ isActive }) => isActive ? "active " : "default"}>Audio</NavLink>
                        </li>
                        <li>
                            <NavLink to="./blog" className={({ isActive }) => isActive ? "active " : "default"}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="./about" className={({ isActive }) => isActive ? "active " : "default"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="./contact" className={({ isActive }) => isActive ? "active " : "default"}>Contat Us</NavLink>
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setisMenuOpen(true)}
                        >
                            <Bars3BottomLeftIcon className='text-white w-8 h-8'></Bars3BottomLeftIcon>
                        </button>
                        {
                            isMenuOpen && (

                                <div className=' text-white absolute bg-zinc-800 left-0 w-full top-0 z-10'>
                                    <Link to="/"><img src="ruqyahbd-logo.png" alt="logo" className='w-32 h-10' onClick={()=>setisMenuOpen(false)} /></Link>
                                    <button 
                                    aria-label='Close Menu'
                                    title='Close Menu'
                                    onClick={()=>setisMenuOpen(false)}>
                                        <XMarkIcon className='w-8 h-8'></XMarkIcon>
                                    </button>
                                    <ul className=' space-y-4 items-center' onClick={()=>setisMenuOpen(false)}>
                                        <li>
                                            <NavLink to="/" className={({ isActive }) => isActive ? "active " : "default"}>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="./books" className={({ isActive }) => isActive ? "active " : "default"}>Books</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="./audio" className={({ isActive }) => isActive ? "active " : "default"} >Audio</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="./blog" className={({ isActive }) => isActive ? "active " : "default"}>Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="./about" className={({ isActive }) => isActive ? "active " : "default"}>About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="./contact" className={({ isActive }) => isActive ? "active " : "default"} >Contat Us</NavLink>
                                        </li>
                                    </ul>
                                </div>

                            )
                        }
                    </div>

            </div>

        </div>
    );
};

export default Header;