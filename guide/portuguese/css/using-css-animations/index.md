---
title: Using CSS Animations
localeTitle: Usando animações CSS
---
## Usando animações CSS

As animações CSS adicionam beleza às páginas da web. As animações CSS fazem transições de um estilo CSS para outro bonito.

Para criar uma seqüência de animação CSS, temos diferentes subpropriedades na propriedade de `animation` em CSS:

*   `animation-delay`
*   `animation-direction`
*   `animation-duration`
*   `animation-iteration-count`
*   `animation-name`
*   `animation-play-state`
*   `animation-timing-function`
*   `animation-fill-mode`

### Exemplo de seqüência de animação CSS para mover texto pela tela

Na parte HTML teremos um `div` com `container` classe e um `h3` com o texto `Hello World` :

```html

<div class="container"> 
    <h3> Hello World ! </h3> 
 </div> 
```

Para a parte CSS:

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

#### Mais Informações:

Para mais detalhes sobre CSS Animations, visite [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)