import React from 'react';
import projects from '../data/projects';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  return (
    <div>
      <div className='flex text-3xl sm:text-5xl mx-20 font-semibold mb-8 mt-28 items-center justify-center'>
        My Projects
      </div>
    
    <div className='flex flex-col md:flex-row items-center justify-center'>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
        {projects.map(project => (
          <ProjectsItem 
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}>
          </ProjectsItem>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Projects