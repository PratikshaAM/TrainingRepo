import React from 'react'
import { Link } from 'react-router-dom'
import DailybiteLogo from '../../assets/DailyBite.png'

function Header() {
  return (
    // <div className='w-full h-12 bg-black text-white mb-10'>Header</div>
    <>
        <header className='w-full'>
            <nav className='flex justify-between shadow-xl '>
                <div>
                <Link to="/" className="flex items-center">
                    <img src={DailybiteLogo} className="h-12 ml-3" alt="Dailybite Logo" />
                </Link>
                </div>
                <div>
                <Link to="/about" className="flex items-center">
                    <h2>About</h2>
                </Link>
                </div>
                <div>
                <Link to="/blog" className="flex items-center mr-3">
                    <h2>Blog</h2>
                </Link>
                </div>
            </nav>
        </header>
    </>

  )
}

export default Header