import React from 'react'
import {Head,Btn}  from './herosection.css.jsx';
const herosection = () => {
  return (
    <>
   
        
    <div className="con">

    <Head bgColor="black" >this is first heading...</Head>
    <Head bgColor="pink">this is second heading.... </Head>
    </div>
    <Btn color='blue'> submit</Btn>

    <Btn bgColor="black" color='white'>  push </Btn>
    </>
  )
}

export default herosection; 
