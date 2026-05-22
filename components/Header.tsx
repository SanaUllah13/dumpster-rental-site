"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-border' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-primary text-2xl font-bold tracking-tight">
          {COMPANY_NAME}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-text hover:text-accent font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <a href={`tel:${PHONE_NUMBER}`} className="text-primary flex items-center space-x-2 hover:text-accent transition-colors">
              <Phone size={18} />
              <span className="font-semibold">{PHONE_NUMBER}</span>
            </a>
            <Link href="#quote-form" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-text hover:text-accent font-medium text-lg" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={`tel:${PHONE_NUMBER}`} className="text-primary flex items-center space-x-2 hover:text-accent text-lg">
                <Phone size={20} />
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>
            </li>
            <li>
              <Link href="#quote-form" className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 text-lg" onClick={() => setIsOpen(false)}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
