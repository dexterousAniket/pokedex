import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchBox() {
  return (

    <div className="flex flex-1 items-center bg-gray-300 rounded-lg">

        {/* SEARCH */}
        <div className='flex-1'>
          <input className="w-full bg-gray-300 p-3 pr-0 rounded-l-lg text-sm text-white hover:outline-none" type='text' name="" id="" placeholder="Name or Number" />
        </div>

        {/* ICON */}
        <div className='h-full flex items-center px-2'>
          <IoIosSearch className='text-3xl text-gray-200' />
        </div>

    </div>
  )
}
