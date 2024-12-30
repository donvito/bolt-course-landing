import { X, CreditCard, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../types/course';
import { useState } from 'react';

interface PaymentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({ course, isOpen, onClose }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      // Add success notification here
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/80 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[calc(100%-1rem)] sm:max-w-md my-4 bg-white dark:bg-zinc-900 rounded-lg shadow-xl"
          >
            <div className="p-4 sm:p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-black dark:text-white" />
              </button>

              <div className="text-center mb-6">
                <Lock className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                  Secure Checkout
                </h3>
                <p className="text-black/60 dark:text-white/60">
                  {course.title}
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center text-black dark:text-white">
                  <span>Total Amount:</span>
                  <span className="text-xl sm:text-2xl font-bold">${course.price}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-200 dark:border-white/20 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 dark:border-white/20 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-200 dark:border-white/20 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isProcessing}
                  className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : `Pay $${course.price}`}
                </motion.button>
              </form>

              <div className="mt-4 text-center text-sm text-black/60 dark:text-white/60">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Secured by Stripe
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}