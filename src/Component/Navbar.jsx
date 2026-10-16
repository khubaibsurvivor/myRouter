import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    


    <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bold text-xl tracking-tight" href="#">My Site</a>
    <div class="flex items-center">
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/">Home</Link>
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/about">About</Link>
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/author">Author</Link>
    </div>
</nav>

    </>
    
  )
}
