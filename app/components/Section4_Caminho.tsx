import React from "react";

const Section4_Caminho = () => {
  return (
    <section
      id="secao4"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgb(var(--brand-primary-rgb))]">
            O Caminho: {`"`}Descolonizar o Conhecimento{`"`}
          </h2>
          <p className="mt-2 text-lg text-[rgb(var(--brand-secondary-rgb))] font-sans">
            Esta seção final apresenta as soluções e resistências apontadas no
            texto.
          </p>
        </header>

        <div className="space-y-8 font-sans">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-[rgb(var(--brand-text-rgb))] mb-2">
              1. Ressignificar
            </h3>
            <p className="text-[rgb(var(--brand-secondary-rgb))]">
              Mostrar como o movimento negro vê a educação como ferramenta de
              emancipação e luta contra o racismo e a discriminação.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-[rgb(var(--brand-text-rgb))] mb-2">
              2. Ocupar Espaços
            </h3>
            <p className="text-[rgb(var(--brand-secondary-rgb))]">
              A importância de intelectuais negros passarem de {`"`}objetos de
              pesquisas{`"`} para {`"`}sujeitos produtores de saber{`"`}.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-[rgb(var(--brand-text-rgb))] mb-2">
              3. Reinventar
            </h3>
            <p className="text-[rgb(var(--brand-secondary-rgb))]">
              O papel da descolonização do conhecimento para criar uma educação
              inclusiva e romper com paradigmas dominantes.
            </p>
          </div>
        </div>

        {/* O rodapé agora é preto com texto branco, para um visual coeso e de alto contraste */}
        <footer className="mt-20 text-center bg-[rgb(var(--brand-text-rgb))] text-white p-10 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Para iniciar o debate...</h3>
          <p className="text-2xl italic">
            {`"`}E nós, como podemos praticar a descolonização em nosso dia a
            dia na universidade?{`"`}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Section4_Caminho;
