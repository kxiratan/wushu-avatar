'use client';
import {useState} from 'react';

export default function AvatarBuilder() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white grid-background p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setShowPopup(false)}
          className="text-sm text-black mb-6 hover:rotate-1 transition-transform cursor-pointer bg-[#e63946] rounded-lg"
        >
          <h1 className="text-lg p-1">
            what is wushu?
          </h1>
          <p className="p-2">
          wushu is a form of chinese martial arts showcasing graceful, fast, and acrobatic movements. 
          there are several fighting styles and weapons in wushu that are performed through choreographed routines.
          </p>
        </button>
      </div>
    </main>
  );
}
