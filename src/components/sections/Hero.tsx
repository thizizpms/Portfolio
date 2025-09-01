import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;
    
    const letters = titleElement.textContent?.split('') || [];
    if (letters.length === 0) return;
    
    titleElement.textContent = '';
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.3s ease';
      span.style.transitionDelay = `${index * 0.05}s`;
      titleElement.appendChild(span);
      
      // Force reflow
      void span.offsetWidth;
      
      span.style.opacity = '1';
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hello, I'm Prathibha MS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 opacity-0 animate-[fadeIn_0.5s_ease_forwards_0.5s]">
            AIML Engineering Student | Passionate about AI, Game Development & Interactive Projects
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-[fadeIn_0.5s_ease_forwards_0.7s]">
            <Button onClick={() => window.location.href = '#projects'}>
              View My Work
            </Button>
            
            <Button variant="outline" onClick={() => window.location.href = '#contact'}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle size={32} />
      </button>
    </section>
  );
};

export default Hero;
