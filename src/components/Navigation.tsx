import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'Industries', 'About Us', 'Blogs', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1014]/90 backdrop-blur-md border-b border-[#00f0ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('Home')}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain text-[#ffd700] group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-[#ffd700] to-[#8a2be2] opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>

            <span className="text-2xl font-bold gradient-logo">
              ANcomevortex
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className={`text-sm font-medium transition-all duration-300 relative group ${currentPage === link
                    ? 'text-[#00f0ff] glow-cyan'
                    : 'text-[#a0a0b0] hover:text-[#00f0ff]'
                  }`}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] transition-all duration-300 ${currentPage === link ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#00f0ff]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1b26] border-t border-[#00f0ff]/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  onNavigate(link);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === link
                    ? 'text-[#00f0ff] bg-[#00f0ff]/10 neon-border-cyan'
                    : 'text-[#a0a0b0] hover:text-[#00f0ff] hover:bg-[#00f0ff]/5'
                  }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
