import React from 'react'

const CardMaterial = ({name,roll,img,course,department}) => {
  return (
    <div className='bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto text-center hover:scale-105 transition-transform duration-300 '>
      
      <img 
      className='w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-300' 
      src={img} alt="_blank" />

      <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>

      <p className='text-gray-600 text-sm mt-1'>Roll Number : {roll}</p>
      
      <p className='text-gray-600 text-sm mt-1'>Course : {course}</p>

      <p className='text-gray-600 text-sm mt-1'>Department : {department}</p>
    </div>
  )
}

export default CardMaterial
