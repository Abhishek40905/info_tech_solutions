import { Leaf, Factory, Home, HeartPulse, Package, Building2 } from 'lucide-react';

const industries = [
  { name: 'Agriculture (Smart Farming)', icon: Leaf, color: '#00f0ff' },
  { name: 'Industrial Automation (IIoT)', icon: Factory, color: '#8a2be2' },
  { name: 'Smart Homes', icon: Home, color: '#ffd700' },
  { name: 'Healthcare', icon: HeartPulse, color: '#00f0ff' },
  { name: 'Logistics & Asset Tracking', icon: Package, color: '#8a2be2' },
  { name: 'Smart Cities', icon: Building2, color: '#ffd700' }
];

export default function Industries() {
  return (
    <section className="relative py-20 bg-[#1a1b26]">
      <div className="absolute inset-0 hex-grid opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We <span className="gradient-logo">Transform</span>
          </h2>
          <p className="text-lg text-[#a0a0b0] max-w-2xl mx-auto">
            Deploying smart solutions across diverse sectors, revolutionizing traditional industries with IoT innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0f1014] rounded-xl p-6 hover-glow-cyan cursor-pointer flex items-center space-x-4"
                style={{
                  border: `1px solid ${industry.color}33`,
                  boxShadow: `0 0 10px ${industry.color}1a`
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${industry.color}1a`,
                    border: `1px solid ${industry.color}66`
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: industry.color }} />
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
