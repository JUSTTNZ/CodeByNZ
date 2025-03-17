'use client'

import Resume from "./resume";
const resumeUrl = '/pdf/NZ.pdf';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden bg-[#200406]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#200406] via-[#200406]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#ef4444] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#ef4444] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#ef4444]/40 via-[#ef4444]/20 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-12">
                        {[
              {
                "title": "Founder & Backend Lead",
                "company": "TRUPAY",
                "location": "Remote",
                "period": "2025 - Present",
                "description": [
                  "Founded and currently lead the development of TRUPAY, a user-friendly, secure, and efficient platform simplifying textbook purchases for students.",
                  "Overseeing backend development to ensure seamless browsing, payment, and order tracking functionalities for users.",
                  "Designed the platform to eliminate the need for long bank queues by enabling online transactions.",
                  "Leading the engineering team to maintain system security, performance, and scalability."
                ]
              },            
              {
                "title": "Frontend Developer",
                "company": "GENESYS TECH HUB",
                "location": "Remote",
                "period": "10/2024 - Present",
                "description": [
                  "Designed and developed a responsive landing page for a game application, resulting in a 25% increase in user engagement and sign-ups.",
                  "Built a fully functional online store using React.js, Tailwind CSS, and Redux, enhancing customer experience and reducing cart abandonment by 15%."
                ]
              },
              {
                "title": "Frontend and Backend Developer",
                "company": "HNG Tech",
                "location": "Remote",
                "period": "07/2024 - 09/2024",
                "description": [
                  "Collaborated with UI/UX designers to develop and implement responsive and pixel-perfect e-commerce platforms, improving user experience and site performance by 20%.",
                  "Engineered and deployed a Hello API to retrieve user geolocation data and provide real-time weather forecasts using Node.js and Flask, ensuring global access and reducing latency by 30%.",
                  "Utilized Docker for containerization and deployed projects to Vercel, contributing to a 15% improvement in team efficiency.",
                  "Recognized for consistently delivering high-quality code on time and exceeding expectations in a fast-paced remote environment."
                ]
              },
              {
                "title": "Frontend Developer Intern",
                "company": "GENESYS TECH HUB",
                "location": "Remote",
                "period": "10/2023 - 12/2023",
                "description": [
                  "Contributed to the development of a hospital management website, improving usability and technical execution, earning a top 10% score among all internship projects.",
                  "Developed responsive web applications, ensuring optimal performance across devices, and resulting in a 20% increase in user retention.",
                  "Strengthened technical expertise in JavaScript, HTML5, CSS, and React.js, while working in an agile environment and participating in daily scrums."
                ]
              }
            ]
            .map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#200406] border-2 border-[#ef4444] shadow-lg shadow-[#ef4444]/20" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(239, 68, 68, 0.08)'
                  }}
                  className="group relative bg-[#200406]/60 backdrop-blur-sm border border-[#ef444410] p-8 rounded-md transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#ef4444] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm">{experience.location}</span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#FFFFFFcc] leading-relaxed font-light flex items-start">
                          <span className="text-[#ef4444] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Resume button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="ConfidenceChukwudi.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
