import { X, Clock, Users, Star, BookOpen, Target, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../types/course';

interface CoursePreviewModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePreviewModal({ course, isOpen, onClose }: CoursePreviewModalProps) {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-black dark:text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`
                    inline-block px-3 py-1 rounded-full text-sm font-medium mb-2
                    ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : ''}
                    ${course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${course.level === 'Advanced' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-white space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{course.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-6">{course.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-indigo-500 mr-3" />
                    <span className="text-black/70 dark:text-white/70">Comprehensive curriculum</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-indigo-500 mr-3" />
                    <span className="text-black/70 dark:text-white/70">Project-based learning</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-indigo-500 mr-3" />
                    <span className="text-black/70 dark:text-white/70">Certificate of completion</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-black/70 dark:text-white/70">{course.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-black dark:text-white">${course.price}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}