import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=" container m-auto">
      <div className="flex justify-between items-center    ">
        <div className="  w-1/2  ">
          <h1 className="text-3xl">Hi </h1>
          <h1 className="text-4xl font-bold ">Abir Khan</h1>
          <h4 className="my-4 ">I&apos;m Web developer</h4>
          <h2 className="   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate incidunt amet, quibusdam corrupti fugiat debitis minima
            maiores porro officia ratione eveniet error esse commodi itaque?
            Provident accusantium ipsum necessitatibus?
          </h2>
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
