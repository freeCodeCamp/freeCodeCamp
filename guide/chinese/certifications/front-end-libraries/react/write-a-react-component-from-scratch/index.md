---
title: Write a React Component from Scratch
localeTitle: 从Scratch写一个React组件
---
## 从Scratch写一个React组件

在这个挑战中，我们想要创建一个`class`反应组件（React组件可以是`class`组件或`function`组件）。我们所有的类组件都将成为`React.Component`的扩展。例如，我们可以开始创建一个名为`FirstComponent`的组件：

```javascript
class FirstComponent extends React.Component { 
 
 }; 
```

我们还需要确保为新类定义`constructor` 。最好使用`super`调用任何组件的`constructor` ，并将`props`传递给它们。 `super`拉取组件父类的`constructor` （在本例中为`React.Component` ）。现在，我们组件的代码如下所示：

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
 
 }; 
```

现在剩下要做的就是定义我们的组件将`render` ！我们通过调用组件的`render`方法并返回我们的JSX代码来实现：

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      // The JSX code you put here is what your component will render 
    ); 
  } 
 }; 
```

一旦你的JSX代码在那里，你的组件就完成了！如果你想要一个更精细的React组件教程，那么Samer Buna [写了一篇很棒的文章](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) 。