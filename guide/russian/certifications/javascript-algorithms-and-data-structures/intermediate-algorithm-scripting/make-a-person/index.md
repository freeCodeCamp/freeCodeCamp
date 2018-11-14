---
title: Make a Person
localeTitle: Сделать человека
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Когда я начал программу, я решил, что мне просто нужно было создать шесть функций, упомянутых в деталях. Однако это было не так просто. Создание их как функции было неправильным, я должен был создать их по-другому, чтобы сделать их ключом.

Также есть сложная часть, так как вам нужны шесть ключей не более или менее, поэтому сначала у меня была переменная, которая хранит исходное имя в качестве ключа тоже, что было неправильно.

Что касается использования массива, то это необязательно, вы также можете создать новую переменную для хранения разделенной строки, если хотите, но массив легче справиться, поскольку строки неизменяемы.

Внимательно прочитайте инструкции, это всегда хороший совет для запуска кода и проверки результатов теста, чтобы вы знали, чего ожидать, но не зацикливаетесь на этом. Как только вы поймете, что вам нужно сделать, эта проблема очень проста и понятна.

#### Связанные ссылки

*   [Затворы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [Подробная информация об объектной модели](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте **эту** нотацию для создания ключей вместо обычных функций: это означает, что вместо `var varName = function() {/*...*/}` вы должны использовать `this.varName = function() {/*...*/}`

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

В программе есть тест, который проверяет, сколько ключей вы использовали, их должно быть ровно шесть, шесть упомянутых в разделе сведений. Это означает, что если вам нужно работать с переменными, сделайте их локальными, а не ключевыми: `this.fullName = firstAndLast;`

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Часто код не работает так, как вы ожидаете, из-за неправильных имен переменных, убедитесь, что вы правильно написали их. Это происходит со всеми нами в какой-то момент.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 4

Если у вас возникли проблемы с написанием методов `setter` , ниже приведен шаблон для метода `set` :

```js
this.setFullName = function(input) { 
  // Insert your code here 
 } 
```

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```js
var Person = function(firstAndLast) { 
  var fullName = firstAndLast; 
 
  this.getFirstName = function() { 
    return fullName.split(" ")[0]; 
  }; 
 
  this.getLastName = function() { 
    return fullName.split(" ")[1]; 
  }; 
 
  this.getFullName = function() { 
    return fullName; 
  }; 
 
  this.setFirstName = function(name) { 
    fullName = name + " " + fullName.split(" ")[1]; 
  }; 
 
  this.setLastName = function(name) { 
    fullName = fullName.split(" ")[0] + " " + name; 
  }; 
 
  this.setFullName = function(name) { 
    fullName = name; 
  }; 
 }; 
 
 var bob = new Person('Bob Ross'); 
 bob.getFullName(); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLov/0)

### Код Объяснение:

*   Создайте переменную, которая сделает копию полного имени, которое было передано в качестве параметра.
*   Затем мы можем приступить к созданию шести необходимых методов и возврату того, что требуется.
*   Для отдельных сеттеров мы можем использовать split, чтобы превратить полное имя в массив из первых и последних имен и объединить неизмененную часть имени с тем, что было передано в качестве параметра.

#### Связанные ссылки

*   [Как создавать объекты](https://www.freecodecamp.org/challenges/build-javascript-objects)
*   [Построить объекты с функциями](https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions)
*   [Объявлять объекты как переменные](https://www.freecodecamp.org/challenges/declare-javascript-variables)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.