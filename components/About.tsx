"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ABOUT_STATS } from '@/lib/constants';

// Simple CountUp component for animating numbers
const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      const currentCount = Math.min(progress, 1) * end;
      setCount(Math.floor(currentCount));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <>{count}</>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary mb-12 relative pb-4">
          <span className="relative z-10">About Our Company</span>
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-accent"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Company Story */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-text leading-relaxed"
          >
            <motion.p variants={itemVariants} className="mb-6 text-lg">
              At <span className="font-bold text-primary">Dumpster Pro Rentals</span>, we've been providing top-notch waste management solutions for residential and commercial clients since 2010.
              Our commitment to prompt service, transparent pricing, and eco-friendly practices sets us apart.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6">
              We understand that every project is unique, from a small home cleanout to a large-scale construction job.
              That's why we offer a variety of dumpster sizes and flexible rental periods to meet your specific needs.
            </motion.p>
            <motion.blockquote variants={itemVariants} className="border-l-4 border-accent pl-4 text-xl font-semibold italic text-accent my-8">
              "Our mission is to make waste disposal hassle-free, affordable, and environmentally responsible for everyone."
            </motion.blockquote>
            <motion.p variants={itemVariants} className="text-lg">
              Our experienced team is dedicated to delivering and picking up your dumpster on schedule, ensuring your project stays on track.
              We pride ourselves on excellent customer service and strive to exceed your expectations with every rental.
            </motion.p>
          </motion.div>

          {/* Right Column: Image with Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary shadow-lg"
          >
            <Image
              src="/images/about-us.jpg" // Placeholder image path
              alt="Dumpster Pro Rentals team"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
            <span className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
              Serving Since 2010
            </span>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {ABOUT_STATS.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-accent mb-2">
                {stat.value.includes('+') ? (
                  <CountUp end={parseInt(stat.value)} />
                ) : stat.value.includes('%') ? (
                  <CountUp end={parseInt(stat.value)} />
                ) : (
                  <CountUp end={parseInt(stat.value)} />
                )}{stat.value.replace(/\d/g, '')}
              </p>
              <p className="text-primary text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
