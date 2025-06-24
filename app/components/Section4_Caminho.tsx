import React from "react";

const Section4_Caminho = () => {
  return (
    <section
      id="secao4"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-primary">
            O Caminho: Práticas de Reinvenção
          </h2>
          <p className="mt-2 text-lg text-brand-secondary font-sans">
            Diante da exclusão, intelectuais, estudantes e comunidades negras
            criam novas formas de produzir, validar e disseminar conhecimento.
          </p>
        </header>

        {/* --- Início: Conteúdo Adicionado --- */}
        <div className=" text-center items-center mb-16 md:mb-24">
          <div>
            <h4 className="font-bold text-2xl mb-4">
              Reinventando o Currículo: O Exemplo da Unipampa
            </h4>
            <p className="text-brand-secondary mb-4 ">
              Em cursos de Computação, estudantes se tornam produtores de
              conhecimento ao criar materiais sobre figuras marginalizadas. Este
              material é usado em ações com a comunidade, criando um ciclo
              virtuoso de decolonização do saber e capacitando os estudantes
              como agentes de transformação.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-2xl mb-8 text-center">
            Ecossistema de Resistência e Apoio
          </h4>
          <p className="text-brand-secondary mb-8 max-w-3xl mx-auto text-center">
            Em resposta às barreiras, um vibrante ecossistema de coletivos
            emergiu no Brasil para promover a inclusão, preenchendo as lacunas
            deixadas pelas instituições tradicionais.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h5 className="font-semibold text-lg mb-2">PretaLab</h5>
              <p className="text-brand-secondary text-sm">
                Oferece qualificação técnica gratuita em tecnologia, com foco
                especial em mulheres negras e indígenas.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h5 className="font-semibold text-lg mb-2">AfroPython</h5>
              <p className="text-brand-secondary text-sm">
                Leva o ensino de programação diretamente para as comunidades,
                criando espaços de aprendizado seguros e acessíveis.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h5 className="font-semibold text-lg mb-2">Black STEM</h5>
              <p className="text-brand-secondary text-sm">
                Fundo que oferece bolsas para que estudantes negros cursem
                graduação em áreas STEM no exterior.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h5 className="font-semibold text-lg mb-2">
                Enegrecer a Tecnologia
              </h5>
              <p className="text-brand-secondary text-sm">
                Programa que foca em construir pontes e redes de conexão entre
                profissionais negros e empresas de tecnologia.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h5 className="font-semibold text-lg mb-2">{"{reprograma}"}</h5>
              <p className="text-brand-secondary text-sm">
                Iniciativa que oferece qualificação gratuita em programação para
                mulheres, com alta inclusão de mulheres negras.
              </p>
            </div>
          </div>
        </div>
        {/* --- Fim: Conteúdo Adicionado --- */}

<footer className="mt-20 text-center bg-brand-text text-black p-10 rounded-lg">
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