import React from 'react';
import chestLogo from '../images/chestLogo.png';

const Navbar = () => {
    return (
        <nav className="w-full bg-opacity-80 backdrop-filter backdrop-blur-lg bg-blue-900 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img
                    src={chestLogo}
                    alt="logo"
                    className="w-32 cursor-pointer"
                />
            </div>
            <div>
                <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
