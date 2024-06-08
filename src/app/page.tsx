'use client'

import Hero from '@/components/pages/home/Hero'
import MySkill from '@/components/pages/home/MySkill'
import Projects from '@/components/pages/home/Projects'
import './index.scss'
const MainPage = () => {
  return (
    <main className="  scroll-smooth bg-base-200 text-white">
      <Hero />
      <MySkill />
      <Projects />
    </main>
  )
}

export default MainPage
