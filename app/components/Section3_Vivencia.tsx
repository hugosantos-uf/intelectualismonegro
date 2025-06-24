import React from "react";

const Section3_Vivencia = () => {
  return (
    // Removido o fundo escuro. Agora usa o fundo padrão (claro) do body.
    <section
      id="secao3"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          {/* O texto do título agora usa a cor de texto padrão (escura) */}
          <h2 className="text-4xl font-bold">
            A Vivência: {`"`}Nosso Lugar de Fala{`"`}
          </h2>
          <p className="mt-2 text-lg text-[rgb(var(--brand-secondary-rgb))] font-sans">
            Aqui conectamos a teoria à prática, refletindo sobre nossas
            experiências.
          </p>
        </header>

        <div className="space-y-12 font-sans text-lg">
          {/* O fundo dos cards agora é branco para se destacar do fundo claro da página */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Mantida a borda primária (vermelha) para consistência no destaque */}
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-[rgb(var(--brand-primary-rgb))] pb-2 text-[rgb(var(--brand-text-rgb))]">
              Reflexão sobre a Bibliografia
            </h3>
            <p className="text-[rgb(var(--brand-secondary-rgb))] leading-relaxed">
              Quantos autores negros e, mais especificamente, quantas mulheres
              negras vocês leram em suas disciplinas de computação? E em outras
              matérias do curso? A ausência ou presença minoritária desses
              autores em nossa formação reforça a epistemologia eurocêntrica que
              aprendemos a ver como universal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-[rgb(var(--brand-primary-rgb))] pb-2 text-[rgb(var(--brand-text-rgb))]">
              {`"`}Neutralidade{`"`} na Tecnologia
            </h3>
            <p className="text-[rgb(var(--brand-secondary-rgb))] leading-relaxed">
              Como a {`"`}supremacia branca, o imperialismo, o sexismo e o
              racismo{`"`} que hooks menciona se manifestam no campo de vocês?
              Podemos pensar em vieses em algoritmos de reconhecimento facial
              que falham mais com mulheres negras, na cultura de startups que
              replica lógicas de exclusão ou na própria ideia de que a
              tecnologia é {`"`}neutra{`"`} e descolada de contextos sociais e
              de poder.
            </p>
          </div>

          <div className="mt-12 text-center p-6 rounded-lg">
            <p className="text-xl italic text-[rgb(var(--brand-secondary-rgb))]">
              Todos possuímos um lugar de fala. Refletir sobre nossas posições
              sociais nos ajuda a entender como somos afetados e como
              perpetuamos essas estruturas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_Vivencia;
