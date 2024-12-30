import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-zinc-900 shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-5">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5 text-black dark:text-white" />
              </button>
              
              <nav className="mt-8 space-y-4">
                <a href="#" className="block py-2 text-lg font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  Courses
                </a>
                <a href="#" className="block py-2 text-lg font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </a>
                <a href="#" className="block py-2 text-lg font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </a>
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <a href="#" className="block py-2 text-lg font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    Sign in
                  </a>
                  <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}