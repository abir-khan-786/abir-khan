import Image from 'next/image'
import React from 'react'
import { FaLink } from 'react-icons/fa6'

const BlogPages = () => {
  return (
    <section className=" bg-slate-900     ">
      <h2 className="   text-center py-8 text-3xl font-bold capitalize text-yellow-600">
        Recent Publicsd Blogs
      </h2>
      <div className=" container mx-auto">
        <div className=" grid py-4 grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item, index) => (
            <div
              className="card      bg-gradient-to-tr to-emerald-500 from-blue-600    shadow-xl"
              key={index}
            >
              <figure>
                <Image
                  src="/images.png"
                  alt="random"
                  width={100}
                  height={100}
                  className="    my-4  mx-4 rounded-md  w-full h-32      "
                />
              </figure>
              <div className="card-body  ">
                <h2 className="card-title text-white">How To Replece String</h2>
                <p className=" text-white text-sm">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-end">
                  <button className=" brand-btn btn border-none btn-sm">
                    <FaLink />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPages
