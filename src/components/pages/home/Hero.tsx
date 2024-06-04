'use client'

import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className=" container m-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center   ">
        <div className=" ">
          <h1 className="text-3xl">
            {' '}
            Hello <span className="   animate-pulse   ">👋</span>
          </h1>
          <h1 className="text-6xl font-bold ">Abir Khan</h1>
          <Typewriter
            words={['Full Stack Developer', 'MERN Stack Developer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <div className="   ">
          <Image
            src={{
              src: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1715186969~exp=1715190569~hmac=bfc63fa7064c5e39981e9c33f0b4a9db11ded3562a3c5f74fccbede0d9ef3544&w=826',
              width: 606,
              height: 620,
            }}
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
