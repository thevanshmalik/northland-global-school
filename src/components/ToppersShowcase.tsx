'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ToppersShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toppers = [
    {
      name: 'Priya Sharma',
      percentage: '98.5%',
      year: '2024',
      subject: 'Science',
      image: '/api/placeholder/150/150',
      achievement: 'School Topper',
    },
    {
      name: 'Arjun Patel',
      percentage: '97.8%',
      year: '2024',
      subject: 'Commerce',
      image: '/api/placeholder/150/150',
      achievement: 'District Rank 2',
    },
    {
      name: 'Sneha Reddy',
      percentage: '97.2%',
      year: '2024',
      subject: 'Arts',
      image: '/api/placeholder/150/150',
      achievement: 'State Merit',
    },
    {
      name: 'Rahul Kumar',
      percentage: '96.9%',
      year: '2023',
      subject: 'Science',
      image: '/api/placeholder/150/150',
      achievement: 'School Topper',
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Academic Champions</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
            Celebrating the outstanding achievements of our students who have excelled in CBSE board examinations.
          </p>
        </motion.div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl text-center hover:scale-105 transition-all duration-300 group"
            >
              {/* Achievement Badge */}
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🏆</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {topper.achievement}
                </div>
              </div>

              {/* Student Info */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {topper.name}
              </h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {topper.percentage}
              </div>
              <div className="text-gray-700 dark:text-white/70 text-sm mb-2">
                {topper.subject} • {topper.year}
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-white/60 text-sm italic">
                "Northland Global School provided the perfect environment for academic excellence."
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">95%+</div>
                <div className="text-gray-700 dark:text-white/70">Average Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
                <div className="text-gray-700 dark:text-white/70">Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
                <div className="text-gray-700 dark:text-white/70">Merit Students</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 dark:text-white/80 text-lg mb-6">
            Join our community of achievers and unlock your potential.
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Apply for Admission
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToppersShowcase;
