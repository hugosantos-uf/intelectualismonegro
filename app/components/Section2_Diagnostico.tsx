import React from "react";

const Section2_Diagnostico = () => {
  return (
    <section
      id="secao2"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          {/* Título inspirado em Fanon  */}
          <h2 className="text-4xl font-bold text-brand-primary">
            O Diagnóstico: &quot;As Chagas da Libré Negra&quot;
          </h2>
          <p className="mt-2 text-lg text-brand-secondary font-sans">
            Esta seção explica por que a educação é distorcida, usando os
            argumentos de Matta e Machado.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-brand-primary">
            <h3 className="text-2xl font-bold mb-3 text-brand-text">
              Mentalidade Colonizadora
            </h3>
            <p className="text-brand-secondary">
              A desvalorização histórica do conhecimento produzido por mulheres
              e pela população negra.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-brand-primary">
            <h3 className="text-2xl font-bold mb-3 text-brand-text">
              Epistemologia Eurocêntrica
            </h3>
            <p className="text-brand-secondary">
              Como o conhecimento europeu foi legitimado como o único
              &quot;válido&quot;, tornando outras experiências invisíveis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-brand-primary">
            <h3 className="text-2xl font-bold mb-3 text-brand-text">
              Silenciamento
            </h3>
            <p className="text-brand-secondary">
              A forma como a linguagem dominante e a falta de acesso à educação
              formal funcionaram como ferramentas de controle e exclusão.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center bg-gray-200 p-6 rounded-lg">
          <p className="text-lg italic text-brand-secondary">
            É mencionado que o sujeito subalterno feminino está &quot;ainda mais
            profundamente na obscuridade&quot;.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2_Diagnostico;
