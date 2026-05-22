import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Leaf, Truck, CalendarDays } from 'lucide-react';
import { COMPANY_TAGLINE, COMPANY_SUBTEXT, CTA_QUOTE, CTA_SIZES, TRUST_ICONS } from '@/lib/constants';

const Hero = () => {
  const IconComponent = ({ name }: { name: string }) => {
    switch (name) {
      case 'CheckCircle':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'Leaf':
        return <Leaf size={20} className="text-green-500" />;
      case 'Truck':
        return <Truck size={20} className="text-green-500" />;
      case 'CalendarDays':
        return <CalendarDays size={20} className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Placeholder image path
          alt="Industrial site with dumpsters"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-darkBg opacity-70"></div> {/* Dark Slate Overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {COMPANY_TAGLINE}
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            {COMPANY_SUBTEXT}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#quote-form" className="bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-700 transition-colors text-lg whitespace-nowrap">
              {CTA_QUOTE}
            </Link>
            <Link href="#dumpster-sizes" className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors text-lg whitespace-nowrap">
              {CTA_SIZES}
            </Link>
          </div>
        </div>

        {/* Right Floating Info Card */}
        <div className="mt-12 md:mt-0 bg-white text-darkBg p-6 rounded-lg shadow-xl max-w-sm md:absolute md:right-10 lg:right-20 xl:right-32 top-1/2 md:-translate-y-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Quick Info</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-500" />
              <span>Starting at <span className="font-bold">$299</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-500" />
              <span>Free Delivery</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-500" />
              <span>No Hidden Fees</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-darkBg bg-opacity-80 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-around items-center gap-6">
          {TRUST_ICONS.map((item) => (
            <div key={item.label} className="flex items-center space-x-2 text-white text-sm md:text-base">
              <IconComponent name={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
