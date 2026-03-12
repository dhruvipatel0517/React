import React from 'react'

const Card = () => {
    return (
        <>
            <div className='flex gap-20'>
                <div className="card bg-white w-full h-auto max-w-sm rounded-3xl shadow-2xl my-5 mx-6 py-3 px-3">
                    <div className='flex items-start justify-between'>
                        <img src="https://i.pinimg.com/originals/a9/36/af/a936afebaedc416c970c3692fae86838.jpg" alt="Image Not Found" className="rounded-3xl " />
                        <div className="inline-block gap-5">
                            <div className="bg-white/30 rounded-lg inline-block text-sm"><span className="font-bold">Best Seller</span></div>
                            <div className="bg-white/70 rounded-lg inline-block text-sm"><span className="rounded-2xl font-light">NIKE</span></div>
                        </div>
                    </div>

                    <div className="content p-2 my-2">
                        <h2 className="text-2xl font-bold">Nike AirForce1 Premium</h2>
                        <p className="text-xl text-gray-500 font-semibold mt-0 mb-3">Own the Airforce</p>
                        <p className="text-sm text-gray-500 font-medium mb-1">Step back into classic hoops style with a durable leather.</p>
                    </div>

                    <div className="other flex justify-between">
                        <button className="bg-gray-300 font-semibold w-18 h-auto rounded-3xl px-3">$111</button>
                        <button className="bg-black font-semibold w-auto h-10 text-white rounded-3xl px-3">Buy Now </button>
                    </div>
                </div>

                <div className='card bg-white w-auto h-auto max-w-sm rounded-4xl shadow-2xl my-5 mx-6 py-0 px-0'>
                    <div className='flex items-start justify-between'>
                        <img src="https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg" alt="Image Not Found" className='rounded-4xl mt=0' />
                    </div>
                    <div className='bg-white w-full h-auto max-w-sm rounded-none'>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Card
