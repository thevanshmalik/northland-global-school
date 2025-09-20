'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      lightElement: '👥',
      lightColor: 'bg-blue-100 text-blue-700 border-blue-200',
      title: 'Holistic Development',
      description: 'We focus on academic excellence, character building, and personal growth.',
    },
    {
      lightElement: '📚',
      lightColor: 'bg-green-100 text-green-700 border-green-200',
      title: 'Modern Curriculum',
      description: 'CBSE curriculum enhanced with innovative teaching methodologies.',
    },
    {
      lightElement: '🏆',
      lightColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      title: 'Academic Excellence',
      description: 'Consistent track record of outstanding board examination results.',
    },
    {
      lightElement: '🌍',
      lightColor: 'bg-purple-100 text-purple-700 border-purple-200',
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
              <p className="text-xl text-gray-700 dark:text-white/90 leading-relaxed mb-6">
                Established with a vision to provide world-class education, Northland Global School has been at the forefront of educational excellence for over 15 years. We believe in nurturing young minds to become confident, compassionate, and capable leaders of tomorrow.
              </p>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-8">
                Our commitment to academic excellence, combined with a focus on holistic development, ensures that every student receives the best possible education in a supportive and inspiring environment.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <div className="w-5 h-5">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent"></div>
              </div>
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
                {/* Light Theme Element */}
                <div className={`w-12 h-12 ${feature.lightColor} border-2 rounded-xl flex items-center justify-center mb-4 text-lg dark:hidden`}>
                  {feature.lightElement}
                </div>
                {/* Dark Theme Element */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 text-white text-lg hidden dark:flex">
                  {feature.lightElement}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed">
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
