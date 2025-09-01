import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1: AI Resume Builder */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://picsum.photos/400/200"
                alt="AI Resume Builder"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI Resume Builder
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A web app that uses AI to generate personalized resumes quickly and efficiently.
              </p>
              <a
                href="https://ai-resume-builder-rho-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>

            {/* Project 2: E-Commerce Website */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://picsum.photos/401/200"
                alt="E-Commerce Website"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                E-Commerce Website
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A responsive e-commerce website with product pages, filtering, and a modern UI.
              </p>
              <a
                href="https://github.com/yourusername/e-commerce-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>

            {/* Project 3: Music App */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://picsum.photos/402/200"
                alt="Music App"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Music App
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                An interactive music player with visual effects and a login system.
              </p>
              <a
                href="https://github.com/yourusername/music-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
