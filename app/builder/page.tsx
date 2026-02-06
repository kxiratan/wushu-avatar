'use client';

import {useState} from "react";

export default function AvatarBuilder() {

  const [showSilks, setShowSilks] = useState(false);
  const [showWeapons, setShowWeapons] = useState(false);

  const [hoveredSilk, setHoveredSilk] = useState<string | null>(null);
  const [hoveredWeapon, setHoveredWeapon] = useState<string | null>(null);

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
            <div
              className="relative"
              onMouseEnter={() => setHoveredSilk("red")}
              onMouseLeave={() => setHoveredSilk(null)}
            >
              <img
                src="red-and-white-silk.png"
                alt="red and white silk"
                className="w-auto h-[300px] hover:rotate-4"
              />

              {hoveredSilk === "red" && (
                <div className="absolute top-full left-0">
                  <p className="text-center">
                    the phoenix is commonly embroidered on silks, associated with femininity and grace
                  </p>
                </div>
              )}
            </div>
          )}
          {showWeapons && (
            <div
              className="relative"
              onMouseEnter={() => setHoveredWeapon("straight")}
              onMouseLeave={() => setHoveredWeapon(null)}
            >
              <img
                src="straightsword.png"
                alt="straight sword"
                className="w-auto h-[100px] hover:rotate-4"
              />

              {hoveredWeapon === "straight" && (
                <div className="absolute top-full left-0">
                  <p className="text-center">
                    double-edged and straight, emphasizes grace and precision
                  </p>
                </div>
              )}
            </div>
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
            <div
              className="relative"
              onMouseEnter={() => setHoveredSilk("blue")}
              onMouseLeave={() => setHoveredSilk(null)}
            >
              <img
                src="blue-and-white-silk.png"
                alt="blue and white silk"
                className="w-auto h-[300px] hover:rotate-4"
              />

              {hoveredSilk === "blue" && (
                <div className="absolute top-full left-0">
                  <p className="text-center">
                    the dragon is a common symbol in wushu, symbolizing masculinity, strength, and power
                  </p>
                </div>
              )}
            </div>
          )}
          {showWeapons && (
            <div
              className="relative"
              onMouseEnter={() => setHoveredWeapon("broad")}
              onMouseLeave={() => setHoveredWeapon(null)}
            >
              <img
                src="broadsword.png"
                alt="broad sword"
                className="w-auto h-[80px] hover:rotate-4"
              />

              {hoveredWeapon === "broad" && (
                <div className="absolute top-full left-0">
                  <p className="text-center">
                    single-edged and curved, focused on powerful and fast movements
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </main>
  );
}
