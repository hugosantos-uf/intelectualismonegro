import Section1_PontoDePartida from "./components/Section1_PontoDePartida";
import Section2_Diagnostico from "./components/Section2_Diagnostico";
import Section3_Vivencia from "./components/Section3_Vivencia";
import Section4_Caminho from "./components/Section4_Caminho";

export default function Home() {
  return (
    <main>
      <Section1_PontoDePartida />
      <Section2_Diagnostico />
      <Section3_Vivencia />
      <Section4_Caminho />
    </main>
  );
}
