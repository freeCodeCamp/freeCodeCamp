---
title: Output 
localeTitle: Вывод
---
## Вывод

Существует четыре наиболее распространенных способа вывода данных через консоль. Они будут использоваться большей частью вашего процесса разработки.

#### `console.log`

Это самый распространенный и используемый способ вывода данных. Общепринятая практика заключается в том, чтобы вставить пару из них между операторами, чтобы понять, как данные текут и обрабатываются. Кроме того, вы можете использовать `debugger` или точки останова в devtools, чтобы сделать то же самое без загрязнения вашего кода.

```javascript
var numbers  = [ 1, 2, 3, 4, 5, 6, 7]; 
 numbers.forEach(function(number){ 
  console.log(number + ' is divisible by 2', number%2 == 0); 
 }); 
```

#### `console.warn`

Как вы догадались по имени, это используется для отображения предупреждений, и типичный желтый цвет отличает его от ошибки red & `console.log` .

```javascript
function isAdult(age){ 
  if(Number(age) < 18){ 
    console.warn('You are not an adult'); 
    return false; 
   } 
   return true; 
 } 
```

#### `console.error`

Как вы можете догадаться, это используется при выбросе исключения или ошибке в коде. Дает красное сообщение об ошибке, чтобы быстро привлечь внимание.

#### `console.table`

Предположим, у вас есть список предметов или фильмов в объекте json, и вы хотите проверить это в формате таблицы, тогда ваш лучший `console.table` - `console.table` . Он автоматически определяет заголовки строк и столбцов из данных.

_Попробуйте запустить код ниже в консоли_

```javascript
var data = { 
  "colors": [ 
    { 
      "color": "black", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,255,1], 
      "hex": "#000" 
    }, 
    { 
      "color": "white", 
      "category": "value", 
      "rgba": [0,0,0,1], 
      "hex": "#FFF" 
    }, 
    { 
      "color": "red", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,0,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "blue", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [0,0,255,1], 
      "hex": "#00F" 
    }, 
    { 
      "color": "yellow", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "green", 
      "category": "hue", 
      "type": "secondary", 
      "rgba": [0,255,0,1], 
      "hex": "#0F0" 
 
    }, 
  ] 
 } 
 
 console.table(data.colors); 
```

Кроме того, вы можете контролировать и фильтровать тип вывода, который вы хотите видеть на консоли.

1.  Все
2.  Подробный
3.  Предупреждение
4.  ошибки

#### Дополнительная информация:

*   [Полная ссылка объекта консоли на Google](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
*   [Консоль MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)