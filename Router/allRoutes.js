import Route from "./Route.js";

//Définir ici vos routes et ajoutez dossier "pages" et dedans un dossier "home.html" comme définit ici dans ce tableau
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";