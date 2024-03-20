// Purpose: Define the CustomError interface because the limitations of the Prisma error interface when used in the catch block of a try-catch statement
// in multiple database connections. The Prisma error interface is not flexible enough to handle the different error codes from different databases. because it will use the last generated Prisma client.
// reference: https://www.prisma.io/docs/orm/reference/error-reference
// this is a custom error interface that extends the Error interface
export interface PrismaCustomError extends Error {
  errorCode?: string;
  code?: string;
  meta?: any;
  clientVersion?: string;
}
