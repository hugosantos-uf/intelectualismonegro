import React from "react";
import Timeline from "./Timeline"; // Certifique-se que o componente Timeline está na pasta correta

const Section2_Diagnostico = () => {
  return (
    <section
      id="secao2"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-primary">
            O Diagnóstico: A Arquitetura da Exclusão
          </h2>
          <p className="mt-4 text-lg text-brand-secondary font-sans max-w-3xl mx-auto">
            Esta seção diagnostica a natureza estrutural da desigualdade na
            ciência. Através de dados, demonstramos que as disparidades não são
            falhas individuais, mas um sistema com vieses mensuráveis.
          </p>
        </header>

        {/* Racismo Epistêmico */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-primary mb-16">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Racismo Epistêmico: A História que Não é Contada
          </h3>
          <p className="text-brand-secondary max-w-3xl mx-auto text-center">
            A exclusão está enraizada na própria história que a ciência conta
            sobre si mesma. O &quot;Teorema de Pitágoras&quot;, por exemplo, já
            era conhecido por civilizações na África (Egito) e na Babilônia
            muito antes de seu nascimento. O apagamento dessas origens é um ato
            de racismo epistêmico: a desvalorização de saberes não-europeus para
            manter uma hierarquia racial do conhecimento.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="mb-16">
          <Timeline />
        </div>

        {/* Cards de Conceitos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans mb-16">
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
              Como o conhecimento europeu foi legitimado como o único
              &quot;válido&quot;, tornando outras experiências invisíveis.
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

        {/* Tabela de Dupla Penalidade */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-16">
          <h3 className="font-bold text-2xl mb-4 text-center">
            A Dupla Penalidade da Citação
          </h3>
          <p className="text-brand-secondary mb-8 max-w-3xl mx-auto text-center">
            A desvalorização da produção de grupos minorizados é quantificável.
            O impacto (medido em citações) é consistentemente menor para
            mulheres e especialmente para mulheres negras.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Grupo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fator de Impacto (Normalizado)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Homens Brancos
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">1.28</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Mulheres Brancas
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">1.01</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Homens Negros</td>
                  <td className="px-6 py-4 whitespace-nowrap">0.83</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">
                    Mulheres Negras
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">
                    0.66
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Valores médios baseados em estudos de larga escala que analisam o
              impacto de citações na ciência.
            </p>
          </div>
        </div>

        {/* Card de Invisibilidade */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center mb-16">
          <h3 className="font-bold text-xl mb-2 text-center">
            Invisibilidade na Ciência da Informação (Brasil)
          </h3>
          <p className="text-brand-secondary mb-6 text-center text-sm">
            Análise do ENANCIB (2005-2010) revela um profundo silenciamento
            sobre a questão racial.{" "}
            <span className="italic">Fonte: Valério (2011)</span>.
          </p>
          <div className="flex items-center justify-around text-center py-4">
            <div className="px-2">
              <p className="text-4xl md:text-5xl font-bold">982</p>
              <p className="text-xs text-gray-500 mt-1">Trabalhos Publicados</p>
            </div>
            <div
              className="text-gray-300 text-3xl font-light"
              aria-hidden="true"
            >
              →
            </div>
            <div className="px-2">
              <p className="text-4xl md:text-5xl font-bold text-brand-primary">
                11
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sobre Relações Raciais (~1%)
              </p>
            </div>
          </div>
        </div>

        {/* Card sobre Intelectualidade Negra Feminina */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-4 text-center">
            Intelectualidade Negra Feminina
          </h3>
          <blockquote className="italic text-brand-secondary text-center mb-6 border-l-4 border-brand-primary pl-4 py-2">
            “Não podemos deixar de destacar que os entraves à intelectualidade
            negra feminina são mais desafiadores, pois as mulheres negras
            precisam, além do racismo, lutar ainda contra o sexismo, o que faz
            com que o caminho se torne mais difícil.”
          </blockquote>
          {/* --- ALTERAÇÃO AQUI --- */}
          <div className="text-base text-brand-secondary space-y-4 text-left">
            <p>
              Outros estudos em larga escala demonstram que existe uma
              &quote;dupla penalidade&quote; para esses cientistas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Desvantagem entre Tópicos:</strong> Grupos minorizados
                tendem a pesquisar temas ligados às suas comunidades (como
                desigualdade e saúde pública), que, por sua vez, são
                sistematicamente menos citados e financiados pela comunidade
                científica em geral.
              </li>
              <li>
                <strong>Desvantagem dentro do Tópico:</strong> Mesmo quando
                publicam sobre os mesmos temas que os grupos hegemônicos, seus
                trabalhos tendem a ser menos citados, indicando um viés na
                avaliação do mérito.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2_Diagnostico;
