---
title: Object Freeze
localeTitle: Замораживание объекта
---
## Замораживание объекта

Метод `Object.freeze()` объект. Замороженный объект не _позволит вам_ :

*   Добавление к нему новых свойств
*   Удаление существующих от него прав
*   Изменение перечислимости, конфигурируемости или возможности записи существующих свойств

### Синтаксис

```javascript
Object.freeze(obj) 
```

### параметры

`obj`

*   Объект для замораживания.

### Возвращает

Замороженный объект.

### Важная заметка

Попытка добавления, удаления или изменения свойств замороженного объекта приведет к сбою. Этот отказ будет либо тихим, либо брошенным `TypeError` (если включен Strict Mode). Кроме того, `Object.freeze()` является неглубокой операцией. Это означает, что вложенный объект замороженного объекта может быть изменен.

### пример

```javascript
// Create your object 
 let person = { 
  name: 'Johnny', 
  age: 23, 
  guild: 'Army of Darkness', 
  hobbies: ['music', 'gaming', 'rock climbing'] 
 } 
 
 // Modify your object 
 person.name = 'John' 
 person.age = 24 
 person.hobbies.splice(1,1) 
 delete person.guild 
 
 // Verify your object has been modified 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // Freeze your object 
 Object.freeze(person) 
 
 // Verify that your object can no longer be modified 
 person.name = 'Johnny' // fails silently 
 person.age = 23 // fails silently 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // The freeze is "shallow" and nested objects (including arrays) can still be modified 
 person.hobbies.push('basketball') 
 consol.log(person.hobbies) // ['music', 'rock climbing', 'basketball'] 
```

#### Дополнительная информация:

[Документация MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)