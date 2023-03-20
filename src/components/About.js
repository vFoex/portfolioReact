import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import cpe from '../assets/cpe.png';
import access from '../assets/access.png';
import gencovery from '../assets/gencovery.jpg';
import iut from '../assets/iut.png';

const experiences = [
    {
        title: 'Computer Science Diploma DUT',
        locate: 'IUT of Annecy, University of Savoie Mont Blanc',
        date: 'Sept. 2019 - June 2021',
        points: [
            'I learned the fundamentals of programming using languages such as Java, Python, C++, etc. I also learned software design, project management, data analysis, and other essential computer science skills.',
            'I had the opportunity to participate in hands-on projects where I could apply the skills I learned in class.',
            'I had the chance to participate in a professional internship. Explore the professional world of computer science.'
        ],
        isWork: false,
        iconBg: iut
    },
    {
        title: 'Asp.Net Developer Intern',
        locate: 'Access Group',
        date: 'April 2021 - June 2021',
        points: [
            'My professional internship at Access Group was a great opportunity to apply my knowledge in a real-world environment.',
            'I worked as a ASP.NET developer on a project to create a web application for ticketing.',
            'It was a great experience to work with a team of developers and to learn from them.'
        ],
        isWork: true,
        iconBg: access
    },
    {
        title: 'Computer Science and Communication Networks Master\'s Degree (work-study)',
        locate: 'CPE Lyon',
        date: 'Sept. 2021 - Present',
        points: [
            'Combination of a work-study program in a company and a high level of scientific and technical education.',
            '3 semesters of common core to develop a solid foundation in computer science and communication networks',
            'Major in Computer Science to specialize in the field of computer science such as web/mobile development, devops, data science, cyber security, etc.'
        ],
        isWork: false,
        iconBg: cpe
    },
    {
        title: 'Full Stack Developer (work-study)',
        locate: 'Gencovery',
        date: 'Sept. 2021 - Present',
        points: [
            'Work-study program in a company to apply my knowledge in a real-world environment. As Gencovery is a startup, I need to be very flexible and organised to adapt to the changing needs of the company.',
            'I work on the development of a web application named Gencovery Community as the main developer. I am responsible for the development of the frontend and backend of the application.',
            'This work-study program is a great opportunity to learn from experienced developers and to improve my skills.'
        ],
        isWork: true,
        iconBg: gencovery
    }
];

const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{background: '#2F58CD', color: '#fff'}}
        contentArrowStyle={{borderRight: '7px solid #fff'}}
        date={experience.date}
        iconStyle={{ background: 'url(' + experience.iconBg + ') no-repeat center center', backgroundSize: 'cover' }}
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[24px] font-semibold' style={{margin: 0}}>{experience.locate}</p>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
                ))}
            </ul>
        </div>
    </VerticalTimelineElement>
);

const About = () => {
    return <section className='section' id='about'>
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                <motion.h1
                    variants={fadeIn('up', 0.15)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-8 text-center mx-auto'>
                    About
                </motion.h1>
                <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.7}}
                    className='mb-8 text-justify text-center mx-auto'>
                    My name is Valentin and I am a software engineering student currently pursuing a master's degree through a work-study program. As a software engineer, I am passionate about the potential of technology to make a positive impact on the world. Outside of academics, I enjoy a diverse range of interests, including listening to music (especially rap and electronic), participating in sports like tennis and street workout, and playing competitive video games like League of Legends and Valorant. I also value spending time with friends and exploring new places whenever I get the chance. I believe that my diverse interests and experiences have helped me to develop a well-rounded perspective and approach to problem-solving, which I look forward to bringing to my future career as a software engineer.
                </motion.p>
            </div>
            <div className='flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </div>

    </section>;
};

export default About;
