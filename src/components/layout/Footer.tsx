import React from 'react';
import SocialLinks from '../ui/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;