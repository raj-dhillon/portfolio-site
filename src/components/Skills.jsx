import React from 'react';
import {ReactComponent as CPPLogo} from '../rsc/cpp.svg';
import {ReactComponent as PythonLogo} from '../rsc/python.svg';
import {ReactComponent as GithubLogo} from '../rsc/github.svg';
import {ReactComponent as ReactLogo} from '../rsc/react.svg';
import { ReactComponent as TailwindLogo } from '../rsc/tailwind.svg';
import { ReactComponent as SQLiteLogo } from '../rsc/sqlite.svg';
import { ReactComponent as DockerLogo } from '../rsc/docker.svg';
import { ReactComponent as QtLogo } from '../rsc/qt.svg';
import {ReactComponent as Expo} from '../rsc/expo.svg'
import {ReactComponent as MySQL} from '../rsc/mysql.svg'
import {ReactComponent as AWS} from '../rsc/aws.svg'
import {ReactComponent as OpenAI} from '../rsc/openai.svg'
import {ReactComponent as JavaScriptLogo} from '../rsc/javascript.svg'
import {ReactComponent as KubernetesLogo} from '../rsc/kubernetes.svg'
import {ReactComponent as ExpressLogo} from '../rsc/express.svg'
import {ReactComponent as FlaskLogo} from '../rsc/flask.svg'
import {ReactComponent as PostmanLogo} from '../rsc/postman.svg'
import {ReactComponent as LinuxLogo} from '../rsc/linux.svg'
import {ReactComponent as TypeScriptLogo} from '../rsc/typescript.svg'
import {ReactComponent as JenkinsLogo} from '../rsc/jenkins.svg'

const Skills = () => {
  return (
    <section id='skills' className='mt-28'>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-3xl sm:text-5xl mx-20 font-semibold'>
                My Skills
            </div>
    
            <div className='mt-16 grid grid-cols-4 gap-5 md:grid-cols-6 md:mx-14'>
              {/* Languages & Databases */}
              <PythonLogo className='w-20'></PythonLogo>
              <TypeScriptLogo className='w-20'></TypeScriptLogo>
              <CPPLogo className='w-20'></CPPLogo>
              <JavaScriptLogo className='w-20'></JavaScriptLogo>
              <MySQL className='w-20'></MySQL>
              <SQLiteLogo className='w-20'></SQLiteLogo>

              {/* Frontend */}
              <ReactLogo className='w-20'></ReactLogo>
              <Expo className='w-20'></Expo>
              <TailwindLogo className='w-20'></TailwindLogo>
              <QtLogo className='w-20'></QtLogo>

              {/* Backend */}
              <ExpressLogo className='w-20'></ExpressLogo>
              <FlaskLogo className='w-20'></FlaskLogo>

              {/* Cloud & DevOps */}
              <AWS className='w-20'></AWS>
              <DockerLogo className='w-20'></DockerLogo>
              <KubernetesLogo className='w-20'></KubernetesLogo>
              <GithubLogo className='w-20'></GithubLogo>
              <JenkinsLogo className='w-20'></JenkinsLogo>
              <LinuxLogo className='w-20'></LinuxLogo>

              {/* Tools & AI */}
              <PostmanLogo className='w-20'></PostmanLogo>
              <OpenAI className='w-20'></OpenAI>


            </div>


        </div>
    </section>
  )
}

export default Skills