---
title: The Return Early Pattern
localeTitle: 回归早期模式
---
JavaScript中的返回早期模式是将函数体中的`else`语句数量减少为零的简单方法。使用`else`语句比使用这种模式有很多理由。

*   减少页面上的代码总量
*   通过降低逻辑复杂性来减少线路长度
*   提高可读性

返回早期模式的本质是通过在`if`语句的主体中使用`return`关键字来替换JavaScript函数中对`else`条件的需要。

让我们创建在某些条件下表现不同的函数（注意：这是一个简单且人为的例子，只是为了得到重点）。
```
function willItBlend(someObject) { 
  var ItWillBlend; 
 
  if (someObject.blendable ==== 'It will blend') { 
    itWillBlend = true; 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

虽然这看起来似乎是可读的，但让我们添加另一个条件来验证函数确实是用对象而不是`undefined`调用的。
```
function willItBlend(someObject) { 
  var itWillBlend; 
 
  if (typeof someObject === 'object') { 
    if (someObject.blendable ==== 'It will blend') { 
      itWillBlend = true; 
    } else { 
      itWillBlend = false; 
    } 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

此功能很明确，其名称是描述性的，但似乎不必要地复杂化。我们可以使用返回早期模式来提高可读性并减少`else`语句的数量吗？我们试一试吧。
```
function willItBlend(someObject) { 
  if (typeof someObject !== 'object') { 
    return false; 
  } 
 
  if (someObject.blendable !== 'It will blend') { 
    return false; 
  } 
 
  return true; 
 } 
```

使用返回早期模式，我们能够删除所有不必要的else语句，并使我们的函数目的和签名（它所期望的参数类型）更加清晰和简洁。

### 奖金：一个条件声明

我们可以进一步重构这个函数，只使用一个if语句。一探究竟：
```
function willItBlend(someObject) { 
  if ( 
    typeof someObject !== 'object' || 
    someObject.blendable !== 'It will blend' 
    ) { 
    return false; 
  } 
 
  return true; 
 } 

```