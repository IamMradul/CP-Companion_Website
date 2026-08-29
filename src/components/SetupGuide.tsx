import { Key, CheckCircle2, PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function SetupGuide() {
  const steps = [
    {
      number: '01',
      title: 'Download & Install',
      description: 'Download the latest CP Companion installer and run it on your Windows machine. It installs in seconds and takes minimal space.',
      link: '#download',
      linkText: 'Download CP Companion'
    },
    {
      number: '02',
      title: 'Select Platforms',
      description: 'Launch CP Companion, open Settings, and select your preferred platforms like Codeforces or LeetCode. No accounts or API keys required!',
      link: '#download',
      linkText: 'Get Started'
    },
    {
      number: '03',
      title: 'You are ready to go!',
      description: 'The app will instantly fetch the latest contests from our central server. The desktop widget will automatically start tracking your next contest.',
      link: '#features',
      linkText: 'View Features'
    }
  ];

  return (
    <section id="setup" className="py-24 relative z-10 bg-[#F4F4F0] border-t border-black/10">
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
            <Key className="w-3.5 h-3.5" />
            <span>Zero-Config Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight font-heading">
            How to Get Started with CP Companion
          </h2>
          <p className="text-black/70 text-base font-body">
            Follow these 3 simple steps to install the app and sync upcoming contest schedules instantly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="retro-card-light p-8 rounded-3xl flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-black">
                    {step.number}
                  </span>
                  <span className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black tracking-tight font-heading">
                  {step.title}
                </h3>

                <p className="text-black/75 text-sm leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <a
                  href={step.link}
                  target={step.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:opacity-60 transition-colors group/link"
                >
                  <span>{step.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Note */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto text-center bg-white p-5 rounded-2xl border border-black/15 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <PlayCircle className="w-5 h-5 text-black shrink-0" />
          <span className="text-xs text-black/80 font-body">
            Note: The{' '}
            <a
              href="https://www.youtube.com/watch?v=ilP9Ci6ICvM"
              target="_blank"
              rel="noreferrer"
              className="text-black underline font-bold hover:opacity-60"
            >
              YouTube Video Guide
            </a>
            {' '}shows the older v2 setup. V3 is even easier with zero API keys required!
          </span>
        </motion.div>

      </div>
    </section>
  );
}
