import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Home, Sun, Factory, CheckCircle2, ArrowRight, X } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

interface ServicesViewProps {
  setCurrentView: (view: string) => void;
  setChatbotOpen: (open: boolean) => void;
  setChatbotWelcomeMessage: (message: string) => void;
}

export default function ServicesView({
  setCurrentView,
  setChatbotOpen,
  setChatbotWelcomeMessage,
}: ServicesViewProps) {
  
  const [selectedService, setSelectedService] = useState<{
    title: string;
    desc: string;
    subText: string;
    points: string[];
    icon: any;
  } | null>(null);

  const handleServiceInquiry = (serviceName: string) => {
    setChatbotWelcomeMessage(`Hello! I'd be happy to discuss our "${serviceName}" services. Do you have specific monthly energy requirements or details about your site that we should analyze?`);
    setChatbotOpen(true);
    setSelectedService(null);
  };

  const servicesList = [
    {
      icon: Home,
      title: 'Residential Solar Installation',
      desc: 'Power Pulse Energy provides affordable and high-efficiency residential solar panel installation. Our rooftop solar systems help homeowners reduce electricity bills and achieve energy independence.',
      subText: 'We design systems based on your home\'s: Roof size, Energy consumption, Budget, and Local electricity rates.',
      points: ['Save up to 70% on electricity bills', 'Increase property value', 'Get support for government solar schemes'],
    },
    {
      icon: Building2,
      title: 'Commercial Solar Company',
      desc: 'Looking for a reliable commercial solar company? We provide customized solar solutions for your business. Our commercial solar systems help reduce operating costs and improve sustainability goals.',
      subText: 'We design for long term reliability, that fits every sector.',
      points: ['Office buildings', 'Retail outlets & Hotels', 'Warehouses & Institutions'],
    },
    {
      icon: Factory,
      title: 'Industrial Solar Projects',
      desc: 'Factories consume high electricity. Solar reduces long-term costs. Switch to industrial solar power and stabilize your production costs.',
      subText: '',
      points: ['Large-capacity rooftop solar', 'Ground-mounted solar plants', 'Industrial energy optimization'],
    },
    {
      icon: Sun,
      title: 'PM Kusum Solar & Agricultural Solutions',
      desc: 'Power Pulse Energy assists farmers under the PM Kusum Solar Scheme. Empower your farm with reliable solar energy.',
      subText: '',
      points: ['Solar pump installation', 'Government subsidy guidance', 'Application assistance', 'System setup'],
    },
  ];

  return (
    <div className="relative min-h-screen text-white w-full">
      {/* Shader background */}
      <ShaderBackground />

      <div className="relative z-10 pt-24 pb-16">
        
        {/* Services Header */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="font-display-lg text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wide">
                Our Solar Solutions
              </h1>
              <p className="font-body-lg text-base text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
                We provide comprehensive, tailored renewable energy solutions. From affordable residential installations to large-scale industrial projects, Power Pulse Energy is your dedicated partner.
              </p>
              <div className="w-16 h-1.5 bg-solar-red mx-auto rounded" />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicesList.map((srv, index) => {
              const IconComponent = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                  onClick={() => setSelectedService(srv)}
                  className="p-8 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-2xl hover:border-solar-red/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-6">
                    {/* Service Icon */}
                    <div className="w-12 h-12 rounded-lg bg-solar-red/20 border border-solar-red/30 flex items-center justify-center text-solar-red group-hover:bg-solar-red group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-headline-md text-xl font-bold text-white tracking-tight">
                        {srv.title}
                      </h3>
                      <p className="font-body-md text-sm text-gray-200 leading-relaxed font-sans line-clamp-3">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="bg-industrial-charcoal/90 backdrop-blur-md py-16 mx-6 md:mx-16 rounded-2xl text-white overflow-hidden relative shadow-2xl border border-white/5 mt-8">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="font-headline-md text-2xl font-bold">
                Ready to construct your sustainable future?
              </h2>
              <p className="text-sm text-gray-400 font-sans max-w-lg">
                Contact our engineering and sales representatives today. We will model your facility layout to produce a high-fidelity system design.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-solar-red hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-8 h-14 rounded hover:scale-105 active:scale-98 transition-all duration-300 shadow-lg shadow-solar-red/20 cursor-pointer flex-shrink-0"
            >
              Get Detailed Proposal
            </button>
          </div>
        </section>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 border border-zinc-400 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 bg-zinc-300/50 backdrop-blur-md border-b border-zinc-400/50 flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-solar-red flex-shrink-0 shadow-sm">
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal tracking-tight leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-zinc-600 hover:text-industrial-charcoal hover:bg-zinc-400/50 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6 flex-grow overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="space-y-4">
                  <p className="font-body-md text-base text-zinc-800 leading-relaxed font-sans">
                    {selectedService.desc}
                  </p>
                  {selectedService.subText && (
                    <p className="font-body-md text-sm text-zinc-700 leading-relaxed font-sans italic bg-zinc-300/40 p-4 rounded-lg border border-zinc-400/50 shadow-sm">
                      {selectedService.subText}
                    </p>
                  )}
                </div>

                {selectedService.points.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-industrial-charcoal uppercase tracking-wider text-xs mb-4">Key Benefits & Features</h4>
                    <ul className="space-y-3">
                      {selectedService.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm text-zinc-800 font-sans bg-zinc-300/40 p-3 rounded-lg border border-zinc-400/50 hover:bg-zinc-300/80 hover:shadow-md transition-all">
                          <CheckCircle2 className="h-5 w-5 text-solar-red flex-shrink-0" />
                          <span className="pt-0.5">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 md:p-8 bg-zinc-300/50 backdrop-blur-sm border-t border-zinc-400/50 flex justify-end">
                <button
                  onClick={() => handleServiceInquiry(selectedService.title)}
                  className="w-full sm:w-auto bg-solar-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 h-12 rounded hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-solar-red/20 cursor-pointer flex items-center justify-center gap-2 text-sm"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

