import React from "react";

const Section1_PontoDePartida = () => {
  return (
    <section
      id="secao1"
      // A imagem de fundo é aplicada diretamente aqui
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-fixed"
    >
      {/* Camada de sobreposição para garantir a legibilidade do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 p-8 max-w-4xl text-center text-white">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A Intelectualidade Negra e a Produção Científica em Ciências da Computação
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl mt-4 mb-12 font-sans">
          Um olhar decolonial sobre a arquitetura da exclusão e as práticas de
          resistência na academia.
        </p>

        {/* Citação em destaque */}
        <blockquote className="text-xl md:text-2xl italic border-l-4 border-white pl-6">
          <p className="uppercase">
            &quot;Se examinarmos criticamente o papel tradicional da
            universidade na busca da verdade e na partilha de conhecimento e
            informação, ficará claro, infelizmente, que as parcialidades que
            sustentam e mantêm a supremacia branca, o imperialismo, o sexismo e
            o racismo distorceram a educação a tal ponto que ela deixou de ser
            uma prática da liberdade.&quot;
          </p>
          <footer className="mt-4 not-italic font-sans">- Bell Hooks</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Section1_PontoDePartida;