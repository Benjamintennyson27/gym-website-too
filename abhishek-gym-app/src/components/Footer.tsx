import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] pt-24 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
            Ready To Grow?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
            Take the first step toward a stronger, healthier you by claiming your free one-week membership at FFL. Experience our state-of-the-art facilities, join our energizing classes, and see why FFL is the perfect place to reach your fitness goals.
          </p>
          <button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(255,94,58,0.4)]">
            Get free trial
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="var(--color-brand)" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-tight">FFL</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#project" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Project</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About Us</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:hello@ffl.com" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">hello@ffl.com</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              Contact Us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background texture/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
    </footer>
  );
}
