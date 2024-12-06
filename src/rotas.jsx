import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login.jsx";
// import { SignUp } from "./pages/signup/signup.jsx";
// import Register from "./pages/register/register.jsx";
import Onibus from "./pages/onibus/onibus.jsx";
import OnibusAdd from "./pages/onibus-add/onibus-add.jsx";
import OnibusEdit from "./pages/onibus-edit/onibus-edit.jsx";
// import Coordenadores from "./pages/coordenadores/coordenadores.jsx";
// import CoordenadoresAdd from "./pages/coordenadores-add/coordenadores-add.jsx";
// import Excursoes from "./pages/excursoes/excursoes.jsx";
import Usuarios from "./pages/usuarios/usuarios.jsx";
import UsuariosAdd from "./pages/usuarios/usuarios-add.jsx";
import UsuariosEdit from "./pages/usuarios/usuarios-edit.jsx";
import Reservas from "./pages/reservas/reservas.jsx";
import ReservasAdd from "./pages/reservas-add/reservas-add.jsx";
import ReservasEdit from "./pages/reservas-edit/reservas-edit.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/conexaoaparecida-front/" element={<Login />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/conexaoaparecida-front/reservas" element={<Reservas />} />
            <Route path="/conexaoaparecida-front/reservas/add" element={<ReservasAdd />} />
            <Route path="/conexaoaparecida-front/reservas/edit/:id_reserva" element={<ReservasEdit />} />
            <Route path="/conexaoaparecida-front/onibus" element={<Onibus />} />
            <Route path="/conexaoaparecida-front/onibus/add" element={<OnibusAdd />} />
            <Route path="/conexaoaparecida-front/onibus/edit/:id" element={<OnibusEdit />} />
            {/* <Route path="/conexaoaparecida-front/coordenadores" element={<Coordenadores />} />
            <Route path="/conexaoaparecida-front/coordenadores/add" element={<CoordenadoresAdd />} />
            <Route path="/conexaoaparecida-front/coordenadores/edit/:id" element={<CoordenadoresAdd />} />
            <Route path="/conexaoaparecida-front/excursoes" element={<Excursoes />} />
            <Route path="/conexaoaparecida-front/excursoes/add" element={<ExcursoesAdd />} />
            <Route path="/conexaoaparecida-front/excursoes/edit/:id" element={<ExcursoesAdd />} /> */}
            <Route path="/conexaoaparecida-front/usuarios" element={<Usuarios />} />
            <Route path="/conexaoaparecida-front/usuarios/add" element={<UsuariosAdd />} />
            <Route path="/conexaoaparecida-front/usuarios/edit/:id" element={<UsuariosEdit />} />
            {/* <Route path="/conexaoaparecida-front/passageiros" element={<Passageiros />} />
            <Route path="/conexaoaparecida-front/assentos" element={<Assentos />} />
            <Route path="/conexaoaparecida-front/assentos/add" element={<AssentosAdd />} />
            <Route path="/conexaoaparecida-front/assentos/edit/:id" element={<AssentosAdd />} /> */}
        </Routes>
    </BrowserRouter>
}

export default Rotas;