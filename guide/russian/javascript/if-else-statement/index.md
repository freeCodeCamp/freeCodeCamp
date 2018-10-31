---
title: If-Else Statement
localeTitle: If-Else Statement
---
## Введение

Оператор `if` выполняет команды, если определенное условие оценивается как истинное или `true` . Если условие оценивается как `false` , возможно выполнить другие команды с помощью инструкции `else` .

**Примечание.** Оператор `else` является необязательным.

```javascript
if (condition) 
    /* do something */ 
 else 
    /* do something else */ 
```

Несколько условный операторов `if...else` могут быть соединены для создания предложения `else if` . Это указывает новое условие для проверки и может быть повторено для проверки нескольких условий, до тех пор пока одно из условий не примет значение "истина" или `true` .

```javascript
if (condition1) 
    /* do something */ 
 else if (condition2) 
    /* do something else */ 
 else if (condition3) 
    /* do something else */ 
 else 
    /* final statement */ 
```

**Примечание.** Если вы хотите выполнить более одной команды в части `if` , `else` или `else if` , нужно использовать фигурные скобки вокруг операторов:

```javascript
if (condition) { 
    /* do */ 
    /* something */ 
    /* with multiple statements */ 
 } else { 
    /* do something */ 
    /* else */ 
 } 
```

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Примеры

**Использование** `if...else` :

```javascript
    // If x=5 z=7 and q=42. If x is not 5 then z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
```

**Использование** `else if` :

```javascript
if (x < 10) 
    return "Small number"; 
 else if (x < 50) 
    return "Medium number"; 
 else if (x < 100) 
    return "Large number"; 
 else { 
    flag = 1; 
    return "Invalid number"; 
 } 

```
