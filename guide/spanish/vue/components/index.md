---
title: Components
localeTitle: Componentes
---

## Componentes

Un clásico problema al que los desarrolladores se enfrentan es la duplicidad de HTML, no
en un ejemplo simple como una lista, pero algunas veces todo lo que se quiere es un "import" que permita usar el mismo código en diferentes lugares.
Vue.js te da esta característica vía Componentes.

Supón que estas desarrollando una landing para un producto de tu compañía y tu necesitas mostrar sus 4 principales características siguiendo la misma estructura de tarjeta con un icono, un título y una descripción corta.

```javascript
Vue.component('feature-card', {
  props: ["iconSrc", "iconAltText", "featureTitle", "featureDescription"],
  template: `
    <div class="card">
      <div class="icon-wrapper">
        <img
          class="icon"
          :src="iconSrc"
          :alt="iconAltText">
      </div>
      <h4 class="title">
        {{ featureTitle }}
      </h4>
      <p class="description">
        {{ featureDescription }}
      </p>
    </div>
  `
});
```

> Tenga en cuenta que aquí hemos unido el atributo  imagen `src` con otra sintaxis `:src`.
Esto no cambia nada, simplemente es azúcar sintáctico de `v-bind:src` -- cuando quiera cambiar el enlace de un atributo a una variable, puede anteponer un `:` al atributo en vez de usar la forma completa `v-bind`.

Con este código, hemos hecho muchas cosas nuevas:
* creamos un nuevo compoenente llamado `feature-card`
* definimos `feature-card` una **estructura** por defecto con el atributo `template`
* abrimos una lista de propiedades que el componente acepta con la lista de `props`

Cuando se define el nombre de los componentes, donde quiera que queramos reutilizarlo, solo tenemos que referenciarlo como un tag. En el ejemplo, se usa la etiqueta  `<feature-card>`:

```html
<div id="app">
  <feature-card
    iconSrc="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
    iconAltText="rocket"
    featureTitle="Processing speed"
    featureDescription="Our solution has astonishing benchmarks grades">
  </feature-card>
</div>
```

En este caso, llamamos a la `<feature-card>` como era una etiqueta existente, también
como establecimos `iconSrc` o` featureTitle` como atributos válidos. Y el propósito de los componentes de Vue.js es este: aumentar la caja de herramientas con herramientas propias.

### Props

Props son atributos personalizados que pueden ser registrados en un componente. Cuando se le pasa el valor a un atributo prop, se convierte en una propiedad en esa instancia de componente. Para pasar un título a nuestro componente de publicación de blog, podemos incluirlo en la lista de props que este componente acepta, utilizando una opción de props:

```js
Vue.component('feature-card', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
Un componente puede tener tantas props como quiera y por defecto, cualquier valor puede ser pasado a cualquier prop. En la plantilla anterior, se puede ver que se tiene acceso a este valor en la instancia del componente, al igual que con los datos.

Una vez que una prop se registra, pueden pasársele datos como un atributo personalizado, como esta:
```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```