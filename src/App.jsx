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
  FolderOpen,
  Scale
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

// Componente Formulário de Qualificação
const QualificationForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui entraria a lógica de envio para CRM/Zapier
    alert("Dados enviados! Entraremos em contato se houver elegibilidade.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#020617]/95 z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={24}/></button>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Avaliação de Elegibilidade</h3>
          <p className="text-sm text-slate-400">Verifique se sua operação tem fit com o Pulse O.S.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Nome Completo</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none" required />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Email Corporativo</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Cargo</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Empresa</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Nº de Colaboradores</label>
            <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none">
              <option>1 - 20 (Provavelmente não elegível)</option>
              <option>21 - 50</option>
              <option>51 - 200</option>
              <option>201+</option>
            </select>
          </div>
           <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Stack Tecnológico</label>
            <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none">
              <option>Já usamos Microsoft 365</option>
              <option>Usamos Google/Outros</option>
              <option>Não sei informar</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Principal Dor</label>
            <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-emerald-500 outline-none">
              <option>Divergência de Dados (Financeiro x Comercial)</option>
              <option>Excesso de Trabalho Manual / Planilhas</option>
              <option>Falta de Governança / Auditoria</option>
              <option>Outro</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-bold py-3 rounded-xl mt-4 transition-colors">
            Verificar Elegibilidade
          </button>
        </form>
      </div>
    </div>
  );
};

const BankLogo = ({ src, alt }) => (
  <div className="h-8 md:h-10 w-24 md:w-32 flex items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all">
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain brightness-200 hover:brightness-100" referrerPolicy="no-referrer" />
  </div>
);

// --- Componente Principal ---

export default function PulseOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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
      const offset = 80;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-300 bg-[#020617] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden w-full pb-20 md:pb-0">
      
      {isFormOpen && <QualificationForm onClose={() => setIsFormOpen(false)} />}

      {/* STATUS BAR */}
      <div className="bg-[#0f172a] border-b border-slate-800 py-2 px-4 text-center z-50 fixed w-full top-0 flex justify-center items-center shadow-lg">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsFormOpen(true)}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">AGENDA Q1</span>
          </div>
          <span className="text-xs text-slate-200">
            Abertura para <strong className="text-white border-b border-red-500/50">{vagas} Avaliações</strong> de Elegibilidade.
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`fixed w-full z-[49] top-[40px] transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-lg border-b border-slate-800/50 py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Activity size={20} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">PULSE</span>
              <span className="text-[9px] font-mono text-slate-500 tracking-[0.2em]">OS.2025</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-md">
            {['Como Funciona', 'Entregáveis', 'Casos', 'FAQ'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <button onClick={() => setIsFormOpen(true)} className="px-6 py-2.5 rounded-lg bg-emerald-500 text-[#020617] font-bold text-xs uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
              Avaliar Elegibilidade
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#020617] z-[100] p-6 flex flex-col gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <span className="text-xl font-bold text-white">MENU</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-2">
              {['Como Funciona', 'Entregáveis', 'Casos', 'FAQ'].map((item) => (
                 <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} className="text-left text-2xl font-light text-slate-300 hover:text-emerald-400 py-4 border-b border-slate-800/50 flex justify-between items-center">
                    {item} <ArrowRight size={16} className="text-slate-600"/>
                 </button>
              ))}
          </nav>
          <button onClick={() => { setIsFormOpen(true); setIsMenuOpen(false); }} className="mt-auto w-full bg-emerald-500 text-[#020617] py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2">
            Avaliar Elegibilidade <ArrowRight size={18}/>
          </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-blue-400 text-[10px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Metodologia Pulse O.S.
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Reduza o trabalho manual e elimine <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">divergências financeiras</span>.
                </h1>
              </Reveal>
              
              <Reveal delay={300}>
                <ul className="space-y-3 text-slate-400 max-w-lg mx-auto lg:mx-0 text-left border-l-2 border-emerald-500/30 pl-6 my-6">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Fim do "Shadow IT" (Planilhas de Risco)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Dados Auditáveis em Tempo Real</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Governança Bank-Grade</li>
                </ul>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button onClick={() => setIsFormOpen(true)} className="relative group bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    AVALIAR ELEGIBILIDADE (15 MIN)
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center lg:text-left">
                  Ideal para empresas com faturamento anual R$ 20M+.
                </p>
              </Reveal>
            </div>
            
            {/* Social Proof (Immediate) */}
            <div className="lg:w-1/2 w-full">
               <Reveal delay={300}>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                          <div className="text-emerald-400 font-bold text-3xl">R$ 2.4M</div>
                          <p className="text-xs text-slate-400 mt-1">Recuperados em Margem (Varejo)</p>
                          <div className="mt-3 text-[10px] text-slate-600 font-mono border-t border-slate-800 pt-2">
                             METRICA: Auditoria vs ERP
                          </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                          <div className="text-blue-400 font-bold text-3xl">120h</div>
                          <div className="text-xs text-slate-400 mt-1">Eliminadas/Mês (Distribuição)</div>
                          <div className="mt-3 text-[10px] text-slate-600 font-mono border-t border-slate-800 pt-2">
                             METRICA: Logs de Automação
                          </div>
                      </div>
                  </div>
                  <div className="mt-6">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 text-center">DNA formado em:</p>
                      <div className="flex justify-center gap-8 opacity-50 grayscale">
                          <BankLogo src="https://drive.google.com/thumbnail?id=1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG&sz=w1000" alt="Itaú" />
                          <BankLogo src="https://drive.google.com/thumbnail?id=1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh&sz=w1000" alt="Santander" />
                          <BankLogo src="https://drive.google.com/thumbnail?id=1CfUiS1YSi9d0lps8HDgHiN1IWpZShphW&sz=w1000" alt="Bradesco" />
                      </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA (Custo do Caos) */}
      <section id="problema" className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">O Custo Invisível do Caos</h2>
               <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  Se o seu Comercial e o Financeiro apresentam números diferentes na reunião de diretoria, você não tem gestão. <span className="text-white font-medium border-b border-red-500/50">Você tem torcida.</span>
               </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 text-left">
               <Reveal delay={100}>
                  <div className="bg-red-900/5 border border-red-500/20 p-6 rounded-xl">
                      <div className="flex gap-3 mb-3">
                         <AlertTriangle className="text-red-500" size={24}/>
                         <h3 className="font-bold text-white">Margem Fantasma</h3>
                      </div>
                      <p className="text-sm text-slate-400">Ineficiências que o ERP não pega e o Excel esconde. Custam em média <strong>5% a 12% da margem líquida</strong>.</p>
                  </div>
               </Reveal>
               <Reveal delay={200}>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                      <div className="flex gap-3 mb-3">
                         <FileSpreadsheet className="text-slate-400" size={24}/>
                         <h3 className="font-bold text-white">Dependência de Excel</h3>
                      </div>
                      <p className="text-sm text-slate-400">Dados descentralizados, erros de fórmula, sem auditoria e vulneráveis a saída de funcionários.</p>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 3. COMO FUNCIONA (Metodologia e Medição) */}
      <section id="comofunciona" className="py-20 bg-[#050b1d] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Como Medimos o Sucesso</h2>
                  <p className="text-slate-400">Não vendemos horas. Vendemos resultado auditável.</p>
               </div>
            </Reveal>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                {/* Linha conectora desktop */}
                <div className="hidden md:block absolute top-1/2 w-full h-1 bg-slate-800 -z-10"></div>

                {[
                   { title: "1. Baseline", icon: <Scale size={24}/>, desc: "Medimos o 'Custo do Caos' atual (Horas perdidas ou R$ desperdiçado)." },
                   { title: "2. Sprint Pulse", icon: <Zap size={24}/>, desc: "Implementamos a automação/app em 15 dias para estancar a sangria." },
                   { title: "3. Delta (ROI)", icon: <TrendingUp size={24}/>, desc: "Comparamos o novo processo com o baseline. O ROI é matemático." }
                ].map((step, i) => (
                   <Reveal key={i} delay={i*150}>
                      <div className="bg-[#020617] border border-slate-700 p-6 rounded-xl w-full md:w-72 text-center shadow-xl">
                         <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                            {step.icon}
                         </div>
                         <h3 className="font-bold text-white mb-2">{step.title}</h3>
                         <p className="text-xs text-slate-400">{step.desc}</p>
                      </div>
                   </Reveal>
                ))}
            </div>
         </div>
      </section>

      {/* 4. ENTREGÁVEIS (O que Inclui vs Não Inclui) */}
      <section id="entregaveis" className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Escopo Fechado e Transparente</h2>
            <div className="grid md:grid-cols-2 gap-8">
               
               {/* O QUE INCLUI */}
               <div className="bg-emerald-900/10 border border-emerald-500/20 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
                     <CheckCircle2 size={20}/> O QUE VOCÊ RECEBE
                  </h3>
                  <ul className="space-y-4">
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={16}/> 
                        <span><strong>Mapeamento de Processo:</strong> Desenho técnico do fluxo (As-Is / To-Be).</span>
                     </li>
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={16}/> 
                        <span><strong>Power App Corporativo:</strong> Interface segura para coleta de dados (Web/Mobile).</span>
                     </li>
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={16}/> 
                        <span><strong>Dashboard de Controle:</strong> Power BI conectado em tempo real.</span>
                     </li>
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={16}/> 
                        <span><strong>Documentação:</strong> Vídeos de treinamento e manual de governança.</span>
                     </li>
                  </ul>
               </div>

               {/* O QUE NÃO INCLUI */}
               <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl opacity-80">
                  <h3 className="text-lg font-bold text-slate-400 mb-6 flex items-center gap-2">
                     <XCircle size={20}/> O QUE NÃO FAZEMOS
                  </h3>
                  <ul className="space-y-4">
                     <li className="flex gap-3 text-sm text-slate-500">
                        <XCircle className="shrink-0" size={16}/> 
                        <span>Apps "baratos" sem dono ou governança.</span>
                     </li>
                     <li className="flex gap-3 text-sm text-slate-500">
                        <XCircle className="shrink-0" size={16}/> 
                        <span>Suporte de TI genérico (hardware, rede, e-mail).</span>
                     </li>
                     <li className="flex gap-3 text-sm text-slate-500">
                        <XCircle className="shrink-0" size={16}/> 
                        <span>Milagre sem processo (ferramenta não conserta gestão ruim).</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 5. QUALIFICAÇÃO & INVESTIMENTO */}
      <section id="qualificacao" className="py-20 bg-[#050b1d] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
               
               {/* CHECKLIST PRONTIDÃO */}
               <div>
                  <h3 className="text-xl font-bold text-white mb-6">Para Quem É (Checklist de Prontidão)</h3>
                  <p className="text-sm text-slate-400 mb-6">Se você marcar 3 ou mais itens, o Pulse O.S. é para você:</p>
                  <ul className="space-y-3">
                     {[
                        "Faturamento anual acima de R$ 20M (ou em crescimento acelerado)",
                        "Equipe operacional acima de 20 pessoas",
                        "Utiliza ecossistema Microsoft 365 (ou disposto a migrar)",
                        "Diretoria precisa de dados auditáveis para ontem",
                        "Tem orçamento para investir em eficiência (não busca o mais barato)"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-slate-800">
                           <div className="w-5 h-5 rounded border border-slate-600 flex items-center justify-center shrink-0">?</div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* INVESTIMENTO */}
               <div>
                  <h3 className="text-xl font-bold text-white mb-6">Investimento Típico</h3>
                  <div className="space-y-4">
                     <div className="bg-emerald-900/20 border border-emerald-500/30 p-5 rounded-xl relative">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-[#020617] text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">Porta de Entrada</div>
                        <h4 className="font-bold text-white">Sprint Tática (MVP)</h4>
                        <p className="text-xs text-slate-400 mb-2">Ideal para validar a metodologia em 1 processo crítico.</p>
                        <p className="text-lg font-mono text-emerald-400">R$ 25.000 <span className="text-xs text-slate-500">(Pagamento Único)</span></p>
                     </div>
                     
                     <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl opacity-80">
                        <h4 className="font-bold text-white">Pulse Build (Projeto Completo)</h4>
                        <p className="text-xs text-slate-400 mb-2">Digitalização de departamentos inteiros + Data Lake.</p>
                        <p className="text-lg font-mono text-slate-300">R$ 120k - R$ 350k</p>
                     </div>

                     <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl opacity-60">
                        <h4 className="font-bold text-white">Pulse Guardian (Sustentação)</h4>
                        <p className="text-xs text-slate-400 mb-2">Governança, suporte e evolução contínua.</p>
                        <p className="text-lg font-mono text-slate-300">R$ 15k - R$ 35k / mês</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. SEGURANÇA & GOVERNANÇA */}
      <section className="py-12 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-slate-500 uppercase tracking-widest text-xs font-mono">
               <Lock size={14}/> Segurança Bank-Grade
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 font-mono">
               <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Row-Level Security (RLS)</span>
               <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Azure Active Directory</span>
               <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Logs de Auditoria</span>
               <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Compliance LGPD</span>
            </div>
         </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Perguntas Frequentes</h2>
            <div className="space-y-3">
               {[
                  { q: "A equipe de TI vai bloquear?", a: "Não. Trabalhamos em parceria com a TI, usando a governança nativa da Microsoft. Não instalamos softwares estranhos (.exe), usamos o que a empresa já tem aprovado." },
                  { q: "Isso vira mais uma ferramenta para a equipe?", a: "Não. Nossas soluções são integradas onde a equipe já trabalha (dentro do Teams ou no celular). A adoção é natural porque elimina dor, não cria mais trabalho." },
                  { q: "E a manutenção depois?", a: "Oferecemos o plano 'Pulse Guardian' para sustentação e evolução. Mas o código é seu (Low-code), sua equipe interna pode assumir se desejar." },
                  { q: "Em quanto tempo vejo resultado?", a: "Na Sprint Tática (15 dias), você já vê o primeiro processo rodando e gerando dados. O ROI financeiro costuma ser medido em 30-60 dias após implantação." }
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

      {/* 8. FOOTER / FINAL CTA */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Pare de gerir por "feeling".</h2>
            <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] text-lg font-bold py-5 px-12 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto uppercase tracking-wide">
               AVALIAR ELEGIBILIDADE AGORA
            </button>
            <p className="text-xs text-slate-500 mt-6">Pulse Consultoria © 2025. Todos os direitos reservados.</p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#020617] border-t border-slate-800 p-4 z-40">
         <button onClick={() => setIsFormOpen(true)} className="w-full bg-emerald-500 text-[#020617] font-bold py-3 rounded-lg shadow-lg">
            Avaliar Elegibilidade
         </button>
      </div>

    </div>
  );
}