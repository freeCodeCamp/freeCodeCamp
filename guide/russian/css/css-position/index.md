---
title: CSS Position
localeTitle: Позиция CSS
---
## Позиция CSS

Свойство position указывает тип метода позиционирования, используемый для элемента. Он имеет 5 значений ключевых слов:

```css
.static         { position: static; } // default value 
 .relative       { position: relative; } 
 .sticky         { position: sticky; } 
 .fixed          { position: fixed; } 
 .absolute       { position: absolute; } 
```
#### position: absolute
Если вы добавите к какому либо элементу свойство `position: absolute; left: 0; top: 0;`, то ваш элемент переместиться в левый верхний угол вашей страницы(перекрывая все элменты, находящиеся там). Иначе говоря он будет иметь 0 отступов с верхушки(`top: 0`) и 0 отступов слева (`left: 0`)

### Дополнительная информация:

MDN Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Поддержка браузера: [caniuse](http://caniuse.com/#search=position)

YouTube: [Part1](https://www.youtube.com/watch?v=kejG8G0dr5U) | [Часть 2](https://www.youtube.com/watch?v=Rf6zAP4YnZA)
