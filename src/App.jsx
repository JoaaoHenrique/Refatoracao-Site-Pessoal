import React from "react";

import "./App.css";

import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Rodape from "./Componentes/Rodape/Rodape";
import BarraNavegacao from "./Componentes/BarraNavegacao/BarraNavegacao";

import Curriculo from "./Componentes/Curriculo/Curriculo";
import Portfolio from "./Componentes/Portfolio/Portfolio";
import Contato from "./Componentes/Contato/Contato";


import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>

        <BarraNavegacao></BarraNavegacao>

        <Cabecalho></Cabecalho>

        <Routes>
          <Route index element={<Curriculo />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Rodape></Rodape>

    </>

  )
}

export default App;