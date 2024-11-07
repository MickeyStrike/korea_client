import { NextResponse } from 'next/server';
 
type ResponseData = {
  data: [],
  message: string,
  status: number
}

// export const dynamic = 'force-dynamic';
 
export async function GET() {
  try {
    return NextResponse.json<ResponseData>({
      data: [],
      message: 'Success get data',
      status: 200,
    });
  } catch (error) {
    console.log(error, "error")
    return NextResponse.json<ResponseData>({
      data: [],
      message: 'Error',
      status: 500,
    });
  }
}