import { Play } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">About Us</h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
              Your <span className="text-brand-gradient">Fitness</span> Journey Starts Here
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At FFL Gym, we are dedicated to helping you unlock your full fitness potential. With top-tier equipment, expert trainers, and a welcoming community, we provide the perfect environment to push your limits and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">12<span className="text-[var(--color-brand)]">+</span></p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">27K<span className="text-[var(--color-brand)]">+</span></p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Members</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">60<span className="text-[var(--color-brand)]">+</span></p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Weekly Classes</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">117<span className="text-[var(--color-brand)]">+</span></p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Expert Trainers</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-video">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym interior" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/20">
              <Play fill="white" size={32} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
