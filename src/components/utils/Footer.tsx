import Link from 'next/link'
import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className=" bg-slate-900  ">
      <div className="  container max-auto flex  h-24  justify-evenly items-center w-full text-white border-t-2 ">
        <div>
          <p className="text-xs"> Abir khan @copyright 2024</p>
        </div>
        <div className="flex   ">
          <Link
            href="
          "
            className=" mr-5"
          >
            <FaGithubAlt size={30} />
          </Link>
          <Link href=" ">
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
