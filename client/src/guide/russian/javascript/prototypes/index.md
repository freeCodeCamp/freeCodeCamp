---
title: Prototypes
localeTitle: Прототипы
---
## Прототипы

JavaScript - это язык, основанный на прототипах, поэтому понимание объекта-прототипа является одной из наиболее важных концепций, которые должны знать специалисты-практики JavaScript. В этой статье вы найдете краткий обзор объекта Prototype с помощью различных примеров. Прежде чем читать эту статью, вам нужно будет иметь базовое представление об [`this` ссылке в JavaScript](/src/pages/javascript/this-reference/index.md) .

### Объект прототипа

Для ясности рассмотрим следующий пример:

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
```

Когда `Point2D` функция `Point2D` для нее будет создано свойство по умолчанию `prototype` (обратите внимание, что в JavaScript функция также является объектом). `prototype` свойство является объектом , который содержит `constructor` свойство и его значение `Point2D` функции: `Point2D.prototype.constructor = Point2D` . И когда вы вызываете `Point2D` с `new` ключевым словом, _вновь созданные объекты наследуют все свойства из_ `Point2D.prototype` . Чтобы проверить это, вы можете добавить метод с именем `move` в `Point2D.prototype` следующим образом:

```javascript
Point2D.prototype.move = function(dx, dy) { 
  this.x += dx; 
  this.y += dy; 
 } 
 
 var p1 = new Point2D(1, 2); 
 p1.move(3, 4); 
 console.log(p1.x); // 4 
 console.log(p1.y); // 6 
```

Точка `Point2D.prototype` называется **прототипом объекта** или **прототипа** объекта `p1` и для любого другого объекта, созданного с помощью `new Point2D(...)` . Вы можете добавить дополнительные объекты к объекту `Point2D.prototype` по `Point2D.prototype` . Общей моделью являются методы объявления `Point2D.prototype` а другие свойства будут объявлены в функции конструктора.

Аналогичным образом создаются встроенные объекты в JavaScript. Например:

*   Прототипом объектов, созданных с помощью `new Object()` синтаксиса `new Object()` или `{}` является `Object.prototype` .
*   Прототипом массивов, созданных с помощью `new Array()` или `[]` является `Array.prototype` .
*   И так далее с другими встроенными объектами, такими как `Date` и `RegExp` .

`Object.prototype` наследуется всеми объектами и не имеет прототипа (его прототип имеет значение `null` ).

### Цепочка прототипов

Целевой механизм прототипа прост: когда вы получаете доступ к свойству `p` объекта `obj` , механизм JavaScript будет искать это свойство внутри объекта `obj` . Если двигатель не выполняет поиск, он продолжает поиск в прототипе объекта `obj` и так далее до достижения `Object.prototype` . Если после завершения поиска и ничего не найдено, результат будет `undefined` . Например:

```javascript
var obj1 = { 
  a: 1, 
  b: 2 
 }; 
 
 var obj2 = Object.create(obj1); 
 obj2.a = 2; 
 
 console.log(obj2.a); // 2 
 console.log(obj2.b); // 2 
 console.log(obj2.c); // undefined 
```

В приведенном выше фрагменте оператор `var obj2 = Object.create(obj1)` создаст объект `obj2` с прототипом объекта `obj1` . Другими словами, `obj1` становится прототипом `obj2` вместо `Object.prototype` по умолчанию. Как вы можете видеть, `b` не является свойством `obj2` , вы все равно можете получить к нему доступ через цепочку прототипов. Однако для свойства `c` вы получаете `undefined` значение, потому что оно не может быть найдено в `obj1` и `Object.prototype` .

### Классы

В ES2016 мы теперь используем ключевое слово `Class` а также методы, упомянутые выше, для управления `prototype` . JavaScript `Class` обращается к разработчикам из объектно - ориентированного программирования фона, но это по сути делает то же самое, что и выше.

```javascript
class Rectangle { 
  constructor(height, width) { 
    this.height = height 
    this.width = width 
  } 
 
  get area() { 
    return this.calcArea() 
  } 
 
  calcArea() { 
    return this.height * this.width 
  } 
 } 
 
 const square = new Rectangle(10, 10) 
 
 console.log(square.area) // 100 
```

Это в основном то же самое, что:

```javascript
function Rectangle(height, width) { 
  this.height = height 
  this.width = width 
 } 
 
 Rectangle.prototype.calcArea = function calcArea() { 
  return this.height * this.width 
 } 
```

Методы `getter` и `setter` в классах связывают свойство Object с функцией, которая будет вызываться при поиске этого свойства. Это просто синтаксический сахар, чтобы облегчить _поиск_ или _установку_ свойств.

**Дальнейшее чтение:**

*   [MDN: прототипы объектов](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)