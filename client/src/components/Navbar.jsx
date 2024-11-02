import React from 'react';
import chestLogo from '../../images/chestLogo.png';

const Navbar = () => {
    return (
        <nav className="w-full bg-opacity-80 backdrop-filter backdrop-blur-lg bg-slate-950 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img
                    src={chestLogo}
                    alt="logo"
                    className="w-32 cursor-pointer"
                />
            </div>
            <div>
                <button className="text-white bg-emerald-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-emerald-900">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
