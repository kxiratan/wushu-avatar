'use client';
import { useRouter } from 'next/navigation';

export default function AvatarBuilder() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white grid-background p-8">
      {/* decoration images */}
      <div className="relative display:flex max-w-7xl mx-auto">
        <img
          src="/red-and-white-silk.png"
          alt="red silk"
          className="absolute -top-28 -left-28 h-[120px] w-auto -rotate-12 hover:rotate-6 transition-transform"
        />
        <img
          src="/broadsword.png"
          alt="broad sword"
          className="absolute -top-20 -right-28 h-[80px] w-auto rotate-12 hover:-rotate-6 transition-transform"
        />
        <img
          src="/straightsword.png"
          alt="straight sword"
          className="absolute -bottom-20 -left-28 h-[80px] w-auto rotate-12 hover:-rotate-6 transition-transform"
        />
        <img
          src="/blue-and-white-silk.png"
          alt="blue silk"
          className="absolute -bottom-28 -right-28 h-[120px] w-auto rotate-12 hover:-rotate-6 transition-transform"
        />

        {/* wushu overview button */}
        <button
          onClick={() => router.push('/builder')}
          className="w-[450px] text-base text-black mb-6 hover:rotate-1 transition-transform cursor-pointer bg-[#e63946] rounded-2xl"
        >
          <h1 className="text-xl p-3 text-[#fdc921]">
            what is wushu?
          </h1>
          <p className="p-4">
          wushu is a form of chinese martial arts showcasing graceful, fast, and acrobatic movements.
          there are several fighting styles and weapons in wushu that are performed through choreographed routines.
          </p>
        </button>
      </div>
    </main>
  );
}
