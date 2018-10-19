---
title: Object Assign
localeTitle: Назначение объекта
---
## Назначение объекта

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .

Метод `Object.assign()` используется для 1) добавления свойств и значений в существующий объект, 2) создания новой копии существующего объекта или 3) объединения нескольких существующих объектов в один объект. Метод `Object.assign()` требует одного целевого объекта в качестве параметра и может принимать неограниченное количество sourceObjects в качестве дополнительных параметров.

Важно отметить, что параметр targetObject всегда будет изменен. Если этот параметр указывает на существующий объект, то этот объект будет изменен и скопирован. Однако, если вы хотите создать копию объекта без изменения этого исходного объекта, вы можете передать пустой объект `{}` в качестве первого (или targetObject) параметра и объекта, который будет скопирован как второй (или sourceObject) параметр.

Если объекты, переданные как параметры в `Object.assign()` имеют одни и те же свойства (или ключи), значения свойств, которые появляются позже в списке параметров, будут перезаписывать те, которые были раньше.

**Синтаксис**

```javascript
Object.assign(targetObject, ...sourceObject) 
```

**Возвращаемое значение**

`Object.assign()` возвращает объект targetObject.

**Примеры**

_Изменение и копирование объекта targetObject_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign(obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, coder: true } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Копирование объекта-объекта без изменения_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign({}, obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30 } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Объекты с одинаковыми свойствами_

```javascript
let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'}; 
 
 let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' } 
 console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true } 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[Введение в Object.assign в ES6 (видео)](https://youtu.be/vM7Tif98Dlo)