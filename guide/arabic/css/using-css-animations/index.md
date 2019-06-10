---
title: Using CSS Animations
localeTitle: استخدام الرسوم المتحركة CSS
---
## استخدام الرسوم المتحركة CSS

الرسوم المتحركة CSS إضافة الجمال إلى صفحات الويب. تعمل رسومات CSS على الانتقال من نمط CSS إلى آخر جميل.

لإنشاء تسلسل رسوم متحركة CSS ، لدينا خصائص فرعية مختلفة في خاصية `animation` في CSS:

*   `animation-delay`
*   `animation-direction`
*   `animation-duration`
*   `animation-iteration-count`
*   `animation-name`
*   `animation-play-state`
*   `animation-timing-function`
*   `animation-fill-mode`

### عينة تسلسل الرسوم المتحركة CSS لنقل النص عبر الشاشة

في جزء HTML ، سيكون لدينا مستند `div` مع `container` للفئة و `h3` مع النص `Hello World` :

 `
<div class="container"> 
    <h3> Hello World ! </h3> 
 </div> 
` 

بالنسبة لجزء CSS:

 ``.container { 
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
`` 

![Imgur](https://cdn-media-1.freecodecamp.org/imgr/sczZjwm.gif)

#### معلومات اكثر:

للحصول على مزيد من المعلومات على CSS الرسوم المتحركة ، يرجى زيارة [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)