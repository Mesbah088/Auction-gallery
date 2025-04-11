import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the toast CSS

const Activeauction = () => {
    const [datas, setDatas] = useState([]);
    const [cart, setCart] = useState([]);
    const notify = () => toast("Cart added!");

    useEffect(() => {
        fetch("Auctiondata.json")
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    const addToCart = (data) => {
        setCart([...cart, data]);
        notify(); // Fixed: Call the notify function
    };

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.currentBidPrice;
    }, 0);

    const removeCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };

    return (
        <div className='p-6'>
            <div>
                <h1>Active Auctions</h1>
                <h1>Discover and bid on extraordinary items</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-6 '>
                <ul className="list col-span-2 bg-base-100 rounded-box shadow-md">

                    <div className='flex row-auto gap-50'></div>

                    <li className="list-row">
                        <div>Item</div>
                        <div></div>
                        <div>Current Bid</div>
                        <div>Time-left</div>
                        <div>Bid now</div>
                    </li>

                    <div>
                        {
                            datas?.map((data) => (
                                <li key={data?.id} className="list-row">
                                    <div><img className="size-10 rounded-box" src={data?.image} alt={data?.title} /></div>
                                    <div>
                                        <div>{data?.title}</div>
                                    </div>
                                    <div>${data?.currentBidPrice}</div>
                                    <div>{data?.timeLeft}</div>
                                    <button onClick={() => { addToCart(data) }} className="btn btn-square btn-ghost">
                                        <svg className={`size-[1.2em] ${cart.find(c => c.id === data.id) ? 'bg-red-500' : 'text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <ToastContainer />
                                </li>
                            ))
                        }
                    </div>
                </ul>

                <div className="col-span-1 ">
                    <div className='w-full mx-auto bg-white rounded-2xl shadow-md p-4 border border-gray-200 text-center'>
                        <h2 className="text-blue-800 font-semibold flex items-center justify-center gap-2 mb-4">
                            <span>♡</span> Favorite Items
                        </h2>
                        {
                            cart.length ? (
                                <div className='gap-4 flex flex-col justify-center'>
                                    {
                                        cart?.map(c => (
                                            <div key={c?.id}>
                                                <div className='flex justify-end '>
                                                    <button onClick={() => { removeCart(c.id) }} className='cursor-pointer text-black'>x</button>
                                                </div>
                                                <li className="flex gap-4 text-black mb-4">
                                                    <div><img className="size-10 rounded-box" src={c?.image} alt={c?.title} /></div>
                                                    <div>
                                                        {c?.title}
                                                        <div className='flex gap-4'>
                                                            <div>${c?.currentBidPrice}</div>
                                                            <div>${c?.bidsCount}</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <hr />
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div>
                                    <p className="text-gray-800 font-medium text-lg mb-1">No favorites yet</p>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Click the heart icon on any item <br /> to add it to your favorites
                                    </p>
                                </div>
                            )
                        }
                        <div className="border-t pt-4 flex justify-between text-sm text-gray-700 font-medium">
                            <span>Total bids Amount</span>
                            <span className="font-bold text-black">${totalPrice && totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activeauction;
