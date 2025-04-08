import React from 'react';


const Footer = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
                {/* Navbar */}
                <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
                    {/* Logo */}
                    <div className="flex items-center text-2xl font-bold space-x-1">
                        <span className="text-blue-600">Auction</span>
                        <span className="text-yellow-500">Gallery</span>
                    </div>

                    {/* Nav Links */}
                    <ul className="flex space-x-8 text-sm font-medium">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Auctions</li>
                        <li className="hover:text-blue-600 cursor-pointer">Categories</li>
                        <li className="hover:text-blue-600 cursor-pointer">How to works</li>
                    </ul>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-blue-600 hover:text-blue-800">
                            <BellRing size={20} />
                        </button>
                        <img
                            src="https://via.placeholder.com/32"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                </nav>

                {/* Main Content Placeholder */}
                <main className="flex-grow flex items-center justify-center">
                    <h1 className="text-3xl font-semibold text-gray-400">
                        Your content goes here
                    </h1>
                </main>

                {/* Footer */}
                <footer className="flex flex-col items-center justify-center px-4 py-6 text-center border-t border-gray-200 text-sm">
                    <div className="flex items-center text-2xl font-bold space-x-1 mb-2">
                        <span className="text-blue-600">Auction</span>
                        <span className="text-yellow-500">Gallery</span>
                    </div>
                    <p className="mb-2 tracking-wide">
                        Bid. <span className="mx-2">Win.</span> Own.
                    </p>
                    <ul className="flex space-x-6 mb-2">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Auctions</li>
                        <li className="hover:text-blue-600 cursor-pointer">Categories</li>
                        <li className="hover:text-blue-600 cursor-pointer">How to works</li>
                    </ul>
                    <p className="text-gray-500">
                        © 2025 AuctionHub. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;