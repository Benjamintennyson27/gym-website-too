import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="var(--color-brand)" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display font-bold text-2xl tracking-tight">FFL</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#project" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Project</a>
            <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex">
            <button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,94,58,0.4)]">
              Free Trial
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button aria-label="Toggle navigation menu" onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About Us</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Services</a>
            <a href="#project" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Project</a>
            <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">FAQ</a>
            <button className="w-full text-left px-3 py-2 text-base font-medium text-[var(--color-brand)]">
              Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
