import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const preferences = [
  {
    title: 'State-of-the-Art Equipment',
    description: 'Access the latest and greatest fitness technology and machines to maximize your workout efficiency and results.',
  },
  {
    title: 'Expert Trainers',
    description: 'Our certified trainers are here to guide you every step of the way, offering personalized workout plans and expert advice. With years of experience, they ensure that your workouts are both safe and effective, helping you achieve your fitness goals faster and with confidence.',
  },
  {
    title: 'Wide Range of Classes',
    description: 'From high-intensity interval training (HIIT) to relaxing yoga sessions, find the perfect class to match your mood and goals.',
  },
  {
    title: 'Welcoming Community',
    description: 'Join a supportive and motivating environment where everyone is encouraged to reach their full potential together.',
  }
];

export default function Preferences() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="py-24 bg-[var(--color-bg)] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Preferences</h3>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-16 uppercase max-w-3xl">
          Why Choose Us For Your <span className="text-brand-gradient">Fitness</span> Journey?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Athlete lifting heavy ropes" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="flex flex-col gap-4">
            {preferences.map((pref, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border border-white/10 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-[var(--color-surface)]' : 'hover:bg-white/5'}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-xl sm:text-2xl font-bold ${isOpen ? 'text-[var(--color-brand)]' : 'text-white'}`}>
                      {pref.title}
                    </h3>
                    {isOpen ? (
                      <ArrowUpRight className="text-[var(--color-brand)]" size={24} />
                    ) : (
                      <ArrowDownRight className="text-gray-500" size={24} />
                    )}
                  </div>
                  
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {pref.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
