import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Monitor, ShieldCheck, Apple, PlayCircle, ChevronDown, DotIcon, X, Heart, Lightbulb, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FUN_FACTS = [
  "Competitive programmers spend 80% of their time thinking and only 20% writing code. It's all about problem-solving!",
  "The first programming competition took place in 1970 at Texas A&M University.",
  "Top competitive programmers can type over 100 words per minute, but optimal code often requires fewer lines.",
  "Tech giants like Google and Meta heavily recruit competitive programmers for their ability to write highly optimized code under pressure.",
  "Many competitive programming problems are based on real-world scenarios, like routing network traffic or optimizing delivery routes.",
  "Gennady Korotkevich, one of the most famous competitive programmers, has won top honors in almost every major coding competition worldwide."
];

export function DownloadSection() {
  const [version, setVersion] = useState("3.1.1");
  const [downloadUrl, setDownloadUrl] = useState("/cp-companion_3.1.2_x64_en-US.msi");
  const [macDownloadUrl, setMacDownloadUrl] = useState("/cp-companion_3.1.2_aarch64.dmg");
  const [fileSize, setFileSize] = useState("~14 MB");
  const [showMacFix, setShowMacFix] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentFact, setCurrentFact] = useState(FUN_FACTS[0]);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const handleCopy = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (showMacFix) {
      setCurrentFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
    }
  }, [showMacFix]);

  const handleDownload = () => {
    setShowThankYou(true);
  };

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

          const dmgAsset = data.assets?.find((a: any) => a.name.endsWith('.dmg'));
          if (dmgAsset) {
            setMacDownloadUrl(dmgAsset.browser_download_url);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Windows Column */}
          <div className="flex flex-col h-full gap-6">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black text-white p-8 sm:p-10 rounded-3xl border border-black shadow-2xl flex flex-col justify-between space-y-6 relative group shrink-0"
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
                    <DotIcon className="w-3.5 h-3.5 text-white" />
                    <span>Single Installer file ({fileSize})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DotIcon className="w-3.5 h-3.5 text-white" />
                    <span>Autostart Plugin Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DotIcon className="w-3.5 h-3.5 text-white" />
                    <span>Rainmeter Desktop Widget</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DotIcon className="w-3.5 h-3.5 text-white" />
                    <span>SQLite Offline Storage</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={downloadUrl}
                  download={`cp-companion_${version}_x64_en-US.msi`}
                  onClick={handleDownload}
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

            {/* Fact Box */}
            <AnimatePresence>
              {showMacFix && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 rounded-3xl border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] p-8 sm:p-10 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 bg-[#ffeb3b] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-black text-xl sm:text-2xl text-black font-heading mb-3 uppercase tracking-wide">Fun Fact</h4>
                  <p className="text-sm sm:text-base text-black/80 font-body leading-relaxed max-w-[320px] font-medium">
                    {currentFact}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                  href={macDownloadUrl}
                  download={`cp-companion_${version}_aarch64.dmg`}
                  onClick={handleDownload}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black text-white hover:bg-black/80 font-bold text-sm transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download DMG</span>
                </a>

                {/* YouTube Tutorial Link */}
                <a
                  href="https://www.youtube.com/watch?v=iwOJhyQ6Uw8"
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
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-black/90 font-mono font-bold">1. Restore executable permissions:</p>
                            <button
                              onClick={() => handleCopy("chmod +x /Applications/cp-companion.app/Contents/MacOS/cp-companion", setCopied1)}
                              className="p-1 hover:bg-black/5 rounded text-black/60 hover:text-black transition-colors flex items-center justify-center gap-1 group"
                              title="Copy command"
                            >
                              {copied1 ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
                              <span className="text-[10px] font-bold uppercase tracking-wider">{copied1 ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <div className="text-[11px] font-mono text-black font-semibold select-all bg-[#F4F4F0] p-3 rounded-lg border border-black/20 whitespace-pre-wrap break-words">
                            chmod +x /Applications/cp-companion.app/Contents/MacOS/cp-companion
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-black/90 font-mono font-bold">2. Remove the Quarantine flag:</p>
                            <button
                              onClick={() => handleCopy("xattr -cr /Applications/cp-companion.app", setCopied2)}
                              className="p-1 hover:bg-black/5 rounded text-black/60 hover:text-black transition-colors flex items-center justify-center gap-1 group"
                              title="Copy command"
                            >
                              {copied2 ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
                              <span className="text-[10px] font-bold uppercase tracking-wider">{copied2 ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
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

      {/* Thank You Popup */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showThankYou && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto w-full max-w-sm bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center relative"
            >
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 border border-red-200">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-black mb-2">Thank You!</h3>
              <p className="text-sm font-body text-black/70 leading-relaxed">
                Your download should start automatically. We appreciate your support for CP Companion!
              </p>
            </motion.div>
          </div>
        )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
