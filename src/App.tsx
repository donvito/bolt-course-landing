import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { courses } from './data/courses';
import { useTheme } from './contexts/ThemeContext';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Statistics } from './components/Statistics';
import { FAQ } from './components/FAQ';
import { motion } from 'framer-motion';
import { Background } from './components/Background';

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <Background />
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8"
        >
          Featured AI Courses
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <Features />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
