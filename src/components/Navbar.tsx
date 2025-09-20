'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Removed all icon imports - using custom elements instead
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/30 dark:border-white/20 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* School Name */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
              NORTHLAND GLOBAL SCHOOL
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-gray-900 dark:text-white bg-gray-200/60 dark:bg-white/25 backdrop-blur-sm shadow-sm'
                    : 'text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/40 dark:hover:bg-white/15'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/admissions"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-white/80 focus:outline-none focus:text-gray-700 dark:focus:text-white/80"
            >
              {isOpen ? (
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <div className="w-5 h-0.5 bg-current rotate-45 absolute"></div>
                  <div className="w-5 h-0.5 bg-current -rotate-45 absolute"></div>
                </div>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className="w-5 h-0.5 bg-current"></div>
                  <div className="w-5 h-0.5 bg-current"></div>
                  <div className="w-5 h-0.5 bg-current"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 glass-card rounded-2xl mt-3 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-gray-900 dark:text-white bg-gray-200/60 dark:bg-white/25'
                      : 'text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/40 dark:hover:bg-white/15'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 space-y-4 border-t border-gray-200/30 dark:border-white/20 mt-4">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Link
                  href="/admissions"
                  className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-4 rounded-xl text-center font-semibold hover:shadow-lg transition-all duration-200 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
