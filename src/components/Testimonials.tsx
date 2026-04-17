import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Farsi',
    role: 'CEO, Al-Farsi Group',
    content: 'The level of professionalism and attention to detail from Al-Majd Real Estate is unmatched in the Kingdom. They found us the perfect office site in Riyadh King Abdullah Financial District.',
    image: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    name: 'Sarah Bin Laden',
    role: 'Luxury Homeowner',
    content: 'Our villa in Jeddah is a dream come true. The process was seamless, and the quality of the finish exceeds every expectation. Highly recommended for elite residential needs.',
    image: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    name: 'Faisal Al-Saud',
    role: 'Real Estate Investor',
    content: 'Al-Majd has been my trusted partner for three major developments. Their insight into Saudi Vision 2030 opportunities has been vital to my portfolio success.',
    image: 'https://picsum.photos/seed/person3/100/100',
  },
];

export function Testimonials() {
  const testimonial = testimonials[0]; // Focusing on one for density/grid feel or using first

  return (
    <section id="testimonials" className="min-h-full bg-accent px-6 md:px-10 py-12 md:py-16 flex flex-col justify-center border-r border-black/10">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="testimonial-text text-[#1C1C1C] serif italic text-[16px] leading-[1.5] mb-3"
      >
        "{testimonial.content}"
      </motion.p>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="testimonial-author text-[11px] uppercase tracking-[1px] font-bold"
      >
        — {testimonial.name}
      </motion.p>
    </section>
  );
}
