import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="min-h-full bg-white px-6 md:px-10 py-12 md:py-20 flex flex-col justify-center border-r border-black/10">
      <div className="ornament"></div>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl serif leading-[1.1] mb-5 text-ink"
      >
        Excellence in <br /> Saudi Living
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[14px] leading-[1.6] text-gray-600 mb-8 max-w-sm"
      >
        Providing premium residential and commercial real estate solutions across Riyadh and Jeddah. 
        Our portfolio defines modern luxury integrated with cultural heritage.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link 
          to="/contact" 
          className="inline-block px-7 py-3.5 bg-ink text-white text-[11px] uppercase tracking-[1px] font-semibold w-fit hover:bg-gold transition-colors"
        >
          Inquire Now
        </Link>
      </motion.div>
    </section>
  );
}
