---
title: Using CSS Animations
localeTitle: Использование анимации CSS
---
## Использование анимации CSS

Анимированные анимации CSS добавляют красоту веб-страницам. CSS-анимации делают переходы от одного стиля CSS другому красивому.

Чтобы создать последовательность анимации CSS, у нас есть разные под-свойства в свойстве `animation` в CSS:

*   `animation-delay`
*   `animation-direction`
*   `animation-duration`
*   `animation-iteration-count`
*   `animation-name`
*   `animation-play-state`
*   `animation-timing-function`
*   `animation-fill-mode`

### Пример последовательности анимации CSS для перемещения текста по экрану

В части HTML у нас будет `div` с `container` класса и `h3` с текстом `Hello World` :

```html

<div class="container"> 
    <h3> Hello World ! </h3> 
 </div> 
```

Для части CSS:

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

#### Дополнительная информация:

Для получения дополнительной информации о CSS-анимациях посетите веб-сайт [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)