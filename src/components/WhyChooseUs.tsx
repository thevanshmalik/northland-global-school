'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Shield, 
  Globe,
  Heart,
  Zap
} from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'CBSE curriculum enhanced with innovative teaching methodologies.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent track record of outstanding board examination results.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure campus with 24/7 safety measures and caring staff.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'International programs and cultural exchange opportunities.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focus on academics, sports, arts, and character building.',
      color: 'from-pink-500 to-rose-500',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Why Choose <span className="gradient-text">Northland Global School?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/90 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing an exceptional educational experience that prepares students for success in an ever-changing world. Here's what sets us apart:
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  {highlight.description}
                </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ready to Join Our Community?</h3>
            </div>
            <p className="text-gray-600 dark:text-white/90 text-lg mb-6">
              Experience the difference that quality education and personalized attention can make in your child's academic journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule a Visit
              </button>
              <button className="glass text-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200/30 dark:hover:bg-white/20 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
