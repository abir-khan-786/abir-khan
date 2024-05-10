import Image from 'next/image'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

const Projects = () => {
  type Project = {
    id: number
    name: string
    description: string
    tech: string[]
    image: string
    live: string
    github: string
  }

  const projects: Project[] = [
    {
      id: 1,
      name: 'Make Mony Service',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum debitis fugiat eos, ad ipsam ipsa molestiae dicta. Doloribus pariatur impedit explicabo at unde similique ea ullam perferendis recusandae laudantium.',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
      image:
        'https://img.freepik.com/free-vector/construction-landing-page_23-2148181047.jpg?t=st=1715319403~exp=1715323003~hmac=42b8aa0a773e7b2d13b7e1bf9b15b5f8dfb22c0ab5a453908c836011592ed5c0&w=826',
      live: 'https://github.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      name: 'Project 2',

      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum debitis fugiat eos, ad ipsam ipsa molestiae dicta. Doloribus pariatur impedit explicabo at unde similique ea ullam perferendis recusandae laudantium.',
      tech: [
        'React',
        'Node',
        'Express',
        'MongoDB',
        'Node',
        'Express',
        'MongoDB',
        'typescript',
        'mongos',
      ],
      image:
        'https://img.freepik.com/free-vector/pharmacy-landing-page_23-2148170460.jpg?w=740&t=st=1715322777~exp=1715323377~hmac=97caa09bb919c74b679bfd3c9194d46758d73d594a16b17b840301848d28bb1e',

      live: 'https://github.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      name: 'Project 3',

      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum debitis fugiat eos, ad ipsam ipsa molestiae dicta. Doloribus pariatur impedit explicabo at unde similique ea ullam perferendis recusandae laudantium.',
      tech: ['React', 'Node', 'Express', 'MongoDB', 'typescript'],
      image:
        'https://img.freepik.com/free-vector/construction-landing-page_23-2148181047.jpg?t=st=1715319403~exp=1715323003~hmac=42b8aa0a773e7b2d13b7e1bf9b15b5f8dfb22c0ab5a453908c836011592ed5c0&w=826',
      live: 'https://github.com',
      github: 'https://github.com',
    },
    {
      id: 4,
      name: 'Project 4',

      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum debitis fugiat eos, ad ipsam ipsa molestiae dicta. Doloribus pariatur impedit explicabo at unde similique ea ullam perferendis recusandae laudantium.',
      tech: [
        'React',
        'Node',
        'Express',
        'MongoDB',
        'typescript',
        'mongos',
        'Node',
        'Express',
        'MongoDB',
        'typescript',
        'mongos',
      ],
      image:
        'https://img.freepik.com/free-vector/construction-landing-page_23-2148181047.jpg?t=st=1715319403~exp=1715323003~hmac=42b8aa0a773e7b2d13b7e1bf9b15b5f8dfb22c0ab5a453908c836011592ed5c0&w=826',
      live: 'https://github.com',
      github: 'https://github.com',
    },
  ]

  return (
    <section className=" container m-auto">
      <h2 className=" text-3xl text-center my-4 capitalize">
        Things I’ve built so far
      </h2>

      <div>
        <ul className=" menu menu-vertical lg:menu-horizontal   rounded-box">
          <li className="">
            <a
              href="#"
              className="btn btn-ghost bg-purple-700 hover:bg-purple-500  mr-2"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn btn-ghost border    hover:bg-purple-500  border-pink-400 mr-2"
            >
              App Development
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" btn btn-ghost border    hover:bg-purple-500  border-pink-400 mr-2"
            >
              Web development
            </a>
          </li>
        </ul>
      </div>
      <div className=" grid grid-cols-3 my-4  gap-5">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className=" card      rounded-md  hover:shadow-xl  cursor-pointer   "
          >
            <div className=" card-body  ">
              <div className="  h-72  flex justify-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={500}
                  width={500}
                  className=" shadow-md rounded-lg"
                />
              </div>
              <div className=" card-title">
                <h2 className="  ">{project.name}</h2>
              </div>
              <div>
                <p>{project.description.slice(0, 85)}.......</p>
                <p className=" text-black font-semibold my-2">Tools</p>
                <div className="  grid  grid-cols-4  gap-4">
                  {project.tech.map((t) => (
                    <div
                      key={t}
                      className="  border  border-violet-700  w-20  text-center rounded-md"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="  card-actions my-2">
                <ul className=" flex flex-row justify-between w-full ">
                  <li>
                    <a href={project.github}>
                      <FaGithub color="gray" size={20} />
                    </a>
                  </li>
                  <li>
                    <a href={project.live}>
                      <FaLink color=" #430795" size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
