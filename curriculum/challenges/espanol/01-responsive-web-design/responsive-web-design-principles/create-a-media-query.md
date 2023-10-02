---
id: 587d78b0367417b2b2512b08
title: Crea un media query
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Las consultas de medios (Media Queries) son una nueva técnica introducida en CSS3 que cambia la presentación de contenido basado en diferentes tamaños de viewport. El viewport es el área visible del usuario de una página web, y es diferente dependiendo del dispositivo utilizado para acceder al sitio.

Las consultas de medios se basan en un tipo de medio, y si ese tipo de medio coincide con el tipo de dispositivo en el que se muestra el documento, los estilos se aplican. Puedes tener tantos selectores y estilos dentro de tu consultas de medios como desees.

Aquí hay un ejemplo de una consulta multimedia que devuelve el contenido cuando el ancho del dispositivo es menor o igual a `100px`:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

y la siguiente consultas de medios devuelve el contenido cuando la altura del dispositivo es mayor o igual a `350px`:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Recuerda, el CSS dentro de las consultas de medios se aplica sólo si el tipo de medio coincide con el del dispositivo que se está usando.

# --instructions--

Agrega una consultas de medios, de forma que la etiqueta `p` tenga un `font-size` de `10px` cuando la altura del dispositivo sea menor o igual a `800px`.

# --hints--

Debes declarar una consulta `@media` para dispositivos con un `height` menor o igual a `800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Tu elemento `p` debe tener un `font-size` de `10px` cuando el `height` del dispositivo sea menor o igual a `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

Tu elemento `p` debe tener un `font-size` inicial de `20px` cuando el dispositivo `height` sea superior a `800px`.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
