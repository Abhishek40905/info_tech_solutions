import { useState } from 'react';
import  {services}  from './services.data';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal.tsx';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <section className="py-20 bg-[#0f1014]">
        <div className="max-w-7xl mx-auto grid gap-6 px-4
                        grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setActiveService}
            />
          ))}
        </div>
      </section>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  );
}
