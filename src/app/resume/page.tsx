import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { FaGitAlt, FaLink } from 'react-icons/fa6'
import { Document, Page, pdfjs } from 'react-pdf'

const ResumePage = () => {
  return (
    <div className=" bg-white">
      <div className="container mx-auto px-4">
        <div className="my-8 flex justify-center  ">
          <div className=" ">
            <p className=" text-5xl font-bold uppercase text-center">
              Abir Khan
            </p>
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
            As a dedicated MERN stack developer with 1 year of hands-on
            experience and a portfolio boasting 5 successfully executed
            projects, my career objective is to leverage my expertise in
            full-stack development to contribute effectively to innovative tech
            projects. I aim to continually enhance my skills, collaborate with
            talented teams, and deliver high-quality solutions that drive user
            satisfaction and business growth. My goal is to be an integral part
            of dynamic projects where I can apply my knowledge and passion for
            coding to create impactful digital experiences.
          </h4>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold my-4">Skills</h2>
          <h4>
            <strong>MERN Stack Development:</strong> Proficient in using
            MongoDB, Express.js, React.js, and Node.js to develop full-stack web
            applications.
          </h4>
          <h4>
            <strong>Front-End Development:</strong> Skilled in creating
            responsive and dynamic user interfaces using React.js, Redux,
            JavaScript, HTML, and CSS.
          </h4>
          <h4>
            <strong>Back-End Development:</strong> Experienced in building
            RESTful APIs, handling authentication, and managing databases with
            Node.js and Express.js.
          </h4>
          <h4>
            <strong>Database Management:</strong> Strong understanding of
            MongoDB, Mongoose, and data modeling for efficient database design
            and querying.
          </h4>
          <h4>
            <strong> Version Control:</strong> Proficient in using Git for
            version control, branching, and merging code changes in
            collaborative projects.
          </h4>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold my-4">Projects</h2>
          <div>
            <h2 className="my-1  font-semibold">
              University Managment Backend
            </h2>
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
                <strong>Fontend</strong>: React, Redux, Tailwind CSS, Material
                UI, Styled Components, JavaScript, HTML, CSS <br />{' '}
                <strong>Backend</strong>: Node.js, Express.js, MongoDB,
                Mongoose, RESTful APIs, JWT, Bcrypt, Nodemailer, Multer,
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
            <h2 className="my-1  font-semibold">
              University Managment Backend
            </h2>
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
            <h2 className="my-1  font-semibold">
              University Managment Backend
            </h2>
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
          <h2 className="text-2xl font-bold my-4">Education</h2>
          <h4>
            <strong>Bachelor of Science in Computer Science</strong> <br />
            <strong>University of Dhaka</strong> <br />
            <strong>Duration:</strong> 2018-2022
          </h4>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold my-4">Languages</h2>
          <h4>
            <strong>Bangla:</strong> Native <br />
            <strong>English:</strong> Professional Proficiency
          </h4>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold my-4">Certifications</h2>
          <h4>
            <strong>Full-Stack Web Development</strong> <br />
            <strong>Duration:</strong> 2022-2023
          </h4>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold my-4">Hobbies</h2>
          <h4>
            <strong>Reading:</strong> I enjoy reading books on tech, business,
            and self-improvement.
          </h4>
          <h4>
            <strong>Traveling:</strong> I love exploring new places and learning
            about different cultures.
          </h4>
          <h4>
            <strong>Photography:</strong> I have a passion for capturing moments
            and creating visual stories.
          </h4>

          <h4>
            <strong>Music:</strong> Music is my escape, and I enjoy playing the
            guitar in my free time.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ResumePage

// const ResumePage: React.FC = () => {
//   const [numPages, setNumPages] = useState(0)
//   const [pageNumber, setPageNumber] = useState(1)

//   const handlePdfPage = () => {
//     const content = document.getElementById('resume-content')
//     const pdf = new Blob([content.innerHTML], { type: 'application/pdf' })
//     const pdfUrl = URL.createObjectURL(pdf)
//     window.open(pdfUrl)
//   }

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages)
//   }

//   return (
//     <div className="container mx-auto">
//       <div className=" flex justify-end">
//         <button className="btn  btn-ghost  hover:bg-transparent" onClick={handlePdfPage}>
//           <FaFilePdf size={50} />
//         </button>
//       </div>

//       <div className="my-8 flex justify-center" id="resume-content">
//         {/* Your resume content here */}
//       </div>

//       <div className="my-8">
//         <h2 className="text-2xl font-bold my-4">Career Objective</h2>
//         {/* Rest of your resume content */}
//       </div>

//       {/* Rest of your resume content */}

//       <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
//     </div>
//   )
// }

// export default ResumePage
