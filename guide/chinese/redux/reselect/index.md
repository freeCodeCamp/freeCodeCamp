---
title: Reselect
localeTitle: 重新选择
---
## 重新选择

Reselect是Redux的简单选择器库。 为什么我们需要选择器？官方文档用这种方式描述：

*   选择器可以计算派生数据，允许Redux存储最小可能状态。
*   选择器是有效的。除非其参数之一发生更改，否则不会重新计算选择器。
*   选择器是可组合的。它们可以用作其他选择器的输入。

这可能听起来很复杂但是选民通过减少不必要的重新渲染来让应用程序更快地工作。通常，每次在`store`中进行任何更改时都会调用`mapStateToProps` 。 `mapStateToProps`将商店值绑定到反应。在使用`PureComponents`它可能导致组件被重新渲染，尽管它不是必需的。

#### 更多信息：

*   [重新选择](https://github.com/reduxjs/reselect)
*   [React，Reselect和Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)