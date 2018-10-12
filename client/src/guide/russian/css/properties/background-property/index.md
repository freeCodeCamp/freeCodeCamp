---
title: Background Property
localeTitle: Фоновая собственность
---
## Фоновая собственность

Свойство фона CSS позволяет объявить все восемь свойств фона сразу, используя это краткое объявление 1 .

Свойство background задается как один или несколько фоновых слоев, разделенных запятыми для следующих свойств 2 :

*   фоновый цвет
*   изображение на заднем плане
*   фон положение
*   фон-размер
*   фон-повторить
*   фон-происхождения
*   фон-клип
*   фон-вложение

Синтаксис 1 :

```css
body { 
  /* Using a <background-color> */ 
  background: green; 
 } 
 
 .error { 
  /* Using a <bg-image> and <repeat-style> */ 
  background: url("test.jpg") repeat-y; 
 } 
 
 header { 
  /* Using a <box> and <background-color> */ 
  background: border-box red; 
 } 
 
 .topbanner { 
  /* A single image, centered and scaled */ 
  background: no-repeat center/80% url("../img/image.png"); 
 } 
```

### источники

1.  [Посетите страницу справочной системы MDN для получения дополнительной информации.](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2.  [Посетите страницу свойств веб-сайта CSS W3School для получения дополнительной информации.](https://www.w3schools.com/cssref/css3_pr_background.asp)