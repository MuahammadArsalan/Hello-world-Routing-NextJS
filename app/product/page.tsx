
import { log } from 'console'
import React, { useState } from 'react'
import loading from '../loading';
import Card from '../Components/Card';
import { title } from 'process';
const product = async() => {

  let data =  await fetch('https://jsonplaceholder.typicode.com/users')
let res  = await data.json();


interface User{
    id: number;
    phone: number;
    address: number;
    street: number;
    name : string;
    email : string;

}

return (
<>

<h1 className='text-center m-5 font-bold text-4xl'>Products</h1>
<div className='inline-flex flex-wrap gap-11' >

{res.map((item : User)=>{
    return <div key={item.id}>
        
<Card name={item.name} email={item.email} rating={item.address.street}/>
    
    </div>
})}
</div>

</>
  )
}

export default product