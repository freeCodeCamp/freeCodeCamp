---
title: CSS3 Opacity Property
localeTitle: Свойство непрозрачности CSS3
---
## Свойство непрозрачности CSS3

`opacity` позволяет вам контролировать прозрачность элемента по шкале от `0` до `1` .

Если вы установите свойство элемента в `0` оно будет прозрачным. Если вы установите его на `1` он будет непрозрачным.

Установка `opacity: 0;` элемента `opacity: 0;` не удаляет его со страницы. Элемент по-прежнему будет доступен для кликов и будет влиять на поток содержимого страницы.

```css
.transparent { 
    opacity: 0; 
 } 
 
 .verySeeThrough { 
    opacity: 0.3; 
 } 
 
 .slightlySeeThrough { 
    opacity: 0.7; 
 } 
 
 .opaque { 
    opacity: 1; 
 } 
```

[Этот простой пример](https://jsfiddle.net/1ogmxaf8/1/) показывает, как вы можете использовать непрозрачность с эффектом зависания.

#### Дополнительная информация:

*   [Веб-документы MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
*   [Альманах](https://css-tricks.com/almanac/properties/o/opacity/)