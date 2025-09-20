'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function GalleryPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'academics', name: 'Academics' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' },
    { id: 'celebrations', name: 'Celebrations' },
    { id: 'infrastructure', name: 'Infrastructure' },
  ];

  const galleryImages = [
    { id: 1, category: 'academics', title: 'Science Exhibition', image: '/api/placeholder/400/300' },
    { id: 2, category: 'sports', title: 'Annual Sports Day', image: '/api/placeholder/400/300' },
    { id: 3, category: 'events', title: 'Cultural Festival', image: '/api/placeholder/400/300' },
    { id: 4, category: 'celebrations', title: 'Graduation Ceremony', image: '/api/placeholder/400/300' },
    { id: 5, category: 'infrastructure', title: 'Modern Classroom', image: '/api/placeholder/400/300' },
    { id: 6, category: 'academics', title: 'Math Competition', image: '/api/placeholder/400/300' },
    { id: 7, category: 'sports', title: 'Basketball Tournament', image: '/api/placeholder/400/300' },
    { id: 8, category: 'events', title: 'Annual Day', image: '/api/placeholder/400/300' },
    { id: 9, category: 'celebrations', title: 'Independence Day', image: '/api/placeholder/400/300' },
    { id: 10, category: 'infrastructure', title: 'Library', image: '/api/placeholder/400/300' },
    { id: 11, category: 'academics', title: 'Art Exhibition', image: '/api/placeholder/400/300' },
    { id: 12, category: 'sports', title: 'Cricket Match', image: '/api/placeholder/400/300' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

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
              School <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
              Capturing the vibrant moments of learning, growth, and celebration at Northland Global School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'glass-card text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/30 dark:hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200/50 dark:bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-gray-900 dark:text-white text-center">
                        
                        <p className="text-sm font-medium">View Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-center">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="glass-card p-8 rounded-3xl max-w-md mx-auto">
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Images Found</h3>
                <p className="text-gray-700 dark:text-white/70">
                  No images found for the selected category. Try selecting a different category.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors duration-200"
            >
              
            </button>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  
                  <h3 className="text-2xl font-semibold mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-white/70">
                    {filteredImages[selectedImage]?.category.charAt(0).toUpperCase() + 
                     filteredImages[selectedImage]?.category.slice(1)} Category
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-white/20 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-white/30 dark:hover:bg-white/30 transition-all duration-200"
              >
                
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-white/20 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-white/30 dark:hover:bg-white/30 transition-all duration-200"
              >
                
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Gallery Stats */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Gallery <span className="gradient-text">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Photos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Events</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70">Years</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/70">Memories</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
