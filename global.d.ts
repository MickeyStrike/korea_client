import { PrismaClient } from "@prisma/client"

export interface ErrorResponse {
  message: string;
}

export type Handler = (...evts: any[]) => void

export type PartialPick<T extends object, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>

declare global {
  interface ResponseAPI<T> {
    message: string;
    data: T;
    status: number
  }
}