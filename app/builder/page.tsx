'use client';

import {useState} from "react";

export default function AvatarBuilder() {

  const [showSilks, setShowSilks] = useState(false);
  const [showWeapons, setShowWeapons] = useState(false);

  return (
    <main className="min-h-screen bg-white grid-background p-8 flex flex-col">
      
      <div className="flex items-center justify-center gap-8 w-full max-w-7xl mx-auto">
        <button 
          onClick={() => {
            setShowSilks(!showSilks);
            setShowWeapons(false);
          }}
          className="px-14 py-2 text-xl hover:rotate-3 transition-transform cursor-pointer bg-[#e63946] rounded-lg text-[#fdc921]">
          silk
        </button>
        <button 
          onClick={() => {
            setShowWeapons(!showWeapons);
            setShowSilks(false);
          }}
          className="px-10 py-2 text-xl hover:rotate-3 transition-transform cursor-pointer bg-[#e63946] rounded-lg text-[#fdc921]">
          weapon
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center max-w-7xl mx-auto h-full gap-8">
        {/* Left side */}
        <div className="flex items-center justify-end w-[200px]">
          {showSilks && (
            <img
              src="red-and-white-silk.png"
              alt="red and white silk"
              className="w-auto h-[300px] hover:rotate-4"
            />
          )}
          {showWeapons && (
            <img
              src="straightsword.png"
              alt="straight sword"
              className="w-auto h-[100px] hover:rotate-4"
            />
          )}
        </div>

        {/* Center — stick figure */}
        <img
            src="stick-figure.png"
            alt="stick figure"
            className="w-auto h-[300px] hover:rotate-4"
        />

        {/* Right side */}
        <div className="flex items-center justify-start w-[200px]">
          {showSilks && (
            <img
              src="blue-and-white-silk.png"
              alt="blue and white silk"
              className="w-auto h-[300px] hover:rotate-4"
            />
          )}
          {showWeapons && (
            <img
              src="broadsword.png"
              alt="broad sword"
              className="w-auto h-[80px] hover:rotate-4"
            />
          )}
        </div>
      </div>

    </main>
  );
}
