import { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatError, setChatError] = useState('');
  const [chatSuccess, setChatSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChatSend = (e) => {
    e.preventDefault();
    const trimmed = chatMessage.trim();
    if (!trimmed) {
      setChatError('Please type your inquiry or question.');
      return;
    }
    if (trimmed.length < 3) {
      setChatError('Inquiry must be at least 3 characters.');
      return;
    }

    setChatError('');
    setChatSuccess(true);
    setTimeout(() => {
      setChatMessage('');
      setChatSuccess(false);
      setChatOpen(false);
    }, 2200);
  };

  return (
    <>
      {/* Floating Chat Box */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white border border-[#c59b27]/40 rounded-2xl shadow-2xl p-5 backdrop-blur-xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h4 className="text-sm font-bold font-serif text-neutral-900">Mahek Advisor Online</h4>
                <p className="text-[10px] text-neutral-500 font-medium">Available to answer inquiries</p>
              </div>
            </div>
            <button
              onClick={() => {
                setChatOpen(false);
                setChatError('');
              }}
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-3">
            <div className="p-3.5 rounded-2xl bg-white border border-[#c59b27]/20 text-xs text-neutral-700 leading-relaxed font-normal">
              Hello! Welcome to Mahek Group. Inquiring about our Real Estate (Mahek IT Park / Estates), Hilton Garden Inn, Technical Textiles (Scap Group), or Pharma divisions? How can we assist you today?
            </div>
            {chatSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 font-medium flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Message received! An advisor will respond shortly.</span>
              </div>
            )}
          </div>

          {!chatSuccess && (
            <div>
              <form onSubmit={handleChatSend} noValidate className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => {
                    setChatMessage(e.target.value);
                    if (chatError) setChatError('');
                  }}
                  placeholder="Type your question..."
                  className={`flex-1 bg-white border rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none transition-colors ${
                    chatError
                      ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#c59b27]'
                  }`}
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-[#c59b27] hover:bg-[#aa7f17] text-white font-bold text-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {chatError && (
                <p className="mt-1.5 text-[11px] text-red-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-500" />
                  <span>{chatError}</span>
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Back to top */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-white border border-[#c59b27]/50 text-[#9a7210] hover:bg-[#c59b27] hover:text-white flex items-center justify-center hover:shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Chat / Consultation Trigger */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Chat with Advisor"
          className="relative w-14 h-14 rounded-full bg-[#c59b27] hover:bg-[#aa7f17] text-white flex items-center justify-center hover:shadow-[0_4px_20px_rgba(197,155,39,0.3)] transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
