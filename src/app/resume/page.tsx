import React from 'react'
import { FaGitAlt, FaLink } from 'react-icons/fa6'

const ResumePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8 flex justify-center  ">
        <div className=" ">
          <p className=" text-5xl font-bold uppercase text-center">Abir Khan</p>
          <p> JavaScript Developer | Web Developer</p>
          <p>
            <span className=" cursor-pointer ">abirk2day@gmail.com</span> |
            01752103786{' '}
          </p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold my-4">Career Objective</h2>
        <h4>
          As a dedicated MERN stack developer with 1 year of hands-on experience
          and a portfolio boasting 5 successfully executed projects, my career
          objective is to leverage my expertise in full-stack development to
          contribute effectively to innovative tech projects. I aim to
          continually enhance my skills, collaborate with talented teams, and
          deliver high-quality solutions that drive user satisfaction and
          business growth. My goal is to be an integral part of dynamic projects
          where I can apply my knowledge and passion for coding to create
          impactful digital experiences.
        </h4>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-4">Projects</h2>
        <div>
          <h2 className="my-1  font-semibold">University Managment Backend</h2>
          <h2>Duration [may-2023 - april-2024]</h2>
          <h2 className="my-2">
            <ul className="  list-inside  ">
              <li className=" list-disc ">User can login and register</li>
              <li className=" list-disc ">all handel Admin</li>
              <li className=" list-disc ">user is fuking gay</li>
              <li className=" list-disc ">User can login and register</li>
            </ul>
          </h2>
          <div className="my-2">
            <h1>Tacnology</h1>
            <p>
              <strong>Fontend</strong>: React, Redux, Tailwind CSS, Material UI,
              Styled Components, JavaScript, HTML, CSS <br />{' '}
              <strong>Backend</strong>: Node.js, Express.js, MongoDB, Mongoose,
              RESTful APIs, JWT, Bcrypt, Nodemailer, Multer,
            </p>
          </div>
          <div className="my-2">
            <button className=" btn btn-xs btn-ghost ">
              live
              <FaLink size={20} />
            </button>
            <button className="btn btn-xs btn-ghost ">
              github
              <FaGitAlt size={20} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="my-1  font-semibold">University Managment Backend</h2>
          <h2>Projects Duaction [ may-2023 - april-2024]</h2>
          <h2 className="my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            expedita facilis saepe. Minima repellendus ducimus optio, earum
            iste, ratione quae tenetur ipsum sint assumenda cupiditate, soluta
            dolores harum maxime nemo!
          </h2>
          <div className="my-2">
            <h1>Tacnology</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nostrum. Numquam iure inventore modi. Enim qui placeat similique
              mollitia fuga voluptate cupiditate sit ipsa odio modi, assumenda
              expedita eaque rerum!
            </p>
          </div>
          <div className="my-2">
            <button className=" btn btn-xs btn-ghost ">
              live
              <FaLink size={20} />
            </button>
            <button className="btn btn-xs btn-ghost ">
              github
              <FaGitAlt size={20} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="my-1  font-semibold">University Managment Backend</h2>
          <h2>Duration [ may-2023 - april-2024]</h2>
          <h2 className="my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            expedita facilis saepe. Minima repellendus ducimus optio, earum
            iste, ratione quae tenetur ipsum sint assumenda cupiditate, soluta
            dolores harum maxime nemo!
          </h2>
          <div className="my-2">
            <h1>Tacnology</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nostrum. Numquam iure inventore modi. Enim qui placeat similique
              mollitia fuga voluptate cupiditate sit ipsa odio modi, assumenda
              expedita eaque rerum!
            </p>
          </div>
          <div className="my-2">
            <button className=" btn btn-xs btn-ghost ">
              live
              <FaLink size={20} />
            </button>
            <button className="btn btn-xs btn-ghost ">
              github
              <FaGitAlt size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold">Skills</h2>
        MongoDB: Proficient in designing and implementing MongoDB databases,
        including schema design, indexing, and querying. Express.js: Strong
        understanding of Express.js for building robust and scalable server-side
        applications and APIs, including middleware integration and routing.
        React.js: Expertise in developing dynamic and responsive user interfaces
        using React.js, including state management with Redux or Context API.
        Node.js: In-depth knowledge of Node.js for server-side development,
        including event-driven architecture, asynchronous programming, and
        package management with npm or yarn. HTML/CSS: Solid understanding of
        HTML5 and CSS3 for creating visually appealing and accessible web
        applications, including responsive design principles and CSS frameworks
        like Bootstrap or Materialize. JavaScript: Advanced proficiency in
        JavaScript, including ES6+ features, functional programming concepts,
        and error handling. RESTful API Development: Experience in designing and
        consuming RESTful APIs, including authentication, data validation, and
        integration with front-end applications. Git and Version Control:
        Familiarity with Git for version control, including branching, merging,
        and collaborative workflows using platforms like GitHub or Bitbucket.
        Debugging and Testing: Skillful in debugging and testing applications
        using tools like Chrome DevTools, Jest, Mocha, or Chai to ensure code
        reliability and performance. Deployment and DevOps: Knowledge of
        deploying MERN stack applications to cloud platforms like AWS or Heroku,
        as well as familiarity with Docker, CI/CD pipelines, and server
        management
      </div>
    </div>
  )
}

export default ResumePage
