import { motion } from 'framer-motion';
import { Brain, Code, Users, Award, Clock, Video } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Expert-Led Training',
    description: 'Learn from industry leaders and AI researchers with years of experience.'
  },
  {
    icon: Code,
    title: 'Hands-on Projects',
    description: 'Build real-world AI applications with guided practical exercises.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a vibrant community of AI enthusiasts and practitioners.'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn industry-recognized certificates upon course completion.'
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with lifetime access to course content.'
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Attend live workshops and Q&A sessions with instructors.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black/0 via-black/5 to-black/10 dark:from-zinc-900/0 dark:via-zinc-900/50 dark:to-zinc-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Why Choose us?</h2>
          <p className="text-lg text-black/70 dark:text-white/70">Comprehensive AI education designed for your success</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/10 dark:bg-zinc-900/30 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{feature.title}</h3>
              <p className="text-black/70 dark:text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}