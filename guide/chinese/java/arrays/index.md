---
title: Arrays
localeTitle: 数组
---
# 排列

Array是在顺序存储器地址中保存的具有相似数据类型（允许数据类型形式的基元和引用）的值（或对象）的集合。 Array用于存储类似数据类型的集合。 数组总是从索引0开始，并实例化为一定数量的索引。 数组中的所有变量必须是同一类型，在实例化时声明。

**句法：**

```java
dataType[] arrayName;   // preferred way 
```

这里， `java datatype[]`描述了在它之后声明的所有变量将被实例化为指定数据类型的数组。因此，如果我们想要实例化更多类似数据类型的数组，我们只需要在指定的`java arrayName`之后添加它们（不要忘记仅通过逗号分隔它们）。下一节将给出一个例子以供参考。

```java
dataType arrayName[];  //  works but not preferred way 
```

这里， `java datatype`仅描述了属于该数据类型后所声明的变量。此外，变量名后面的`java []`描述变量是指定数据类型的数组（而不仅仅是该数据类型的值或对象）。因此，如果我们想要实例化更多相似数据类型的数组，我们将在已经指定的数组之后添加变量名称，用逗号分隔，每次我们必须在变量名后添加`java []` ，否则变量将是实例化为普通的值存储变量（不是数组）。为了更好地理解，下一节将给出一个示例。

## 上述语法的代码片段：

```java
double[] list1, list2; // preferred way 
```

上面的代码片段实例化了两个双重类型名称list1和list2的数组。

```java
double list1[], list2; // works but not preferred way 
```

上面的代码片段是一个数组类型的数组double，名为list1，数据类型为double的简单变量，名为list2（不要与名称**list2**混淆。变量名称与变量类型无关）。

注意：样式`double list[]`不是首选，因为它来自C / C ++语言，并且在Java中被采用以适应C / C ++程序员。另外它更具可读性：你可以读到它是一个“双数组命名列表”而不是“一个双重调用列表是一个数组”

## 创建数组：

```java
dataType[] arrayName = new dataType[arraySize]; 
```

## 上述语法的代码片段：

```java
double[] List = new double[10]; 
```

## 另一种创建数组的方法：

```java
dataType[] arrayName = {value_0, value_1, ..., value_k}; 
```

## 上述语法的代码片段：

```java
double[] list = {1, 2, 3, 4}; 
 
 The code above is equivalent to: 
 double[] list = new double[4]; 
 *IMPORTANT NOTE: Please note the difference between the types of brackets 
 that are used to represent arrays in two different ways. 
```

## 访问数组：

```java
arrayName[index]; // gives you the value at the specified index 
```

## 上述语法的代码片段：

```java
System.out.println(list[1]); 
```

输出：
```
2.0 
```

## 修改数组：

```java
arrayName[index] = value; 
```

注意：初始化后，您无法更改阵列的大小或类型。 注意：您可以像这样重置数组

```java
arrayName = new dataType[] {value1, value2, value3}; 
```

## 数组大小：

可以使用“length属性”找到数组中的元素数量。这里应该注意， `java length`是每个数组的**属性** ，即存储变量长度的变量名。不能将它与数组**方法**混淆，因为该名称与String类对应的`java length()`方法相同。

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 System.out.println(a.length); //prints 5 
```

## 上述语法的代码片段：

```java
list[1] = 3; // now, if you access the array like above, it will output 3 rather than 2 
```

_代码示例：_

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 for (int i = 0; i < a.length; i++){ // loop goes through each index 
    System.out.println(a[i]); // prints the array 
 } 
```

输出：

```java
    4 
    5 
    6 
    7 
    8 
```

### 多维数组

二维数组（2D数组）可以被认为是具有行和列的表。虽然这种表示只是一种可视化阵列的方法，可以更好地解决问题。这些值实际上仅存储在顺序存储器地址中。

```java
int M = 5; 
 int N = 5; 
 double[][] a = new double [M][N]; //M = rows N = columns 
 for(int i = 0; i < M; i++) { 
    for (int j = 0; j < N; j++) { 
        //Do something here at index 
    } 
 } 
```

这个循环将执行M ^ N次并将构建此：

\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

类似地，也可以制作3D阵列。它可以被视为长方体而不是矩形（如上所示），被分成较小的立方体，每个立方体存储一些值。它可以初始化如下：

```java
int a=2, b=3, c=4; 
 int[][][] a=new int[a][b][c]; 
```

以类似的方式，可以是他/她希望的多个维度的阵列，但是难以以特定方式可视化多于3个维度的阵列。

### 锯齿状阵列

锯齿状数组是多维数组，具有一定数量的行但具有不同数量的列。锯齿状数组用于节省阵列的内存使用。这是一个代码示例：

```java
int[][] array = new int[5][]; //initialize a 2D array with 5 rows 
 array[0] = new int[1]; //creates 1 column for first row 
 array[1] = new int[2]; //creates 2 columns for second row 
 array[2] = new int[5]; //creates 5 columns for third row 
 array[3] = new int[5]; //creates 5 columns for fourth row 
 array[4] = new int[5]; //creates 5 columns for fifth row 
```

输出：

\[0\]  
\[0 | 1\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

#### 更多信息：

*   来源： [Java Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)