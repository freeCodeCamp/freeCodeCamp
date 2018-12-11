---
title: currentColor Keyword
localeTitle: currentColor Keyword
---
## Ключевое слово currentColor

Ключевое слово currentColor, как следует из названия, является допустимым значением цвета в CSS. Это представляет значение свойства `color` конкретного элемента. Это позволяет использовать значение свойства `color` для свойств, которые по умолчанию не получают его.

### Поддержка браузера

Ключевое слово currentColor очень хорошо поддерживается в браузерах. Он поддерживается IE9 +, Safari 4+ и всеми другими современными браузерами. Ознакомьтесь с полным списком на [caniuse.com](https://caniuse.com/#feat=currentcolor)

### пример

Мы объявляем, что каждый div имеет границу _3px_ цвета _currentColor_ , что означает, что каждая граница Div будет окрашена с тем же значением своего свойства `color` . Проверьте живой пример [здесь](http://jsfiddle.net/tjkp0cm3/)

```css
div{ 
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */ 
  border: 3px solid currentColor; 
 } 
 
 /* This div will have green borders, because its color value is green. */ 
 #div1{ 
  color: green; 
 } 
 
 /* This div will have blue borders, because its color value is blue. */ 
 #div2{ 
  color: blue; 
 } 
```

### Практическое приложение с SVG

Вот очень распространенный пример в Интернете - кнопка с иконкой SVG и текстом в ней. Цвет границы, текста и значков меняется при наведении курсора на кнопку. На приведенном ниже изображении изображены начальные и зависающие состояния кнопки в порядке.

![Изображения кнопок](https://image.ibb.co/hWveBR/button_variations.png)

Для этой цели также можно использовать иконок-шрифты, но есть различные преимущества встроенных SVG над значками шрифтов, и это может сделать выбор SVG для многих разработчиков. Цитата [CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) ,

> Может помешать разместить значок шрифта. Значки вставляются через псевдоэлемент, и это зависит от `line-height` , `vertical-align` , `letter-spacing` `word-spacing` , того, как разработан шрифт-глиф (у него, естественно, есть пространство вокруг него, есть ли информация о кернинге?) , Тогда тип `display` псевдоэлементов влияет, если эти свойства имеют эффект или нет. SVG - это размер, который он есть.

Чтобы подвести итог, иногда бывает сложно использовать шрифтовые значки с текстом.

Мы могли бы использовать этот код для достижения желаемого поведения.

```css
button{ 
  color: #016898; 
 } 
 
 .emailIcon{ 
  fill: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
 
 button:hover .emailIcon{ 
  fill: #19B5FE; 
 } 
```

Теперь, вместо явного изменения цвета `fill` SVG, мы можем установить fill на `currentColor` . Это автоматически изменяет цвет SVG на значение свойства `color` кнопки. Теперь нам просто нужно изменить свойство `color` кнопки. Это делает код CSS короче и умнее.

```css
.emailIcon{ 
  fill: currentColor; 
 } 
 
 button{ 
  color: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
```

Просмотрите живой пример на https://repl.it/NNt9/2.

#### Дополнительная информация:

*   [Документы MDN по свойству `color` CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [Документы MDN по ключевому слову currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
*   [Статья о currentColor на osvaldas.info](https://osvaldas.info/keeping-css-short-with-currentcolor)