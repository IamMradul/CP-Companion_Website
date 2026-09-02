import { X } from 'lucide-react';
import { useEffect } from 'react';

type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | null;
};

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <h2 className="text-xl font-bold font-heading text-black">
            {type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-black/60 hover:text-black hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto font-body text-sm text-black/80 space-y-4">
          {type === 'terms' ? (
            <>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-base font-bold text-black mt-6">1. Acceptance of Terms</h3>
              <p>By downloading, installing, or using CP Companion, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              
              <h3 className="text-base font-bold text-black mt-4">2. Description of Service</h3>
              <p>CP Companion is a lightweight, cross-platform desktop application designed to track upcoming competitive programming contests. It fetches data via our servers and features a desktop widget for live tracking.</p>
              
              <h3 className="text-base font-bold text-black mt-4">3. External Data Sources</h3>
              <p>The application connects to our servers to fetch contest data aggregated from third-party platforms. You are expected to use this service reasonably without attempting to overload our servers or abuse the provided data.</p>

              <h3 className="text-base font-bold text-black mt-4">4. User Conduct</h3>
              <p>You agree not to use the service for any illegal or unauthorized purpose.</p>

              <h3 className="text-base font-bold text-black mt-4">5. Disclaimer of Warranties</h3>
              <p>The application is provided "as is" and "as available" without warranties of any kind. We are not responsible for any downtime or inaccuracies in the contest data.</p>
            </>
          ) : (
            <>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-base font-bold text-black mt-6">1. Information Collection</h3>
              <p>CP Companion is built with a privacy-first architecture. The application connects to our centralized server to fetch contest data. We do not collect, track, or transmit any personal analytics or identifiable data from your device.</p>
              
              <h3 className="text-base font-bold text-black mt-4">2. Local Storage</h3>
              <p>Your app preferences and cached contest schedules are securely stored offline in a local SQLite database on your device. No personal information is ever sent to our servers.</p>
              
              <h3 className="text-base font-bold text-black mt-4">3. Third-Party Services</h3>
              <p>The application fetches data aggregated from platforms like Codeforces, LeetCode, and Clist.by through our server. The app itself does not make direct network requests to these third-party APIs.</p>
              
              <h3 className="text-base font-bold text-black mt-4">4. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us on X (Twitter): <a href="https://x.com/MardulGupta" target="_blank" rel="noreferrer" className="text-black font-bold hover:underline">@MradulGupta</a> or <a href="https://x.com/SiddharthP29523" target="_blank" rel="noreferrer" className="text-black font-bold hover:underline">@SiddharthPaul</a>.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-black/10 bg-[#FAFAFA] flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
