---
title: String.prototype.includes
localeTitle: String.prototype.includes
---
## String.prototype.includes

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .

Метод `includes()` используется для определения того, можно ли найти одну строку в другой строке. Этот метод возвращает логическое значение ( `true` или `false` ).

Важно отметить, что этот метод чувствителен к регистру.

**Синтаксис**

```js
string.includes(searchString[, position]) 
```

**параметры**

Этот метод требует только одного параметра (searchString). Однако, включив второй параметр (положение), вы можете начать поиск строки в строке из определенной позиции (или индекса) в searchString.

**Примеры**

```js
let string = "Roses are red, violets are blue."; 
 
 string.includes('red'); // returns true 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('Red'); // returns false 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('red',12); // returns false because 'red' starts at position 9, and our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('blue',12); // returns true because 'blue' starts after our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('violets are blue'); // returns true 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)