import React from 'react';

const slideMeta = [
  { id: 's1', label: '01 About' },
  { id: 's2', label: '02 Highlights' },
  { id: 's3', label: '03 Education' },
  { id: 's4', label: '04 Academic' },
  { id: 's5', label: '05 Experience' },
  { id: 's6', label: '06 Activities' },
  { id: 's7', label: '07 Skills' },
  { id: 's8', label: '08 Vision' },
  { id: 's9', label: '09 Contact' }
];

export default function SlideNavigationDock({ activeSlide, onSelectSlide }) {
  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      <div className="liquid-glass rounded-full px-3 py-2 flex items-center gap-1.5 sm:gap-2 border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        {slideMeta.map((slide, idx) => {
          const isActive = activeSlide === slide.id;
          const num = idx + 1;
          const formattedNum = num < 10 ? `0${num}` : `${num}`;

          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`group relative px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-[0_0_15px_rgba(0,245,255,0.5)] scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{formattedNum}</span>
              <span className={`hidden md:inline text-[11px] whitespace-nowrap transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                {slide.label.split(' ')[1]}
              </span>

              {/* Tooltip on mobile */}
              <span className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                {slide.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
