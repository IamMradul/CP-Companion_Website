import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { SetupGuide } from './components/SetupGuide';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FollowPopup } from './components/FollowPopup';

export default function App() {
  return (
    <div className="relative min-h-screen w-full font-body overflow-x-hidden selection:bg-black selection:text-white bg-[#0B0C10] text-[#E2E8F0]">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <InteractiveDemo />
        <Features />
        <Architecture />
        <SetupGuide />
        <DownloadSection />
        <FaqSection />
      </main>
      <Footer />
      <FollowPopup />
    </div>
  );
}
