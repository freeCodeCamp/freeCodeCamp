---
title: Wherefore Art Thou
localeTitle: Почему ты
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Напишите алгоритм, который возьмет `array` для первого аргумента и вернет `array` со всем `object` s, который будет соответствовать всем свойствам и значениям в `Object` переданном как второй параметр.

#### Связанные ссылки

*   [Для циклов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [Object.keys ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вы можете использовать `for` цикла или метода `Array.prototype.filter` .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Попробуйте использовать метод `Object.prototype.hasOwnProperty` чтобы узнать, существует ли имя свойства в объекте (как его собственное свойство).

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Проверьте эквивалентность `Object` в `collection` с `Object` переданным в качестве второго параметра функции `whatIsInAName` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    for(var i = 0; i < srcKeys.length; i++) { 
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { 
        return false; 
      } 
    } 
    return true; 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmh/0)

### Код Объяснение:

*   Мы фильтруем через массив с помощью `.filter()` .
*   Используя `for loop` мы перебираем каждый элемент в объекте.
*   Мы используем оператор `if statement` чтобы проверить, не имеет ли объект в коллекции ключа, а значение свойства не соответствует значению в источнике.
*   Мы возвращаем `false` если приведенное выше `if statement` корректно. В противном случае мы возвращаем `true` ;

#### Связанные ссылки

*   Для циклов
*   Array.prototype.filter ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  return collection.filter(function (obj) { 
    return srcKeys.every(function (key) { 
      return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmi/0)

### Код Объяснение:

*   Мы фильтруем коллекцию с помощью `.filter()` .
*   Затем мы возвращаем `Boolean` значение для `.filter()` .
*   Наконец, мы сводим к `Boolean` значению, возвращаемому для `.every()` .

#### Связанные ссылки

*   Array.prototype.filter ()
*   Array.prototype.every ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    return srcKeys 
      .map(function(key) { 
        return obj.hasOwnProperty(key) && obj[key] === source[key]; 
      }) 
      .reduce(function(a, b) { 
        return a && b; 
      }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmj/0)

### Код Объяснение:

*   Начнем с фильтрации через `collection` с помощью `Array.filter()` .
*   Затем мы сопоставляем все ключи и возвращаем логические значения на основе условий проверки: и ключ, и его соответствующее значение должны существовать внутри объекта, который мы фильтруем.
*   Затем мы сводим отображаемые значения Boolean к одному булевому значению, которое указывает, проходят ли все srcKeys указанные выше условия.
*   Этот единственный Boolean будет использоваться для фильтрации через коллекцию.

#### Связанные ссылки

*   Array.prototype.filter ()
*   Array.prototype.reduce ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.