import Link from 'next/link'
import React from 'react'

const person = () => {
  return (
 <>
    <div >person</div>
 <Link  className='btn btn-primary' href={'/'}><button>Home</button></Link>
 </>
  )
}

export default person