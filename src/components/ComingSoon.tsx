//@ts-nocheck
import { motion } from 'framer-motion';
import { Rocket, Cpu, Globe } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen bg-[#0f1014] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8a2be2]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center
                       bg-[#1a1b26] border border-white/10"
          >
            <Rocket className="w-10 h-10 text-[#ffd700]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Something Powerful is
            <span className="block text-transparent bg-clip-text
                             bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">
              Coming Soon
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#a0a0b0] max-w-xl mx-auto"
          >
            We’re building cutting-edge technology across drones, IoT,
            and intelligent software systems.
          </motion.p>

          {/* Feature Teasers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
          >
            <Feature icon={Cpu} label="Smart Hardware" />
            <Feature icon={Globe} label="Cloud Platforms" />
            <Feature icon={Rocket} label="Advanced Robotics" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-10"
          >
            <button
              className="px-8 py-3 rounded-xl font-semibold text-black
                         bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]
                         hover:opacity-90 transition"
            >
              Notify Me When It Launches
            </button>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-[#6b6b80] pt-6"
          >
            © {new Date().getFullYear()} • Engineering the Future
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="bg-[#1a1b26] border border-white/10 rounded-xl
                    p-4 flex flex-col items-center gap-3">
      <Icon className="w-6 h-6 text-[#00f0ff]" />
      <span className="text-sm text-[#c0c0d0] font-medium">
        {label}
      </span>
    </div>
  );
}
