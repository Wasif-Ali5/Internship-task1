import React from "react"

const Navbar = () => {

  return (
    <nav  className="flex flex-wrap w-full fixed top-0 z-50 bg-[#0f3460] justify-between md:items-center text-white px-10 pt-6 md:px-20">
       
        <span className='text-xl md:text-2xl font-bold Tracking-wide'>Student-Management-System</span>
         
          <ul
           className="flex-wrap justify-center mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl 
           bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6"
         >
           <a href="#Home">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85  duration-300">Home</li>
           </a>

           <a href="#About">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">About</li>
            </a>

            <a href="#teacher">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">Teachers</li>
            </a>

            < a href="#contact">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">Contact</li>
            </a>

         </ul>

    </nav>
  )
}

export default Navbar
