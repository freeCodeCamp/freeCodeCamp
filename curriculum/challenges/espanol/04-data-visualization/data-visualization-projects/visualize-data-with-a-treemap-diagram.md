---
id: 587d7fa6367417b2b2512bc0
title: Visualiza datos con un diagrama de mapa de árbol
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Objetivo:** crea una app que sea funcionalmente similar a esta: <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar HTML, JavaScript, CSS y la librería D3 de visualización basada en svg. Las pruebas requieren que los ejes se generen utilizando la propiedad de eje D3, que genera automáticamente marcas a lo largo del eje. Estas marcas son necesarias para pasar las pruebas de D3, ya que sus posiciones se utilizan para determinar el alineamiento de los elementos gráficos. Encontrarás información sobre cómo generar ejes en <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Required DOM elements are queried on the moment of each test. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de usuario #1:** Mi mapa de árbol debe tener un título con su correspondiente `id="title"`.

**Historia de usuario #2:** Mi mapa de árbol debe tener una descripción con su correspondiente `id="description"`.

**Historia de usuario #3:** Mi mapa de árbol debe tener elementos `rect` con una `class="tile"` que representen los datos.

**Historia de usuario #4:** Debe haber al menos 2 colores de relleno diferentes para los baldosas.

**Historia de usuario #5:** Cada baldosa debe tener las propiedades `data-name`, `data-category`, y`data-value` conteniendo sus correspondientes `name`, `category`, y`value`.

**Historia de usuario #6:** El área de cada baldosa debe corresponder a la cantidad de `data-value`: las baldosas con un `data-value` mayor deben tener un área más grande.

**Historia de usuario #7:** Mi mapa de árbol debe tener una leyenda con su correspondiente `id="legend"`.

**Historia de usuario #8:** Mi leyenda debe tener elementos `rect` con su correspondiente `class="legend-item"`.

**Historia de usuario #9:** El elemento `rect` de la leyenda debe usar al menos 2 diferentes colores de relleno.

**Historia de usuario #10:** Puedo pasar el ratón por encima de un área y ver un cuadro emergente con su correspondiente `id="tooltip"` que muestra más información acerca del área.

**Historia de usuario #11:** Mi cuadro emergente debe tener una propiedad `data-value` que corresponda con el `data-value` del área activa.

Para este proyecto puede utilizar cualquiera de los siguientes conjuntos de datos:

-   **Compromisos de Kickstarter:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Ventas de películas:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Ventas de videojuegos:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow"> usando esta plantilla, </a>y haciendo clic en `Save` para crear tu propio proyecto en CodePen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

# --solutions--

```js
// solution required
```
