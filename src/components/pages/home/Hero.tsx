'use client'

import Image from 'next/image'
import React from 'react'
import { FaDownLong, FaLink } from 'react-icons/fa6'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <Image
          src="/abir.png"
          width={400}
          height={400}
          alt="abir "
          className="  hero-image "
        />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            {' '}
            <span className=" animate-pulse">👋</span> Hello I&apos;m Abir Khan
          </h1>
          <p className="py-6">
            <Typewriter
              words={['Full Stack Developer', 'MERN Stack Developer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <button className=" btn  btn-ghost   bg-gradient-to-t  to-indigo-600 from-indigo-900   btn-sm   mr-2  ">
            Hire Me <FaLink />
          </button>
          <button className=" brand-btn btn  btn-ghost   btn-sm">
            Download Resume <FaDownLong />{' '}
          </button>
        </div>
      </div>
      <div className="page  main-header   flex justify-center items-center  ">
        <main className="animationcontainer   w-full flex justify-between items-center">
          <div className="item   ">
            <i className="loader --2"></i>
          </div>
          <div className="item  ">
            <i className="loader --9  "></i>
          </div>
          <div className="item">
            <i className="loader --3"></i>
          </div>

          <div className="item">
            <i className="loader --4"></i>
          </div>
          <div className="item">
            <i className="loader --1"></i>
          </div>
          <div className="item">
            <i className="loader --5"></i>
          </div>

          <div className="item">
            <i className="loader --6"></i>
          </div>
          <div className="item">
            <i className="loader --8"></i>
          </div>
          <div className="item">
            <i className="loader --7"></i>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero
