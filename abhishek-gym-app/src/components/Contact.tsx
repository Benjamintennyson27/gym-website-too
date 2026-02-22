import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        goal: 'Weight Loss'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for actual form submission logic
        console.log('Form submitted:', formData);
        alert("Thanks for reaching out! Our team will contact you shortly.");
        setFormData({ name: '', phone: '', goal: 'Weight Loss' });
    };

    return (
        <section id="contact" className="py-24 bg-[var(--color-bg)] relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1 max-w-2xl">
                        <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Take Action</h3>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1] mb-6 uppercase">
                            Start Your <span className="text-brand-gradient">Transformation</span> Today
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Don't put off your fitness goals any longer. Drop your details below and one of our elite trainers will get back to you within 24 hours to schedule your free trial session.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-white">Fill The Form</h4>
                                    <p className="text-sm text-gray-400">Tell us about your goals.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-white">Get Contacted</h4>
                                    <p className="text-sm text-gray-400">We'll call to understand your needs.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-white">Start Training</h4>
                                    <p className="text-sm text-gray-400">Claim your free trial and begin.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-xl bg-[var(--color-surface)] p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
                        {/* Subtle glow behind form */}
                        <div className="absolute -inset-4 bg-[var(--color-brand)]/20 blur-[100px] z-0 rounded-full pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Claim Your Free Trial</h3>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="bg-[var(--color-bg)] text-white w-full px-4 py-4 rounded-xl border border-white/10 focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+91 98765 43210"
                                    className="bg-[var(--color-bg)] text-white w-full px-4 py-4 rounded-xl border border-white/10 focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="goal" className="text-sm font-medium text-gray-400">Primary Goal</label>
                                <select
                                    id="goal"
                                    value={formData.goal}
                                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    className="bg-[var(--color-bg)] text-white w-full px-4 py-4 rounded-xl border border-white/10 focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Weight Loss">Weight Loss</option>
                                    <option value="Muscle Gain">Muscle Gain</option>
                                    <option value="Endurance & Fitness">Overall Endurance & Fitness</option>
                                    <option value="Strength Training">Strength Training</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,94,58,0.3)]"
                            >
                                Get Started Now <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
