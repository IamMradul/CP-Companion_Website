import { useState, useEffect } from 'react';
import { Calendar, LayoutGrid, Trophy, Layers, Play, ExternalLink, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface Contest {
  id: string;
  name: string;
  platform: string;
  startTime: string;
  duration: string;
  url: string;
  category: string;
}

const MOCK_CONTESTS: Contest[] = [
  {
    id: 'cf-998',
    name: 'Codeforces Round 998 (Div. 2)',
    platform: 'Codeforces',
    startTime: 'Today, 20:05 IST',
    duration: '2h 00m',
    url: 'https://codeforces.com/contests',
    category: 'Div 2'
  },
  {
    id: 'lc-435',
    name: 'LeetCode Weekly Contest 435',
    platform: 'LeetCode',
    startTime: 'Tomorrow, 08:00 IST',
    duration: '1h 30m',
    url: 'https://leetcode.com/contest',
    category: 'Weekly'
  },
  {
    id: 'ac-391',
    name: 'AtCoder Beginner Contest 391 (ABC391)',
    platform: 'AtCoder',
    startTime: 'Saturday, 17:30 IST',
    duration: '1h 40m',
    url: 'https://atcoder.jp/contests',
    category: 'ABC'
  },
  {
    id: 'cc-172',
    name: 'CodeChef Starters 172 (Rated till 5-star)',
    platform: 'CodeChef',
    startTime: 'Wednesday, 20:00 IST',
    duration: '2h 00m',
    url: 'https://codechef.com/contests',
    category: 'Starters'
  },
  {
    id: 'gfg-weekly',
    name: 'GeeksforGeeks Weekly Coding Contest 188',
    platform: 'GeeksforGeeks',
    startTime: 'Sunday, 19:00 IST',
    duration: '1h 30m',
    url: 'https://practice.geeksforgeeks.org/events',
    category: 'Weekly'
  },
  {
    id: 'hr-hackfest',
    name: 'HackerRank World CodeSprint 2026',
    platform: 'HackerRank',
    startTime: 'Next Friday, 22:00 IST',
    duration: '24h 00m',
    url: 'https://hackerrank.com/contests',
    category: 'Global'
  }
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'widget' | 'list' | 'calendar'>('widget');
  const [countdownSeconds, setCountdownSeconds] = useState(6138);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 86400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  const filteredContests = MOCK_CONTESTS.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.platform.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'All' || c.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <section id="demo" className="py-16 sm:py-24 relative z-10 bg-[#EAEAEA] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider font-mono shadow-sm">
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Live Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight font-heading">
            Experience CP Companion Directly in Your Browser
          </h2>
          <p className="text-black/70 text-sm sm:text-base font-body">
            Toggle between the Rainmeter-style desktop widget, list view, and grid calendar.
          </p>
        </motion.div>

        {/* Interactive Shell Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden border border-black/15 shadow-xl"
        >

          {/* Shell Bar */}
          <div className="bg-[#F4F4F0] px-4 sm:px-5 py-3 border-b border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-black font-heading">CP Companion Interactive Demo</div>
                <div className="text-[10px] text-black/60 font-mono">Live SQLite Sync Mode Active</div>
              </div>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center gap-1 bg-[#EAEAEA] p-1 rounded-xl border border-black/10 w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setActiveTab('widget')}
                className={`flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all shrink-0 ${activeTab === 'widget'
                    ? 'bg-black text-white shadow-sm font-semibold'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                  }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Rainmeter Widget</span>
              </button>
              <button
                onClick={() => setActiveTab('list')}
                className={`flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all shrink-0 ${activeTab === 'list'
                    ? 'bg-black text-white shadow-sm font-semibold'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                  }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>List View</span>
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all shrink-0 ${activeTab === 'calendar'
                    ? 'bg-black text-white shadow-sm font-semibold'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                  }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Calendar Grid</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Rainmeter Desktop Widget Simulation */}
          {activeTab === 'widget' && (
            <div className="p-5 sm:p-8 md:p-12 bg-[#F8F8F6] flex flex-col items-center justify-center min-h-[380px] sm:min-h-[420px] relative">
              <div className="text-center space-y-2 mb-6 sm:mb-8 relative z-10 max-w-full">
                <span className="inline-block text-[10px] sm:text-xs font-mono text-black uppercase tracking-wider sm:tracking-widest bg-black/5 border border-black/10 px-3 py-1.5 rounded-xl sm:rounded-full font-semibold leading-relaxed">
                  Rainmeter-Style Borderless Overlay
                </span>
                <p className="text-xs text-black/60 font-body px-2">
                  Pins seamlessly to your desktop corner. Drag anywhere, zero window chrome, live countdown.
                </p>
              </div>

              {/* The Widget Box */}
              <div className="relative z-10 w-full max-w-sm bg-white p-5 sm:p-6 rounded-2xl border-2 border-black/80 shadow-2xl transition-all cursor-move group">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono text-black/80 font-semibold uppercase tracking-wider">
                      Upcoming Contest
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 rounded font-bold">
                    Codeforces
                  </span>
                </div>

                <div className="space-y-3 text-left">
                  <div className="text-sm sm:text-base font-bold text-black leading-snug font-heading">
                    Codeforces Round 998 (Div. 2)
                  </div>

                  <div className="py-2.5 px-3 rounded-xl bg-[#F4F4F0] border border-black/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-black/60 uppercase">Starts In</div>
                      <div className="text-xl sm:text-2xl font-extrabold font-mono text-black tracking-tight">
                        {formatCountdown(countdownSeconds)}
                      </div>
                    </div>
                    <a
                      href="https://codeforces.com/contests"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-black text-white hover:bg-black/80 transition-colors shrink-0"
                      title="Open Codeforces Contest Page"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-black/70 font-mono">
                    <span>Duration: 2h 00m</span>
                    <span>Today, 20:05 IST</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[10px] text-black/60 font-mono">
                  <span>SQLite Cache: 5s Poll</span>
                  <span className="text-emerald-700 font-bold">RAM: ~12 MB</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Main Application List View */}
          {activeTab === 'list' && (
            <div className="p-4 sm:p-6 bg-white min-h-[380px] sm:min-h-[420px]">

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-black/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search contest name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F4F4F0] border border-black/10 rounded-xl pl-9 pr-4 py-2 text-xs text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                  {['All', 'Codeforces', 'LeetCode', 'AtCoder', 'CodeChef', 'GeeksforGeeks', 'HackerRank'].map((plat) => (
                    <button
                      key={plat}
                      onClick={() => setSelectedPlatform(plat)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${selectedPlatform === plat
                          ? 'bg-black text-white'
                          : 'bg-[#F4F4F0] text-black/70 hover:text-black hover:bg-black/5 border border-black/10'
                        }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {filteredContests.map((c) => (
                  <div
                    key={c.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#F8F8F6] border border-black/10 hover:border-black/30 transition-all gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                        {c.platform.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-black font-heading">{c.name}</div>
                        <div className="text-[11px] text-black/60 font-mono mt-0.5">
                          {c.platform} • {c.startTime} • ({c.duration})
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/5 text-black/80 border border-black/10 font-medium">
                        {c.category}
                      </span>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-black text-white hover:bg-black/80 transition-colors"
                        title="Go to contest page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Tab 3: Calendar Grid View */}
          {activeTab === 'calendar' && (
            <div className="p-3 sm:p-6 bg-white min-h-[380px] sm:min-h-[420px] overflow-x-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div className="text-xs font-bold text-black font-heading">August 2026 Contest Schedule</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-black/60">Timezone: Local System Time</div>
              </div>

              <div className="grid grid-cols-7 text-center text-[10px] sm:text-[11px] font-mono text-black/60 pb-2 border-b border-black/10 min-w-[280px]">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mt-3 min-w-[280px]">
                {Array.from({ length: 31 }).map((_, i) => {
                  const dayNum = i + 1;
                  const hasCodeforces = dayNum === 11 || dayNum === 24;
                  const hasLeetCode = dayNum === 12 || dayNum === 17 || dayNum === 25;
                  const hasAtCoder = dayNum === 15 || dayNum === 29;
                  const isToday = dayNum === 11;

                  return (
                    <div
                      key={dayNum}
                      className={`min-h-[48px] sm:min-h-[54px] p-1 sm:p-2 rounded-xl border flex flex-col justify-between transition-colors ${isToday
                          ? 'bg-[#F0F0EB] border-black shadow-sm font-bold'
                          : 'bg-[#F9F9F7] border-black/10 hover:border-black/30'
                        }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className={isToday ? 'font-bold text-black' : 'text-black/70'}>
                          {dayNum}
                        </span>
                        {isToday && (
                          <>
                            <span className="text-[9px] bg-black text-white px-1 rounded font-sans hidden sm:inline-block">Today</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-black sm:hidden" title="Today" />
                          </>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1 mt-1">
                        {hasCodeforces && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" title="Codeforces Contest" />
                        )}
                        {hasLeetCode && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500" title="LeetCode Contest" />
                        )}
                        {hasAtCoder && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-600" title="AtCoder Contest" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* Footer Bar */}
          <div className="bg-[#F4F4F0] px-4 sm:px-6 py-3 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4 text-[11px] sm:text-xs text-black/70 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>Direct Clist API v4 Integration</span>
            </span>
            <span>Synchronized with SQLite DB</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
