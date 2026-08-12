import { Globe, Clock, Database, Shield, Bell, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const featureList = [
    {
      icon: Globe,
      color: 'from-blue-600 to-indigo-600',
      title: 'Multi-Platform Contest Tracker',
      description: 'Tracks upcoming contests across Codeforces, LeetCode, AtCoder, CodeChef, GeeksforGeeks, HackerRank, and 50+ platforms automatically via Clist API v4.'
    },
    {
      icon: Clock,
      color: 'from-blue-500 to-cyan-600',
      title: 'Rainmeter-Style Desktop Overlay',
      description: 'Sticky, borderless desktop widget with a 1-second live countdown timer. Constantly visible on your desktop without cluttering your workflow.'
    },
    {
      icon: Database,
      color: 'from-purple-600 to-indigo-600',
      title: 'Zero Rate Limiting & SQLite Caching',
      description: '2-tier synchronization strategy: Main app fetches API data and caches it into local SQLite (`cp_companion.db`). Desktop widget polls SQLite every 5s with 0% CPU.'
    },
    {
      icon: Layers,
      color: 'from-emerald-600 to-teal-600',
      title: 'Dual View Modes (List & Calendar)',
      description: 'Switch instantly between a searchable contest list with direct problem links and a monthly grid calendar visualization of your coding schedule.'
    },
    {
      icon: Bell,
      color: 'from-amber-600 to-orange-600',
      title: 'System Tray & Boot Autostart',
      description: 'Runs silently in your OS system tray. Closing the window hides it to tray so your countdowns keep running. Option to launch on system startup.'
    },
    {
      icon: Shield,
      color: 'from-rose-600 to-pink-600',
      title: '100% Private Local Credentials',
      description: 'Your Clist API credentials and platform settings are stored directly in your machine’s AppData SQLite database. Zero external telemetry or third-party servers.'
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-[#F4F4F0] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Feature Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight font-heading">
            Engineered for Serious <br />
            <span className="underline underline-offset-4">Competitive Programmers</span>
          </h2>
          <p className="text-black/70 text-base font-body">
            Everything you need to keep track of every contest round, division, and starter challenge with absolute reliability.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="retro-card-light p-6 rounded-2xl flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-black tracking-tight font-heading group-hover:text-black/70 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-black/75 text-sm leading-relaxed font-body">
                    {f.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-black/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
