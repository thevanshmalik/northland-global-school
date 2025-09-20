'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Removed all icon imports - using custom elements instead

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: 'Our Mission',
      content: 'To provide a nurturing environment that fosters academic excellence, character development, and innovation, preparing students to become confident leaders and responsible global citizens.',
      gradient: 'from-blue-500 to-cyan-500',
      lightElement: '🎯',
      lightColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      title: 'Our Vision',
      content: 'To be a leading educational institution that inspires lifelong learning, promotes creativity, and shapes the future through excellence in education and character building.',
      gradient: 'from-purple-500 to-pink-500',
      lightElement: '👁️',
      lightColor: 'bg-purple-100 text-purple-700 border-purple-200',
    },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical behavior.',
      lightElement: '❤️',
      lightColor: 'bg-red-100 text-red-700 border-red-200',
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to education.',
      lightElement: '💡',
      lightColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
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
            Our <span className="gradient-text">Mission & Vision</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto">
            Guiding principles that shape our educational philosophy and drive our commitment to excellence.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
            >
              {/* Light Theme Element */}
              <div className={`w-16 h-16 ${card.lightColor} border-2 rounded-2xl flex items-center justify-center mb-6 text-2xl dark:hidden`}>
                {card.lightElement}
              </div>
              {/* Dark Theme Element */}
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 text-white text-2xl hidden dark:flex`}>
                {card.lightElement}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed text-lg">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="glass-card p-6 rounded-2xl"
              >
                {/* Light Theme Element */}
                <div className={`w-12 h-12 ${value.lightColor} border-2 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg dark:hidden`}>
                  {value.lightElement}
                </div>
                {/* Dark Theme Element */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-lg hidden dark:flex">
                  {value.lightElement}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-700 dark:text-white/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
