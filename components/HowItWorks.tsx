"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Ruler, CalendarDays, Truck, Recycle } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

const IconComponent = ({ name, size = 28, className }: { name: string; size?: number; className?: string }) => {
  switch (name) {
    case 'RulerText': // Name from constants is 'RulerText', but using Ruler icon
      return <Ruler size={size} className={className} />;
    case 'CalendarDays':
      return <CalendarDays size={size} className={className} />;
    case 'Truck':
      return <Truck size={size} className={className} />;
    case 'Recycle':
      return <Recycle size={size} className={className} />;
    default:
      return null;
  }
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="how-it-works" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 relative pb-4">
          <span className="relative z-10">How It Works</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Renting a dumpster from us is simple, straightforward, and stress-free.
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-16"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary transform -translate-y-1/2 z-0">
            <div className="absolute inset-0 flex justify-around items-center">
              {HOW_IT_WORKS_STEPS.slice(0, -1).map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-accent -ml-2"></div>
              ))}
               <div className="w-4 h-4 rounded-full bg-accent -mr-2"></div>
            </div>
          </div>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center relative z-10 bg-background p-6 rounded-lg md:shadow-none shadow-md">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white text-xl font-bold border-2 border-primary">
                  {step.step}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full">
                  <IconComponent name={step.icon} size={20} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-text leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
