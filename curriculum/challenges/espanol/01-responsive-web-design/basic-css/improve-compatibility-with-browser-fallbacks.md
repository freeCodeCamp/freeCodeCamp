---
id: 5b7d72c338cd7e35b63f3e14
title: Mejora la compatibilidad con navegadores por medio de configuraciones de respaldo o "browser fallbacks"
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

Cuando trabajes con código CSS, posiblemente te enfrentarás en algún momento con problemas de compatibilidad con otros navegadores web. Por esta razón es importante proporcionar configuraciones de respaldo para otros navegadores o "browser fallbacks" para lidiar con posibles problemas de compatiblidad.

Cuando tu navegador analiza el código CSS de una página web, ignora cualquier propiedad que no reconozca o soporte. Por ejemplo, si utilizas una variable CSS para asignar un color de fondo en un sitio, Internet Explorer ignorará el color de fondo establecido porque no soporta el uso de variables CSS. En ese caso, el navegador utilizará cualquier valor que tenga establecido como valor de esa propiedad. Si no puede encontrar ningún otro valor establecido para esa propiedad en el código, se revertirá al valor por defecto de ese navegador, lo que habitualmente no será lo ideal.

Esto significa que si quieres proporcionar un valor de respaldo para el navegador, esto es tan sencillo como incluir otro valor más comúnmente soportado inmediatamente antes de tu declaración. De este modo, un navegador antiguo tendrá ún valor que sí pueda soportar, mientras que un navegador más nuevo interpretará cualquier declaración que incluyas más adelante en la cascada.

# --instructions--

Parece que en este código se utiliza una variable para establecer el color de fondo de la clase `.red-box`. Mejoremos la compatibilidad de nuestro código con otros navegadores, añadiendo otra declaración de `background` justo antes de la declaración existente, y estableciendo este valor de respaldo como `red` (rojo).

# --hints--

Tu regla `.red-box` debe incluir un valor de respaldo o "fallback" con el `background` con un valor de `red`, inmediatamente antes de la declaración `background` existente.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
