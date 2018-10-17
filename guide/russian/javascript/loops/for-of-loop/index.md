---
title: For...Of Loop
localeTitle: Для ... цикла
---
Оператор `for...of` создает цикл, повторяющийся по итерируемым объектам (включая объект Array, Map, Set, Arguments и т. Д.), Вызывая пользовательский крючок итерации с операторами, которые будут выполняться для значения каждого отдельного свойства.

```javascript
    for (variable of object) { 
        statement 
    } 
```

| | Описание | | ---------- | ------------------------------------- | | переменная | На каждой итерации переменной присваивается значение другого свойства. | | объект | Объект, перечислимые свойства которого повторяются. |

## Примеры

### массив

```javascript
    let arr = [ "fred", "tom", "bob" ]; 
 
    for (let i of arr) { 
        console.log(i); 
    } 
 
    // Output: 
    // fred 
    // tom 
    // bob 
```

### карта

```javascript
    var m = new Map(); 
    m.set(1, "black"); 
    m.set(2, "red"); 
 
    for (var n of m) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1,black 
    // 2,red 
```

### Задавать

```javascript
    var s = new Set(); 
    s.add(1); 
    s.add("red"); 
 
    for (var n of s) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1 
    // red 
```

### Аргумент объекта

```javascript
    // your browser must support for..of loop 
    // and let-scoped variables in for loops 
 
    function displayArgumentsObject() { 
        for (let n of arguments) { 
            console.log(n); 
        } 
    } 
 
 
    displayArgumentsObject(1, 'red'); 
 
    // Output: 
    // 1 
    // red 
```

# Другие источники:

*   [Ссылка MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for…of)
*   [Ссылка MSDN](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
*   [arguments @@ iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)