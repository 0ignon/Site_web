document.addEventListener("DOMContentLoaded",() => {
    const description = {
        "web.jpeg":     "Ce premier projet réaliser au cour de mon parcour PEI (prépa intégrée a l'ENSIBS)"    ,
        "soon.png":   "Je n'ais pas encore réaliser beaucoup de projet, mais j'ai des idées!    "    ,
        
    };


const zone = document.getElementById("description-text");
document.addEventListener("click",(e) => {

    const nom = e.target.getAttribute("src");
    zone.textContent = description[nom] || "aucune description disponible";
});
});