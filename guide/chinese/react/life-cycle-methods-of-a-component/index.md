---
title: Life Cycle Methods Of A Component
localeTitle: 组件的生命周期方法
---
## React组件的生命周期方法

当我们开始使用组件时，我们需要执行多个操作来更新组件状态(state)或在该组件发生更改时执行某些操作。在这种情况下，了解组件的各种生命周期方法会帮助你更好的操作组建！因此，我们将在本文中深入探讨组件的生命周期方法。

从广义上讲，我们可以将生命周期方法分为**3**类。

1.  创建
2.  更新
3.  卸载

由于生命周期方法的作用通过名称就很容易理解，我只想提一下方法名称。并且，方法前的编号便是此方法在这个生命周期中的调用顺序。如有必要，请随时为本文做出贡献。

## 创建：

1. `constructor()`

2. `componentWillMount()`

3. `render()`

4. `componentDidMount()`

## 更新：

1. `componentWillRecieveProps()`

2. `shouldComponentUpdate()`

3. `componentWillUpdate()`

4. `render()`

5. `componentDidUpdate()`

## 卸载：

1. `componentWillUnmount()`

## 一些有趣的事实需要注意：

*   `constructor` ， `componentWillMount` ， `componentDidMount`和`componentWillUnmount`在组件的整个生命周期中仅调用一次。
*   在更新组件时，仅当`shouldComponentUpdate`返回true时，才会执行`componentWillUpdate`和`componentDidUpdate`方法。
*   `componentWillUnmount()`将在卸载任何组件之前调用，因此可用于释放已用内存，关闭与数据库的连接等。

通过深入编码可以学到很多东西。因此，通过编码让你的手弄脏。

注意：

> “将在未来的16.x版本中启用弃用警告， **但遗留生命周期将继续有效，直到版本17.**”
> 
> “即使在版本17中，它仍然可以使用它们，但是它们将带有”UNSAFE\_“前缀别名，以表明它们可能会导致问题。我们还准备了一个[自动脚本，](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)用现有代码[重命名它们](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 。” 1

换句话说，这些旧的生命周期方法仍然可用作：

*   `UNSAFE_componentWillMount`
*   `UNSAFE_componentWillReceiveProps`
*   `UNSAFE_componentWillUpdate`

## 新的生命周期方法

React 17中将引入新的生命周期方法

*   `getDerivedStateFromProps`将是`componentWillReceiveProps`的更安全的替代品。
*   将添加`getSnapshotBeforeUpdate`以支持安全地从DOM更新中读取属性

通过深入编码可以学到很多东西。因此，尽情的去尝试吧。

### 来源

1.  [沃恩，布莱恩。 “React v16.3.0：新的生命周期和上下文API”。 2018年3月29日。访问时间：2018年5月22日。](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### 资源

[更新异步渲染](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
