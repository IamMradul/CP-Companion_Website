import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Do I need to create any accounts or supply API keys?',
    answer: 'No! CP Companion connects to our centralized server automatically. Just download, install, and select your platforms.'
  },
  {
    question: 'Which competitive programming platforms are supported?',
    answer: 'CP Companion natively tracks Codeforces, LeetCode, AtCoder, CodeChef, GeeksforGeeks, HackerRank, and 50+ platforms dynamically. You can search, filter, select, and save your preferred platforms in settings.'
  },
  {
    question: 'How does the Rainmeter-style desktop widget work?',
    answer: 'The desktop widget operates as an independent borderless Tauri Webview window (`widget`). It features a live 1-second countdown timer to your next upcoming contest and polls your local machine SQLite database every 5 seconds to stay perfectly synced without consuming CPU or network bandwidth.'
  },
  {
    question: 'Will using CP Companion exceed Clist API rate limits?',
    answer: 'No! CP Companion connects to a centralized server which aggregates and caches the data for all users. You will never face rate limit issues or IP bans.'
  },
  {
    question: 'Does CP Companion support system tray and launch on startup?',
    answer: 'Yes! When you close the main application window, CP Companion intercepts the close event and minimizes to the system tray so your desktop widget and background sync keep running seamlessly. You can toggle "Launch on System Startup" directly in Settings.'
  },
  {
    question: 'How do I update CP Companion when a new release is available?',
    answer: 'CP Companion features a built-in update notification banner (`UpdateNotification.tsx`) that alerts you when a new release is available on GitHub. You can also download updated `.msi` installers directly from this download website.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10 bg-[#F4F4F0] border-t border-black/10">
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
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight font-heading">
            Everything You Need to Know
          </h2>
          <p className="text-black/70 text-base font-body">
            Have questions about CP Companion features, Clist API, or desktop widget behavior? We've got answers.
          </p>
        </motion.div>

        {/* List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="retro-card-light rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="text-base font-bold text-black font-heading group-hover:text-black/70 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-[#F4F4F0] border border-black/10 text-black transition-all transform ${isOpen ? 'rotate-180 bg-black text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ willChange: "height, opacity", transform: "translateZ(0)" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-black/80 font-body leading-relaxed border-t border-black/10 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
