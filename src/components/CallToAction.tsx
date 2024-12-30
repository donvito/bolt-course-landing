import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const handleGetStarted = () => {
  console.log('Getting started...');
  // Add navigation or signup logic here
};

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
            Join over 30,000 students who have transformed their careers with AI Academy.
            Get started today with our comprehensive AI courses.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            type="button"
            className="inline-flex items-center px-8 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Begin Learning Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}