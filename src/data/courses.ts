import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Build AI-Powered Chat Applications',
    description: 'Create modern chat applications using OpenAI GPT. Learn to build real-time chat interfaces, implement context awareness, and deploy production-ready apps.',
    instructor: 'Dr. Sarah Chen',
    duration: '35 hours',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop&q=60',
    price: 99.99,
    rating: 4.8,
    students: 15420
  },
  {
    id: '2',
    title: 'AI Image Generation Apps',
    description: 'Build applications with DALL-E and Stable Diffusion. Create image generation interfaces, implement prompt engineering, and deploy scalable solutions.',
    instructor: 'Dr. Michael Zhang',
    duration: '25 hours',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
    price: 129.99,
    rating: 4.9,
    students: 8234
  },
  {
    id: '3',
    title: 'AI-Enhanced Web Applications',
    description: 'Build full-stack web applications with AI features. Implement smart search, content generation, and personalization using modern AI APIs.',
    instructor: 'Dr. Emma Roberts',
    duration: '20 hours',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    price: 109.99,
    rating: 4.7,
    students: 10156
  }
];