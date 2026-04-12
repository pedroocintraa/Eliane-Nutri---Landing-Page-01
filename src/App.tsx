import React from 'react';
import { Check, ArrowRight, Shield, Zap, Flame, Lock, Coffee, CheckCircle2, Play, Star } from 'lucide-react';
import { motion } from 'motion/react';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function App() {
  return (
    <div className="font-sans text-stone-800 bg-[#F5EFE9] min-h-screen selection:bg-[#4A3B32] selection:text-white">
      
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4A3B32] rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-[#4A3B32]">Mounjaro<span className="text-[#8C6239]">PRO</span></span>
        </div>
        <div className="text-sm font-medium text-stone-500 flex items-center gap-2 uppercase tracking-wider text-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Acesso Imediato
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD5] text-[#4A3B32] text-xs font-bold uppercase tracking-widest mb-6">
              <StarIcon className="w-4 h-4" />
              <span>O Guia Definitivo</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-[#2D241E] leading-[1.1] mb-6 tracking-tight">
              O manual de nutrição e acolhimento que deveria vir junto com a sua <span className="text-[#8C6239]">caneta de Mounjaro.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Medicação nenhuma é maior que a alimentação. Este guia te ensina o que comer, o que evitar e como organizar suas refeições para usar o Mounjaro sem náusea, sem fraqueza e sem medo de engordar tudo de volta. 7 módulos. Cardápios prontos. Feito por nutricionista clínica.
            </p>
            <a href="#oferta" className="inline-block bg-[#4A3B32] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#3A2E27] transition-all transform hover:scale-[1.02] shadow-lg w-full text-center lg:w-auto">
              Quero segurança no tratamento
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#D4C3B3] rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://i.postimg.cc/jS6DZxTK/CRIATIVOS_Eliane_Nutri_Mounjaro_Pro_(2).png" 
              alt="Eliane Costa - A Alimentação Correta no Mounjaro" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* AGITATION SECTION */}
      <section className="py-20 px-6 bg-[#E8DFD5]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Sinais de alerta</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E] leading-tight">
              Você já se perguntou por que...
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {[
              "Mesmo investindo caro na medicação, a balança parece ter travado?",
              "O enjoo e o cansaço estão sugando sua energia para trabalhar e viver?",
              "Você sente que está perdendo músculo e ficando com o corpo flácido?",
              "O medo do 'efeito rebote' quando parar de usar não sai da sua cabeça?"
            ].map((text, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-start gap-4"
              >
                <Check className="w-6 h-6 text-[#8C6239] flex-shrink-0 mt-1" />
                <p className="text-lg text-stone-700 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="py-24 px-6 bg-[#F5EFE9]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img 
              src="https://i.postimg.cc/525Xn4JN/Z62_9679_websize.jpg" 
              alt="Eliane Costa - Nutricionista Clínica e Esportiva" 
              className="rounded-2xl shadow-xl w-full object-cover h-[600px] object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Quem criou o método</span>
            <h2 className="text-3xl font-display font-bold text-[#2D241E] mb-2">Eliane Costa</h2>
            <p className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-8">Nutricionista Clínica e Esportiva — CRN 15230</p>
            
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Todos os dias no meu consultório, vejo pessoas que começaram o Mounjaro cheias de esperança — e agora estão passando mal, perdendo força e com medo de que nada funcione de verdade.
              </p>
              <p>
                Muitas pessoas acreditam que a medicação fará todo o trabalho sozinha. A verdade é que o Mounjaro é um acelerador poderoso, mas sem a direção correta, você pode acabar perdendo músculos preciosos e sofrendo com colaterais que poderiam ser facilmente evitados.
              </p>
              <p>
                Foi por ver tantas pacientes desistirem do tratamento por causa de enjoos, ou chegarem ao peso ideal com extrema flacidez, que decidi compilar este protocolo.
              </p>
              <p className="font-medium text-[#4A3B32]">
                Foi por isso que criei este guia — o manual de instruções que deveria vir junto com a caneta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOT YOUR FAULT SECTION */}
      <section className="py-24 px-6 bg-[#4A3B32] text-[#F5EFE9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4C3B3] mb-4 block">O que ninguém te explicou</span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold">
              A culpa não é sua (nem da dose)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
                title: "A fome some, mas a necessidade não",
                desc: "O Mounjaro tira a fome, mas o corpo continua precisando de nutrientes. Quem come pouco demais perde músculo, perde energia e aumenta o risco de engordar tudo de volta."
              },
              {
                img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600",
                title: "Os colaterais têm causa — e solução",
                desc: "Náusea, intestino preso e fraqueza não são inevitáveis. São consequência da alimentação errada combinada com um estômago que funciona mais devagar. Ajustando o que você come, eles desaparecem."
              },
              {
                img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=600",
                title: "Subir a dose nem sempre é a resposta",
                desc: "Muitas vezes a fome que volta não é falta de dose — é falta de proteína e organização alimentar. Quando a alimentação está certa, a dose atual rende muito mais."
              }
            ].map((card, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="bg-[#F5EFE9] rounded-xl overflow-hidden text-stone-800 flex flex-col"
              >
                <img src={card.img} alt={card.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold mb-3 text-[#4A3B32]">{card.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">A virada de chave</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E] leading-tight">
                O que acontece quando você alinha o Mounjaro à estratégia correta?
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { icon: Flame, text: "Emagrecimento consistente sem sofrimento. O corpo volta a responder à medicação." },
              { icon: Shield, text: "Músculos preservados. Emagreça mantendo o tônus." },
              { icon: Coffee, text: "Intestino funcionando e estômago sem náusea. Estratégias para zerar enjoos e regular o intestino." },
              { icon: Zap, text: "Energia restaurada. Fim do cansaço extremo no dia a dia." },
              { icon: Lock, text: "Transição segura — como parar sem medo do reganho." }
            ].map((item, i) => (
              <div key={i} className={`bg-[#E8DFD5] p-6 rounded-xl ${i === 4 ? 'sm:col-span-2' : ''}`}>
                <div className="w-12 h-12 bg-[#4A3B32] rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#F5EFE9]" />
                </div>
                <p className="text-stone-800 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="#oferta" className="inline-block bg-[#4A3B32] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#3A2E27] transition-all transform hover:scale-[1.02] shadow-lg">
            Quero segurança no tratamento
          </a>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 px-6 bg-[#E8DFD5]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Estrutura do Guia</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E] leading-tight mb-6">
                Tudo o que você vai aprender nos 7 módulos
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Um passo a passo completo, direto ao ponto e focado na prática para você aplicar desde a primeira refeição.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "O Que É o Mounjaro",
                desc: "A fisiologia real: como o GLP-1 e GIP agem no seu corpo, por que a fome some e o que acontece quando a alimentação não acompanha."
              },
              {
                num: "02",
                title: "Por Que Cada Dor Acontece",
                desc: "A causa exata de cada colateral: intestino preso, náusea, vômito, fraqueza, fome que desaparece — e como a alimentação resolve cada um."
              },
              {
                num: "03",
                title: "Alimentação Correta no Mounjaro",
                desc: "O que comer, o que evitar, os horários ideais e os 3 pilares de cada refeição para nunca mais passar mal."
              },
              {
                num: "04",
                title: "Proteção da Massa Magra",
                desc: "Como saber se você está perdendo músculo, o que fazer nos dias de náusea e como parar o Mounjaro sem engordar tudo de volta."
              },
              {
                num: "05",
                title: "Economia de Dose e Hidratação",
                desc: "Como a alimentação certa faz sua dose render mais (e por que subir a dose nem sempre é a solução)."
              },
              {
                num: "06",
                title: "Pré-Treino e Performance",
                desc: "Por que treinar em jejum com Mounjaro é perigoso e o pré-treino leve que muda tudo."
              },
              {
                num: "07",
                title: "Parte Prática",
                desc: "Cardápio feminino (1.400 kcal), cardápio masculino (1.800 kcal), checklist diário, FAQ e avisos essenciais."
              }
            ].map((step, i) => (
              <div key={i} className={`bg-[#F5EFE9] p-6 rounded-xl flex flex-col gap-4 items-start shadow-sm border border-stone-200/50 ${i === 6 ? 'sm:col-span-2' : ''}`}>
                <span className="text-4xl font-display font-black text-[#D4C3B3] leading-none">{step.num}</span>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#4A3B32] mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Alinhamento de Expectativas</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E]">
              Para quem é (e para quem não é) este guia
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para quem é */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-600">
              <h3 className="text-xl font-display font-bold text-[#2D241E] mb-6 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center">✓</span>
                Este guia É PARA VOCÊ se:
              </h3>
              <ul className="space-y-4">
                {[
                  "Você já usa ou vai começar o Mounjaro e quer fazer o tratamento da forma certa",
                  "Está sentindo náusea, intestino preso ou fraqueza e quer resolver com alimentação",
                  "Tem medo de perder músculo e ficar com o corpo flácido durante o emagrecimento",
                  "Quer saber exatamente o que comer em cada refeição, com cardápios prontos",
                  "Quer parar o Mounjaro no futuro sem engordar tudo de volta"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quem não é */}
            <div className="bg-[#F5EFE9] p-8 rounded-2xl border-t-4 border-red-600 opacity-90">
              <h3 className="text-xl font-display font-bold text-[#4A3B32] mb-6 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 w-8 h-8 rounded-full flex items-center justify-center">✗</span>
                Este guia NÃO É para você se:
              </h3>
              <ul className="space-y-4">
                {[
                  "Você procura uma dieta milagrosa ou fórmula mágica",
                  "Não está disposta a ajustar sua alimentação",
                  "Espera que a medicação faça todo o trabalho sozinha"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg leading-none mt-0.5">✕</span>
                    <span className="text-stone-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="py-24 px-6 bg-[#F5EFE9]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#4A3B32] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Left Side */}
            <div className="p-10 md:w-1/2 flex flex-col justify-center text-[#F5EFE9] border-b md:border-b-0 md:border-r border-stone-600">
              <div className="flex items-center gap-2 mb-8">
                <Shield className="w-6 h-6 text-[#8C6239]" />
                <span className="font-display font-bold text-xl tracking-tight">Mounjaro<span className="text-[#8C6239]">PRO</span></span>
              </div>

              <div className="bg-[#3A2E27] p-5 rounded-xl border border-stone-600 mb-8">
                <p className="text-stone-300 text-sm leading-relaxed">
                  Você já investe entre <strong className="text-white">R$ 800 e R$ 3.000</strong> por mês na medicação.
                  <br className="hidden sm:block" />
                  Este guia custa menos do que um único dia do seu tratamento — e garante que cada dose trabalhe a favor do seu corpo, não contra.
                </p>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 animate-pulse shadow-lg">
                  Oferta de lançamento — primeiras 50 unidades
                </span>
                <p className="text-stone-400 text-lg">De <span className="line-through">R$ 47,00</span> por apenas:</p>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-[#8C6239]">3x</span>
                <span className="text-2xl font-medium text-stone-300">de R$</span>
                <span className="text-7xl font-display font-black tracking-tighter text-white">9</span>
                <span className="text-3xl font-bold text-white">,64</span>
              </div>
              <div className="mb-8">
                <span className="text-sm text-stone-300 bg-[#3A2E27] px-4 py-1.5 rounded-full font-medium border border-stone-600 inline-block shadow-sm">
                  ou R$ 27,00 à vista
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Acesso imediato ao Guia Completo",
                  "Protocolo passo a passo",
                  "Acesso pelo celular ou computador"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#8C6239] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  // Dispara o evento do Pixel
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'InitiateCheckout');
                  }
                  // Redireciona para o checkout da Hotmart
                  window.open('https://pay.hotmart.com/U103354680W?off=qhmfxme2', '_blank');
                }}
                className="bg-[#8C6239] text-white px-6 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#7A5531] transition-colors w-full shadow-lg"
              >
                Quero começar da forma certa
              </button>
            </div>

            {/* Right Side */}
            <div className="p-10 md:w-1/2 bg-[#3A2E27] text-[#F5EFE9] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-8">O que você recebe:</h3>
                <ul className="space-y-5">
                  {[
                    "Guia completo com 7 módulos — da fisiologia ao cardápio pronto (27 páginas)",
                    "Cardápio feminino (1.400 kcal) e masculino (1.800 kcal) prontos para seguir",
                    "Protocolo para dias de náusea — o que comer e o que evitar quando estiver passando mal",
                    "Checklist diário do usuário de Mounjaro — imprima e cole na geladeira",
                    "Guia de transição — como parar o Mounjaro sem reganho de peso",
                    "Acesso vitalício + todas as atualizações futuras"
                  ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                      <span className="text-[#8C6239] mt-1">👉</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 bg-[#2D241E] p-6 rounded-xl border border-stone-700 flex gap-4 items-start">
                <span className="text-4xl font-display font-black text-[#8C6239]">7</span>
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Dias de Garantia Incondicional</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Siga o método. Se você não sentir diferença na sua disposição e nos resultados da balança, devolvemos 100% do seu dinheiro. Simples assim.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMPOWERMENT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">O próximo passo</span>
            <h2 className="text-3xl font-display font-bold text-[#2D241E]">
              O seu tratamento merece esse cuidado
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#E8DFD5] p-8 rounded-xl border-t-4 border-stone-400 flex flex-col justify-center">
              <p className="text-stone-800 text-lg leading-relaxed font-medium">
                Você já deu o passo mais importante ao decidir cuidar da sua saúde. Agora é hora de garantir que o Mounjaro trabalhe a seu favor — sem sofrimento, sem perda de músculo e sem medo do que vem depois.
              </p>
            </div>
            <div className="bg-[#4A3B32] p-8 rounded-xl border-t-4 border-[#8C6239] text-[#F5EFE9] flex flex-col justify-center">
              <p className="text-lg leading-relaxed">
                Este guia é o manual de instruções que deveria vir junto com a caneta. <strong className="text-white">27 páginas</strong> com tudo que você precisa saber para transformar seu tratamento em resultado de verdade.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#oferta" className="inline-block bg-[#4A3B32] text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#3A2E27] transition-all transform hover:scale-[1.02] shadow-xl w-full md:w-auto">
              Quero cuidar do meu corpo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#F5EFE9]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Tire suas dúvidas</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E]">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="O guia substitui o acompanhamento médico?" 
              answer="Não. O guia é um complemento nutricional e estratégico focado em estilo de vida, alimentação e suplementação básica para potencializar seus resultados e minimizar colaterais. O acompanhamento médico é indispensável durante todo o seu tratamento." 
            />
            <FAQItem 
              question="Como recebo o acesso ao ebook?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail da Hotmart com o seu acesso exclusivo. Através da plataforma segura da Hotmart, você poderá baixar o material completo em PDF e acessar todos os bônus no seu celular, tablet ou computador." 
            />
            <FAQItem 
              question="Serve para quem usa Ozempic ou Wegovy?" 
              answer="Sim! Embora o foco seja o Mounjaro (Tirzepatida), os princípios de nutrição de alta densidade e o protocolo de manejo de colaterais gástricos funcionam perfeitamente para usuários de Semaglutida." 
            />
            <FAQItem 
              question="E se eu não gostar do conteúdo?" 
              answer="Você está coberta pela nossa garantia incondicional de 7 dias. Se você ler o material e achar que não agregou valor ao seu tratamento, basta enviar um único e-mail para o nosso suporte e devolveremos 100% do seu dinheiro, sem burocracia." 
            />
            <FAQItem 
              question="Vou precisar comprar suplementos caros?" 
              answer="Definitivamente não. Nosso foco é na alimentação real e em chás/suplementos básicos e acessíveis que você encontra em qualquer farmácia ou loja de produtos naturais." 
            />
            <FAQItem 
              question="Serve para quem está começando agora com o Mounjaro?" 
              answer="Sim, e na verdade é o momento ideal. Começar com a alimentação correta desde o início evita a maioria dos colaterais e protege sua massa magra desde o primeiro dia." 
            />
            <FAQItem 
              question="Funciona para quem está em dose baixa (2,5mg ou 5mg)?" 
              answer="Sim. O protocolo alimentar funciona em qualquer dose. Na verdade, uma das coisas que você vai aprender é que muitas vezes não é a dose que precisa subir — é a alimentação que precisa ser ajustada." 
            />
            <FAQItem 
              question="Meu marido/namorado também pode usar?" 
              answer="Sim! O guia inclui cardápio masculino (1.800 kcal) além do feminino (1.400 kcal), com todas as adaptações necessárias." 
            />
            <FAQItem 
              question="E se eu não conseguir seguir o cardápio à risca?" 
              answer="O guia não é uma dieta rígida. É um protocolo com princípios claros (os 3 pilares de cada refeição) e opções flexíveis. Você vai entender a lógica por trás de cada escolha, então consegue adaptar ao seu dia a dia." 
            />
            <FAQItem 
              question="Por quanto tempo terei acesso?" 
              answer="Acesso vitalício. O ebook é seu para sempre, e você recebe automaticamente todas as atualizações futuras sem custo adicional." 
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D241E] text-stone-400 py-8 text-center text-sm">
        <p className="font-display">© 2025 Mounjaro PRO. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs max-w-2xl mx-auto px-6">
          Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde.
        </p>
      </footer>

    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-stone-300 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left font-display font-bold text-lg text-[#2D241E] hover:text-[#8C6239] transition-colors"
      >
        <span className="pr-4">{question}</span>
        <span className="text-[#8C6239] text-2xl leading-none font-normal">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          className="mt-4 text-stone-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}
