import React from 'react'
import picture from '../rsc/picture.png'

const About = () => {
  return (
    <section id='about'>
        <div className='flex flex-col items-center mt-28 text-5xl sm:text-7xl font-semibold'>
            <div>Hi, I am</div>
            <img className='w-80 my-10 border rounded-full object-cover border-projects-border' src={picture} alt='Me.'></img>
            <div>Raj</div> 
            
        </div>
        <div className='flex flex-wrap mx-14 mt-20 justify-center text-center font-nunito font-bold text-lg lg:mx-36'>
            
            <div>
                I'm a Computer Science student at SPU, graduating in spring 2024. Among my hobbies are gaming, cooking, exercising, and enjoying science fiction/fantasy films.
            </div>
            <br></br>

            <div className='mt-8'>
                At the moment, I'm studying for the AWS Certified Developer - Associate certification and finishing up my senior project called Intention, which leverages LLMs to provide you with conversation-starting questions- allowing you to connect with those who are important to you effortlessly.
            </div>

        </div>
        
    </section>
  )
}

export default About