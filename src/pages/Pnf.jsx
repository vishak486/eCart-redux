import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    
    <>
    <Header/>
    <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-8xl'>404</h1>
      <img width={' 350px'} height={'150px'} src=" https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h1 className='font-bold text-2xl'>Looks Like you Lost?</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link className='bg-blue-600 p-2 text-white rounded' to={'/'}> Back to Home</Link>
    </div>
    </>
  )
}

export default Pnf