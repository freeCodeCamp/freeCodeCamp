---
title: Limit Item Size Using the minmax Function ##
localeTitle: Предельный размер элемента с помощью функции minmax ##
---
Использование функции _minmax_ в сочетании с функцией _повторения_ - это именно то, что описывает этот вызов, но сначала это не было очевидно для меня очевидным. Способ передачи этой задачи состоит в том, чтобы удалить значение **максимальной ширины** в функции _повторения_ , а затем добавить функцию _minmax_ вместо значения **максимальной ширины** _повторения_ .

Вот **пример** того, что похоже на использование _до_ и _после_ подхода:

### До

```css
    grid-template-columns: repeat(3, 1fr); 
```

### После

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

* * *

Вы также можете проверить это встроенное перо на Codepen, чтобы увидеть пример в действии, который вы можете изменить для просмотра результатов:

См. Pen [limit-item-size-using-the-minmax-функция с](https://codepen.io/skywardcode/pen/EeGGze/) помощью skywardcode ( [@skywardcode](https://codepen.io/skywardcode) ) на [CodePen](https://codepen.io) .

### Ресурсы

[Сеть разработчиков Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)