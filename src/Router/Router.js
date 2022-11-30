import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";


export default function Router() {
    const [carrinho, setCarrinho] = useState([])


    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho carrinho={carrinho} setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/cart"
                    element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/cadastro"
                    element={<Cadastro />}
                />

            </Routes>
        </BrowserRouter>
    );
}