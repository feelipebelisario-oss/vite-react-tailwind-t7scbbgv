import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database, 
  TrendingUp, 
  Users, 
  Building2, 
  ChevronDown, 
  Menu,
  X,
  Linkedin,
  Mail,
  ShieldCheck,
  BrainCircuit,
  Smartphone,
  Target,
  LineChart,
  Lock,
  XCircle,
  Briefcase,
  Award,
  Clock, 
  Activity,
  DollarSign,
  Microscope,
  Server,
  Radar,
  BarChart4,
  Rocket,
  Cpu,
  LayoutGrid,
  FileSpreadsheet,
  AlertTriangle,
  Quote,
  HelpCircle,
  ChevronUp,
  FileText,
  Search as SearchIcon,
  Laptop,
  Tablet,
  FolderOpen
} from 'lucide-react';

// --- Componentes de UI ---

const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SafeAvatar = ({ src, alt, initials, colorClass }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="w-full h-full relative bg-slate-800">
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${colorClass} text-white font-bold text-3xl font-mono`}>
          {initials}
        </div>
      )}
    </div>
  );
};

const BankLogo = ({ src, alt }) => (
  <div className="h-10 md:h-14 w-28 md:w-36 flex items-center justify-center transition-all duration-500 hover:scale-105 opacity-40 hover:opacity-100 grayscale hover:grayscale-0">
    <img 
      src={src} 
      alt={alt} 
      className="max-h-full max-w-full object-contain brightness-200 hover:brightness-100 transition-all"
      referrerPolicy="no-referrer"
    />
  </div>
);

// --- Logos Microsoft (SVG Inline) ---
const LogoPowerApps = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2H22C26.4183 2 30 5.58172 30 10V22C30 26.4183 26.4183 30 22 30H10C5.58172 30 2 26.4183 2 22V10C2 5.58172 5.58172 2 10 2Z" fill="url(#paint0_linear)"/>
    <path d="M10.5 8L21.5 16L10.5 24V8Z" fill="white"/>
    <defs><linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#953C96"/><stop offset="1" stopColor="#E2276E"/></linearGradient></defs>
  </svg>
);
const LogoPowerAutomate = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 16L16 2.5L29.5 16L16 29.5L2.5 16Z" fill="#0066FF"/>
    <path d="M10 16L16 10L22 16L18 16L20 22H12L14 16H10Z" fill="white"/>
  </svg>
);
const LogoPowerBI = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="16" width="6" height="12" rx="1" fill="#F2C811"/>
    <rect x="14" y="10" width="6" height="18" rx="1" fill="#F2C811"/>
    <rect x="22" y="4" width="6" height="24" rx="1" fill="#F2C811"/>
  </svg>
);
const LogoSharePoint = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C12.134 3 9 6.13401 9 10C9 13.866 12.134 17 16 17C19.866 17 23 13.866 23 10C23 6.13401 19.866 3 16 3Z" fill="#036C70" opacity="0.5"/>
    <circle cx="16" cy="16" r="13" stroke="#0078D4" strokeWidth="2" fill="none"/>
    <path d="M16.5 13C13.4624 13 11 15.4624 11 18.5C11 21.5376 13.4624 24 16.5 24C19.5376 24 22 21.5376 22 18.5C22 15.4624 19.5376 13 16.5 13Z" fill="#0078D4"/>
  </svg>
);

// --- Componente Principal ---

export default function PulseOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState(null);
  const [vagas, setVagas] = useState(3);
  
  const openWhatsApp = () => window.open('https://wa.me/5511977538041', '_blank');

  // Lógica de Scroll Lock no Menu Mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setVagas(Math.floor(Math.random() * (4 - 2 + 1)) + 2); 
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'microsoft', 'problema', 'qualificacao', 'metodologia', 'cortex', 'cases', 'faq', 'oferta'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-300 bg-[#020617] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden w-full">
      
      {/* STATUS BAR (Esconde ao rolar para ganhar espaço no mobile) */}
      <div className={`bg-[#0f172a] border-b border-slate-800 py-2 px-4 text-center z-50 fixed w-full transition-transform duration-300 flex justify-center items-center shadow-lg ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 px-3 py-1 rounded-full transition-colors group" onClick={openWhatsApp}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Q1 2025</span>
          </div>
          <span className="text-xs text-slate-200">
            Abertura para <strong className="text-white border-b border-red-500/50">{vagas} Diagnósticos</strong> de Recuperação de Margem.
          </span>
          <ArrowRight size={12} className="text-emerald-500 group-hover:translate-x-1 transition-transform"/>
        </div>
      </div>

      {/* NAVBAR (Ajusta posição ao rolar) */}
      <header className={`fixed w-full z-[49] transition-all duration-300 ${scrolled ? 'top-0 bg-[#020617]/90 backdrop-blur-lg border-b border-slate-800/50 py-3' : 'top-[40px] bg-transparent border-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center relative">
                    <Activity size={20} className="text-blue-400" />
                </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">PULSE</span>
              <span className="text-[9px] font-mono text-slate-500 tracking-[0.2em] group-hover:text-blue-400 transition-colors">OS.2025</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-md">
            {['A Ferramenta', 'O Problema', 'Para Quem É', 'Resultados'].map((item) => {
              const id = item === 'A Ferramenta' ? 'microsoft' : item === 'O Problema' ? 'problema' : item === 'Para Quem É' ? 'qualificacao' : 'cases';
              const isActive = activeSection === id;
              return (
                <button key={item} onClick={() => scrollToSection(id)} className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${isActive ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <button onClick={openWhatsApp} className="group relative px-6 py-2.5 rounded-lg bg-emerald-500 text-[#020617] font-bold text-xs uppercase tracking-wide overflow-hidden hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Diagnóstico Gratuito</span>
            </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU (Full Overlay com trava de scroll) */}
      <div className={`fixed inset-0 bg-[#020617] z-[100] p-6 flex flex-col gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <span className="text-xl font-bold text-white">MENU</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white p-2"><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-2">
              {['A Ferramenta', 'O Problema', 'Para Quem É', 'Resultados'].map((item) => {
                 const id = item === 'A Ferramenta' ? 'microsoft' : item === 'O Problema' ? 'problema' : item === 'Para Quem É' ? 'qualificacao' : 'cases';
                 return (
                    <button key={item} onClick={() => scrollToSection(id)} className="text-left text-2xl font-light text-slate-300 hover:text-emerald-400 py-4 border-b border-slate-800/50 flex justify-between items-center active:bg-slate-900">
                      {item} <ArrowRight size={16} className="text-slate-600"/>
                    </button>
                 )
              })}
          </nav>
          <button onClick={() => { openWhatsApp(); setIsMenuOpen(false); }} className="mt-auto w-full bg-emerald-500 text-[#020617] py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
            Agendar Diagnóstico <ArrowRight size={18}/>
          </button>
      </div>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
            
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-blue-400 text-[10px] font-mono tracking-widest uppercase shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Auditoria & Engenharia Operacional
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Sua empresa cresceu, mas os números ainda fecham no <span className="relative whitespace-nowrap text-white"><span className="absolute bg-red-500/20 -inset-1 rounded blur-sm"></span><span className="relative text-red-400 border-b-4 border-red-500/50">Excel?</span></span>
                </h1>
              </Reveal>
              
              <Reveal delay={300}>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-emerald-500/50 pl-6">
                  Implementamos o <strong>Pulse O.S.</strong>: O sistema operacional que elimina o caos, blinda seus dados e usa IA para prever sua margem futura.
                </p>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button onClick={openWhatsApp} className="relative group bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    SOLICITAR DIAGNÓSTICO ESTRATÉGICO (GRATUITO)
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                  <Lock size={12} /> Sem compromisso. Ideal para empresas em expansão.
                </p>
              </Reveal>
            </div>
            
            {/* Right Visual: The "System" + Mobile Card */}
            <div className="lg:w-1/2 w-full perspective-[2000px]">
              <Reveal delay={300}>
                 <div className="relative group transform transition-transform duration-700 hover:scale-[1.01]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    
                    {/* MOBILE VISUAL */}
                    <div className="lg:hidden bg-slate-900 border border-slate-700 p-5 rounded-xl relative overflow-hidden shadow-xl mb-8">
                       <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-slate-500 tracking-widest">PULSE_MOBILE</span>
                          <div className="flex gap-1"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div></div>
                       </div>
                       <div className="flex justify-between items-end mb-4">
                          <div>
                             <div className="text-xs text-slate-400 mb-1">Risco Detectado</div>
                             <div className="text-xl font-bold text-white">Ruptura de Estoque</div>
                          </div>
                          <div className="text-right">
                              <div className="text-xs text-slate-500">SKU-9021</div>
                              <div className="text-emerald-400 font-bold text-sm">Ação Requerida</div>
                          </div>
                       </div>
                       <div className="mt-2 text-xs text-emerald-400 font-mono bg-emerald-500/10 p-3 rounded border border-emerald-500/20 flex items-center gap-2">
                          <Zap size={14} />
                          <span>Sugestão: Compra Automática (500un)</span>
                       </div>
                    </div>

                    {/* DESKTOP VISUAL */}
                    <div className="hidden lg:block relative bg-[#0B1120] border border-slate-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl mx-auto">
                       <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center backdrop-blur-sm">
                          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div></div>
                          <span className="text-[10px] font-mono text-slate-500 tracking-widest">PULSE_CORTEX_LIVE_VIEW</span>
                       </div>
                       
                       <div className="p-6 grid gap-6">
                          <div className="grid grid-cols-2 gap-4">
                             <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                                <div className="flex justify-between items-start mb-2"><span className="text-[10px] text-slate-400 uppercase tracking-wider">Margem Real</span><TrendingUp size={14} className="text-emerald-500"/></div>
                                <div className="text-2xl font-bold text-white">+18.2%</div>
                                <span className="text-[10px] text-emerald-500 font-mono">+2.4% vs last month</span>
                             </div>
                             <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                                <div className="flex justify-between items-start mb-2"><span className="text-[10px] text-slate-400 uppercase tracking-wider">Risco PDD</span><ShieldCheck size={14} className="text-blue-500"/></div>
                                <div className="text-2xl font-bold text-white">0.8%</div>
                                <span className="text-[10px] text-blue-500 font-mono">Blindagem Ativa</span>
                             </div>
                          </div>
                          
                          <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 font-mono text-[10px] leading-relaxed relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                             <div className="space-y-2 opacity-80">
                                <div className="flex gap-2"><span className="text-slate-500">10:42:01</span><span className="text-emerald-400">[AUDIT]</span><span className="text-slate-300">Excel 'Precificação_V2.xlsx' replaced.</span></div>
                                <div className="flex gap-2"><span className="text-slate-500">10:42:05</span><span className="text-blue-400">[BOT]</span><span className="text-slate-300">Stock rupture alert sent.</span></div>
                                <div className="flex gap-2"><span className="text-slate-500">10:42:12</span><span className="text-purple-400">[AI]</span><span className="text-slate-300">Churn risk detected: Client #9021 (85%).</span></div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* BANK LOGOS STRIP (INTEGRATED) */}
        <div className="w-full border-y border-slate-800/50 bg-[#050b1d]/30 mt-0 py-10 backdrop-blur-sm relative z-20">
           <div className="container mx-auto px-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono mb-8">DNA formado em instituições que processam R$500Bi/ano</p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
                 <BankLogo src="https://drive.google.com/thumbnail?id=1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG&sz=w1000" alt="Itaú" />
                 <BankLogo src="https://drive.google.com/thumbnail?id=1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh&sz=w1000" alt="Santander" />
                 <BankLogo src="https://drive.google.com/thumbnail?id=1CfUiS1YSi9d0lps8HDgHiN1IWpZShphW&sz=w1000" alt="Bradesco" />
                 <BankLogo src="https://drive.google.com/thumbnail?id=1aj_5IETgqNayEtx0fh42DHVaT-p79-Bk&sz=w1000" alt="C6 Bank" />
              </div>
           </div>
        </div>
      </section>

      {/* 2. MICROSOFT LEVERAGE */}
      <section id="microsoft" className="py-16 md:py-24 bg-[#0B1120] border-t border-slate-800 relative">
         <div className="container mx-auto px-6 relative z-10">
            <Reveal>
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded bg-blue-500/5">Ecossistema Microsoft 365</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
                     Você já paga por uma Ferrari.<br/>
                     <span className="text-slate-500">Mas ainda está andando de bicicleta.</span>
                  </h2>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                     Sua licença Microsoft 365 já inclui as ferramentas de automação mais poderosas do mundo. A Pulse desbloqueia esse potencial para criar um ecossistema integrado <strong>sem custo extra de software</strong>.
                  </p>
                  
                  {/* CREDIBILIDADE GARTNER */}
                  <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-center text-left hover:border-emerald-500/30 transition-colors">
                     <div className="bg-emerald-500/10 p-3 rounded-full shrink-0">
                        <Quote size={20} className="text-emerald-400" />
                     </div>
                     <div>
                        <p className="text-sm text-slate-300 italic mb-2">
                           "Até 2025, <strong>70% das novas aplicações</strong> desenvolvidas pelas empresas utilizarão tecnologias low-code ou no-code."
                        </p>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">— Gartner Research</span>
                     </div>
                  </div>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { logo: <LogoPowerApps/>, title: "Power Apps", sub: "Web & Mobile", desc: "Apps Corporativos seguros. Funciona no Tablet, Celular e Web. Ideal para equipes de campo e escritório.", examples: "Vendas em campo, Checklist de Loja, Manutenção.", border: "hover:border-purple-500/50", deviceIcons: true },
                  { logo: <LogoPowerAutomate/>, title: "Power Automate", sub: "Eficiência", desc: "Robôs 24/7. Automação de aprovações e processos repetitivos sem intervenção humana.", examples: "Aprovação de Compra, Onboarding de Cliente.", border: "hover:border-blue-500/50" },
                  { logo: <LogoSharePoint/>, title: "SharePoint & Dataverse", sub: "Segurança & Dados", desc: "Gestão Documental Inteligente e Banco de Dados auditável com controle de acesso rigoroso.", examples: "Gestão de Contratos, Intranet, CRM Customizado.", border: "hover:border-emerald-500/50" },
                  { logo: <LogoPowerBI/>, title: "Power BI", sub: "Visão", desc: "Dashboards financeiros que leem a operação em tempo real. Tome decisões baseadas em dados.", examples: "DRE em Tempo Real, Fluxo de Caixa, Churn Rate.", border: "hover:border-yellow-500/50" }
               ].map((item, i) => (
                  <Reveal key={i} delay={i * 100}>
                     <div className={`h-full p-6 rounded-2xl bg-slate-900 border border-slate-800 ${item.border} transition-all hover:-translate-y-1 group relative overflow-hidden flex flex-col`}>
                        <div className="flex justify-between items-start mb-6">
                           <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg bg-white/5 p-2 border border-white/10">
                              {item.logo}
                           </div>
                           {item.deviceIcons && (
                              <div className="flex gap-1 text-slate-500">
                                 <Smartphone size={16}/>
                                 <Tablet size={16}/>
                                 <Laptop size={16}/>
                              </div>
                           )}
                        </div>
                        <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 block">{item.sub}</span>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">{item.desc}</p>
                        
                        <div className="mt-auto pt-4 border-t border-slate-800/50">
                           <p className="text-[10px] text-slate-500 font-mono uppercase mb-1">Exemplos:</p>
                           <p className="text-xs text-slate-400 italic">{item.examples}</p>
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>

            {/* ROI CALCULATOR CARD */}
            <Reveal delay={400}>
               <div className="mt-12 bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden max-w-4xl mx-auto">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign size={100} className="text-emerald-500"/></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                     <div className="md:w-1/2">
                        <h3 className="text-xl font-bold text-white mb-2">💰 Quanto você já está pagando (e não usa)?</h3>
                        <p className="text-sm text-slate-400 mb-4">Exemplo: 100 licenças Microsoft E3 = ~R$ 144k/ano.</p>
                        <ul className="space-y-2 text-xs text-slate-300 font-mono">
                           <li className="flex justify-between border-b border-slate-800 pb-1"><span>Power Apps (Valor Mercado)</span> <span className="text-slate-500">~R$ 80k/app</span></li>
                           <li className="flex justify-between border-b border-slate-800 pb-1"><span>Power Automate (RPA)</span> <span className="text-slate-500">~R$ 15k/bot</span></li>
                           <li className="flex justify-between border-b border-slate-800 pb-1"><span>SharePoint (GED)</span> <span className="text-slate-500">~R$ 30k/ano</span></li>
                        </ul>
                     </div>
                     <div className="md:w-1/2 bg-[#020617] p-6 rounded-xl border border-slate-800 text-center">
                        <p className="text-xs text-slate-500 uppercase mb-2">Total desperdiçado em potencial</p>
                        <div className="text-3xl font-bold text-red-400 mb-4">~R$ 185.000 / ano</div>
                        <p className="text-xs text-emerald-400">A Pulse desbloqueia esse valor com um investimento único.</p>
                     </div>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* 3. O PROBLEMA */}
      <section id="problema" className="py-16 md:py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
               <Reveal>
                  <div className="pr-4">
                     <div className="flex items-center gap-2 mb-6">
                        <AlertTriangle className="text-red-500" size={20}/>
                        <span className="text-red-500 font-mono text-xs uppercase tracking-widest">Alerta Financeiro</span>
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O Custo Invisível do Caos</h2>
                     <p className="text-lg text-slate-400 leading-relaxed mb-8">
                        Se o seu Comercial e o Financeiro apresentam números diferentes na reunião de diretoria, você não tem gestão. <span className="text-white font-medium border-b border-red-500/50">Você tem torcida.</span>
                     </p>
                     
                     {/* MCKINSEY STAT */}
                     <div className="mb-8 bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm text-slate-300 italic">"Empresas perdem em média <strong>11,4% de margem</strong> por ineficiências operacionais e falta de visibilidade."</p>
                        <p className="text-xs text-slate-500 mt-2 text-right">— McKinsey & Co. (Operações Latam)</p>
                     </div>

                     <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex gap-4">
                           <div className="mt-1"><XCircle className="text-red-500" size={20} /></div>
                           <div>
                              <h4 className="text-white font-bold mb-1 text-sm">A Margem Fantasma</h4>
                              <p className="text-xs text-slate-400">Ineficiências que o ERP não pega e o Excel esconde.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Reveal>
               
               <Reveal delay={200}>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1 relative">
                     <div className="absolute inset-0 bg-red-500/10 blur-xl"></div>
                     <div className="bg-[#020617] rounded-xl p-8 relative z-10 flex flex-col items-center justify-center text-center min-h-[350px]">
                        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800">
                           <DollarSign size={32} className="text-red-500 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Quanto dinheiro você está</h3>
                        <h3 className="text-2xl font-bold text-red-500 mb-4">deixando na mesa?</h3>
                        <p className="text-xs text-slate-500 font-mono max-w-xs uppercase">Sem auditoria em tempo real, seu lucro é apenas uma estimativa.</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 3.5 PARA QUEM É (QUALIFICAÇÃO CIRÚRGICA) */}
      <section id="qualificacao" className="py-16 md:py-20 bg-[#050b1d] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-6xl">
            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Pulse O.S. é uma Implementação Cirúrgica</h2>
                  <p className="text-slate-400 mt-2">Nós resolvemos problemas específicos de empresas em crescimento.</p>
               </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
               {/* COLUNA ESQUERDA - PARA QUEM É */}
               <Reveal delay={100}>
                  <div className="bg-emerald-900/10 border border-emerald-500/20 p-8 rounded-2xl h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="text-emerald-400" size={24}/>
                        <h3 className="text-xl font-bold text-white">PARA QUEM É</h3>
                     </div>
                     <ul className="space-y-4">
                        {[
                           "Empresas em crescimento rápido (A operação atropelou a gestão)",
                           "Operações de alta complexidade (Múltiplos canais/filiais)",
                           "Equipes sobrecarregadas (Muito trabalho manual)",
                           "Dados descentralizados (Cada área tem sua 'verdade')",
                           "Necessidade de Governança (Auditoria, LGPD, ISO)",
                           "Já possui Microsoft 365 e quer extrair ROI da Power Platform"
                        ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm text-slate-300">
                              <span className="text-emerald-500 font-bold">✓</span> {item}
                           </li>
                        ))}
                     </ul>
                     <div className="mt-8 pt-6 border-t border-emerald-500/20">
                        <p className="text-xs text-emerald-400 font-mono uppercase tracking-wide">PERFIL TÍPICO</p>
                        <p className="text-sm text-slate-300 mt-1">Perfil Típico: R$ 15M a R$ 200M/ano • Times de 20 a 500 pessoas</p>
                     </div>
                  </div>
               </Reveal>

               {/* COLUNA DIREITA - NÃO É PARA */}
               <Reveal delay={200}>
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl h-full opacity-80 hover:opacity-100 transition-opacity">
                     <div className="flex items-center gap-3 mb-6">
                        <XCircle className="text-slate-500" size={24}/>
                        <h3 className="text-xl font-bold text-slate-400">NÃO É PARA VOCÊ SE</h3>
                     </div>
                     <ul className="space-y-4">
                        {[
                           "Busca uma solução 'quebra-galho' sem processo",
                           "Não utiliza (e não quer usar) o ecossistema Microsoft",
                           "Ainda não tem produto/serviço validado (fase de ideia)",
                           "Quer resultado mágico sem investir em reestruturação",
                           "Estruturas muito enxutas sem hierarquia definida"
                        ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm text-slate-500">
                              <span className="text-slate-600 font-bold">✕</span> {item}
                           </li>
                        ))}
                     </ul>
                     <div className="mt-8 pt-6 border-t border-slate-800">
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">NOTA</p>
                        <p className="text-sm text-slate-500 mt-1">Se sua empresa é menor, mas tem a dor latente, temos a opção da Sprint Tática.</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 4. METODOLOGIA (O CICLO DE VALOR PULSE) */}
      <section id="metodologia" className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <Reveal>
               <div className="text-center mb-20 max-w-4xl mx-auto">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded bg-blue-500/5 mb-4 inline-block">O Motor de LTV</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">O CICLO DE VALOR PULSE</h2>
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                     Transformamos seu custo de licença Microsoft em <strong className="text-emerald-400">lucro operacional</strong>. Não entregamos um software estático, implementamos uma rotina contínua de digitalização e inteligência.
                  </p>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 -z-10"></div>

               {[
                  { 
                     step: "1. MAPEAR", 
                     sub: "Discovery",
                     title: "Caça ao Desperdício", 
                     icon: <SearchIcon size={24}/>, 
                     desc: "O gargalo muda de lugar. Nossa rotina mensal é mapear os processos que ainda rodam em 'planilhas ocultas' (Shadow IT) e desenhar a solução técnica.",
                     color: "text-blue-400", 
                     bg: "bg-blue-900/20", 
                     border: "border-blue-500/30" 
                  },
                  { 
                     step: "2. CONSTRUIR", 
                     sub: "Build",
                     title: "Fábrica de Soluções", 
                     icon: <Zap size={24}/>, 
                     desc: "Transformamos a planilha em Apps e Robôs usando o Office 365 que você já paga. Criamos a ferramenta certa com travas que impedem o erro humano.",
                     color: "text-indigo-400", 
                     bg: "bg-indigo-900/20", 
                     border: "border-indigo-500/30" 
                  },
                  { 
                     step: "3. AUDITAR", 
                     sub: "Trust",
                     title: "Guardião da Verdade", 
                     icon: <ShieldCheck size={24}/>, 
                     desc: "Software sem dono quebra. Nós monitoramos a integridade dos dados. Garantimos que o número do Comercial bata centavo a centavo com o Financeiro.",
                     color: "text-emerald-400", 
                     bg: "bg-emerald-900/20", 
                     border: "border-emerald-500/30" 
                  },
                  { 
                     step: "4. PREVER", 
                     sub: "Predict",
                     title: "Inteligência Ativa", 
                     icon: <BrainCircuit size={24}/>, 
                     desc: "Transformamos o dado auditado em dinheiro. Aplicamos IA para prever cenários futuros (Caixa, Demanda), recalibrando modelos mensalmente.",
                     color: "text-purple-400", 
                     bg: "bg-purple-900/20", 
                     border: "border-purple-500/30" 
                  }
               ].map((item, i) => (
                  <Reveal key={i} delay={i * 150}>
                     <div className="flex flex-col h-full bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 relative group">
                        <div className="flex justify-between items-start mb-6">
                           <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} ${item.border} border flex items-center justify-center shadow-lg`}>
                              {item.icon}
                           </div>
                           <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.sub}</span>
                        </div>
                        
                        <div className="mb-2">
                           <span className={`text-xs font-bold font-mono ${item.color} block mb-1`}>{item.step}</span>
                           <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                        </div>
                        
                        <p className="text-sm text-slate-400 leading-relaxed mt-auto border-t border-slate-800/50 pt-4">
                           {item.desc}
                        </p>

                        {/* Arrow for flow indication */}
                        {i < 3 && (
                           <div className="hidden lg:block absolute -right-3 top-12 text-slate-700 z-20 bg-[#0f172a] rounded-full p-1">
                              <ArrowRight size={16}/>
                           </div>
                        )}
                     </div>
                  </Reveal>
               ))}
            </div>

            {/* CLOSING / LTV LOCK */}
            <Reveal delay={600}>
               <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-[#0B1120] border border-slate-800 rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                  <div className="relative z-10">
                     <div className="flex items-center justify-center gap-2 mb-4 text-red-400">
                        <AlertTriangle size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">A Entropia é Inevitável</span>
                     </div>
                     <p className="text-slate-300 text-lg leading-relaxed italic">
                        "Sem uma governança ativa, novos processos manuais surgem e a operação tende ao caos em 90 dias. <span className="text-white not-italic font-bold">O Ciclo Pulse é a energia que mantém a ordem, a segurança e o lucro crescendo continuamente.</span>"
                     </p>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* 5. VELOCIDADE (Sprint) */}
      <section id="velocidade" className="py-16 md:py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6">
            <Reveal>
               <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20">
                     <Rocket size={14}/> Time-to-Value
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Não espere 6 meses para ver o ROI.</h2>
                  <p className="text-slate-400">
                     Consultorias tradicionais entregam PowerPoints. Nós entregamos Soluções. Nossa metodologia ágil garante a primeira entrega de valor (MVP) em tempo recorde.
                  </p>
               </div>
            </Reveal>

            <div className="max-w-3xl mx-auto space-y-4">
               {/* Timeline Item 1 - Sprint Tática */}
               <Reveal delay={100}>
                  <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/10 to-slate-900 border border-emerald-500/30 relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                     <div className="md:w-1/4">
                        <span className="text-emerald-400 font-mono text-sm font-bold uppercase tracking-wider block mb-1">Dias 1-15</span>
                        <h3 className="text-xl font-bold text-white">Sprint Tática</h3>
                        <span className="text-xs text-slate-500 uppercase">(O MVP de Valor Imediato)</span>
                     </div>
                     <div className="md:w-3/4">
                        <p className="text-sm text-slate-300 mb-4">O ROI acontece aqui. Entregamos:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                           <div className="bg-slate-950 px-3 py-2 rounded border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> 1 Processo Crítico (Mapeamento & Otimização)
                           </div>
                           <div className="bg-slate-950 px-3 py-2 rounded border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> 1 Power App Corporativo (Input Seguro)
                           </div>
                           <div className="bg-slate-950 px-3 py-2 rounded border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> 1 Dashboard de Controle (Power BI)
                           </div>
                           <div className="bg-slate-950 px-3 py-2 rounded border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> Plano de Expansão (Roadmap de Governança)
                           </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs border-t border-slate-800/50 pt-4 gap-2">
                           <span className="text-slate-400 font-medium">Modelo: <span className="text-white">Preço Fixo por Entrega (Sem custos ocultos)</span></span>
                           <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">SLA: 15 Dias Corridos (Garantidos em Contrato)</span>
                        </div>
                     </div>
                  </div>
               </Reveal>

               {/* Timeline Item 2 */}
               <Reveal delay={200}>
                  <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 opacity-80 hover:opacity-100 transition-opacity">
                     <div className="md:w-1/4">
                        <span className="text-blue-400 font-mono text-sm font-bold uppercase tracking-wider block mb-1">Mês 2-4</span>
                        <h3 className="text-xl font-bold text-white">Pulse Build</h3>
                        <span className="text-xs text-slate-500 uppercase">(A Escala)</span>
                     </div>
                     <div className="md:w-3/4">
                        <p className="text-sm text-slate-400 mb-2">Aceleração do Ciclo. Replicamos o método (Mapear &gt; Construir &gt; Auditar) para os demais departamentos (Financeiro, Comercial, Logística). É a fase de Eliminação em Massa do Shadow IT.</p>
                     </div>
                  </div>
               </Reveal>

               {/* Timeline Item 3 */}
               <Reveal delay={300}>
                  <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 opacity-40 hover:opacity-100 transition-opacity">
                     <div className="md:w-1/4">
                        <span className="text-purple-400 font-mono text-sm font-bold uppercase tracking-wider block mb-1">Mês 5+</span>
                        <h3 className="text-xl font-bold text-white">Pulse Guardian</h3>
                        <span className="text-xs text-slate-500 uppercase">(A Governança)</span>
                     </div>
                     <div className="md:w-3/4">
                        <p className="text-sm text-slate-400">Governança & Evolução. Não é apenas suporte. Inclui a Evolução dos Apps existentes, Auditoria de Dados mensal e a Calibragem dos modelos de IA (Predict). O Ciclo roda perpetuamente.</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 6. PULSE CORTEX (DATA SCIENCE) */}
      <section id="cortex" className="py-16 md:py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Reveal>
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wide">
                     <BrainCircuit size={14}/> Camada de Inteligência
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pare de olhar pelo retrovisor.</h2>
                  <p className="text-lg text-slate-400">
                     A maioria dos BIs mostra o ontem. O <strong>Pulse Cortex</strong> prevê o amanhã.
                  </p>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
               
               {/* Card 1: Risk */}
               <Reveal delay={100}>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all hover:-translate-y-1">
                     <div className="flex justify-between items-start mb-6">
                        <ShieldCheck size={28} className="text-slate-600"/>
                        <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400 font-mono">RISK_MOD_V1</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Credit Score B2B</h3>
                     <p className="text-sm text-slate-400 mb-6">"Quem vai te dar calote mês que vem?" Previsão de inadimplência.</p>
                     <div className="bg-slate-950 p-3 rounded text-[10px] font-mono text-slate-500">
                        INPUT: Payment_History<br/>OUTPUT: Risk_Probability (High)
                     </div>
                  </div>
               </Reveal>

               {/* Card 2: Churn */}
               <Reveal delay={200}>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all hover:-translate-y-1">
                     <div className="flex justify-between items-start mb-6">
                        <Radar size={28} className="text-purple-500"/>
                        <span className="text-[10px] bg-purple-500/10 px-2 py-1 rounded text-purple-400 font-mono">LIVE_TRACKING</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Churn Radar</h3>
                     <p className="text-sm text-slate-400 mb-6">"Qual cliente está prestes a cancelar?" Identifique o risco 3 meses antes.</p>
                     <div className="bg-slate-950 p-3 rounded text-[10px] font-mono text-slate-500">
                        ALERT: Client_901 usage drop (-40%)
                     </div>
                  </div>
               </Reveal>

               {/* Card 3: Demand */}
               <Reveal delay={300}>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all hover:-translate-y-1">
                     <div className="flex justify-between items-start mb-6">
                        <BarChart4 size={28} className="text-slate-600"/>
                        <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400 font-mono">STOCK_OPT</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Demand Forecast</h3>
                     <p className="text-sm text-slate-400 mb-6">"Quanto comprar para não sobrar?" Otimização de estoque via IA.</p>
                     <div className="bg-slate-950 p-3 rounded text-[10px] font-mono text-slate-500">
                        FORECAST: +15% Demand Q2 (Seasonal)
                     </div>
                  </div>
               </Reveal>
            </div>

            {/* AI DISCLAIMER */}
            <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
               <p className="text-xs text-slate-500 font-mono">
                  ⚠️ GOVERNANÇA DE IA: Todos os modelos são treinados 100% nos seus dados (privacidade total), auditáveis e retreináveis mensalmente. Não usamos IA genérica.
               </p>
            </div>
         </div>
      </section>

      {/* 7. QUEM SOMOS */}
      <section id="quem-somos" className="py-16 md:py-24 bg-[#020617] border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Office of the CDO</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Ao contratar a Pulse, você aluga uma cadeira de <strong className="text-white">Chief Data Officer</strong>.
              </p>
              <div className="mt-6 inline-block bg-slate-900/80 border border-emerald-500/30 rounded-lg px-6 py-3">
                 <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">CUSTO DE MERCADO (CDO/MÊS)</p>
                 <div className="flex items-end justify-center gap-2">
                    <span className="text-2xl font-bold text-white line-through decoration-red-500/50 decoration-2">R$ 45.000</span>
                    <span className="text-sm text-emerald-400 font-bold mb-1">vs. Fração com Pulse</span>
                 </div>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-slate-700">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=10hDQlBxrz6mwTOg7NjkwDq83kFA2hQzb&sz=w1000" alt="Felipe Belisário" initials="FB" colorClass="bg-blue-900" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Felipe Belisário</h3>
                     <p className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">Head de Estratégia</p>
                     <ul className="text-sm text-slate-400 space-y-2 mb-4 text-left">
                        <li>• Motor de crédito R$1Bi/dia (Santander)</li>
                        <li>• Reduziu 40% tempo de análise (Itaú)</li>
                        <li>• Prêmio Inovação Acadêmica (FGV)</li>
                        <li>• Especialista Power Platform & Azure</li>
                     </ul>
                     <div className="flex gap-4 justify-center sm:justify-start">
                        <Linkedin className="text-slate-600 hover:text-white cursor-pointer" size={18}/>
                        <Mail className="text-slate-600 hover:text-white cursor-pointer" size={18}/>
                     </div>
                  </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-slate-700">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=1pA1JSUXZ4se7nlJLDPGrDj4CjhzT43Nv&sz=w1000" alt="Késsia Natany" initials="KN" colorClass="bg-purple-900" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Késsia Natany</h3>
                     <p className="text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">Lead Data Scientist</p>
                     <ul className="text-sm text-slate-400 space-y-2 mb-4 text-left">
                        <li>• Gestão de portfólio R$20Bi (Bradesco)</li>
                        <li>• Lead Scientist (C6 Bank - Fraude)</li>
                        <li>• Machine Learning em Produção</li>
                        <li>• Mestrado em Estatística Aplicada</li>
                     </ul>
                     <div className="flex gap-4 justify-center sm:justify-start">
                        <Linkedin className="text-slate-600 hover:text-white cursor-pointer" size={18}/>
                        <Mail className="text-slate-600 hover:text-white cursor-pointer" size={18}/>
                     </div>
                  </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CASES */}
      <section id="cases" className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Números Auditáveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
               <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-emerald-500/30 transition-colors">
                  <div className="text-emerald-400 font-bold text-4xl mb-2">R$ 2.4M</div>
                  <div className="text-xs font-mono text-slate-500 uppercase mb-4">Recuperados em 6 meses</div>
                  <p className="text-sm text-slate-400">Varejista Multicanal.<br/>Auditoria de Margem (80 SKUs).</p>
                  <span className="text-[10px] text-emerald-600 font-bold mt-4 block">ROI: 340%</span>
               </div>
               <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-blue-500/30 transition-colors">
                  <div className="text-blue-400 font-bold text-4xl mb-2">120h</div>
                  <div className="text-xs font-mono text-slate-500 uppercase mb-4">Mensais / Eliminadas</div>
                  <p className="text-sm text-slate-400">Distribuidora.<br/>Automação Comercial/Logística.</p>
               </div>
               <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-4xl mb-2">35%</div>
                  <div className="text-xs font-mono text-slate-500 uppercase mb-4">Menos Inadimplência</div>
                  <p className="text-sm text-slate-400">Serviços Financeiros.<br/>Modelo Preditivo.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. FAQ (NOVO) */}
      <section id="faq" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Perguntas Frequentes</h2>
            <div className="space-y-3">
               {[
                  { q: "Quanto tempo leva a implementação?", a: "Sprint Tática (MVP) em 15 dias. Pulse O.S. completo em 3-5 meses, com entregas quinzenais." },
                  { q: "Preciso migrar tudo de uma vez?", a: "Não. Começamos com 1 processo crítico (test-drive). Depois escalamos. Sem big-bang, sem risco." },
                  { q: "Qual o investimento típico?", a: "Sprint Tática: R$25k. Pulse O.S. completo: R$120k-350k. Retainer (Guardian): R$15k-35k/mês." },
                  { q: "Vocês atendem fora de São Paulo?", a: "Sim. Modelo híbrido: setup presencial + implementação remota + revisões mensais presenciais." },
                  { q: "O que acontece no Diagnóstico Gratuito?", a: "45min com os sócios. Você apresenta a operação, nós mapeamos riscos e entregamos PDF executivo com 3-5 oportunidades priorizadas. Sem custo." },
                  { q: "E se minha empresa for menor que o perfil?", a: "Temos 3 caminhos: A Sprint Tática (MVP de Escopo Fechado), o Diagnóstico + Roadmap (Projeto Pontual apenas de Planejamento) ou nossa Lista de Espera." }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                     <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm">
                        <span className="pr-4">{item.q}</span>
                        {openFaq === i ? <ChevronUp size={16} className="text-emerald-500 shrink-0"/> : <ChevronDown size={16} className="text-slate-500 shrink-0"/>}
                     </button>
                     {openFaq === i && <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 mt-2">{item.a}</div>}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. OFFER / CTA */}
      <section id="oferta" className="py-32 bg-[#020617] relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#020617] to-[#020617]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <Reveal>
            <div className="bg-slate-900/50 border border-emerald-500/30 p-8 rounded-2xl mb-10 text-left">
               <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-4 text-sm flex justify-between items-center">
                  <span>O QUE VOCÊ RECEBE (SEM CUSTO):</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">VAGAS LIMITADAS</span>
               </h3>
               <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex gap-3"><Users size={18} className="text-blue-400"/> 45min com Felipe & Késsia (sócios)</li>
                  <li className="flex gap-3"><SearchIcon size={18} className="text-purple-400"/> Mapeamento de pontos cegos operacionais</li>
                  <li className="flex gap-3"><FileText size={18} className="text-emerald-400"/> PDF Executivo: "Mapa de Risco" (3-5 oportunidades)</li>
               </ul>
               <div className="flex justify-between items-center text-xs pt-4 border-t border-slate-800">
                  <span className="text-slate-500">Investimento: <span className="text-white font-bold line-through ml-1">R$ 2.000</span></span>
                  <span className="text-emerald-400 font-bold">R$ 0 (Isento)</span>
               </div>
            </div>

            <h2 className="text-3xl font-extrabold text-white mb-6">
              Sua operação passa no <br/> <span className="text-emerald-400">Teste de Estresse?</span>
            </h2>
            
            <button onClick={openWhatsApp} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] text-lg font-bold py-6 px-12 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto uppercase tracking-wide group w-full sm:w-auto">
               SOLICITAR DIAGNÓSTICO ESTRATÉGICO
               <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
             </button>
             
             <div className="mt-8 flex justify-center gap-6 text-[10px] text-slate-500 font-mono uppercase tracking-wide">
                <span className="flex items-center gap-1"><ShieldCheck size={12}/> NDA Assinado</span>
                <span className="flex items-center gap-1"><Briefcase size={12}/> Sessão com Sócios</span>
                <span className="flex items-center gap-1"><Clock size={12}/> 48h Agenda</span>
             </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER LOGOS */}
      <div className="py-12 bg-[#020617] border-t border-slate-900 flex justify-center pb-20">
         <div className="flex gap-8 md:gap-16 opacity-50">
            <BankLogo src="https://drive.google.com/thumbnail?id=1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG&sz=w1000" alt="Itaú" />
            <BankLogo src="https://drive.google.com/thumbnail?id=1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh&sz=w1000" alt="Santander" />
            <BankLogo src="https://drive.google.com/thumbnail?id=1aj_5IETgqNayEtx0fh42DHVaT-p79-Bk&sz=w1000" alt="C6 Bank" />
         </div>
      </div>
    </div>
  );
}
