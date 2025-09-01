import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { SocialLink } from '../../types';
import { socialLinks } from '../../data/social';

interface SocialLinksProps {
  direction?: 'row' | 'column';
  size?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  direction = 'row',
  size = 20
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <GitHub size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      case 'twitter':
        return <Twitter size={size} />;
      case 'mail':
        return <Mail size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${direction === 'row' ? 'flex-row space-x-4' : 'flex-col space-y-4'}`}>
      {socialLinks.map((link: SocialLink) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;