'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const GalleryPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryItems = [
    {
      image: '/api/placeholder/400/300',
      title: 'Annual Sports Day',
      category: 'Sports',
      
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Science Exhibition',
      category: 'Academics',
      
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Cultural Festival',
      category: 'Events',
      
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Graduation Ceremony',
      category: 'Celebrations',
      
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
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
            Capturing the vibrant moments of learning, growth, and celebration at Northland Global School.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200/90 dark:bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {/* Light Theme Icons */}
                    <div className="block dark:hidden">
                      {item.category === 'Sports' && <span className="text-2xl">⚽</span>}
                      {item.category === 'Academics' && <span className="text-2xl">📚</span>}
                      {item.category === 'Events' && <span className="text-2xl">🎉</span>}
                      {item.category === 'Celebrations' && <span className="text-2xl">🎊</span>}
                    </div>
                    {/* Dark Theme Icons */}
                    <div className="hidden dark:block">
                      {item.category === 'Sports' && <span className="text-2xl text-white">⚽</span>}
                      {item.category === 'Academics' && <span className="text-2xl text-white">📚</span>}
                      {item.category === 'Events' && <span className="text-2xl text-white">🎉</span>}
                      {item.category === 'Celebrations' && <span className="text-2xl text-white">🎊</span>}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-primary-500 dark:text-primary-300 font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Complete Gallery
            </h3>
            <p className="text-gray-700 dark:text-white/80 mb-6">
              Discover more moments of excellence, creativity, and achievement from our school community.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>View Full Gallery</span>
              
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
