---
id: bd7188d8c242eddfaeb5bd13
title: Visualiza datos con un mapa de calor
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Objetivo:** crea una app que sea funcionalmente similar a esta: <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar HTML, JavaScript, CSS y la librería D3 de visualización basada en svg. Required DOM elements are queried on the moment of each test. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de usuario #1:** Mi mapa de calor debe tener un título con su correspondiente `id="title"`.

**Historia de usuario #2:** Mi mapa de calor debe tener una descripción con su correspondiente `id="description"`.

**Historia de usuario #3:** Mi mapa de calor debe tener un eje-x con su correspondiente `id="x-axis"`.

**Historia de usuario #4:** Mi mapa de calor debe tener un eje-y con su correspondiente `id="y-axis"`.

**Historia de usuario #5:** Mi mapa de calor debe tener elementos `rect` con una `class="cell"` que representen los datos.

**Historia de usuario #6:** Debe haber al menos 4 colores de relleno usados para las celdas.

**Historia de usuario #7:** Cada celda tendrá las propiedades de `data-month`, `data-year` y `data-temp` que contengan sus correspondientes valores de `month`, `year`, y `temperature`.

**Historia de usuario #8:** Los `data-month`, `data-year` de cada celda deben estar dentro del rango de los datos.

**Historia de usuario #9:** Mi mapa de calor debe tener celdas que se alineen con el mes correspondiente sobre el eje-y.

**Historia de usuario #10:** Mi mapa de calor debe tener celdas que se alineen con el año correspondiente sobre el eje-x.

**Historia de usuario #11:** Mi mapa de calor debe tener varias etiquetas de marca sobre el eje-y con los nombres completos de los meses.

**Historia de usuario #12:** Mi mapa de calor debe tener varias etiquetas de marca sobre el eje-x con los años entre 1754 y 2015.

**Historia de usuario #13:** Mi mapa de calor debe tener una leyenda con su correspondiente `id="legend"`.

**Historia de usuario #14:** Mi leyenda debe contener el elemento `rect`.

**Historia de usuario #15:** El elemento `rect` de la leyenda debe usar al menos 4 diferentes colores de relleno.

**Historia de usuario #16:** Puedo pasar el ratón por encima de un área y ver un cuadro emergente con su correspondiente `id="tooltip"` que muestra más información acerca del área.

**Historia de usuario #17:** Mi cuadro emergente debe tener una propiedad `data-year` que corresponda con el `data-year` del área activa.

Aquí está el conjunto de datos que necesitarás para completar este proyecto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow"> usando esta plantilla, </a> y haciendo clic en `Save` para crear tu propio proyecto CodePen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

# --solutions--

```js
// solution required
```
