---
title: Iframes
localeTitle: Iframes
---
## Iframes

El elemento HTML `<iframe>` representa un marco en línea, que le permite incluir un documento HTML independiente en el documento HTML actual. Por lo general, `<iframe>` se usa para incrustar medios de terceros, sus propios medios, widgets, fragmentos de código, o incrustar applets de terceros, como formularios de pago.

### Atributos

A continuación se enumeran algunos de los atributos de `<iframe>` :

| Atributo | Descripción | | --- | --- | | `allowfullscreen` | Establézcalo en verdadero para permitir que el marco se coloque en modo de pantalla completa | | `frameborder` | Le dice al navegador que dibuje un borde alrededor del marco (establecido en 1 por defecto) | | `height` | La altura del marco en píxeles CSS | | `name` | Un nombre para el marco | | `src` | La URL de la página web para incrustar | | `width` | El ancho del marco en píxeles CSS |

### Ejemplos

Incrustar un video de YouTube con un `<iframe>` :

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" 
 frameborder="0" allowfullscreen></iframe> 
```

Incrustar Google Maps con un `<iframe>` :

```html

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424" 
 width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
```

### Texto alternativo

El contenido entre las etiquetas de apertura y cierre `<iframe>` se utiliza como texto alternativo, que se mostrará si el navegador del espectador no admite iframes.

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0"> 
  <p>Your browser does not support iframes.</p> 
 </iframe> 
```

### Dirigiendo un iframe en un enlace

Cualquier enlace `<a>` puede apuntar al contenido de un elemento `<iframe>` . En lugar de redirigir la ventana del navegador a la página web vinculada, redireccionará el `<iframe>` . Para que esto funcione, el atributo de `target` del elemento `<a>` debe coincidir con el atributo de `name` del `<iframe>` .

```html

<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"></iframe> 
 
 <p><a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir">Redirect the Iframe</a></p> 
```

Este ejemplo mostrará un `<iframe>` blanco inicialmente, pero cuando haga clic en el enlace de arriba, redireccionará el `<iframe>` para mostrar un video de YouTube.

### Javascript y iframes

Los documentos incrustados en un `<iframe>` pueden ejecutar JavaScript dentro de su propio contexto (sin afectar la página web principal) de manera normal.

Cualquier interacción de script entre la página web principal y el contenido del `<iframe>` incrustado está sujeta a la política del mismo origen. Esto significa que si carga el contenido del `<iframe>` desde un dominio diferente, el navegador bloqueará cualquier intento de acceder a ese contenido con JavaScript.

### Más información:

Ver los [documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) .