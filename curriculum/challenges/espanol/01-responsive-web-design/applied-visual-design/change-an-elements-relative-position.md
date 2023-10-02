---
id: 587d781e367417b2b2512ac9
title: Cambia la posición relativa de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS trata cada elemento HTML como su propia caja, esto es a lo que usualmente se refiere como el <dfn>Modelo de Caja de CSS</dfn>. Los elementos bloque automáticamente empiezan en una nueva línea (piensa en las etiquetas título, párrafos y divs) mientras que los elementos en línea se ubican entre el contenido al rededor (como imágenes o spans). El diseño por defecto de los elementos en esta manera se llama el <dfn>flujo normal</dfn> de un documento, pero CSS ofrece la propiedad position para sobreescribirlo.

Cuando la posición de un elemento se establece a `relative`, te permite especificar como CSS lo moverá *relativo* a su posición actual dentro del flujo normal de la página. Se empareja con las propiedades de desplazamiento CSS de `left` o `right`, y `top` o `bottom`. Estas dicen cuántos pixeles, porcentajes, o ems se debe mover el elemento *lejos* de donde esté normalmente posicionado. El siguiente ejemplo mueve el párrafo 10 pixeles lejos de la parte inferior:

```css
p {
  position: relative;
  bottom: 10px;
}
```

Cambiando la posición de un elemento a relative no lo quita del flujo normal; otros elementos a su alrededor aún se comportarán como si dicho elemento estuviera en su posición predeterminada.

**Nota:** el posicionamiento te da mucha flexibilidad y poder sobre el diseño visual de una página. Es bueno recordar que no importa la posición de los elementos, el lenguaje de marcado HTML subyacente debe organizarse y tener sentido cuando se lee de arriba a abajo. Así es como los usuarios con discapacidades visuales (que dependen de dispositivos de asistencia como lectores de pantalla) acceden a tu contenido.

# --instructions--

Cambia la propiedad `position` de `h2` a `relative`, y usa CSS desplazamiento para moverlo 15 pixeles lejos de la parte superior `top` donde se ubica dentro del flujo normal. Observa que no hay impacto en las posiciones de los elementos h1 y p que están al rededor.

# --hints--

El elemento `h2` debe tener una propiedad `position` con valor `relative`.

```js
assert($('h2').css('position') == 'relative');
```

Tu código debe usar un desplazamiento CSS para posicionar relativamente el elemento `h2` a 15px lejos de la parte superior `top` donde se ubica normalmente.

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
