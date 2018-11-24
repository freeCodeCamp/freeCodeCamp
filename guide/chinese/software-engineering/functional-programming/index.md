---
title: Functional Programming
localeTitle: 功能编程
---
## 功能编程

功能编程是通过组合**纯函数** ，避免**共享状态** ， **可变数据**和**副作用**来构建软件的过程。函数式编程是**声明性的** （告诉计算机你想做什么）而不是**命令式** （告诉计算机确切地知道如何做），并且应用程序状态流经纯函数。将其与面向对象编程进行对比，其中应用程序状态通常与对象中的方法共享和共存。

### 为什么功能编程？

*   它通常更简洁
*   它通常更容易预测
*   它比面向对象的代码更容易测试

### 通过编程语言采用

许多编程语言都支持Haskell，F＃，Common Lisp，Clojure，Erlang，OCaml等函数式编程。 JavaScript还具有非类型化函数语言的属性。

### 用途

功能编程长期以来在学术界很受欢迎，但几乎没有工业应用。然而，最近几种主要的功能编程语言已经用于商业或工业系统。例如，Erlang编程语言由瑞典公司Ericsson在20世纪80年代末开发，用于在T-Mobile，Nortel，Facebook，ÉlectricitédeFrance和WhatsApp等公司构建一系列应用程序。

### 高阶函数

高阶函数是函数式编程的重要组成部分。高阶函数是将函数作为参数或返回函数的函数。

### 地图

`map`是一个高阶函数，它将函数调用到列表的每个元素，并将结果作为_新_列表返回。

这是一个`map`的例子：

```javascript
const myList = [6, 3, 5, 29]; 
 
 let squares = myList.map(num => num * num); // [36, 9, 25, 841] 
```

### 更多信息：

*   [维基百科 - 功能编程](https://en.wikipedia.org/wiki/Functional_programming#Use_in_industry)
    
*   [KeyCDN - 功能编程 - 它是什么以及为什么重要？](https://www.keycdn.com/blog/functional-programming/)
    
*   [中 - 什么是功能编程？](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)