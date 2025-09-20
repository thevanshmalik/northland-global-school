'use client';

import Link from 'next/link';
// Removed all icon imports - using custom elements instead
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', element: '📘', href: '#' },
    { name: 'Twitter', element: '🐦', href: '#' },
    { name: 'Instagram', element: '📷', href: '#' },
    { name: 'YouTube', element: '📺', href: '#' },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[4px] border-l-white border-r-[4px] border-r-white border-b-[6px] border-b-white border-t-0"></div>
          </div>
        </button>
      )}

      <footer className="bg-gray-900 dark:bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Northland Global School</h3>
                  <p className="text-sm text-white/80">Excellence in Education</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Committed to providing world-class education and nurturing future leaders through innovative teaching methods and holistic development.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200 text-lg"
                  >
                    {social.element}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-400 mt-0.5 flex-shrink-0 text-lg">📍</span>
                  <div>
                    <p className="text-white/70 text-sm">
                      123 Education Street<br />
                      Knowledge City, KC 12345<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400 flex-shrink-0 text-lg">📞</span>
                  <a
                    href="tel:+1234567890"
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400 flex-shrink-0 text-lg">📧</span>
                  <a
                    href="mailto:info@northlandglobalschool.edu"
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    info@northlandglobalschool.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-white/70 text-sm">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 Northland Global School. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/disclosure" className="text-white/60 hover:text-white transition-colors duration-200">
                  Mandatory Disclosure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
