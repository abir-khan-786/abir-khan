import React from 'react'
import { FaMailBulk, FaSeedling, FaSms } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div className="  bg-slate-900    text-white  ">
      <div className="text-center  py-4 px-4">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-white">Feel free to contact us</p>
      </div>
      <div className="flex justify-center items-center px-4  ">
        <div className=" form-control w-full md:w-1/2">
          <div>
            <label htmlFor="" className=" label">
              Enter Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="   input    w-full bg-gray-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="" className=" label">
              Subjects
            </label>
            <input
              type="text"
              placeholder=" Subjects "
              className=" input w-full bg-gray-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="" className=" label">
              Enter Massage
            </label>
            <input
              type="text"
              placeholder="Massage"
              className=" input h-24 w-full  bg-gray-500 text-white"
            />
          </div>
          <button className=" btn  mt-4 my-4   brand-btn border-none w-full ">
            {' '}
            sent <FaSeedling />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
