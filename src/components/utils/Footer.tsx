import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className=" container m-auto">
      <div className=" grid grid-cols-6 gap-4">
        <div className="  col-span-3   ml-4  ">Abir Khan</div>
        <div>01752103786</div>
        <div>abirk2day@gmail.com</div>
        <div className=" flex  justify-evenly">
          <FaGithubAlt size={40} />
          <FaLinkedinIn size={40} />
        </div>
      </div>
      <hr className=" text-gray-500 my-4" />
      <div className="mb-4 flex justify-evenly">
        <div>
          <ul className=" flex gap-3">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div>
          <h2>Designed and built by Pavan MG with Love & Coffee</h2>
        </div>
      </div>
    </section>
  )
}

export default Footer
