import Section1_PontoDePartida from "./components/Section1_PontoDePartida";
import Section2_Diagnostico from "./components/Section2_Diagnostico";
import Section3_Vivencia from "./components/Section3_Vivencia";
import Section4_Caminho from "./components/Section4_Caminho";
import Referencias from "./components/Section5_Referencias";

export default function Home() {
  return (
    <main>
      {/* --- Início: Barra de Navegação Adicionada --- */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">
            Ensaio Decolonial
          </h1>
          <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base">
            <li>
              <a href="#secao2" className="pb-1">
                O Diagnóstico
              </a>
            </li>
            <li>
              <a href="#secao3" className="pb-1">
                Vozes e Barreiras
              </a>
            </li>
            <li>
              <a href="#secao4" className="pb-1">
                A Reinvenção
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* --- Fim: Barra de Navegação Adicionada --- */}

      <Section1_PontoDePartida />
      <Section2_Diagnostico />
      <Section3_Vivencia />
      <Section4_Caminho />
      <Referencias />
    </main>
  );
}