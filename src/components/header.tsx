import CaretDown from '@/assets/svg/caretDown';
import Logo from '@/assets/svg/logo';
import React from 'react';
import Button from './button';

const Header = () => {
  return (
    <div className="max-w-[1080px] w-full mx-auto flex justify-between pt-[13px] pb-[11px]">
      <Logo />
      <div className="max-sm:hidden flex gap-[60px] items-center">
        <div className="flex gap-2 text-white items-center font-black">
          <p>채용</p>
          <CaretDown />
        </div>
        <p className="text-white font-black">해외 개발자 활용 서비스</p>
      </div>
      <Button
        title="문의하기"
        padding="py-[6px] px-6"
        fontSize="text-[#4A77FF]"
        className="rounded-md bg-white font-bold font-black"
      />
    </div>
  );
};

export default Header;
