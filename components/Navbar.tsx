
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const menuItems = [
    { label: 'O Conceito', id: 'home' },
    { label: 'Alavancagem', id: 'alavancagem' },
    { label: 'Fundamentos', id: 'fundamentos' },
    { label: 'FAQ', id: 'faq' }
  ];

  const WHATSAPP_URL = "https://wa.me/554788451523";

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isScrolled 
          ? 'bg-vintage-bg/90 border-b border-vintage-red/5 py-4 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent py-8 md:py-10'
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="group relative transition-transform duration-500 hover:scale-[1.02]"
        >
           <span className="text-base md:text-xl font-serif font-black tracking-tight text-vintage-ink leading-none uppercase">
            ADEMICON<span className="text-vintage-red">.</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, `#${item.id}`)}
              className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-vintage-ink/60 hover:text-vintage-red transition-all duration-500 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-vintage-red transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-vintage-red text-white text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-vintage-ink transition-all duration-700 rounded-sm shadow-lg shadow-vintage-red/10 hover:shadow-vintage-red/20 transform-gpu active:scale-95"
          >
            Falar com Especialista
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-vintage-ink p-2 transition-transform duration-300 active:scale-90"
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 z-[105] bg-vintage-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-vintage-red p-2">
          <X size={32} strokeWidth={1} />
        </button>
        
        <div className="flex flex-col items-center gap-12 text-center">
          {menuItems.map((item, i) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, `#${item.id}`)}
              className="text-4xl font-serif text-vintage-ink hover:text-vintage-red transition-all duration-500 transform-gpu"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
