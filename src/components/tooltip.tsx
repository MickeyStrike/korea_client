import IconDollar from '@/assets/svg/iconDollar';
import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ITooltipProps {
  children?: ReactNode;
  text?: string;
  position: 'center' | 'left' | 'right';
  classNameText?: string;
  classNameArrow?: string;
  classNameContainer?: string;
  withIcon?: boolean;
  duration?: number;
  delay?: number;
}

const Tooltip: FC<ITooltipProps> = ({
  children,
  text,
  position = 'center',
  classNameText,
  classNameArrow,
  classNameContainer,
  withIcon,
  duration,
  delay,
}) => {
  const arrowPosition = {
    left: 'left-4',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-4',
  };

  return (
    <div className="relative">
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: delay }}
        className={`absolute bottom-full mb-2 flex items-center justify-center w-max ${classNameContainer}`}>
        <span className={`bg-black text-white text-xs rounded-lg shadow-lg px-3 py-[6px] ${classNameText}`}>
          {withIcon && <IconDollar />} {text}
        </span>
        {/* Customizable Arrow */}
        <div
          className={`w-2 h-2 bg-black rotate-45 absolute -bottom-1 ${arrowPosition[position]} ${classNameArrow}`}></div>
      </motion.div>
    </div>
  );
};

export default Tooltip;
