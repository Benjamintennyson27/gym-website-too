import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "919876543210"; // Placeholder Indian number format
    const message = encodeURIComponent("Hi, I'm interested in joining FFL Gym. Can I get more details about the memberships?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 cursor-pointer animate-pulse-slow group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />
            {/* Optional tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-semibold py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl transform translate-y-1">
                Chat with us!
            </span>
        </a>
    );
}
