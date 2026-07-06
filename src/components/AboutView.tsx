import { motion } from 'motion/react';
import { Rocket, Eye, ShieldAlert, Check, HelpCircle } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

interface AboutViewProps {
  setChatbotOpen: (open: boolean) => void;
  setChatbotWelcomeMessage: (message: string) => void;
}

export default function AboutView({ setChatbotOpen, setChatbotWelcomeMessage }: AboutViewProps) {
  const triggerPhilosopySupport = (topic: string) => {
    setChatbotWelcomeMessage(`Hello! I'd love to chat about our ${topic} and how our engineering values translate to your project goals. What details are you curious about?`);
    setChatbotOpen(true);
  };

  return (
    <div className="relative min-h-screen text-white w-full">
      {/* Shader background */}
      <ShaderBackground />

      <div className="relative z-10">
        
        {/* Intro Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 space-y-6"
            >
              <h1 className="font-display-lg text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white">
                About <br />
                <span className="text-solar-red">Power Pulse Energy</span>
              </h1>
              <div className="font-body-lg text-lg text-gray-200 leading-relaxed font-sans space-y-4">
                <p>
                  Power Pulse Energy was founded with a clear vision — to make solar energy affordable and accessible. We as a growing solar energy company provide residential, commercial, industrial, and agricultural solar solutions. We help customers reduce electricity costs and transition to clean renewable energy with complete project support.
                </p>
                <p>
                  Though we started just a year ago, our team brings strong technical knowledge and field experience in solar panel installation and renewable energy systems.
                </p>
                <p className="font-bold text-white uppercase tracking-wider text-sm">
                  Our mission is to support India's renewable energy growth while helping customers save money.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => triggerPhilosopySupport('solar solutions')}
                  className="bg-solar-red hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-6 h-12 rounded flex items-center justify-center gap-2 hover:scale-105 active:scale-98 transition-all cursor-pointer shadow-md shadow-solar-red/10"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Talk to an Expert</span>
                </button>
              </div>
            </motion.div>

            {/* Right Media Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:col-span-5 relative h-[350px] md:h-[500px] rounded overflow-hidden shadow-2xl border border-white/10 bg-white/5"
            >
              <img
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                alt="A large, modern industrial solar farm stretching across a wide landscape at dawn"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz78rPAmL_vRUA8uvPEFyodF9FuLQlMA1jofWVHqhwOa14ls62eDPkaCNr8NcnXcDAXsNeKLFedWboezfGWtRL2heXx0_t__XPah5Z1fZwG2wPhPKulsLCXfOJDXkCTB3P82VePgm7yUl32pqe-iGRxkcYutejv9G-5HuTNu90irsOsAHOSG3jzPXCt5SoksKw7AanBSEw208qkOG7p2IKw8SQdRGmcbtUH1M_pD-JQaAFLJOmYwCZuxLUSB_mMWqXv-C8bxJ7R8M"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>

          </div>
        </section>

        {/* Philosophy Bento Bento Section */}
        <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase">
              Our Core Philosophy
            </h2>
            <div className="w-24 h-1.5 bg-solar-red rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded border border-white/10 shadow-lg hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 group relative flex flex-col justify-between"
            >
              <div>
                <Rocket className="text-solar-red h-10 w-10 mb-6 block group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-headline-md text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="font-body-md text-sm text-gray-200 leading-relaxed font-sans">
                  To deliver cost-effective solar solutions that promote energy independence and sustainability.
                </p>
              </div>
              <button
                onClick={() => triggerPhilosopySupport('Mission')}
                className="mt-6 text-xs font-bold uppercase tracking-wider text-solar-red hover:text-white flex items-center gap-1.5 self-start group/btn"
              >
                <span>Deep Dive</span>
                <HelpCircle className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>

            {/* Card 2: Vision (Charcoal Styled) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-industrial-charcoal p-8 rounded border border-gray-700 shadow-xl hover:shadow-solar-red/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <Eye className="text-solar-red h-10 w-10 mb-6 block group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-headline-md text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="font-body-md text-sm text-gray-300 leading-relaxed font-sans">
                  To become one of the trusted solar installation companies through quality, transparency, and customer satisfaction.
                </p>
              </div>
              <button
                onClick={() => triggerPhilosopySupport('Vision')}
                className="mt-6 text-xs font-bold uppercase tracking-wider text-solar-red hover:text-white flex items-center gap-1.5 self-start group/btn"
              >
                <span>Deep Dive</span>
                <HelpCircle className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>

            {/* Card 3: We Serve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded border border-white/10 shadow-lg hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <ShieldAlert className="text-solar-red h-10 w-10 mb-6 block group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-headline-md text-xl font-bold text-white mb-4">Who We Serve</h3>
                
                <ul className="space-y-3 font-body-md text-sm text-gray-200 leading-relaxed font-sans">
                  {[
                    'Homeowners & Villas',
                    'Commercial buildings',
                    'Factories & Warehouses',
                    'Farms & Rural areas',
                    'Large-scale projects',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="p-0.5 rounded bg-solar-red text-white flex-shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => triggerPhilosopySupport('Clients')}
                className="mt-6 text-xs font-bold uppercase tracking-wider text-solar-red hover:text-white flex items-center gap-1.5 self-start group/btn"
              >
                <span>Learn More</span>
                <HelpCircle className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>

          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10">
          <div className="mb-12">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase">
              Our Team
            </h2>
            <div className="w-24 h-1.5 bg-solar-red rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Alex Mercer',
                role: 'Chief Executive Officer',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Chief Technology Officer',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
              },
              {
                name: 'Emily Davis',
                role: 'Head of Human Resources',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Lead Engineer',
                img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1A1C1E] border border-white/10 rounded overflow-hidden shadow-lg group hover:-translate-y-2 hover:shadow-solar-red/10 transition-all duration-300 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border-t border-white/20">
                  <h3 className="font-headline-md text-xl font-bold text-white uppercase tracking-tight drop-shadow-sm">{member.name}</h3>
                  <p className="font-body-md text-xs text-solar-red font-bold uppercase tracking-widest mt-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
