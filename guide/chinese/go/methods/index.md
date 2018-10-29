---
title: Go Methods
localeTitle: 去方法
---## 去方法

Golang类型可以有方法。方法是具有特殊参数的函数，即_接收器_ 。

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func (r Receiver) getArea() int64 { 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 r.getArea() // 200 
```

这里，类型`Rectangle`有一个名为`getArea`的方法，它返回矩形的区域。 这里的接收器是`r` 。

此代码相当于：

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func getArea(r Receiver) int 64{ 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 getArea(r) // 200 
```

现在getArea方法接收`r`作为参数，而不是接收器。功能相同。

### 指针接收器

您可以将指针作为接收者传递：

```go
type MyInt int64 
 
 func (m *MyInt) setToZero() { 
  *m = MyInt(0) 
 } 
 
 m := MyInt(10) 
 m.setToZero() // m == 0 
```

### 扩展方法

如果你想在其他包中定义的类型上创建一个方法，例如`int`你可以使用这样的简单包装：

```go
type MyInt int64 
 
 func (m MyInt) add10() int64 { 
  return m + 10 
 } 
 
 m := MyInt(10) 
 m.add10() // 20 
```

#### 更多信息：

https://tour.golang.org/methods/1