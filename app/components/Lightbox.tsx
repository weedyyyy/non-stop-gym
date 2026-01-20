"use client";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function Lightbox({ isOpen, onClose, title, subtitle, imageUrl }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:text-[#c9a227] transition-colors bg-[#1a1a1a] rounded-full border border-[#2a2a2a] hover:border-[#c9a227]"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-2xl border border-[#2a2a2a] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="aspect-[4/3] w-full bg-[#0f0f0f] flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1f1f1f] border-2 border-[#2a2a2a] flex items-center justify-center mb-6">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-[#3a3a3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-500 text-lg">Image coming soon</span>
            </div>
          )}
        </div>

        {/* Info bar */}
        <div className="p-6 border-t border-[#2a2a2a]">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#c9a227]/50 pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#c9a227]/50 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#c9a227]/50 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#c9a227]/50 pointer-events-none" />
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        Click outside or press X to close
      </div>
    </div>
  );
}
