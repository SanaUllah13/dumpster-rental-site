import { Home, Building, HardHat, TreePalm, Box, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import { SERVICES_LIST } from '@/lib/constants';

const IconComponent = ({ name, size = 24 }: { name: string; size?: number }) => {
  switch (name) {
    case 'Home':
      return <Home size={size} className="text-primary" />;
    case 'Building':
      return <Building size={size} className="text-primary" />;
    case 'HardHat':
      return <HardHat size={size} className="text-primary" />;
    case 'TreePalm':
      return <TreePalm size={size} className="text-primary" />;
    case 'Box':
      return <Box size={size} className="text-primary" />;
    case 'Paintbrush':
      return <Paintbrush size={size} className="text-primary" />;
    default:
      return null;
  }
};

const Services = () => {
  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4">
          <span className="relative z-10">Our Services</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of dumpster rental services to meet every need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-accent flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <IconComponent name={service.icon} size={48} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-text leading-relaxed flex-1 mb-4">{service.description}</p>
              <Link href="#contact" className="text-accent font-semibold hover:underline flex items-center group">
                Learn More
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
