import Link from 'next/link'
import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="footer bg-slate-900 border-t-2 border-gray-500 text-white">
      <div className="my-4 container mx-auto flex justify-between items-center">
        <div className=" text-center">
          <p>Md Abir Khan © 2021 All rights reserved</p>
        </div>
        <div className=" text-white flex     justify-between space-x-4">
          <Link href="/" className="text-xl">
            <FaLinkedinIn />
          </Link>
          <Link href="/" className="text-xl">
            <FaGithubAlt />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
