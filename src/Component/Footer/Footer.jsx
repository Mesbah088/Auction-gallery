import React from 'react';


const Footer = () => {
    return (
        <div>
            

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
        
    );
};

export default Footer;