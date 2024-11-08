'use client';
import IconAvatar from '@/assets/svg/iconAvatar';
import IconBox from '@/assets/svg/iconBox';
import IconCall from '@/assets/svg/iconCall';
import IconCode from '@/assets/svg/iconCode';
import IconGear from '@/assets/svg/iconGear';
import IconImage from '@/assets/svg/iconImage';
import IconKor from '@/assets/svg/iconKor';
import IconMarketting from '@/assets/svg/iconMarketting';
import IconTarget from '@/assets/svg/iconTarget';
import LogoFooter from '@/assets/svg/logoFooter';
import Card from '@/components/card';
import CardAdvantage from '@/components/cardAdvantage';
import Carousel from '@/components/carousel';
import Header from '@/components/header';
import Tooltip from '@/components/tooltip';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconCheck from '@/assets/svg/iconCheck';

const listAdvantageCard = [
  {
    title: '평균 월 120만원',
    description: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    title: '평균 3일, 최대 10일',
    description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

const listCard = [
  {
    title: '해외 마케팅',
    iconSvg: <IconMarketting />,
  },
  {
    title: '퍼블리셔',
    iconSvg: <IconImage />,
  },
  {
    title: '캐드원(제도사)',
    iconSvg: <IconBox />,
  },
  {
    title: '해외 세일즈',
    iconSvg: <IconTarget />,
  },
  {
    title: '해외 CS',
    iconSvg: <IconCall />,
  },
  {
    title: '해외 마케팅',
    iconSvg: <IconMarketting />,
  },
];

const listCardFooter = [
  {
    title: '해외 개발자 원격 채용',
    iconSvg: <IconCode />,
  },
  {
    title: '외국인 원격 채용 (비개발)',
    iconSvg: <IconAvatar />,
  },
  {
    title: '한국어 가능 외국인 채용',
    iconSvg: <IconKor />,
  },
  {
    title: '해외 개발자 활용 서비스',
    iconSvg: <IconGear />,
  },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <section className="bg-blue-custom min-h-screen">
        <Header />
        <div className="max-w-[1080px] w-full mx-auto flex flex-row max-sm:flex-col mt-[136px] max-sm:mt-[36px] sm:items-center justify-center max-sm:pb-[60px]">
          <div className="max-sm:px-[16px]">
            <div className="mt-[20px] w-full text-white text-5xl max-sm:text-3xl font-black">
              <motion.div
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Tooltip
                  position="left"
                  text="풀타임, 파트타임"
                  classNameText="!text-[#40E2E8] max-sm:!text-white !bg-white max-sm:!bg-[#8BC4FF] !text-lg font-black"
                  classNameArrow="!bg-white max-sm:!bg-[#8BC4FF]"
                  classNameContainer="!mb-4"
                  duration={0.5}
                  delay={0.5}>
                  최
                </Tooltip>
                고의 실력을 가진
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                외국인 인재를 찾고 계신가요?
              </motion.p>
              {/* <p>외국인 인재를 찾고 계신가요?</p> */}
            </div>
            <motion.div
              className="mt-[20px] w-full text-[#ffffffe6] text-2xl max-sm:text-base w-[361px] max-sm:w-[328px] font-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <p>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
              {/* <p></p> */}
            </motion.div>
            <div className="mt-[20px] w-full text-white text-lg font-black">
              <p className="underline">개발자가 필요하신가요?</p>
            </div>
            <div className="flex flex-row gap-12 mt-[60px] max-sm:hidden">
              {listAdvantageCard.map((x) => (
                <CardAdvantage key={x.title} title={x.title} description={x.description} />
              ))}
            </div>
          </div>
          <div className="w-full h-full max-sm:mt-[46px]">
            <Tooltip
              position="center"
              text="월 100만원"
              classNameText="!text-[#00C696] !bg-[#E9F7EF] !text-lg font-black flex gap-[10px]"
              classNameArrow="!bg-[#E9F7EF]"
              classNameContainer="!mb-6 left-1/2 -translate-x-1/2 max-sm:!mb-4"
              withIcon={true}
              duration={0.5}
              delay={0}>
              <Carousel />
            </Tooltip>
          </div>
          <div className="flex flex-col sm:hidden pl-[16px] gap-2 mt-6">
            <div className="grid grid-cols-2 w-[243px]">
              <div className="font-black flex flex-row gap-3">
                <IconCheck />
                <span className="text-white">한국어 능력</span>
              </div>
              <div className="font-black flex flex-row gap-3 text-nowrap">
                <IconCheck />
                <span className="text-white">업무 수행 능력</span>
              </div>
            </div>
            <div className="grid grid-cols-2 w-[243px]">
              <div className="font-black flex flex-row gap-3">
                <IconCheck />
                <span className="text-white">겸업 여부</span>
              </div>
              <div className="font-black flex flex-row gap-3">
                <IconCheck />
                <span className="text-white">평판 조회</span>
              </div>
            </div>
            <p className="text-[#FBFF23] font-black underline mt-2">개발자가 필요하신가요?</p>
          </div>
        </div>
        {/* <div className="w-full flex justify-center"> */}
        <div className="max-w-[1080px] mx-auto w-full flex flex-row gap-[10px] whitespace-nowrap overflow-x-auto mt-[60px] max-sm:hidden">
          {listCard.map((x) => (
            <Card key={x.title} title={x.title} iconSvg={x.iconSvg} type="horizontal" classNameCard="min-w-[332px]" />
          ))}
        </div>
        {/* </div> */}
      </section>
      <section className="bg-[#FBFBFB] w-full flex justify-center">
        <div className="w-full mx-auto max-w-[980px] pt-24 max-sm:pt-16 max-sm:pt-16 max-sm:px-4 pb-20 max-sm:pb-[60px]">
          <div className="flex flex-row max-sm:flex-col justify-between w-full gap-[100px] max-sm:gap-[18px]">
            <div className="flex flex-col">
              <LogoFooter />
              <p className="mt-4 w-[247px] font-black text-sm">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
              <p className="mt-[18px] text-[#5E626F] font-black">010-0000-0000</p>
              <p className="mt-2 text-[#5E626F] font-black">aaaaa@naver.com</p>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-[15px]">
              {listCardFooter.map((x) => (
                <Card
                  key={x.title}
                  title={x.title}
                  iconSvg={x.iconSvg}
                  type="vertical"
                  classNameCard="flex-start !w-[187px] h-[142px] max-sm:!w-[160px] max-sm:!h-[163px] !items-start !bg-white !gap-0"
                  classNameTitle="!text-[#343741] text-sm mt-3"
                  classNameContainerSvg="!bg-[#EFF1F6]"
                  withShortcut={true}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row max-sm:flex-col justify-between w-full gap-[50px] max-sm:gap-[36px] mt-11">
            <div className="flex flex-col">
              <p className="font-black text-[#5E626F]">상호명</p>
              <p className="font-black text-[#5E626F]">하이퍼하이어</p>
              <p className="font-black text-[#343741] w-[212px] text-[13px]">Hyperhire India Private Limited</p>
            </div>
            <div className="flex flex-col">
              <p className="font-black text-[#343741]">대표 CEO</p>
              <p className="font-black text-[#5E626F]">김주현</p>
              <p className="font-black text-[#5E626F] text-nowrap">Juhyun Kim</p>
            </div>
            <div className="flex flex-col">
              <p className="font-black text-[#343741]">사업자등록번호 CIN</p>
              <p className="font-black text-[#5E626F]">427-86-01187</p>
              <p className="font-black text-[#5E626F]">U74110DL2016PTC290812</p>
            </div>
            <div className="flex flex-col">
              <p className="font-black text-[#343741]">주소 ADDRESS</p>
              <p className="font-black text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호</p>
              <p className="font-black text-[#5E626F] w-[455px] max-sm:w-[327px]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full mt-7">
            <p className="font-black text-[#5E626F] text-[13px]">ⓒ 2023 Hyperhire</p>
          </div>
        </div>
      </section>
    </>
  );
}
