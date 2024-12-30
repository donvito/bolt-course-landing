import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

const handleExplore = () => {
  console.log('Exploring courses...');
  // Add navigation logic here
};

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative text-gray-900 dark:text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-gray-200/80 dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900/80 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
            >
              Build with AI
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            >
              Turn ideas into reality
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-3 max-w-md mx-auto text-xl text-gray-600 dark:text-white/70 sm:text-2xl md:mt-5 md:max-w-3xl"
          >
            Learn from industry experts how to build real-world applications using the latest AI technologies and APIs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex justify-center space-x-4 relative z-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExplore}
              type="button"
              className="bg-indigo-600 text-white dark:bg-white dark:text-black px-8 py-3 rounded-md font-medium hover:bg-indigo-700 dark:hover:bg-white/90 transition-colors cursor-pointer"
            >
              Explore AI Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              type="button"
              className="flex items-center text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-8 py-3 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch AI Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}