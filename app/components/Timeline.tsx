// app/components/Timeline.tsx

import React from "react";

const timelineData = [
  {
    year: "1824",
    description:
      'Negros são considerados seres "semi-moventes" pela <a href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao24.htm" target="_blank" class="underline text-blue-600">Constituição de 1824</a>, que manteve a escravidão.',
  },
  {
    year: "1837-1839",
    description:
      '"Pessoas que padecem de moléstias contagiosas" e "Escravos e pretos africanos, ainda que sejam livres ou libertos" não poderiam frequentar as escolas públicas <a href="https://www.trf5.jus.br/index.php/noticias/leitura-de-noticias?/id=325255#:~:text=Leis%20estaduais%20tamb%C3%A9m%20refor%C3%A7aram%20proibi%C3%A7%C3%A3o%20de%20acesso,libertos%2C%20de%20frequentar%20as%20escolas%20p%C3%BAblicas%20(Art.&text=Esta%20lei%20n%C3%A3o%20foi%20aplicada%20aos%20imigrantes%20europeus." target="_blank" class="underline text-blue-600">Decreto nº 15 de 1839 e Lei nº 1 de 1837</a>.',
  },
  {
    year: "1850",
    description:
      'Acesso à terra é dificultado pela <a href="http://www.planalto.gov.br/ccivil_03/leis/l0601-1850.htm" target="_blank" class="underline text-blue-600">Lei de Terras (Lei nº 601)</a>.',
  },
  {
    year: "1888",
    description:
      'A <a href="http://www.planalto.gov.br/ccivil_03/leis/lim/lim3353.htm" target="_blank" class="underline text-blue-600">Lei Áurea (nº 3.353)</a> abole oficialmente a escravidão.',
  },
  {
    year: "1890",
    description:
      'Vadiagem e capoeira são criminalizadas pelo <a href="http://www.planalto.gov.br/ccivil_03/decreto/1851-1899/d847.htm" target="_blank" class="underline text-blue-600">Código Penal de 1890 (Decreto 847)</a>.',
  },
  {
    year: "1911",
    description:
      'Branqueamento Racial <a href="https://www2.camara.leg.br/legin/fed/decret/1910-1919/decreto-9081-3-novembro-1911-523578-republicacao-102836-pe.html" target="_blank" class="underline text-blue-600">Lei 9081</a>, incentivando a imigração europeia.',
  },
  {
    year: "1934",
    description:
      'A <a href="http://www.planalto.gov.br/ccivil_03/constituicao/constituicao34.htm" target="_blank" class="underline text-blue-600">Constituição de 1934</a> inclui preceitos eugenistas (Art. 138).',
  },
  {
    year: "1937",
    description:
      'A Frente Negra Brasileira é fechada, junto com outros partidos, pelo regime do Estado Novo, instituído pela <a href="http://www.planalto.gov.br/ccivil_03/constituicao/constituicao37.htm" target="_blank" class="underline text-blue-600">Constituição de 1937</a>.',
  },
  {
    year: "1968",
    description:
      'A <a href="https://www2.camara.leg.br/legin/fed/lei/1960-1969/lei-5465-3-julho-1968-358564-norma-pl.html" target="_blank" class="underline text-blue-600">"Lei do Boi" (Lei nº 5.465)</a> cria cotas para filhos de proprietários rurais.',
  },
  {
    year: "1988",
    description:
      'A <a href="http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" target="_blank" class="underline text-blue-600">Constituição Federal de 1988</a> torna o racismo crime inafiançável (Art. 5º, XLII).',
  },
  {
    year: "2001",
    description:
      'A <a href="https://pt.wikipedia.org/wiki/Confer%C3%AAncia_Mundial_contra_o_Racismo_de_2001" target="_blank" class="underline text-blue-600">Conferência de Durban</a> (ONU) impulsiona o debate sobre ações afirmativas no Brasil.',
  },
  {
    year: "2012",
    description:
      'STF confirma a constitucionalidade das cotas raciais no julgamento da <a href="https://portal.stf.jus.br/processos/detalhe.asp?incidente=2692731" target="_blank" class="underline text-blue-600">ADPF 186</a>.',
  },
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="font-bold text-3xl mb-16 text-center text-brand-text">
        Linha do Tempo: Legislação e Questões Raciais no Brasil
      </h3>
      <div className="relative">
        <div className="absolute top-0 h-full w-0.5 bg-black/80 left-4 md:left-1/2 md:-translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "hidden md:block"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="font-bold text-black text-lg">{item.year}</p>
                    <p
                      className="text-sm text-brand-secondary leading-snug tracking-wide mt-1"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                )}
              </div>

              <div className="absolute md:relative left-4 md:left-auto md:mx-auto z-10">
                <div className="w-3 h-3 rounded-full bg-black"></div>
              </div>

              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "hidden md:block" : "md:pl-8"
                }`}
              >
                {index % 2 !== 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-lg ml-10 md:ml-0">
                    <p className="font-bold text-black text-lg">{item.year}</p>
                    <p
                      className="text-sm text-brand-secondary leading-snug tracking-wide mt-1"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                )}
                {index % 2 === 0 && (
                  <div className="md:hidden bg-white p-6 rounded-lg shadow-lg ml-10">
                    <p className="font-bold text-black text-lg">{item.year}</p>
                    <p
                      className="text-sm text-brand-secondary leading-snug tracking-wide mt-1"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
