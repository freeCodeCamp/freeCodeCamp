---
id: 587d774c367417b2b2512a9c
title: Agregar un texto alternativo a las imágenes para accesibilidad de usuarios con dificultades de la vista
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

Probablemente hayas visto un atributo `alt` en una etiqueta `img` en otros desafíos. El atributo`alt` describe el contenido de la imagen y proporciona un texto alternativo. Un atributo `alt` ayuda en los casos en que la imagen no se carga o un usuario no pueda verla. Los motores de búsqueda también lo utilizan para comprender qué contiene una imagen para incluirla en los resultados de búsqueda. Aquí hay un ejemplo:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

Las personas con dificultades visuales dependen de lectores de pantalla para convertir el contenido web a una interfaz de audio. Por esta razón, no podrán recibir la información si solo se les presenta de manera visual. En el caso de las imágenes, los lectores de pantalla pueden acceder el atributo `alt` y leer su contenido para proporcionar información clave.

Un buen texto `alt` le brinda al lector una breve descripción de la imagen. Siempre deberías incluir el atributo `alt` en tus imágenes. De acuerdo con las especificaciones de HTML5, esto ahora se considera obligatorio.

# --instructions--

Camper Cat es tanto un ninja de la programación como un ninja de la vida real, y está construyendo un sitio web para compartir sus conocimientos. La foto de perfil que quiere usar es una muestra de sus habilidades y debería poder ser apreciada por todos los visitantes del sitio. Agrega un atributo `alt` en la etiqueta `img` para explicar que Camper Cat está practicando karate. (El atributo `src` de esta imagen no está enlazado a un archivo real, por lo que podrás ver el texto `alt` en la página.)

# --hints--

Tu etiqueta `img` debe tener un atributo `alt`, y el mismo no debería estar vacío.

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
