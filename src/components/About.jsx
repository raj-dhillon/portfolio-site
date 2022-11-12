import React from 'react'

const About = () => {
  return (
    <section id='about'>
        <div className='flex flex-col items-center mt-28 text-5xl sm:text-7xl font-semibold'>
            <div>Hi, I am</div>
            <div>Raj</div> 
            
        </div>
        <div className='flex flex-wrap mx-14 mt-20 justify-center text-center font-dot-gothic font-bold text-lg'>
            
            <div>
                I'm a Computer Science student at SPU. Among my hobbies are gaming, reading, exercising, and enjoying science fiction/fantasy films
            </div>

            <div className='mt-8'>
                I understand that improvement requires you to leave your comfort zone, so I strive to undertake things that I know will cause me discomfort in the name of growth
            </div>

        </div>
        
    </section>
  )
}

export default About