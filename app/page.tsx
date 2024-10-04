import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className=''>
      
    <div className='text-center font-bold text-4xl m-5 '>Hello World</div>
    </div>

    <div className="text-center">
    <button className="btn btn-primary"><Link href={'About'}>About</Link></button> <br /><br />
    <button className="btn btn-primary"><Link href={'Contact'}>Contact</Link></button><br /><br />
    <button className="btn btn-primary"><Link href={'/About/person'}>nested route</Link></button><br /><br />
    <button className="btn btn-primary"><Link href={'product'}>Products</Link></button><br /><br />
    </div>    
    </>
  )
}

export default page