'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
// Removed all icon imports - using custom elements instead

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
      lightElement: '📞',
      lightColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      step: 2,
      title: 'Application Form',
      description: 'Fill out the admission application form with required documents.',
      lightElement: '📝',
      lightColor: 'bg-green-100 text-green-700 border-green-200',
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Student assessment and interaction with our academic team.',
      lightElement: '📚',
      lightColor: 'bg-purple-100 text-purple-700 border-purple-200',
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Review of application and communication of admission decision.',
      lightElement: '✅',
      lightColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      step: 5,
      title: 'Enrollment',
      description: 'Complete enrollment formalities and fee payment.',
      lightElement: '🎓',
      lightColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    },
  ];

  const requiredDocuments = [
    { name: 'Birth Certificate', icon: '📄', lightIcon: '📋', lightColor: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'Previous Academic Records', icon: '📚', lightIcon: '📖', lightColor: 'bg-green-100 text-green-700 border-green-200' },
    { name: 'Transfer Certificate (if applicable)', icon: '📑', lightIcon: '📄', lightColor: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'Passport Size Photographs', icon: '📸', lightIcon: '🖼️', lightColor: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { name: 'Medical Certificate', icon: '🏥', lightIcon: '⚕️', lightColor: 'bg-red-100 text-red-700 border-red-200' },
    { name: 'Parent/Guardian ID Proof', icon: '🆔', lightIcon: '👤', lightColor: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { name: 'Address Proof', icon: '🏠', lightIcon: '📍', lightColor: 'bg-orange-100 text-orange-700 border-orange-200' },
    { name: 'Income Certificate (if applicable)', icon: '💰', lightIcon: '💳', lightColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
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
                      {/* Light Theme Element */}
                      <div className={`w-12 h-12 ${step.lightColor} border-2 rounded-xl flex items-center justify-center mr-4 text-lg dark:hidden`}>
                        {step.lightElement}
                      </div>
                      {/* Dark Theme Element */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 text-white text-lg hidden dark:flex">
                        {step.lightElement}
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
            className="admissions-form bg-white dark:bg-white/10 p-8 rounded-3xl shadow-2xl border-4 border-gray-800 dark:border-white/20 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-black dark:text-white font-bold text-lg mb-3">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-700 dark:placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium"
                    placeholder="Enter student's full name"
                  />
                </div>
                <div>
                  <label className="block text-black dark:text-white font-bold text-lg mb-3">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-700 dark:placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium"
                    placeholder="Enter parent's full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-black dark:text-white font-bold text-lg mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-700 dark:placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-black dark:text-white font-bold text-lg mb-3">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-700 dark:placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black dark:text-white font-bold text-lg mb-3">Grade Applying For *</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium"
                >
                  <option value="" className="text-gray-700">Select Grade</option>
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
                <label className="block text-black dark:text-white font-bold text-lg mb-3">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-6 py-4 bg-white dark:bg-white/10 border-4 border-gray-800 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-700 dark:placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600 shadow-lg transition-all duration-200 text-lg font-medium resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-500 dark:to-blue-600 text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:from-blue-900 hover:to-blue-950 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-3 transform hover:scale-105 border-4 border-blue-900 dark:border-blue-500"
              >
                <span>Submit Application</span>
                
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
                key={doc.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                {/* Light Theme Icon */}
                <div className={`w-12 h-12 ${doc.lightColor} border-2 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg dark:hidden`}>
                  {doc.lightIcon}
                </div>
                {/* Dark Theme Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg hidden dark:flex">
                  {doc.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold">{doc.name}</h3>
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
              {/* Light Theme Icon */}
              <div className="w-16 h-16 bg-blue-100 text-blue-700 border-2 border-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl dark:hidden">
                📥
              </div>
              {/* Dark Theme Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl hidden dark:flex">
                📄
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
              {/* Light Theme Icon */}
              <div className="w-12 h-12 bg-green-100 text-green-700 border-2 border-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg dark:hidden">
                📞
              </div>
              {/* Dark Theme Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg hidden dark:flex">
                📱
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
              {/* Light Theme Icon */}
              <div className="w-12 h-12 bg-blue-100 text-blue-700 border-2 border-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg dark:hidden">
                ✉️
              </div>
              {/* Dark Theme Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg hidden dark:flex">
                📧
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
              {/* Light Theme Icon */}
              <div className="w-12 h-12 bg-purple-100 text-purple-700 border-2 border-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg dark:hidden">
                🕒
              </div>
              {/* Dark Theme Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg hidden dark:flex">
                ⏰
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
