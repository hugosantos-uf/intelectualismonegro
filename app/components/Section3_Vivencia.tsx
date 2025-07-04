import React from "react";

const Section3_Vivencia = () => {
  return (
    <section
      id="secao3"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold">A Vivência: Vozes e Barreiras</h2>
          <p className="mt-4 text-lg text-brand-secondary font-sans max-w-3xl mx-auto">
            Como a descolonização do conhecimento desafia o saber tradicional e
            quais são os obstáculos concretos enfrentados.
          </p>
        </header>

        {/* Narrativas de Resistência */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Narrativas de Resistência: Duas Realidades
          </h3>
          <p className="text-brand-secondary mb-8 max-w-4xl mx-auto text-center">
            As trajetórias da cientista da NASA Annie Easley (EUA) e da gerente
            da IBM Flávia Roberta Silva (Brasil) ilustram como diferentes
            contextos de racismo moldam as estratégias de resistência.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Card Annie Easley */}
            <div className="flex flex-col border-l-4 border-brand-primary pl-4">
              <h4 className="font-semibold text-lg mb-2">
                Annie Easley (EUA): &quot;Preconceito de Origem&quot;
              </h4>
              <blockquote className="text-lg italic text-brand-text mb-3">
                &quot;Nada jamais foi dado às minorias ou às mulheres.&quot;
              </blockquote>
              <p className="text-brand-secondary">
                Sua luta ocorreu em um contexto de segregação racial explícita.
                Sua narrativa é marcada por uma consciência coletiva,
                posicionando-se como parte de um grupo em uma luta estrutural.
              </p>
            </div>
            {/* Card Flávia R. Silva */}
            <div className="flex flex-col border-l-4 border-brand-primary pl-4">
              <h5 className="font-semibold text-lg mb-2">
                Flávia R. Silva (Brasil): &quot;Preconceito de Marca&quot;
              </h5>
              <blockquote className="text-lg italic text-brand-text mb-3">
                &quot;Eu nunca me senti menor... Muitos negros ainda não
                enxergam as oportunidades.&quot;
              </blockquote>
              <p className="text-brand-secondary">
                Sua experiência está inserida no mito da &quot;democracia
                racial&quot;. Seu discurso de sucesso é construído sobre o
                individualismo, transferindo a responsabilidade do plano
                estrutural para o individual.
              </p>
            </div>
          </div>
        </div>

        {/* Obstáculos Sistêmicos */}
        <div>
          <h3 className="font-bold text-2xl mb-8 text-center">
            Obstáculos Sistêmicos na Academia e no Mercado
          </h3>
          {/* Grid responsivo com altura igualada */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h4 className="font-semibold text-lg mb-2">Pressão Constante</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                77% das mulheres negras em alta tecnologia sentem que precisam
                provar sua competência de forma mais intensa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h4 className="font-semibold text-lg mb-2">
                Violência Epistêmica
              </h4>
              <p className="text-brand-secondary text-sm flex-grow">
                O apagamento da contribuição intelectual negra, como o caso de
                Annie Easley cortada de fotos oficiais da NASA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h4 className="font-semibold text-lg mb-2">Falta de Mentoria</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                A dificuldade em encontrar orientadores que trabalhem com
                temáticas raciais é um obstáculo para a permanência na
                pós-graduação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h4 className="font-semibold text-lg mb-2">
                Vieses Institucionais
              </h4>
              <p className="text-brand-secondary text-sm flex-grow">
                O racismo se manifesta em políticas, estereótipos e vieses em
                processos de contratação, revisão por pares e financiamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_Vivencia;
