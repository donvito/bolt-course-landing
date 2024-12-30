import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Data Scientist at Tech Corp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    content: 'The AI courses here transformed my career. The practical approach and expert guidance helped me land my dream job.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'ML Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    content: 'Incredible learning experience! The community support and real-world projects made complex AI concepts accessible.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'AI Researcher',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    content: 'Best investment in my AI journey. The curriculum is comprehensive and constantly updated with latest developments.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Student Success Stories</h2>
          <p className="text-lg text-black/70 dark:text-white/70">Join thousands of successful graduates</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/10 dark:bg-zinc-900/30 backdrop-blur-lg border border-white/10"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-black dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-black/70 dark:text-white/70">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}