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
              <p>By accessing and using CP Companion, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3 className="text-base font-bold text-black mt-4">2. Description of Service</h3>
              <p>CP Companion is a desktop application that provides tracking and statistics for competitive programming platforms.</p>
              
              <h3 className="text-base font-bold text-black mt-4">3. User Conduct</h3>
              <p>You agree not to use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.</p>

              <h3 className="text-base font-bold text-black mt-4">4. Disclaimer of Warranties</h3>
              <p>The service is provided on an "as is" and "as available" basis without any warranties of any kind.</p>
            </>
          ) : (
            <>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-base font-bold text-black mt-6">1. Information Collection</h3>
              <p>CP Companion is designed with privacy in mind. The application runs locally on your machine and communicates directly with public APIs (like Clist.by) to fetch contest data.</p>
              
              <h3 className="text-base font-bold text-black mt-4">2. Local Storage</h3>
              <p>All your preferences, API keys, and cached data are stored entirely locally on your device using an SQLite database. We do not transmit your data to any central server.</p>
              
              <h3 className="text-base font-bold text-black mt-4">3. Third-Party Services</h3>
              <p>The application interacts with third-party APIs (e.g., Codeforces, LeetCode, Clist.by) directly from your IP address. Please review their respective privacy policies regarding API usage.</p>
              
              <h3 className="text-base font-bold text-black mt-4">4. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at support@cpcompanion.app.</p>
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
