---
title: Dynamic Programming
localeTitle: 动态编程
---
## 动态编程

动态编程（DP）是一种编程技术，用于解决其子问题的计算重叠的问题：您以避免重新计算已解决问题的方式编写程序。 这种技术通常与memoization结合使用，memoization是一种优化技术，可以缓存先前计算的结果，并在再次需要相同的计算时返回缓存的结果。

Fibonacci系列的一个例子，定义如下：

`F(N) = F(N-1) + F(N-2)`

这是找到F（5）的树：

![斐波那契系列的树](https://cdn-media-1.freecodecamp.org/imgr/59Rpw.png)

要计算F（5），它需要计算相同F（i）的许多倍。使用递归：

```python
def fib(n) 
 { 
    if n <= 1: 
        return n 
    return fib(n-1) + fib(n-2); 
 } 
```

以下是优化的解决方案（使用DP）

对于F（5），该解决方案将生成上图中描绘的调用，在O（2 ^ N）中运行。

这是一个使用DP和memoization的优化解决方案：

```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers 
 
 def fib(n) 
 { 
    if n in lookup: # If n is already computed 
        return n # Return the previous computed solution 
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion. 
    return lookup[n] 
 } 
```

在查找表中缓存计算解决方案，并在递归之前查询它将使程序具有O（N）的运行时间。

#### 更多信息：

[什么是StackOverflow上的动态编程](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming) [StackOverflow上的memoization和DP之间的区别](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)