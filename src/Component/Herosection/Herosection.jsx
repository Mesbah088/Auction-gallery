
const Herosection = () => {
    return (

        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-start"
            style={{
                backgroundImage: `url('https://i.ibb.co.com/LhQJxcsC/Banner-min.jpg')`, 
            }}
        >
            <div className=" p-8 rounded-md ml-10 max-w-md text-white">
                <h1 className="text-4xl font-bold leading-snug">
                    Bid on Unique Items from <br /> Around the World
                </h1>
                <p className="mt-4 text-gray-300">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                </p>
                <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                    Explore Auctions
                </button>
            </div>
        </div>

    );
};

export default Herosection;