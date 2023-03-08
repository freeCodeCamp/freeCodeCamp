---
id: bd7168d8c242eddfaeb5bd13
title: Visualiza datos con una gráfica de barras
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Objetivo:** crea una app que sea funcionalmente similar a esta: <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar HTML, JavaScript, CSS y la librería D3 de visualización basada en svg. Las pruebas requieren que los ejes se generen utilizando la propiedad de eje D3, que genera automáticamente marcas a lo largo del eje. Estas marcas son necesarias para pasar las pruebas D3, ya que sus posiciones se utilizan para determinar la alineación de los elementos gráficos. Encontrarás información sobre cómo generar ejes en <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Required DOM elements are queried on the moment of each test. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de usuario #1:** Mi gráfica debe tener un título con su correspondiente `id="title"`.

**Historia de usuario #2:** Mi gráfica debe tener un elemento `g` en el eje-x con su correspondiente `id="x-axis"`.

**Historia de usuario #3:** Mi gráfica debe tener un elemento `g` en el eje-y con su correspondiente `id="y-axis"`.

**Historia de usuario #4:** Ambos ejes debe contener múltiples etiquetas de marca, cada uno con su correspondiente `class="tick"`.

**Historia de usuario #5:** Mi gráfica debe tener un elemento `rect` por cada punto de datos con su correspondiente `class="bar"` mostrando los datos.

**User Story #6:** Each `.bar` should have the properties `data-date` and `data-gdp` containing `date` and `GDP` values.

**User Story #7:** The `.bar` elements' `data-date` properties should match the order of the provided data.

**User Story #8:** The `.bar` elements' `data-gdp` properties should match the order of the provided data.

**User Story #9:** Each `.bar` element's height should accurately represent the data's corresponding `GDP`.

**User Story #10:** The `data-date` attribute and its corresponding `.bar` element should align with the corresponding value on the x-axis.

**User Story #11:** The `data-gdp` attribute and its corresponding `.bar` element should align with the corresponding value on the y-axis.

**Historia de usuario #12:** Puedo pasar el ratón por encima de un área y ver un cuadro emergente con su correspondiente `id="tooltip"` que muestra más información acerca del área.

**Historia de usuario #13:** Mi cuadro emergente debe tener una propiedad `data-date` que corresponda con el `data-date` del área activa.

Aquí está el conjunto de datos que necesitarás para completar este proyecto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow"> usando esta plantilla, </a>haciendo clic en `Save` para crear tu propio proyecto CodePen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

# --solutions--

```js
// solution required
```
