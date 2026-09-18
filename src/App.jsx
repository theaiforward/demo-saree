import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, MapPin, Phone, Star } from 'lucide-react';

const sarees = [
  {
    name: "Bandhani Noor",
    video: "/Bandhani Noor.mp4",
    description: "Experience the vibrant heritage of Bandhani with Noor. Intricate tie-dye patterns and vivid colors come together to create a masterpiece of traditional craftsmanship, perfect for any festive occasion."
  },
  {
    name: "Kanchi Swarnika",
    video: "/Kanchi Swarnika.mp4",
    description: "Kanchi Swarnika embodies the pure elegance of Kanchipuram silk. Woven with authentic zari and exquisite motifs, this saree is a timeless classic that brings out your inner radiance."
  },
  {
    name: "Kashi Gulnaar",
    video: "/Kashi Gulnaar.mp4",
    description: "Inspired by the divine beauty of Kashi, Gulnaar features delicate floral weaves on luxurious fabric. It's a tribute to the eternal charm and artistic legacy of Banarasi weavers."
  },
  {
    name: "Kashi Royale",
    video: "/Kashi Royale.mp4",
    description: "Step into royalty with Kashi Royale. Featuring grand borders, intricate brocade work, and rich textures, this saree is designed to make you feel like a queen."
  },
  {
    name: "Noor-e-Lucknow",
    video: "/Noor-e-Lucknow.mp4",
    description: "Delicate Chikankari work meets modern grace in Noor-e-Lucknow. Soft hues and fine embroidery make this saree a perfect choice for elegant, understated beauty."
  }
];

const faqs = [
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship our exclusive collections worldwide. Each saree is carefully packaged in our signature heritage boxes to ensure it reaches you in pristine condition, regardless of the destination."
  },
  {
    question: "Are the zari threads pure?",
    answer: "Our premium Kanchipuram and Banarasi sarees feature authentic, pure silver zari dipped in 24k gold, maintaining the centuries-old tradition of royal weaving."
  },
  {
    question: "Can I request a custom design or bespoke weaving?",
    answer: "Absolutely. Our master weavers can bring your vision to life. The bespoke process typically takes 3 to 6 months depending on the intricacy of the motifs."
  },
  {
    question: "How do I care for my heritage saree?",
    answer: "We recommend professional dry cleaning only. Store them in a cool, dry place wrapped in pure cotton or muslin cloth. Avoid hanging heavy silk sarees to prevent stretching."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Ornament = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 opacity-60">
    <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="#D4AF37"/>
  </svg>
);

const DecorativeBorder = ({ children }) => (
  <div className="relative p-1">
    <div className="absolute inset-0 border border-[#D4AF37]/30" />
    <div className="absolute inset-2 border border-[#D4AF37]/10" />
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37]" />
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37]" />
    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37]" />
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37]" />
    <div className="relative z-10 bg-[#0B0A08] p-4 h-full">
      {children}
    </div>
  </div>
);

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#EAE6DF] font-serif selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent"
      >
        <div className="text-[#D4AF37] text-xl md:text-3xl tracking-[0.3em] uppercase font-light cursor-pointer" onClick={() => scrollToSection('hero')}>Eternal</div>
        <div className="hidden lg:flex gap-12 text-xs uppercase tracking-[0.2em] text-[#EAE6DF]/70">
          <button onClick={() => scrollToSection('collections')} className="hover:text-[#D4AF37] transition-all duration-500 hover:tracking-[0.3em]">Collections</button>
          <button onClick={() => scrollToSection('craftsmanship')} className="hover:text-[#D4AF37] transition-all duration-500 hover:tracking-[0.3em]">Craftsmanship</button>
          <button onClick={() => scrollToSection('bespoke')} className="hover:text-[#D4AF37] transition-all duration-500 hover:tracking-[0.3em]">Bespoke</button>
          <button onClick={() => scrollToSection('maison')} className="hover:text-[#D4AF37] transition-all duration-500 hover:tracking-[0.3em]">Maison</button>
        </div>
        <button onClick={() => scrollToSection('bespoke')} className="text-xs uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-6 py-2 hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
          Book Appointment
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-70 mix-blend-screen"
          >
            <source src="/HERO.mp4" type="video/mp4" />
          </video>
          {/* Gradients to blend hero into the background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-70" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 max-w-6xl w-full"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-8 opacity-80">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.5em] uppercase font-light">Heritage Redefined</span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-normal mb-8 tracking-wider text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            ETERNAL <span className="font-light italic text-[#D4AF37]">DRAPES</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-[#EAE6DF]/70 max-w-2xl mx-auto font-light leading-relaxed italic mb-12">
            The confluence of royal ancestry and modern opulence. Discover masterpieces woven in threads of pure gold.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button onClick={() => scrollToSection('collections')} className="px-12 py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 tracking-[0.3em] uppercase text-sm font-semibold">
              Explore the Archive
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[#D4AF37]/60 text-[10px] tracking-[0.4em] uppercase">Scroll to Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"
          />
        </motion.div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-32 px-4 relative">
        <Ornament />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-8"
          >
            The Art of Weaving
          </motion.h3>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-light leading-snug mb-12"
          >
            "A single masterpiece takes over 600 hours of meticulous hand-weaving, carrying the soul of the artisan in every warp and weft."
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center gap-8 text-[#EAE6DF]/50"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-light text-[#D4AF37]">24k</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Gold Zari</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-light text-[#D4AF37]">600+</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Hours per Saree</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-light text-[#D4AF37]">3rd</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Gen Weavers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <div id="collections" className="max-w-[90rem] mx-auto py-20 px-4 sm:px-6 lg:px-12 flex flex-col gap-48">
        {sarees.map((saree, index) => (
          <motion.section 
            key={saree.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Video with Decorative Border */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative group">
              <DecorativeBorder>
                <div className="relative overflow-hidden aspect-[3/4]">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-[2s] ease-out"
                  >
                    <source src={saree.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-1000" />
                </div>
              </DecorativeBorder>
            </motion.div>
            
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 lg:px-12">
              <div className="flex items-center gap-4">
                <span className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs">Chapter 0{index + 1}</span>
                <div className="h-px bg-[#D4AF37]/30 flex-grow max-w-[100px]" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-normal text-white tracking-wide">{saree.name}</h2>
              
              <p className="text-xl text-[#EAE6DF]/70 leading-loose font-light">
                {saree.description}
              </p>
              
              <div className="pt-8">
                <button onClick={() => alert(`Thank you for your interest in ${saree.name}. Our master concierge has been notified and will contact you privately to arrange a viewing.`)} className="px-10 py-4 text-[#D4AF37] border-b border-[#D4AF37]/30 hover:border-[#D4AF37] hover:tracking-[0.2em] transition-all duration-500 uppercase text-xs tracking-[0.1em] flex items-center gap-4 group cursor-pointer">
                  Acquire Masterpiece
                  <div className="w-8 h-px bg-[#D4AF37] transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                </button>
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Services / Bespoke Section */}
      <section id="bespoke" className="py-32 relative bg-[#080808] border-y border-[#D4AF37]/10 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col items-center gap-6 p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-500 bg-[#050505]"
          >
            <Star className="text-[#D4AF37] w-8 h-8" />
            <h4 className="text-xl uppercase tracking-widest text-white">Bespoke Curation</h4>
            <p className="text-sm text-white/50 font-light leading-relaxed">Schedule a private viewing with our stylists to discover pieces that match your unique aura.</p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col items-center gap-6 p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-500 bg-[#050505]"
          >
            <Star className="text-[#D4AF37] w-8 h-8" />
            <h4 className="text-xl uppercase tracking-widest text-white">White Glove Delivery</h4>
            <p className="text-sm text-white/50 font-light leading-relaxed">Every masterpiece is delivered via premium secure courier, encased in our signature mahogany finish box.</p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col items-center gap-6 p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-500 bg-[#050505]"
          >
            <Star className="text-[#D4AF37] w-8 h-8" />
            <h4 className="text-xl uppercase tracking-widest text-white">Heritage Care</h4>
            <p className="text-sm text-white/50 font-light leading-relaxed">Complimentary first-year maintenance and archival restoration services for our elite clientele.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-40 max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <Ornament />
          <h2 className="text-4xl md:text-5xl mb-6">The Concierge</h2>
          <p className="text-[#EAE6DF]/50 tracking-widest uppercase text-xs">Frequently Asked Questions</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-lg md:text-xl font-light text-white group-hover:text-[#D4AF37] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#EAE6DF]/60 pb-8 leading-relaxed font-light text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer id="maison" className="bg-[#050505] pt-24 pb-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-24">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-[#D4AF37] text-3xl tracking-[0.3em] uppercase font-light mb-6">Eternal Drapes</h2>
              <p className="text-white/40 max-w-sm font-light leading-loose mb-8">
                Curators of India's finest handwoven textiles. A legacy of royalty draped in threads of pure gold and silver.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white tracking-[0.2em] uppercase text-xs mb-8">The Maison</h4>
              <ul className="space-y-4 text-white/50 font-light">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Artisans</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Lookbook</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Press & Media</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white tracking-[0.2em] uppercase text-xs mb-8">Contact Us</h4>
              <ul className="space-y-4 text-white/50 font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D4AF37] mt-1 shrink-0" />
                  <span>14, Royal Silk Avenue, Banaras, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D4AF37] shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <span>concierge@eternaldrapes.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} Eternal Drapes. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
