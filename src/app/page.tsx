import { getUser } from "@/data/db-auth/user";
import Image from "next/image";

export default async function Home() {

  const user = await getUser("1");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       tes
    </main>
  );
}

