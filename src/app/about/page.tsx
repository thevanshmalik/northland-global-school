'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  Eye,
  Heart,
  Lightbulb,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, label: 'Students', value: '500+' },
    { icon: GraduationCap, label: 'Teachers', value: '50+' },
    { icon: BookOpen, label: 'Years of Excellence', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical behavior in all our interactions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to education and learning.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We foster teamwork and cooperation among students, teachers, and parents.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in academics, character, and personal development.',
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
              About <span className="gradient-text">Northland Global School</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Committed to providing world-class education and nurturing future leaders through innovative teaching methods and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Overview */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Established in 2009, Northland Global School has been at the forefront of educational excellence for over 15 years. Founded with a vision to provide world-class education that combines academic rigor with character development, we have grown into one of the most respected educational institutions in the region.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Our journey began with a simple yet powerful belief: every child has the potential to achieve greatness when provided with the right environment, guidance, and opportunities. Today, we continue to uphold this belief through our innovative curriculum, dedicated faculty, and state-of-the-art facilities.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                We are proud to be affiliated with the Central Board of Secondary Education (CBSE) and have consistently maintained high academic standards while fostering creativity, critical thinking, and leadership skills in our students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To provide a nurturing environment that fosters academic excellence, character development, and innovation, preparing students to become confident leaders and responsible global citizens who contribute positively to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To be a leading educational institution that inspires lifelong learning, promotes creativity, and shapes the future through excellence in education, character building, and innovative teaching methodologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide our educational philosophy and shape our school culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our school towards excellence.
            </p>
          </motion.div>

          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">DR</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-primary-300 font-semibold mb-4">Principal & Director</p>
                <p className="text-white/80 leading-relaxed">
                  With over 20 years of experience in education, Dr. Rajesh Kumar leads our school with a vision of academic excellence and holistic development. His innovative approach to education has transformed countless lives and continues to inspire our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We'd love to hear from you. Contact us to learn more about our school.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-white/70">
                123 Education Street<br />
                Knowledge City, KC 12345<br />
                India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-white/70">
                +1 (234) 567-8900<br />
                +1 (234) 567-8901
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-white/70">
                info@northlandglobalschool.edu<br />
                admissions@northlandglobalschool.edu
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
