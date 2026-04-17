import { motion } from 'motion/react';
import { Target, Shield, Award, Users } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Properties Managed', value: '2,500+', icon: <Target className="text-amber-700" size={24} /> },
    { label: 'Happy Clients', value: '1,200+', icon: <Users className="text-amber-700" size={24} /> },
    { label: 'Industry Awards', value: '45+', icon: <Award className="text-amber-700" size={24} /> },
    { label: 'Years Experience', value: '15+', icon: <Shield className="text-amber-700" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#141414] text-white overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border border-white/10 p-2">
              <div className="w-full h-full rounded-t-full overflow-hidden">
                <img
                  src="https://picsum.photos/seed/about-saudi/600/800"
                  alt="Saudi Real Estate Experts"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Small floating card */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 md:right-0 bg-white p-8 shadow-2xl rounded-sm max-w-[280px]"
            >
              <div className="flex flex-col gap-4">
                <span className="text-amber-700 font-bold uppercase tracking-widest text-[9px]">Our Commitment</span>
                <p className="text-gray-900 text-sm italic font-serif leading-relaxed">
                  "Building the future of the Kingdom with vision, integrity, and class."
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px]">Since 2011</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl serif leading-tight">Expertise That <br /><span className="italic text-amber-500">Inspires</span> Trust</h2>
            
            <div className="flex flex-col gap-6 text-gray-400 font-light leading-relaxed max-w-lg">
              <p>
                Based in the heart of Riyadh, Al-Majd Real Estate has been a leading force in the 
                Saudi property market for over a decade. We specialize in identifying high-value 
                opportunities and delivering unparalleled living experiences.
              </p>
              <p>
                Our team understands the unique landscape of modern Saudi development, from the 
                Vision 2030 initiatives to the growing demand for sustainable luxury.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <span className="text-3xl font-bold italic serif tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
