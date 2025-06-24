import React from "react";

const Section5_Referencias = () => {
  return (
    <section
      id="referencias"
      className="py-16 md:py-24 px-6 bg-gray-100" // Cor de fundo ajustada para contraste
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">
            Referências
          </h3>
          <p className="mt-4 text-lg text-brand-secondary max-w-3xl mx-auto font-sans">
            A seguir, as fontes que fundamentaram a construção deste ensaio
            digital.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <ul className="space-y-4 text-brand-secondary text-sm font-sans">
            <li>
              <span className="font-semibold text-brand-text">
                hooks, b. (1994).
              </span>{" "}
              <em>
                Teaching to Transgress: Education as the Practice of Freedom.
              </em>{" "}
              Routledge.
            </li>
            <li>
              <span className="font-semibold text-brand-text">
                Kozlowski, D., Larivière, V., Sugimoto, C. R., & Monroe-White,
                T. (2022).
              </span>{" "}
              Intersectional inequalities in science. <em>PNAS, 119</em>(2).
            </li>
            <li>
              <span className="font-semibold text-brand-text">
                Lobo, M. M. de O., Ribeiro, K. da S. F. M., & Maciel, C.
              </span>{" "}
              Materialidades Discursivas de Mulheres Negras na Computação.
            </li>
            <li>
              <span className="font-semibold text-brand-text">
                Martins, A. J., & Sousa, M. do C. de.
              </span>{" "}
              Perspectivas, tendências e desafios decoloniais na educação
              matemática: uma análise bibliométrica em base de dados.{" "}
              <em>Revista Cocar, 21</em>(39).
            </li>
            <li>
              <span className="font-semibold text-brand-text">
                Melo, A. M., Klauberg, G. M. S., & Mello, A. V. de.
              </span>{" "}
              Divulgação Científica: propostas no Contexto da Curricularização
              da Extensão.
            </li>
            <li>
              <span className="font-semibold text-brand-text">
                Valério, E. D. (2011).
              </span>{" "}
              <em>
                A produção científica sobre os (as) negros (as) nos ENANCIBs: Um
                olhar cientométrico
              </em>{" "}
              [Monografia de Graduação, Universidade Federal do Ceará].
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section5_Referencias;