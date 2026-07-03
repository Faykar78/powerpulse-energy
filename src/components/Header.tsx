import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Header({ currentView, setCurrentView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-industrial-charcoal/95 backdrop-blur-md shadow-lg border-transparent'
          : 'bg-black/20 backdrop-blur-sm border-white/10'
      }`}
    >
      <div className="flex justify-between items-center h-24 md:h-28 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center hover:opacity-90 active:scale-98 transition-transform h-full relative w-[280px]"
        >
          <Logo className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[260px] max-w-none" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-semibold uppercase tracking-wider text-xs hover:text-solar-red transition-colors active:scale-95 duration-200 relative py-2 ${
                currentView === item.id ? 'text-solar-red' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-solar-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA Get Quote Button */}
        <button
          onClick={() => handleNavClick('contact')}
          className="hidden md:flex bg-solar-red text-white font-bold uppercase tracking-wider text-xs px-6 h-12 items-center justify-center rounded hover:bg-red-700 hover:scale-105 duration-300 active:scale-95 cursor-pointer shadow-md shadow-solar-red/10"
        >
          Get Quote
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-solar-red transition-colors p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-industrial-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-semibold uppercase tracking-wider text-sm py-2 px-3 rounded transition-colors ${
                    currentView === item.id
                      ? 'bg-solar-red text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-solar-red text-white font-bold uppercase tracking-wider text-sm h-12 flex items-center justify-center rounded hover:bg-red-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
