import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaSass,
} from 'react-icons/fa6'
import { SiMongodb, SiTypescript, SiTypst } from 'react-icons/si'

const MySkill = () => {
  const skills = [
    {
      name: 'HTML',
      percentage: 90,
      icon: <FaHtml5 />,
      color: 'blue',
    },
    {
      name: 'CSS',
      percentage: 90,
      icon: <FaCss3 />,
      color: 'blue',
    },
    {
      name: 'JavaScript',
      percentage: 90,
      icon: <FaJs />,
      color: 'yellow',
    },
    {
      name: 'React',
      percentage: 90,
      icon: <FaReact />,
      color: 'blue',
    },
    {
      name: 'Node JS',
      percentage: 90,
      icon: <FaNodeJs />,
      color: 'green',
    },
    {
      name: 'Express',
      percentage: 90,
      icon: <FaNode />,
      color: 'green',
    },
    {
      name: 'MongoDB',
      percentage: 90,
      icon: <SiMongodb />,
      color: 'green',
    },
    {
      name: 'typescript',
      percentage: 90,
      icon: <SiTypescript />,
      color: 'green',
    },
    {
      name: 'Vue JS',
      percentage: 90,
      icon: <FaVuejs />,
      color: 'green',
    },
    {
      name: 'Angular',
      percentage: 90,
      icon: <FaAngular />,
      color: 'green',
    },
    {
      name: 'Sass',
      percentage: 90,
      icon: <FaSass />,
      color: 'green',
    },
  ]

  return (
    <div className=" myskill py-4  ">
      <div className="   container m-auto    ">
        <h1 className=" text-center text-3xl">My Tech Stack</h1>
        <h2 className=" text-center my-4">
          {' '}
          Technologies I’ve been working with recently
        </h2>
        <div className="  grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4  justify-center  ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={` btn w-full      rounded-md     gap-4  cursor-pointer  bg-gradient-to-bl     to-emerald-600  from-blue-500 left-green-500  `}
            >
              <div className=" text-xl text-white">{skill.icon}</div>
              <div className=" text-sm md:text-xl text-white">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MySkill
