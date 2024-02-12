import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='text-4xl font-extrabold m-24' > This is Home</div>
    <h3 className='ml-5'><Link to='/blog'> Go to blog page</Link></h3>
    </>
  )
}

export default Home