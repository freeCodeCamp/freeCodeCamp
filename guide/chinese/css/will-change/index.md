---
title: Will Change
localeTitle: 将改变
---
## 将改变

will-change属性允许您告诉浏览器对元素进行哪些操作以优化它。

```css
.container { 
 will-change: transform; 
 } 
```

上面的属性will-change用于类`.container` ，在这种情况下，元素的转换可能会也可能不会发生。

但是，使用此属性会产生一个有趣的副作用。

如果我们应用于transform： `translateZ (0)`元素，该元素将创建一个新的叠加上下文，并且在某些浏览器中，它还将为其自己的渲染流添加一个层，这将为我们提供性能提升，我们正在实现。

因此，使用`will-change: transform` ，浏览器将创建一个新的叠加上下文，无论我们是否将变换应用于元素。

需要注意的关键是，仅当属性还创建新的叠加上下文时，更改才会创建新的叠加上下文。由于transform属性会创建新的叠加上下文，因此`will-change: transform`也会创建一个新的叠加上下文。

如果您使用了`will-change: display` ，则不会创建新的叠加上下文，因为display属性的值不会创建新的叠加上下文。

让我们看另一个例子： `opacity` 。值为1的不透明度不会创建新的叠加上下文，但会创建较低的值（例如，0.9）。虽然会改变：不透明度在任何情况下都会创建一个新的叠加上下文。

#### 更多信息：

*   [将改变MDN网络文档](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
*   [CSS将更改模块级别1（工作草案）](https://drafts.csswg.org/css-will-change/#will-change)
*   [我可以使用：CSS将改变属性](https://caniuse.com/#feat=will-change)