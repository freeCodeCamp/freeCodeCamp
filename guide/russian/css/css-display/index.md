---
title: CSS Display
localeTitle: Отображение CSS
---
## Отображение CSS

Свойство display указывает тип поля, используемого для элемента HTML. Он имеет 20 возможных значений ключевых слов. Обычно используются:

```css
    .none             {display: none} 
    .block            {display: block} 
    .inline-block     {display: inline-block} 
    .inline           {display: inline} 
    .flex             {display: flex} 
    .inline-flex      {display: inline-flex} 
    .inline-table     {display: inline-table} 
    .table            {display: table} 
    .inherit          {display: inherit} 
    .initial          {display: initial} 
```

`display:none` свойство `display:none` часто может быть полезно при реагировании на веб-сайт. Например, вы можете скрыть элемент на странице с уменьшением размера экрана, чтобы компенсировать нехватку места. `display: none` не только скроет элемент, но все остальные элементы на странице будут вести себя так, как если бы этот элемент не существовал. Это самая большая разница между этим свойством и `visibility: hidden` свойство, которое скрывает элемент, но сохраняет все остальные элементы страницы в том же месте, что и они, если бы скрытый элемент был видимым.

Эти значения ключевых слов сгруппированы в шесть категорий:

*   `<display-inside>`
*   `<display-outside>`
*   `<display-listitem>`
*   `<display-box>`
*   `<display-internal>`
*   `<display-legacy>`

### Дополнительная информация:

*   [MDN - отображение](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [caniuse - Поддержка браузера](http://caniuse.com/#search=display)
*   [CSS-Tricks - полное руководство по Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)