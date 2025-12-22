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
  AlertTriangle
} from 'lucide-react';

// --- Componentes Visuais ---

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
    <div className={`w-full h-full relative ${colorClass} flex items-center justify-center overflow-hidden`}>
      {!imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
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
  <div className="h-8 md:h-12 w-24 md:w-32 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
    <img 
      src={src} 
      alt={alt} 
      className="max-h-full max-w-full object-contain brightness-200 hover:brightness-100"
      referrerPolicy="no-referrer"
    />
  </div>
);

// --- Componente de Formulário (Modal) ---
const QualificationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Solicitação enviada. Nossos sócios analisarão sua elegibilidade em até 48h.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#020617]/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl p-6 md:p-8 relative shadow-2xl my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={24}/></button>
        
        <div className="mb-8 border-b border-slate-800 pb-4">
          <h3 className="text-2xl font-bold text-white mb-2">Avaliar Elegibilidade</h3>
          <p className="text-sm text-slate-400">Preencha para entendermos o processo e dizer com honestidade se a Sprint faz sentido.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-xs font-mono text-emerald-500 uppercase mb-2">Seus Dados</label>
            <input type="text" placeholder="Nome Completo" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none" required />
            <input type="email" placeholder="Email Corporativo" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none" required />
            <input type="text" placeholder="Cargo" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none" required />
          </div>
          
          <div className="col-span-1">
            <label className="block text-xs font-mono text-emerald-500 uppercase mb-2">Sua Empresa</label>
            <input type="text" placeholder="Nome da Empresa" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none" required />
            <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none">
              <option value="">Nº de Colaboradores</option>
              <option>1 - 20 (Provavelmente não elegível)</option>
              <option>21 - 50</option>
              <option>51 - 200</option>
              <option>201 - 500</option>
              <option>500+</option>
            </select>
            <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm mb-3 focus:border-emerald-500 outline-none">
              <option value="">Área do Problema</option>
              <option>Financeiro</option>
              <option>Operações / Logística</option>
              <option>Comercial</option>
              <option>TI / Dados</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-mono text-emerald-500 uppercase mb-2">O Desafio</label>
            <div className="grid grid-cols-2 gap-4 mb-4">
               <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm focus:border-emerald-500 outline-none">
                  <option value="">Dor Principal</option>
                  <option>Tempo excessivo / Retrabalho</option>
                  <option>Divergência de Dados</option>
                  <option>Falta de Governança/Auditoria</option>
               </select>
               <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm focus:border-emerald-500 outline-none">
                  <option value="">Usa Microsoft 365?</option>
                  <option>Sim, já usamos</option>
                  <option>Não (Google/Outros)</option>
                  <option>Não sei informar</option>
               </select>
            </div>
            <textarea placeholder="Descreva o processo alvo em 1 frase (Ex: Fechamento de comissão de vendas)" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white text-sm h-20 focus:border-emerald-500 outline-none"></textarea>
          </div>
          
          <div className="col-span-1 md:col-span-2 pt-4 border-t border-slate-800">
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-emerald-900/20">
              ENVIAR E AVALIAR
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Se não fizer sentido, a gente te diz e aponta o caminho — sem enrolação.
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

  return (
    <div className="font-sans text-slate-300 bg-[#020617] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden w-full">
      
      {isFormOpen && <QualificationForm onClose={() => setIsFormOpen(false)} />}

      {/* TOP BAR */}
      <div className="bg-[#050b1d] border-b border-slate-800 py-3 px-4 fixed w-full z-50 top-0 flex justify-between items-center text-xs">
         <div className="font-bold text-white tracking-widest">PULSE</div>
         <div className="hidden md:flex gap-6 text-slate-400 font-medium">
            <button onClick={() => scrollToSection('metodo')} className="hover:text-white transition-colors">Como funciona</button>
            <button onClick={() => scrollToSection('entregaveis')} className="hover:text-white transition-colors">Entregáveis</button>
            <button onClick={() => scrollToSection('casos')} className="hover:text-white transition-colors">Casos</button>
            <button onClick={() => scrollToSection('seguranca')} className="hover:text-white transition-colors">Segurança</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
         </div>
         <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 text-[#020617] font-bold px-4 py-1.5 rounded hover:bg-emerald-400 transition-colors">
            Avaliar elegibilidade (15 min)
         </button>
      </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
         <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <Reveal>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Para empresas no ecossistema Microsoft 365
               </div>
               <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                  Corte trabalho manual e retrabalho em um <span className="text-emerald-400">processo crítico</span>.
               </h1>
               <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                  Em uma Sprint, redesenhamos o processo e entregamos app + automações + painel de métricas. Você sai com ganho de tempo medido e menos erro humano, sem “app solto” e sem gambiarra.
               </p>

               <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 max-w-3xl mx-auto text-left mb-10">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4 border-b border-slate-800 pb-2">O QUE MUDA NA PRÁTICA:</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                     <div className="flex gap-3">
                        <Clock className="text-emerald-500 shrink-0" size={20}/>
                        <span className="text-sm text-slate-300">Reduz horas operacionais desperdiçadas (medimos antes/depois)</span>
                     </div>
                     <div className="flex gap-3">
                        <ShieldCheck className="text-emerald-500 shrink-0" size={20}/>
                        <span className="text-sm text-slate-300">Diminui erro e retrabalho com validações e trilha auditável</span>
                     </div>
                     <div className="flex gap-3">
                        <Database className="text-emerald-500 shrink-0" size={20}/>
                        <span className="text-sm text-slate-300">Tira o processo do Excel/WhatsApp e coloca em um fluxo governado</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:scale-105">
                     Avaliar elegibilidade (15 min)
                  </button>
                  <button onClick={() => scrollToSection('exemplos')} className="text-slate-400 hover:text-white font-medium px-6 py-4 flex items-center gap-2 transition-colors">
                     Ver exemplos de processos <ArrowRight size={16}/>
                  </button>
               </div>

               <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1"><CheckCircle2 size={12}/> NDA Disponível</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Acesso Mínimo Necessário</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Entrega no Stack Microsoft</span>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 1: VOCÊ ESTÁ VIVENDO ISSO? */}
      <section className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Você está vivendo isso?</h2>
               <p className="text-slate-400 text-center mb-12">Se você marca 3 itens, a Sprint faz sentido.</p>
               
               <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {[
                     "Existe um processo crítico “rodando” em planilha",
                     "Aprovações acontecem por e-mail/WhatsApp",
                     "Gente boa gasta horas consolidando dados manualmente",
                     "Retrabalho é frequente por erro de digitação/fórmula",
                     "O número muda no meio da reunião",
                     "O processo depende de “uma pessoa dona da planilha”",
                     "Falta rastreabilidade: “quem alterou o quê?”",
                     "Há planilhas paralelas por área (Shadow IT)"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-lg">
                        <div className="w-5 h-5 rounded border border-red-500/50 flex items-center justify-center text-red-500 shrink-0">!</div>
                        <span className="text-sm text-slate-300">{item}</span>
                     </div>
                  ))}
               </div>

               <div className="text-center bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                  <p className="text-lg text-white font-medium mb-4">Isso não é falta de BI. É processo sem dono, sem travas e sem trilha — e isso custa tempo, margem e previsibilidade.</p>
                  <button onClick={() => setIsFormOpen(true)} className="text-emerald-400 font-bold hover:text-emerald-300 uppercase text-sm tracking-wide border-b border-emerald-500/30 pb-0.5">Avaliar Elegibilidade Agora</button>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 2: EXEMPLOS */}
      <section id="exemplos" className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Processos que a Sprint resolve</h2>
               
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { title: "Aprovações Internas", desc: "Compras, descontos, exceções, contratos. Fim do email perdido." },
                     { title: "Conciliação entre Áreas", desc: "Financeiro x Operação x Comercial. Garantia de dado único." },
                     { title: "Rotinas de Fechamento", desc: "Checklists, validações, pendências. Nada passa batido." },
                     { title: "Cadastros Críticos", desc: "Clientes, produtos, fornecedores. Com controle e histórico." },
                     { title: "Fluxos de Solicitação", desc: "Com SLA definido e rastreabilidade de quem atendeu." },
                     { title: "Processos Órfãos", desc: "Aquelas rotinas que 'morrem' por falta de visibilidade." }
                  ].map((card, i) => (
                     <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/30 transition-colors">
                        <h3 className="font-bold text-white mb-2">{card.title}</h3>
                        <p className="text-sm text-slate-400">{card.desc}</p>
                     </div>
                  ))}
               </div>
               
               <p className="text-center text-sm text-slate-500 mt-10 italic">
                  Importante: A Sprint funciona melhor quando existe um dono do processo para validar baseline, mudanças e sucesso.
               </p>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 3: MÉTODO PULSE */}
      <section id="metodo" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Uma entrega fechada. Começo e fim.</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                     A Sprint é um pacote de execução focado em um processo crítico. Mapeamos, redesenhamos e implementamos no stack Microsoft (Power Platform) com governança.
                  </p>
               </div>

               <div className="grid md:grid-cols-4 gap-4">
                  {[
                     { step: "01", title: "Mapear", desc: "Entender o processo real e levantar baseline." },
                     { step: "02", title: "Construir", desc: "App + Automações com padrão corporativo." },
                     { step: "03", title: "Controlar", desc: "Travas, perfis, logs e rastreabilidade." },
                     { step: "04", title: "Medir", desc: "Comparar antes/depois e documentar o delta." }
                  ].map((item, i) => (
                     <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center relative overflow-hidden group">
                        <span className="text-4xl font-bold text-slate-800 absolute top-2 right-4 group-hover:text-slate-700 transition-colors">{item.step}</span>
                        <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
                        <p className="text-xs text-slate-400 relative z-10">{item.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-12">
                  <p className="text-slate-300 mb-6 font-medium">Resultado: um processo que deixa de depender de planilhas e memória das pessoas.</p>
                  <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] px-8 py-3 rounded-lg font-bold transition-all">
                     Avaliar elegibilidade (15 min)
                  </button>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 4: ENTREGÁVEIS */}
      <section id="entregaveis" className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">O que você leva ao final da Sprint</h2>
               
               <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <ul className="space-y-6">
                     {[
                        { title: "Processo Redesenhado", desc: "Clareza do fluxo, papéis, regras e pontos de controle." },
                        { title: "Power App Corporativo", desc: "Com validações e travas. Menos erro humano, mais padrão." },
                        { title: "Automações (Power Automate)", desc: "Elimina tarefas manuais repetitivas e reduz gargalos." },
                        { title: "Painel de Métricas", desc: "Tempo de ciclo, volume, gargalos e aderência ao processo." },
                        { title: "Trilha de Auditoria", desc: "Quem fez o quê, quando, e com quais dados." },
                        { title: "Treinamento Rápido", desc: "Documentação mínima para o time operar com previsibilidade." }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                           <div className="mt-1 bg-emerald-500/10 p-1 rounded h-fit"><CheckCircle2 size={16} className="text-emerald-500"/></div>
                           <div>
                              <strong className="text-white block mb-1">{item.title}</strong>
                              <span className="text-sm text-slate-400">{item.desc}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 5: O QUE NÃO É (FILTRO) */}
      <section className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8">O que a Sprint <span className="text-red-500">NÃO</span> é</h2>
               <div className="space-y-4 text-left inline-block">
                  <p className="flex items-center gap-3 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “fábrica de app barato” sem dono e sem padrão</p>
                  <p className="flex items-center gap-3 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “vamos automatizar a empresa inteira” (foco único)</p>
                  <p className="flex items-center gap-3 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é BI para maquiar processo quebrado</p>
                  <p className="flex items-center gap-3 text-slate-300"><XCircle size={20} className="text-red-500 shrink-0"/> Não é “milagre” sem dono do processo e sem validação</p>
               </div>
               <p className="mt-8 text-white font-medium border-t border-slate-800 pt-6">Se você quer algo rápido, consistente e auditável — aí sim faz sentido.</p>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 6: COMO MEDIMOS (ROI) */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
               <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sem "achismo". Nós medimos.</h2>
                  <p className="text-slate-400">Baseline → Entrega → Delta. O que não é medido vira opinião.</p>
               </div>

               <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                     <div className="text-blue-500 font-bold mb-2">1. BASELINE</div>
                     <p className="text-xs text-slate-400">Medimos antes: tempo médio, horas gastas, retrabalho e gargalos.</p>
                  </div>
                  <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                     <div className="text-white font-bold mb-2">2. IMPLEMENTAÇÃO</div>
                     <p className="text-xs text-slate-400">Construímos para reduzir entradas manuais e dependência de pessoas.</p>
                  </div>
                  <div className="p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
                     <div className="text-emerald-500 font-bold mb-2">3. DELTA (ROI)</div>
                     <p className="text-xs text-slate-300">Documentamos: horas economizadas, redução de erro e melhoria de SLA.</p>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SEÇÃO 7: CASOS */}
      <section id="casos" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Resultados Reais</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <Reveal delay={100}>
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                     <h3 className="text-xl font-bold text-white mb-1">Varejo Multicanal</h3>
                     <p className="text-xs text-slate-500 mb-4 font-mono uppercase">80 SKUs | Auditoria de Margem</p>
                     
                     <div className="space-y-3 mb-6">
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Problema:</strong> 8% de perda oculta em 3 categorias.</div>
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Entrega:</strong> App de precificação + Validação de estoque.</div>
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Resultado:</strong> R$ 2.4 Milhões recuperados em 6 meses.</div>
                     </div>
                     
                     <div className="pt-4 border-t border-slate-800 text-xs text-emerald-400 font-mono">
                        {`> Medição: Comparativo ERP vs Auditoria Pulse`}
                     </div>
                  </div>
               </Reveal>

               <Reveal delay={200}>
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                     <h3 className="text-xl font-bold text-white mb-1">Distribuidora Regional</h3>
                     <p className="text-xs text-slate-500 mb-4 font-mono uppercase">Logística | Automação</p>
                     
                     <div className="space-y-3 mb-6">
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Problema:</strong> Processo manual entre Comercial e Logística.</div>
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Entrega:</strong> Power App de Pedidos + Bot de Aprovação.</div>
                        <div className="text-sm text-slate-300"><strong className="text-slate-500 block text-xs font-normal uppercase">Resultado:</strong> 120 horas/mês eliminadas.</div>
                     </div>
                     
                     <div className="pt-4 border-t border-slate-800 text-xs text-emerald-400 font-mono">
                        {`> Medição: Baseline de horas x Volume processado`}
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* SEÇÃO 8: QUEM ASSINA (SÓCIOS) */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Quem assina a entrega</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Você não está comprando "um projeto". Você está comprando responsabilidade com método e padrão — liderado pelos sócios.
              </p>
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
                     <p className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">Sócio | Operações & Valor</p>
                     <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        Lidera o diagnóstico e garante que a solução vire rotina operacional.
                     </p>
                     <ul className="text-xs text-slate-400 space-y-1 mb-4 text-left font-mono">
                        <li>• Motor de crédito R$1Bi/dia (Santander)</li>
                        <li>• Reduziu 40% tempo análise (Itaú)</li>
                        <li>• Inovação Acadêmica (FGV)</li>
                     </ul>
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
                     <p className="text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">Sócia | Governança & Qualidade</p>
                     <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        Garante o padrão para a solução sobreviver ao mundo real: auditoria e TI.
                     </p>
                     <ul className="text-xs text-slate-400 space-y-1 mb-4 text-left font-mono">
                        <li>• Portfólio R$20Bi (Bradesco)</li>
                        <li>• Lead Scientist (C6 Bank)</li>
                        <li>• Mestrado em Estatística</li>
                     </ul>
                  </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 text-center bg-slate-900/30 p-4 rounded-lg border border-slate-800 border-dashed">
             <p className="text-sm text-slate-400">
                <strong>Garantia de Qualidade:</strong> Escopo fechado, validação com dono, travas de segurança e medição de delta.
             </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: SEGURANÇA */}
      <section id="seguranca" className="py-16 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
             <h2 className="text-xl font-bold text-white mb-6">Segurança desde o primeiro dia</h2>
             <p className="text-slate-400 mb-8">A Sprint já nasce com governança mínima para evitar Shadow IT. A ideia é acelerar com controle.</p>
             <div className="flex flex-wrap justify-center gap-4">
                 <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded text-xs text-slate-300 font-mono">Acesso por Perfil (RLS)</span>
                 <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded text-xs text-slate-300 font-mono">Rastreabilidade Total</span>
                 <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded text-xs text-slate-300 font-mono">Dados Centralizados</span>
                 <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded text-xs text-slate-300 font-mono">NDA Disponível</span>
             </div>
         </div>
      </section>

      {/* SEÇÃO 10: PRÓXIMOS PASSOS (ESCALA) */}
      <section className="py-16 bg-[#020617] border-t border-slate-800 opacity-80">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">O que vem depois da Sprint?</p>
            <h3 className="text-xl font-bold text-white mb-6">Se você quiser escalar...</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
               <div className="border-l-2 border-blue-500 pl-4">
                  <strong className="text-white block mb-1">CoE + Governança</strong>
                  <p className="text-xs text-slate-400">Organizar portfólio, políticas e telemetria para liberar adoção com segurança.</p>
               </div>
               <div className="border-l-2 border-purple-500 pl-4">
                  <strong className="text-white block mb-1">Guardian (Retainer)</strong>
                  <p className="text-xs text-slate-400">Manter, auditar e evoluir continuamente sem voltar para planilhas.</p>
               </div>
            </div>
         </div>
      </section>

      {/* SEÇÃO 11: FAQ */}
      <section id="faq" className="py-20 bg-[#0B1120] border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Dúvidas que travam a decisão</h2>
            <div className="space-y-3">
               {[
                  { q: "Isso vai dar trabalho para meu time?", a: "Não precisa virar um projeto interno. O que pedimos é: dono do processo disponível para validações rápidas. O objetivo é tirar trabalho — não criar." },
                  { q: "Precisa mexer no meu ERP?", a: "Nem sempre. Muitas Sprints começam organizando o processo e criando controle nas bordas. Integrações entram quando fazem sentido e com governança." },
                  { q: "A TI vai bloquear?", a: "A Sprint já nasce com governança mínima e segurança (perfis, permissões). Se a TI precisa participar, a conversa é objetiva e com padrão." },
                  { q: "Isso vira “mais uma ferramenta”?", a: "Não. O alvo é substituir a planilha e o fluxo informal. A solução nasce com dono, travas e medição — para virar rotina." },
                  { q: "E depois que entra em produção?", a: "Você pode operar com a documentação mínima e, se quiser continuidade, existe o Guardian (governança ativa + auditoria)." },
                  { q: "Que tipo de processo funciona melhor?", a: "Processos com repetição, muitas mãos, regras claras e dor de tempo. Se for algo muito caótico sem dono, primeiro organizamos a governança." },
                  { q: "Como vocês lidam com dados sensíveis?", a: "Acesso mínimo necessário, permissões por perfil, rastreabilidade e NDA quando apropriado." }
               ].map((item, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                     <button onClick={() => toggleAccordion(i)} className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm">
                        <span className="pr-4">{item.q}</span>
                        {activeAccordion === i ? <ChevronUp size={16} className="text-emerald-500 shrink-0"/> : <ChevronDown size={16} className="text-slate-500 shrink-0"/>}
                     </button>
                     {activeAccordion === i && <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 mt-2">{item.a}</div>}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEÇÃO 12: FORMULÁRIO (CTA FINAL) */}
      <section className="py-32 bg-[#020617] border-t border-slate-800">
         <div className="container mx-auto px-6 text-center max-w-2xl">
            <Reveal>
               <h2 className="text-3xl font-extrabold text-white mb-6">Pare de gerir por planilha e feeling.</h2>
               <p className="text-lg text-slate-400 mb-10">Coloque um processo crítico para rodar com controle, rastreabilidade e ganho medido.</p>
               
               <button onClick={() => setIsFormOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-[#020617] text-lg font-bold py-6 px-12 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto uppercase tracking-wide group w-full sm:w-auto">
                  AVALIAR ELEGIBILIDADE (15 MIN)
                  <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               
               <p className="mt-8 text-xs text-slate-500">
                  Se não fizer sentido, a gente te diz e aponta o caminho — sem enrolação.
               </p>
            </Reveal>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-slate-900 py-12 flex justify-center pb-20">
         <div className="container mx-auto px-6 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center">
            <span>Pulse Consultoria © 2025</span>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
               <span className="hover:text-white cursor-pointer transition-colors">Política de privacidade</span>
            </div>
         </div>
      </footer>
    </div>
  );
}