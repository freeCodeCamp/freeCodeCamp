---
id: 587d7fa6367417b2b2512bbf
title: Visualiza datos con un mapa coroplético
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Objetivo:** Crea una aplicación en [CodePen.io](https://codepen.io) que funcionalmente sea similar a esta: <https://codepen.io/freeCodeCamp/full/EZKqza>.

Completa las siguientes [historias de usuario](https://en.wikipedia.org/wiki/User_story) y consigue pasar todas las pruebas. Dale tu estilo personal.

Puedes utilizar HTML, JavaScript, CSS y la librería de visualización basada en svg D3. Los elementos DOM obligatorios (no virtuales) son consultados en el momento de cada prueba. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de Usuario #1:** Mi coroplético debe tener un título con su correspondiente `id="title"`.

**Historia de Usuario #2:** Mi coroplético debe tener una descripción con su correspondiente `id="description"`.

**Historia de Usuario #3:** Mi coroplético debe tener condados con su correspondiente `class="county"` que represente el dato.

**Historia de Usuario #4:** Debe haber al menos 4 colores de relleno diferentes para los condados.

**Historia de Usuario #5:** Cada uno de mis condados debe tener las propiedades `data-fips` y `data-education` que contengan sus correspondientes valores de `fips` y `education`.

**Historia de Usuario #6:** Mi coroplético debe tener un condado por cada uno de los puntos proporcionados.

**Historia de Usuario #7:** Los condados deben tener los valores de `data-fips` y `data-education` que coincidan con los datos de ejemplo.

**Historia de Usuario #8:** Mi coroplético debe tener una leyenda con su correspondiente `id="legend"`.

**Historia de Usuario #9:** Debe haber al menos 4 colores de relleno usados para la leyenda.

**Historia de Usuario #10:** Puedo pasar el ratón por encima de un área y ver una descripción con su correspondiente `id="tooltip"` que muestre más información sobre el área.

**Historia de Usuario #11:** Mi descripción debe tener una propiedad de `data-education` que corresponda con el `data-education` del área activa.

Aquí están los conjuntos de datos que necesitarás para completar este proyecto:

-   **Datos de Educación de Estados Unidos: **`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **Datos de condados de Estados Unidos: **`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> usando esta plantilla de CodePen</a> y haciendo clic en `Save` para crear tu propio entorno. O puedes utilizar este enlace de CDN para ejecutar los tests en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas aprobadas.

# --solutions--

```js
// solution required
```
