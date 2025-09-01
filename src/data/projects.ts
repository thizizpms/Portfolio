import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/yourusername/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/taskapp',
    github: 'https://github.com/yourusername/taskapp'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and weather alerts.',
    tags: ['JavaScript', 'WeatherAPI', 'Chart.js', 'SCSS'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/weather',
    github: 'https://github.com/yourusername/weather'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills and projects with a modern, responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/portfolio',
    github: 'https://github.com/yourusername/portfolio'
  }
];