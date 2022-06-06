---
id: bd7168d8c242eddfaeb5bd13
title: Visualiza datos con una gráfica de barras
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Objetivo:** Crear una aplicación que sea funcionalmente similar a <https://codepen.io/freeCodeCamp/full/GrZVaM>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar HTML, JavaScript, CSS y la librería D3 de visualización basada en svg. Las pruebas requieren que los ejes se generen utilizando la propiedad de eje D3, que genera automáticamente marcas a lo largo del eje. Estas marcas son necesarias para pasar las pruebas D3, ya que sus posiciones se utilizan para determinar la alineación de los elementos gráficos. Encontrarás información sobre cómo generar ejes en <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Los elementos DOM obligatorios (no virtuales) son consultados en el momento de cada prueba. Si usas un framework frontend (como por ejemplo Vue), los resultados de la prueba pueden ser inexactos para el contenido dinámico. Esperamos poder adaptarlos eventualmente, pero por ahora estos frameworks no son soportados por los proyectos con D3.

**Historia de usuario #1:** Mi gráfica debe tener un título con su correspondiente `id="title"`.

**Historia de usuario #2:** Mi gráfica debe tener un elemento `g` en el eje-x con su correspondiente `id="x-axis"`.

**Historia de usuario #3:** Mi gráfica debe tener un elemento `g` en el eje-y con su correspondiente `id="y-axis"`.

**Historia de usuario #4:** Ambos ejes debe contener múltiples etiquetas de marca, cada uno con su correspondiente `class="tick"`.

**Historia de usuario #5:** Mi gráfica debe tener un elemento `rect` por cada punto de datos con su correspondiente `class="bar"` mostrando los datos.

**Historia de usuario #6:** Cada barra debe tener la propiedad `data-date` y `data-gdp` conteniendo los valores `date` y `GDP`.

**Historia de usuario #7:** Las propiedades `data-date` de los elementos de la barra deben coincidir con el orden de los datos proporcionados.

**Historia de usuario #8:** Las propiedades `data-gdp` de los elementos de la barra deben coincidir con el orden de los datos proporcionados.

**Historia de usuario #9:** La altura de cada elemento de barra debe representar con exactitud el `GDP` correspondiente a los datos.

**Historia de usuario #10:** El atributo `data-date` y su correspondiente elemento de barra deben alinearse con el valor correspondiente en el eje-x.

**Historia de usuario #11:** El atributo `data-gdp` y su correspondiente elemento de barra deben alinearse con el valor correspondiente en el eje-y.

**Historia de usuario #12:** Puedo pasar el ratón por encima de un área y ver un cuadro emergente con su correspondiente `id="tooltip"` que muestra más información acerca del área.

**Historia de usuario #13:** Mi cuadro emergente debe tener una propiedad `data-date` que corresponda con el `data-date` del área activa.

Aquí está el conjunto de datos que necesitarás para completar este proyecto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Puedes construir tu proyecto con <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando esta plantilla CodePen</a> y haciendo clic en `Save` para crear tu propio pen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

# --solutions--

```js
// solution required
```
