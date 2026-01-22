
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'O Conceito', id: 'alavancagem' },
    { label: 'Alavancagem', id: 'simulator' },
    { label: 'Fundamentos', id: 'fundamentos' },
    { label: 'FAQ', id: 'faq' }
  ];

  const WHATSAPP_URL = "https://wa.me/554788451523";
  const INSTAGRAM_URL = "https://www.instagram.com/juanpablo_investimentos/?utm_source=ig_web_button_share_sheet";
  const EMAIL_CONSULTOR = "jplopesvockner@gmail.com";
  const PHONE_DISPLAY = "+55 47 8845-1523";

  return (
    <footer className="bg-vintage-paper text-vintage-ink py-20 md:py-32 border-t border-vintage-red/10">
      <div className="container mx-auto px-10 md:px-20 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          
          <div className="lg:col-span-5 space-y-8">
             <Link 
              to="/" 
              className="inline-block group transform-gpu"
             >
               <span className="text-xl md:text-2xl font-serif font-black tracking-tight text-vintage-ink uppercase leading-none transition-all duration-500 lg:group-hover:text-vintage-red">
                ADEMICON<span className="text-vintage-red">.</span>
              </span>
             </Link>
            <p className="text-vintage-gray text-[10px] md:text-xs leading-relaxed max-w-sm font-light uppercase tracking-[0.2em] opacity-60">
              A arquitetura definitiva de ativos de elite. A maior administradora independente do Brasil, desenhada para quem domina o próprio futuro.
            </p>
            {/* Reduzido o gap de 6 para 3 para aproximar os ícones conforme solicitado */}
            <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
                  { Icon: Mail, label: "Email", href: `mailto:${EMAIL_CONSULTOR}` }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group text-vintage-red/30 lg:hover:text-vintage-red transition-all duration-700 transform-gpu"
                  >
                    <social.Icon size={16} strokeWidth={1.5} />
                    <span className="text-[9px] font-bold uppercase tracking-widest hidden sm:inline-block opacity-0 lg:group-hover:opacity-100 -translate-x-1 lg:group-hover:translate-x-0 transition-all">{social.label}</span>
                  </a>
                ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
             <h4 className="text-[10px] font-black text-vintage-red uppercase tracking-[0.4em] opacity-70">Navegação</h4>
             <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-vintage-ink/50">
                {footerLinks.map((link) => (
                  <Link 
                    key={link.label} 
                    to={`#${link.id}`}
                    className="flex items-center gap-2 lg:hover:text-vintage-red lg:hover:translate-x-1 transition-all duration-500 group transform-gpu active:text-vintage-red"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end text-left lg:text-right space-y-8">
             <div className="space-y-4">
                <h4 className="text-[10px] font-black text-vintage-red uppercase tracking-[0.4em] opacity-70">Sedes Estratégicas</h4>
                <p className="text-vintage-ink text-[10px] md:text-xs font-light leading-relaxed uppercase tracking-[0.2em] opacity-50 italic">
                  São Paulo · Faria Lima<br/>
                  Curitiba · Batel
                </p>
             </div>
             <div className="pt-6 border-t border-vintage-red/10 w-full lg:w-fit">
                <span className="text-[9px] font-bold text-vintage-red uppercase tracking-widest opacity-60">Atendimento Prime</span>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vintage-ink font-serif text-base mt-1 block lg:hover:text-vintage-red transition-colors active:text-vintage-red"
                >
                  {PHONE_DISPLAY}
                </a>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-vintage-red/10 text-[8px] md:text-[9px] text-vintage-gray/40 uppercase tracking-[0.3em] font-semibold gap-8">
          <p>© {new Date().getFullYear()} ADEMICON CONSÓRCIO · GESTÃO PATRIMONIAL.</p>
          <div className="flex gap-10">
             <a href="#" className="lg:hover:text-vintage-red transition-all duration-500">Privacidade</a>
             <a href="#" className="lg:hover:text-vintage-red transition-all duration-500">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
