---
id: 587d7fa6367417b2b2512bbf
title: Visualiza datos con un mapa coroplético
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Objetivo:** crea una app que sea funcionalmente similar a esta: <a href="https://choropleth-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://choropleth-map.freecodecamp.rocks</a>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar HTML, JavaScript, CSS y la librería D3 de visualización basada en svg. Required DOM elements are queried on the moment of each test. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de usuario #1:** Mi coroplético debe tener un título con su correspondiente `id="title"`.

**Historia de usuario #2:** Mi coroplético debe tener una descripción con su correspondiente `id="description"`.

**Historia de usuario #3:** Mi coroplético debe tener condados con su correspondiente `class="county"` que represente el dato.

**Historia de usuario #4:** Debe haber al menos 4 colores de relleno diferentes para los condados.

**Historia de usuario #5:** Cada uno de mis condados debe tener las propiedades `data-fips` y `data-education` que contengan sus correspondientes valores de `fips` y `education`.

**Historia de usuario #6:** Mi coroplético debe tener un condado por cada uno de los puntos proporcionados.

**Historia de usuario #7:** Los condados deben tener los valores de `data-fips` y `data-education` que coincidan con los datos de ejemplo.

**Historia de usuario #8:** Mi coroplético debe tener una leyenda con su correspondiente `id="legend"`.

**Historia de usuario #9:** Debe haber al menos 4 colores de relleno usados para la leyenda.

**Historia de usuario #10:** Puedo pasar el ratón por encima de un área y ver un cuadro emergente con su correspondiente `id="tooltip"` que muestre más información acerca del área.

**Historia de usuario #11:** Mi cuadro emergente debe tener una propiedad de `data-education` que corresponda con el `data-education` del área activa.

Aquí están los conjuntos de datos que necesitarás para completar este proyecto:

-   **Datos de educación de Estados Unidos: **`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **Datos de condados de Estados Unidos: **`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow"> usando esta plantilla, </a>y haciendo clic en `Save` para crear tu propio proyecto en CodePen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

# --solutions--

```js
// solution required
```
