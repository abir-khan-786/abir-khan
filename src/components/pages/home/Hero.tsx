'use client'

import Image from 'next/image'
import React from 'react'
import { FaDownLong, FaLink } from 'react-icons/fa6'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    // <div className=" container m-auto">
    //   <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center   ">
    //     <div className=" ">
    //       <h1 className="text-3xl">
    //         {' '}
    //         Hello <span className="   animate-pulse   ">👋</span>
    //       </h1>
    //       <h1 className="text-6xl font-bold ">Abir Khan</h1>
    //       <Typewriter
    //         words={['Full Stack Developer', 'MERN Stack Developer']}
    //         loop={0}
    //         cursor
    //         cursorStyle="_"
    //         typeSpeed={70}
    //         deleteSpeed={50}
    //         delaySpeed={1000}
    //       />
    //     </div>

    //     <div className="   ">
    //       <Image
    //         src={{
    //           src: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1715186969~exp=1715190569~hmac=bfc63fa7064c5e39981e9c33f0b4a9db11ded3562a3c5f74fccbede0d9ef3544&w=826',
    //           width: 606,
    //           height: 620,
    //         }}
    //         alt="hero"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1715186969~exp=1715190569~hmac=bfc63fa7064c5e39981e9c33f0b4a9db11ded3562a3c5f74fccbede0d9ef3544&w=826"
          width={500}
          height={500}
          alt="abir "
        />
        <div>
          <h1 className="text-5xl font-bold">
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
          <button className=" brand-btn btn  btn-ghost  border border-white   btn-sm   mr-2  ">
            Hire Me <FaLink />
          </button>
          <button className=" brand-btn btn  btn-ghost  border border-white  btn-sm">
            Download Resume <FaDownLong />{' '}
          </button>
        </div>
      </div>
      <div className="page main-header  flex justify-center items-center  ">
        <main className="animationcontainer w-full  flex justify-between items-center">
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
