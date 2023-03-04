import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import css from '../assets/technologies/css.png';
import docker from '../assets/technologies/docker.png';
import git from '../assets/technologies/git.png';
import html from '../assets/technologies/html.png';
import javascript from '../assets/technologies/javascript.png';
import mongodb from '../assets/technologies/mongodb.png';
import nodejs from '../assets/technologies/nodejs.png';
import reactjs from '../assets/technologies/reactjs.png';
import typescript from '../assets/technologies/typescript.png';
import python from '../assets/technologies/python.png';
import java from '../assets/technologies/java.png';
import csharp from '../assets/technologies/csharp.png';
import angular from '../assets/technologies/angular.png';
import nestjs from '../assets/technologies/nestjs.png';
import aspdotnet from '../assets/technologies/aspdotnet.png';
import mysql from '../assets/technologies/mysql.png';
import BallCanvas from "./canvas/BallCanvas";
import {staggerContainer} from "./utils/motion";

const technologies = [
    {
        title: 'Python',
        icon: python
    },
    {
        title: 'Java',
        icon: java
    },
    {
        title: 'C#',
        icon: csharp
    },
    {
        title: 'HTML 5',
        icon: html
    },
    {
        title: 'CSS 3',
        icon: css
    },
    {
        title: 'JavaScript',
        icon: javascript
    },
    {
        title: 'TypeScript',
        icon: typescript
    },
    {
        title: 'Angular',
        icon: angular
    },
    {
        title: 'React JS',
        icon: reactjs
    },
    {
        title: 'Node JS',
        icon: nodejs
    },
    {
        title: 'Nest JS',
        icon: nestjs
    },
    {
        title: 'ASP .NET',
        icon: aspdotnet
    },
    {
        title: 'MongoDB',
        icon: mongodb
    },
    {
        title: 'MySQL',
        icon: mysql
    },
    {
        title: 'Git',
        icon: git
    },
    {
        title: 'Docker',
        icon: docker
    }
];
const Technologies = () => {
    return <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className='section' id='technologies'>
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                <motion.h1
                    variants={fadeIn('up', 0.15)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-8 text-center mx-auto'>
                    Technologies
                </motion.h1>
                <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='mb-8 max-w-lg text-center mx-auto'>
                    Even if I'm working as a full stack developer, I learned to be a polyvalent developer during my studies and personal projects. I'm always looking for new technologies to learn and improve my skills.
                </motion.p>
                <div className='flex flex-row flex-wrap justify-center gap-10'>
                    {technologies.map((technology, index) => (
                        <div className='w-28 h-28' key={technology.title}>
                            <BallCanvas icon={technology.icon}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.section>;
};

export default Technologies;
