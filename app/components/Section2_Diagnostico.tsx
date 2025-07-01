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

        {/* --- CONTEÚDO SUBSTITUÍDO AQUI --- */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-primary mb-16 text-left">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Racismo Epistêmico: A História que Não é Contada
          </h3>
          <p className="text-brand-secondary mb-6">
            Você já se perguntou por que os grandes gênios da matemática e da
            ciência são quase sempre retratados como homens brancos e europeus?
            A resposta está em um processo de apagamento histórico e intelectual
            conhecido como racismo epistêmico.
          </p>

          <img
            src="/img.png"
            alt="Papiro de Ahmes"
            className="w-full rounded-lg shadow-md my-8 object-contain h-auto md:h-64"
          />

          <h4 className="font-bold text-xl mt-8 mb-4 text-brand-text">
            O Papiro de Ahmes: Um Exemplo de Triplo Apagamento
          </h4>
          <p className="text-brand-secondary mb-6">
            Um dos casos mais emblemáticos dessa apropriação histórica é o do
            Papiro de Ahmes, um dos documentos matemáticos mais importantes da
            antiguidade.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-brand-secondary mb-6">
            <li>
              <strong className="text-brand-text">
                Apagamento da Autoria:
              </strong>{" "}
              Escrito por volta de 1650 a.C. pelo escriba egípcio (africano)
              Ahmes, o papiro detalha soluções para 85 problemas complexos de
              aritmética e geometria. Hoje, porém, é mais conhecido como
              &ldquo;Papiro de Rhind&ldquo;, em homenagem ao escocês que o
              adquiriu no Egito em 1858. O nome do autor foi trocado pelo do
              colonizador.
            </li>
            <li>
              <strong className="text-brand-text">
                Apagamento do Conhecimento:
              </strong>{" "}
              A existência do papiro prova que os africanos dominavam a
              matemática avançada milênios antes dos gregos. Ignorar isso é
              negar a origem africana do conhecimento.
            </li>
            <li>
              <strong className="text-brand-text">
                Apagamento do Patrimônio:
              </strong>{" "}
              O artefato físico foi retirado do Egito e hoje pertence ao acervo
              do Museu Britânico, na Inglaterra, longe de seu povo de origem.
            </li>
          </ul>
          <p className="text-brand-secondary mb-8">
            Este não é um caso isolado. O fato de que o chamado &ldquo;Teorema
            de Pitágoras&ldquo; já era conhecido e utilizado na África e na
            Babilônia mais de mil anos antes do nascimento de Pitágoras confirma
            um padrão. O objetivo é claro: manter uma suposta supremacia racial
            na produção do conhecimento.
          </p>

          <h4 className="font-bold text-xl mt-6 mb-4 text-brand-text">
            Racismo Estrutural: A Raiz do Problema
          </h4>
          <p className="text-brand-secondary">
            Esse epistemicídio na ciência é um sintoma de algo muito maior: o
            racismo estrutural. Como define o jurista Silvio Almeida, o racismo
            estrutural não se limita a atitudes individuais. Ele está
            &ldquo;impregnado na estrutura constitutiva da sociedade&ldquo;,
            normalizando práticas, hábitos e discursos que reproduzem a
            desigualdade de forma sistemática.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="mb-16">
          <Timeline />
        </div>

        {/* (O restante do código da seção continua aqui, sem alterações) */}

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
          <h3 className="font-bold text-2xl mb-4 text-center">
            Intelectualidade Negra Feminina
          </h3>
          <blockquote className="italic text-brand-secondary text-center mb-6 border-l-4 border-brand-primary pl-4 py-2">
            “Não podemos deixar de destacar que os entraves à intelectualidade
            negra feminina são mais desafiadores, pois as mulheres negras
            precisam, além do racismo, lutar ainda contra o sexismo, o que faz
            com que o caminho se torne mais difícil.”
          </blockquote>
          <p className="text-brand-secondary mb-8 max-w-3xl mx-auto text-center">
            Dentro da tecnologia, constata-se que nas publicações em periódicos,
            no acervo de dissertações e teses encontradas no Catálogo da CAPES,
            e nos grupos de trabalhos (GTs) da Associação Nacional de
            Pós-Graduação e Pesquisa em Educação (Anped), entre outros, que o
            tema mulheres negras na Computação ainda é discutido em número
            inexpressivo. No Google Trends2 sequer há dados sobre mulheres
            negras em português ou em inglês na computação e tecnologias, bem
            como poucos registros para mulheres em geral
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-16">
            <h3 className="font-bold text-xl mb-4 text-center">
              A Dupla Penalidade da Citação
            </h3>
            <p className="text-brand-secondary mb-8 max-w-3xl mx-auto text-center">
              A desvalorização da produção de grupos minorizados é
              quantificável. O impacto (medido em citações) é consistentemente
              menor para mulheres e especialmente para mulheres negras.
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      Homens Negros
                    </td>
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
                Valores médios baseados em estudos de larga escala que analisam
                o impacto de citações na ciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2_Diagnostico;
