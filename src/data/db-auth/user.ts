import { dbAuth } from "@/lib/db-auth";
import { PrismaCustomError } from "@/lib/prisma-custom-error";

export const getUser = async (id: string) => {
  try {
    const user = await dbAuth.user.create({
      data: {
        email: "a@b.io",
        name: "name",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log(user);
  } catch (error) {
    const customError = error as PrismaCustomError;
    if (customError.code === "P2002") {
      console.log("P2002");
    }
    console.log(customError.name);
  }
  return null;
};
