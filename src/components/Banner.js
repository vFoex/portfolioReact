import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Link} from 'react-scroll';

const Banner = () => {
  return <section className='section flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1
            variants={fadeIn('up', 0.15)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          VALENTIN <span>FOEX</span>
        </motion.h1>
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>I am a</span>
          <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Student',
                2000]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
          />
        </motion.div>
        <motion.p
            variants={fadeIn('up', 0.25)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
          I'm a computer science and communication networks student working as a Full Stack developer. I enjoy developing applications and solving problems.
        </motion.p>
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='flex max-w-max items-center mb-12 mx-auto lg:mx-0'>
          <Link className='btn btn-lg flex items-center cursor-pointer'
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}>Contact Me</Link>
        </motion.div>
        <motion.div
            variants={fadeIn('up', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://www.linkedin.com/in/valentin-foex/' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/vFoex' target='_blank'>
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
