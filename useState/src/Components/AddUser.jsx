import React, { useState } from 'react'

const AddUser = () => {

    const [Data, setData] = useState([
        { username: "Dhruvi Patel", email: "dhruvipatel@gamil.com" },
        { username: "Palak Vanjara", email: "palakvanjara@gamil.com" },
        { username: "Aditi Kanthariya", email: "aditikanthariya@gamil.com" },
    ]);

    function Add() {
        let new_arr = [...Data];

        new_arr.push({
            username: "Ananya Gupta",
            email: "ananyagupta@gmail.com"
        });

        if (Data[3]?.username === "Ananya Gupta") {
            return console.log("not not")
        }
        setData(new_arr);
    }

    return (
        <>
            <section className='flex flex-wrap items-center gap-6 justify-center my-20 px-8'>
                {Data.map((data, idx) => {
                    console.log(data);
                    return (
                        <div key={idx}>
                            <div className='bg-[#555] rounded-xl w-full h-auto max-w-md px-4 py-2 etxt-center'>
                                <h1 className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{data.username}</h1>
                                <p className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{data.email}</p>
                            </div>
                        </div>)
                })}


                {/* <div className='bg-[#555] rounded-xl w-full h-auto max-w-md px-4 py-2 etxt-center'>
                <h1 className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{Data[1].username}</h1>
                <p className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{Data[1].email}</p>
            </div>

            <div className='bg-[#555] rounded-xl w-full h-auto max-w-md px-4 py-2 etxt-center'>
                <h1 className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{Data[2].username}</h1>
                <p className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-1'>{Data[2].email}</p>
            </div> */}
            </section>
            <button className='bg-orange-400 active:scale-95 mx-w-sm py-2 px-4 rounded-xl translate-x-8/2' onClick={Add}>Add Random User</button>
        </>
    )
}

export default AddUser