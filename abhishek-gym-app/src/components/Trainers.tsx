import { Instagram, Twitter } from 'lucide-react';

const trainers = [
    {
        name: 'Vikram Singh',
        role: 'Head Strength Coach',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop',
        focus: 'Powerlifting, Hypertrophy'
    },
    {
        name: 'Anjali Sharma',
        role: 'Yoga & Mobility Specialist',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
        focus: 'Flexibility, Core Strength'
    },
    {
        name: 'Rahul Verma',
        role: 'HIIT & Conditioning Expert',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
        focus: 'Weight Loss, Endurance'
    }
];

export default function Trainers() {
    return (
        <section id="trainers" className="py-24 bg-[var(--color-bg)] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Expert Guidance</h3>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
                        Meet Your <span className="text-brand-gradient">Coaches</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Our elite team of certified trainers is here to push your limits, perfect your form, and guarantee your results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="group rounded-3xl overflow-hidden bg-[var(--color-surface)] border border-white/5 relative">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                                <p className="text-[var(--color-brand)] font-medium mb-3">{trainer.role}</p>
                                <p className="text-sm text-gray-300 mb-6 border-l-2 border-[var(--color-brand)] pl-3">
                                    Focus: {trainer.focus}
                                </p>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand)] transition-colors text-white">
                                        <Instagram size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand)] transition-colors text-white">
                                        <Twitter size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
