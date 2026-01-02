import { Linkedin, Twitter, Instagram, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0f1014] border-t border-[#00f0ff]/20">
      <div className="absolute inset-0 circuit-lines opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-[#ffd700]" />
              <span className="text-2xl font-bold gradient-logo">ANcomevortex</span>
            </div>
            <p className="text-[#a0a0b0]">
              Building the connected future with cutting-edge IoT and technology solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Industries', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#a0a0b0] hover:text-[#00f0ff] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1b26] border border-[#8a2be2]/30 flex items-center justify-center text-[#8a2be2] hover:bg-[#8a2be2]/10 hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1b26] border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] hover:bg-[#ffd700]/10 hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#00f0ff]/20 text-center">
          <p className="text-[#a0a0b0]">
            &copy; 2025 ANcomevortex IOT & Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
