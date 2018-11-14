---
title: Free Code Camp Style Guide for Algorithms
localeTitle: Guía de estilo de Code Camp gratis para algoritmos
---
Escribir desafíos de algoritmos es una excelente manera de ejercitar sus propias habilidades de resolución de problemas y pruebas. Siga este proceso de cerca para maximizar las posibilidades de que aceptemos su algoritmo.

*   `seed_data/Algorithms.json` repositorio de Free Code Camp y abra `seed_data/Algorithms.json` para familiarizarse con el formato de nuestros algoritmos.
*   Independientemente de la dificultad de su algoritmo, póngalo como el último algoritmo en el archivo JSON. Cambie uno de los números en la identificación para asegurarse de que su algoritmo tenga una identificación única.
*   En el terminal, ejecute el `node seed_data/seed.js` Ejecutar `gulp` . Debería poder navegar a su nuevo algoritmo en el mapa de desafío. Cada vez que realice un cambio en Algorithm.json, deberá volver a sembrar para ver estos cambios en el navegador.
*   Resuelve tu propio algoritmo. Confirme que sus pruebas funcionan como se espera y que sus instrucciones son lo suficientemente claras.
*   Envíe una solicitud de extracción a la sucursal de Preparación de Free Code Camp y, en el cuerpo de la solicitud de extracción, haga un enlace a una idea que tenga su solución algorítmica.

Aquí hay una descripción de cada uno de los campos de los algoritmos.

*   Nombre - El nombre de tu desafío. Está bien que esto sea gracioso, pero debe ser breve y relevante para la tarea.
*   Dificultad: intente clasificar la dificultad en comparación con los desafíos existentes del algoritmo. Un buen proxy para la dificultad de un algoritmo es el tiempo que le lleva resolverlo. Por cada 15 minutos que lleva, aumentar la dificultad. Por ejemplo, un algoritmo de una hora probablemente debería ser un 4.
*   Descripción: párrafos separados con un salto de línea. Solo el primer párrafo es visible antes de un usuario antes de que haga clic en el botón "Más información". Toda la información necesaria debe ser incluida en el primer párrafo. Escribe este primer párrafo tan sucintamente como sea posible. Los párrafos subsiguientes deben ofrecer sugerencias o detalles si es necesario. Si su tema requiere una comprensión más profunda, puede enlazar a Wikipedia.
*   Challenge Seed: aquí es donde se configura lo que estará en el editor cuando el campista inicie el algoritmo.
*   Pruebas: estas pruebas son las que le dan vida a su desafío. Sin ellos, no podemos confirmar la exactitud de la respuesta enviada por un usuario. Elija sus pruebas con prudencia. Las pruebas de algoritmo se escriben utilizando la biblioteca de aserción Chai.js. Por favor use la sintaxis must y expect para la legibilidad del usuario final. Como ejemplo de lo que no se debe hacer, muchos de los desafíos del algoritmo original se escriben con sintaxis de afirmación y muchos de los casos de prueba son difíciles de leer. Si su pregunta de algoritmo tiene muchos casos de borde, tendrá que escribir muchas pruebas para una cobertura completa. Si se encuentra escribiendo más pruebas de las que desea, puede considerar simplificar los requisitos de su desafío de algoritmo. Para los niveles de dificultad 1 a 3, generalmente solo necesitará de 2 a 4 pruebas.
*   MDNlinks- Eche un vistazo a `seed_data/bonfireMDNlinks.js` . Si alguno de estos conceptos es relevante para su algoritmo, asegúrese de incluirlos. Si conoce un artículo de MDN que no está vinculado aquí, puede agregarlo al archivo bonfireMDNlinks.js antes de agregarlo a su algoritmo.