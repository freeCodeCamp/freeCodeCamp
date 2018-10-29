---
title: String Type
localeTitle: 字符串类型
---
# 字符串类型

字符串可以用`''`单引号或`""`双引号书写。 与您的代码保持一致并选择一种风格。

```typescript
let dog: string = 'Fido'; 
 let activity: string = "Playing Outside"; 
```

可以使用模板文字来编写字符串：

```typescript
let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`; 
```

## 内置方法

在Typescript的类型中，您可以使用一些内置函数。每种类型都有共同和独特的方法。 您可以在下面阅读有关字符串类型方法中最常用的方法。

### 拆分（'分隔符'，限制）

使用split函数，您可以在指定的分隔符处拆分字符串。您可以设置限制数，即可以说有多少拆分。 splitted字符串以数组类型返回。

```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey'; 
 let array: string[] = names.split(','); 
 //array = ['Sarah','Lily','John','Paula','Harvey'] 
 let array2: string[] = names.split(',',2); 
 //array2 = ['Sarah','Lily'] 
```

### SUBSTR（startAt，长度）

此方法返回一个子字符串，该子字符串以原始字符串的`startAt`字符`startAt` ，其长度为`length` 。

```typescript
let names: string = 'Harvey Specter'; 
 let substr: string = names.substr(3,10); 
 //substr = 'rvey Spect' 
```

### 子（startAt，ENDAT）

此方法类似于substr（），但具有不同的参数。第二个参数也是关于原始字符串的索引，而不是长度编号。

```typescript
let names: string = 'Harvey Specter'; 
 let substring: string = names.substring(3,10); 
 //substring = 'rvey Spe' 
```

[TutorialsPoint提供了更多方法和说明](https://www.tutorialspoint.com/typescript/typescript_strings.htm)