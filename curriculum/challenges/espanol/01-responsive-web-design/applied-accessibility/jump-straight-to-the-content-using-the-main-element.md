---
id: 587d774e367417b2b2512a9f
title: Salta directamente al contenido usando el elemento principal (main)
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 introdujo varios elementos nuevos que dan a los desarrolladores más opciones y al mismo tiempo incorporan características de accesibilidad. Estas etiquetas incluyen `main`, `header`, `footer`, `nav`, `article`, y `section`, entre otros.

De forma predeterminada, un navegador muestra estos elementos de forma similar al humilde `div`. Sin embargo, usarlos cuando sea apropiado le da un significado adicional a tu lenguaje de marcado. El nombre de la etiqueta solo puede indicar el tipo de información que contiene, lo que agrega significado semántico a ese contenido. Las tecnologías de asistencia pueden acceder a esta información para proporcionar mejores opciones de resumen de páginas o de navegación a sus usuarios.

El elemento `main` se usa para envolver (lo adivinaste) el contenido principal, y solo debe haber uno por página. Su propósito es rodear la información relacionada con el tema central de tu página. No está destinado a incluir elementos que se repiten en todas las páginas, como enlaces de navegación o banners.

La etiqueta `main` también tiene una característica de referencia incrustada que la tecnología de asistencia puede utilizar para navegar al contenido principal rápidamente. Si alguna vez has visto un enlace de "Saltar al contenido principal" en la parte superior de la página, el uso de la etiqueta `main` proporciona automáticamente esa funcionalidad a los dispositivos de asistencia.

# --instructions--

Camper Cat tiene algunas grandes ideas para su página de armas ninja. Ayúdelo a configurar su marcado agregado etiquetas de apertura y cierre `main` entre el `header` y el `footer` (cubierto en otros desafíos). Mantenga las etiquetas `main` vacías por ahora.

# --hints--

Tu código debe tener una etiqueta `main`.

```js
assert($('main').length == 1);
```

Las etiquetas `main` deben estar entre la etiqueta `header` de cierre y la etiqueta `footer` de apertura.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
