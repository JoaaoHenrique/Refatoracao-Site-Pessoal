import React from "react";

import "./Cabecalho.css";

import joaoAvatar from "../../assets/Ellipse 1.png"

function Cabecalho() {
    return (
        <header>
            <img src={joaoAvatar} alt="Foto de João Henrique" srcSet="" />
            <h1>João Henrique Véras</h1>
            <h3>Aluno Colmeia Academy</h3>
        </header>
    )
}

export default Cabecalho