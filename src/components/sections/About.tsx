import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hi, I'm <span className="font-semibold text-gray-900">Prathibha MS</span>, 
          a passionate <span className="text-indigo-600">Engineering Student</span> specializing in 
          <span className="font-medium"> Artificial Intelligence and Machine Learning (AIML)</span>.  
          I enjoy building innovative projects that combine creativity with problem-solving.  
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          I have worked on projects like{" "}
          <span className="font-semibold">AI-powered Resume Builder</span>,  
          <span className="font-semibold"> Memory Card Game</span>, and{" "}
          <span className="font-semibold">Bank Account Management System</span>.  
          My technical skillset includes <span className="text-indigo-600">Python, Java, React, and Machine Learning</span>.  
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Apart from coding, I love learning new technologies, solving problems, and designing 
          elegant solutions. My goal is to grow as a developer and contribute to impactful projects.  
        </p>
      </div>
    </section>
  );
};

export default About;
