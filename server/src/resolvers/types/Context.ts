import { Prisma } from "prisma-binding";

export interface Context {
  prisma: Prisma;
  response: any;
  request: any;
}
