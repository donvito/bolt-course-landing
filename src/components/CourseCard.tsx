import { Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Course } from '../types/course';
import { useState } from 'react';
import { CoursePreviewModal } from './CoursePreviewModal';
import { PaymentModal } from './PaymentModal';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex flex-col h-full">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-40 sm:h-48 object-cover flex-shrink-0"
        />
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-2"
        >
          <span className={`
            px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : ''}
            ${course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : ''}
            ${course.level === 'Advanced' ? 'bg-red-100 text-red-800' : ''}
          `}>
            {course.level}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            ${course.price}
          </span>
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
        <p className="text-gray-600 dark:text-white/60 mb-4 line-clamp-2 flex-shrink-0">{course.description}</p>
        <div className="flex items-center text-gray-500 dark:text-white/60 text-xs sm:text-sm mb-4 flex-shrink-0">
          <Clock className="w-4 h-4 mr-1" />
          <span className="mr-4">{course.duration}</span>
          <Users className="w-4 h-4 mr-1" />
          <span>{course.students.toLocaleString()} students</span>
        </div>
        <div className="flex items-center justify-between flex-shrink-0">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600 dark:text-white/70">{course.rating}</span>
          </div>
          <span className="text-gray-600 dark:text-white/70">{course.instructor}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-auto pt-6 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPreviewOpen(true)}
            type="button"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors font-medium"
          >
            Preview
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPaymentOpen(true)}
            type="button"
            className="w-full px-4 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
          >
            Enroll
          </motion.button>
        </div>
        </div>
      </div>
    </motion.div>
    <CoursePreviewModal
      course={course}
      isOpen={isPreviewOpen}
      onClose={() => setIsPreviewOpen(false)}
    />
    <PaymentModal
      course={course}
      isOpen={isPaymentOpen}
      onClose={() => setIsPaymentOpen(false)}
    />
    </>
  );
}