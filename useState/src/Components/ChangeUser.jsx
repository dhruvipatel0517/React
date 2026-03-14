import React, { useState } from 'react'

const ChangeUser = () => {
    const [Data, setData] = useState({
        photo: "https://i.pinimg.com/736x/77/f0/ef/77f0efbd92fc5489e3c346d7d9de341a.jpg",
        username: "TestUser 1",
        role: "Tester",
        email: "test@gmail.com",
        background:"bg-teal-500"
    });
    //only change username and photo

    function Change() {
        let new_obj = { ...Data };//object copy
        if (Data.username === "Test User 1") {
            new_obj.username = "Test User 2";
            new_obj.photo = "https://i.pinimg.com/736x/12/4a/49/124a49a4b5cf84576763e502db468599.jpg";
            new_obj.background="bg-purple-200";
            setData(new_obj);
        }
        else {
            new_obj.username = "Test User 1";
            new_obj.photo = "https://i.pinimg.com/736x/77/f0/ef/77f0efbd92fc5489e3c346d7d9de341a.jpg";
            new_obj.background="bg-teal-500";

            setData(new_obj);
        }
    }



    return (
        <>
            <section className='flex items-center justify-center mt-20'>
                <div className='w-full h-auto max-w-md px-6 py-4 bg-orange-100 rounded-2xl 
    text-center font-bold shadow-2xl shadow-yellow-300 flex flex-col gap-6'>
                    <img src={Data.photo} alt="not found"
                        className='w-44 h-44 object-cover rounded-full my-5 mx-auto' />
                    <h1 className='text-2xl bg-orange-500 hover:bg-amber-800 text-center px-4 py-1 rounded-2xl'>{Data.username}</h1>
                    <h2 className='text-xl bg-orange-500 hover:bg-amber-800 text-center px-4 py-1 rounded-2xl'>{Data.role}</h2>
                    <p className='text-xl bg-orange-500 hover:bg-amber-800 text-center px-4 py-1 rounded-2xl'>{Data.email}</p>
                    <button className='w-full text-center py-2 px-4 bg-yellow-600 hover:scale-100 hover:bg-teal-800 rounded-3xl ' onClick={Change}>Change User</button>
                </div>
            </section>
        </>

    )
}

export default ChangeUser