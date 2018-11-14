---
title: A React Environment Using a Remote Code Repository
localeTitle: Un entorno React utilizando un repositorio de código remoto
---
Esta es la forma de crear un entorno React no de producción utilizando un repositorio de código remoto. Usaremos cdnjs.cloudflare.com 16.0.0 reaccionar, reaccionar-dom y babel-standalone 6.26.0 para lograr esto. babel-polyfill se usa para compatibilidad con navegadores antiguos.

\`\` \`html

   Hola reaccionar

ReactDOM.render( <h1>Hello React</h1>, document.getElementById('helloreact'));

\`\` \` Si este código se guarda con la extensión de archivo html (helloReact.html), se puede abrir en un navegador web Se ejecutará React y Babel.