import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { BackgroundVideo } from './BackgroundVideo';
import { Download, Monitor, Cpu, Key, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const INTRO_TEXT =
  'Glad you stopped in. Good taste tends to find us. Ready to track every coding contest with CP Companion?';

export function Hero() {
  const { displayed, done } = useTypewriter({
    text: INTRO_TEXT,
    speed: 38,
    startDelay: 600,
  });

  const [version, setVersion] = useState("3.1.1");

  useEffect(() => {
    fetch("https://api.github.com/repos/IamMradul/CP-Companion/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.tag_name) {
          const v = data.tag_name.replace(/^v/, '');
          setVersion(v);
        }
      })
      .catch((err) => console.error("Failed to fetch latest release:", err));
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 md:justify-center md:py-0 px-4 sm:px-8 md:px-12 overflow-hidden bg-[#EAEAEA]">
      {/* Background Video ONLY in Hero section */}
      <BackgroundVideo />

      {/* Hero Content Overlay: Mobile uses flex justify-between min-h-screen calc; Laptop uses standard block */}
      <div className="max-w-2xl relative z-10 pointer-events-auto flex flex-col justify-between min-h-[calc(100vh-9rem)] md:min-h-0 md:block w-full">
        
        {/* Top Text Block (Mobile top / Laptop standard flow) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 md:pt-0 md:mb-6"
        >
          {/* 1. Blurred intro label */}
          <div
            className="select-none mb-3 sm:mb-4 text-black font-body"
            style={{
              fontSize: 'clamp(18px, 4vw, 28px)',
              lineHeight: 1.3,
              fontWeight: 400,
              filter: 'blur(1.5px)',
              textShadow: '0px 0px 20px rgba(255, 255, 255, 0.9), 0px 0px 40px rgba(255, 255, 255, 0.7)'
            }}
          >
            Hey there, meet CP Companion,
            <br />
            The Ultimate Desktop App for Competitive Programmers
          </div>

          {/* 2. Typewriter text */}
          <p
            className="text-black min-h-[56px] sm:min-h-[64px] font-body"
            style={{
              fontSize: 'clamp(17px, 4vw, 28px)',
              lineHeight: 1.35,
              fontWeight: 400,
              textShadow: '0px 0px 20px rgba(255, 255, 255, 0.9), 0px 0px 40px rgba(255, 255, 255, 0.7)'
            }}
          >
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
            )}
          </p>
        </motion.div>

        {/* Bottom Buttons & Release Badge Block (Mobile bottom / Laptop standard flow) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 md:pt-0"
        >
          {/* 3. Action pill buttons */}
          <div className="flex flex-wrap gap-2 items-center">
            {/* Primary Action Pill */}
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-black text-white rounded-full text-xs sm:text-sm md:text-base px-5 py-2.5 sm:py-3 hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] font-medium gap-2"
            >
              <Download className="w-4 h-4 shrink-0 text-white" />
              <span>Download Windows MSI (v{version})</span>
            </a>

            {/* Secondary Action Pills */}
            <a
              href="#demo"
              className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-3.5 sm:px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-1.5"
            >
              <Monitor className="w-3.5 h-3.5 shrink-0" />
              <span>Try Interactive Demo</span>
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-3.5 sm:px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>View Architecture</span>
            </a>

            <a
              href="#setup"
              className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-3.5 sm:px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-1.5"
            >
              <Key className="w-3.5 h-3.5 shrink-0" />
              <span>3-Min Setup Guide</span>
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Browse Features</span>
            </a>
          </div>

          {/* Quick App Release Badge Pill */}
          <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-black/10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-black/80 font-mono">
            <span className="bg-black text-white px-2.5 py-0.5 rounded-full font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">CP Companion v{version}</span>
            <span className="text-[11px] sm:text-xs font-semibold">Codeforces • LeetCode • AtCoder • CodeChef • GFG • HackerRank</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
