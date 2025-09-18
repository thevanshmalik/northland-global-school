'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Wifi, 
  Shield, 
  Car, 
  Utensils, 
  BookOpen,
  Monitor,
  Microscope,
  Dumbbell,
  Music,
  Camera,
  TreePine,
  Users,
  Clock,
  Star
} from 'lucide-react';

export default function FacilitiesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      icon: Building,
      title: 'Smart Classrooms',
      description: 'Spacious, well-ventilated classrooms equipped with interactive smart boards, projectors, and modern teaching aids to enhance the learning experience.',
      features: ['Interactive Smart Boards', 'High-Speed Internet', 'Air Conditioning', 'Modern Furniture'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Monitor,
      title: 'Computer Laboratories',
      description: 'State-of-the-art computer laboratories with high-speed internet connectivity and the latest software for comprehensive digital learning.',
      features: ['Latest Computers', 'High-Speed Internet', 'Educational Software', 'Individual Workstations'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Microscope,
      title: 'Science Laboratories',
      description: 'Fully equipped physics, chemistry, and biology laboratories with modern equipment for hands-on scientific learning and experimentation.',
      features: ['Modern Equipment', 'Safety Protocols', 'Experienced Lab Assistants', 'Regular Maintenance'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: BookOpen,
      title: 'Library & Resource Center',
      description: 'Extensive library with thousands of books, digital resources, quiet study areas, and research facilities for comprehensive learning.',
      features: ['10,000+ Books', 'Digital Resources', 'Quiet Study Areas', 'Research Facilities'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Multi-purpose sports complex with basketball, volleyball, badminton courts, and indoor games facilities for physical development.',
      features: ['Basketball Court', 'Volleyball Court', 'Badminton Court', 'Indoor Games'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Music,
      title: 'Music & Arts Room',
      description: 'Dedicated spaces for music, dance, and visual arts with professional equipment and instruments for creative expression.',
      features: ['Musical Instruments', 'Dance Studio', 'Art Supplies', 'Performance Space'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Utensils,
      title: 'Cafeteria & Dining',
      description: 'Clean and hygienic cafeteria serving nutritious meals and snacks prepared with fresh ingredients and proper hygiene standards.',
      features: ['Nutritious Meals', 'Fresh Ingredients', 'Hygienic Preparation', 'Comfortable Seating'],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Safe and reliable school bus service covering all major areas of the city with trained drivers and safety measures.',
      features: ['GPS Tracking', 'Trained Drivers', 'Safety Measures', 'Wide Coverage'],
      image: '/api/placeholder/400/300',
    },
  ];

  const additionalFacilities = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'WiFi connectivity throughout the campus for seamless digital learning.',
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: '24/7 CCTV surveillance and security personnel for student safety.',
    },
    {
      icon: TreePine,
      title: 'Green Campus',
      description: 'Eco-friendly environment with lush greenery and sustainable practices.',
    },
    {
      icon: Users,
      title: 'Medical Room',
      description: 'Well-equipped medical room with trained nurse for student health care.',
    },
    {
      icon: Clock,
      title: 'Study Halls',
      description: 'Quiet study halls for students to focus on their academic work.',
    },
    {
      icon: Star,
      title: 'Auditorium',
      description: 'Large auditorium for events, assemblies, and cultural performances.',
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              World-Class <span className="gradient-text">Facilities</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of facilities provides the perfect environment for learning, growth, and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our comprehensive range of facilities designed to enhance the learning experience.
            </p>
          </motion.div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-3xl">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-6">
                        <facility.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{facility.title}</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6 text-lg">
                      {facility.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="glass-card rounded-3xl overflow-hidden">
                    <div className="h-80 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <facility.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional <span className="gradient-text">Amenities</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Supporting facilities that enhance the overall school experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {facility.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Statistics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Facility <span className="gradient-text">Statistics</span>
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

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Experience Our <span className="gradient-text">Facilities</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Schedule a campus tour to see our world-class facilities firsthand and experience the Northland Global School difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Campus Tour
                </button>
                <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
