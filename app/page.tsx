const phases = [
  {
    title: "Fase 01 - Small Talk",
    image: "Imagem Small Talk",
    text: [
      "Na primeira fase, você aprende o caminho mais rápido da conversa informal em inglês. Mesmo sem muito vocabulário, você começa a falar sobre coisas do dia a dia.",
      "Aqui você começa a desenvolver os blocos simples que unem tudo o que você já viu em frases e conversas que realmente acontecem entre nativos.",
      "Com o inglês que você vai usar no dia a dia, você para de travar com assuntos comuns e entende como iniciar, sustentar e encerrar uma troca de verdade.",
      "Small talk desbloqueia sua primeira camada de conversa: cumprimentos, interesses em comum, rotina e preferências em inglês."
    ]
  },
  {
    title: "Fase 02 - The Speaker",
    image: "Imagem The Speaker",
    text: [
      "Nessa segunda fase, você deixa de apenas responder em inglês e passa a criar contexto, contar experiências e conversar com mais independência.",
      "Aqui você consegue falar com mais profundidade sobre os seus interesses reais e sobre as conversas que importam.",
      "Você aprende conversation about habits, choices, reasons and points of view. Uma abordagem sobre família, trabalho, situações diferentes e histórias pessoais.",
      "The Speaker coloca a sua fala em movimento e tira você da dependência de respostas curtas."
    ]
  },
  {
    title: "Fase 03 - Mastery",
    image: "Imagem Mastery",
    text: [
      "Na terceira fase do CS, você se aprofunda no idioma e domina Conversation Strategies.",
      "Nessa fase, você consolida um ciclo de aprendizado poderoso. A partir desta fase, você já consegue conversar em inglês com fluência e consistência.",
      "São aulas com novas dinâmicas todo ano, com trilhas que ajudam a deixar sua fala mais espontânea, natural e segura.",
      "Também é nessa fase que você passa a entender o que está sendo dito sem tentar traduzir tudo palavra por palavra.",
      "Ao terminar essa fase, você entende que falar não é só falar inglês: é usar o idioma com estratégia, repertório e confiança do seu jeito e de acordo com a sua vida."
    ]
  }
];

const testimonials = [
  "Leandro, agradeço a The English Hub por ter me ajudado. O jeito que o professor explica faz tudo parecer mais simples.",
  "Melhor professor ever! Ele explica tudo de um jeito muito claro.",
  "Hoje faço frases que antes eu nunca conseguiria montar sozinho.",
  "O curso mudou minha relação com o inglês. Agora eu consigo pensar melhor antes de falar."
];

const bonuses = [
  {
    title: "Fundamentals",
    image: "Bônus Fundamentals",
    text: [
      "O Fundamentals é o curso completo pra quem quer compreender de verdade as estruturas que mais aparecem no inglês.",
      "Você vai entender a construção correta de frases, tempos verbais e elementos essenciais da língua. É ideal para quem quer base sólida antes de acelerar a conversação.",
      "É um produto perfeito para todos os níveis, mas com foco especial nos alunos que querem tirar dúvidas antigas e não querem mais se sentir perdidos com as bases."
    ]
  },
  {
    title: "Get Better",
    image: "Bônus Get Better",
    text: [
      "A partir deles, o aluno é dirigido ao estudo. O Get Better é uma área interativa, organizada em temas poderosos.",
      "Trilhas separadas para gramática aplicada, listening, vocabulary e desenvolvimento. Você entende para que serve cada conceito e aprende a usar.",
      "Aqui você vai entender a conjugação, o tempo, aprender vocábulos e aplicar tudo em atividades práticas de comunicação.",
      "É composto dentro de aulas sobre: Verbos, Gramática aplicada, Listening, Perguntas, uso inteligente das palavras."
    ]
  },
  {
    title: "Pronunciation Mastery",
    image: "Bônus Pronunciation Mastery",
    text: [
      "Esse curso foi pensado especialmente para você que já sabe o que quer dizer, mas ainda tem vergonha ou insegurança para pronunciar.",
      "O Pronunciation Mastery foi feito para ensinar sons, ritmo e entonação natural do falante gringo.",
      "Você vai aprender a se expressar melhor, ouvir melhor e entender como os sons mudam quando eles aparecem em frases reais.",
      "O objetivo não é zerar sotaque. É fazer sua pronúncia ficar clara, confiante e natural."
    ]
  }
];

const extras = [
  {
    title: "Suporte Pedagógico",
    text: "Uma equipe especializada ficará disponível para revisar seu progresso, tirar dúvidas e orientar seus estudos dentro da plataforma."
  },
  {
    title: "Biblioteca de Respostas Rápidas",
    text: "Mais de 4.000 respostas espontâneas, frases, estruturas práticas e modelos de resposta para você ter repertório pronto quando precisar."
  }
];

function CTA({
  children = "Quero falar inglês de vez"
}: {
  children?: React.ReactNode;
}) {
  return (
    <a
      href="#oferta"
      className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#2d9cff] px-7 py-3 text-center text-xs font-black uppercase text-white shadow-[0_14px_36px_rgba(45,156,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#48adff] focus:outline-none focus:ring-4 focus:ring-[#2d9cff]/30 sm:w-auto"
    >
      {children}
    </a>
  );
}

function AssetSlot({
  label,
  ratio = "aspect-video"
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`grid ${ratio} w-full place-items-center overflow-hidden rounded-md border border-dashed border-[#2d9cff]/45 bg-[#071b35]/80 p-5 text-center shadow-panel`}
    >
      <div>
        <p className="text-xs font-black uppercase text-[#f8b90c]">{label}</p>
        <p className="mt-2 text-[11px] leading-5 text-white/55">
          Espaço reservado para a imagem original.
        </p>
      </div>
    </div>
  );
}

function SectionTitle({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-center text-2xl font-black leading-tight text-white sm:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="star-field px-5 pb-9 pt-7 sm:px-8 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold text-white/85">
            Exclusivo para você que "entendeu mas não fala" inglês...
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl text-xl font-black leading-tight text-white sm:text-3xl">
            Teacher americano revela{" "}
            <span className="text-[#f8b90c]">
              Sistema de Aprendizado Acelerado dos Poliglotas
            </span>{" "}
            para aprender qualquer idioma em até 12 meses.
          </h1>
          <div className="mx-auto mt-7 max-w-xl rounded-md border border-white/10 bg-black/40 p-3 shadow-panel">
            <AssetSlot label="Vídeo da oferta" ratio="aspect-video" />
          </div>
          <p className="mt-5 text-sm font-black text-white">
            Já tem um cupom liberado para você aqui!
          </p>
          <div className="mt-3">
            <CTA />
          </div>
        </div>
      </section>

      <section className="section-band bg-[#061425] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              O que é o{" "}
              <span className="text-[#f8b90c]">Conversation Strategies?</span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
              <p>
                O Conversation Strategies é um programa de imersão focado
                exclusivamente em destravar o inglês para quem não fala ou não
                fala do jeito que gostaria.
              </p>
              <p>
                Você talvez entenda bem ouvindo ou lendo. Talvez já tenha
                estudado por anos, feito cursos ou visto aulas por todo lugar.
                Mas, na hora de conversar, a frase não sai.
              </p>
              <p>
                Foi para acabar com esse bloqueio que o curso foi criado: uma
                sequência prática que transforma o conhecimento solto em fala,
                repertório e comunicação real.
              </p>
              <p>
                É diferente dos métodos tradicionais. Aqui você aprende por
                estratégia, contexto e repetição inteligente, até conseguir usar
                o inglês com naturalidade.
              </p>
              <p className="font-bold text-white">
                O Conversation Strategies é a metodologia, aula por aula, que
                conduz você para conversar em inglês.
              </p>
            </div>
            <div className="mt-7">
              <CTA>Quero aprender a falar inglês agora</CTA>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <AssetSlot label="Leandro Craig" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      <section className="section-band star-field px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>
            Conheça as 3 Fases do Conversation Strategies que vão te tornar{" "}
            <span className="text-[#f8b90c]">fluente no inglês em 12 meses</span>
          </SectionTitle>
          <div className="mx-auto mt-9 grid max-w-3xl gap-5">
            {phases.map((phase) => (
              <article
                key={phase.title}
                className="grid gap-5 rounded-md border border-[#2d9cff]/35 bg-[#020812]/80 p-5 shadow-panel sm:grid-cols-[180px_1fr]"
              >
                <AssetSlot label={phase.image} ratio="aspect-[4/3]" />
                <div>
                  <h3 className="text-lg font-black text-[#f8b90c]">
                    {phase.title}
                  </h3>
                  <div className="mt-3 space-y-3 text-xs leading-6 text-white/70">
                    {phase.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee] px-5 py-14 text-[#061425] sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-black leading-tight">
            Veja o que estão dizendo{" "}
            <span className="text-[#126dcc]">outros alunos</span> do Leandro
            Craig
          </h2>
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-4">
            <AssetSlot label="Depoimento em vídeo 1" ratio="aspect-[9/16]" />
            <AssetSlot label="Depoimento em vídeo 2" ratio="aspect-[9/16]" />
          </div>
          <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item}
                className="rounded-md bg-white p-4 text-left text-sm leading-6 shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-[#020812] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>
            Bônus que vão <span className="text-[#f8b90c]">acelerar sua fluência</span>
          </SectionTitle>
          <div className="mt-10 grid gap-11">
            {bonuses.map((bonus, index) => (
              <article
                key={bonus.title}
                className="grid gap-7 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-xl font-black text-white">{bonus.title}</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
                    {bonus.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="mx-auto w-full max-w-sm">
                  <AssetSlot label={bonus.image} ratio="aspect-[4/3]" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <CTA>Quero aprender a falar inglês agora</CTA>
          </div>
        </div>
      </section>

      <section className="section-band bg-[#071b35] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black uppercase text-white">E mais...</h2>
          <div className="mt-8 grid gap-8">
            {extras.map((extra) => (
              <div key={extra.title}>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f8b90c] text-2xl font-black text-[#061425]">
                  +
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{extra.title}</h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70">
                  {extra.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flag-stripe h-28 border-y-4 border-white" />

      <section id="oferta" className="section-band star-field px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg font-black text-white">Somente nessa página</p>
          <div className="mt-7 rounded-md border border-[#f8b90c]/55 bg-[#020812]/88 p-6 shadow-glow">
            <AssetSlot label="Produto Conversation Strategies" ratio="aspect-[16/7]" />
            <h2 className="mt-5 text-2xl font-black text-[#f8b90c]">
              Conversation Strategies
            </h2>
            <p className="mt-1 text-xl font-black text-white">
              com desconto temporário
            </p>
            <p className="mt-5 text-sm font-bold text-white/60 line-through">
              De R$ 997,00 por apenas:
            </p>
            <p className="mt-2 text-4xl font-black text-white">
              12x R$ 30,90
            </p>
            <p className="mt-2 text-xs font-bold uppercase text-white/70">
              ou com +17% de desconto à vista
            </p>
            <div className="mt-6">
              <CTA>Quero meu acesso</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band bg-[#020812] px-5 py-14 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black text-[#f8b90c]">
            O Risco é todo meu!
          </h2>
          <div className="mx-auto mt-8 grid h-44 w-44 place-items-center rounded-full border border-dashed border-[#f8b90c]/45">
            <div className="grid h-28 w-28 place-items-center rounded-full border border-white/20 text-center">
              <span className="text-5xl font-black text-white">7</span>
              <span className="text-[10px] font-black uppercase text-white/65">
                dias de garantia
              </span>
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/70">
            Você ganha acesso total agora e tem 7 dias para testar o
            Conversation Strategies. Se achar que não é para você, basta pedir o
            reembolso dentro do prazo de garantia.
          </p>
          <p className="mt-8 text-lg font-black uppercase text-white">
            Cupom liberado
          </p>
          <div className="mt-4">
            <CTA>Quero meu acesso agora</CTA>
          </div>
        </div>
      </section>

      <section className="section-band star-field px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white">
            Ainda tem alguma dúvida?
          </h2>
          <a
            href="#"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1fc45b] px-7 py-3 text-center text-xs font-black uppercase text-white shadow-[0_16px_38px_rgba(31,196,91,0.26)]"
          >
            Fale com um especialista
          </a>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/70">
            Se você está na porta do Conversation Strategies mas ainda tem uma
            dúvida específica, clique no botão acima e fale com a nossa equipe.
            Vamos te ajudar a entender se esse é o próximo passo certo para o
            seu inglês.
          </p>
        </div>
      </section>
    </main>
  );
}
