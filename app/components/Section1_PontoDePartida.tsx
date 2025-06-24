import React from "react";

const Section1_PontoDePartida = () => {
  return (
    <section
      id="secao1"
      // A imagem de fundo é aplicada diretamente aqui, sem depender do tailwind.config.ts
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')]"
    >
      {/* Camada de sobreposição para garantir a legibilidade do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 p-8 max-w-4xl text-center text-white">
        {/* A fonte padrão do body já é 'serif', então a classe não é necessária aqui */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          O Ponto de Partida: &quot;Uma Prática da Liberdade?&quot;
        </h1>
        <blockquote className="text-xl md:text-2xl italic">
          <p>
            &quot;Se examinarmos criticamente o papel tradicional da
            universidade na busca da verdade e na partilha de conhecimento e
            informação, ficará claro, infelizmente, que as parcialidades que
            sustentam e mantêm a supremacia branca, o imperialismo, o sexismo e
            o racismo distorceram a educação a tal ponto que ela deixou de ser
            uma prática da liberdade.&quot;
          </p>
          {/* Usamos a classe font-sans para aplicar a fonte sem serifa, conforme definido no globals.css */}
          <footer className="mt-4 not-italic font-sans">- bell hooks</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Section1_PontoDePartida;
