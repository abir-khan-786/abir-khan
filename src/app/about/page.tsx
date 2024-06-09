import Link from 'next/link'
import React from 'react'
import RootLayout from '../layout'

const AboutPages = () => {
  return (
    <div className=" bg-white">
      <div className=" container m-auto   ">
        <div className="my-4">
          <h2 className="text-3xl font-bold text-center  ">About Me</h2>
          <h2>
            As a dedicated MERN stack developer with 1 year of hands-on
            experience and a portfolio boasting 5 successfully executed
            projects, my career objective is to leverage my expertise in
            full-stack development to contribute effectively to innovative tech
            projects. I aim to continually enhance my skills, collaborate with
            talented teams, and deliver high-quality solutions that drive user
            satisfaction and business growth. My goal is to be an integral part
            of dynamic projects where I can apply my knowledge and passion for
            coding to create impactful digital experiences.
          </h2>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center my-4">
            Education Background
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2017-2021</time>
                <div className="text-lg font-black">
                  Bachelor of Social Science
                </div>
                <strong>
                  Department of Social Work, National University, Bangladesh.{' '}
                </strong>
                <h2>CGPA:2.75</h2>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2024</time>
                <div className="text-lg font-black">Free Code camp</div>
                <strong>
                  JavaScript Algorithms and Data Structures (Beta)
                </strong>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2024</time>
                <div className="text-lg font-black">Web Developer </div>
                <strong>
                  Web Development Courses, Programming hero , Bangladesh
                </strong>
                <h4>Grade: 53(Average 60)</h4>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPages
