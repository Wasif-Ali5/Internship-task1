import React from 'react'
import image1 from '../../assets/pic3.jpg'
import image2 from '../../assets/pic-2.jpg'
import image3 from '../../assets/img1.jpg'
import CardMaterial from './CardMaterial'

const StudentCard = () => {
  return (
    <div id='Home' className='flex justify-center flex-wrap gap-2  mt-10 mb-10'>

      <CardMaterial img={image1} 
      name="Wasif Raza" 
      roll="1234" 
      course="Web Dev" 
      department="FOIT" />

      <CardMaterial img={image2} 
      name="Aman Khan" 
      roll="1234-C6" 
      course="App Dev" 
      department="FOIT" />

      <CardMaterial img={image3} 
      name="Basit Ali" 
      roll="1234-B4" 
      course="DSA" 
      department="FOCS" />

    </div>
  )
}

export default StudentCard
