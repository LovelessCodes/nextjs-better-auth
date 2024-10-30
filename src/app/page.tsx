"use client";

import { signIn, signOut, getSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getSession()
  });

  const user = userData?.data?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {isLoading ? <div>Loading ...</div> : <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {user ? (
          <div>
            <p>Hello {user.name}!</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <form onClick={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <button type="submit">Sign In w/ Google</button>
          </form>
        )}
      </main>}
    </div>
  );
}
