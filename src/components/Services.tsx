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
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-[#0f1014] max-w-3xl w-full mx-4 rounded-xl border border-white/10 overflow-hidden">
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: `${service.color}55` }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg"
              style={{ background: `${service.color}1a` }}
            >
              <Icon className="w-6 h-6" style={{ color: service.color }} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {service.title}
            </h3>
          </div>

          <button onClick={onClose}>
            <X className="w-6 h-6 text-white hover:text-red-400" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-8">
          <section>
            <h4 className="text-lg font-semibold text-white mb-2">
              Overview
            </h4>
            <p className="text-[#a0a0b0]">
              {service.fullDetails.overview}
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-white mb-3">
              Capabilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.fullDetails.capabilities.map((item, i) => (
                <li
                  key={i}
                  className="bg-[#1a1b26] p-3 rounded-lg text-[#c0c0d0]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
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