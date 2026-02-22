export default function Locations() {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Our Locations</h3>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-12 uppercase max-w-4xl">
          Visit Our <span className="text-brand-gradient">Premium Facility</span> Today
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mb-16">
          <div className="shrink-0">
            <p className="text-5xl sm:text-6xl font-black text-white mb-2">1<span className="text-[var(--color-brand)]"></span></p>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Premium Location</p>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Located in the heart of Jabalpur, our state-of-the-art facility is designed to give you the ultimate fitness experience. Drop by for a tour, meet our trainers, and see the FFL difference yourself.
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117361.644383424!2d79.86608882583562!3d23.1814674062039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FFL Gym Location Jabalpur"
          />
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--color-brand)]/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
}
