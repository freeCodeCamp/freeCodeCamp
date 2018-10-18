---
title: Use the map Method to Extract Data from an Array
localeTitle: Используйте метод «Карта» для извлечения данных из массива
---
## Используйте метод «Карта» для извлечения данных из массива

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

array.prototype.map выполняет функцию как входную и возвращает массив. Возвращенный массив включает элементы, которые обрабатываются функцией. Эта функция принимает отдельные элементы в качестве входных данных.

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Решение промежуточного кода:

```javascript
  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) ); 
```

\### Код Объяснение: Используя нотацию ES6, каждый элемент массива обрабатывается для извлечения заголовка и рейтинга. Для возврата объекта необходимы скобки.

#### Связанные ссылки

*   [Функции стрелки](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)