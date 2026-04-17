import { motion } from 'motion/react';
import { Share2, Heart, MapPin, Maximize, Bed, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Modern Riyadh Villa',
    location: 'Riyadh, Saudi Arabia',
    price: '$4,500,000',
    beds: 5,
    baths: 4,
    size: '1200 sqft',
    imageTag: 'luxury-mansion',
  },
  {
    id: 2,
    title: 'Jeddah Coastal Retreat',
    location: 'Jeddah Waterfront',
    price: '$3,200,800',
    beds: 4,
    baths: 3,
    size: '950 sqft',
    imageTag: 'beach-house',
  },
  {
    id: 3,
    title: 'The Sky View Penthouse',
    location: 'King Abdullah District, Riyadh',
    price: '$12,000,000',
    beds: 6,
    baths: 6,
    size: '2500 sqft',
    imageTag: 'penthouse-night',
  },
  {
    id: 4,
    title: 'Traditional Oasis Estate',
    location: 'Ad Diriyah, Saudi Arabia',
    price: '$5,900,000',
    beds: 5,
    baths: 5,
    size: '1800 sqft',
    imageTag: 'middle-east-architecture',
  },
];

export function Properties() {
  return (
    <section id="sites" className="min-h-full bg-paper p-6 md:p-10 lg:overflow-y-auto">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-[18px] md:text-[22px] serif font-bold">Featured Portfolio</h2>
        <Link to="/properties" className="text-[11px] uppercase text-gold font-bold">View All Properties</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="property-card bg-white border border-accent flex flex-col"
          >
            <div className="h-[140px] bg-gray-200 relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${property.imageTag}/600/400`}
                alt={property.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 bg-gold text-white px-2 py-1 text-[9px] uppercase font-bold">
                New Launch
              </div>
            </div>

            <div className="p-4 bg-white">
              <h3 className="text-[15px] font-bold mb-1">{property.title}</h3>
              <p className="text-[12px] text-gray-500">{property.location}</p>
              <div className="text-gold font-bold mt-2.5 text-[14px]">{property.price}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
