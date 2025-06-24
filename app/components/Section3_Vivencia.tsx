import React from "react";

const Section3_Vivencia = () => {
  return (
    <section
      id="secao3"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8 bg-gray-100" // Fundo alterado para contraste
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            A Vivência: Vozes e Barreiras
          </h2>
          <p className="mt-2 text-lg text-brand-secondary font-sans">
            Como a descolonização do conhecimento desafia o saber tradicional e
            quais são os obstáculos concretos enfrentados.
          </p>
        </header>

        {/* --- Início: Conteúdo Adicionado --- */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-16">
          <h4 className="font-bold text-2xl mb-4 text-center">
            Narrativas de Resistência: Duas Realidades
          </h4>
          <p className="text-brand-secondary mb-8 max-w-4xl mx-auto text-center">
            As trajetórias da cientista da NASA Annie Easley (EUA) e da gerente
            da IBM Flávia Roberta Silva (Brasil) ilustram como diferentes
            contextos de racismo moldam as estratégias de resistência.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="border-l-4 border-brand-primary pl-4">
              <h5 className="font-semibold text-lg mb-2">
                Annie Easley (EUA): "Preconceito de Origem"
              </h5>
              <blockquote className="text-lg italic text-brand-text mb-3">
                "Nada jamais foi dado às minorias ou às mulheres."
              </blockquote>
              <p className="text-brand-secondary">
                Sua luta ocorreu em um contexto de segregação racial explícita.
                Sua narrativa é marcada por uma consciência coletiva,
                posicionando-se como parte de um grupo em uma luta estrutural.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h5 className="font-semibold text-lg mb-2">
                Flávia R. Silva (Brasil): "Preconceito de Marca"
              </h5>
              <blockquote className="text-lg italic text-brand-text mb-3">
                "Eu nunca me senti menor... Muitos negros ainda não enxergam as
                oportunidades."
              </blockquote>
              <p className="text-brand-secondary">
                Sua experiência está inserida no mito da "democracia racial".
                Seu discurso de sucesso é construído sobre o individualismo,
                transferindo a responsabilidade do plano estrutural para o
                individual.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-2xl mb-8 text-center">
            Obstáculos Sistêmicos na Academia e no Mercado
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="font-semibold text-lg mb-2">Pressão Constante</h5>
              <p className="text-brand-secondary text-sm">
                77% das mulheres negras em alta tecnologia sentem que precisam
                provar sua competência de forma mais intensa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="font-semibold text-lg mb-2">
                Violência Epistêmica
              </h5>
              <p className="text-brand-secondary text-sm">
                O apagamento da contribuição intelectual negra, como o caso de
                Annie Easley cortada de fotos oficiais da NASA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="font-semibold text-lg mb-2">Falta de Mentoria</h5>
              <p className="text-brand-secondary text-sm">
                A dificuldade em encontrar orientadores que trabalhem com
                temáticas raciais é um obstáculo para a permanência na
                pós-graduação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="font-semibold text-lg mb-2">
                Vieses Institucionais
              </h5>
              <p className="text-brand-secondary text-sm">
                O racismo se manifesta em políticas, estereótipos e vieses em
                processos de contratação, revisão por pares e financiamento.
              </p>
            </div>
          </div>
        </div>
        {/* --- Fim: Conteúdo Adicionado --- */}
      </div>
    </section>
  );
};

export default Section3_Vivencia;