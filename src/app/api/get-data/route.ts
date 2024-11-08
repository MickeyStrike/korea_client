import { ResponseGetData } from '@/type';
import { NextResponse } from 'next/server';

type ResponseData = {
  data: ResponseGetData[];
  message: string;
  status: number;
};

// export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json<ResponseData>({
      data: [
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
      ],
      message: 'Success get data',
      status: 200,
    });
  } catch (error) {
    console.log(error, 'error');
    return NextResponse.json<ResponseData>({
      data: [],
      message: 'Error',
      status: 500,
    });
  }
}
