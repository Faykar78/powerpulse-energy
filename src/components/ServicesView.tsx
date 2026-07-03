import { motion } from 'motion/react';
import { Building2, Home, Sun, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
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
  
  const handleServiceInquiry = (serviceName: string) => {
    setChatbotWelcomeMessage(`Hello! I'd be happy to discuss our "${serviceName}" services. Do you have specific monthly energy requirements or details about your site that we should analyze?`);
    setChatbotOpen(true);
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
                  className="p-8 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-2xl hover:border-solar-red/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
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
                      <p className="font-body-md text-sm text-gray-200 leading-relaxed font-sans">
                        {srv.desc}
                      </p>
                      {srv.subText && (
                        <p className="font-body-md text-sm text-gray-300 leading-relaxed font-sans italic">
                          {srv.subText}
                        </p>
                      )}
                    </div>

                    {/* Bullet points checklist */}
                    <ul className="space-y-2 pt-2">
                      {srv.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-white font-semibold font-sans">
                          <CheckCircle2 className="h-4 w-4 text-solar-red flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 font-sans">
                    <button
                      onClick={() => handleServiceInquiry(srv.title)}
                      className="textured-glass-btn inline-flex items-center gap-1.5 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider text-solar-red hover:text-white cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="bg-industrial-charcoal/90 backdrop-blur-md py-16 mx-6 md:mx-16 rounded-2xl text-white overflow-hidden relative shadow-2xl border border-white/5">
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
              className="bg-solar-red hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-8 h-14 rounded hover:scale-105 active:scale-98 transition-all duration-300 shadow-lg shadow-solar-red/20 cursor-pointer"
            >
              Get Detailed Proposal
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
