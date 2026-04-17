import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-black/10 transition-all duration-500 bg-white/95 backdrop-blur-md'
      )}
    >
      <div className="max-w-[1440px] mx-auto h-full px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-[2px] serif uppercase">
            Al-Majd <span className="text-gold">Estates</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[11px] uppercase tracking-[1.5px] font-semibold transition-colors",
                location.pathname === item.href ? "text-gold" : "hover:text-gold text-ink"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 flex flex-col p-6 gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
