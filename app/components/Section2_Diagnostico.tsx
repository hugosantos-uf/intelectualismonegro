import React from "react";

const Section2_Diagnostico = () => {
  return (
    <section
      id="secao2"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-primary">
            O Diagnóstico: A Arquitetura da Exclusão
          </h2>
          <p className="mt-4 text-lg text-brand-secondary font-sans max-w-3xl mx-auto">
            Esta seção diagnostica a natureza estrutural da desigualdade na
            ciência. Através de dados, demonstramos que as disparidades não são
            falhas individuais, mas um sistema com vieses mensuráveis.
          </p>
        </header>

        {/* --- Início: Conteúdo Adicionado --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <h4 className="font-bold text-xl mb-4 text-center">
              Invisibilidade na Ciência da Informação (Brasil)
            </h4>
            <p className="text-brand-secondary mb-6 text-center text-sm">
              Análise do ENANCIB (2005-2010) revela um profundo silenciamento
              sobre a questão racial. Fonte: Valério (2011).
            </p>
            <div className="flex-grow flex items-center justify-around text-center py-4">
              <div>
                <p className="text-4xl md:text-5xl font-bold">982</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Trabalhos Publicados
                </p>
              </div>
              <div className="text-gray-300 text-3xl font-light">→</div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-brand-primary">
                  11
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Sobre Relações Raciais (~1%)
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white w-full p-6 rounded-lg shadow-md border-l-4 border-brand-primary">
              <h4 className="font-bold text-xl mb-2">
                O Apagamento Sistêmico de Dados
              </h4>
              <p className="text-brand-secondary">
                A ausência da coleta sistemática de dados raciais é uma
                política velada que reforça a invisibilidade na prática,
                perpetuando o "mito da democracia racial" e impedindo o combate
                ao racismo estrutural na ciência.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-t-4 border-brand-primary mb-16">
          <h4 className="font-bold text-2xl mb-4 text-center">
            Racismo Epistêmico: A História que Não é Contada
          </h4>
          <p className="text-brand-secondary max-w-3xl mx-auto text-center">
            A exclusão está enraizada na própria história que a ciência conta
            sobre si mesma. O "Teorema de Pitágoras", por exemplo, já era
            conhecido por civilizações na África (Egito) e na Babilônia muito
            antes de seu nascimento. O apagamento dessas origens é um ato de
            racismo epistêmico: a desvalorização de saberes não-europeus para
            manter uma hierarquia racial do conhecimento.
          </p>
        </div>
        {/* --- Fim: Conteúdo Adicionado --- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {/* Cards existentes */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-brand-primary">
            <h3 className="text-2xl font-bold mb-3 text-brand-text">
              Mentalidade Colonizadora
            </h3>
            <p className="text-brand-secondary">
              A desvalorização histórica do conhecimento produzido por mulheres
              e pela população negra.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-brand-primary">
            <h3 className="text-2xl font-bold mb-3 text-brand-text">
              Epistemologia Eurocêntrica
            </h3>
            <p className="text-brand-secondary">
              Como o conhecimento europeu foi legitimado como o único "válido",
              tornando outras experiências invisíveis.
            </p>
          </div>
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
        
        {/* --- Início: Tabela Adicionada --- */}
        <div className="mt-16">
            <h4 className="font-bold text-2xl mb-4 text-center">A Dupla Penalidade da Citação</h4>
            <p className="text-brand-secondary mb-8 max-w-3xl mx-auto text-center">
                A desvalorização da produção de grupos minorizados é quantificável. O impacto (medido em citações) é consistentemente menor para mulheres e especialmente para mulheres negras.
            </p>
            <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grupo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fator de Impacto (Normalizado)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr><td className="px-6 py-4">Homens Brancos</td><td className="px-6 py-4">1.28</td></tr>
                        <tr><td className="px-6 py-4">Mulheres Brancas</td><td className="px-6 py-4">1.01</td></tr>
                        <tr><td className="px-6 py-4">Homens Negros</td><td className="px-6 py-4">0.83</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Mulheres Negras</td><td className="px-6 py-4 font-bold">0.66</td></tr>
                    </tbody>
                </table>
                 <p className="text-xs text-gray-500 mt-2 text-center">Valores médios baseados nos dados do gráfico para diferentes áreas do conhecimento.</p>
            </div>
        </div>
        {/* --- Fim: Tabela Adicionada --- */}
      </div>
    </section>
  );
};

export default Section2_Diagnostico;