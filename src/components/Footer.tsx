import { motion } from 'motion/react';
import { Home, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/10">
      {/* CTA Section */}
      <div className="max-w-[1440px] mx-auto px-10 py-20 border-b border-black/10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl serif leading-tight mb-6">Secure Your <br /><span className="italic text-gold">Majestic</span> Legacy</h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-sm mb-8 opacity-80 text-sm">
              Experience the pinnacle of Saudi real estate. Join the Kingdom's most respected investors and visionary homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Link to="/contact" className="px-8 py-4 bg-ink text-white hover:bg-gold transition-colors uppercase tracking-[1px] font-bold text-[11px]">Start A Conversation</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="w-[200px] h-[200px] border border-gold/20 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-[140px] h-[140px] border border-gold/40 rounded-full flex items-center justify-center">
                   <Home size={32} className="text-gold opacity-20" />
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-[8px] uppercase font-bold italic serif tracking-[0.4em] text-gold animate-pulse">EST. 2011</span>
             </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[13px]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-[2px] serif uppercase">
                Al-Majd <span className="text-gold">Estates</span>
              </span>
            </Link>
            <p className="text-gray-500 font-light leading-relaxed pr-6">
              Official premium real estate and asset management service in the Kingdom of Saudi Arabia.
              National Housing Authority Certified.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-ink">Company</span>
            <div className="flex flex-col gap-2 font-light text-gray-600">
               <Link to="/about" className="hover:text-gold transition-colors">Our Vision</Link>
               <Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link>
               <Link to="/properties" className="hover:text-gold transition-colors">Active Sites</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-ink">Location</span>
            <div className="flex flex-col gap-1 font-light text-gray-600">
               <p>Riyadh Headquarters</p>
               <p>Sky Tower, Floor 42</p>
               <p>Kingdom of Saudi Arabia</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-ink">Registry</span>
            <p className="text-gray-500 font-light leading-relaxed">
              Enroll for exclusive property releases and market insights within the Kingdom.
            </p>
            <div className="flex border-b border-black/10 pb-1">
               <input type="email" placeholder="Email" className="bg-transparent outline-none flex-grow text-[12px] italic serif" />
               <button className="text-[10px] uppercase font-bold tracking-widest text-gold">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400">
           <span>&copy; {currentYear} Al-Majd Estates. All Rights Reserved.</span>
           <div className="flex gap-6">
              <a href="#" className="hover:text-ink transition-colors">Legal</a>
              <a href="#" className="hover:text-ink transition-colors">Privacy</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
