"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Footer = () => {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const displayTime = mounted ? time : '';

  return (
    <section className="mx-[30px] mt-[60px] pb-[20px] lg:pb-[50px] lg:mx-[76px] lg:mt-[150px]">
      <div className="lg:max-w-[1300px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#ef444410]" />

      <div className="mt-[63px] flex flex-col-reverse justify-start gap-5 md:gap-0 md:flex md:flex-row md:justify-between md:items-center">
        {/* Left section */}
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center lg:gap-[4px]">
            <span>
              <Copyright className="size-[18px] md:size-[20px] text-[#ef4444]" />
            </span>
            <p className="text-[#ffffffcc] md:text-xl text-lg font-medium">
              CodeByNZ
              <span className="text-[#FFFFFF] text-[14px] lg:text-base"> 53 BC - </span>
              <span className="text-[#FFFFFF] text-[14px] lg:text-base">
                {new Date().getFullYear()}
              </span>
            </p>
          </div>
          <p className="text-[#ffffff99] transition-all duration-300 text-end text-sm lg:text-base mt-1">
            {displayTime}
          </p>
        </div>

        {/* Right section (Social icons) */}
        <div className="mt-[10px] md:mt-[65px] flex justify-start items-center gap-[20px] md:gap-[40px]">
          {[{
            Icon: FbIcon,
            link: "https://web.facebook.com/profile.php?id=100084461681869"
          }, {
            Icon: TwIcon,
            link: "https://x.com/codebynz"
          }, {
            Icon: IgIcon,
            link: "https://www.instagram.com/justt_nz?utm_source=qr"
          }, {
            Icon: InIcon,
            link: "http://linkedin.com/in/confidence-chukwudi-0236322a5"
          }].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 1.05 }}
              className="h-auto w-auto group"
            >
              <social.Icon
                fill="#ffffffcc"
                className="w-[30px] h-[30px] rounded-full border-[#ef4444] border-solid border-[2px] p-0.5 transition-all duration-500 group-hover:bg-[#ef4444]/10 group-hover:fill-[#ef4444] group-hover:border-[#ef4444]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
