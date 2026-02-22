import { Check, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '25',
    description: 'Essential package for regular workouts.',
    features: [
      'Unlimited access to the gym',
      '1 free group class per month',
      'Free access to relaxation areas'
    ],
    highlighted: false
  },
  {
    name: 'Standard',
    price: '35',
    description: 'Extended package for comprehensive training.',
    features: [
      'Unlimited access to the gym',
      '3 free group classes per month',
      'Free access to relaxation areas and sauna'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    price: '45',
    description: 'Deluxe package with maximum benefits.',
    features: [
      'Unlimited access to the gym',
      'Unlimited group classes',
      '2 personal training sessions per month',
      'Free access to relaxation areas, sauna, and pool'
    ],
    highlighted: false
  }
];

export default function Subscriptions() {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Subscriptions</h3>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-16 uppercase">
          Flexible <span className="text-brand-gradient">Plans</span> For Every Goal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 flex flex-col ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-light)] border border-white/10 relative overflow-hidden' 
                  : 'bg-[var(--color-surface)] border border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand)]"></div>
              )}
              
              <h3 className="text-2xl font-bold text-center mb-6">{plan.name}</h3>
              
              <div className="text-center mb-4">
                <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                <span className="text-gray-400 text-sm">/monthly</span>
              </div>
              
              <p className="text-gray-400 text-sm text-center mb-8 h-10">
                {plan.description}
              </p>
              
              <div className="flex-grow">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">What you get</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`w-full mt-10 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  plan.highlighted
                    ? 'bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white shadow-[0_0_20px_rgba(255,94,58,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                Get started
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
