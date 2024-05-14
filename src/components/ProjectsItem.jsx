import React from 'react';

function ProjectsItem({title, imgUrl, stack, link, desc}) {
    return(
        <a href={link} target='_blank' rel='noreferrer' className='border-2 border-projects-border rounded-md overflow-hidden'>
            <img src={imgUrl} alt="projects" className='w-full h-36 md:h-48 object-cover cursor-pointer'/>

            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>            
                <div className='mb-2 md:mb-3 overflow-y-auto h-20 md:h-24'>
                    <p>{desc}</p>
                </div>
                
                <p className='flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm'>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-projects-border rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>

    )
}

export default ProjectsItem