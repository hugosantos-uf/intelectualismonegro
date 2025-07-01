import React from "react";

const Section4_Caminho = () => {
  return (
    <section
      id="secao4"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-primary">
            O Caminho: Práticas de Reinvenção
          </h2>
          <p className="mt-4 text-lg text-brand-secondary font-sans max-w-3xl mx-auto">
            Diante da exclusão, intelectuais, estudantes e comunidades negras
            criam novas formas de produzir, validar e disseminar conhecimento.
          </p>
        </header>

        {/* Ecossistema de Resistência */}
        <div className="mb-20">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Ecossistema de Resistência e Apoio
          </h3>
          <p className="text-brand-secondary mb-12 max-w-3xl mx-auto text-center">
            Em resposta às barreiras, um vibrante ecossistema de coletivos
            emergiu no Brasil para promover a inclusão, preenchendo as lacunas
            deixadas pelas instituições tradicionais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {/* Cards do ecossistema */}
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
              <h4 className="font-semibold text-lg mb-2">PretaLab</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                Oferece qualificação técnica gratuita em tecnologia, com foco
                especial em mulheres negras e indígenas.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
              <h4 className="font-semibold text-lg mb-2">AfroPython</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                Leva o ensino de programação diretamente para as comunidades,
                criando espaços de aprendizado seguros e acessíveis.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
              <h4 className="font-semibold text-lg mb-2">Black STEM</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                Fundo que oferece bolsas para que estudantes negros cursem
                graduação em áreas STEM no exterior.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
              <h4 className="font-semibold text-lg mb-2">
                Enegrecer a Tecnologia
              </h4>
              <p className="text-brand-secondary text-sm flex-grow">
                Programa que foca em construir pontes e redes de conexão entre
                profissionais negros e empresas de tecnologia.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
              <h4 className="font-semibold text-lg mb-2">{"{reprograma}"}</h4>
              <p className="text-brand-secondary text-sm flex-grow">
                Iniciativa que oferece qualificação gratuita em programação para
                mulheres, com alta inclusão de mulheres negras.
              </p>
            </div>
            {/* Você pode adicionar um sexto card aqui para preencher a grade em telas maiores, se desejar */}
          </div>
        </div>

        {/* Footer/Citação Final */}
        <footer className="text-center bg-brand-text text-black p-10 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Para iniciar o debate...</h3>
          <p className="text-2xl italic">
            &quot;E nós, como podemos praticar a descolonização em nosso dia a
            dia na universidade?&quot;
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Section4_Caminho;
