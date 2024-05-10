import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaNodeJs,
} from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'

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
  ]

  return (
    <div className=" container m-auto my-4 ">
      <h1 className=" text-center text-3xl">My Tech Stack</h1>
      <h2 className=" text-center my-4">
        {' '}
        Technologies I’ve been working with recently
      </h2>
      <div className="  grid grid-cols-6 gap-4  justify-center">
        {skills.map((skill, index) => (
          <div key={index} className={`  cursor-pointer hover:text-green-500`}>
            <div className=" text-6xl">{skill.icon}</div>
            <div className=" text-xl">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MySkill
