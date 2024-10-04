import React from 'react'
import Btn from './Btn';

const Card = (props :{email:string; rating : string ;name:string}) => {
  return (

    <>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p>{props.name}</p>
    <p>{props.email}</p>
    <p>{props.rating}</p>
    <div className="card-actions">
      <Btn/>
    </div>
  </div>
</div>
    </>
    
  )
}

export default Card