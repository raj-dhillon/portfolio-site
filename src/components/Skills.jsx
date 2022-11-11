import React from 'react';
import {ReactComponent as CPPLogo} from '../rsc/cpp.svg';
import {ReactComponent as PythonLogo} from '../rsc/python.svg';
import {ReactComponent as GithubLogo} from '../rsc/github.svg';
import {ReactComponent as ReactLogo} from '../rsc/react.svg';
import { ReactComponent as TailwindLogo } from '../rsc/tailwind.svg';
import { ReactComponent as SQLiteLogo } from '../rsc/sqlite.svg';
import { ReactComponent as DockerLogo } from '../rsc/docker.svg';
import { ReactComponent as QtLogo } from '../rsc/qt.svg';

const Skills = () => {
  return (
    <section id='skills' className='mt-28'>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-3xl sm:text-5xl mx-20 font-semibold'>
                My Skills
            </div>
    
            <div className='mt-16 grid grid-cols-4 gap-5 md:grid-cols-8 md:mx-14'>
              <CPPLogo className='w-20'></CPPLogo>
              <PythonLogo className='w-20'></PythonLogo>
              <GithubLogo className='w-20'></GithubLogo>
              <ReactLogo className='w-20'></ReactLogo>
              <TailwindLogo className='w-20'></TailwindLogo>
              <SQLiteLogo className='w-20'></SQLiteLogo>
              <DockerLogo className='w-20'></DockerLogo>
              <QtLogo className='w-20'></QtLogo>

            </div>


        </div>
    </section>
  )
}

export default Skills