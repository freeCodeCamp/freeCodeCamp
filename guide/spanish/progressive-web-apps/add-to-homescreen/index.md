---
title: Add To Homescreen
localeTitle: Añadir a la pantalla principal
---
## Añadir a la pantalla principal

Aquí, el banner de instalación de la aplicación web se centra en la aplicación web, con la función de agregar a la pantalla de inicio.

### Soporte del navegador para agregar a la pantalla de inicio

La funcionalidad Agregar a la pantalla de inicio actualmente es compatible con:

*   Cromo
*   iOS Safari

Puede ver el estado más reciente de la compatibilidad del navegador con esta función [aquí](https://caniuse.com/#feat=web-app-manifest) .

### En Android

En Android, el banner "agregar a la pantalla de inicio" aparece automáticamente si cumple con ciertos requisitos. Así es como debería verse en Android:

| Agregar al indicador de pantalla de inicio | Cuando se lanzó la aplicación | | : ----------------------: | : ---------------: | | ![prompt](https://user-images.githubusercontent.com/15358452/31663686-860779f0-b375-11e7-85c9-1387d9b3bfcf.png "Añadir a la pantalla de inicio en Android") | ![launch](https://user-images.githubusercontent.com/15358452/31663690-89b0d998-b375-11e7-8a84-f3e33be9a2c2.png "Lanzamiento desde Homescreen") |

#### Requerimientos

*   incluir un archivo `manifest.json` con las siguientes propiedades:
*   `short name`
*   `name`
*   `192x192` tamaño del icono de `png`
*   `start_url`
*   incluir un trabajador de servicio que está registrado y activado
*   el sitio web servido a través de HTTPS (todavía puede probar esto con localhost sin HTTPS)
*   El sitio web cumple con las heurísticas de compromiso definidas por Chrome.

#### manifest.json

```json
{ 
  "name": "FreeCodeCamp", 
  "short_name": "FreeCodeCamp", 
  "theme_color": "#00FF00", 
  "background_color": "#00FF00", 
  "display": "standalone", 
  "Scope": "/", 
  "start_url": "/", 
  "icons": [ 
    { 
      "src": "assets/images/icons/icon-72x72.png", 
      "sizes": "72x72", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-96x96.png", 
      "sizes": "96x96", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-128x128.png", 
      "sizes": "128x128", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-144x144.png", 
      "sizes": "144x144", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-152x152.png", 
      "sizes": "152x152", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-192x192.png", 
      "sizes": "192x192", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-384x384.png", 
      "sizes": "384x384", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-512x512.png", 
      "sizes": "512x512", 
      "type": "image/png" 
    } 
  ], 
  "splash_pages": null 
 } 
```

*   `name` es el nombre de la aplicación web. (Se mostrará en la pantalla de inicio)
*   `short name` es el nombre corto de la aplicación web. (Se mostrará debajo del icono del menú del teléfono)
*   `theme_color` es el color de la parte superior del navegador.
*   `background_color` es el color de fondo de la pantalla de inicio.
*   `display` es la forma en que la aplicación web debe mostrarse una vez iniciada en el teléfono.
*   `start_url` define la url inicial del sitio web.
*   `icons` son una matriz que almacena todas las imágenes de ubicación, tamaño y tipo.

### En otros dispositivos

Aunque este método no funciona en iOS y Windows, existe un método alternativo.

**iOS**

En iOS, el botón "agregar a la pantalla de inicio" debe agregarse manualmente. Agregue las siguientes etiquetas meta a la sección principal de su HTML para que sea compatible con el icono de la aplicación web iOS.

```html

<meta name="apple-mobile-web-app-capable" content="yes"> 
 <meta name="apple-mobile-web-app-status-bar-style" content="green"> 
 <meta name="apple-mobile-web-app-title" content="FreeCodeCamp"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-72x72.png" sizes="72x72"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-96x96.png" sizes="96x96"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-128x128.png" sizes="128x128"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-144x144.png" sizes="144x144"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-152x152.png" sizes="152x152"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-384x384.png" sizes="384x384"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-512x512.png" sizes="512x512"> 
```

**Windows**

En Windows Phone, agregue las siguientes etiquetas meta a la sección principal de su HTML:

```html

<meta name="msapplication-TileImage" content="/assets/images/icons/icon-144x144.png"> 
 <meta name="msapplication-TileColor" content="green"> 
```

### Referencias

1.  [superoo7, "Una vista de alto nivel de la aplicación web progresiva" Publicado: 18 de diciembre de 2017.](https://steemit.com/web/@superoo7/a-high-level-view-of-progressive-web-app)
2.  [Matt Gaunt y Paul Kinlan, "Banners de instalación de aplicaciones web" Publicado: 14 de noviembre de 2017.](https://developers.google.com/web/fundamentals/app-install-banners/)