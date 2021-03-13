---
id: 587d78b0367417b2b2512b05
title: Construye una página de documentación técnica
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Objetivo:** Construye una aplicación en [CodePen.io](https://codepen.io) que funcionalmente sea similar a esta: <https://codepen.io/freeCodeCamp/full/NdrKKL>.

Completa las siguientes [historias de usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) y consigue aprobar todos los tests. Dale tu propio estilo personal.

Puedes usar HTML, JavaScript y CSS para completar este proyecto. Se recomienda usar CSS puro porque eso es lo que las lecciones han cubierto hasta ahora y debes practicar un poco con él. Puedes usar Bootstrap o SASS si lo deseas. Tecnologías adicionales (por ejemplo, jQuery, React, Angular o Vue) no se recomiendan para este proyecto, y usarlas es bajo tu propio riesgo. Otros proyectos te darán la oportunidad de trabajar con diferentes stacks de tecnologías como React. Aceptaremos e intentaremos solucionar todos los informes de incidencias que utilicen el stack de tecnología sugerido para este proyecto. ¡Feliz día programando!

**Historia de Usuario #1:** Puedo ver un elemento `main` con un respectivo `id="main-doc"`, que contiene el contenido principal de la página (documentación técnica).

**Historia de Usuario #2:** Dentro del elemento `#main-doc` puedo ver varios elementos `section`, cada uno con una clase `main-section`. Debería haber un mínimo de 5.

**Historia de Usuario #3:** El primer elemento dentro de cada sección `.main-section` debería ser un elemento `header` que contenga texto describiendo el tema de esa sección.

**Historia de Usuario #4:** Cada elemento `section` con la clase `main-section` también debería tener un id que corresponda con el texto de cada `header` contenido en él. Cualquier espacio debería ser reemplazado por guiones bajos (p.e. La sección `section` que contiene el título "JavaScript and Java" debería tener un respectivo `id="JavaScript_and_Java"`).

**Historia de Usuario #5:** Los elementos `.main-section` deberían contener al menos 10 elementos `p` en total (no cada uno).

**Historia de Usuario #6:** Los elementos `.main-section` deberían contener al menos 5 elementos `code` en total (no cada uno).

**Historia de Usuario #7:** Los elementos `.main-section` deberían contener al menos 5 elementos `li` en total (no cada uno).

**Historia de Usuario #8:** Puedo ver un elemento `nav` con un respectivo `id="navbar"`.

**Historia de Usuario #9:** El elemento de barra de navegación debe contener un elemento `header` que contenga texto describiendo el tema de la documentación técnica.

**Historia de Usuario #10:** Adicionalmente, la barra de navegación debería contener enlaces (`a`) con la clase `nav-link`. Debería haber uno para cada elemento con la clase `main-section`.

**Historia de Usuario #11:** El elemento `header` en la barra de navegación debe aparecer antes que cualquier elemento de enlace (`a`).

**Historia de Usuario #12:** Cada elemento con la clase `nav-link` debería tener un texto que corresponda con el título `header` dentro de cada sección `section` (p.e. Si tienes una sección/título "Hola Mundo", tu barra de navegación debería tener un elemento que contenga el texto "Hola Mundo").

**Historia de Usuario #13:** Cuando hago clic en un elemento de la barra de navegación, la página debe navegar a la sección correspondiente del elemento `main-doc` (p.e. Si hago clic en un elemento `nav-link` que contiene el texto "Hola Mundo", la página navegará al elemento `section` que tiene ese id y contiene el título `header` correspondiente.

**Historia de Usuario #14:** En dispositivos de tamaño normal (portátiles, escritorios), el elemento con `id="navbar"` debe mostrarse en el lado izquierdo de la pantalla y siempre debe ser visible para el usuario.

**Historia de Usuario #15:** Mi página de Documentación Técnica debería usar al menos una media query.

Puedes construir tu proyecto usando <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>esta plantilla CodePen</a> y haciendo clic en `Save` para crear tu propio pen. O puedes utilizar este enlace CDN para ejecutar las pruebas en cualquier entorno que desees: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas aprobadas.

# --solutions--

```html
// solution required
```
