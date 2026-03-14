import React from 'react'
import { useState } from 'react'

const Increase = () => {

const [number , setnumber] = useState(0)
// number --> Read Only
// Setnumber --> Write Only (jo number ni value change karvi hoy to setnumber no use karvo)
// console.log(number);

function IncreaseNum(){
  setnumber(number + 1 );
}

function DecreaseNum(){
  if(number !== 0 ) return setnumber(number - 1 );
}

function jump5_forward(){
  setnumber(number + 5);
}

function jump5_backward(){
  if (number >= 5){
    setnumber(number - 5);
  }else{
    setnumber(0);
  }
}

  return (
    <>
      <section className='py-10'>
        <h1 className='text-4xl text-center font-extrabold'>UseState == data that can change (data ne change karvo )</h1>
        <p className='text-2xl py-3 font-bold text-center'>Increase And Decrease Counter</p>
        <div>
          <div className='w-72 h-72 border border-white bg-[#555] text-center text-9xl font-extrabold rounded-xl py-2 px-4 flex items-center justify-center text-[#222] mx-auto'>{number}</div>
        </div>
        <div className='flex justify-center items-center mt-5 gap-5'>
          <button className='bg-[#555] px-4 pt-1 text-center rounded-lg w-54 h-12 text-xl border border-white' onClick={IncreaseNum}>Increase</button>
          <button className='bg-[#555] px-4 pt-1 text-center rounded-lg w-54 h-12 text-xl border border-white' onClick={DecreaseNum}>Decrease</button>
          <button className='bg-[#555] px-4 pt-1 text-center rounded-lg w-54 h-12 text-xl border border-white' onClick={jump5_forward}>Jump 5 Forward</button>
          <button className='bg-[#555] px-4 pt-1 text-center rounded-lg w-54 h-12 text-xl border border-white' onClick={jump5_backward}>Jump 5 Backward</button>
        </div>
      </section>
    </>
  )
}

export default Increase
