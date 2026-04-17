/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Properties } from './components/Properties';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

// Home view using the High Density Grid
function Home() {
  return (
    <main className="flex-1 mt-[60px] lg:h-[calc(100vh-60px)] lg:grid lg:grid-cols-[380px_1fr] lg:grid-rows-[1fr_220px] gap-[1px] bg-black/10 overflow-y-auto lg:overflow-hidden lg:selection:bg-gold lg:selection:text-white">
      {/* Top Left: About Us / Hero Area */}
      <div className="bg-white lg:overflow-y-auto min-h-[400px] lg:min-h-0 border-b lg:border-b-0 border-black/5">
        <Hero />
      </div>

      {/* Top Right: Properties Feed */}
      <div className="bg-paper lg:overflow-y-auto min-h-[500px] lg:min-h-0 border-b lg:border-b-0 border-black/5">
        <Properties />
      </div>

      {/* Bottom Left: Featured Testimonial */}
      <div className="bg-accent lg:overflow-y-auto min-h-[250px] lg:min-h-0 border-b lg:border-b-0 border-black/5">
        <Testimonials />
      </div>

      {/* Bottom Right: Quick Contact */}
      <div className="bg-ink lg:overflow-y-auto min-h-[200px] lg:min-h-0">
        <Contact />
      </div>
    </main>
  );
}

// Individual "Page" views for those who want focused content
function PropertiesPage() {
  return (
    <div className="flex-1 mt-[60px] overflow-y-auto">
      <main className="p-10 md:p-20 bg-paper min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          <Properties />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="flex-1 mt-[60px] overflow-y-auto">
      <main className="p-10 md:p-20 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="flex-1 mt-[60px] overflow-y-auto">
      <main className="p-10 md:p-20 bg-white min-h-[60vh]">
        <div className="max-w-4xl mx-auto">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="flex-1 mt-[60px] overflow-y-auto bg-ink">
      <main className="p-10 md:p-20 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Detailed Contact Page Content */}
          <div className="mb-20">
            <span className="text-gold font-bold uppercase tracking-[3px] text-[11px] mb-6 block">Our Connection</span>
            <h1 className="text-5xl md:text-7xl serif text-white mb-10">Let's Discuss Your <span className="italic">Future</span></h1>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen lg:h-screen bg-paper flex flex-col overflow-x-hidden selection:bg-gold selection:text-white font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}
