import React from 'react'
import {Focus, Search} from "lucide-react";

const NavBar = () => {
  return (
    <>
        <div>
            <div className='px-2 py-1 bg-gray-400 rounded-full'>
                <Search />
                <input type='text' placeholder='Search Photos and Illustrations' />
                <Focus />
            </div>
        </div>
        <nav></nav>
    </>
  )
}

export default NavBar