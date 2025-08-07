import React from 'react'
import picture from '../rsc/picture.png'
import resume from '../rsc/Resume_Dhillon_R.pdf'

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
                Recent Computer Science graduate with hands-on experience building full-stack apps. Driven by a curiosity to understand how every layer of a system connects, and ensuring it can run itself, and scale. Excited about joining a team where I can keep learning, share what I find out, and help bring projects to their fullest potential.
            </div>
            <br></br>

            <div className='mt-8'>
                When I'm not coding, you'll find me stuck in self-reflection, engaging in and exploring ideas that are currently bouncing around my mind, or undertaking the sisyphean task of improving my memory. Try giving me a date, and I may be able to tell you the day.
            </div>

            
            <div className="mt-14 text-projects-border">
                <a className='mr-14' href={resume} download>
                    <span>Resume</span>
                </a>

                <a href='https://www.linkedin.com/in/rajdeep-dhillon/' target='_blank' rel='noreferrer'>
                    <span>LinkedIn</span>
                </a>
            </div>

        </div>
        
    </section>
  )
}

export default About