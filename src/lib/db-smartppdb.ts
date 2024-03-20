import { PrismaClient } from "@/prisma/db-smartppdb/generated/client";

declare global {
  var prismaDbSmartppdb: PrismaClient | undefined;
}

export const dbSmartppdb = global.prismaDbSmartppdb || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  global.prismaDbSmartppdb = dbSmartppdb;
