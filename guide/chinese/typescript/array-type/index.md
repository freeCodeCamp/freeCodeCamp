---
title: Array Type
localeTitle: 数组类型
---
# 数组类型

您可以完全访问TypeScript中的数组。 可以在TypeScript中以两种不同的方式编写数组：

**数据类型\[\]**  
DataType后跟方括号`[]`

```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

**阵列<数据类型>**  
`Array`后跟<DataType>

```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

## 内置方法

在Typescript的Array类型中，您可以使用一些内置函数。每种类型都有共同和独特的方法。 您可以在下面了解最常用的数组类型方法。在示例中，我们将使用上面的数组声明。

### 流行（）

从数组中删除最后一个元素并返回它。

```typescript
var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
```

### 推（）

将一个或多个元素添加到数组的末尾，并返回数组的新长度。

```typescript
var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // lenght = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // lenght2 = 8 
```

### 相反（）

反转数组的顺序并返回它

```typescript
var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
```

[TutorialsPoint提供了更多方法和说明](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)