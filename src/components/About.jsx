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
                I'm a Computer Science student at SPU, graduating in spring 2024. Among my hobbies are gaming, cooking, exercising, and enjoying science fiction/fantasy films.
            </div>
            <br></br>

            <div className='mt-8'>
                I've just completed the AWS Certified Developer - Associate certification and am finishing up my senior project called Intention, which leverages LLMs to provide you with conversation-starting questions- allowing you to connect with those who are important to you effortlessly.
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