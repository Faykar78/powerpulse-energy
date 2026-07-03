import { Zap, Shield, HelpCircle, FileText, Download } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentView: (view: string) => void;
  openChatbot: () => void;
}

export default function Footer({ setCurrentView, openChatbot }: FooterProps) {
  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-industrial-charcoal border-t border-white/10 text-white font-body-md text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto">
        
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 inline-block relative h-24 w-[280px]">
            <Logo className="absolute left-0 top-1/2 -translate-y-1/2 h-[260px] w-[280px] max-w-none -ml-4" />
          </div>
          <p className="text-white/60 mb-6 max-w-xs leading-relaxed">
            Precision engineering and industry-leading renewable energy infrastructure for a sustainable future.
          </p>
        </div>

        {/* Links Column 1: Navigation */}
        <div>
          <h4 className="font-bold text-solar-red uppercase tracking-wider text-xs mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className="text-white/60 hover:text-solar-red hover:translate-x-1 transition-all duration-200 text-left"
              >
                Home & Calculator
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className="text-white/60 hover:text-solar-red hover:translate-x-1 transition-all duration-200 text-left"
              >
                About Our Philosophy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('services')}
                className="text-white/60 hover:text-solar-red hover:translate-x-1 transition-all duration-200 text-left"
              >
                Solar Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-white/60 hover:text-solar-red hover:translate-x-1 transition-all duration-200 text-left"
              >
                Project Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-white/60 hover:text-solar-red hover:translate-x-1 transition-all duration-200 text-left"
              >
                Get Quote & Proposal
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Legal */}
        <div>
          <h4 className="font-bold text-solar-red uppercase tracking-wider text-xs mb-4">Legal</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-solar-red" />
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy: Power Pulse Energy maintains the highest standards of data protection and privacy for our enterprise and residential clients. No data is shared with third parties.');
                }}
                className="text-white/60 hover:text-solar-red transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-solar-red" />
              <a
                href="#terms"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service: By using our solar estimator or consultation portals, you agree to receive professional renewable energy engineering advice from Power Pulse Energy representatives.');
                }}
                className="text-white/60 hover:text-solar-red transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 3: Resources */}
        <div>
          <h4 className="font-bold text-solar-red uppercase tracking-wider text-xs mb-4">Resources</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Download className="h-4 w-4 text-solar-red" />
              <a
                href="#install"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Our comprehensive Installation Guide PDF is compiled uniquely for each project system size (kW) to verify structural and electrical integration compliance.');
                }}
                className="text-white/60 hover:text-solar-red transition-colors"
              >
                Installation Guide
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-solar-red" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openChatbot();
                }}
                className="text-white/60 hover:text-solar-red transition-colors text-left"
              >
                Support Center (AI Assistant)
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-12 pt-8 border-t border-white/5 text-white/40 text-center">
        © {new Date().getFullYear()} Power Pulse Energy. All rights reserved.
      </div>
    </footer>
  );
}
