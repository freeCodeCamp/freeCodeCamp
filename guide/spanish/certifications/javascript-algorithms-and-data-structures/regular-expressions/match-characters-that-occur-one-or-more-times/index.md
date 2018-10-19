---
title: Match Characters that Occur One or More Times
localeTitle: Relacionar los caracteres que ocurren una o más veces
---
## Relacionar los caracteres que ocurren una o más veces

\## el problema: Desea encontrar coincidencias cuando la letra s aparece una o más veces en "Mississippi". Escribe una expresión regular que use el signo +. ## la solución

let difficultSpelling = "Mississippi"; deja myRegex = / s + / g; // esta es la solución deja result = difficultSpelling.match (myRegex);