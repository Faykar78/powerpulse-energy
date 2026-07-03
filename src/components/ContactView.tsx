import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, FileText, Sun, ArrowRight, DollarSign } from 'lucide-react';

interface ContactViewProps {
  proposalData: any; // data passed from calculator if any
  clearProposalData: () => void;
  setChatbotOpen: (open: boolean) => void;
  setChatbotWelcomeMessage: (message: string) => void;
  isCompact?: boolean;
}

export default function ContactView({
  proposalData,
  clearProposalData,
  setChatbotOpen,
  setChatbotWelcomeMessage,
  isCompact = false,
}: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    monthlyBill: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out all required fields: Name and Phone Number.');
      return;
    }
    setIsSubmitted(true);

    // Auto-update chatbot to talk about their contact submission!
    const msg = proposalData
      ? `Thanks for requesting a proposal, ${formData.name}! I see you configured a ${proposalData.systemSize} kW system for your roof. Our engineers are drafting a site diagram for ${formData.location || 'your site'} as we speak!`
      : `Hello ${formData.name}! Thank you for submitting your contact request. I see your inquiry. Let's schedule a brief call. What is your preferred time of day?`;
    
    setChatbotWelcomeMessage(msg);
    // Open chat slightly delayed
    setTimeout(() => {
      setChatbotOpen(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      location: '',
      monthlyBill: '',
    });
    setIsSubmitted(false);
    clearProposalData();
  };

  return (
    <div className={`w-full relative ${isCompact ? 'flex-1 flex flex-col bg-[#fbf7f7] overflow-hidden min-h-full' : 'pt-24 pb-16 bg-[#fbf7f7] overflow-hidden'}`}>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className={`absolute top-0 right-0 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 ${isCompact ? 'w-[600px] h-[600px] bg-solar-red/10' : 'w-[800px] h-[800px] bg-solar-red/20'}`}></div>
        <div className={`absolute bottom-0 left-0 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 ${isCompact ? 'w-[600px] h-[600px] bg-blue-500/10' : 'w-[800px] h-[800px] bg-blue-500/15'}`}></div>
      </div>

      {/* Header */}
      {!isCompact && (
      <section className="bg-[#fbf7f7]/80 py-16 border-b border-gray-200 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-display-lg text-4xl font-extrabold uppercase text-industrial-charcoal">
              Contact Power Pulse Energy
            </h1>
            <p className="font-body-lg text-base text-gray-500 max-w-2xl mx-auto">
              Request a Free Solar Quote or get in touch with us. We are ready to help you switch to clean, affordable solar power.
            </p>
            <div className="w-16 h-1 bg-solar-red mx-auto rounded" />
          </motion.div>
        </div>
      </section>
      )}

      {/* Main Content Grid */}
      <section className={`relative z-10 ${isCompact ? 'flex-1 flex flex-col justify-center py-4 max-w-7xl w-full' : 'py-16 max-w-7xl'} mx-auto px-6 md:px-16`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form or Success */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  {/* Pre-filled calculation notice banner */}
                  {proposalData && (
                    <div className="bg-industrial-charcoal text-white p-5 rounded-lg border border-solar-red/30 space-y-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-solar-red/5 rounded-full transform translate-x-8 -translate-y-8" />
                      
                      <div className="flex items-center gap-2.5">
                        <Sun className="h-5 w-5 text-solar-red" />
                        <h4 className="font-bold text-sm uppercase tracking-wider">
                          Solar Calculator Pre-Filled Sizing
                        </h4>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center pt-2">
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-[10px] text-gray-400 block uppercase font-semibold">System Size</span>
                          <span className="text-sm font-bold text-solar-red">{proposalData.systemSize} kW</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-[10px] text-gray-400 block uppercase font-semibold">Annual Savings</span>
                          <span className="text-sm font-bold text-emerald-400">${proposalData.savings.toLocaleString()}</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-[10px] text-gray-400 block uppercase font-semibold">Payback Period</span>
                          <span className="text-sm font-bold text-white">{proposalData.payback} Years</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                        Complete your information below. Our engineers will run a 3D structural shading simulation of your address to prepare your finalized proposal PDF.
                      </p>
                    </div>
                  )}

                  <h3 className="font-headline-md text-xl font-bold text-industrial-charcoal">
                    {proposalData ? 'Submit Proposal Request' : 'Request a Free Solar Quote'}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className={isCompact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 font-sans block">
                          Name <span className="text-solar-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-solar-red focus:bg-white transition-colors"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 font-sans block">
                          Phone Number <span className="text-solar-red">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-solar-red focus:bg-white transition-colors"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className={isCompact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
                      {/* Location */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 font-sans block">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-solar-red focus:bg-white transition-colors"
                          placeholder="City or Area"
                        />
                      </div>

                      {/* Monthly Bill */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 font-sans block">
                          Monthly Electricity Bill
                        </label>
                        <input
                          type="text"
                          name="monthlyBill"
                          value={formData.monthlyBill}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-solar-red focus:bg-white transition-colors"
                          placeholder="e.g. ₹2000"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-solar-red hover:bg-red-700 text-white font-bold uppercase tracking-wider h-14 rounded hover:scale-[1.01] active:scale-98 transition-all duration-300 shadow-lg shadow-solar-red/15 cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      <FileText className="h-5 w-5" />
                      <span>{proposalData ? 'Submit Quote Request' : 'Submit & Get Free Consultation'}</span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-10 px-6 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline-md text-2xl font-bold text-industrial-charcoal tracking-tight">
                      Request Submitted Successfully!
                    </h3>
                    <p className="font-body-md text-sm text-gray-500 leading-relaxed font-sans max-w-md mx-auto">
                      Thank you, <strong className="text-industrial-charcoal font-semibold">{formData.name}</strong>. Your detailed request has been routed directly to our Austin engineering office.
                    </p>
                  </div>

                  {proposalData && (
                    <div className="bg-white p-4 rounded-lg shadow-xs max-w-sm mx-auto border border-gray-100 space-y-2">
                      <div className="flex items-center gap-2 justify-center text-solar-red font-bold text-xs uppercase tracking-wider">
                        <Sun className="h-4 w-4" />
                        <span>Engineered Sizing Confirmed</span>
                      </div>
                      <div className="text-xl font-mono font-bold text-industrial-charcoal">
                        {proposalData.systemSize} kW Array
                      </div>
                      <div className="text-[11px] text-gray-400 font-sans">
                        Full technical model and 3D shadow report under construction.
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                    We will be in touch with you at <strong>{formData.phone}</strong> shortly. Our team will follow up as soon as possible.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-solar-red hover:text-industrial-charcoal transition-colors cursor-pointer"
                    >
                      <span>New Request</span>
                      <ArrowRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isCompact && (
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-center space-y-4 mt-8">
                <h4 className="font-bold text-xs text-industrial-charcoal uppercase tracking-wider block">
                  Looking for faster answers?
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-xs mx-auto">
                  Open our floating AI Assistant in the lower right. It is fully trained on our system configurations, ROI metrics, and payback timelines!
                </p>
                <button
                  onClick={() => {
                    setChatbotWelcomeMessage("Hello! Let's examine your commercial solar options. What are your monthly kWh requirements?");
                    setChatbotOpen(true);
                  }}
                  className="text-xs font-bold text-solar-red uppercase tracking-wider hover:text-industrial-charcoal transition-colors cursor-pointer flex items-center justify-center gap-1.5 mx-auto"
                >
                  <span>Initialize Assistant</span>
                  <ArrowRight className="h-4 w-4 animate-pulse" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-industrial-charcoal text-white p-8 rounded-lg shadow-lg space-y-6 border border-white/5">
              <h3 className="font-headline-md text-lg font-bold pb-3 border-b border-gray-700">
                Contact Information
              </h3>

                <div className="space-y-5 text-sm">
                  
                  {/* Phone */}
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-solar-red/10 border border-solar-red/20 flex items-center justify-center text-solar-red group-hover:bg-solar-red group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 uppercase tracking-wider font-semibold font-sans">
                        Phone
                      </h4>
                      <p className="font-bold text-white group-hover:text-solar-red transition-colors font-mono">
                        
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-solar-red/10 border border-solar-red/20 flex items-center justify-center text-solar-red group-hover:bg-solar-red group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 uppercase tracking-wider font-semibold font-sans">
                        Email
                      </h4>
                      <p className="font-bold text-white group-hover:text-solar-red transition-colors font-mono">
                        
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-solar-red/10 border border-solar-red/20 flex items-center justify-center text-solar-red group-hover:bg-solar-red group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs text-gray-400 uppercase tracking-wider font-semibold font-sans">
                        Service Area
                      </h4>
                      <p className="font-bold text-white group-hover:text-solar-red transition-colors leading-relaxed font-sans">
                        Across Telangana <br />
                        and Andhra Pradesh
                      </p>
                    </div>
                  </div>

                  {/* Google Map View */}
                  <div className="w-full h-48 mt-6 rounded-lg overflow-hidden border border-gray-700 shadow-inner">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?q=Telangana+and+Andhra+Pradesh&t=&z=6&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}
