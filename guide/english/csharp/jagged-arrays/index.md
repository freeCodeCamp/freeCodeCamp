---
title: Jagged Arrays
---

# Jagged Arrays

Jagged arrays are multidimensional arrays that provide flexibility by allowing each row to have a different number of elements.

![alt text](https://github.com/abbas10m/Algorithms/blob/master/resources/2D.JPG "2D Arrays") ![alt text](https://github.com/abbas10m/Algorithms/blob/master/resources/JAGGED.JPG "Jagged Arrays")


## Declaration

```csharp
int[][] jagged = new int[5][];
```

## Initialization

```csharp
jagged[0] = new int[] { 20,58,64,78 };
jagged[1] = new int[] { 0,8,7,3 };
jagged[2] = new int[] { 21, 55 };
jagged[3] = new int[] { 15,7,6,25,30,48,52,69,99 };
jagged[4] = new int[] { 2 };
```

## Accessing individual elements

```csharp
int x = jagged[2][0] 
```
Here, the value of `x = 21` 

## References

[Jagged Arrays (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)
