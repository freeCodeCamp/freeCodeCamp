---
title: Background Size
localeTitle: Размер фона
---
## Размер фона

Свойство background-size определяет размер фоновых изображений. Вы можете установить длину или процент, при этом первое значение будет шириной, а второе - высотой. Вы также можете использовать одно из пяти значений ключевых слов:

```css
.auto {background-size: auto;} 
 .cover {background-size: cover;} 
 .contain {background-size: contain;} 
 .initial {background-size: initial;} 
 .inherit {background-size: inherit;} 
 /* Percentage and pixel can also be used */ 
 .pixel {background-size: 50px 50px;} 
 .percentage {background-size: 50% 50%;} 
```

Чтобы установить это свойство на нескольких фоновых изображениях, разделите значения запятой:

```css
.multiple { 
    background-image: url(1.png), url(2.png); 
    background-size: 3px 3px, cover; 
 } 
```

#### Дополнительная информация:

Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

CSS-трюки: [размер фона](https://css-tricks.com/almanac/properties/b/background-size/)

Поддержка браузера: [caniuse](http://caniuse.com/#search=background-size)