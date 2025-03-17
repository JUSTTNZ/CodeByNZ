'use client'
import { motion } from "framer-motion";
import {
    Smartphone,
    Code,
    Server
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "FRONTEND DEVELOPMENT",
        description: "Crafting responsive and interactive web applications using React, Next.js, and TypeScript. Focusing on modern UI/UX practices and optimal performance.",
        icon: Code,
        category: "Development"
    },
    {
        id: 2,
        title: "BACKEND DEVELOPMENT",
        description: "Building robust server-side applications and APIs using Node.js, Python, and database technologies. Ensuring scalability and security.",
        icon: Server,
        category: "Development"
    },
    {
        id: 3,
        title: "APP DEVELOPMENT",
        description: "Developing cross-platform mobile applications and desktop software solutions that deliver seamless user experiences across different devices.",
        icon: Smartphone,
        category: "Mobile"
    }
];


const Services = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#200406]">
            <div className="absolute inset-0" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#ef4444] to-[#f87171] mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-l ">
                        Specialized in multiple domains of Software Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: service.id * 0.05 }}

                            whileHover={{
                                scale: 1.015,
                                translateY: -2,
                                boxShadow: "0 10px 20px rgba(239,68,68,0.2)"
                            }}
                            className="group relative bg-[#200406] rounded-lg overflow-hidden border border-[#ef444410] transform-gpu will-change-transform"
                        >
                            {/* Soft hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/10 to-[#f87171]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content */}
                            <div className="relative p-8 space-y-4">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="p-2 rounded-md bg-[#ef444420] group-hover:bg-[#ef444430] transition">
                                        <service.icon className="w-7 h-7 text-[#ef4444]" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-[#ef4444] to-[#f87171] opacity-50" />
                                </div>

                                <h3 className="text-white text-xl font-clashbold mb-2 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#e5e7eb] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-[#ef4444]/50 to-[#f87171]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

