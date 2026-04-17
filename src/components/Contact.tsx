import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-full bg-ink text-white px-6 md:px-10 py-12 md:py-16 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col">
          <h4 className="text-gold text-[10px] uppercase font-bold mb-2 tracking-[1px]">Head Office</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">
            King Fahd Road, Sky Tower, Floor 42<br />
            Riyadh, Saudi Arabia
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gold text-[10px] uppercase font-bold mb-2 tracking-[1px]">Direct Inquiry</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">
            T: +966 11 123 4567<br />
            E: concierge@almajd-estate.com
          </p>
        </div>
      </div>
    </section>
  );
}
