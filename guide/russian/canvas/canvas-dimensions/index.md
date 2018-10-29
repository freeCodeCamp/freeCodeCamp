---
title: Canvas Dimensions
localeTitle: Размеры холста
---
## Размеры холста

Атрибуты `width` и `height` будут определять размер холста. Эти атрибуты управляют размером холста чертежа, а не фактическим отображаемым размером.

См. [Демонстрацию размеров](https://codepen.io/alanluo/pen/jLWMmM/) [полотна](https://codepen.io/alanluo) Pen Alan Luo ( [@alanluo](https://codepen.io/alanluo) ) на [CodePen](https://codepen.io) .

В приведенном выше перо оба элемента `canvas` имеют одинаковые размеры, установленные через CSS. Тем не менее, в два раза больше высоты, установленной через атрибут `height` , что приводит к тому, что один и тот же прямоугольник становится отображаемым на половине высоты.

Это может вызвать проблемы, когда вы хотите создать холст с динамическим размером. Для instnace вы можете сделать полноэкранный холст или использовать холст в виде миниатюры.

Чтобы размер контекста рисования соответствовал визуализированному размеру элемента `canvas` , мы должны заставить его в реальном времени. Одной из распространенных практик является включение в обработчик `onResize` следующего обработчика.

```js
// somewhere early in the script 
 var canvas = document.getElementById("canvas"); 
 ... 
 
 window.addEventListener("resize", function() { 
    canvas.setAttribute("width", canvas.scrollWidth); 
    canvas.setAttribute("height", canvas.scrollHeight); 
    console.log(canvas.offsetWidth); 
 }); 
```

#### Дополнительная информация:

*   [API холста MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)