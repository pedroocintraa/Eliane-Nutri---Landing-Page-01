import React from 'react';
import { 
  Clock, Award, Headphones, ShoppingBag, Megaphone, TrendingUp, User, 
  ThumbsUp, ThumbsDown, Lock, Laptop, ShieldCheck, Shield, Star
} from 'lucide-react';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function App() {
  const handleCheckout = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    window.open('https://pay.hotmart.com/U103354680W?off=qhmfxme2', '_blank');
  };

  return (
    <div className="font-sans text-[#2D241E] bg-[#F5EFE9] min-h-screen selection:bg-[#8C6239] selection:text-white overflow-x-hidden relative">
      
      {/* Background glow effects - softened for light theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8C6239] rounded-full blur-[150px] opacity-[0.05]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#8C6239] rounded-full blur-[150px] opacity-[0.05]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-12 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        <img 
          src="https://i.postimg.cc/jS6DZxTK/CRIATIVOS_Eliane_Nutri_Mounjaro_Pro_(2).png" 
          alt="Mounjaro PRO" 
          className="w-full max-w-lg mb-10 rounded-2xl shadow-xl border border-[#D4C3B3] object-cover h-[350px] lg:h-[400px]"
          referrerPolicy="no-referrer"
        />
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D241E] leading-[1.2] mb-6 tracking-tight">
          Como Acabar com a Náusea, Intestino Preso e Fraqueza do <span className="text-[#8C6239]">Mounjaro</span> em Apenas 7 Dias, <span className="text-[#8C6239]">Sem Trocar de Dose</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-3xl leading-relaxed font-medium">
          Essa é a oportunidade perfeita para transformar o seu tratamento, emagrecer sem sofrimento e preservar cada grama de músculo que você trabalhou tanto para ter.
        </p>

        <button 
          onClick={handleCheckout}
          className="bg-[#8C6239] text-white w-full max-w-md mx-auto rounded-full font-black text-lg md:text-xl py-5 uppercase tracking-wider hover:bg-[#7A5531] transition-transform transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(140,98,57,0.3)] mb-6 mt-2"
        >
          Quero Transformar Meu Tratamento
        </button>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-stone-500 mt-4">
          <div className="flex items-center gap-2"><Shield size={20} /> <span className="text-sm font-medium">Checkout Seguro</span></div>
          <div className="flex items-center gap-2"><Award size={20} /> <span className="text-sm font-medium">Satisfação Garantida</span></div>
          <div className="flex items-center gap-2"><Lock size={20} /> <span className="text-sm font-medium">Privacidade Protegida</span></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative z-10 px-6 py-8 flex justify-center">
        <div className="w-full max-w-4xl border border-[#D4C3B3] rounded-3xl bg-white flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#D4C3B3] shadow-lg">
          <div className="flex-1 flex items-center justify-center gap-4 py-8 px-6 text-center md:text-left flex-col md:flex-row">
            <Clock className="text-[#8C6239] flex-shrink-0" size={44} strokeWidth={1.5} />
            <p className="text-lg text-[#2D241E] font-bold leading-tight">Aprenda em<br className="hidden md:block"/>menos de 24 horas</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-4 py-8 px-6 text-center md:text-left flex-col md:flex-row">
            <Award className="text-[#8C6239] flex-shrink-0" size={44} strokeWidth={1.5} />
            <p className="text-lg text-[#2D241E] font-bold leading-tight">Método testado e<br className="hidden md:block"/>validado por nutricionista</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-4 py-8 px-6 text-center md:text-left flex-col md:flex-row">
            <Headphones className="text-[#8C6239] flex-shrink-0" size={44} strokeWidth={1.5} />
            <p className="text-lg text-[#2D241E] font-bold leading-tight">Suporte e<br className="hidden md:block"/>Atualizações Inclusas</p>
          </div>
        </div>
      </section>

      {/* MODULES / O QUE VAI APRENDER */}
      <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#2D241E] mb-16 leading-tight">
          O que você vai aprender com o<br/> <span className="text-[#8C6239]">Mounjaro PRO</span>
        </h2>

        <div className="space-y-8">
          {[
            {
              icon: ShoppingBag,
              title: "O Fim dos Colaterais",
              desc: "Descubra a causa exata de cada sintoma como náusea, intestino preso, fraqueza, refluxo, e como a alimentação estratégica elimina cada um deles nos primeiros dias de aplicação."
            },
            {
              icon: Megaphone,
              title: "Avanço Sem Platô",
              desc: "Aprenda por que a perda de peso trava e como resolver sem subir a dose. Na maioria das vezes a fome que volta não é falta de caneta, é falta de proteína e organização. Você vai saber exatamente o que fazer."
            },
            {
              icon: TrendingUp,
              title: "Blindagem Muscular Completa",
              desc: "Protocolo prático para emagrecer sem perder tônus. Você vai saber como comer para que o Mounjaro elimine gordura, e não músculo, e chegar ao fim do tratamento com o corpo firme e saudável."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden transition-all shadow-xl border border-[#D4C3B3]">
              <div className="absolute top-0 left-0 bottom-0 w-2/5 bg-gradient-to-r from-[#D4C3B3]/20 to-transparent pointer-events-none"></div>
              <div className="bg-[#F5EFE9] p-5 rounded-2xl z-10">
                <item.icon className="text-[#8C6239] flex-shrink-0" size={60} strokeWidth={1.5} />
              </div>
              <div className="text-center sm:text-left z-10 mt-2">
                <h3 className="text-2xl font-bold text-[#2D241E] mb-4 tracking-wide">{item.title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="relative z-10 py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D241E] mb-16 leading-tight">
          Para quem é o<br/> <span className="text-[#8C6239]">Mounjaro PRO</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            "Para quem vai começar o tratamento do zero e quer fazer tudo certo desde o primeiro dia, sem passar pela fase de adaptação sofrida que a maioria enfrenta.",
            "Para quem já usa o Mounjaro mas sofre com enjoos que duram horas, intestino completamente travado e falta de energia para passar o dia e não sabe que isso tem solução alimentar.",
            "Para quem tem medo de parar a medicação no futuro e engordar tudo de volta. O protocolo de desmame seguro está aqui e ele faz toda a diferença para manter o peso para sempre."
          ].map((text, i) => (
            <div key={i} className="bg-white rounded-3xl border-t-4 border-[#8C6239] p-10 flex flex-col items-center relative shadow-xl">
              <div className="w-20 h-20 rounded-full border border-[#D4C3B3] flex items-center justify-center mb-8 bg-[#F5EFE9]">
                <User className="text-[#8C6239]" size={36} />
              </div>
              <p className="text-stone-600 leading-relaxed text-lg font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={handleCheckout}
          className="bg-[#8C6239] text-white w-full max-w-md mx-auto rounded-full font-black text-lg md:text-xl py-5 uppercase tracking-wider hover:bg-[#7A5531] transition-transform transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(140,98,57,0.3)] block"
        >
          QUERO TRANSFORMAR MEU TRATAMENTO
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D241E] mb-28 text-center leading-tight">
          Depoimento dos<br/> <span className="text-[#8C6239]">Alunos</span>
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "Mais leve",
              text: "Nos primeiros dias aplicando a estratégia de nutrição de alta densidade no café da manhã, meu enjoo que durava a tarde toda simplesmente desapareceu. Consigo seguir minha vida com leveza total.",
              name: "Mariana, 27 anos",
              up: 15, down: 0
            },
            {
              title: "Mais disposição",
              text: "Achava que precisava aumentar a dose porque o peso não caia mais. Corrigi a quantidade de proteína como ensinado no módulo prático e a balança voltou a responder, com energia de sobra no dia a dia.",
              name: "Ana Paula, 32 anos",
              up: 9, down: 0
            },
            {
              title: "Perdeu 10kg",
              text: "Meu maior medo era ficar com aspecto de doente depois de emagrecer. Seguindo as diretrizes de alimentação, emagreci mais de 10kg e meu tônus muscular está visivelmente melhor. Parece que rejuvenesce.",
              name: "Luciana, 40 anos",
              up: 12, down: 0
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white rounded-3xl border border-[#D4C3B3] p-8 pb-4 relative max-w-2xl mx-auto shadow-xl">
              <div className="flex justify-center text-[#EAB308] mb-4 gap-1 pt-2">
                {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={24} />)}
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D241E] mb-4 text-center">{testimonial.title}</h3>
              <p className="text-stone-600 mb-8 text-center leading-relaxed px-4 text-lg font-medium">"{testimonial.text}"</p>
              
              <div className="border-t border-[#D4C3B3] pt-5 mt-4 flex justify-between items-center">
                <span className="text-xl text-[#2D241E] font-bold tracking-wide">{testimonial.name}</span>
                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-1.5 text-stone-500 font-bold flex-col"><ThumbsUp size={24} className="text-[#8C6239]"/> <span>{testimonial.up}</span></div>
                  <div className="flex items-center gap-1.5 text-stone-500 font-bold flex-col"><ThumbsDown size={24} className="text-[#8C6239]"/> <span>{testimonial.down}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BONUSES */}
      <section className="relative z-10 py-24 mt-10 bg-[#4A3B32]">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5EFE9] mb-16 uppercase tracking-wider leading-relaxed">
            Adquira hoje e<br/> <span className="text-[#D4C3B3] font-black text-5xl md:text-7xl mt-4 block">GANHE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Planos Alimentares Prontos", desc: "Cardápios mastigados de 1.400kcal e 1.800kcal para você aplicar imediatamente, sem precisar pensar, sem risco de errar, sem sofrimento." },
              { title: "Protocolo de Desmame Seguro", desc: "O passo a passo exato de como parar a medicação no futuro mantendo 0% de reganho. Esse bônus vale mais que o produto principal para quem pensa no longo prazo." }
            ].map((bonus, i) => (
              <div key={i} className="bg-[#3A2E27] rounded-3xl border border-[#D4C3B3]/20 shadow-2xl p-10 flex flex-col items-center">
                <h3 className="text-2xl font-black text-[#D4C3B3] mb-8 uppercase tracking-widest text-center leading-tight">BÔNUS<br/>ESPECIAL</h3>
                
                <div className="border border-[#D4C3B3]/20 w-full text-center py-4 rounded-xl mb-10 bg-[#2D241E]/50">
                  <p className="text-sm text-stone-400 uppercase tracking-widest mb-1">De R$97,00 você vai levar</p>
                  <p className="text-2xl font-bold text-white uppercase tracking-widest">De Graça</p>
                </div>

                <div className="relative mb-8 mt-4">
                  <Laptop className="text-[#D4C3B3]" size={90} strokeWidth={1} />
                  <div className="absolute inset-0 bg-[#8C6239] blur-[40px] opacity-20 rounded-full w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <p className="text-[#D4C3B3] font-bold text-lg mb-3 tracking-wide">{bonus.title}</p>
                <p className="text-stone-400 text-base text-center leading-relaxed font-medium">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER CHECKOUT */}
      <section className="relative z-10 bg-[#F5EFE9] pt-24 pb-20 px-6" id="oferta">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#D4C3B3] shadow-2xl relative pt-20 pb-12 px-6 sm:px-12 flex flex-col items-center">
          
          <div className="absolute -top-7 bg-[#2D241E] px-10 py-4 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest whitespace-nowrap">OFERTA EXCLUSIVA</h3>
          </div>

          <p className="text-2xl text-stone-500 mb-8 font-medium">De: <strike>R$ 594,00</strike></p>
          
          <p className="text-[#2D241E] text-xl md:text-2xl font-bold uppercase tracking-widest mb-6 text-center">POR APENAS 3X DE:</p>
          
          <div className="text-[#8C6239] font-black text-7xl md:text-8xl leading-none tracking-tighter mb-6 relative">
            <span className="text-4xl absolute -ml-16 mt-4">R$</span>
            9,64
          </div>
          
          <p className="text-stone-500 text-xl font-bold mb-10 text-center uppercase tracking-wider">OU R$ 27,00 À VISTA</p>
          
          <button 
            onClick={handleCheckout}
            className="bg-[#8C6239] text-white w-full rounded-2xl font-black text-xl md:text-2xl py-6 uppercase tracking-wider hover:bg-[#7A5531] mx-auto hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(140,98,57,0.3)] mb-10"
          >
            QUERO COMEÇAR DA FORMA CERTA
          </button>

          <div className="w-full flex-col items-center border-t border-[#D4C3B3] pt-8 mt-2 space-y-8">
            <div className="flex flex-wrap justify-center items-center gap-3 text-[#2D241E] text-center">
              <span className="font-extrabold tracking-widest text-sm sm:text-base opacity-70">HOTMART</span>
              <span className="text-[#D4C3B3]">|</span>
              <ShieldCheck className="text-[#8C6239]" size={24}/>
              <span className="font-extrabold tracking-widest text-sm sm:text-base">COMPRA 100% SEGURA</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-stone-500 font-medium">
              <div className="flex items-center gap-2"><Shield size={18} className="text-[#8C6239]"/> Checkout Seguro</div>
              <div className="flex items-center gap-2"><Award size={18} className="text-[#8C6239]"/> Satisfação Garantida</div>
              <div className="flex items-center gap-2"><Lock size={18} className="text-[#8C6239]"/> Privacidade Protegida</div>
            </div>
            
            {/* GUARANTEE BADGE */}
            <div className="mt-10 border-2 border-[#8C6239]/20 bg-[#F5EFE9] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-lg mx-auto w-full relative overflow-hidden shadow-sm">
              <div className="text-7xl font-black text-[#8C6239] leading-none z-10">7</div>
              <div className="z-10 text-center sm:text-left flex flex-col justify-center h-full">
                <p className="text-[#2D241E] font-bold text-sm sm:text-base uppercase tracking-widest mb-1 leading-tight">DIAS DE<br/>GARANTIA</p>
                <div className="flex text-[#EAB308] mb-3 justify-center sm:justify-start">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">Confiamos tanto na eficácia do protocolo da nutricionista Eliane Costa que oferecemos garantia incondicional de 7 dias. Se não for tudo que esperava, devolvemos 100% do seu investimento.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-[#F5EFE9] bg-[#2D241E] py-10 px-6 font-medium tracking-wide">
        <p className="mb-3">© 2025 Mounjaro PRO. Todos os direitos reservados.</p>
        <p className="max-w-xl mx-auto opacity-70 leading-relaxed text-sm">
          Este produto não substitui o acompanhamento médico profissional. Consulte sempre seu médico para assuntos relacionados à sua saúde.
        </p>
      </footer>

    </div>
  );
}
