import { useState, useEffect } from 'react';
import { Download, Monitor, ShieldCheck, Check, Apple, PlayCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function DownloadSection() {
  const [version, setVersion] = useState("3.1.1");
  const [downloadUrl, setDownloadUrl] = useState("/cp-companion_3.1.1_x64_en-US.msi");
  const [fileSize, setFileSize] = useState("~14 MB");
  const [showMacFix, setShowMacFix] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/IamMradul/CP-Companion/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.tag_name) {
          const v = data.tag_name.replace(/^v/, '');
          setVersion(v);

          const msiAsset = data.assets?.find((a: any) => a.name.endsWith('.msi'));
          if (msiAsset) {
            setDownloadUrl(msiAsset.browser_download_url);
            setFileSize(`~${Math.round(msiAsset.size / (1024 * 1024))} MB`);
          }
        }
      })
      .catch((err) => console.error("Failed to fetch latest release:", err));
  }, []);

  return (
    <section id="download" className="py-24 relative z-10 bg-[#EAEAEA] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
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
        </motion.div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black text-white p-8 sm:p-10 rounded-3xl border border-black shadow-2xl flex flex-col justify-between space-y-6 relative group"
          >
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
                  <div className="text-xs text-white/60 font-mono">Windows 10 / 11 • Version {version}</div>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed font-body">
                Includes the full Tauri v2 executable, system tray integration, Rainmeter desktop widget overlay, and SQLite local storage engine.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Single `.msi` Installer ({fileSize})</span>
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
                href={downloadUrl}
                download={`cp-companion_${version}_x64_en-US.msi`}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-black hover:bg-slate-200 font-semibold text-sm shadow-xl transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CP Companion v{version}</span>
              </a>
              <a
                href="https://github.com/IamMradul/CP-Companion/releases"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors"
              >
                <span>GitHub Releases</span>
              </a>
            </div>
          </motion.div>

          {/* macOS Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="retro-card-light p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <Apple className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black font-heading">macOS DMG</h3>
                  <div className="text-xs text-black/60 font-mono">Apple Silicon • v{version}</div>
                </div>
              </div>

              <p className="text-black/80 text-sm leading-relaxed font-body">
                Native macOS performance. Includes the full Tauri executable and SQLite local storage engine, perfectly tuned for Apple Silicon.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`/cp-companion_${version}_aarch64.dmg`}
                  download={`cp-companion_${version}_aarch64.dmg`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black text-white hover:bg-black/80 font-bold text-sm transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download DMG</span>
                </a>

                {/* YouTube Tutorial Link */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-black/20 text-black hover:bg-black/5 font-bold text-sm transition-colors shadow-sm"
                >
                  <PlayCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Tutorial</span>
                </a>
              </div>

              {/* Gatekeeper Dropdown */}
              <div className="pt-4">
                <button
                  onClick={() => setShowMacFix(!showMacFix)}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#ffeb3b] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-black shrink-0" />
                    <span className="text-sm font-black text-black font-heading uppercase tracking-wide">macOS Blockade Fix</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-black transition-transform duration-300 ${showMacFix ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showMacFix ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <div className="p-5 sm:p-6 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-5">

                    <div className="space-y-2">
                      <p className="text-sm text-black font-body font-bold">Why is this happening?</p>
                      <p className="text-[13px] text-black/80 font-body leading-relaxed">
                        Since this is an indie app without a $99/year Apple Developer account, macOS flags it as "downloaded from the internet" and throws up a security blockade.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-black font-body font-bold">The Fix (Takes 30 seconds):</p>
                      <p className="text-[13px] text-black/80 font-body leading-relaxed">
                        First, drag <code className="font-mono bg-black/5 px-1 py-0.5 rounded font-bold">cp-companion</code> from the `.dmg` into your Applications folder. Then, open the Terminal app on your Mac inside applications folder and run these two commands one by one:
                      </p>

                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <p className="text-xs text-black/90 font-mono font-bold">1. Restore executable permissions:</p>
                          <div className="text-[11px] font-mono text-black font-semibold select-all bg-[#F4F4F0] p-3 rounded-lg border border-black/20 whitespace-pre-wrap break-words">
                            chmod +x /Applications/cp-companion.app/Contents/MacOS/cp-companion
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-xs text-black/90 font-mono font-bold">2. Remove the Quarantine flag:</p>
                          <div className="text-[11px] font-mono text-black font-semibold select-all bg-[#F4F4F0] p-3 rounded-lg border border-black/20 whitespace-pre-wrap break-words">
                            xattr -cr /Applications/cp-companion.app
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
