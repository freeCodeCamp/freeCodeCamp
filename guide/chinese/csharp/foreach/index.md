---
title: Foreach Loop
localeTitle: Foreach循环
---
## Foreach循环

`foreach`循环为集合中的每个项执行一段代码。 `foreach`循环的好处是你不需要知道集合中有多少项来迭代它;你只需告诉你的`foreach`循环遍历集合，只要其中有项目。它对于遍历列表，数组，数据表，IEnumerables和其他类似列表的数据结构非常有用。它可能比设计精良`for`环路效率低，但在大多数情况下差异可以忽略不计。

### 例

```csharp
foreach (element in iterable-item) 
 { 
    // body of foreach loop 
 } 
 
 List<string> Names = new List<string>{ "Jim", "Jane", "Jack" } 
 
 foreach(string name in Names) 
 { 
    Console.WriteLine("We have " + name); 
 } 
```

### 输出：

```shell
> We have Jim 
 > We have Jane 
 > We have Jack 

```