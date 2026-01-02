import { Brain, Cpu, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 bg-[#0f1014]">
      <div className="absolute inset-0 circuit-lines opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who <span className="gradient-logo">We Are</span>
            </h2>

            <p className="text-lg text-[#a0a0b0] leading-relaxed mb-6">
              Like the integration of mind and machine, <span className="text-[#00f0ff] font-semibold">ANcomevortex</span> bridges the gap between physical hardware and digital intelligence.
            </p>

            <p className="text-lg text-[#a0a0b0] leading-relaxed mb-8">
              We are a team of engineers and developers dedicated to pushing the boundaries of what's possible. From IoT devices that sense the world to robots that interact with it, we turn complex ideas into elegant, functional solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'Innovation First', color: '#00f0ff' },
                { icon: Cpu, label: 'Hardware Expertise', color: '#8a2be2' },
                { icon: Users, label: 'Client-Centric', color: '#ffd700' },
                { icon: Target, label: 'Result Driven', color: '#00f0ff' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-[#1a1b26] border"
                    style={{ borderColor: `${item.color}33` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                    <span className="text-sm text-white font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00f0ff]/20 to-[#8a2be2]/20 border border-[#00f0ff]/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block mb-6 relative">
                  <Cpu className="w-32 h-32 text-[#00f0ff] animate-pulse-slow" />
                  <div className="absolute inset-0 blur-xl bg-[#00f0ff] opacity-30"></div>
                </div>

                <h3 className="text-2xl font-bold gradient-logo mb-3">Engineering Excellence</h3>
                <p className="text-[#a0a0b0]">Building Tomorrow's Technology Today</p>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#8a2be2]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
