'use client'

import Experience from "./experience";
import { motion } from "framer-motion";
import { skills } from "../data/data";

const Skills = () => {
    return (
        <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#200406]">
            {/* background gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#200406] via-[#200406]/80 to-transparent opacity-30" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-[#ef4444] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">Expertise</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight leading-tight">
                        Technical Proficiency
                    </h2>
                    <div className="h-[1px] w-16 bg-gradient-to-r from-[#ef4444] to-[#f87171] opacity-50 mb-8" />
                    <p className="text-[#ffffffcc] text-lg max-w-2xl font-light leading-relaxed">
                        A comprehensive toolkit refined through years of practical experience
                    </p>
                </motion.div>

                {/* Skill cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.03,
                                backgroundColor: 'rgba(239, 68, 68, 0.05)'
                            }}
                            className="group relative bg-[#200406]/90 rounded-xl backdrop-blur-sm border border-[#ef444410] p-6 md:p-8 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                <p className="text-white font-medium tracking-wide mb-2 text-lg">
                                    {skill.title}
                                </p>
                                <div className="h-[2px] w-8 bg-gradient-to-r from-[#ef4444] to-[#f87171] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        </motion.div>
                    ))}
                </div>

                {/* Experience block */}
                <div className="mt-28">
                    <Experience />
                </div>
            </div>
        </section>
    );
};

export default Skills;
