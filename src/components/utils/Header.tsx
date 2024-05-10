import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="navbar  container m-auto ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-black">MD Abir Khan</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1   text-black ">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/resume'}>Resume</Link>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <a>Contact </a>
          </li>
          <li>
            <a>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
