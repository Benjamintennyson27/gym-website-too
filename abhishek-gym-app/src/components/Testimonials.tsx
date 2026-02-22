import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
    {
        name: 'Raj S.',
        role: 'Member since 2023',
        content: "The personal training here changed my life. I dropped 15kg in 6 months and have never felt stronger. The community and the equipment are just unmatched in Jabalpur.",
        rating: 5
    },
    {
        name: 'Priya K.',
        role: 'Member since 2024',
        content: "I love the group classes! The energy is always high, the trainers actually care about your form, and the facilities are spotless. Highly recommend the HIIT sessions.",
        rating: 5
    },
    {
        name: 'Amit D.',
        role: 'Member since 2022',
        content: "Premium equipment and a strictly professional environment. The 24/7 access is perfect for my unpredictable work schedule. Best investment I've made in myself.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[var(--color-surface)] relative border-t border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-[var(--color-brand)]/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Real Results</h3>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
                        Stories From Our <span className="text-brand-gradient">Community</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Don't just take our word for it. Hear from athletes and beginners alike who have transformed their lives at FFL Gym.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[var(--color-bg)] p-8 rounded-3xl border border-white/5 relative group hover:border-white/20 transition-all">
                            <MessageSquareQuote size={40} className="text-white/5 absolute top-6 right-6 group-hover:text-[var(--color-brand)]/20 transition-colors" />

                            <div className="flex text-[var(--color-brand)] mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white tracking-tight">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
