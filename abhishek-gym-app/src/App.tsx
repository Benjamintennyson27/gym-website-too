import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Preferences from './components/Preferences';
import Subscriptions from './components/Subscriptions';
import Locations from './components/Locations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white font-sans selection:bg-[var(--color-brand)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Amenities />
        <Trainers />
        <Testimonials />
        <Preferences />
        <Subscriptions />
        <Contact />
        <Locations />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
