import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
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
  Layers,
  Lock,
  XCircle,
  Briefcase,
  Award,
  GraduationCap
} from 'lucide-react';

// --- Componentes Auxiliares ---

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

const BankLogo = ({ name, color }) => (
  <div className="flex items-center gap-2 group cursor-default opacity-60 hover:opacity-100 transition-opacity duration-300">
    <div className={`p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-${color}-200 transition-colors`}>
      <Building2 className={`text-slate-400 group-hover:text-${color}-600 transition-colors w-5 h-5 md:w-6 md:h-6`} />
    </div>
    <span className="text-lg md:text-xl font-bold text-slate-400 group-hover:text-slate-700 transition-colors">{name}</span>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    window.open('https://wa.me/5511977538041', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'qualificacao', 'solucoes', 'metodologia', 'quem-somos', 'oferta'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      
      {/* 1. BARRA DE AVISO */}
      <div className="bg-[#0B1120] text-slate-400 py-2.5 px-4 text-center text-xs font-medium tracking-wide z-50 relative border-b border-slate-800">
        <div className="container mx-auto flex justify-center items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer" onClick={openWhatsApp}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Planejamento 2025: <strong className="text-slate-200 hover:text-white underline decoration-emerald-500/50">Agenda aberta para novos projetos estratégicos.</strong></span>
          </div>
        </div>
      </div>

      {/* HEADER / NAV */}
      <header 
        className={`fixed w-full top-0 z-[60] transition-all duration-500 border-b ${
          scrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm text-slate-800' 
            : 'bg-transparent border-transparent py-6 text-white'
        } ${!scrolled && !isMenuOpen ? 'mt-[35px]' : 'mt-0'}`} 
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2.5 cursor-pointer z-[70]"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-500 ${scrolled || isMenuOpen ? 'bg-blue-600 shadow-blue-200' : 'bg-white/10 backdrop-blur-md shadow-none ring-1 ring-white/20'}`}>
              <TrendingUp size={20} className="text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`}>PULSE</span>
          </div>
          
          <nav className={`hidden md:flex items-center gap-10 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
            {['Perfil Ideal', 'Soluções', 'Metodologia', 'Quem Somos'].map((item) => {
              const id = item === 'Perfil Ideal' ? 'qualificacao' : item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === id;
              return (
                <button 
                  key={item}
                  onClick={() => scrollToSection(id)} 
                  className={`relative group py-2 transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'}`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <button 
              onClick={openWhatsApp}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 border-transparent' 
                  : 'bg-white text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              Sessão Estratégica
            </button>
          </div>

          <button 
            className={`md:hidden p-2 z-[70] ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-[65] pt-24 px-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {['Perfil Ideal', 'Soluções', 'Metodologia', 'Quem Somos'].map((item) => {
               const id = item === 'Perfil Ideal' ? 'qualificacao' : item.toLowerCase().replace(' ', '-');
               return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-xl font-medium text-slate-800 hover:text-blue-600 py-4 border-b border-slate-100 flex justify-between items-center"
                  >
                    {item} <ArrowRight size={20} className="text-slate-300"/>
                  </button>
               )
            })}
            <button 
              onClick={openWhatsApp}
              className="bg-blue-600 text-white px-4 py-4 rounded-xl text-center font-bold mt-4 shadow-lg shadow-blue-200 text-lg active:scale-95 transition-transform"
            >
              Agendar no WhatsApp
            </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="bg-[#0f172a] min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-xs font-bold tracking-wide uppercase mb-2 hover:bg-white/10 transition-colors cursor-default">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Consultoria de Operações "Bank-Grade"
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Sua empresa cresceu, mas seus controles <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ainda são manuais?</span>
                </h1>
              </Reveal>
              
              <Reveal delay={300}>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ineficiência operacional é um <strong>risco silencioso de governança e perda de margem.</strong> Implementamos a segurança e inteligência de bancos Tier 1 na sua operação, com a velocidade do Low-Code.
                </p>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button 
                    onClick={openWhatsApp}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto"
                  >
                    Sessão de Blindagem <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button 
                    onClick={() => scrollToSection('qualificacao')}
                    className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white text-lg px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    A Pulse é para mim? <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform text-slate-400"/>
                  </button>
                </div>
              </Reveal>
            </div>
            
            <div className="hidden lg:block lg:w-1/2 w-full perspective-[2000px]">
              <Reveal delay={300}>
                 {/* Visual Abstract */}
                 <div className="relative w-full aspect-square flex items-center justify-center">
                    
                    {/* Orbit Rings */}
                    <div className="absolute w-[500px] h-[500px] border border-slate-700/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute w-[380px] h-[380px] border border-blue-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

                    {/* Central Core */}
                    <div className="relative bg-[#0F172A]/80 p-8 rounded-3xl border border-slate-700 backdrop-blur-xl shadow-2xl z-20 text-center w-80">
                       <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
                          <Lock className="text-white" size={32} />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-2">Padrão Bancário</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">Governança, Auditoria e Segurança de Dados Enterprise aplicados ao seu negócio.</p>
                       
                       {/* Floating Stats */}
                       <div className="absolute -right-24 top-0 bg-slate-800/90 p-4 rounded-xl border border-slate-700 backdrop-blur-md shadow-xl animate-bounce-slow">
                          <div className="flex items-center gap-3 mb-2">
                             <TrendingUp size={18} className="text-emerald-400"/>
                             <span className="text-sm font-bold text-white">Margem +18%</span>
                          </div>
                          <div className="w-32 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                             <div className="w-[70%] h-full bg-emerald-500"></div>
                          </div>
                       </div>

                       <div className="absolute -left-20 bottom-8 bg-slate-800/90 p-4 rounded-xl border border-slate-700 backdrop-blur-md shadow-xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                          <div className="flex items-center gap-3">
                             <ShieldCheck size={18} className="text-blue-400"/>
                             <span className="text-sm font-bold text-white">Compliance 100%</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            DNA formado nas maiores instituições financeiras do país
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <BankLogo name="Itaú" color="orange" />
            <BankLogo name="Santander" color="red" />
            <BankLogo name="Bradesco" color="red" />
            <BankLogo name="C6 Bank" color="slate" />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE QUALIFICAÇÃO (FILTRO) */}
      <section id="qualificacao" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Pulse é uma consultoria "Boutique"</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">Não somos uma fábrica de software genérica. Somos especialistas em operações de alta complexidade e volume.</p>
             </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             <Reveal delay={100}>
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-4 border-blue-600 shadow-xl shadow-slate-200/50 h-full hover:shadow-2xl transition-shadow">
                   <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg"><CheckCircle2 className="text-blue-600" size={24}/></div>
                      Para quem é a Pulse:
                   </h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                         <span className="text-slate-700 text-base md:text-lg leading-relaxed">Empresas consolidadas com <strong>faturamento anual acima de R$ 10 Milhões</strong>.</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                         <span className="text-slate-700 text-base md:text-lg leading-relaxed">Negócios que sofrem com processos manuais em <strong>larga escala</strong> (Varejo, Logística, Serviços Financeiros).</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                         <span className="text-slate-700 text-base md:text-lg leading-relaxed">Diretorias que buscam <strong>auditoria, governança e previsibilidade</strong>, não apenas "um sistema".</span>
                      </li>
                   </ul>
                </div>
             </Reveal>

             <Reveal delay={200}>
                <div className="bg-slate-100 p-8 md:p-10 rounded-[2rem] border-t-4 border-slate-300 h-full opacity-70 hover:opacity-100 transition-opacity">
                   <h3 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
                      <div className="p-2 bg-slate-200 rounded-lg"><XCircle className="text-slate-400" size={24}/></div>
                      Para quem NÃO é:
                   </h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-base md:text-lg leading-relaxed">Startups em fase inicial (pre-revenue) ou negócios muito pequenos buscando preço baixo.</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-base md:text-lg leading-relaxed">Quem busca soluções "quebra-galho" sem preocupação com segurança de dados.</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="mt-2 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-base md:text-lg leading-relaxed">Empresas que não operam ou não desejam migrar para o ecossistema <strong>Microsoft/Cloud</strong>.</span>
                      </li>
                   </ul>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES (ROI & Valor) */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm border border-blue-100 bg-blue-50 px-4 py-1.5 rounded-full">Nossos Pilares</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6 tracking-tight leading-tight">
                Tecnologia é meio.<br/> <span className="text-blue-600">Resultado Financeiro</span> é o fim.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Pilar 1: Digitalização */}
            <Reveal delay={100}>
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                  <Smartphone className="text-slate-700 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Jornada Digital</h3>
                <p className="text-xs font-bold text-blue-600 mb-6 uppercase tracking-wide">Fim do Retrabalho</p>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Elimine o erro humano operacional. Substituímos planilhas soltas por <strong>Aplicativos Seguros (Power Apps)</strong> onde cada clique é registrado e auditável. Sua equipe foca em análise, não em digitação.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                     <TrendingUp size={18}/> ROI: Redução de Custo Operacional
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pilar 2: Engenharia de Dados */}
            <Reveal delay={200}>
              <div className="bg-[#0B1120] rounded-[2.5rem] p-8 border border-slate-700 shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-300 relative z-10">
                  <Database className="text-white group-hover:text-[#0B1120] transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Inteligência de Dados</h3>
                <p className="text-xs font-bold text-blue-400 mb-6 uppercase tracking-wide relative z-10">Lucro em Tempo Real</p>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg relative z-10">
                  Chega de decidir no escuro. Construímos a <strong>Verdade Única (Single Source of Truth)</strong>. Saiba exatamente qual produto, filial ou vendedor está drenando ou alavancando sua margem líquida.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-800 relative z-10">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                     <Target size={18}/> ROI: Decisão Estratégica Imediata
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pilar 3: Growth & IA */}
            <Reveal delay={300}>
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-purple-600 transition-colors duration-300">
                  <BrainCircuit className="text-slate-700 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">IA & Risco Preditivo</h3>
                <p className="text-xs font-bold text-purple-600 mb-6 uppercase tracking-wide">Proteção de Caixa</p>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Não espere o cliente deixar de pagar. Utilizamos modelos estatísticos de risco para <strong>prever inadimplência e churn</strong>. Blinde seu fluxo de caixa com matemática avançada e IA preditiva.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-purple-600 font-bold text-sm">
                     <ShieldCheck size={18}/> ROI: Prevenção de Perdas
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. METODOLOGIA (Agile & PM) */}
      <section id="metodologia" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                 <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm">Nosso Processo</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">
                   Liderança Executiva.<br/>Execução Técnica.
                 </h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   Não somos "freelancers". Atuamos como seu <strong>braço estratégico de tecnologia (PM as a Service)</strong>. Traduzimos sua necessidade de negócio para a equipe técnica, garantindo que o software entregue gere valor real.
                 </p>
                 
                 <div className="space-y-8">
                    <div className="flex gap-5">
                       <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Target className="text-blue-600" size={24}/></div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900">1. Mapeamento Estratégico</h4>
                          <p className="text-slate-600">Entendemos a estratégia, o risco e o financeiro antes de escrever uma linha de código.</p>
                       </div>
                    </div>
                    <div className="flex gap-5">
                       <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Zap className="text-blue-600" size={24}/></div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900">2. Implementação Ágil</h4>
                          <p className="text-slate-600">Squads dedicadas com entregas quinzenais. Você vê o resultado acontecendo na tela.</p>
                       </div>
                    </div>
                    <div className="flex gap-5">
                       <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><LineChart className="text-blue-600" size={24}/></div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900">3. Mensuração de Resultado</h4>
                          <p className="text-slate-600">Não entregamos só o projeto. Entregamos o relatório de impacto financeiro (ROI).</p>
                       </div>
                    </div>
                 </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="relative bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl">
                     <div className="absolute top-0 right-0 bg-blue-50 w-32 h-32 rounded-bl-[2.5rem] rounded-tr-[2.5rem] -z-10"></div>
                     <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-6 border-b border-slate-100 pb-6">
                           <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                              <Briefcase className="text-slate-600" size={24}/>
                           </div>
                           <div>
                              <div className="font-bold text-xl text-slate-900">Visão de Negócio</div>
                              <div className="text-sm text-slate-500 font-medium">Sócios Ex-Bancos & PMs</div>
                           </div>
                        </div>
                        
                        <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90 h-8 w-8"/></div>
                        
                        <div className="flex items-center gap-6 border-b border-slate-100 pb-6">
                           <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                              <Zap className="text-blue-600" size={24}/>
                           </div>
                           <div>
                              <div className="font-bold text-xl text-slate-900">Engenharia & UX</div>
                              <div className="text-sm text-slate-500 font-medium">Squads Especialistas</div>
                           </div>
                        </div>
                        
                        <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90 h-8 w-8"/></div>
                        
                        <div className="bg-slate-900 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                           <span className="text-white font-bold text-lg flex items-center justify-center gap-3">
                              <TrendingUp size={24} className="text-emerald-400"/> Resultado Financeiro Auditável
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. QUEM SOMOS (Sócios & Liderança) */}
      <section id="quem-somos" className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Background Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm border border-blue-200 bg-white px-4 py-1.5 rounded-full shadow-sm">Liderança Executiva</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6 tracking-tight leading-tight">
                Visão Estratégica de Dados. <br/> Execução Tática de Operações.
              </h2>
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                A Pulse é liderada por engenheiros que construíram os motores de decisão e as esteiras operacionais dos maiores bancos do país.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Card Sócio 1: Felipe */}
            <Reveal delay={100}>
              <div className="group bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Highlight Badge */}
                <div className="absolute top-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 z-20">
                   <Award size={14}/> Santander Expert
                </div>
                
                {/* INOVA Badge - Extraido do PDF */}
                <div className="absolute top-8 left-8 bg-amber-100 text-amber-800 text-[10px] md:text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border border-amber-200 flex items-center gap-2 z-20">
                   <Award size={14}/> Prêmio INOVA (1º Lugar)
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 mt-8">
                  {/* Avatar */}
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl group-hover:scale-[1.02] transition-transform relative z-10">
                      <img 
                        src="felipe.jpg" 
                        alt="Felipe Belisário" 
                        className="w-full h-full object-cover"
                      />
                  </div>
                  
                  {/* Info */}
                  <div className="text-center md:text-left pt-2">
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-2">Felipe Belisário</h3>
                    <p className="text-blue-600 font-bold text-lg mb-2">Engenheiro de Dados & Estratégia</p>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-4 flex items-center gap-2 justify-center md:justify-start">
                       <Database size={14} className="text-blue-400"/> O Arquiteto da Governança
                    </p>
                    
                    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">Santander Corp</span>
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">Itaú BBA</span>
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">MBA USP/Esalq</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base font-light border-t border-slate-100 pt-8 relative z-10 flex-grow">
                   <p>
                     Engenheiro Eletricista e Cientista de Dados com +7 anos liderando a transformação analítica em instituições financeiras Tier 1.
                   </p>
                   <p>
                     Especialista em inteligência comercial e rentabilidade (MOB). Liderou o desenvolvimento de <strong>motores de crédito que processam R$1 Bilhão/dia</strong> e reduziu em 40% o tempo de análise com automação e IA preditiva.
                   </p>
                </div>

                <div className="flex gap-4 mt-8 pt-6 border-t border-slate-50 justify-center md:justify-start relative z-10">
                  <a href="https://www.linkedin.com/in/felipe-belis%C3%A1rio-36138364" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"><Linkedin size={20}/></a>
                  <a href="mailto:Felipe.belisario@grupo-belisario.com" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"><Mail size={20}/></a>
                </div>
                
                {/* Abstract BG Element */}
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-50 rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform"></div>
              </div>
            </Reveal>

            {/* Card Sócio 2: Késsia */}
            <Reveal delay={300}>
              <div className="group bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Highlight Badge */}
                <div className="absolute top-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 z-20">
                   <Award size={14}/> Lead Data Scientist
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 mt-8">
                  {/* Avatar */}
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl group-hover:scale-[1.02] transition-transform relative z-10">
                      <img 
                        src="kessia.jpg" 
                        alt="Késsia Natany" 
                        className="w-full h-full object-cover scale-125 translate-y-2" 
                      />
                  </div>
                  
                  {/* Info */}
                  <div className="text-center md:text-left pt-2">
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-2">Késsia Natany</h3>
                    <p className="text-purple-600 font-bold text-lg mb-2">Data Scientist & Operações</p>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-4 flex items-center gap-2 justify-center md:justify-start">
                       <Zap size={14} className="text-purple-400"/> A Tática da Eficiência
                    </p>
                    
                    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">Bradesco</span>
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">C6 Bank</span>
                       <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">Engenheira (FEI)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base font-light border-t border-slate-100 pt-8 relative z-10 flex-grow">
                   <p>
                     Engenheira e Lead Data Scientist com +7 anos de expertise em Analytics, Riscos e Otimização de Portfólio em bancos como Bradesco e C6 Bank.
                   </p>
                   <p>
                     Especialista em unir dados e design (UX) para criar <strong>jornadas operacionais fluidas e seguras</strong>. Desenvolveu dashboards estratégicos para gestão de portfólios de <strong>R$20 Bi</strong> e automatizou processos complexos de prevenção a fraudes.
                   </p>
                </div>

                <div className="flex gap-4 mt-8 pt-6 border-t border-slate-50 justify-center md:justify-start relative z-10">
                  <a href="https://www.linkedin.com/in/kessianatany" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-purple-600 hover:text-white transition-colors shadow-sm"><Linkedin size={20}/></a>
                  <a href="mailto:Kessia.Natany@grupo-belisario.com" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-purple-600 hover:text-white transition-colors shadow-sm"><Mail size={20}/></a>
                </div>

                {/* Abstract BG Element */}
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-50 rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform"></div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 9. OFERTA / CTA FINAL */}
      <section id="oferta" className="py-20 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute -bottom-1/2 -left-10 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Vamos mapear seus riscos <br/> e oportunidades?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Agende uma <strong>Sessão de Estratégia & Blindagem</strong>. Em 45 minutos, desenharemos um mapa de risco da sua operação atual. Mesmo que não nos contrate, você sairá com o mapa.
            </p>
          </Reveal>

          <Reveal delay={200}>
             <button 
               onClick={openWhatsApp}
               className="w-full sm:w-auto bg-white hover:bg-blue-50 text-slate-900 text-lg md:text-2xl font-bold py-6 px-12 rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-3 mx-auto"
             >
               Agendar Sessão no WhatsApp
               <ArrowRight />
             </button>
             <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-500"/> NDA Assinado</span>
                <span className="flex items-center gap-2"><Target size={18} className="text-emerald-500"/> Sessão com Sócios</span>
             </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-light text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">PULSE</span>
              </div>
              <p className="leading-relaxed mb-8 max-w-xs text-slate-500">
                Consultoria de Engenharia de Dados e Governança Corporativa. Transformamos complexidade em eficiência.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/felipe-belis%C3%A1rio-36138364" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="mailto:contato@pulseconsultoria.com.br" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Mail size={18} /></a>
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col md:items-end">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contato</h4>
              <ul className="space-y-4 md:text-right">
                <li className="flex md:justify-end items-center gap-3"><Building2 size={16} className="text-blue-600"/> Alphaville, Barueri - SP</li>
                <li className="flex md:justify-end items-center gap-3"><Mail size={16} className="text-blue-600"/> contato@pulseconsultoria.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left text-slate-600">
            <span>© 2025 Pulse Consultoria. Todos os direitos reservados.</span>
            <div className="flex gap-6">
               <a href="#" className="hover:text-white transition-colors">Privacidade</a>
               <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}