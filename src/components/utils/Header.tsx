import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=" bg-black   ">
      <div className="navbar  container m-auto     ">
        <div className="  ">
          <Link href="/" className="  text-xl     ">
            <Image
              src={'/abirkhan.png'}
              height={30}
              width={50}
              alt="abir khan"
              className="   rounded-full    hover:shadow-lg border-2 border-white"
            />
          </Link>
        </div>
        <div className="   aria-hidden:hidden  ">
          <ul className="menu menu-horizontal px-1    text-white  flex justify-center items-center ">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/resume'}>Resume</Link>
            </li>
            <li>
              <Link href={'/projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact </Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog </Link>
            </li>
            <li>
              <a>
                <label className="swap swap-rotate">
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
