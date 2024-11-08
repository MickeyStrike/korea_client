'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IconFlag from '@/assets/svg/iconFlag';
import Image from 'next/image';

const profiles = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '5 years',
    countryFlag: <IconFlag />,
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '3 years',
    countryFlag: <IconFlag />,
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '4 years',
    countryFlag: <IconFlag />,
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    setSelected((prevSelected) => (prevSelected - 1 + profiles.length) % profiles.length);
  };

  const handlePrev = () => {
    setSelected((prevSelected) => (prevSelected + 1) % profiles.length);
  };

  return (
    <div className="relative max-w-lg mx-auto mt-8 rounded-xl overflow-hidden z-10">
      {/* Image Container */}
      <div className="relative h-[408px] max-sm:h-[311px] flex justify-center items-center">
        {profiles.map((profile, index) => {
          const positionClass =
            selected === index
              ? 'scale-100 opacity-100 z-10 translate-x-0'
              : selected === (index - 1 + profiles.length) % profiles.length
                ? 'scale-90 opacity-70 z-0 -translate-x-1/3'
                : selected === (index + 1) % profiles.length
                  ? 'scale-90 opacity-70 z-0 translate-x-1/3'
                  : 'scale-75 opacity-40 z-0 translate-x-0';

          return (
            <motion.div
              key={index}
              className={`absolute transition-all ease-in-out cursor-pointer w-3/5 h-full transform ${positionClass}`}>
              <div
                className={`w-[292px] h-[408px] max-sm:w-[234px] max-sm:h-[311px] bg-white rounded-xl shadow-lg p-6 px-9 max-sm:py-9 max-sm:px-4 text-center transform transition-all ease-in-out`}>
                <div className="relative w-24 h-24 max-sm:w-[69px] max-sm:h-[69px] mx-auto">
                  <Image
                    src={profile.image}
                    alt={`${profile.name}'s profile`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white mx-auto max-sm:hidden"
                    width={120}
                    height={120}
                  />
                  <Image
                    src={profile.image}
                    alt={`${profile.name}'s profile`}
                    className="w-[69px] h-[69px] rounded-full object-cover border-4 border-white mx-auto sm:hidden"
                    width={69}
                    height={69}
                  />
                  <span className="absolute bottom-0 right-0">{profile.countryFlag}</span>
                </div>

                <h2 className="text-2xl font-black mt-4 max-sm:text-base">{profile.name}</h2>
                <p className="text-[#4A77FF] mt-1 font-black max-sm:text-sm">
                  {profile.role} · <span className="font-black">{profile.experience}</span>
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-[1px] gap-y-[4px] font-black max-w-[220px]">
                  {profile.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block text-[#5E626F] text-sm px-3 py-1 rounded-md border border-[#C1C5CF]">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 z-50">
        <button onClick={handlePrev} className="text-white text-2xl">
          &lt;
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 right-2 z-20 transform -translate-y-1/2 z-50">
        <button onClick={handleNext} className="text-white text-2xl">
          &gt;
        </button>
      </motion.div>
    </div>
  );
};

export default Carousel;
