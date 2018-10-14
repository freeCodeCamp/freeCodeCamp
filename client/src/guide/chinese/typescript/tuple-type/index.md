---
title: Tuple Type
localeTitle: 元组类型
---
# 元组类型

表示一个数组，其中已知固定数量的类型元素，但不一样。

```typescript
let arr: [string, number]; 
 
 // This is correct 
 arr = ['Hello', 7]; 
 
 //This is incorrect 
 arr = [7, 'Hello']; 
```

访问已知索引之外的元素时，它将使用联合类型：

```typescript
arr[3] = 'World!' 
 // OK, 'string' can be assigned to 'string | number' 
 
 // Error, 'boolean' is not a 'string | number' 
 arr[5] = false; 
 // Error, 'boolean' is not a 'string | number' 
```

## 属性

在Typescript的类型中，您可以拥有一些buit-in属性。例如长度或其他每种类型的独特。

### 长度

这个属性说，有多少元素有它的元素。

```typescript
let tuple = []; //you can initialize it after the declaration too, not just the method above 
 tuple[0] = 10; 
 tuple[1] = 'Mike'; 
 let number = tuple.length; 
 //number = 2; 
```

## 内置方法

在Typescript的类型中，您可以使用一些内置函数。每种类型都有共同和独特的方法。 下面你可以阅读有关元组类型方法中最常用的方法。

### 流行（）

从元组中删除最后一个元素。

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.pop(); 
 //tuple = [10,'Emma',11,'Lily',12,] 
 //We popped 'Mike Ross' from the tuple 
```

### 推（）

将元素添加到元组的末尾。

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.push('Rachel Zane'); 
 //tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane'] 
```

[有关TutorialsPoint上的元组的更多信息](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)