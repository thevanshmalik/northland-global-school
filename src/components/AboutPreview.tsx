'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Award, Globe } from 'lucide-react';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'We focus on academic excellence, character building, and personal growth.',
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'CBSE curriculum enhanced with innovative teaching methodologies.',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent track record of outstanding board examination results.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to be responsible global citizens.',
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Northland Global School</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                Established with a vision to provide world-class education, Northland Global School has been at the forefront of educational excellence for over 15 years. We believe in nurturing young minds to become confident, compassionate, and capable leaders of tomorrow.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed mb-8">
                Our commitment to academic excellence, combined with a focus on holistic development, ensures that every student receives the best possible education in a supportive and inspiring environment.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
