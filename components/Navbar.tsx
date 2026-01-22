
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'O Conceito', id: 'alavancagem' },
    { label: 'Alavancagem', id: 'simulator' },
    { label: 'Fundamentos', id: 'fundamentos' },
    { label: 'FAQ', id: 'faq' }
  ];

  const WHATSAPP_URL = "https://wa.me/554788451523";
  const INSTAGRAM_URL = "https://www.instagram.com/juanpablo_investimentos/?utm_source=ig_web_button_share_sheet";
  const EMAIL_CONSULTOR = "jplopesvockner@gmail.com";

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all md:duration-1000 ${
        isScrolled 
          ? 'bg-vintage-bg/90 border-b border-vintage-red/5 py-3 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent py-8 md:py-10'
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="group relative transform-gpu active:opacity-70 lg:hover:scale-[1.02] transition-transform duration-500"
        >
           <span className="text-base md:text-xl font-serif font-black tracking-tight text-vintage-ink leading-none uppercase">
            ADEMICON<span className="text-vintage-red">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {menuItems.map((item) => (
            <Link 
              key={item.label}
              to={`#${item.id}`}
              className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-vintage-ink/60 lg:hover:text-vintage-red transition-all duration-500 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-vintage-red transition-all duration-500 lg:group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            to="#bio"
            className="px-8 py-3 bg-vintage-red text-white text-[9px] font-bold uppercase tracking-[0.3em] lg:hover:bg-vintage-ink transition-all duration-700 rounded-sm shadow-lg shadow-vintage-red/10 lg:hover:shadow-vintage-red/20 transform-gpu active:scale-95"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-vintage-ink p-2 active:bg-vintage-red/10 rounded-full transition-colors"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[110] bg-vintage-paper flex flex-col transition-all duration-500 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-8 flex justify-between items-center border-b border-vintage-red/10 bg-white">
          <button onClick={handleLogoClick} className="active:opacity-60">
            <span className="text-lg font-serif font-black tracking-tight text-vintage-ink uppercase">
              ADEMICON<span className="text-vintage-red">.</span>
            </span>
          </button>
          <button onClick={() => setIsOpen(false)} className="text-vintage-red p-2 bg-vintage-red/5 rounded-full active:bg-vintage-red/20">
            <X size={24} strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-start pt-12 px-10 gap-2 overflow-y-auto">
          <span className="text-[10px] font-black text-vintage-red uppercase tracking-[0.5em] mb-4 block opacity-60">Menu Principal</span>
          {menuItems.map((item, i) => (
            <Link 
              key={item.label}
              to={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif text-vintage-ink py-5 border-b border-vintage-ink/5 flex items-center justify-between group active:text-vintage-red transition-colors"
            >
              <span>{item.label}</span>
              <span className="text-vintage-red text-2xl opacity-0 active:opacity-100">→</span>
            </Link>
          ))}
          
          <Link 
            to="#bio"
            onClick={() => setIsOpen(false)}
            className="mt-12 py-6 px-8 bg-vintage-red text-white text-center font-bold uppercase tracking-[0.2em] text-[11px] rounded-sm shadow-xl active:bg-vintage-ink transition-colors"
          >
            Falar com Especialista
          </Link>
        </div>

        <div className="p-10 bg-white border-t border-vintage-red/10">
           <span className="text-[9px] font-black text-vintage-ink/40 uppercase tracking-[0.4em] mb-6 block">Contato Direto</span>
           <div className="flex justify-between items-center">
              <div className="flex gap-10">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-vintage-ink/60 active:text-vintage-red transition-colors"><Instagram size={24} /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-vintage-ink/60 active:text-vintage-red transition-colors"><MessageCircle size={24} /></a>
                <a href={`mailto:${EMAIL_CONSULTOR}`} className="text-vintage-ink/60 active:text-vintage-red transition-colors"><Mail size={24} /></a>
              </div>
              <span className="text-[10px] font-bold text-vintage-red uppercase tracking-widest">Juan Pablo</span>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
