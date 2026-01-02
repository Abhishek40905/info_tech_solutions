//@ts-nocheck
import { useState } from 'react';
import {
  Cpu,
  Globe,
  Bot,
  Rocket,
  Layers,
  Lightbulb,
  GraduationCap,
  X
} from 'lucide-react';

/* =======================
   SERVICES DATA
======================= */

const services = [
  {
    id: 'drone-development',
    title: 'Custom Drone Development',
    icon: Rocket,
    color: '#ffd700',
    shortDescription:
      'Design and development of custom drones for industrial, research, and commercial applications.',
    fullDetails: {
      overview:
        'We design and manufacture custom drones tailored to industrial, research, and enterprise use cases with a focus on performance, reliability, and scalability.',
      capabilities: [
        'Custom drone frame and propulsion design',
        'Autonomous navigation & GPS systems',
        'Payload & sensor integration',
        'Computer vision & AI navigation',
        'Long-range communication systems',
        'Flight testing & optimization'
      ],
      industries: [
        'Agriculture & precision farming',
        'Aerial surveying & mapping',
        'Surveillance & security',
        'Infrastructure inspection',
        'Research & defense'
      ],
      technologies: [
        'PX4 / ArduPilot',
        'ROS',
        'Computer Vision',
        'AI & Machine Learning',
        'Custom embedded systems'
      ],
      deliverables: [
        'Fully functional drone system',
        'Firmware & control software',
        'Ground control interface',
        'Technical documentation',
        'Training & deployment support'
      ]
    }
  },

  {
    id: 'iot-development',
    title: 'Custom IoT Development',
    icon: Cpu,
    color: '#00f0ff',
    shortDescription:
      'End-to-end IoT solutions from hardware design to cloud platforms.',
    fullDetails: {
      overview:
        'We build scalable IoT ecosystems combining custom hardware, embedded firmware, and secure cloud infrastructure.',
      capabilities: [
        'PCB & electronic hardware design',
        'Embedded firmware development',
        'Wireless communication (WiFi, BLE, LoRa, NB-IoT)',
        'Cloud dashboards & analytics',
        'OTA firmware updates',
        'Secure device provisioning'
      ],
      industries: [
        'Smart cities',
        'Industrial IoT',
        'Healthcare devices',
        'Energy & utilities',
        'Logistics & asset tracking'
      ],
      technologies: [
        'ESP32 / STM32',
        'AWS IoT / Azure IoT',
        'MQTT / REST APIs',
        'Node.js / Python'
      ],
      deliverables: [
        'IoT hardware',
        'Firmware & backend services',
        'Web dashboards',
        'APIs & documentation',
        'Deployment & support'
      ]
    }
  },

  {
    id: 'web-app-development',
    title: 'Web & App Development',
    icon: Globe,
    color: '#8a2be2',
    shortDescription:
      'Modern web and mobile applications tailored for connected products.',
    fullDetails: {
      overview:
        'We build high-performance web and mobile applications that integrate seamlessly with hardware and cloud systems.',
      capabilities: [
        'Responsive web applications',
        'Cross-platform mobile apps',
        'Admin dashboards',
        'API & backend integration',
        'Real-time data visualization'
      ],
      industries: [
        'SaaS platforms',
        'IoT dashboards',
        'Enterprise systems',
        'Consumer applications'
      ],
      technologies: [
        'React / Next.js',
        'Flutter / React Native',
        'Node.js',
        'REST & GraphQL'
      ],
      deliverables: [
        'Web & mobile apps',
        'Backend APIs',
        'Deployment pipelines',
        'Maintenance & support'
      ]
    }
  },

  {
    id: 'prototyping',
    title: 'Prototyping',
    icon: Layers,
    color: '#00f0ff',
    shortDescription:
      'Rapid prototyping to validate ideas and product concepts.',
    fullDetails: {
      overview:
        'We help teams turn ideas into functional prototypes quickly for testing and validation.',
      capabilities: [
        'Rapid hardware prototyping',
        'Proof-of-concept builds',
        'Functional demos',
        'Design validation'
      ],
      industries: ['Startups', 'R&D teams', 'Innovation labs'],
      technologies: [
        '3D printing',
        'Embedded systems',
        'Rapid PCB fabrication'
      ],
      deliverables: [
        'Functional prototype',
        'Design files',
        'Test reports'
      ]
    }
  },

  {
    id: 'mvp-development',
    title: 'MVP Product Development',
    icon: Bot,
    color: '#8a2be2',
    shortDescription:
      'Build market-ready MVPs to test, launch, and iterate faster.',
    fullDetails: {
      overview:
        'We develop MVPs that balance speed, scalability, and quality for startups and innovators.',
      capabilities: [
        'Product requirement analysis',
        'Hardware + software MVPs',
        'Investor-ready demos',
        'Fast iteration cycles'
      ],
      industries: ['Startups', 'Early-stage companies'],
      technologies: [
        'Full-stack development',
        'Embedded systems',
        'Cloud infrastructure'
      ],
      deliverables: [
        'MVP product',
        'Source code & firmware',
        'Deployment setup'
      ]
    }
  },

  {
    id: 'consultancy',
    title: 'Technology Consultancy',
    icon: Lightbulb,
    color: '#ffd700',
    shortDescription:
      'Expert guidance on product strategy and technology decisions.',
    fullDetails: {
      overview:
        'We provide strategic technology consulting to reduce risk and accelerate development.',
      capabilities: [
        'System architecture design',
        'Technology stack selection',
        'Cost optimization',
        'Scalability planning'
      ],
      industries: ['Startups', 'SMEs', 'Enterprises'],
      technologies: ['Cloud', 'Embedded systems', 'AI platforms'],
      deliverables: [
        'Technical roadmap',
        'Architecture diagrams',
        'Consultation reports'
      ]
    }
  },

  {
    id: 'stem-education',
    title: 'STEM Courses for School Students',
    icon: GraduationCap,
    color: '#00f0ff',
    shortDescription:
      'Hands-on STEM education through robotics, electronics, and coding.',
    fullDetails: {
      overview:
        'We offer practical STEM programs that empower students through project-based learning.',
      capabilities: [
        'Robotics workshops',
        'Coding fundamentals',
        'IoT basics',
        'Hackathons & competitions'
      ],
      industries: ['Schools', 'Educational institutions'],
      technologies: [
        'Arduino',
        'Raspberry Pi',
        'Python / Scratch'
      ],
      deliverables: [
        'Curriculum',
        'Hands-on kits',
        'Student projects',
        'Certificates'
      ]
    }
  },

  /* =======================
     NEWLY ADDED SERVICES
  ======================= */

  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    icon: Globe,
    color: '#8a2be2',
    shortDescription:
      'Custom software solutions for business, industrial, and hardware-integrated systems.',
    fullDetails: {
      overview:
        'We develop tailor-made software solutions that integrate seamlessly with hardware, cloud platforms, and enterprise systems.',
      capabilities: [
        'Custom web & enterprise software',
        'Backend & API development',
        'Cloud-based systems',
        'Software-hardware integration',
        'Automation & workflow systems'
      ],
      industries: [
        'Enterprises',
        'Startups',
        'Manufacturing',
        'IoT & Robotics'
      ],
      technologies: [
        'React / Next.js',
        'Node.js / Python',
        'REST APIs',
        'Cloud platforms'
      ],
      deliverables: [
        'Custom software solution',
        'Source code',
        'Documentation',
        'Deployment & support'
      ]
    }
  },

  {
    id: 'custom-robot-development',
    title: 'Custom Robot Development',
    icon: Bot,
    color: '#00f0ff',
    shortDescription:
      'Design and development of custom robots with intelligent control and mobility.',
    fullDetails: {
      overview:
        'We design and develop advanced robotic systems with custom functionality for industrial, research, and defense applications.',
      capabilities: [
        'Custom robot mechanical design',
        'UMV-type robot development',
        'Autonomous navigation & control',
        'Sensor & actuator integration',
        'Custom functionality robots',
        'AI-based robotic systems'
      ],
      industries: [
        'Defense & security',
        'Industrial automation',
        'Research institutions',
        'Surveillance & inspection'
      ],
      technologies: [
        'ROS',
        'Embedded systems',
        'Computer Vision',
        'AI & Machine Learning'
      ],
      deliverables: [
        'Fully functional robot system',
        'Control software & firmware',
        'Technical documentation',
        'Testing & deployment support'
      ]
    }
  },

  {
    id: 'research-and-development',
    title: 'Research & Development',
    icon: Layers,
    color: '#ffd700',
    shortDescription:
      'Advanced R&D for innovative robots, IoT devices, and reverse engineering.',
    fullDetails: {
      overview:
        'Our R&D services focus on innovation, experimentation, and advanced engineering to develop next-generation robotic and IoT solutions.',
      capabilities: [
        'Product reverse engineering',
        'Innovative robot development',
        'Advanced IoT device development',
        'Technology feasibility analysis',
        'Prototype-to-product R&D'
      ],
      industries: [
        'Startups',
        'Research labs',
        'Defense',
        'Industrial R&D teams'
      ],
      technologies: [
        'Embedded systems',
        'Robotics platforms',
        'IoT architectures',
        'AI & data analytics'
      ],
      deliverables: [
        'R&D documentation',
        'Functional prototypes',
        'Design & analysis reports',
        'Innovation roadmaps'
      ]
    }
  }
];


/* =======================
   MODAL COMPONENT
======================= */

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#0f1014] max-w-4xl w-full mx-4 rounded-2xl
                      border border-white/10 overflow-hidden shadow-2xl">

        {/* Header */}
        <div
          className="relative p-8 border-b"
          style={{ borderColor: `${service.color}55` }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at top left, ${service.color}, transparent 60%)`
            }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl"
                style={{ background: `${service.color}1a` }}
              >
                <Icon className="w-7 h-7" style={{ color: service.color }} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-[#a0a0b0]">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <button onClick={onClose}>
              <X className="w-6 h-6 text-white hover:text-red-400 transition" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto space-y-10">

          {/* Overview */}
          <Section title="Overview">
            {service.fullDetails.overview}
          </Section>

          {/* Capabilities */}
          <GridSection
            title="Capabilities"
            items={service.fullDetails.capabilities}
          />

          {/* Industries */}
          <GridSection
            title="Industries"
            items={service.fullDetails.industries}
          />

          {/* Technologies */}
          <GridSection
            title="Technologies"
            items={service.fullDetails.technologies}
          />

          {/* Deliverables */}
          <GridSection
            title="Deliverables"
            items={service.fullDetails.deliverables}
          />
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-[#a0a0b0] leading-relaxed">
        {children}
      </p>
    </section>
  );
}

function GridSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="bg-[#1a1b26] border border-white/5 rounded-xl
                       px-4 py-3 text-[#c0c0d0]
                       hover:border-white/15 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}


/* =======================
   MAIN SERVICES COMPONENT
======================= */

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <section className="py-20 bg-[#0f1014]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="cursor-pointer bg-[#1a1b26] p-8 rounded-xl hover:scale-[1.02] transition"
              >
                <Icon
                  className="w-8 h-8 mb-4"
                  style={{ color: service.color }}
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#a0a0b0]">
                  {service.shortDescription}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  );
}