import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { BackgroundVideo } from './BackgroundVideo';
import { Download, Monitor, Cpu, Key, Sparkles, Copy, Check } from 'lucide-react';

const INTRO_TEXT =
  'Glad you stopped in. Good taste tends to find us. Ready to track every coding contest with CP Companion?';

export function Hero() {
  const { displayed, done } = useTypewriter({
    text: INTRO_TEXT,
    speed: 38,
    startDelay: 600,
  });

  const [showButtons, setShowButtons] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('support@cpcompanion.app');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pb-16 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#EAEAEA]">
      {/* Background Video ONLY in Hero section */}
      <BackgroundVideo />

      {/* Hero Content Overlay */}
      <div className="max-w-2xl relative z-10 pointer-events-auto">

        {/* 1. Blurred intro label */}
        <div
          className="select-none mb-4 sm:mb-6 text-black font-body"
          style={{
            fontSize: 'clamp(18px, 4vw, 28px)',
            lineHeight: 1.3,
            fontWeight: 400,
            filter: 'blur(1.5px)',
          }}
        >
          Hey there, meet CP Companion,
          <br />
          The Ultimate Desktop App for Competitive Programmers
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-black mb-6 min-h-[64px] font-body"
          style={{
            fontSize: 'clamp(18px, 4vw, 28px)',
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className={`flex flex-wrap gap-2 items-center transition-all duration-400 ease-out ${showButtons
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[8px] pointer-events-none'
            }`}
          style={{
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Primary Action Pill */}
          <a
            href="#download"
            className="inline-flex items-center justify-center bg-black text-white rounded-full text-sm sm:text-base px-5 py-2.5 hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] font-medium gap-2"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download Windows MSI (v3.1.1)</span>
          </a>

          {/* Secondary Action Pills */}
          <a
            href="#demo"
            className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-2"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Try Interactive Demo</span>
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-2"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>View Architecture</span>
          </a>

          <a
            href="#setup"
            className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-2"
          >
            <Key className="w-3.5 h-3.5" />
            <span>3-Min Setup Guide</span>
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium shadow-xs hover:shadow-md gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Browse Features</span>
          </a>

          {/* Contact email pill button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="inline-flex items-center justify-center text-black bg-transparent border border-black/25 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer font-medium gap-2 group"
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-1">
                {copied ? 'Copied to clipboard!' : 'mradul0507@gmail.com'}
              </span>
            </span>
            {copied ? <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
          </button>
        </div>

        {/* Quick App Release Badge Pill */}
        <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center gap-3 text-xs text-black/80 font-mono">
          <span className="bg-black text-white px-2.5 py-0.5 rounded-full font-bold">CP Companion v3.1.1</span>
          <span>Codeforces • LeetCode • AtCoder • CodeChef • GFG • HackerRank • 100+</span>
        </div>

      </div>
    </section>
  );
}
