import { getServerSession } from "next-auth";
import Link from "next/link";

import { authOptions } from "~/providers/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            A simple <span className="text-[hsl(280,100%,70%)]">Authentication</span> Using T3
          </h1>

          <div className="flex flex-col items-center gap-2">

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "PLEASE AUTHENTICATE"}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
