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
  GraduationCap,
  Clock, 
  HelpCircle,
  Activity,
  DollarSign
} from 'lucide-react';

// --- Componentes Auxiliares ---

const SearchIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const FileText = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
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

// Componente Avatar Seguro: Tenta carregar a imagem, se falhar mostra as iniciais
const SafeAvatar = ({ src, alt, initials, colorClass }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full relative">
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${colorClass} text-white font-bold text-3xl`}>
          {initials}
        </div>
      )}
    </div>
  );
};

// Componente para Logos dos Bancos (Agora aceita imagem)
const BankLogo = ({ src, alt }) => {
  return (
    <div className="h-12 md:h-16 w-32 md:w-40 flex items-center justify-center transition-transform duration-300 hover:scale-110">
      <img 
        src={src} 
        alt={alt} 
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
};

// --- Componente Principal ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Estado para os números dinâmicos
  const [vagas, setVagas] = useState(3);
  const [fila, setFila] = useState(12);

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    window.open('https://wa.me/5511977538041', '_blank');
  };

  // Lógica de "Live Data" simulada
  useEffect(() => {
    // Define valores iniciais levemente aleatórios ao carregar
    setVagas(Math.floor(Math.random() * (4 - 2 + 1)) + 2); // Entre 2 e 4
    setFila(Math.floor(Math.random() * (18 - 10 + 1)) + 10); // Entre 10 e 18

    // Atualiza a "fila" a cada 45 segundos para parecer vivo
    const interval = setInterval(() => {
      setFila(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(8, prev + change); // Nunca menos que 8
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'qualificacao', 'solucoes', 'metodologia', 'quem-somos', 'faq', 'oferta'];
      
      // Encontrar qual seção está visível
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      
      {/* 1. BARRA DE AVISO (Dinâmica) */}
      <div className="bg-[#0B1120] text-slate-400 py-3 px-4 text-center text-xs font-medium tracking-wide z-50 fixed w-full top-0 border-b border-slate-800 flex justify-center items-center shadow-md transition-all duration-500">
        <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors group" onClick={openWhatsApp}>
          <div className="relative">
            <Activity size={14} className="text-emerald-500"/>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></span>
          </div>
          <span>
            Planejamento 2025: <strong className="text-white font-bold">{vagas} vagas para projetos Q1</strong>
            <span className="hidden sm:inline text-slate-600 mx-2">|</span>
            <span className="hidden sm:inline text-slate-400">{fila} empresas na fila</span>
          </span>
          <ArrowRight size={12} className="text-emerald-500 group-hover:translate-x-1 transition-transform"/>
        </div>
      </div>

      {/* HEADER / NAV */}
      <header 
        className={`fixed w-full top-[38px] z-[40] transition-all duration-500 ${
          scrolled || isMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm text-slate-800' 
            : 'bg-transparent border-transparent py-6 text-white'
        }`} 
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-500 ${scrolled || isMenuOpen ? 'bg-blue-600 shadow-blue-200' : 'bg-white/10 backdrop-blur-md shadow-none ring-1 ring-white/20'}`}>
              <Activity size={20} className="text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`}>PULSE</span>
          </div>
          
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
            {['Quem Somos', 'Soluções', 'Metodologia', 'Perfil Ideal'].map((item) => {
              const id = item === 'Perfil Ideal' ? 'qualificacao' : item === 'Quem Somos' ? 'quem-somos' : item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === id;
              return (
                <button 
                  key={item}
                  onClick={() => scrollToSection(id)} 
                  className={`relative group py-2 transition-colors ${isActive && scrolled ? 'text-blue-600 font-semibold' : isActive ? 'text-white font-semibold' : scrolled ? 'hover:text-blue-500' : 'hover:text-white'}`}
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
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 border-transparent' 
                  : 'bg-white text-slate-900 hover:bg-slate-100 border-transparent'
              }`}
            >
              Diagnóstico Estratégico
            </button>
          </div>

          <button 
            className={`md:hidden p-2 ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-[65] pt-28 px-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {['Quem Somos', 'Soluções', 'Metodologia', 'Perfil Ideal'].map((item) => {
               const id = item === 'Perfil Ideal' ? 'qualificacao' : item === 'Quem Somos' ? 'quem-somos' : item.toLowerCase().replace(' ', '-');
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
              className="bg-blue-600 text-white px-4 py-5 rounded-xl text-center font-bold mt-4 shadow-lg shadow-blue-200 text-lg active:scale-95 transition-transform w-full"
            >
              Agendar Diagnóstico
            </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="bg-[#0f172a] min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
        {/* Abstract shapes simulation */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-md text-blue-300 text-[10px] md:text-xs font-bold tracking-wide uppercase mb-2 hover:bg-blue-900/50 transition-colors cursor-default shadow-sm">
                  <Activity size={12} className="text-blue-400 md:w-3.5 md:h-3.5"/>
                  Consultoria de Operações "Bank-Grade"
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-[1.1] tracking-tight">
                  Sua empresa atingiu um novo patamar, mas a gestão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 block mt-1 md:mt-0 md:inline">continua em planilhas?</span>
                </h1>
              </Reveal>
              
              <Reveal delay={300}>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 lg:border-blue-500 lg:pl-6">
                  Para operações que movimentam milhões, o erro manual custa caro. Implementamos a <strong className="text-white font-medium">segurança e inteligência de bancos Tier 1</strong> na sua operação, com a velocidade do Low-Code.
                </p>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 justify-center lg:justify-start w-full md:w-auto">
                  <button 
                    onClick={openWhatsApp}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-base md:text-lg px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group active:scale-95"
                  >
                    Agendar Diagnóstico Estratégico <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button 
                    onClick={() => scrollToSection('qualificacao')}
                    className="w-full sm:w-auto group bg-transparent border border-slate-600 hover:border-slate-400 text-white text-base md:text-lg px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 active:bg-white/5"
                  >
                    A Pulse é para mim? <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform text-slate-400"/>
                  </button>
                </div>
              </Reveal>
            </div>
            
            {/* Visual Abstract - Bank Grade */}
            <div className="hidden lg:block lg:w-1/2 w-full perspective-[2000px]">
              <Reveal delay={300}>
                 <div className="relative w-full aspect-square flex items-center justify-center scale-90 lg:scale-100">
                    
                    {/* Orbit Rings (Efeito 3D simulado) */}
                    <div className="absolute w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] border border-blue-500/10 rounded-full animate-spin [animation-duration:40s]"></div>
                    <div className="absolute w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] border border-blue-500/5 rounded-full animate-spin [animation-duration:60s] direction-reverse"></div>
                    <div className="absolute w-[550px] h-[550px] lg:w-[600px] lg:h-[600px] border border-slate-700/20 rounded-full animate-spin [animation-duration:80s]"></div>

                    {/* Central Core */}
                    <div className="relative bg-[#0F172A]/80 p-8 lg:p-10 rounded-[2rem] border border-blue-500/30 backdrop-blur-xl shadow-2xl z-20 text-center w-80 lg:w-96 transform hover:scale-105 transition-transform duration-500">
                       <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
                          <Lock className="text-white" size={32} />
                       </div>
                       <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Padrão Bancário</h3>
                       <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">Governança, Auditoria e Segurança Enterprise aplicados ao seu negócio.</p>
                       
                       {/* Floating Stats */}
                       <div className="absolute -right-12 -top-6 lg:-right-16 bg-slate-800/90 p-3 lg:p-4 rounded-xl border border-slate-600 backdrop-blur-md shadow-xl animate-bounce">
                          <div className="flex items-center gap-3 mb-1">
                             <TrendingUp size={18} className="text-emerald-400"/>
                             <span className="text-xs lg:text-sm font-bold text-white">Margem +18%</span>
                          </div>
                       </div>

                       <div className="absolute -left-10 bottom-8 lg:-left-12 bg-slate-800/90 p-3 lg:p-4 rounded-xl border border-slate-600 backdrop-blur-md shadow-xl animate-bounce" style={{animationDelay: '1.5s'}}>
                          <div className="flex items-center gap-3">
                             <ShieldCheck size={18} className="text-blue-400"/>
                             <span className="text-xs lg:text-sm font-bold text-white">Compliance 100%</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF (LOGOS BANCÁRIOS - IMAGENS ATUALIZADAS) */}
      <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
             <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 px-4">DNA formado nas maiores instituições financeiras do país</p>
             <p className="text-slate-500 text-xs md:text-sm font-light px-4">Onde nossos sócios lideraram projetos críticos que processam <strong className="text-slate-700">R$500 bilhões/ano</strong></p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mb-8 md:mb-16">
            <BankLogo src="https://lh3.googleusercontent.com/d/1bXUkbivSYCX8TZ69ymv4SUmuWSYdJRGG" alt="Itaú" />
            <BankLogo src="https://lh3.googleusercontent.com/d/1W8XyBIwJxzdSBxkJfmHy4hxNG03mO6mh" alt="Santander" />
            <BankLogo src="https://lh3.googleusercontent.com/d/1CfUiS1YSi9d0lps8HDgHiN1IWpZShphW" alt="Bradesco" />
            <BankLogo src="https://lh3.googleusercontent.com/d/1aj_5IETgqNayEtx0fh42DHVaT-p79-Bk" alt="C6 Bank" />
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS AUDITÁVEIS (NOVA) */}
      <section className="py-16 md:py-20 bg-slate-50">
         <div className="container mx-auto px-4 md:px-6">
            <Reveal>
               <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Resultados Auditáveis</h2>
                  <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Casos reais de otimização operacional e blindagem de margem.</p>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
               <Reveal delay={100}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-blue-50 rounded-xl"><Clock size={20} className="text-blue-600 md:w-6 md:h-6"/></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 px-2 py-1 rounded">Varejo & Distribuição</span>
                     </div>
                     <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">120h/mês</div>
                     <div className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Redução de Retrabalho</div>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        Distribuidora regional controlava estoque em <strong className="text-blue-600">15 planilhas</strong>. Unificamos em aplicativo auditável. Equipe deixou de recompilar dados e passou a analisar tendências.
                     </p>
                  </div>
               </Reveal>

               <Reveal delay={200}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 shadow-lg transition-all duration-300 transform md:scale-105 md:shadow-2xl relative z-10 h-full flex flex-col">
                     <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full shadow-md">MAIS COMUM</span>
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-emerald-50 rounded-xl"><DollarSign size={20} className="text-emerald-600 md:w-6 md:h-6"/></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 px-2 py-1 rounded mr-12">Varejo & E-commerce</span>
                     </div>
                     <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">R$ 2.4M</div>
                     <div className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Recuperação de Margem</div>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        Varejista multicanal (80 SKUs) identificou <strong className="text-emerald-600">8% de perda oculta</strong> em 3 categorias após BI estratégico. Ajustou precificação e mix em 6 meses.
                     </p>
                  </div>
               </Reveal>

               <Reveal delay={300}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-purple-50 rounded-xl"><ShieldCheck size={20} className="text-purple-600 md:w-6 md:h-6"/></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 px-2 py-1 rounded">Serviços Financeiros</span>
                     </div>
                     <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">35% ↓</div>
                     <div className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Inadimplência Evitada</div>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        Financeira B2B implementou modelo preditivo de churn. Sistema alertou <strong className="text-purple-600">850 clientes de alto risco</strong> antes do default, permitindo negociação.
                     </p>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 4. QUALIFICAÇÃO (PARA QUEM É / NÃO É) */}
      <section id="qualificacao" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Reveal>
             <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A Pulse é uma consultoria "Boutique"</h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">Não somos uma fábrica de software genérica. Somos especialistas em operações de alta complexidade.</p>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             <Reveal delay={100}>
                <div className="bg-white p-6 md:p-10 rounded-3xl border-t-4 border-emerald-500 shadow-2xl shadow-emerald-900/5 h-full relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 z-0"></div>
                   <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-3 relative z-10">
                      <div className="p-2 bg-emerald-100 rounded-lg"><CheckCircle2 className="text-emerald-600" size={20}/></div>
                      PARA QUEM É A PULSE
                   </h3>
                   <ul className="space-y-4 md:space-y-6 relative z-10">
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shrink-0"></div>
                         <span className="text-slate-700 text-sm md:text-base leading-relaxed">Empresas em fase de <strong>expansão ou consolidação</strong> de mercado.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shrink-0"></div>
                         <span className="text-slate-700 text-sm md:text-base leading-relaxed">Operações com <strong>alto volume transacional</strong> e processos manuais críticos.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shrink-0"></div>
                         <span className="text-slate-700 text-sm md:text-base leading-relaxed">Diretorias que buscam <strong>auditoria, governança e previsibilidade</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shrink-0"></div>
                         <span className="text-slate-700 text-sm md:text-base leading-relaxed">Empresas prontas para investir em transformação estruturada (R$ 80k+).</span>
                      </li>
                   </ul>
                </div>
             </Reveal>

             <Reveal delay={200}>
                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border-t-4 border-slate-300 h-full opacity-90 md:opacity-80 hover:opacity-100 transition-opacity">
                   <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 md:mb-8 flex items-center gap-3">
                      <div className="p-2 bg-slate-200 rounded-lg"><XCircle className="text-slate-400" size={20}/></div>
                      PARA QUEM NÃO É
                   </h3>
                   <ul className="space-y-4 md:space-y-6">
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-sm md:text-base leading-relaxed">Startups em fase inicial (pre-revenue) ou operações muito pequenas.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-sm md:text-base leading-relaxed">Equipes menores que 20 pessoas.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-sm md:text-base leading-relaxed">Quem busca soluções "quebra-galho" sem preocupação com segurança.</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-4">
                         <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-400 shrink-0"></div>
                         <span className="text-slate-500 text-sm md:text-base leading-relaxed">Empresas que não usam o ecossistema <strong>Microsoft/Cloud</strong>.</span>
                      </li>
                   </ul>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SOLUÇÕES (3 PILARES) */}
      <section id="solucoes" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm border border-blue-200 bg-white px-4 py-1.5 rounded-full">Nossos Pilares</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mt-4 md:mt-6 mb-4 md:mb-6 tracking-tight leading-tight">
                Tecnologia é meio.<br/> <span className="text-blue-600">Resultado Financeiro</span> é o fim.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Pilar 1: Digitalização */}
            <Reveal delay={100}>
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                  <Smartphone className="text-slate-700 group-hover:text-white transition-colors duration-300 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Jornada Digital</h3>
                <p className="text-xs font-bold text-blue-600 mb-4 md:mb-6 uppercase tracking-wide">Fim do Retrabalho</p>
                <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Elimine o erro humano operacional. Substituímos planilhas soltas por <strong className="text-blue-600">Aplicativos Seguros (Power Apps)</strong> onde cada clique é auditável.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                   <p className="text-blue-800 text-[10px] md:text-xs font-bold uppercase mb-1">💡 Caso Real</p>
                   <p className="text-slate-700 text-xs md:text-sm">Distribuidora eliminava 120h/mês recompilando dados de 15 planilhas.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs md:text-sm">
                     <TrendingUp size={16}/> ROI: Redução de Custo
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pilar 2: Engenharia de Dados (Destaque) */}
            <Reveal delay={200}>
              <div className="bg-[#0B1120] rounded-3xl p-6 md:p-8 border border-slate-700 shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 transform md:scale-105 h-full flex flex-col group relative z-10 ring-2 ring-blue-500/20">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20">NOSSO DNA</span>
                {/* Efeito de fundo movido para um container interno para não cortar o "NOSSO DNA" */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                </div>
                
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white transition-colors duration-300 relative z-10">
                  <Database className="text-white group-hover:text-[#0B1120] transition-colors duration-300 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">Inteligência de Dados</h3>
                <p className="text-xs font-bold text-blue-400 mb-4 md:mb-6 uppercase tracking-wide relative z-10">Lucro em Tempo Real</p>
                <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base relative z-10">
                  Chega de decidir no escuro. Construímos a <strong className="text-blue-400">Verdade Única dos Dados</strong>. Saiba qual produto drena sua margem líquida.
                </p>
                <div className="bg-slate-800 p-4 rounded-xl mb-6 border border-slate-700 relative z-10">
                   <p className="text-blue-300 text-[10px] md:text-xs font-bold uppercase mb-1">💡 Caso Real</p>
                   <p className="text-slate-300 text-xs md:text-sm">Varejista descobriu 8% de perda oculta e recuperou R$2.4M em 6 meses.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-800 relative z-10">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs md:text-sm">
                     <Target size={16}/> ROI: Decisão Estratégica
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pilar 3: Growth & IA */}
            <Reveal delay={300}>
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-purple-600 transition-colors duration-300">
                  <BrainCircuit className="text-slate-700 group-hover:text-white transition-colors duration-300 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">IA & Risco Preditivo</h3>
                <p className="text-xs font-bold text-purple-600 mb-4 md:mb-6 uppercase tracking-wide">Proteção de Caixa</p>
                <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Não espere o cliente deixar de pagar. Utilizamos modelos estatísticos para <strong className="text-purple-600">prever inadimplência</strong> antes que ela aconteça.
                </p>
                <div className="bg-purple-50 p-4 rounded-xl mb-6 border border-purple-100">
                   <p className="text-purple-800 text-[10px] md:text-xs font-bold uppercase mb-1">💡 Caso Real</p>
                   <p className="text-slate-700 text-xs md:text-sm">Modelo alertou 850 clientes de risco e evitou 35% de inadimplência.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-purple-600 font-bold text-xs md:text-sm">
                     <ShieldCheck size={16}/> ROI: Prevenção de Perdas
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 6. METODOLOGIA */}
      <section id="metodologia" className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nosso Processo</h2>
             <p className="text-slate-600 text-base md:text-lg">Liderança executiva, execução técnica.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="flex flex-col items-center text-center p-6 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl md:text-2xl mb-4 md:mb-6 shadow-sm"><Target size={28}/></div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-2">1. Mapeamento</h4>
                <div className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded mb-3 inline-block">2 Semanas</div>
                <p className="text-slate-600 text-sm leading-relaxed">Diagnóstico profundo. Entendemos o risco e o financeiro antes de codar.</p>
             </div>
             
             {/* Connector for Desktop */}
             <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-slate-100 -z-10 transform -translate-y-12"></div>

             <div className="flex flex-col items-center text-center p-6 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl md:text-2xl mb-4 md:mb-6 shadow-sm"><Zap size={28}/></div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-2">2. Implementação</h4>
                <div className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded mb-3 inline-block">Sprints Ágeis</div>
                <p className="text-slate-600 text-sm leading-relaxed">Squads dedicadas. Entregas a cada 15 dias. Você vê o resultado na tela.</p>
             </div>

             <div className="flex flex-col items-center text-center p-6 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl md:text-2xl mb-4 md:mb-6 shadow-sm"><LineChart size={28}/></div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-2">3. Mensuração</h4>
                <div className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded mb-3 inline-block">Contínuo</div>
                <p className="text-slate-600 text-sm leading-relaxed">Dashboard de ROI auditável. Você saberá exatamente quanto economizou.</p>
             </div>
          </div>
          
          <div className="max-w-md mx-auto mt-10 md:mt-12 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
             <p className="text-xs md:text-sm text-slate-600 font-medium">⏱️ Tempo médio do processo completo: <span className="text-slate-900 font-bold">12 a 20 semanas</span></p>
          </div>
        </div>
      </section>

      {/* 7. QUEM SOMOS (REFATORADA - Layout Horizontal) */}
      <section id="quem-somos" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm border border-blue-200 bg-white px-4 py-1.5 rounded-full shadow-sm">Quem Constrói Sua Blindagem</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mt-4 md:mt-6 mb-4 tracking-tight leading-tight">
                Engenheiros de Bancos Tier 1
              </h2>
              <div className="flex justify-center items-center gap-2 text-slate-500 font-medium text-sm md:text-base">
                 <ShieldCheck size={20} className="text-blue-600"/>
                 <span>+14 anos combinados construindo infraestrutura crítica</span>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Sócio 1: Felipe */}
            <Reveal delay={100}>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 hover:border-blue-400 transition-colors shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full">
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 bg-slate-200 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
                      {/* TENTATIVA 1: Link Direto do Google (Formato alternativo) */}
                      <SafeAvatar 
                        src="https://lh3.googleusercontent.com/d/10hDQlBxrz6mwTOg7NjkwDq83kFA2hQzb" 
                        alt="Felipe Belisário" 
                        initials="FB"
                        colorClass="bg-blue-600"
                      />
                  </div>
                  <div className="flex-grow w-full">
                     {/* Texto Original Restaurado */}
                     <div className="flex flex-col xl:flex-row justify-between items-center sm:items-start xl:items-center mb-2 gap-2">
                        <div className="text-center sm:text-left">
                           <h3 className="text-xl font-bold text-slate-900">Felipe Belisário</h3>
                           <p className="text-blue-600 text-sm font-bold">Arquiteto de Soluções & Estratégia</p>
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-200 flex items-center gap-1 shrink-0 text-center sm:text-left"><Award size={10}/> Prêmio de Inovação Acadêmica</span>
                     </div>
                     
                     <div className="flex gap-2 mb-4 flex-wrap justify-center sm:justify-start">
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">Santander Corp</span>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">Itaú BBA</span>
                     </div>

                     <ul className="space-y-2 text-sm text-slate-600 mb-6 text-left">
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0"/> Motor de crédito R$1 bi/dia</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0"/> Reduziu 40% tempo de análise</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0"/> Especialista em MOB e IA</li>
                     </ul>

                     <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-slate-100 pt-4 gap-3 sm:gap-0">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">Liderança Técnica em Tier 1</span>
                        <div className="flex gap-3">
                           <a href="https://www.linkedin.com/in/felipe-belis%C3%A1rio-36138364" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"><Linkedin size={20}/></a>
                           <a href="mailto:Felipe.belisario@grupo-belisario.com" className="text-slate-400 hover:text-blue-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"><Mail size={20}/></a>
                        </div>
                     </div>
                  </div>
              </div>
            </Reveal>

            {/* Sócio 2: Késsia */}
            <Reveal delay={200}>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 hover:border-purple-400 transition-colors shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full">
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 bg-slate-200 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
                      {/* TENTATIVA 1: Link Direto do Google (Formato alternativo) */}
                      <SafeAvatar 
                        src="https://lh3.googleusercontent.com/d/1pA1JSUXZ4se7nlJLDPGrDj4CjhzT43Nv" 
                        alt="Késsia Natany" 
                        initials="KN"
                        colorClass="bg-purple-600"
                      />
                  </div>
                  <div className="flex-grow w-full">
                     {/* Texto Original Restaurado */}
                     <div className="flex flex-col xl:flex-row justify-between items-center sm:items-start xl:items-center mb-2 gap-2">
                        <div className="text-center sm:text-left">
                           <h3 className="text-xl font-bold text-slate-900">Késsia Natany</h3>
                           <p className="text-purple-600 text-sm font-bold">Data Scientist & Operações</p>
                        </div>
                        <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-1 rounded-full border border-purple-200 flex items-center gap-1 shrink-0"><Award size={10}/> Lead Scientist</span>
                     </div>
                     
                     <div className="flex gap-2 mb-4 flex-wrap justify-center sm:justify-start">
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">Bradesco</span>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">C6 Bank</span>
                     </div>

                     <ul className="space-y-2 text-sm text-slate-600 mb-6 text-left">
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-0.5 shrink-0"/> Gestão de portfólio R$20 bi</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-0.5 shrink-0"/> Prevenção a fraude e risco</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-0.5 shrink-0"/> UX para operações financeiras</li>
                     </ul>

                     <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-slate-100 pt-4 gap-3 sm:gap-0">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">Expertise em Analytics e Operações</span>
                        <div className="flex gap-3">
                           <a href="https://www.linkedin.com/in/kessianatany" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"><Linkedin size={20}/></a>
                           <a href="mailto:Kessia.Natany@grupo-belisario.com" className="text-slate-400 hover:text-purple-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"><Mail size={20}/></a>
                        </div>
                     </div>
                  </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. FAQ ESTRATÉGICA */}
      <section id="faq" className="py-16 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 md:mb-10">Perguntas Frequentes</h2>
            <div className="space-y-4">
               {[
                  { q: "Quanto tempo leva uma implementação típica?", a: "Projetos variam de 8 a 24 semanas. Trabalhamos em sprints de 2 semanas com entregas incrementais. Você vê resultado já na primeira sprint." },
                  { q: "Preciso migrar toda a operação de uma vez?", a: "Não. Implementamos por etapas (MVP primeiro). Começamos com o processo mais crítico, validamos o resultado e depois escalamos. Sem 'big bang', sem risco operacional." },
                  { q: "Como funciona o modelo de investimento?", a: "Projetos típicos variam de R$80k a R$300k. Trabalhamos com modelo de retainer mensal (PM as a Service) ou projeto fechado. Primeira sprint pode ser um teste pago (R$15k)." },
                  { q: "Vocês atendem empresas fora de São Paulo?", a: "Sim. Atuamos 100% remoto quando necessário, com reuniões estratégicas presenciais mensais. Já atendemos clientes em SP, RJ, MG, PR e SC." },
                  { q: "O que acontece na Sessão de Diagnóstico?", a: "É uma reunião de 45 minutos com os sócios via Zoom. Você apresenta sua operação, nós fazemos o diagnóstico inicial e entregamos um Mapa de Risco (PDF executivo) com 3-5 oportunidades priorizadas. Sem custo." },
                  { q: "E se eu não ficar satisfeito com a primeira sprint?", a: "Se após a primeira entrega (2 semanas) você não enxergar valor, interrompemos sem custo adicional. Você paga apenas pelo trabalho executado até ali. Sem multas, sem burocracias." }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                     <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-slate-800 hover:bg-slate-100 transition-colors text-sm md:text-base">
                        <span className="pr-4">{item.q}</span>
                        <div className="p-1 bg-white rounded-lg border border-slate-200 shrink-0">
                           {openFaq === i ? <ChevronUp size={16} className="text-blue-600"/> : <ChevronDown size={16} className="text-slate-400"/>}
                        </div>
                     </button>
                     {openFaq === i && <div className="p-4 md:p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200 mt-2 bg-white">{item.a}</div>}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. CTA FINAL (OFERTA) */}
      <section id="oferta" className="py-16 md:py-24 bg-[#0B1120] relative overflow-hidden">
        {/* Simulação de textura */}
        <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Vamos mapear seus riscos <br/> e oportunidades?
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10 font-light">
              Agende uma <strong>Sessão de Diagnóstico Estratégico</strong>. Em 45 minutos, desenharemos um mapa de risco da sua operação atual.
            </p>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 max-w-2xl mx-auto mb-10 text-left">
               <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2 text-sm md:text-base">O que você recebe (Grátis):</h4>
               <ul className="space-y-3 text-slate-300 text-xs md:text-sm">
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <Users size={16} className="text-emerald-500"/>
                     </div>
                     <span>45 minutos com os sócios (Felipe e Késsia)</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <SearchIcon size={16} className="text-emerald-500"/>
                     </div>
                     <span>Diagnóstico de pontos cegos operacionais</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <FileText size={16} className="text-emerald-500"/>
                     </div>
                     <span>Mapa de Risco em PDF (3-5 oportunidades priorizadas)</span>
                  </li>
               </ul>
               <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center text-xs md:text-sm">
                  <span className="text-slate-400">Investimento:</span>
                  <span className="text-emerald-400 font-bold">R$ 0 (Para as próximas 5 empresas)</span>
               </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
             <button 
               onClick={openWhatsApp}
               className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg md:text-xl font-bold py-5 px-12 rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-3 mx-auto active:scale-95"
             >
               Agendar Sessão no WhatsApp
               <ArrowRight />
             </button>
             <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-500 text-[10px] md:text-xs uppercase tracking-wide font-bold">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-slate-600"/> NDA Assinado</span>
                <span className="flex items-center gap-2"><Briefcase size={16} className="text-slate-600"/> Sessão com Sócios</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-slate-600"/> 48h para agendamento</span>
             </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-slate-900 font-light text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                  <Activity size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">PULSE</span>
              </div>
              <p className="leading-relaxed mb-8 max-w-xs mx-auto md:mx-0 text-slate-500">
                Consultoria de Engenharia de Dados e Governança Corporativa. Transformamos complexidade operacional em eficiência auditável.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/felipe-belis%C3%A1rio-36138364" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="mailto:contato@pulseconsultoria.com.br" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Mail size={18} /></a>
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col md:items-end text-center md:text-right">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Navegação</h4>
              <ul className="space-y-4">
                <li onClick={() => scrollToSection('quem-somos')} className="cursor-pointer hover:text-white transition-colors">Quem Somos</li>
                <li onClick={() => scrollToSection('solucoes')} className="cursor-pointer hover:text-white transition-colors">Soluções</li>
                <li onClick={() => scrollToSection('metodologia')} className="cursor-pointer hover:text-white transition-colors">Metodologia</li>
                <li onClick={openWhatsApp} className="cursor-pointer hover:text-white transition-colors text-blue-500 font-bold">Agendar Blindagem</li>
              </ul>
            </div>

            <div className="md:w-1/3 flex flex-col md:items-end text-center md:text-right">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contato</h4>
              <ul className="space-y-4">
                <li className="flex md:justify-end items-center justify-center gap-3"><Building2 size={16} className="text-blue-600"/> Alphaville, Barueri - SP</li>
                <li className="flex md:justify-end items-center justify-center gap-3 cursor-pointer hover:text-white transition-colors" onClick={openWhatsApp}><Smartphone size={16} className="text-blue-600"/> (11) 97753-8041</li>
                <li className="flex md:justify-end items-center justify-center gap-3"><Mail size={16} className="text-blue-600"/> Felipe.belisario@grupo-belisario.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left text-slate-600">
            <span>© 2025 Pulse Consultoria. Todos os direitos reservados.</span>
            <div className="flex gap-6 justify-center">
               <a href="#" className="hover:text-white transition-colors">Privacidade</a>
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}