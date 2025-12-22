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
  ChevronUp,
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
  FileText,
  Search,
  Layout,
  MousePointer2,
  AlertTriangle,
  Play,
  Scale // Adicionada a importação de Scale que estava faltando
} from 'lucide-react';

// --- Componentes de UI Premium ---

const SectionTitle = ({ subtitle, title, align = 'center' }) => (
  <div className={`mb-16 ${align === 'left' ? 'text-left' : 'text-center'} max-w-4xl mx-auto`}>
    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
      {title}
    </h2>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 group ${className}`}>
    {children}
  </div>
);

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
    <div className={`w-full h-full relative ${colorClass} flex items-center justify-center overflow-hidden ring-2 ring-slate-900`}>
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="text-white font-bold text-2xl font-mono">{initials}</span>
      )}
    </div>
  );
};

const BankLogo = ({ src, alt }) => (
  <div className="h-8 md:h-12 w-28 flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
    <img 
      src={src} 
      alt={alt} 
      className="max-h-full max-w-full object-contain brightness-200 hover:brightness-100"
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

// --- Formulário de Qualificação (Modal Premium) ---
const QualificationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Solicitação enviada. Nossos sócios analisarão sua elegibilidade em até 48h.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#020617]/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0B1120] border border-slate-700/50 rounded-2xl w-full max-w-2xl p-8 relative shadow-2xl my-8 ring-1 ring-white/10">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"><X size={20}/></button>
        
        <div className="mb-8 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
               <Activity size={18} className="text-emerald-500"/>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Avaliar Elegibilidade</h3>
          </div>
          <p className="text-sm text-slate-400 pl-11">Preencha para entendermos o processo e dizer com honestidade se a Sprint faz sentido.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="space-y-1">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1">Seus Dados</label>
               <input type="text" placeholder="Nome Completo" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <input type="email" placeholder="Email Corporativo" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <input type="text" placeholder="Cargo" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
            </div>
          </div>
          
          <div className="col-span-1 space-y-4">
            <div className="space-y-1">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1">Sua Empresa</label>
               <input type="text" placeholder="Nome da Empresa" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <select className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300">
                  <option value="">Nº de Colaboradores</option>
                  <option>1 - 20 (Provavelmente não elegível)</option>
                  <option>21 - 50</option>
                  <option>51 - 200</option>
                  <option>201 - 500</option>
                  <option>500+</option>
               </select>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-1">
            <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1">O Desafio</label>
            <div className="grid grid-cols-2 gap-4 mb-3">
               <select className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300">
                  <option value="">Dor Principal</option>
                  <option>Tempo excessivo / Retrabalho</option>
                  <option>Divergência de Dados</option>
                  <option>Falta de Governança/Auditoria</option>
               </select>
               <select className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300">
                  <option value="">Usa Microsoft 365?</option>
                  <option>Sim, já usamos</option>
                  <option>Não (Google/Outros)</option>
                  <option>Não sei informar</option>
               </select>
            </div>
            <textarea placeholder="Descreva o processo alvo em 1 frase (Ex: Fechamento de comissão de vendas)" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-white text-sm h-24 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600 resize-none"></textarea>
          </div>
          
          <div className="col-span-1 md:col-span-2 pt-6 border-t border-slate-800 flex flex-col items-center gap-4">
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-bold py-4 rounded-xl text-sm uppercase tracking-wide transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.98]">
              Enviar para Análise
            </button>
            <p className="text-center text-[10px] text-slate-500 max-w-sm">
              Seus dados estão protegidos sob NDA. Analisamos pessoalmente cada solicitação.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- App Principal ---

export default function PulseLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const openWhatsApp = () => window.open('https://wa.me/5511977538041', '_blank');

  return (
    <div className="font-sans text-slate-300 bg-[#020617] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden w-full relative">
      
      {/* Background Noise Texture (Subtle Grain) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0"></div>
      
      {isFormOpen && <QualificationForm onClose={() => setIsFormOpen(false)} />}

      {/* TOP BAR */}
      <div className="bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 py-3 px-6 fixed w-full z-50 top-0 flex justify-between items-center text-xs font-medium">
         <div className="flex items-center gap-2 text-white tracking-widest font-bold">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            PULSE
         </div>
         <div className="hidden md:flex gap-8 text-slate-400">
            <button onClick={() => scrollToSection('metodo')} className="hover:text-emerald-400 transition-colors">Método</button>
            <button onClick={() => scrollToSection('entregaveis')} className="hover:text-emerald-400 transition-colors">Entregáveis</button>
            <button onClick={() => scrollToSection('casos')} className="hover:text-emerald-400 transition-colors">Cases</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition-colors">FAQ</button>
         </div>
         <button onClick={() => setIsFormOpen(true)} className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-1.5 rounded-full transition-all text-[11px] uppercase tracking-wide">
            Verificar Elegibilidade
         </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 min-h-screen flex items-center z-10 overflow-hidden">
         {/* Hero Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
         
         <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <Reveal>
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 text-[11px] font-mono uppercase tracking-widest mb-8 hover:border-emerald-500/30 transition-colors cursor-default">
                     <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     Para empresas no ecossistema Microsoft 365
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                     Corte trabalho manual em <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">processos críticos.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                     Em uma Sprint, redesenhamos o processo e entregamos <span className="text-white font-medium">App + Automação + Painel</span>. Ganho de tempo medido, sem "app solto".
                  </p>
               </Reveal>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
               <Reveal delay={200}>
                  <div className="lg:col-span-2 bg-[#0B1120] border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/20 transition-all">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-all"></div>
                     
                     <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-6 border-b border-slate-800 pb-4 flex justify-between items-center">
                        <span>O que muda na prática</span>
                        <Activity size={16} className="text-emerald-500"/>
                     </h3>
                     
                     <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                           <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                              <Clock className="text-blue-400" size={20}/>
                           </div>
                           <div>
                              <strong className="text-white block mb-1">Redução de Horas</strong>
                              <p className="text-sm text-slate-400">Eliminamos o tempo perdido copiando e colando dados entre planilhas.</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-start">
                           <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                              <ShieldCheck className="text-emerald-400" size={20}/>
                           </div>
                           <div>
                              <strong className="text-white block mb-1">Fim do Erro Humano</strong>
                              <p className="text-sm text-slate-400">Validações na entrada impedem dados incorretos ou incompletos.</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-start">
                           <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                              <Database className="text-purple-400" size={20}/>
                           </div>
                           <div>
                              <strong className="text-white block mb-1">Governança Real</strong>
                              <p className="text-sm text-slate-400">Tira o processo do WhatsApp e coloca em fluxo auditável e seguro.</p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:scale-[1.02] flex-1 text-center">
                           Avaliar elegibilidade (15 min)
                        </button>
                        <button onClick={() => scrollToSection('exemplos')} className="px-8 py-4 rounded-xl font-medium text-sm text-slate-300 border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                           Ver exemplos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                     </div>
                  </div>
               </Reveal>

               <Reveal delay={400}>
                  <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between h-full relative overflow-hidden">
                      <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-6">
                            <Lock size={16} className="text-slate-500"/>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">TRUST CENTER</span>
                         </div>
                         <div className="space-y-4 text-xs font-mono text-slate-400">
                            <div className="flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-emerald-500"/>
                               <span>NDA Disponível</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-emerald-500"/>
                               <span>Acesso Mínimo Necessário</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-emerald-500"/>
                               <span>Entrega no seu Tenant</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-emerald-500"/>
                               <span>Documentação Técnica</span>
                            </div>
                         </div>
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-800">
                         <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 text-center">DNA formado em:</p>
                         <div className="grid grid-cols-2 gap-4">
                            <BankLogo src="https://drive.google.com/thumbnail?id=1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG&sz=w1000" alt="Itaú" />
                            <BankLogo src="https://drive.google.com/thumbnail?id=1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh&sz=w1000" alt="Santander" />
                         </div>
                      </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* SEÇÃO 1: DIAGNÓSTICO RÁPIDO */}
      <section className="py-24 bg-[#050b1d] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <h2 className="text-3xl font-bold text-white text-center mb-4">Você está vivendo isso?</h2>
               <p className="text-slate-400 text-center mb-16 max-w-lg mx-auto">Se você marca 3 itens, a Sprint faz sentido.</p>
               
               <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {[
                     "Processo crítico rodando em planilha solta",
                     "Aprovações via e-mail ou WhatsApp (sem rastro)",
                     "Horas gastas consolidando dados manualmente",
                     "Retrabalho frequente por erro de fórmula",
                     "Números mudam no meio da reunião",
                     "Dependência total de 'uma pessoa' dona da planilha",
                     "Ninguém sabe quem alterou o dado (sem log)",
                     "Planilhas paralelas em cada área (Shadow IT)"
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/30 transition-colors group">
                        <div className="mt-0.5 w-5 h-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-500 text-xs font-bold group-hover:bg-red-500 group-hover:text-white transition-colors">!</div>
                        <span className="text-sm text-slate-300 leading-snug">{item}</span>
                     </div>
                  ))}
               </div>

               <div className="text-center">
                  <p className="text-lg text-white font-medium mb-6">
                     Isso não é falta de BI. É <span className="text-red-400">falta de processo</span>.
                  </p>
                  <button onClick={() => setIsFormOpen(true)} className="text-emerald-400 font-bold hover:text-emerald-300 uppercase text-xs tracking-widest border-b border-emerald-500/30 pb-1 hover:border-emerald-500 transition-all">
                     QUERO RESOLVER ISSO
                  </button>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 2: EXEMPLOS */}
      <section id="exemplos" className="py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-6xl">
            <Reveal>
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                     <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Escopo</span>
                     <h2 className="text-3xl font-bold text-white mt-2">O que a Sprint resolve?</h2>
                  </div>
                  <p className="text-slate-400 max-w-sm text-sm text-right md:text-left">
                     Focamos em processos que precisam de rastreabilidade, aprovação e dados estruturados.
                  </p>
               </div>
               
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { title: "Aprovações Internas", desc: "Compras, descontos, reembolso, contratações. Fim do 'perdi o email'.", icon: <CheckCircle2 className="text-blue-400"/> },
                     { title: "Conciliação de Áreas", desc: "Financeiro vs Operação vs Comercial. Garantia de dado único e batido.", icon: <Scale className="text-emerald-400"/> },
                     { title: "Rotinas de Fechamento", desc: "Checklists mensais, validações obrigatórias, gestão de pendências.", icon: <Clock className="text-purple-400"/> },
                     { title: "Cadastros Críticos", desc: "Clientes, produtos, fornecedores. Formulários com travas e histórico.", icon: <Database className="text-orange-400"/> },
                     { title: "Fluxos de Solicitação", desc: "Chamados internos com SLA definido e rastreabilidade de quem atendeu.", icon: <MousePointer2 className="text-cyan-400"/> },
                     { title: "Processos Órfãos", desc: "Aquelas rotinas vitais que 'morrem' se o analista sair de férias.", icon: <AlertTriangle className="text-red-400"/> }
                  ].map((card, i) => (
                     <GlassCard key={i} className="h-full">
                        <div className="mb-4 bg-slate-950/50 w-fit p-3 rounded-lg border border-slate-800">{card.icon}</div>
                        <h3 className="font-bold text-white mb-2 text-lg">{card.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                     </GlassCard>
                  ))}
               </div>
               
               <p className="text-center text-xs text-slate-500 mt-12 font-mono bg-slate-900/50 w-fit mx-auto px-4 py-2 rounded-full border border-slate-800">
                  ⚡ Funciona melhor quando existe um dono do processo para validar as regras.
               </p>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 3: MÉTODO PULSE */}
      <section id="metodo" className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <Reveal>
               <SectionTitle 
                  subtitle="Metodologia Ágil" 
                  title="Uma entrega fechada. Começo e fim." 
               />
               <p className="text-slate-400 text-center max-w-2xl mx-auto -mt-8 mb-16">
                  A Sprint é um pacote de execução. Mapeamos, redesenhamos e implementamos no stack Microsoft (Power Platform) com governança.
               </p>

               <div className="grid md:grid-cols-4 gap-4 relative">
                  {/* Linha conectora (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 -z-10 transform -translate-y-1/2"></div>

                  {[
                     { step: "01", title: "Mapear", desc: "Entender o processo real e levantar baseline.", color: "text-blue-400", border: "border-blue-500/30" },
                     { step: "02", title: "Construir", desc: "App + Automações com padrão corporativo.", color: "text-indigo-400", border: "border-indigo-500/30" },
                     { step: "03", title: "Controlar", desc: "Travas, perfis, logs e rastreabilidade.", color: "text-emerald-400", border: "border-emerald-500/30" },
                     { step: "04", title: "Medir", desc: "Comparar antes/depois e documentar o delta.", color: "text-purple-400", border: "border-purple-500/30" }
                  ].map((item, i) => (
                     <div key={i} className={`bg-[#020617] p-6 rounded-2xl border ${item.border} text-center relative group hover:-translate-y-2 transition-transform duration-300`}>
                        <div className={`w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold mx-auto mb-4 ${item.color} shadow-lg relative z-10`}>
                           {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-16">
                  <p className="text-white mb-6 font-medium text-lg">Resultado: Um processo independente de planilhas e da memória das pessoas.</p>
                  <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40">
                     AVALIAR ELEGIBILIDADE
                  </button>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 4: ENTREGÁVEIS */}
      <section id="entregaveis" className="py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <SectionTitle 
                  subtitle="O Pacote Completo" 
                  title="O que você leva ao final da Sprint" 
               />
               
               <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                     {[
                        { title: "Processo Redesenhado", desc: "Clareza do fluxo, papéis, regras e pontos de controle." },
                        { title: "Power App Corporativo", desc: "Com validações e travas. Menos erro humano, mais padrão." },
                        { title: "Automações (RPA)", desc: "Elimina tarefas manuais repetitivas e reduz gargalos." },
                        { title: "Painel de Métricas", desc: "Tempo de ciclo, volume, gargalos e aderência ao processo." },
                        { title: "Trilha de Auditoria", desc: "Quem fez o quê, quando, e com quais dados." },
                        { title: "Treinamento Rápido", desc: "Documentação mínima para o time operar com previsibilidade." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1 bg-blue-500/10 p-1.5 rounded-lg h-fit border border-blue-500/20"><CheckCircle2 size={16} className="text-blue-400"/></div>
                           <div>
                              <strong className="text-white block mb-1 text-sm font-bold">{item.title}</strong>
                              <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 5: O QUE NÃO É (FILTRO) */}
      <section className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-10">O que a Sprint <span className="text-red-500 border-b border-red-500/30">NÃO</span> é</h2>
               <div className="space-y-4 text-left inline-block bg-slate-900 p-8 rounded-2xl border border-slate-800">
                  <p className="flex items-center gap-4 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “fábrica de app barato” sem dono e sem padrão</p>
                  <p className="flex items-center gap-4 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “vamos automatizar a empresa inteira” (foco único)</p>
                  <p className="flex items-center gap-4 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é BI para maquiar processo quebrado</p>
                  <p className="flex items-center gap-4 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “milagre” sem dono do processo e sem validação</p>
               </div>
               <p className="mt-10 text-white font-medium">Se você quer algo rápido, consistente e auditável — aí sim faz sentido.</p>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 6: COMO MEDIMOS (ROI) */}
      <section className="py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <SectionTitle 
                  subtitle="ROI Matemático" 
                  title="Sem achismo. Nós medimos." 
               />
               <p className="text-slate-400 text-center -mt-10 mb-12">Baseline → Entrega → Delta. O que não é medido vira opinião.</p>

               <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 relative">
                     <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">01</div>
                     <div className="text-blue-500 font-bold mb-3 tracking-wide text-sm uppercase">BASELINE</div>
                     <p className="text-xs text-slate-400 leading-relaxed">Medimos o "antes": tempo médio, horas gastas, retrabalho e gargalos.</p>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 relative">
                     <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">02</div>
                     <div className="text-white font-bold mb-3 tracking-wide text-sm uppercase">IMPLEMENTAÇÃO</div>
                     <p className="text-xs text-slate-400 leading-relaxed">Construímos para reduzir entradas manuais e dependência de pessoas.</p>
                  </div>
                  <div className="p-8 bg-emerald-900/10 rounded-2xl border border-emerald-500/20 relative shadow-lg shadow-emerald-900/10">
                     <div className="absolute top-4 right-4 text-emerald-900 font-mono text-xs">03</div>
                     <div className="text-emerald-500 font-bold mb-3 tracking-wide text-sm uppercase">DELTA (ROI)</div>
                     <p className="text-xs text-slate-300 leading-relaxed">Documentamos: horas economizadas, redução de erro e melhoria de SLA.</p>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 7: CASOS */}
      <section id="casos" className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <SectionTitle 
               subtitle="Prova Real" 
               title="Resultados Auditáveis" 
            />
            
            <div className="grid md:grid-cols-2 gap-8">
               <Reveal delay={100}>
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1">Varejo Multicanal</h3>
                           <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">80 SKUs | Auditoria de Margem</p>
                        </div>
                        <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-1 rounded border border-emerald-500/20">ROI 340%</div>
                     </div>
                     
                     <div className="space-y-3 mb-6 border-l-2 border-slate-800 pl-4">
                        <div className="text-sm text-slate-300"><span className="text-slate-500 text-xs uppercase mr-2">Problema:</span> 8% de perda oculta em 3 categorias.</div>
                        <div className="text-sm text-slate-300"><span className="text-slate-500 text-xs uppercase mr-2">Entrega:</span> App de precificação + Validação de estoque.</div>
                        <div className="text-sm text-white font-medium"><span className="text-slate-500 text-xs uppercase mr-2">Resultado:</span> R$ 2.4 Milhões recuperados em 6 meses.</div>
                     </div>
                     
                     <div className="pt-4 border-t border-slate-800 text-[10px] text-emerald-500 font-mono flex items-center gap-2">
                        <LineChart size={12}/> Medição: Comparativo ERP vs Auditoria Pulse
                     </div>
                  </div>
               </Reveal>

               <Reveal delay={200}>
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1">Distribuidora Regional</h3>
                           <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Logística | Automação</p>
                        </div>
                        <div className="bg-blue-500/10 text-blue-400 text-xs font-bold px-2 py-1 rounded border border-blue-500/20">-120h/mês</div>
                     </div>
                     
                     <div className="space-y-3 mb-6 border-l-2 border-slate-800 pl-4">
                        <div className="text-sm text-slate-300"><span className="text-slate-500 text-xs uppercase mr-2">Problema:</span> Processo manual entre Comercial e Logística.</div>
                        <div className="text-sm text-slate-300"><span className="text-slate-500 text-xs uppercase mr-2">Entrega:</span> Power App de Pedidos + Bot de Aprovação.</div>
                        <div className="text-sm text-white font-medium"><span className="text-slate-500 text-xs uppercase mr-2">Resultado:</span> 120 horas operacionais/mês eliminadas.</div>
                     </div>
                     
                     <div className="pt-4 border-t border-slate-800 text-[10px] text-blue-400 font-mono flex items-center gap-2">
                        <Clock size={12}/> Medição: Baseline de horas x Volume processado
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* SEÇÃO 8: QUEM ASSINA */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal>
             <SectionTitle 
                subtitle="Sócios Executores" 
                title="Quem assina a entrega" 
             />
             <p className="text-slate-400 max-w-2xl mx-auto text-center -mt-12 mb-16">
               Você não está comprando "um projeto". Você está comprando responsabilidade com método e padrão — liderado pelos sócios.
             </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:bg-slate-900 transition-colors">
                  <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=10hDQlBxrz6mwTOg7NjkwDq83kFA2hQzb&sz=w1000" alt="Felipe Belisário" initials="FB" colorClass="bg-blue-900" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Felipe Belisário</h3>
                     <p className="text-blue-500 text-[10px] font-mono uppercase tracking-wider mb-3">Sócio | Operações & Valor</p>
                     <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        Lidera o diagnóstico, define o baseline e garante que a solução vire rotina operacional.
                     </p>
                     <ul className="text-xs text-slate-500 space-y-1 mb-4 text-left font-mono">
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Motor de crédito R$1Bi/dia (Santander)</li>
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Reduziu 40% tempo análise (Itaú)</li>
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Inovação Acadêmica (FGV)</li>
                     </ul>
                  </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:bg-slate-900 transition-colors">
                  <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=1pA1JSUXZ4se7nlJLDPGrDj4CjhzT43Nv&sz=w1000" alt="Késsia Natany" initials="KN" colorClass="bg-purple-900" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Késsia Natany</h3>
                     <p className="text-purple-500 text-[10px] font-mono uppercase tracking-wider mb-3">Sócia | Governança & Qualidade</p>
                     <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        Garante o padrão, controle e qualidade para a solução sobreviver à auditoria e TI.
                     </p>
                     <ul className="text-xs text-slate-500 space-y-1 mb-4 text-left font-mono">
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Portfólio R$20Bi (Bradesco)</li>
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Lead Scientist (C6 Bank)</li>
                        <li className="flex gap-2"><CheckCircle2 size={12} className="text-slate-600"/> Mestrado em Estatística</li>
                     </ul>
                  </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 text-center">
             <span className="inline-block bg-slate-900 border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                Qualidade Garantida: Escopo Fechado • Validação com Dono • Travas de Segurança
             </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: SEGURANÇA */}
      <section id="seguranca" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
             <ShieldCheck size={40} className="text-slate-700 mx-auto mb-6"/>
             <h2 className="text-xl font-bold text-white mb-4">Segurança desde o primeiro dia</h2>
             <p className="text-slate-400 mb-10 max-w-2xl mx-auto">A Sprint já nasce com governança mínima para evitar Shadow IT. A ideia é acelerar com controle, não criar risco novo.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {["Acesso por Perfil (RLS)", "Rastreabilidade Total", "Dados Centralizados", "Permissões Controladas"].map((item,i) => (
                    <div key={i} className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
                       <Lock size={12} className="text-emerald-500"/> {item}
                    </div>
                 ))}
             </div>
         </div>
      </section>

      {/* SEÇÃO 10: PRÓXIMOS PASSOS (ESCALA) */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Futuro</p>
            <h3 className="text-2xl font-bold text-white mb-8">Se você quiser escalar depois...</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="border-l-2 border-blue-500 pl-6 py-2">
                  <strong className="text-white block mb-2 text-lg">CoE + Governança</strong>
                  <p className="text-sm text-slate-400">Organizar portfólio, políticas e telemetria para liberar adoção com segurança.</p>
               </div>
               <div className="border-l-2 border-purple-500 pl-6 py-2">
                  <strong className="text-white block mb-2 text-lg">Guardian (Retainer)</strong>
                  <p className="text-sm text-slate-400">Manter, auditar e evoluir continuamente sem voltar para planilhas.</p>
               </div>
            </div>
         </div>
      </section>

      {/* SEÇÃO 11: FAQ */}
      <section id="faq" className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <SectionTitle title="Dúvidas Frequentes" subtitle="Transparência Total" />
            <div className="space-y-4">
               {[
                  { q: "Isso vai dar trabalho para meu time?", a: "Não precisa virar um projeto interno. O que pedimos é: dono do processo disponível para validações rápidas. O objetivo é tirar trabalho — não criar." },
                  { q: "Precisa mexer no meu ERP?", a: "Nem sempre. Muitas Sprints começam organizando o processo e criando controle nas bordas. Integrações entram quando fazem sentido e com governança." },
                  { q: "A TI vai bloquear?", a: "A Sprint já nasce com governança mínima e segurança (perfis, permissões). Se a TI precisa participar, a conversa é objetiva e com padrão." },
                  { q: "Isso vira “mais uma ferramenta”?", a: "Não. O alvo é substituir a planilha e o fluxo informal. A solução nasce com dono, travas e medição — para virar rotina." },
                  { q: "E depois que entra em produção?", a: "Você pode operar com a documentação mínima e, se quiser continuidade, existe o Guardian (governança ativa + auditoria)." },
                  { q: "Que tipo de processo funciona melhor?", a: "Processos com repetição, muitas mãos, regras claras e dor de tempo. Se for algo muito caótico sem dono, primeiro organizamos a governança." },
                  { q: "Como vocês lidam com dados sensíveis?", a: "Acesso mínimo necessário, permissões por perfil, rastreabilidade e NDA quando apropriado." }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-colors">
                     <button onClick={() => toggleAccordion(i)} className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-300 hover:text-white transition-colors text-sm">
                        <span className="pr-8">{item.q}</span>
                        {activeAccordion === i ? <ChevronUp size={18} className="text-emerald-500 shrink-0"/> : <ChevronDown size={18} className="text-slate-500 shrink-0 group-hover:text-slate-300"/>}
                     </button>
                     {activeAccordion === i && <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 mt-2">{item.a}</div>}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEÇÃO 12: FORMULÁRIO (CTA FINAL) */}
      <section className="py-32 bg-[#020617] border-t border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#020617] to-[#020617]"></div>
         <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
            <Reveal>
               <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Pare de gerir por planilha e feeling.</h2>
               <p className="text-lg text-slate-400 mb-12">Coloque um processo crítico para rodar com controle, rastreabilidade e ganho medido.</p>
               
               <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] text-lg font-bold py-6 px-12 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto uppercase tracking-wide group w-full sm:w-auto">
                  AVALIAR ELEGIBILIDADE (15 MIN)
                  <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               
               <p className="mt-8 text-xs text-slate-600">
                  Se não fizer sentido, a gente te diz e aponta o caminho — sem enrolação.
               </p>
            </Reveal>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-slate-900 py-16 flex justify-center pb-24">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-6">
            <div className="flex items-center gap-2">
               <Activity size={16} className="text-slate-700"/>
               <span className="font-bold tracking-widest text-slate-500">PULSE CONSULTORIA © 2025</span>
            </div>
            <div className="flex gap-8">
               <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
               <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
               <span className="hover:text-white cursor-pointer transition-colors">Termos</span>
            </div>
         </div>
      </footer>
    </div>
  );
}