'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e63946]">
      <div className="text-center">
        <h1 className="text-5xl md:text-5xl font-sans font-bold tracking-wider text-black">
          build your wushu avatar
        </h1>
        <button
          onClick={() => router.push('/intro')}
          className="px-10 py-10 hover:rotate-5 hover:scale-105 transition-transform text-2xl tracking-wide text-[#fdc921]"
        >
          let's go!
        </button>
      </div>

    </main>
  )
}
