'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  BookOpen,
  GraduationCap
} from 'lucide-react';

export default function AdmissionsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const admissionSteps = [
    {
      step: 1,
      title: 'Inquiry & Visit',
      description: 'Contact us or schedule a school visit to learn more about our programs.',
      icon: Phone,
    },
    {
      step: 2,
      title: 'Application Form',
      description: 'Fill out the admission application form with required documents.',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Student assessment and interaction with our academic team.',
      icon: BookOpen,
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Review of application and communication of admission decision.',
      icon: CheckCircle,
    },
    {
      step: 5,
      title: 'Enrollment',
      description: 'Complete enrollment formalities and fee payment.',
      icon: GraduationCap,
    },
  ];

  const requiredDocuments = [
    'Birth Certificate',
    'Previous Academic Records',
    'Transfer Certificate (if applicable)',
    'Passport Size Photographs',
    'Medical Certificate',
    'Parent/Guardian ID Proof',
    'Address Proof',
    'Income Certificate (if applicable)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
              <span className="gradient-text">Admissions</span> at Northland Global School
            </h1>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
              Begin your child's journey towards academic excellence and holistic development. We welcome applications for all grades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Admission <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Our streamlined admission process ensures a smooth experience for parents and students.
            </p>
          </motion.div>

          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-3xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-primary-500 dark:text-primary-300 font-medium">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-300 dark:text-white/30">
                      {step.step}
                    </div>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Apply <span className="gradient-text">Online</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80">
              Fill out the form below to start your admission process.
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
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter student's full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter parent's full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-medium mb-2">Grade Applying For *</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg1">KG 1</option>
                  <option value="kg2">KG 2</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-medium mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Required <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Please ensure you have the following documents ready for the admission process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold">{doc}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Download Application Form
              </h3>
              <p className="text-gray-700 dark:text-white/80 mb-6">
                You can also download and fill out the application form offline.
              </p>
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Download PDF Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Admission <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Our admission team is here to help you with any questions about the admission process.
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
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-700 dark:text-white/70">
                +1 (234) 567-8900<br />
                +1 (234) 567-8901
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-700 dark:text-white/70">
                admissions@northlandglobalschool.edu<br />
                info@northlandglobalschool.edu
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Hours</h3>
              <p className="text-gray-700 dark:text-white/70">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
