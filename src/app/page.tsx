'use client'

import Hero from '@/components/pages/home/Hero'
import MySkill from '@/components/pages/home/MySkill'
import Projects from '@/components/pages/home/Projects'
import './index.scss'
import Contacts from './contact/page'
const MainPage = () => {
  return (
    <main className="  relative  scroll-smooth bg-base-200 text-white  ">
      <Hero />
      <MySkill />
      <Projects />
      <Contacts />
    </main>
  )
}

export default MainPage
