'use client';

import {useState} from "react";

export default function AvatarBuilder() {

  const [showSilks, setShowSilks] = useState(false);
  const [showWeapons, setShowWeapons] = useState(false);

  const [hoveredSilk, setHoveredSilk] = useState<string | null>(null);
  const [hoveredWeapon, setHoveredWeapon] = useState<string | null>(null);

  const [selectedSilk, setSelectedSilk] = useState<string | null>(null);
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);

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
                onClick={() => setSelectedSilk("red-and-white-silk.png")}
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
                onClick={() => setSelectedWeapon("straightsword.png")}
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
        <div className="relative flex items-center justify-center">
            <img
              src="stick-figure.png"
              alt="stick figure"
              className="w-auto h-[300px] hover:rotate-4"
            />

            {selectedSilk && (
              <img
                src={selectedSilk}
                alt="selected silk"
                className="absolute top-13 left-1/2 -translate-x-1/2 h-[280px] w-auto pointer-events-none"
              />
            )}

            {selectedWeapon && (
              <img
                src={selectedWeapon}
                alt="selected weapon"
                className="absolute top-30 right-27 h-[100px] w-auto"
              />
            )}

        </div>


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
                onClick={() => setSelectedSilk("blue-and-white-silk.png")}
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
                onClick={() => setSelectedWeapon("broadsword.png")}
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

      {selectedSilk && selectedWeapon && (
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (selectedWeapon === "straightsword.png") {
                window.open("https://www.youtube.com/watch?v=46K8_vHfsXE", "_blank")
              }
              if (selectedWeapon === "broadsword.png") {
                window.open("https://www.youtube.com/watch?v=ACSxPTgmPBA", "_blank")
              }
            }}
            className="px-14 py-2 text-xl hover:rotate-3 transition-transform cursor-pointer bg-[#e63946] rounded-lg text-[#fdc921]">
            competition time!
          </button>
        </div>
      )}

    </main>
  );
}
