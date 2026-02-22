import { Wifi, Dumbbell, Coffee, Car, ShieldCheck, Droplets } from 'lucide-react';

const amenities = [
    {
        icon: <Dumbbell size={32} className="text-[var(--color-brand)]" />,
        title: 'State-of-the-Art Equipment',
        description: 'Premium machines from top global brands.'
    },
    {
        icon: <Droplets size={32} className="text-[var(--color-brand)]" />,
        title: 'Sanitized Lockers & Showers',
        description: 'Fresh towels, hygienic showers, and secure lockers.'
    },
    {
        icon: <Wifi size={32} className="text-[var(--color-brand)]" />,
        title: 'Free High-Speed WiFi',
        description: 'Stay connected and stream your favorite playlists.'
    },
    {
        icon: <Coffee size={32} className="text-[var(--color-brand)]" />,
        title: 'In-house Nutrition Cafe',
        description: 'Post-workout shakes, protein snacks, and fresh meals.'
    },
    {
        icon: <Car size={32} className="text-[var(--color-brand)]" />,
        title: 'Dedicated Parking',
        description: 'Hassle-free, secure parking space for all members.'
    },
    {
        icon: <ShieldCheck size={32} className="text-[var(--color-brand)]" />,
        title: '24/7 Security',
        description: 'Train with peace of mind in our fully secure facility.'
    }
];

export default function Amenities() {
    return (
        <section id="amenities" className="py-24 bg-[var(--color-surface)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">World-Class Facilities</h3>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
                        Experience Premium <span className="text-brand-gradient">Amenities</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We supply everything you need for a comfortable and effective workout experience. Just show up, and leave the rest to us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-[var(--color-bg)] border border-white/5 hover:border-[var(--color-brand)]/50 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-light)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {amenity.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{amenity.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {amenity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
