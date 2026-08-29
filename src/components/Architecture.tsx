import { Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Architecture() {
  return (
    <section id="architecture" className="py-24 relative z-10 bg-[#EAEAEA] border-t border-black/10">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>High Performance Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight font-heading">
            Modern 3-Tier Architecture
          </h2>
          <p className="text-black/70 text-base font-body">
            Designed to minimize memory consumption (~15MB installer) and guarantee 100% uptime without hitting Clist API rate limits.
          </p>
        </motion.div>

        {/* Tech Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="retro-card-light p-5 rounded-2xl space-y-2">
            <div className="text-xs font-mono uppercase text-black/60 font-bold">Backend</div>
            <div className="text-lg font-bold text-black font-heading">Rust & Tauri v2</div>
            <div className="text-xs text-black/70 font-body">Native OS integration, single-instance lock, system tray lifecycle.</div>
          </div>

          <div className="retro-card-light p-5 rounded-2xl space-y-2">
            <div className="text-xs font-mono uppercase text-black/60 font-bold">Frontend</div>
            <div className="text-lg font-bold text-black font-heading">React 19 & Vite</div>
            <div className="text-xs text-black/70 font-body">Tailwind CSS v4, Zustand store, Framer Motion animations.</div>
          </div>

          <div className="retro-card-light p-5 rounded-2xl space-y-2">
            <div className="text-xs font-mono uppercase text-black/60 font-bold">Storage Layer</div>
            <div className="text-lg font-bold text-black font-heading">SQLite (rusqlite)</div>
            <div className="text-xs text-black/70 font-body">Fast local caching of contests & encrypted API credentials.</div>
          </div>

          <div className="retro-card-light p-5 rounded-2xl space-y-2">
            <div className="text-xs font-mono uppercase text-black/60 font-bold">Data Source</div>
            <div className="text-lg font-bold text-black font-heading">Centralized Server</div>
            <div className="text-xs text-black/70 font-body">Node.js server handles API limits and normalizes data for all users.</div>
          </div>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 md:p-10 rounded-3xl border border-black/15 shadow-xl relative overflow-hidden"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-6 flex items-center justify-between border-b border-black/10 pb-4">
            <span className="flex items-center gap-2 font-bold text-black">
              <Code2 className="w-4 h-4 text-black" />
              <span>Multi-Window IPC & SQLite Caching Strategy</span>
            </span>
            <span className="bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold">Active Synchronization</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-black/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-black text-white font-mono font-bold flex items-center justify-center text-xs">01</span>
                <span className="text-[10px] font-mono bg-black/10 text-black px-2 py-0.5 rounded font-bold">Main Window</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">Centralized Server Fetch</h4>
              <p className="text-xs text-black/70 font-body">
                Initiates fast HTTP requests to our Node.js server via the `reqwest` crate only when requested or on startup.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAEAEA] border border-black/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-black text-white font-mono font-bold flex items-center justify-center text-xs">02</span>
                <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 rounded font-bold">Rust Core</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">SQLite Local Database Cache</h4>
              <p className="text-xs text-black/70 font-body">
                Executes `INSERT OR REPLACE` in `cp_companion.db` to save contest metadata locally in OS AppData directory.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-black/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-black text-white font-mono font-bold flex items-center justify-center text-xs">03</span>
                <span className="text-[10px] font-mono bg-black/10 text-black px-2 py-0.5 rounded font-bold">Widget Window</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">Local SQLite IPC Polling</h4>
              <p className="text-xs text-black/70 font-body">
                Widget polls local SQLite database every 5s via Tauri IPC. Never hits the network directly.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
