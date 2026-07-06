import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, Users, Activity, ChevronDown, Sparkles, Home, Building2, Sun, Wrench, ShieldCheck, ArrowRight, X } from 'lucide-react';
import SavingsCalculator from './SavingsCalculator';
import ContactView from './ContactView';
import { PropertyType } from '../types';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  setChatbotOpen: (open: boolean) => void;
  setChatbotWelcomeMessage: (message: string) => void;
  onSelectProposalData: (data: any) => void;
}

export default function HomeView({
  setCurrentView,
  setChatbotOpen,
  setChatbotWelcomeMessage,
  onSelectProposalData,
}: HomeViewProps) {
  const calculatorSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToCalculator = () => {
    if (calculatorSectionRef.current) {
      calculatorSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGetProposal = (data: {
    propertyType: PropertyType;
    monthlyBill: number;
    roofArea: number;
    systemSize: number;
    cost: number;
    savings: number;
    payback: number;
  }) => {
    onSelectProposalData(data);
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestConsultation = () => {
    setChatbotWelcomeMessage("Hello! Let's arrange a free, personalized technical consultation for your project. To start, what is your name and property address?");
    setChatbotOpen(true);
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover select-none pointer-events-none filter brightness-90"
            referrerPolicy="no-referrer"
            alt="A sprawling, high-end commercial solar power plant stretching to the horizon under a bright, clear sky"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8imxHTHFkVL44-R-BJdRQZku8feefeXPdKE6N5LmPiEjlQP2Kvhe_fces_pLVHHAnyGqIIfrvdgzwgDfqqlx5_iyVhVSxuLT1rgzamXdbCWJb1gZ63isOxK0iboljVcsh02yJVJlaiRAG5zqBwwrVj9CJdPL7SRuBusp83mfoK4ebxJ8t4hApN-yA81lqbM8ECmzqN4MlMWuJ_PH-aj5WN9J4DWpxGAdPYFGOTrU5ZZg-2cSpjkdGDUQ8QXAeVi0mUypKfKEsSWM"
          />
          <div className="absolute inset-0 bg-industrial-charcoal/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-solar-red/20 border border-solar-red/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-solar-red">
              <Sparkles className="h-3 w-3 fill-solar-red" />
              <span>Looking for a trusted solar company?</span>
            </div>

            <h1 className="font-display-lg text-4xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
              Welcome to <br />
              <span className="text-solar-red tracking-wide relative inline-block">
                Power Pulse Energy
              </span>
            </h1>

            <div className="font-body-lg text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed font-sans space-y-4">
              <p>
                Your reliable partner for residential, commercial, industrial, and agricultural solar solutions. 
              </p>
              <p>
                We help homeowners, factories, farms, villas, rural areas, and large-scale projects switch to clean, affordable, and sustainable solar power.
              </p>
              <p className="font-bold text-white uppercase tracking-wider text-sm mt-4">
                Reduce your electricity bills. Gain energy independence. Power your future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                onClick={handleRequestConsultation}
                className="w-full sm:w-auto bg-solar-red text-white font-bold uppercase tracking-wider px-8 h-14 rounded hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-98 shadow-lg shadow-solar-red/20 cursor-pointer"
              >
                Get Free Consultation
              </button>
              <button
                onClick={handleScrollToCalculator}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider px-8 h-14 rounded hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer"
              >
                Get Solar Estimate
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
            onClick={handleScrollToCalculator}
          >
            <ChevronDown className="h-8 w-8 text-white/50 hover:text-solar-red transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-solar-red/10 flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-solar-red" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal mb-4">
                Complete Solar Panel Installation Services
              </h3>
              <p className="text-gray-500 font-sans mb-6">
                We provide end-to-end solar panel installation, including:
              </p>
              <ul className="space-y-3">
                {['Site survey & energy analysis', 'Custom solar system design', 'Government subsidy guidance', 'Professional installation', 'Net metering assistance', 'After-installation support'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-sm text-industrial-charcoal italic">From rooftop systems to ground-mounted mega projects — we handle it all.</p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-solar-red/10 flex items-center justify-center mb-6">
                <Home className="h-7 w-7 text-solar-red" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal mb-4">
                Residential Solar Solutions
              </h3>
              <p className="text-gray-500 font-sans mb-6">
                Perfect for any residential models:
              </p>
              <ul className="space-y-3 mb-10">
                {['Independent houses', 'Villas', 'Rural homes'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-solar-red/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-solar-red" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal mb-4">
                Commercial & Industrial Solar Projects
              </h3>
              <p className="text-gray-500 font-sans mb-6">
                Businesses across India are switching to solar to reduce operational costs. We install solar systems for:
              </p>
              <ul className="space-y-3">
                {['Commercial buildings', 'Factories', 'Warehouses', 'Shopping complexes', 'Processing units'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-sm text-industrial-charcoal italic">Lower your electricity expenses and improve long-term profitability.</p>
              </div>
            </motion.div>

            {/* Box 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-solar-red/10 flex items-center justify-center mb-6">
                <Sun className="h-7 w-7 text-solar-red" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal mb-4">
                Agricultural Solar & PM Kusum Support
              </h3>
              <p className="text-gray-500 font-sans mb-6">
                We support farmers with:
              </p>
              <ul className="space-y-3">
                {['Solar water pumps', 'Agricultural solar systems', 'PM Kusum Yojana guidance', 'Rural solar electrification'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-sm text-industrial-charcoal italic">Solar power helps reduce diesel costs and ensures reliable irrigation.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section
        ref={calculatorSectionRef}
        id="calculator"
        className="py-24 bg-white relative overflow-hidden scroll-mt-20 border-b border-gray-100"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-industrial-charcoal) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
             <h2 className="font-display-lg text-3xl font-extrabold uppercase text-industrial-charcoal mb-4">Calculate Your Savings</h2>
             <p className="font-sans text-gray-500">Estimate your potential energy savings by switching to solar power with us.</p>
          </motion.div>
          <SavingsCalculator onGetProposal={handleGetProposal} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-industrial-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display-lg text-4xl md:text-5xl font-extrabold uppercase mb-6">
              Why Choose <span className="text-solar-red">Power Pulse Energy?</span>
            </h2>
            <p className="font-body-lg text-gray-300 font-sans text-lg">
              We are a growing solar energy company in India committed to quality and trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Transparent pricing',
              'Customized solar solutions',
              'End-to-end project execution',
              'Net Metering Assistance',
              'Fast Execution',
              'Dedicated Support',
              'Government scheme assistance',
              'Fast installation',
              'Dedicated customer support'
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ShieldCheck className="h-6 w-6 text-solar-red shrink-0" />
                <span className="font-sans font-bold tracking-wide text-sm">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-red text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="font-display-lg text-4xl md:text-5xl font-extrabold uppercase mb-6">
            Get a Free Solar Consultation Today
          </h2>
          <p className="font-body-lg text-white/90 font-sans text-xl mb-10">
            Looking for the best solar panel installation company? <br className="hidden md:block"/>
            Contact Power Pulse Energy and get a customized solar quote today.
          </p>
          <button
            onClick={handleRequestConsultation}
            className="inline-flex items-center gap-3 bg-white text-solar-red font-bold uppercase tracking-wider px-10 h-16 rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-98 shadow-xl cursor-pointer text-sm"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </section>


    </div>
  );
}

