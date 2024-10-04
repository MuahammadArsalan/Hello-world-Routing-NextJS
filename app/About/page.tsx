import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <div>About</div>
   <Link href={'/'}> <button>Home</button></Link>
    </>
  )
}

export default About