---
title: For Each Loop
localeTitle: 对于每个循环
---
# 对于每个循环

也称为增强型`for`循环，它是一种非常有用且简单的方法来迭代集合，数组或实现`Iterable`接口的任何对象中的每个项目。

```java
for (object : iterable) 
 { 
    // Statements 
 } 
```

该循环被读作“对于`iterable`每个元素（可以是数组，可收集等）”。 `object`类型必须与`iterable`的元素类型匹配。

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for (int numbers : number_list) 
 { 
    System.out.print(numbers + " "); 
    // Iterated 10 times, numbers 0,1,2...9 
 } 
```

输出：
```
    0 1 2 3 4 5 6 7 8 9 
```

：rocket： [运行代码](https://repl.it/CJYs/0)

将其与传统的`for`循环进行比较：

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for(int i=0;i < number_list.length;i++) 
 { 
  System.out.print(number_list[i]+" "); 
      // Iterated 10 times, numbers 0,1,2...9 
 
 } 
```

输出：
```
    0 1 2 3 4 5 6 7 8 9 
```

：rocket： [运行代码](https://repl.it/NJfG/0)

上面的两段代码片段都做了同样的工作，但是，很明显，每个循环都有利于迭代和访问集合的元素（在我们的例子中，数组）更容易。

使用增强的for循环，我们不再需要提及循环的起点和终点，从而减少OutofBounds错误。 删除了对循环计数器和手动索引的需求，并且改进了代码的可读性。

重要的是要注意，对循环内的增强for循环进行迭代变量的更改不会导致原始集合元素的更改。

增强的for循环也可以与多维数组或其他Java集合一起使用。 它与多维数字阵列的使用示例如下所示：

```java
int number_list_new[][]={  {  0,  1, 2}, 
                  {  3, 4, 5}, 
                  { 6, 7, 8} }; 
 
 // Because 2d arrays are implemented as "arrays of arrays",the first iteration variable iterates 
 // through 3 such arrays(that is, the 3 rows of testarr[][]) 
 for(int i[] : number_list_new) 
 { 
  for(int j : i){ 
    System.out.print(j+" "); 
  } 
 } 
```

输出：
```
0 1 2 3 4 5 6 7 8 
```

：rocket： [运行代码](https://repl.it/NJhP/0)

在上面的代码片段中， `number_list`是一个数组。如果您不知道这是什么，请不要担心。数组是一个容器对象，它包含固定数量的单个类型的值，但稍后会有更多内容。