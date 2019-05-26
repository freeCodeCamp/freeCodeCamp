---
title: Foreach Loop
localeTitle: Перекрестная петля
---
## Перекрестная петля

Цикл `foreach` выполняет блок кода для каждого элемента в коллекции. Преимущество цикла `foreach` заключается в том, что вам не нужно знать, сколько элементов в коллекции будет проходить через него; вы просто указываете свой цикл `foreach` на цикл через коллекцию, если в ней есть элементы. Он полезен для повторения списков, массивов, данных, IEnumerables и других структур данных, подобных спискам. Он может быть менее эффективным, чем очень хорошо спроектированный `for` цикла, но в большинстве случаев разница незначительна.

### пример

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

### Вывод:

```shell
> We have Jim 
 > We have Jane 
 > We have Jack 

```