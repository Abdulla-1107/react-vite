import React from 'react'

const Header = () => {
  return (
    <header className='absolute w-full'>
        <div className="container mx-auto">
            <nav className='h-[75px] flex items-center justify-between text-white'>
                <div className='text-2xl'>Escape.</div>
                <ul className='flex gap-10 uppercase'>
                    <li>
                        <a href=""><span>Home</span></a>
                
                    </li>
                    <li>
                        <a href=""><span>Categories</span></a>
                
                    </li>
                    <li>
                        <a href=""><span>About</span></a>
                
                    </li>
                    <li>
                        <a href=""><span>Contact</span></a>
                
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header