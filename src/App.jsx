import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <HeaderSection />
      <SkillSection />
      <FooterSection />
    </div>
  )
}

function HeaderSection() {
  return (
    <section>
      <div className="w-full h-[60vh] bg-green-100">
        <div className='mx-auto py-20 flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-bold'>Hello World</h1>
          <p>contoh landing page</p>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'
            onClick={() => alert('halooo')}
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  )
}


function SkillSection() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  return (
    <section className='p-10'>
      <h2 className='text-xl font-semibold mb-4'>My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className='bg-blue-100 p-2 my-1 rounded'>
          {skill}
        </div>
      ))}
    </section>
  )
}

function FooterSection() {
  return (
    <footer className='p-4 text-center bg-yellow-200'>
      &copy; 2024 My Portfolio. All rights reserved.
    </footer>
  )
}

export default App
