'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsFillMenuButtonWideFill } from 'react-icons/bs'

const Header = () => {
  const pathname = usePathname()

  const listItems = (
    <ul className="menu menu-horizontal px-1  navbarEffects  text-white  flex justify-center items-center ">
      <li>
        <Link
          className={`${
            pathname === '/'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2          '
              : ''
          }`}
          href={'/'}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === '/resume'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
              : ''
          }`}
          href={'/resume'}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === '/projects'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
              : ''
          }`}
          href={'/projects'}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === '/about'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
              : ''
          }`}
          href={'/about'}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === '/contact'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
              : ''
          }`}
          href={'/contact'}
        >
          Contact{' '}
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === '/blog'
              ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
              : ''
          }`}
          href={'/blog'}
        >
          Blog{' '}
        </Link>
      </li>
    </ul>
  )

  const hoverItem = (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost  ">
        <BsFillMenuButtonWideFill size={30} color="white" />
      </div>
      <ul className="   dropdown-content z-[1] menu p-2 shadow   bg-white rounded-box w-52">
        <li>
          <Link
            className={`${
              pathname === '/'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2          '
                : ''
            }`}
            href={'/'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/resume'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
                : ''
            }`}
            href={'/resume'}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/projects'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
                : ''
            }`}
            href={'/projects'}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/about'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
                : ''
            }`}
            href={'/about'}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/contact'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
                : ''
            }`}
            href={'/contact'}
          >
            Contact{' '}
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/blog'
                ? '   border-indigo-700  transform translate-y-1     delay-75   font-bold  text-yellow-600  border-b-2  mr-2        '
                : ''
            }`}
            href={'/blog'}
          >
            Blog{' '}
          </Link>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="   bg-slate-900">
      <div className="navbar  container m-auto     ">
        <div className="  flex-1   ">
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
        <div className="   hidden md:block  aria-hidden:hidden  ">
          {listItems}
        </div>
        <div className="  block md:hidden  aria-hidden:hidden  ">
          {hoverItem}
        </div>
      </div>
    </div>
  )
}

export default Header
