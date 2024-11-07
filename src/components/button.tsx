import React, { FC, useMemo } from 'react';

interface IButtonProps {
  title: string;
  background?: string;
  padding?: string;
  fontSize?: string;
  className?: string;
}

const Button: FC<IButtonProps> = ({ title, background, padding, fontSize, className }) => {
  const bg = useMemo(() => {
    return background ? background : '#fff';
  }, [background]);

  const pd = useMemo(() => {
    return padding ? padding : '';
  }, [padding]);

  const fSize = useMemo(() => {
    return fontSize ? fontSize : 'text-md';
  }, [fontSize]);

  return <button className={`${bg} ${pd} ${fSize} ${className ?? ''}`}>{title}</button>;
};

export default Button;
