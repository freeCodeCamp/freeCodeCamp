---
title: Clear Property
localeTitle: Очистить недвижимость
---
## Очистить недвижимость

Вы можете использовать свойство `clear` чтобы нажать элемент, чтобы он не появлялся рядом с элементом, перемещенным по прецеденту.

Свойство `clear` может иметь следующие значения:

Это свойство используется после того, как свойство `float` используется для «очистки» от `float` .

```css
clear: none; 
 clear: left; 
 clear: right; 
 clear: both; 
 clear: inline-start; 
 clear: inline-end; 
```

### Пример:

![Clear Property Image](https://image.ibb.co/defebR/clear.png "Очистить недвижимость")

В приведенном выше примере желтый `div` имеет свойство `float:left` и может подпадать под коралловый `div` . Однако, поскольку желтый `div` также обладает свойством `clear: both` , он перемещается ниже плавающих элементов.

#### Дополнительная информация:

*   https://css-tricks.com/almanac/properties/c/clear/
*   https://www.w3schools.com/cssref/pr _класс_ clear.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/clear