import React from 'react';
import { FOOTER_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} {FOOTER_CONTENT.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
