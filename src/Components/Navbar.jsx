import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

// Export Links

const links = [
    {
        id: 1,
        link: 'explore'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contact'
    },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <nav className='flex justify-between
        items-center w-full h-20 px-4
        text-white bg-black fixed'>

            <div>
                <h1 className='text-4xl
                font-signature ml-2'>Gray</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <Link to={link} smooth duration={500} >
                    <li
                        key={id}
                        className='px-4
                    cursor-pointer capitalize
                    text-gray-300 font-medium
                    hover:scale-110
                    duration-200'>{link}
                    </li>
                    </Link>
                ))}
            </ul>
            {/* Application od UseState
            on a Navigation Bar */}
            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer
                pr-4 z-10 text-gray-300 md:hidden'>
                {nav ? <FaTimes size={30} /> :
                    <FaBars size={30} />}
            </div>

            {nav && (


                <ul className='flex flex-col
            justify-center left-0 items-center
            absolute top-0 w-full h-screen
            bg-gradient-to-b bg-black text-gray-300'>

                    {links.map(({ id, link }) => (

                        <li
                            key={id}
                            className='
                    px-4 cursor-pointer
                    capitalize py-3
                    font-medium text-gray-300
                    hover:scale-105
                    duration-200'>{link}</li>

                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar