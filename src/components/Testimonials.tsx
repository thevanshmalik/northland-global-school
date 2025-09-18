'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Arjun Sharma (Class 12)',
      content: 'Northland Global School has been a blessing for our family. The teachers are dedicated, the curriculum is excellent, and my son has grown tremendously both academically and personally.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Sneha Kumar (Class 10)',
      content: 'The school provides an excellent balance of academics and extracurricular activities. My daughter has developed confidence and leadership skills that will serve her well in life.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Dr. Anjali Patel',
      role: 'Parent of Rohan Patel (Class 8)',
      content: 'The modern facilities and innovative teaching methods at Northland Global School have made learning enjoyable for my son. The teachers truly care about each student\'s success.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Ms. Kavita Reddy',
      role: 'Parent of Maya Reddy (Class 6)',
      content: 'I am impressed by the school\'s commitment to holistic development. My daughter has not only excelled academically but has also discovered her passion for arts and sports.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Parents <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from our community of parents who have witnessed the transformative power of education at Northland Global School.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-xl text-white/90 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-primary-500'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Parent Satisfaction</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Happy Families</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70">Years of Trust</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
