---
title: For...Of Loop
localeTitle: 对于...... Of Loop
---
`for...of`语句创建循环遍历可迭代对象（包括Array，Map，Set，Arguments对象等），调用自定义迭代挂钩，其中包含要为每个不同属性的值执行的语句。

```javascript
    for (variable of object) { 
        statement 
    } 
```

| |说明| | ---------- | ------------------------------------- | |变量|在每次迭代时，将不同属性的值分配给变量。 | |对象|迭代其可枚举属性的对象。 |

## 例子

### 排列

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

### 地图

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

### 组

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

### 参数对象

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

# 其他资源：

*   [MDN链接](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for…of)
*   [MSDN链接](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
*   [参数@@ iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)