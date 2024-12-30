import { GraduationCap, Search, Moon, Sun, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-white/10 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <GraduationCap className="h-8 w-8 text-black dark:text-white" />
            <span className="ml-2 text-xl font-bold text-black dark:text-white">Learn AI Coding</span>
          </motion.div>
          
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-black/40 dark:text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Search AI courses..."
                className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-md leading-5 bg-white/10 dark:bg-black/10 placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 text-white sm:text-sm backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <motion.button
              className="md:hidden p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
            <motion.button
              className="hidden md:block text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Sign in
            </motion.button>
            <motion.button
              className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}