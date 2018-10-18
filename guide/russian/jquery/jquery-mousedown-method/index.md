---
title: Mousedown Method
localeTitle: Метод Mousedown
---# Метод Mousedown

Событие mousedown происходит при нажатии левой кнопки мыши. Чтобы вызвать событие mousedown для выбранного элемента, используйте этот синтаксис: `$(selector).mousedown();`

Однако большую часть времени метод mousedown используется с функцией, связанной с событием mousedown. Вот синтаксис: `$(selector).mousedown(function);` Например:
```
$(#example).mousedown(function(){ 
   alert("Example was clicked"); 
 }); 
```

Этот код сделает предупреждение страницы «Пример был нажат» при нажатии кнопки #example.

### Больше информации

Более подробную информацию можно найти [здесь](https://www.w3schools.com/jquery/event_mousedown.asp) .