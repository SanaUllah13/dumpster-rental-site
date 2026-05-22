import Image from 'next/image';
import { CheckCircle, ReceiptText, Truck, Recycle, CalendarRange } from 'lucide-react';
import { WHY_CHOOSE_US_FEATURES } from '@/lib/constants';

const IconComponent = ({ name, size = 24 }: { name: string; size?: number }) => {
  switch (name) {
    case 'ReceiptText':
      return <ReceiptText size={size} className="text-accent" />;
    case 'Truck':
      return <Truck size={size} className="text-accent" />;
    case 'Recycle':
      return <Recycle size={size} className="text-accent" />;
    case 'CalendarRange':
      return <CalendarRange size={size} className="text-accent" />;
    default:
      return <CheckCircle size={size} className="text-accent" />;
  }
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4">
          <span className="relative z-10">Why Choose Dumpster Pro Rentals?</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Experience the difference with a local company dedicated to exceptional service.
        </p>

        <div className="space-y-16">
          {WHY_CHOOSE_US_FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              {/* Image Column */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-border">
                  <Image
                    src={feature.image} // Placeholder image path from constants
                    alt={feature.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 text-left' : 'text-left'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconComponent name={feature.icon} size={28} />
                  <h3 className="text-2xl font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-text leading-relaxed text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
