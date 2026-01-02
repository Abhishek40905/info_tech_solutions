//@ts-nocheck
import { motion } from 'framer-motion';

export function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(service)}
      className="text-left bg-[#1a1b26] p-8 rounded-xl border border-white/5
                 hover:border-white/15 transition focus:outline-none"
    >
      <Icon
        className="w-9 h-9 mb-4"
        style={{ color: service.color }}
      />
      <h3 className="text-xl font-bold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-[#a0a0b0] leading-relaxed">
        {service.shortDescription}
      </p>
    </motion.button>
  );
}
