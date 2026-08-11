import { Heart, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { LegalModal } from './LegalModal';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const [legalType, setLegalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="relative z-10 bg-[#EAEAEA] border-t border-black/10 pt-16 pb-12 text-black/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-black/10">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-black font-heading tracking-tight">CP Companion</span>
              <span className="text-xl text-black select-none font-bold">✳︎</span>
            </div>

            <p className="text-black/75 text-xs leading-relaxed max-w-sm font-body">
              Lightweight, cross-platform desktop application designed for Competitive Programming enthusiasts. Real-time contest tracking with a Rainmeter-style desktop widget.
            </p>

            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-black text-white font-bold">
                Tauri v2 + Rust
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/10 text-black border border-black/15 font-bold">
                Clist API v4
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/10 text-black border border-black/15 font-bold">
                SQLite Cache
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-black font-mono">Navigation</div>
            <ul className="space-y-2 font-body">
              <li><a href="#features" className="hover:text-black font-medium transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-black font-medium transition-colors">Live Interactive Demo</a></li>
              <li><a href="#architecture" className="hover:text-black font-medium transition-colors">Architecture</a></li>
              <li><a href="#setup" className="hover:text-black font-medium transition-colors">Setup Guide</a></li>
              <li><a href="#download" className="hover:text-black font-medium transition-colors">Download Windows Installer</a></li>
              <li><a href="#faq" className="hover:text-black font-medium transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* External Resources */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-black font-mono">Resources</div>
            <ul className="space-y-2 font-body">
              <li>
                <a href="https://clist.by" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black font-medium transition-colors">
                  <span>Clist.by API</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://v2.tauri.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black font-medium transition-colors">
                  <span>Tauri Framework v2</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://github.com/IamMradul/CP-Companion/releases" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black font-medium transition-colors">
                  <span>GitHub Releases</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=ilP9Ci6ICvM" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black font-medium transition-colors">
                  <span>Setup Video Tutorial</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Authors & X Handles Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-black font-mono">Created By</div>
              <ul className="space-y-2 font-body">
                <li>
                  <a
                    href="https://github.com/IamMradul"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-black hover:opacity-70 transition-opacity"
                  >
                    <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Mradul Gupta</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/siddharthpaul2005"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-black hover:opacity-70 transition-opacity"
                  >
                    <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Siddharth Paul</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-black/10">
              <div className="text-xs font-bold uppercase tracking-wider text-black font-mono">Connect on X</div>
              <ul className="space-y-1.5 font-body">
                <li>
                  <a
                    href="https://x.com/MardulGupta"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-black/80 hover:text-black transition-colors"
                  >
                    <XIcon className="w-3.5 h-3.5 shrink-0 text-black" />
                    <span>@MradulGupta</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/SiddharthP29523"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-black/80 hover:text-black transition-colors"
                  >
                    <XIcon className="w-3.5 h-3.5 shrink-0 text-black" />
                    <span>@SiddharthPaul</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-black/60 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} CP Companion.</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setLegalType('terms')} className="hover:text-black transition-colors underline-offset-2 hover:underline cursor-pointer">Terms of Service</button>
              <button onClick={() => setLegalType('privacy')} className="hover:text-black transition-colors underline-offset-2 hover:underline cursor-pointer">Privacy Policy</button>
            </div>
          </div>
          <div className="flex items-center gap-1 text-black/80 font-bold">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            <span>by Mradul Gupta & Siddharth Paul</span>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={!!legalType}
        onClose={() => setLegalType(null)}
        type={legalType}
      />
    </footer>
  );
}
