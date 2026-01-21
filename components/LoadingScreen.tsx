
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(dotRef.current, {
      scale: 1.6,
      repeat: 1,
      yoyo: true,
      duration: 0.6,
      ease: "sine.inOut"
    })
    .to(containerRef.current, {
      yPercent: -100,
      opacity: 0.8, // Fade out gradual enquanto sobe
      duration: 1.5,
      ease: "expo.inOut",
      delay: 0.3
    });
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-vintage-ink flex flex-col items-center justify-center pointer-events-none transform-gpu"
    >
      <div ref={textRef} className="opacity-0 translate-y-6 flex items-center gap-2">
        <span className="text-white font-serif text-2xl md:text-3xl tracking-[0.4em] font-black">ADEMICON</span>
        <div ref={dotRef} className="w-2.5 h-2.5 bg-vintage-red rounded-full"></div>
      </div>
      
      <div className="absolute bottom-16 w-48 h-[1px] bg-white/5 overflow-hidden">
        <div className="w-full h-full bg-vintage-red/40 animate-loading-bar-smooth"></div>
      </div>

      <style>{`
        @keyframes loading-bar-smooth {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar-smooth {
          animation: loading-bar-smooth 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
