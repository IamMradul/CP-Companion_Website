import { Download, Monitor, Terminal, ShieldCheck, Check } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative z-10 bg-[#EAEAEA] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider font-mono shadow-sm">
            <Download className="w-3.5 h-3.5" />
            <span>Download & Releases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight font-heading">
            Get CP Companion for Your Desktop
          </h2>
          <p className="text-black/70 text-base font-body">
            Free, open-source, lightweight (~15MB installer). No bloat, no subscription fees.
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-black text-white p-8 rounded-3xl border border-black shadow-2xl flex flex-col justify-between space-y-6 relative md:col-span-2 group">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide uppercase font-mono shadow-md">
              Recommended
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Windows Installer (x64)</h3>
                  <div className="text-xs text-white/60 font-mono">Windows 10 / 11 • Version 3.1.1</div>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed font-body">
                Includes the full Tauri v2 executable, system tray integration, Rainmeter desktop widget overlay, and SQLite local storage engine.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Single `.msi` Installer (~14 MB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Autostart Plugin Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Rainmeter Desktop Widget</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>SQLite Offline Storage</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-black hover:bg-slate-200 font-semibold text-sm shadow-xl transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CP Companion v3.1.1</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors"
              >
                <span>GitHub Releases</span>
              </a>
            </div>
          </div>

          {/* Linux/macOS */}
          <div className="retro-card-light p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-black font-heading">Linux & macOS</h3>
                <div className="text-xs text-black/60 font-mono">AppImage, `.deb` & macOS DMG</div>
              </div>

              <p className="text-black/75 text-xs leading-relaxed font-body">
                Build native binaries effortlessly using Rust & Node.js environment or grab cross-compiled assets from GitHub releases.
              </p>

              <div className="p-3 rounded-xl bg-[#F4F4F0] border border-black/10 space-y-1">
                <div className="text-[10px] font-mono text-black/60">Build command:</div>
                <div className="text-xs font-mono text-black font-bold select-all">
                  npm run tauri build
                </div>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-black text-white hover:bg-black/80 font-semibold text-xs transition-colors"
            >
              <span>View Open Source Repo</span>
            </a>
          </div>

        </div>

        {/* Verification */}
        <div className="mt-12 max-w-5xl mx-auto bg-white p-6 rounded-2xl border border-black/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-black shrink-0" />
            <div>
              <div className="font-bold text-black font-heading">Safe & Transparent Software</div>
              <div className="text-black/70 font-body">100% open source under MIT License. Direct Rust SQLite database, zero tracking telemetry.</div>
            </div>
          </div>
          <div className="font-mono text-black bg-[#F4F4F0] border border-black/15 px-3 py-1.5 rounded-lg shrink-0 font-bold">
            SHA256 Verified Release
          </div>
        </div>

      </div>
    </section>
  );
}
