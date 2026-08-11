import { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

export function FollowPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 1.5s delay
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('cp_companion_follow_popup_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('cp_companion_follow_popup_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[320px] sm:max-w-[340px] animate-fade-in transition-all">
      <div className="bg-white/95 backdrop-blur-md border-2 border-black/80 rounded-2xl p-4 shadow-2xl text-black relative">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 text-black/50 hover:text-black rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
          title="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Popup Header */}
        <div className="flex items-center gap-2 mb-2 pr-6">
          <div className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center shrink-0">
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
          </div>
          <span className="text-xs font-bold font-heading text-black tracking-tight">
            Support the Creators ✳︎
          </span>
        </div>

        <p className="text-[11px] text-black/75 leading-snug mb-3 font-body">
          Enjoying CP Companion? Follow the authors on X, GitHub & LinkedIn!
        </p>

        {/* Authors Links List */}
        <div className="space-y-2 pt-2 border-t border-black/10 text-xs">
          {/* Author 1: Mradul Gupta */}
          <div className="flex items-center justify-between bg-[#F4F4F0] p-2 rounded-xl border border-black/10">
            <div className="flex items-center gap-2">
              <img
                src="https://github.com/IamMradul.png"
                alt="Mradul Gupta"
                className="w-7 h-7 rounded-full border border-black/20 object-cover shrink-0"
              />
              <span className="font-bold text-black font-heading text-[11px]">Mradul Gupta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="https://x.com/MardulGupta"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-black text-white hover:bg-black/80 transition-colors"
                title="Follow Mradul Gupta on X"
              >
                <XIcon className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/IamMradul"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-black text-white hover:bg-black/80 transition-colors"
                title="Follow Mradul Gupta on GitHub"
              >
                <GithubIcon className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/mradul-gupta26/"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                title="Connect with Mradul Gupta on LinkedIn"
              >
                <LinkedinIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Author 2: Siddharth Paul */}
          <div className="flex items-center justify-between bg-[#F4F4F0] p-2 rounded-xl border border-black/10">
            <div className="flex items-center gap-2">
              <img
                src="https://github.com/siddharthpaul2005.png"
                alt="Siddharth Paul"
                className="w-7 h-7 rounded-full border border-black/20 object-cover shrink-0"
              />
              <span className="font-bold text-black font-heading text-[11px]">Siddharth Paul</span>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="https://x.com/SiddharthP29523"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-black text-white hover:bg-black/80 transition-colors"
                title="Follow Siddharth Paul on X"
              >
                <XIcon className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/siddharthpaul2005"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-black text-white hover:bg-black/80 transition-colors"
                title="Follow Siddharth Paul on GitHub"
              >
                <GithubIcon className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-paul-00ab59278/"
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-md bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                title="Connect with Siddharth Paul on LinkedIn"
              >
                <LinkedinIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
