import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio/Inicio'
import Indicacoes from '../pages/Projetos/projetos'
import Depoimentos from '../pages/Depoimentos/depoimentos'

import Menu from '../Componentes/Menu/Menu'
import Projetos from '../pages/Projetos/projetos'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="projetos" element={<Projetos/>} />
                    <Route path="depoimentos" element={<Depoimentos/>} />   
               </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes