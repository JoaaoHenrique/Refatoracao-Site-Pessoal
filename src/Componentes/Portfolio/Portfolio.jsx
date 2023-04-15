import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";
import portfolio from "./Portfolio.json"

import img from "../../assets/Perfil.jpg"
import img2 from "../../assets/Cachorro.png"

function Portfolio() {
    const images = [img, img2, img2]

    return (
        <>
            <h1 className="tittle">Portfólio</h1>

            <main>

                {portfolio.map(
                    (item, index) =>
                        <ItemPortfolio
                            key={index}
                            link={item.link}
                            image={images[index]}
                            title={item.title}
                        ></ItemPortfolio>
                )}

            </main>
        </>
    )
}

export default Portfolio