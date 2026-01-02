import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      <div className="absolute inset-0 circuit-lines opacity-20"></div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8a2be2]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 neon-border-cyan mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-[#00f0ff]" />
          <span className="text-sm text-[#00f0ff] font-medium">Next-Gen Technology Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="block gradient-logo">IOT & Tech</span>
          <span className="block text-white glow-cyan">Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-[#a0a0b0] max-w-3xl mx-auto mb-12 leading-relaxed">
          Turning Vision into Code and Hardware. We build the connected future with cutting-edge IoT devices, intelligent robotics, and seamless software solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('Services')}
            className="group px-8 py-4 bg-transparent neon-border-cyan hover-glow-cyan rounded-lg font-semibold text-[#00f0ff] flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('Contact')}
            className="group px-8 py-4 bg-gradient-to-r from-[#ffd700] to-[#8a2be2] rounded-lg font-semibold text-[#0f1014] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '25+', label: 'Happy Clients' },
            { value: '120+', label: 'Projects' },
            { value: '5+', label: 'Years Exp.' },
            { value: '6', label: 'Industries' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-logo mb-2">{stat.value}</div>
              <div className="text-sm text-[#a0a0b0]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
