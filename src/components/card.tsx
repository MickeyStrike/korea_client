import ArrowRight from '@/assets/svg/arrowRight';
import React, { FC } from 'react';

interface ICardProps {
  title: string;
  iconSvg: JSX.Element;
  type: 'horizontal' | 'vertical';
  withShortcut?: boolean;
  classNameCard?: string;
  classNameTitle?: string;
  classNameContainerSvg?: string;
}

const Card: FC<ICardProps> = ({
  title,
  iconSvg,
  type,
  withShortcut,
  classNameCard,
  classNameTitle,
  classNameContainerSvg,
}) => {
  return (
    <div
      className={`bg-[#ffffff33] flex ${type === 'horizontal' ? 'flex-row' : 'flex-col'} p-4 items-center gap-6 rounded-xl ${classNameCard}`}>
      <div className={`p-3 bg-[#ffffff66] rounded-lg ${classNameContainerSvg}`}>{iconSvg}</div>
      <span className={`text-white text-2xl font-bold ${classNameTitle}`}>{title}</span>
      {withShortcut && (
        <span className="flex gap-1 mt-4">
          바로가기 <ArrowRight />
        </span>
      )}
    </div>
  );
};

export default Card;
