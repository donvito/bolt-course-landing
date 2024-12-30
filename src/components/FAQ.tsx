import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What prerequisites do I need for the AI courses?',
    answer: 'Basic programming knowledge in Python and JavaScript is recommended. Some courses are designed for beginners, while others require more advanced programming skills.'
  },
  {
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes, you will receive a verified certificate of completion for each course you finish. These certificates can be shared on LinkedIn and other professional platforms.'
  },
  {
    question: 'How long do I have access to the course materials?',
    answer: 'You get lifetime access to all course materials, including future updates. Learn at your own pace and revisit the content whenever you need.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with the course, you can request a full refund within the first 30 days.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70">
            Everything you need to know about our AI courses
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left bg-white/50 dark:bg-zinc-900/50 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-colors"
              >
                <span className="text-lg font-medium text-black dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-black/60 dark:text-white/60 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-gray-50 dark:bg-zinc-900/30"
                >
                  <p className="text-black/70 dark:text-white/70">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}