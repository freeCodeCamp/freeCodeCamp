---
title: Function Composition
localeTitle: 功能组合
---## 功能构成

函数组合是一个函数对另一个函数的结果的逐点应用。开发人员每天在嵌套功能时以手动方式执行此操作：

```javascript
compose = (fn1, fn2) => value => fn2(fn1(value)) 
```

但这很难读。使用函数组合有更好的方法。而不是从里到外阅读它们：

```javascript
add2AndSquare = (n) => square(add2(n)) 
```

我们可以使用更高阶函数以有序的方式链接它们。

```javascript
add2AndSquare = compose( add2, square) 
```

compose的一个简单实现是：

```javascript
compose = (f1, f2) => value => f2( f1(value) ); 
```

为了获得更大的灵活性，我们可以使用reduceRight函数：

```javascript
compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal); 
```

从左到右的阅读构成允许清晰地链接高阶函数。真实世界的例子是添加身份验证，日志记录和上下文属性。这是一种能够在最高级别上实现可重用性的技术。以下是如何使用它的一些示例：

```javascript
// example 
 const add2        = (n) => n + 2; 
 const times2      = (n) => n * 2; 
 const times2add2  = compose(add2, times2); 
 const add6        = compose(add2, add2, add2); 
 
 times2add2(2);  // 6 
 add2tiems2(2);  // 8 
 add6(2);        // 8 
```

您可能认为这是高级函数式编程，它与前端编程无关。但它在单页应用程序中也很有用。例如，您可以使用更高阶的组件向React组件添加行为：

```javascript
function logProps(InputComponent) { 
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) { 
    console.log('Current props: ', this.props); 
    console.log('Next props: ', nextProps); 
  }; 
  return InputComponent; 
 } 
 
 // EnhancedComponent will log whenever props are received 
 const EnhancedComponent = logProps(InputComponent); 
```

总之，功能组合使功能的可重用性处于非常高的水平。如果函数结构良好，它使开发人员能够基于现有行为创建新行为。

它还提高了实现的可读性。您可以使用有意义的名称来清除链函数，并创建更高阶的函数，而不是嵌套函数。