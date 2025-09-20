'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Removed all Lucide React icons - using custom light theme elements instead

export default function InfrastructurePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      title: 'Modern Classrooms',
      description: 'Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.',
      lightElement: '🏫',
      lightColor: 'bg-blue-100 text-blue-700 border-blue-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Computer Labs',
      description: 'State-of-the-art computer laboratories with high-speed internet and latest software.',
      lightElement: '💻',
      lightColor: 'bg-green-100 text-green-700 border-green-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Science Laboratories',
      description: 'Fully equipped physics, chemistry, and biology labs for hands-on learning.',
      lightElement: '🔬',
      lightColor: 'bg-purple-100 text-purple-700 border-purple-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Library',
      description: 'Extensive library with thousands of books, digital resources, and quiet study areas.',
      lightElement: '📚',
      lightColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Sports Complex',
      description: 'Multi-purpose sports complex with basketball, volleyball, and indoor games facilities.',
      lightElement: '🏃‍♂️',
      lightColor: 'bg-orange-100 text-orange-700 border-orange-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Music & Arts Room',
      description: 'Dedicated spaces for music, dance, and visual arts with professional equipment.',
      lightElement: '🎵',
      lightColor: 'bg-pink-100 text-pink-700 border-pink-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Cafeteria',
      description: 'Clean and hygienic cafeteria serving nutritious meals and snacks.',
      lightElement: '🍽️',
      lightColor: 'bg-red-100 text-red-700 border-red-200',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Transportation',
      description: 'Safe and reliable school bus service covering all major areas of the city.',
      lightElement: '🚌',
      lightColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      image: '/api/placeholder/400/300',
    },
  ];

  const infrastructureHighlights = [
    {
      title: 'High-Speed Internet',
      description: 'WiFi connectivity throughout the campus',
      lightElement: '📶',
      lightColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      title: 'Security Systems',
      description: '24/7 CCTV surveillance and security personnel',
      lightElement: '🛡️',
      lightColor: 'bg-green-100 text-green-700 border-green-200',
    },
    {
      title: 'Green Campus',
      description: 'Eco-friendly environment with lush greenery',
      lightElement: '🌳',
      lightColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      title: 'Smart Classrooms',
      description: 'Interactive smart boards in every classroom',
      lightElement: '📹',
      lightColor: 'bg-purple-100 text-purple-700 border-purple-200',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              World-Class <span className="gradient-text">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art facilities provide the perfect environment for learning, growth, and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Infrastructure <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Modern amenities and facilities that support comprehensive learning and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                {/* Light Theme Element */}
                <div className={`w-16 h-16 ${highlight.lightColor} border-2 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl dark:hidden`}>
                  {highlight.lightElement}
                </div>
                {/* Dark Theme Element */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl hidden dark:flex">
                  {highlight.lightElement}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Explore our comprehensive range of facilities designed to enhance the learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  {/* Light Theme Element */}
                  <div className={`w-20 h-20 ${facility.lightColor} border-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-3xl dark:hidden`}>
                    {facility.lightElement}
                  </div>
                  {/* Dark Theme Element */}
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white text-3xl hidden dark:flex">
                    {facility.lightElement}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Schedule a <span className="gradient-text">Campus Tour</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Experience our world-class infrastructure firsthand. Schedule a personalized campus tour to see our facilities and meet our team.
              </p>
              <div className="campus-tour-buttons flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-500 dark:to-secondary-500 text-black dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Book Campus Tour
                </button>
                <button className="bg-gray-200 dark:glass text-black dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Infrastructure <span className="gradient-text">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/70">Smart Classrooms</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-white/70">Science Labs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/70">Library Books</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">5 Acres</div>
              <div className="text-white/70">Campus Area</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
