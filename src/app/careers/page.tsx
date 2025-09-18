'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Clock, 
  Send, 
  Upload,
  FileText,
  GraduationCap,
  BookOpen,
  Microscope,
  Music,
  Dumbbell
} from 'lucide-react';

export default function CareersPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      department: 'Academics',
      type: 'Full-time',
      location: 'Knowledge City',
      experience: '2-5 years',
      icon: BookOpen,
      description: 'We are looking for an experienced Mathematics teacher to join our academic team.',
      requirements: [
        'Master\'s degree in Mathematics or related field',
        'B.Ed. or equivalent teaching qualification',
        'Minimum 2 years of teaching experience',
        'Strong communication skills',
        'Passion for teaching and student development'
      ]
    },
    {
      id: 2,
      title: 'Science Teacher',
      department: 'Academics',
      type: 'Full-time',
      location: 'Knowledge City',
      experience: '2-5 years',
      icon: Microscope,
      description: 'Join our science department and inspire the next generation of scientists.',
      requirements: [
        'Master\'s degree in Science (Physics/Chemistry/Biology)',
        'B.Ed. or equivalent teaching qualification',
        'Minimum 2 years of teaching experience',
        'Experience with laboratory management',
        'Innovative teaching methodologies'
      ]
    },
    {
      id: 3,
      title: 'Music Teacher',
      department: 'Arts & Culture',
      type: 'Part-time',
      location: 'Knowledge City',
      experience: '1-3 years',
      icon: Music,
      description: 'Share your passion for music and help students discover their musical talents.',
      requirements: [
        'Degree in Music or related field',
        'Proficiency in multiple instruments',
        'Experience in teaching music to children',
        'Creative and patient approach',
        'Ability to organize musical events'
      ]
    },
    {
      id: 4,
      title: 'Physical Education Teacher',
      department: 'Sports',
      type: 'Full-time',
      location: 'Knowledge City',
      experience: '1-3 years',
      icon: Dumbbell,
      description: 'Promote physical fitness and sports excellence among our students.',
      requirements: [
        'Degree in Physical Education or Sports Science',
        'B.Ed. or equivalent teaching qualification',
        'Experience in coaching various sports',
        'First aid certification preferred',
        'Enthusiasm for sports and fitness'
      ]
    },
    {
      id: 5,
      title: 'School Counselor',
      department: 'Student Services',
      type: 'Full-time',
      location: 'Knowledge City',
      experience: '3-5 years',
      icon: Users,
      description: 'Provide guidance and support to students in their academic and personal development.',
      requirements: [
        'Master\'s degree in Psychology or Counseling',
        'Licensed counselor preferred',
        'Experience working with children and adolescents',
        'Strong interpersonal skills',
        'Knowledge of educational psychology'
      ]
    },
    {
      id: 6,
      title: 'Administrative Assistant',
      department: 'Administration',
      type: 'Full-time',
      location: 'Knowledge City',
      experience: '1-2 years',
      icon: Briefcase,
      description: 'Support our administrative team in managing school operations efficiently.',
      requirements: [
        'Bachelor\'s degree in any field',
        'Proficiency in MS Office and computer skills',
        'Excellent organizational abilities',
        'Strong communication skills',
        'Ability to multitask and work under pressure'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation package based on experience and qualifications',
    },
    {
      title: 'Professional Development',
      description: 'Opportunities for training, workshops, and career advancement',
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive health insurance and wellness programs',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours and supportive work environment',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', applicationData);
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Be part of our mission to provide world-class education and shape the future of our students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Work at <span className="gradient-text">Northland Global School?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join a community of passionate educators dedicated to excellence in education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                    <job.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/70 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Apply for a <span className="gradient-text">Position</span>
            </h2>
            <p className="text-xl text-white/80">
              Fill out the form below to submit your application.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Position Applied For *</label>
                  <select
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Resume/CV *</label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Upload className="w-5 h-5 text-white/50" />
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-2">
                  Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
