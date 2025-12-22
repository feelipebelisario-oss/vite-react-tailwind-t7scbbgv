import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database, 
  TrendingUp, 
  Users, 
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
  Scale,
  MapPin, // Adicionado
  Phone   // Adicionado
} from 'lucide-react';

// --- Componentes de UI Premium ---

// Título de Seção com Badge
const SectionTitle = ({ subtitle, title, align = 'center', color = 'emerald' }) => {
  const colorClasses = {
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-emerald-500/10',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-blue-500/10',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400 shadow-purple-500/10',
  };

  return (
    <div className={`mb-12 md:mb-16 ${align === 'left' ? 'text-left' : 'text-center'} max-w-4xl mx-auto px-4`}>
      <span className={`inline-block py-1.5 px-4 rounded-full border text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-lg ${colorClasses[color]}`}>
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
    </div>
  );
};

// Card com efeito Glassmorphism (Vidro)
const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <div className={`bg-[#0B1120]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 
    ${hoverEffect ? 'hover:border-white/10 hover:bg-[#0B1120]/80 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1' : ''} 
    transition-all duration-500 group h-full ${className}`}>
    {children}
  </div>
);

// Animação de Reveal ao rolar
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

// Avatar com anel de status
const SafeAvatar = ({ src, alt, initials, colorClass }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={`w-full h-full relative ${colorClass} flex items-center justify-center overflow-hidden ring-4 ring-[#0B1120] rounded-full shadow-xl`}>
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="text-white font-bold text-2xl font-mono">{initials}</span>
      )}
    </div>
  );
};

// Logo Bancário
const BankLogo = ({ src, alt }) => (
  <div className="h-8 md:h-12 w-28 flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 filter">
    <img 
      src={src} 
      alt={alt} 
      className="max-h-full max-w-full object-contain brightness-200 hover:brightness-100"
      referrerPolicy="no-referrer"
    />
  </div>
);

// --- Formulário de Qualificação (Modal Premium) ---
const QualificationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '', email: '', empresa: '', colaboradores: '', cargo: '', dor: '', descricao: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp com quebras de linha e negrito
    const message = `*Nova Solicitação de Elegibilidade - Pulse O.S.*%0A%0A` +
      `👤 *Nome:* ${formData.nome}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `🏢 *Empresa:* ${formData.empresa}%0A` +
      `💼 *Cargo:* ${formData.cargo}%0A` +
      `👥 *Tamanho:* ${formData.colaboradores}%0A` +
      `⚠️ *Dor Principal:* ${formData.dor}%0A` +
      `📝 *Contexto:* ${formData.descricao}`;

    window.open(`https://wa.me/5511977538041?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#020617]/90 z-[100] flex items-center justify-center p-4 backdrop-blur-lg overflow-y-auto">
      <div className="bg-[#0B1120] border border-white/10 rounded-2xl w-full max-w-2xl p-8 relative shadow-2xl shadow-black/50 my-8 ring-1 ring-white/5 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><X size={20}/></button>
        
        <div className="mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
               <Activity size={20} className="text-emerald-500"/>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Avaliar Elegibilidade</h3>
              <p className="text-xs text-emerald-400 font-mono uppercase tracking-wide">Acesso Direto aos Sócios</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Preencha os dados abaixo. Analisaremos seu perfil técnico e operacional para confirmar se o Pulse O.S. é a solução correta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="space-y-1.5">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1 font-bold">Seus Dados</label>
               <input name="nome" onChange={handleChange} type="text" placeholder="Nome Completo" className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <input name="email" onChange={handleChange} type="email" placeholder="Email Corporativo" className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <input name="cargo" onChange={handleChange} type="text" placeholder="Cargo" className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
            </div>
          </div>
          
          <div className="col-span-1 space-y-4">
            <div className="space-y-1.5">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1 font-bold">Sua Empresa</label>
               <input name="empresa" onChange={handleChange} type="text" placeholder="Nome da Empresa" className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600" required />
               <div className="relative">
                 <select name="colaboradores" onChange={handleChange} className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300 appearance-none cursor-pointer" required>
                    <option value="" disabled selected>Tamanho da Equipe</option>
                    <option value="1-20">1 - 20 (Avaliação especial)</option>
                    <option value="21-50">21 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16}/>
               </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-1.5">
            <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1 font-bold">Diagnóstico Inicial</label>
            <div className="grid grid-cols-2 gap-4 mb-3">
               <div className="relative">
                 <select name="dor" onChange={handleChange} className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300 appearance-none cursor-pointer" required>
                    <option value="" disabled selected>Dor Principal</option>
                    <option value="Tempo/Retrabalho">Tempo excessivo / Retrabalho</option>
                    <option value="Divergencia">Divergência de Dados</option>
                    <option value="Governanca">Falta de Governança</option>
                    <option value="Outro">Outro</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16}/>
               </div>
               <div className="relative">
                 <select name="tech" onChange={handleChange} className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all text-slate-300 appearance-none cursor-pointer">
                    <option value="" disabled selected>Usa Microsoft 365?</option>
                    <option value="Sim">Sim, já usamos</option>
                    <option value="Não">Não (Google/Outros)</option>
                    <option value="NaoSei">Não sei informar</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 text-slate-500 pointer-events-none" size={16}/>
               </div>
            </div>
            <textarea name="descricao" onChange={handleChange} placeholder="Descreva brevemente o processo que você quer automatizar (Ex: 'O fechamento de comissão demora 3 dias e é feito no Excel')" className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-white text-sm h-24 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-600 resize-none"></textarea>
          </div>
          
          <div className="col-span-1 md:col-span-2 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-bold py-4 rounded-xl text-sm uppercase tracking-wide transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-[0.98] flex items-center justify-center gap-2 group">
              Enviar e Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <p className="text-center text-[10px] text-slate-500 max-w-sm flex items-center gap-1.5">
              <Lock size={10} /> Seus dados estão protegidos sob NDA.
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
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [vagas, setVagas] = useState(3);

  useEffect(() => {
    setVagas(Math.floor(Math.random() * (4 - 2 + 1)) + 2); 
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      {/* Background Texture (Noise + Gradients) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none z-0"></div>
      
      {isFormOpen && <QualificationForm onClose={() => setIsFormOpen(false)} />}

      {/* TOP BAR */}
      <div className="bg-[#020617] border-b border-slate-800 py-2.5 px-6 fixed w-full z-50 top-0 flex justify-between items-center text-xs font-medium tracking-wide shadow-md">
         <div className="flex items-center gap-2.5 text-white font-bold tracking-widest cursor-default group">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
            PULSE
         </div>
         <div className="hidden md:flex gap-8 text-slate-400">
            {['Método', 'Entregáveis', 'Resultados', 'FAQ'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} className="hover:text-emerald-400 transition-colors uppercase text-[10px] tracking-widest font-semibold">
                {item}
              </button>
            ))}
         </div>
         <button onClick={() => setIsFormOpen(true)} className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-1.5 rounded-full transition-all text-[10px] uppercase tracking-widest hover:border-emerald-500/30 hover:text-emerald-400">
            Avaliar elegibilidade
         </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-[100] p-6 flex flex-col gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
              <span className="text-xl font-bold text-white tracking-widest flex items-center gap-2">
                <Activity className="text-emerald-500"/> MENU
              </span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white p-2 bg-white/5 rounded-full"><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-3">
              {['Diagnóstico', 'Método', 'Entregáveis', 'Resultados', 'FAQ'].map((item) => (
                 <button key={item} onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} className="text-left text-xl font-light text-slate-300 hover:text-emerald-400 py-4 border-b border-white/5 flex justify-between items-center active:bg-slate-900 transition-colors">
                    {item} <ArrowRight size={16} className="text-slate-600"/>
                 </button>
              ))}
          </nav>
          <button onClick={() => { setIsFormOpen(true); setIsMenuOpen(false); }} className="mt-auto w-full bg-emerald-500 text-[#020617] py-5 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
            Avaliar Elegibilidade <ArrowRight size={18}/>
          </button>
      </div>

      {/* NAVBAR MOBILE BUTTON */}
      <div className={`fixed top-[60px] right-4 z-40 md:hidden transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
         <button onClick={() => setIsMenuOpen(true)} className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2.5 rounded-xl text-white shadow-xl active:scale-95 transition-transform">
            <Menu size={24} />
         </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6 min-h-screen flex items-center z-10 overflow-hidden">
         {/* Glow Effect */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-50"></div>
         
         <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <Reveal>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-300 text-[11px] font-mono uppercase tracking-widest mb-10 shadow-lg cursor-default hover:border-emerald-500/30 transition-colors">
                     <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     Para empresas em expansão no Microsoft 365
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-10 tracking-tight">
                     Corte <span className="text-white relative px-2">
                        trabalho manual
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-red-500/20 -rotate-1 -z-10 blur-sm"></span>
                     </span> e retrabalho em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">processo crítico</span>.
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                     Em uma <strong className="text-white font-medium">Sprint Tática</strong>, redesenhamos o processo e entregamos <strong>App + Automação + Painel</strong>. Medimos baseline → entrega → delta, sem "app solto".
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                     <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] w-full sm:w-auto uppercase tracking-wide flex items-center justify-center gap-3 group">
                        Avaliar elegibilidade <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded text-white/80">15 min</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                     </button>
                     <button onClick={() => scrollToSection('exemplos')} className="text-slate-400 hover:text-white font-medium px-8 py-5 flex items-center gap-2 transition-colors border border-transparent hover:border-slate-800 hover:bg-slate-800/50 rounded-xl w-full sm:w-auto justify-center">
                        Ver escopo e exemplos
                     </button>
                  </div>
               </Reveal>
            </div>

            {/* TRUST CENTER (BENEFÍCIOS) */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20 border-t border-slate-800/50 pt-12">
               <GlassCard className="flex items-center gap-4 !p-5 border-transparent bg-slate-900/20 hover:bg-slate-900/40">
                  <div className="p-3 bg-blue-500/10 rounded-xl shrink-0 border border-blue-500/20"><Clock size={22} className="text-blue-400"/></div>
                  <div className="text-left">
                     <p className="text-white font-bold text-sm mb-0.5">Cortamos tempo perdido</p>
                     <p className="text-xs text-slate-400">Em planilhas, consolidação e retrabalho.</p>
                  </div>
               </GlassCard>
               <GlassCard className="flex items-center gap-4 !p-5 border-transparent bg-slate-900/20 hover:bg-slate-900/40">
                  <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0 border border-emerald-500/20"><ShieldCheck size={22} className="text-emerald-400"/></div>
                  <div className="text-left">
                     <p className="text-white font-bold text-sm mb-0.5">Menos erro humano</p>
                     <p className="text-xs text-slate-400">Via validações automáticas e travas.</p>
                  </div>
               </GlassCard>
               <GlassCard className="flex items-center gap-4 !p-5 border-transparent bg-slate-900/20 hover:bg-slate-900/40">
                  <div className="p-3 bg-purple-500/10 rounded-xl shrink-0 border border-purple-500/20"><Database size={22} className="text-purple-400"/></div>
                  <div className="text-left">
                     <p className="text-white font-bold text-sm mb-0.5">Rastreabilidade total</p>
                     <p className="text-xs text-slate-400">Quem fez, quando e por quê. Logs auditáveis.</p>
                  </div>
               </GlassCard>
            </div>

            {/* LOGOS / CREDENCIAIS */}
            <div className="mt-20 text-center">
               <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono mb-8">
                  Liderança com background em instituições como:
               </p>
               <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
                   <BankLogo src="https://drive.google.com/thumbnail?id=1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG&sz=w1000" alt="Itaú" />
                   <BankLogo src="https://drive.google.com/thumbnail?id=1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh&sz=w1000" alt="Santander" />
                   <BankLogo src="https://drive.google.com/thumbnail?id=1CfUiS1YSi9d0lps8HDgHiN1IWpZShphW&sz=w1000" alt="Bradesco" />
                   <BankLogo src="https://drive.google.com/thumbnail?id=1aj_5IETgqNayEtx0fh42DHVaT-p79-Bk&sz=w1000" alt="C6 Bank" />
               </div>
            </div>
         </div>
      </section>

      {/* SEÇÃO 1: DIAGNÓSTICO */}
      <section id="diagnostico" className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <Reveal>
               <SectionTitle 
                  subtitle="Diagnóstico Rápido" 
                  title="Você está vivendo isso?" 
               />
               <p className="text-slate-400 text-center -mt-10 mb-16">Se você marca 3 itens, a Sprint faz sentido.</p>
               
               <div className="grid md:grid-cols-2 gap-5 mb-12">
                  {[
                     "Processo crítico rodando em planilha solta",
                     "Aprovações via e-mail ou WhatsApp (sem rastro)",
                     "Horas gastas consolidando dados manualmente",
                     "Retrabalho frequente por erro de digitação/fórmula",
                     "O número muda no meio da reunião",
                     "Dependência total de 'uma pessoa' dona da planilha",
                     "Ninguém sabe quem alterou o dado (sem log)",
                     "Planilhas paralelas em cada área (Shadow IT)"
                  ].map((item, i) => (
                     <GlassCard key={i} className="flex items-start gap-4 !p-5 hover:border-red-500/30 group">
                        <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-red-500 shrink-0 bg-red-500/10 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-colors text-xs font-bold">!</div>
                        <span className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{item}</span>
                     </GlassCard>
                  ))}
               </div>

               <div className="text-center bg-gradient-to-b from-slate-900 to-[#0B1120] border border-slate-800 p-10 rounded-2xl max-w-3xl mx-auto shadow-2xl">
                  <p className="text-xl text-white font-medium mb-8">
                     Isso não é falta de BI. É <span className="text-red-400 font-bold">processo sem dono</span>, sem travas e sem trilha.
                  </p>
                  <button onClick={() => setIsFormOpen(true)} className="text-emerald-400 font-bold hover:text-emerald-300 uppercase text-xs tracking-[0.2em] border-b border-emerald-500/30 pb-1 hover:border-emerald-500 transition-all">
                     QUERO RESOLVER ISSO AGORA
                  </button>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 2: EXEMPLOS (ESCOPO) */}
      <section id="exemplos" className="py-24 bg-[#020617] border-t border-slate-800 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] -z-10"></div>
         <div className="container mx-auto px-6 max-w-6xl">
            <Reveal>
               <SectionTitle 
                  subtitle="Escopo da Sprint" 
                  title="Processos que resolvemos rápido" 
               />
               
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { title: "Aprovações Internas", desc: "Compras, descontos, exceções, contratos. Fim do e-mail perdido.", icon: <CheckCircle2 className="text-blue-400"/> },
                     { title: "Conciliação de Áreas", desc: "Financeiro vs Operação vs Comercial. Garantia de dado único.", icon: <Scale className="text-emerald-400"/> },
                     { title: "Rotinas de Fechamento", desc: "Checklists mensais, validações obrigatórias, gestão de pendências.", icon: <Clock className="text-purple-400"/> },
                     { title: "Cadastros Críticos", desc: "Clientes, produtos, fornecedores. Com controle e histórico.", icon: <Database className="text-orange-400"/> },
                     { title: "Fluxos de Solicitação", desc: "Chamados internos com SLA definido e rastreabilidade de quem atendeu.", icon: <MousePointer2 className="text-cyan-400"/> },
                     { title: "Processos Órfãos", desc: "Aquelas rotinas vitais que 'morrem' se o analista sair de férias.", icon: <AlertTriangle className="text-red-400"/> }
                  ].map((card, i) => (
                     <GlassCard key={i} className="h-full flex flex-col hover:-translate-y-2">
                        <div className="mb-6 bg-slate-950 w-fit p-3 rounded-xl border border-slate-800 shadow-inner">{card.icon}</div>
                        <h3 className="font-bold text-white mb-3 text-lg">{card.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                     </GlassCard>
                  ))}
               </div>
               
               <div className="text-center mt-12">
                   <span className="inline-flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 py-2 px-5 rounded-full border border-slate-800">
                      <Zap size={12} className="text-yellow-500"/> Funciona melhor quando existe um dono do processo.
                   </span>
               </div>
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
               <p className="text-slate-400 text-center max-w-2xl mx-auto -mt-10 mb-20 text-lg font-light">
                  A Sprint é um pacote de execução focado em um processo crítico. Mapeamos, redesenhamos e implementamos no stack Microsoft com governança.
               </p>

               <div className="grid md:grid-cols-4 gap-6 relative">
                  {/* Linha conectora (Desktop) */}
                  <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 -z-10"></div>

                  {[
                     { step: "01", title: "Mapear", desc: "Entender o processo real e levantar baseline (AS-IS).", color: "text-blue-400", border: "border-blue-500/30" },
                     { step: "02", title: "Construir", desc: "App + Automações com padrão corporativo.", color: "text-indigo-400", border: "border-indigo-500/30" },
                     { step: "03", title: "Controlar", desc: "Travas, perfis, logs e rastreabilidade.", color: "text-emerald-400", border: "border-emerald-500/30" },
                     { step: "04", title: "Medir", desc: "Comparar antes/depois e documentar o delta.", color: "text-purple-400", border: "border-purple-500/30" }
                  ].map((item, i) => (
                     <div key={i} className={`bg-[#050b1d] p-8 rounded-2xl border ${item.border} text-center relative group hover:-translate-y-2 transition-transform duration-300 shadow-xl`}>
                        <div className={`w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold mx-auto mb-6 ${item.color} shadow-lg relative z-10 ring-4 ring-[#0B1120]`}>
                           {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-20">
                  <p className="text-white mb-8 font-medium text-lg">Resultado: Um processo independente de planilhas e da memória das pessoas.</p>
                  <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-12 py-5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 uppercase tracking-widest text-xs">
                     Avaliar elegibilidade
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
               
               <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                     {[
                        { title: "Processo Redesenhado", desc: "Clareza do fluxo, papéis, regras e pontos de controle." },
                        { title: "Power App Corporativo", desc: "Input seguro, validações e travas. Menos erro humano." },
                        { title: "Automações (Power Automate)", desc: "Elimina tarefas manuais repetitivas e reduz gargalos." },
                        { title: "Painel de Métricas", desc: "Tempo de ciclo, volume, gargalos e aderência." },
                        { title: "Trilha de Auditoria", desc: "Quem fez o quê, quando, e com quais dados." },
                        { title: "Treinamento Rápido", desc: "Documentação mínima para o time operar com previsibilidade." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                           <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"><CheckCircle2 size={18} className="text-blue-400"/></div>
                           <div>
                              <strong className="text-white block mb-1 text-sm font-bold group-hover:text-blue-300 transition-colors">{item.title}</strong>
                              <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 6: COMO MEDIMOS (ROI) */}
      <section className="py-24 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <SectionTitle 
                  subtitle="ROI Matemático" 
                  title="Sem achismo. Nós medimos." 
               />
               <p className="text-slate-400 text-center -mt-10 mb-16 text-lg">Baseline → Entrega → Delta. O que não é medido vira opinião.</p>

               <div className="grid md:grid-cols-3 gap-6 text-center">
                  <GlassCard className="!p-8 bg-slate-900 border-slate-800 relative hover:border-blue-500/30">
                     <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">01</div>
                     <div className="text-blue-500 font-bold mb-4 tracking-wide text-sm uppercase">BASELINE (Antes)</div>
                     <p className="text-xs text-slate-400 leading-relaxed">Medimos o cenário atual: tempo médio, horas gastas, retrabalho e gargalos.</p>
                  </GlassCard>
                  <GlassCard className="!p-8 bg-slate-900 border-slate-800 relative hover:border-white/30">
                     <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">02</div>
                     <div className="text-white font-bold mb-4 tracking-wide text-sm uppercase">IMPLEMENTAÇÃO</div>
                     <p className="text-xs text-slate-400 leading-relaxed">Construímos a solução para reduzir entradas manuais e dependência de pessoas.</p>
                  </GlassCard>
                  <GlassCard className="!p-8 bg-emerald-900/10 border-emerald-500/20 relative shadow-lg shadow-emerald-900/10 hover:border-emerald-500/40">
                     <div className="absolute top-4 right-4 text-emerald-900 font-mono text-xs">03</div>
                     <div className="text-emerald-500 font-bold mb-4 tracking-wide text-sm uppercase">DELTA (ROI)</div>
                     <p className="text-xs text-slate-300 leading-relaxed">Documentamos: horas economizadas, redução de erro e melhoria de SLA.</p>
                  </GlassCard>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 7: CASOS */}
      <section id="cases" className="py-24 bg-[#020617] border-t border-slate-800 relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -z-10"></div>
         <div className="container mx-auto px-6 max-w-5xl">
            <SectionTitle 
               subtitle="Prova Real" 
               title="Resultados Auditáveis" 
            />
            
            <div className="grid md:grid-cols-2 gap-8">
               <Reveal delay={100}>
                  <GlassCard className="bg-slate-900 hover:bg-slate-800 flex flex-col justify-between h-full !p-8">
                     <div>
                        <div className="flex justify-between items-start mb-8">
                           <div>
                              <h3 className="text-xl font-bold text-white mb-1">Varejo Multicanal</h3>
                              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">80 SKUs | Auditoria de Margem</p>
                           </div>
                           <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded border border-emerald-500/20 shadow-sm">ROI 340%</div>
                        </div>
                        
                        <div className="space-y-4 mb-8 border-l-2 border-slate-800 pl-5 text-sm">
                           <div className="text-slate-400"><strong className="text-white font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Problema</strong> 8% de perda oculta em 3 categorias.</div>
                           <div className="text-slate-400"><strong className="text-white font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Entrega</strong> App de precificação + Validação de estoque.</div>
                           <div className="text-emerald-400 bg-emerald-500/5 p-2 rounded"><strong className="text-emerald-500 font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Resultado</strong> R$ 2.4 Milhões recuperados em 6 meses.</div>
                        </div>
                     </div>
                     
                     <div className="pt-5 border-t border-slate-800 text-[10px] text-slate-500 font-mono flex items-center gap-2">
                        <LineChart size={12} className="text-emerald-500"/> Medição: Comparativo ERP vs Auditoria Pulse
                     </div>
                  </GlassCard>
               </Reveal>

               <Reveal delay={200}>
                  <GlassCard className="bg-slate-900 hover:bg-slate-800 flex flex-col justify-between h-full !p-8">
                     <div>
                        <div className="flex justify-between items-start mb-8">
                           <div>
                              <h3 className="text-xl font-bold text-white mb-1">Distribuidora Regional</h3>
                              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Logística | Automação</p>
                           </div>
                           <div className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1.5 rounded border border-blue-500/20 shadow-sm">-120h/mês</div>
                        </div>
                        
                        <div className="space-y-4 mb-8 border-l-2 border-slate-800 pl-5 text-sm">
                           <div className="text-slate-400"><strong className="text-white font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Problema</strong> Processo manual entre Comercial e Logística.</div>
                           <div className="text-slate-400"><strong className="text-white font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Entrega</strong> Power App de Pedidos + Bot de Aprovação.</div>
                           <div className="text-blue-400 bg-blue-500/5 p-2 rounded"><strong className="text-blue-500 font-semibold uppercase text-[10px] tracking-wide mr-2 block mb-1">Resultado</strong> 120 horas operacionais/mês eliminadas.</div>
                        </div>
                     </div>
                     
                     <div className="pt-5 border-t border-slate-800 text-[10px] text-slate-500 font-mono flex items-center gap-2">
                        <Clock size={12} className="text-blue-400"/> Medição: Baseline de horas x Volume processado
                     </div>
                  </GlassCard>
               </Reveal>
            </div>
         </div>
      </section>

      {/* SEÇÃO 8: QUEM ASSINA */}
      <section className="py-24 bg-[#0B1120] border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal>
             <SectionTitle 
                subtitle="Qualidade Garantida" 
                title="Quem lidera a entrega" 
             />
             <p className="text-slate-400 max-w-2xl mx-auto text-center -mt-12 mb-20 text-lg font-light">
               Você não está comprando "um projeto". Você está comprando responsabilidade com método e padrão — liderado pelos sócios.
             </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <Reveal delay={100}>
              <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left hover:bg-slate-900 transition-colors group">
                  <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl group-hover:border-blue-900/50 transition-colors">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=10hDQlBxrz6mwTOg7NjkwDq83kFA2hQzb&sz=w1000" alt="Felipe Belisário" initials="FB" colorClass="bg-blue-900" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-1">Felipe Belisário</h3>
                     <p className="text-blue-500 text-[10px] font-mono uppercase tracking-wider mb-4 font-bold">Sócio | Operações & Valor</p>
                     <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        Lidera o diagnóstico, define o baseline e garante que a solução vire rotina operacional.
                     </p>
                     <div className="bg-[#020617] p-4 rounded-xl border border-slate-800/50 text-left">
                        <ul className="text-xs text-slate-400 space-y-2 font-mono">
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Motor de crédito R$1Bi/dia</li>
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Reduziu 40% tempo análise</li>
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Inovação Acadêmica (FGV)</li>
                        </ul>
                     </div>
                  </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left hover:bg-slate-900 transition-colors group">
                  <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl group-hover:border-purple-900/50 transition-colors">
                      <SafeAvatar src="https://drive.google.com/thumbnail?id=1pA1JSUXZ4se7nlJLDPGrDj4CjhzT43Nv&sz=w1000" alt="Késsia Natany" initials="KN" colorClass="bg-purple-900" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-1">Késsia Natany</h3>
                     <p className="text-purple-500 text-[10px] font-mono uppercase tracking-wider mb-4 font-bold">Sócia | Governança & Qualidade</p>
                     <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        Garante o padrão, controle e qualidade para a solução sobreviver à auditoria e TI.
                     </p>
                     <div className="bg-[#020617] p-4 rounded-xl border border-slate-800/50 text-left">
                        <ul className="text-xs text-slate-400 space-y-2 font-mono">
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Portfólio R$20Bi (Gestão)</li>
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Lead Scientist (C6 Bank)</li>
                           <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Mestrado em Estatística</li>
                        </ul>
                     </div>
                  </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
             <span className="inline-block bg-slate-900/50 border border-slate-800 rounded-full px-6 py-2 text-xs text-slate-400 font-mono uppercase tracking-widest shadow-inner">
                Qualidade Garantida: Escopo Fechado • Validação com Dono • Travas de Segurança
             </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: FAQ COMPLETA */}
      <section id="faq" className="py-24 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <SectionTitle title="Dúvidas Frequentes" subtitle="Sem Letras Miúdas" />
            <div className="space-y-4">
               {[
                  { q: "Isso vai dar trabalho para meu time?", a: "Pedimos um dono do processo e checkpoints curtos. A Sprint existe para tirar trabalho manual, não criar um projeto interno complexo." },
                  { q: "Precisa mexer no meu ERP?", a: "Nem sempre. Muitas Sprints começam organizando fluxo e controle nas bordas. Integração entra quando fizer sentido e com escopo definido." },
                  { q: "A TI vai bloquear?", a: "A Sprint já nasce com governança mínima: perfis de acesso, permissões e rastreabilidade. Falamos a língua da TI." },
                  { q: "Isso vira “mais uma ferramenta”?", a: "Não. O objetivo é substituir planilha paralela e fluxo informal por um processo único, com validações e rastreabilidade." },
                  { q: "E depois que entra em produção?", a: "A Sprint entrega operável + documentação mínima. Para evolução contínua e auditoria, existe o Guardian." },
                  { q: "Que tipo de processo funciona melhor?", a: "Processos repetitivos, com muitas mãos e dor de tempo/retrabalho: aprovações, conciliações, fechamento, cadastros críticos, solicitações com SLA." },
                  { q: "Como vocês lidam com dados sensíveis?", a: "Acesso mínimo necessário, perfis, rastreabilidade e NDA quando necessário." }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-colors">
                     <button onClick={() => toggleAccordion(i)} className="w-full flex justify-between items-center p-6 text-left font-medium text-slate-300 hover:text-white transition-colors text-base">
                        <span className="pr-8">{item.q}</span>
                        {activeAccordion === i ? <ChevronUp size={20} className="text-emerald-500 shrink-0"/> : <ChevronDown size={20} className="text-slate-500 shrink-0 group-hover:text-slate-300"/>}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                           {item.a}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-16">
               <button onClick={() => setIsFormOpen(true)} className="text-emerald-400 hover:text-emerald-300 font-medium text-sm border-b border-emerald-500/30 pb-0.5 transition-all hover:border-emerald-500">
                  Ainda tenho dúvidas → Falar com especialista
               </button>
            </div>
         </div>
      </section>

      {/* SEÇÃO 12: FORMULÁRIO (CTA FINAL) */}
      <section className="py-32 bg-[#0B1120] border-t border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#020617] to-[#020617]"></div>
         <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
            <Reveal>
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">Pare de gerir por <br/>planilha e feeling.</h2>
               <p className="text-lg text-slate-400 mb-12 max-w-lg mx-auto">Coloque um processo crítico para rodar com controle, rastreabilidade e ganho medido.</p>
               
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

      {/* RODAPÉ */}
      <footer className="bg-[#020617] border-t border-slate-900 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Activity size={24} className="text-emerald-500"/>
                <span className="font-bold text-xl text-white tracking-widest">PULSE</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                Engenharia de Dados e Governança Corporativa. Transformamos complexidade operacional em eficiência auditável.
              </p>
              <div className="flex gap-4">
                 <button className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Linkedin size={20}/></button>
                 <button className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Mail size={20}/></button>
              </div>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navegação</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                  <li><button onClick={() => scrollToSection('metodo')} className="hover:text-emerald-400 transition-colors">Como Funciona</button></li>
                  <li><button onClick={() => scrollToSection('entregaveis')} className="hover:text-emerald-400 transition-colors">O que entregamos</button></li>
                  <li><button onClick={() => scrollToSection('casos')} className="hover:text-emerald-400 transition-colors">Resultados</button></li>
                  <li><button onClick={() => setIsFormOpen(true)} className="hover:text-emerald-400 transition-colors font-bold text-emerald-500">Agendar Conversa</button></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3"><MapPin size={16} className="text-slate-600 mt-1"/> <span>Alphaville, Barueri - SP</span></li>
                  <li className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors" onClick={openWhatsApp}><Phone size={16} className="text-slate-600"/> <span>(11) 97753-8041</span></li>
                  <li className="flex items-center gap-3"><Mail size={16} className="text-slate-600"/> <span>contato@pulse.com.br</span></li>
               </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
            <span>© 2025 Pulse Consultoria. Todos os direitos reservados.</span>
            <div className="flex gap-8">
               <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
               <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}