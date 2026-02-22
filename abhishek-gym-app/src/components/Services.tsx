import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Personal training',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Fitness Classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Swim Training',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Medical Checkup',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-bg)] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Our Services</h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
              Unleash Your Potential: <span className="text-brand-gradient">Premium Fitness Services</span> Tailored For You
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At FFL Gym, we offer personalized fitness services to help you reach your goals. From one-on-one training to high-energy classes and recovery sessions, we provide everything you need to succeed in your fitness journey.
            </p>
          </div>
          
          <div className="flex gap-4 pb-2">
            <button aria-label="Previous service" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button aria-label="Next service" className="w-12 h-12 rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] flex items-center justify-center transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div key={index} className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] aspect-[4/3] relative rounded-3xl overflow-hidden group cursor-pointer snap-start flex-shrink-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <div className="w-10 h-10 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center group-hover:bg-[var(--color-brand)] transition-colors">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
