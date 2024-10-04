
"use client"
import Link from 'next/link'
import React from 'react'

const Btn = () => {
  return (
<>

<button className='btn btn-tiny'><Link href={'/SingleProduct'}>Buy Now</Link></button>

</>  )
}

export default Btn