"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_QUESTIONS } from '@/lib/constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-lightGray py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4 text-center">
          <span className="relative z-10">Frequently Asked Questions</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto text-center">
          Find answers to the most common questions about our dumpster rental services.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_QUESTIONS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
              <button
                className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-primary focus:outline-none bg-white hover:bg-background transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-primary'}`}
                />
              </button>
              {
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-text leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
