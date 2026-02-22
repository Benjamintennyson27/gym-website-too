import { Play, Star, Plus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Athlete running"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent"></div>

        {/* Orange glow effect */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-brand)]/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            Transform Your Body. <br />
            <span className="text-brand-gradient">Elevate Your Mind.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Join Jabalpur's most premium fitness destination. Experience world-class equipment, expert personal training, and a community dedicated to your peak performance.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(255,94,58,0.5)] flex items-center gap-2">
              Join Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                <Play fill="currentColor" size={20} className="ml-1 text-[var(--color-brand)]" />
              </div>
              <span className="font-medium text-lg">Watch Video</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-[var(--color-bg)] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-[var(--color-bg)] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-[var(--color-bg)] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" />
              <div className="w-12 h-12 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-surface-light)] flex items-center justify-center">
                <Plus size={20} className="text-gray-400" />
              </div>
            </div>
            <div>
              <div className="flex text-[var(--color-brand)] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-400 font-medium"><span className="text-white font-bold">1.7k</span> reviews</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Personal Training', 'Strength', 'Group Classes', 'Swimming', 'Cardio Equipment', 'Functional Workouts'].map((tag) => (
              <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
