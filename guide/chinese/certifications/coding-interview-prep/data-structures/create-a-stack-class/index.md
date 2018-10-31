---
title: Create a Stack Class
localeTitle: 创建一个堆栈类
---
## 创建一个堆栈类

### 方法：

*   Stack是一种抽象的数据结构。
*   堆栈遵循LIFO / FILO原则。

## \-在这个挑战，我们需要添加`.push()` `.pop()` `.peek()` `.isEmpty()`和`.clear()`方法的类。

*   `push()`方法将值推送到堆栈。
*   `pop()`方法弹出堆栈中的第一个值。
*   `peek()`方法返回堆栈中的第一个值。
*   `isEmpty()`方法检查堆栈是否为空。

## \- `.clear()`方法从堆栈中删除所有元素。

| DS |访问|搜索|插入|删除| | ----- | ------ | ------ | ------ | ------ | |堆栈| n | n | 1 | 1 |

### 解：

#### 基础：

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

#### 高级 - ES6类语法：

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

###资源：

*   [维基百科](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))