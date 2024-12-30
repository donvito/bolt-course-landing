import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '30,000+',
    label: 'Active Students',
    description: 'Learning AI development'
  },
  {
    icon: GraduationCap,
    value: '150+',
    label: 'Expert Instructors',
    description: 'Industry professionals'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate',
    description: 'Course completion'
  },
  {
    icon: Globe,
    value: '120+',
    label: 'Countries',
    description: 'Global community'
  }
];

export function Statistics() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 to-transparent dark:from-indigo-950/20 dark:to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 mb-4">
                <stat.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-black dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-black/60 dark:text-white/60">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}