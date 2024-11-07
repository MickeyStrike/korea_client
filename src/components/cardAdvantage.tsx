import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ICardAdvantageProps {
  title?: string;
  description?: string;
}

const CardAdvantage: FC<ICardAdvantageProps> = ({ title, description }) => {
  return (
    <motion.div
      className="flex flex-col border-t w-[161px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-lg text-white font-black">{title}</h2>
      <p className="text-[#ffffffcc] font-black">{description}</p>
    </motion.div>
  );
};

export default CardAdvantage;
