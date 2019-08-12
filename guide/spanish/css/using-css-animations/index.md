---
title: Using CSS Animations
localeTitle: Usando animaciones CSS
---
## Usando animaciones CSS

Las animaciones CSS añaden belleza a las páginas web. Las animaciones CSS hacen que las transiciones de un estilo CSS a otro sean hermosas.

Para crear una secuencia de animación CSS, tenemos diferentes sub-propiedades en la propiedad de `animation` en CSS:

*   `animation-delay`
*   `animation-direction`
*   `animation-duration`
*   `animation-iteration-count`
*   `animation-name`
*   `animation-play-state`
*   `animation-timing-function`
*   `animation-fill-mode`

### Ejemplo de secuencia de animación CSS para mover texto a través de la pantalla

En la parte HTML tendremos un `div` con `container` clase y un `h3` con el texto `Hello World` :

```html

<div class="container"> 
    <h3> Hello World ! </h3> 
 </div> 
```

Para la parte CSS:

```css
.container { 
    /* We will define the width, height and padding of the container */ 
    /* The text-align to center */ 
    width: 400px; 
    height: 60px; 
    padding: 32px; 
    text-align: center; 
 
    /* Use the animation `blink` to repeat infinitely for a time period of 2.5s*/ 
    animation-duration: 2.5s; 
    animation-iteration-count: infinite; 
    animation-direction: normal; 
    animation-name: blink; 
 
    /* The same can be written shorthand as     */ 
    /* --------------------------------------   */ 
    /* animation: 2.5s infinite normal blink;   */ 
 } 
 @keyframes blink { 
    0%, 100% {              /* Defines the properties at these frames */ 
        background: #333; 
        color: white; 
    } 
 
    50% {                   /* Defines the properties at these frames */ 
        background: #ccc; 
        color: black; 
        border-radius: 48px; 
    } 
 } 
```

![Imgur](https://cdn-media-1.freecodecamp.org/imgr/sczZjwm.gif)

#### Más información:

Para más detalles sobre animaciones CSS, visite [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)