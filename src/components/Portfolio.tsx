import { motion } from 'motion/react';
import { ExternalLink, MapPin } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'The Al-Hada Heights',
    category: 'Commercial • Completed 2024',
    location: 'Riyadh, KSA',
    description: 'A 45-story luxury office tower redefined the Riyadh skyline with its diamond-cut glass facade.',
    image: 'https://picsum.photos/seed/tower1/800/600',
  },
  {
    id: 2,
    title: 'Jeddah Bay Residences',
    category: 'Residential • Phase 1 Complete',
    location: 'Jeddah Waterfront',
    description: 'The first ultra-modern waterfront living experience featuring smart-home integration in every unit.',
    image: 'https://picsum.photos/seed/residence1/800/600',
  },
  {
    id: 3,
    title: 'Neom Gateway Hub',
    category: 'Logistics • Under Development',
    location: 'Tabuk Region',
    description: 'An advanced logistical center supporting the massive infrastructure growth of the Neom region.',
    image: 'https://picsum.photos/seed/logistics1/800/600',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <div className="ornament"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl serif mb-6">Our <span className="italic">Portfolio</span></h2>
          <p className="text-gray-500 text-sm max-w-xl font-light leading-relaxed">
            A track record of excellence. From high-rise commercial landmarks to 
            exclusive residential enclaves, we shape the physical landscape of the Kingdom.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-all duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-[2px] text-gold">{item.category}</span>
                  <h3 className="text-3xl serif font-bold text-ink">{item.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-sm max-w-md">
                  {item.description}
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-3 text-[11px] uppercase font-bold tracking-widest border-b border-ink pb-1 hover:text-gold hover:border-gold transition-all">
                    View Case Study <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
