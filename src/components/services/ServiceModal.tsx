//@ts-nocheck

import { X } from 'lucide-react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = service.icon;

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-[#0f1014] max-w-3xl w-full mx-4
                     rounded-xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: `${service.color}1a` }}
              >
                <Icon style={{ color: service.color }} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
            </div>

            <button onClick={onClose}>
              <X className="w-6 h-6 text-white hover:text-red-400" />
            </button>
          </header>

          {/* Content */}
          <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
            <Section title="Overview">
              {service.details.overview}
            </Section>

            <ListSection title="Capabilities" items={service.details.capabilities} />
            <ListSection title="Industries" items={service.details.industries} />
            <ListSection title="Technologies" items={service.details.technologies} />
            <ListSection title="Deliverables" items={service.details.deliverables} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-[#a0a0b0]">{children}</p>
    </section>
  );
}

function ListSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section>
      <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="bg-[#1a1b26] rounded-lg px-4 py-2 text-[#c0c0d0]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
