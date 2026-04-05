import React from 'react';
import { Check, ArrowRight, Shield, Zap, Flame, Lock, Coffee, CheckCircle2, Play, Star } from 'lucide-react';
import { motion } from 'motion/react';

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
              O Mounjaro tira sua fome. Este guia garante que você perca <span className="text-[#8C6239]">gordura, não músculos.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              O protocolo exato que pacientes de elite usam para potencializar a queima de gordura, blindar o estômago contra náuseas e evitar a flacidez durante o tratamento.
            </p>
            <a href="#oferta" className="inline-block bg-[#4A3B32] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#3A2E27] transition-all transform hover:scale-[1.02] shadow-lg w-full text-center lg:w-auto">
              Quero acelerar meus resultados
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
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800" 
              alt="Mulher saudável e confiante" 
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

      {/* NOT YOUR FAULT SECTION */}
      <section className="py-24 px-6 bg-[#4A3B32] text-[#F5EFE9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4C3B3] mb-4 block">A verdade sobre o platô</span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold">
              A culpa não é sua (nem da dose)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
                title: "O foco apenas na caneta",
                desc: "O Mounjaro tira a fome, mas se você não ingerir os nutrientes certos na pequena janela que consegue comer, seu corpo queima músculo e gera flacidez."
              },
              {
                img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600",
                title: "Colaterais negligenciados",
                desc: "Náusea, azia e intestino preso não são 'o preço a pagar'. São sinais de que sua digestão precisa de um protocolo de suporte imediato."
              },
              {
                img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=600",
                title: "A armadilha do platô",
                desc: "O corpo é inteligente e se adapta à medicação. Sem ciclar estratégias metabólicas, a perda de peso trava mesmo aumentando a dose."
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
              { icon: Flame, text: "Queima de gordura destravada. O corpo volta a responder à medicação." },
              { icon: Shield, text: "Músculos preservados. Emagreça mantendo o tônus, sem aspecto de 'doente'." },
              { icon: Coffee, text: "Digestão blindada. Estratégias para zerar enjoos e regular o intestino." },
              { icon: Zap, text: "Energia restaurada. Fim da letargia e do cansaço extremo no dia a dia." },
              { icon: Lock, text: "Preparação para o desmame. Treine o metabolismo para não engordar de novo." }
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
            Quero acelerar meus resultados
          </a>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 px-6 bg-[#E8DFD5]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">O Mecanismo</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E] leading-tight">
              Os 3 pilares do método Mounjaro PRO
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {[
              {
                num: "01",
                title: "Nutrição de alta densidade",
                desc: "O que comer e como estruturar suas refeições para nutrir o corpo, preservar músculos e acelerar a queima, mesmo sem sentir fome."
              },
              {
                num: "02",
                title: "Protocolo anti-colaterais",
                desc: "A combinação exata de chás, suplementos básicos e horários para blindar seu estômago contra náuseas e destravar o intestino."
              },
              {
                num: "03",
                title: "Estratégia de manutenção",
                desc: "O passo a passo para evitar o efeito rebote. Como sinalizar ao seu corpo que ele não precisa estocar gordura após o fim do tratamento."
              }
            ].map((step, i) => (
              <div key={i} className="bg-[#F5EFE9] p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-start">
                <span className="text-5xl font-display font-black text-[#D4C3B3] leading-none">{step.num}</span>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#4A3B32] mb-2">{step.title}</h3>
                  <p className="text-stone-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (Mockups) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Casos reais</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#2D241E]">
              Resultados de quem já aplicou o método
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Achei que o enjoo era normal, mas depois que apliquei o pilar 2 do guia, sumiu no segundo dia! E a balança voltou a descer. 🙏",
              "Meu maior medo era ficar flácida. Estou no 3º mês de Mounjaro, seguindo a nutrição do guia e meu corpo tá super firme. Minha médica até elogiou!",
              "Estava estagnada na dose de 5mg. Foi só ajustar os horários e a suplementação como ensina no ebook que perdi mais 3kg em uma semana."
            ].map((msg, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-display font-bold">
                    {['M', 'A', 'C'][i]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">Aluna Mounjaro PRO</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm italic">"{msg}"</p>
              </div>
            ))}
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
              
              <p className="text-lg mb-2 text-stone-300">Seu investimento hoje é de apenas:</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-medium">6x de R$</span>
                <span className="text-6xl font-display font-black">18</span>
                <span className="text-xl">,20</span>
              </div>
              <p className="text-sm text-stone-400 mb-8">ou R$ 97,00 à vista</p>

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

              <button className="bg-[#8C6239] text-white px-6 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#7A5531] transition-colors w-full shadow-lg">
                Quero potencializar meus resultados
              </button>
            </div>

            {/* Right Side */}
            <div className="p-10 md:w-1/2 bg-[#3A2E27] text-[#F5EFE9] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-8">O que você recebe:</h3>
                <ul className="space-y-5">
                  {[
                    "O Ebook Completo Mounjaro PRO",
                    "Cardápios Estratégicos para dias sem fome",
                    "Guia de Suplementação Anti-Náusea",
                    "Checklist do Desmame Seguro",
                    "Acesso vitalício a todas as atualizações"
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

      {/* CROSSROADS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">A decisão</span>
            <h2 className="text-3xl font-display font-bold text-[#2D241E]">
              Este é o momento de escolher
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#E8DFD5] p-8 rounded-xl border-t-4 border-stone-400">
              <h3 className="text-xl font-display font-bold text-[#4A3B32] mb-4">Opção 1:</h3>
              <p className="text-stone-700 leading-relaxed">
                Continuar gastando milhares de reais na medicação, sofrendo com enjoos diários e correndo o risco de ficar com o corpo flácido e perder massa magra.
              </p>
            </div>
            <div className="bg-[#4A3B32] p-8 rounded-xl border-t-4 border-[#8C6239] text-[#F5EFE9]">
              <h3 className="text-xl font-display font-bold mb-4">Opção 2:</h3>
              <p className="leading-relaxed">
                Ter o manual definitivo para extrair 100% do potencial do Mounjaro, emagrecendo com saúde, conforto e mantendo um corpo firme e estético.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#oferta" className="inline-block bg-[#4A3B32] text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#3A2E27] transition-all transform hover:scale-[1.02] shadow-xl w-full md:w-auto">
              Tocar aqui para acessar o guia
            </a>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="py-24 px-6 bg-[#E8DFD5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="Especialista" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6239] mb-4 block">Quem criou o método</span>
            <h2 className="text-3xl font-display font-bold text-[#2D241E] mb-6">Sobre a autoria</h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Eu sei exatamente o que é investir alto em um tratamento revolucionário e, ao mesmo tempo, sentir medo de fazer algo errado.
              </p>
              <p>
                Muitas pessoas acreditam que a medicação fará todo o trabalho sozinha. A verdade é que o Mounjaro é um acelerador poderoso, mas sem a direção correta, você pode acabar perdendo músculos preciosos e sofrendo com colaterais que poderiam ser facilmente evitados.
              </p>
              <p>
                Foi por ver tantas pessoas desistirem do tratamento por causa de enjoos, ou chegarem ao peso ideal com extrema flacidez, que decidi compilar este protocolo.
              </p>
              <p>
                Meu objetivo é simples: entregar a você o manual de instruções que deveria vir junto com a caneta. Um passo a passo prático, baseado em ciência e resultados reais, para que você alcance sua melhor versão com saúde e segurança.
              </p>
            </div>
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
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D241E] text-stone-400 py-8 text-center text-sm">
        <p className="font-display">© 2024 Mounjaro PRO. Todos os direitos reservados.</p>
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
