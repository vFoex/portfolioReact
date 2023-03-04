import React, {useRef, useState} from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        isFormValid: false,
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        form.isFormValid = form.name.length > 0 && form.email.length > 0 && form.message.length > 0;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if(!(form.name.length > 0 && form.email.length > 0 && form.message.length > 0))
            return;

        emailjs
            .send(
                'service_hg5k8dm',
                'template_9d5x9ee',
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "valentinfoex@gmail.com",
                    message: form.message,
                },
                'VGJrd2CbKVb6aDTKC'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };


    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.3}}
                        className='flex-1 flex justify-start items-center'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Contact <br/> Me</h2>
                        </div>
                    </motion.div>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full
                            placeholder:text-white focus:border-accent transition-all'
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='Your name'
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full
                            placeholder:text-white focus:border-accent transition-all'
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='Your email'
                        />
                        <textarea
                            className='bg-transparent border-b py-12 outline-none w-full
                            placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            placeholder='Your message'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                        ></textarea>
                        {form.isFormValid && (<button type='submit' className='btn btn-lg'>{loading ? "Sending..." : "Send"}</button>)}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
