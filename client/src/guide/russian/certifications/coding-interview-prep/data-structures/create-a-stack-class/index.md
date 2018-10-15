---
title: Create a Stack Class
localeTitle: Создать класс стека
---
## Создать класс стека

### Метод:

*   Стек представляет собой абстрактную структуру данных.
*   Стек следует за принципом LIFO / FILO.

## \- В этом вызове нам нужно добавить `.push()` , `.pop()` , `.peek()` , `.isEmpty()` и `.clear()` .

*   Метод `push()` выталкивает значение в стек.
*   `pop()` выдает первое значение из стека.
*   Метод `peek()` возвращает первое значение из стека.
*   Метод `isEmpty()` проверяет, пустой ли стек.

## \- `.clear()` удаляет все элементы из стека.

| DS | Доступ | Поиск | Вставить | Удалить | | ----- | ------ | ------ | ------ | ------ | | Стек | n | n | 1 | 1 |

### Решение:

#### Основные:

```js
function Stack() { 
    var collection = []; 
    this.print = function() { 
        console.log(collection); 
    }; 
    this.push = function(val){ 
        return collection.push(val); 
    } 
    this.pop = function(){ 
        return collection.pop(); 
    } 
    this.peek = function(){ 
        return collection[collection.length-1]; 
    } 
    this.isEmpty = function(){ 
        return collection.length === 0; 
    } 
    this.clear = function(){ 
        collection.length = 0; 
    } 
 } 
```

#### Дополнительно - синтаксис класса ES6:

```js
class Stack { 
    constructor() { 
        this.collection = []; 
    } 
    print(){ 
        console.log(this.collection); 
    } 
    push(val){ 
        retiurn this.collection.push(val); 
    } 
    pop(){ 
        return this.collection.pop(); 
    } 
    peek(){ 
        return this.collection[this.collection.length-1]; 
    } 
    isEmpty(){ 
        return this.collection.length === 0; 
    } 
    clear(){ 
        return this.collection.length = 0; 
    } 
 } 
```

\### Ресурсы:

*   [Википедия](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))