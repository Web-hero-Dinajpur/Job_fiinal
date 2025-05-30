import React from 'react';
import { motion } from "motion/react"
import bannar1 from '../assets/team/team1.jpg'
import bannar2 from '../assets/team/team2.jpg'

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img animate={{ y: [0, 80, 0] }}
                        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
                        src={bannar1}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl "
                    />
                    <motion.img animate={{ x: [100, 200, 100] }}
                        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
                        src={bannar2}
                        className="-mt-8 max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl "
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1 animate={{ x: [0, 40, 0], color: ['#41EAE2', '#41ACEA', '#4155EA'] }} transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2,

                    }}
                        className="text-5xl font-bold">Job News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;