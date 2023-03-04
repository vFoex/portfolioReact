import {motion} from "framer-motion";
import React from "react";
import {projects} from "./constants";
import { fadeIn, textVariant } from "./utils/motion";
import Tilt from "react-tilt/dist/tilt";
import {RiExternalLinkFill} from "react-icons/ri";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         image,
                         link,
                     }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='gradient p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
                        {link != null && <div
                            onClick={() => window.open(link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <RiExternalLinkFill className='w-10 h-10'/>
                        </div>}

                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};


const Work = () => {
    return <section className='section' id='work'>
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                <motion.h1
                    variants={fadeIn('up', 0.15)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-8 text-center mx-auto'>
                    Projects
                </motion.h1>
                <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='mb-8 max-w-lg text-center mx-auto'>
                    Since I started programming, I have worked on many projects, big and small. School projects in teams, personal projects to discover new technologies, and some for companies. Here are the last big projects I've done.
                </motion.p>
                <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} {...project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>;
};

export default Work;
