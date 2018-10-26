---
title: Object Destructuring
localeTitle: Уничтожение объектов
---
# Уничтожение объектов

Деструктурирование - удобный способ извлечения нескольких значений из данных, хранящихся в объектах. Он может использоваться в местах, которые получают данные (например, левую часть задания). Эта функция представлена ​​в `ECMAScript 6` .

Как извлечь значения задается с помощью шаблонов (читайте далее для примеров).

### Основное назначение
```
var userInfo = {name: 'neel', age: 22}; 
 var {name, age} = userInfo; 
 
 console.log(name); // neel 
 console.log(age); // 22 
```

### Назначение без декларации

Переменной может быть присвоено ее значение с деструктурированием отдельно от ее объявления.
```
var name, age; 
 
 ({name, age} = {name: 'neel', age: 22}); 
```

> `( .. )` вокруг оператора присваивания требуется синтаксис при использовании назначения деструктурирования литерала объекта без объявления.
> 
> `{name, age} = {name: 'neel', age: 22}` недействителен автономным синтаксисом, так как `{name, age}` в левой части считается блоком, а не литералом объекта.
> 
> Тем не менее, `({name, age} = {name: 'neel', age: 22})` действителен, как и `var {name, age} = {name: 'neel', age: 22}`

### Присвоение имен новой переменной

Свойство может быть распаковано из объекта и присвоено переменной с другим именем, чем свойство объекта.
```
var userInfo = {a: 'neel', b: 22}; 
 var {a: name, b: bar} = userInfo; 
 
 console.log(name); // neel 
 console.log(bar); // 22 
```

### Значения по умолчанию

Переменной может быть присвоено значение по умолчанию, в случае, если значение, распакованное из объекта, не `undefined` .
```
var {name = 'ananonumys', age = 20} = {name: 'neel'}; 
 
 console.log(name); // neel 
 console.log(age); // 20 
```

### Назначение имен новых переменных и предоставление значений по умолчанию

Свойство может быть как

1.  распаковывается с объекта и назначается переменной с другим именем и
2.  присваивается значение по умолчанию, если значение неупакованного значения не `undefined` .
```
var {a:name = 'ananonumys', b:age = 20} = {age: 22}; 
 
 console.log(name); // ananonumys 
 console.log(age); // 22 
```

### Установка значения параметра функции по умолчанию

#### Версия ES5
```
function getUserInfo(data) { 
  data = data === undefined ? {} : data; 
  var name = data.name === undefined ? 'ananonumys' : data.name; 
  var age = data.age === undefined ? 20 : data.age; 
  var location = data.location === undefined ? 'india' : data.location; 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

#### Версия ES2015
```
function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) { 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

> В сигнатуре функции для `getUserInfo` выше деструктурированная левая сторона назначается пустым объектным литералам в правой части: `{name = 'ananonumys', age = 20, location = 'india'} = {}` . Вы могли бы также написать функцию без назначения правой стороны. Однако, если вы не учитываете назначение правой части, функция будет искать по крайней мере один аргумент, который будет предоставлен при вызове, тогда как в его текущей форме вы можете просто вызвать `getUserInfo()` без предоставления каких-либо параметров. Текущая конструкция полезна, если вы хотите иметь возможность вызывать функцию без предоставления каких-либо параметров, другая может быть полезна, когда вы хотите, чтобы объект передавался функции.

### Уничтожение объектов и массивов
```
var metadata = { 
    title: 'Scratchpad', 
    translations: [ 
       { 
        locale: 'de', 
        localization_tags: [], 
        last_edit: '2014-04-14T08:43:37', 
        url: '/de/docs/Tools/Scratchpad', 
        title: 'JavaScript-Umgebung' 
       } 
    ], 
    url: '/en-US/docs/Tools/Scratchpad' 
 }; 
 
 var {title: englishTitle, translations: [{title: localeTitle}]} = metadata; 
 
 console.log(englishTitle); // "Scratchpad" 
 console.log(localeTitle);  // "JavaScript-Umgebung" 
```

### Для итерации и деструкции
```
var people = [ 
  { 
    name: 'Mike Smith', 
    family: { 
      mother: 'Jane Smith', 
      father: 'Harry Smith', 
      sister: 'Samantha Smith' 
    }, 
    age: 35 
  }, 
  { 
    name: 'Tom Jones', 
    family: { 
      mother: 'Norah Jones', 
      father: 'Richard Jones', 
      brother: 'Howard Jones' 
    }, 
    age: 25 
  } 
 ]; 
 
 for (var {name: n, family: {father: f}} of people) { 
  console.log('Name: ' + n + ', Father: ' + f); 
 } 
 
 // "Name: Mike Smith, Father: Harry Smith" 
 // "Name: Tom Jones, Father: Richard Jones" 
```

### Распаковка полей из объектов, переданных как параметр функции
```
function userId({id}) { 
  return id; 
 } 
 
 function whois({displayName, fullName: {firstName: name}}) { 
  console.log(displayName + ' is ' + name); 
 } 
 
 var user = { 
  id: 42, 
  displayName: 'jdoe', 
  fullName: { 
      firstName: 'John', 
      lastName: 'Doe' 
  } 
 }; 
 
 console.log('userId: ' + userId(user)); // "userId: 42" 
 whois(user); // "jdoe is John" 
```

Это распаковывает `id` , `displayName` и `firstName` из объекта пользователя и печатает их.

### Имена объектов вычисляемого объекта и деструктурирования
```
let key = 'z'; 
 let {[key]: foo} = {z: 'bar'}; 
 
 console.log(foo); // "bar" 
```

См. Также: **Уничтожение объектов** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)