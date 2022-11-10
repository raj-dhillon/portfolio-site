import React from 'react';
import {ReactComponent as CPPLogo} from '../rsc/cpp.svg';
import {ReactComponent as PythonLogo} from '../rsc/python.svg';
import {ReactComponent as GithubLogo} from '../rsc/github.svg';
import {ReactComponent as ReactLogo} from '../rsc/react.svg';

const Skills = () => {
  return (
    <section id='skills' className='mt-28'>
        <div className='flex flex-col items-center justify-center font-poppins'>
            <div className='text-3xl sm:text-5xl mx-20 font-semibold'>
                My Skills
            </div>
    
            <div className='mt-7 mb-16 grid grid-cols-4 gap-5'>
              <CPPLogo className='w-20'></CPPLogo>
              <PythonLogo className='w-20'></PythonLogo>
              <GithubLogo className='w-20'></GithubLogo>
              <ReactLogo className='w-20'></ReactLogo>

            </div>


        </div>
    </section>
  )
}

export default Skills