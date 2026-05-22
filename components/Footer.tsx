import Link from 'next/link';
import { COMPANY_NAME, COMPANY_TAGLINE, NAV_LINKS, SERVICES_LIST, PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkBg text-white border-t-4 border-accent py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-white text-3xl font-bold tracking-tight mb-3">
              {COMPANY_NAME}
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">{COMPANY_TAGLINE}</p>
            {/* Placeholder for Eco-Friendly Certified Badge */}
            <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              Eco-Friendly Certified
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES_LIST.map((service, index) => (
                <li key={index}>
                  <Link href="#services" className="text-muted hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-accent" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-muted hover:text-accent transition-colors">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-accent" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-muted hover:text-accent transition-colors">{EMAIL_ADDRESS}</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-muted">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted border-opacity-30 mt-12 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-1">Licensed and Insured for your peace of mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
