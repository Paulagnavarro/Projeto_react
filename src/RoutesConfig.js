import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Detalhes from './pages/detalhes';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detalhes/:id' element={<Detalhes />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    );
}