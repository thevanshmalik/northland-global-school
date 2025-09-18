'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Award, 
  BookOpen,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function DisclosurePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const disclosureData = [
    {
      category: 'School Information',
      items: [
        { label: 'School Name', value: 'Northland Global School' },
        { label: 'Affiliation Number', value: 'CBSE/123456/2024' },
        { label: 'School Code', value: 'NGS001' },
        { label: 'Year of Establishment', value: '2009' },
        { label: 'Recognition Status', value: 'Recognized by CBSE' },
        { label: 'School Category', value: 'Co-educational' },
        { label: 'Medium of Instruction', value: 'English' },
        { label: 'Type of School', value: 'Private' },
      ]
    },
    {
      category: 'Contact Information',
      items: [
        { label: 'Address', value: '123 Education Street, Knowledge City, KC 12345, India' },
        { label: 'Phone Number', value: '+1 (234) 567-8900' },
        { label: 'Email', value: 'info@northlandglobalschool.edu' },
        { label: 'Website', value: 'www.northlandglobalschool.edu' },
        { label: 'Principal Name', value: 'Dr. Rajesh Kumar' },
        { label: 'Principal Email', value: 'principal@northlandglobalschool.edu' },
        { label: 'Principal Phone', value: '+1 (234) 567-8901' },
      ]
    },
    {
      category: 'Academic Information',
      items: [
        { label: 'Classes Offered', value: 'Nursery to Grade 12' },
        { label: 'Board Affiliation', value: 'Central Board of Secondary Education (CBSE)' },
        { label: 'Academic Session', value: 'April to March' },
        { label: 'Total Students', value: '500+' },
        { label: 'Total Teachers', value: '50+' },
        { label: 'Student-Teacher Ratio', value: '10:1' },
        { label: 'Library Books', value: '10,000+' },
        { label: 'Computer Lab', value: 'Yes (2 Labs)' },
      ]
    },
    {
      category: 'Infrastructure',
      items: [
        { label: 'Total Area', value: '5 Acres' },
        { label: 'Built-up Area', value: '2 Acres' },
        { label: 'Playground Area', value: '1.5 Acres' },
        { label: 'Number of Classrooms', value: '25+' },
        { label: 'Science Laboratories', value: '5 (Physics, Chemistry, Biology)' },
        { label: 'Computer Laboratories', value: '2' },
        { label: 'Library', value: 'Yes (Central Library)' },
        { label: 'Sports Facilities', value: 'Basketball, Volleyball, Badminton Courts' },
      ]
    },
    {
      category: 'Fees Structure',
      items: [
        { label: 'Admission Fee', value: '₹25,000 (One-time)' },
        { label: 'Annual Fee', value: '₹1,50,000' },
        { label: 'Monthly Fee', value: '₹12,500' },
        { label: 'Transport Fee', value: '₹2,000/month' },
        { label: 'Meal Fee', value: '₹1,500/month' },
        { label: 'Development Fee', value: '₹10,000/year' },
        { label: 'Security Deposit', value: '₹15,000 (Refundable)' },
        { label: 'Late Fee', value: '₹500/month' },
      ]
    },
    {
      category: 'Staff Information',
      items: [
        { label: 'Total Teaching Staff', value: '45' },
        { label: 'Total Non-Teaching Staff', value: '15' },
        { label: 'Qualified Teachers', value: '100%' },
        { label: 'Teachers with B.Ed.', value: '90%' },
        { label: 'Teachers with M.Ed.', value: '30%' },
        { label: 'Teachers with Ph.D.', value: '10%' },
        { label: 'Average Experience', value: '8 years' },
        { label: 'Staff Training Programs', value: 'Regular (Monthly)' },
      ]
    }
  ];

  const documents = [
    {
      title: 'School Recognition Certificate',
      type: 'PDF',
      size: '2.5 MB',
      date: '2024-01-15',
    },
    {
      title: 'CBSE Affiliation Certificate',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-01-10',
    },
    {
      title: 'Fire Safety Certificate',
      type: 'PDF',
      size: '1.2 MB',
      date: '2024-02-01',
    },
    {
      title: 'Building Safety Certificate',
      type: 'PDF',
      size: '3.1 MB',
      date: '2024-01-20',
    },
    {
      title: 'Staff Qualification Details',
      type: 'PDF',
      size: '2.8 MB',
      date: '2024-01-25',
    },
    {
      title: 'Fee Structure 2024-25',
      type: 'PDF',
      size: '1.5 MB',
      date: '2024-01-30',
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
              Mandatory <span className="gradient-text">Disclosure</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              As per CBSE norms, we provide complete transparency about our school's information, policies, and procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclosure Information */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              School <span className="gradient-text">Information</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Complete disclosure of school information as mandated by CBSE guidelines.
            </p>
          </motion.div>

          <div className="space-y-12">
            {disclosureData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="w-full sm:w-1/3">
                        <span className="text-white/70 font-medium">{item.label}:</span>
                      </div>
                      <div className="w-full sm:w-2/3">
                        <span className="text-white font-semibold">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Important <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Download important school documents and certificates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{doc.title}</h3>
                    <div className="space-y-1 text-sm text-white/70">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{doc.type} • {doc.size}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{doc.date}</span>
                      </div>
                    </div>
                    <button className="mt-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                CBSE Compliance <span className="gradient-text">Statement</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Northland Global School is fully compliant with all CBSE guidelines and regulations. 
                We maintain complete transparency in our operations and are committed to providing 
                quality education as per the standards set by the Central Board of Secondary Education.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/70">CBSE Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/70">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">A+</div>
                  <div className="text-white/70">CBSE Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About <span className="gradient-text">Disclosure?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              If you have any questions about our mandatory disclosure or need additional information, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+12345678900"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@northlandglobalschool.edu"
                className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
