---
title: Declarative Rendering
localeTitle: Representación declarativa
---
## Instalacion

Antes de comenzar, hay un par de formas de usar Vue.js, a través de CDN y vía instalación. Para una primera experiencia, es más fácil usar el CDN.

Para el desarrollo, usa esto:

```html

<!-- development version, includes helpful console warnings --> 
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
```

Al saltar a la producción, esto:

```html

<!-- production version, optimized for size and speed --> 
 <script src="https://cdn.jsdelivr.net/npm/vue"></script> 
```

Como se mencionó anteriormente, también puede instalar `vue-cli` , pero esto no es Recomendado para principiantes.

## Representación declarativa

Vue.js es una gran herramienta para crear páginas dinámicas y una primera forma de ingresar tocar con esto es lo que se llama declarativa de representación.

El uso del término "declarativo" tiene la intención de enderezar este concepto para lenguajes declarativos, como SQL: ordenas algo, no está implícito Cualquier implementación. Vue.js te permite declarar qué datos quieres ser rendido, tan simple como eso:

```html

<div id="app"> 
  {{ message }} 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    message: 'Hello, world!' 
  } 
 }); 
```

Con esos snipets, le estás diciendo a Vue que renderice dinámicamente lo que esté almacenado dentro de la variable del `message` . Y la diversión: cada vez que `message` se cambia, Vue.js se las arregla para volver a cargar esa parte específica del DOM y verá la cambio.

Si desea probar esta reactividad, abra la consola y cambie el valor del `app.message` de `app.message` a, diga `"Hello from console"` . Notaste el cambio en ¿la página?

La `{{ ... }}` es la sintaxis de ese comportamiento: generar el valor de una variable o de una expresión. Por ejemplo, esto también es un uso válido y resultará en `hello` :

```html

<div id="app"> 
  {{ 1 < 2 ? "hello" : "goodbye" }} 
 </div> 
```

Hay casos en los que lo que queremos es establecer un atributo utilizando nuestras aplicaciones Vue variable. Se podría pensar que se aplica la misma sintaxis, pero tiene algo Vue específica para eso, lo que llamamos "unión".

```html

<div id="app"> 
  <a v-bind:href="dynamicLink">This link</a> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    dynamicLink: 'medium.freecodecamp.org' 
  } 
 } 
```

La sintaxis `v-bind` es lo que Vue.js llama una "directiva". Es una manera de establecer un nuevo atributo a la etiqueta que será manejada por Vue - hay más directivas, todos ellos comienzan con `v-` .