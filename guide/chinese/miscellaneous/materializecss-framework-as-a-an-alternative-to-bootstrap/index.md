---
title: MaterializeCSS Framework as an Alternative to Bootstrap
localeTitle: MaterializeCSS框架作为Bootstrap的替代方案
---
[MaterialiseCSS](http://materializecss.com/)是一个基于谷歌的[Material Design原则](https://www.google.com/design/spec/material-design/introduction.html)的现代响应式前端框架。

## 什么是材料设计？

Material Design（代号为Quantum Paper）是由Google开发的设计系统。扩展了Google Now中推出的“卡片”图案，Material Design更加自由地使用基于网格的布局，响应式动画和过渡，填充以及光照和阴影等深度效果。

该[视频](https://www.youtube.com/watch?v=Q8TXgCzxEnw)让您了解材料设计：

## 查看这些使用Materialise的网站，看看与您习惯的不同之处！

也可以在手机上测试它们以获得更好的感觉。

*   [100](https://www.100xp.io/)
    
*   [管理主题](http://demo.geekslabs.com/materialize/v2.1/)
    
*   [StrapHq](http://www.straphq.com/)
    

[这里有](http://materializecss.com/showcase.html)更多例子

## 一个Bootstrap替代品，真的吗？

在我看来，冷静，没有什么比击败Bootstrap更好的了。然而，物化CSS只提供了物化 - 物化 - 与界面互动的感觉，就好像它是一种物理材料，就像纸一样。我想出了那个。

但真的......

我喜欢实现，因为它简单，例如：

在Bootstrap中，您可以执行此操作来创建按钮
```
<button class="btn btn-primary btn-lg"> 
 My Button 
 </button> 
```

基本上每个类名都反复附加btn-。对于许多其他引导组件而言，这种情况大多是这种情况，尤其是当您想要添加颜色等简单类时。

使用Materialize，您可以像下面这样添加所有类：
```
<button class="btn waves-effect waves-light green">My Button</a> 
```

如您所见，btn-的使用已经减少。 `green`类可以与除本例中显示的`button`之外的任何/所有其他HTML元素一起使用。

还有另一个更轻的版本的材料设计框架，但它不像materializeCSS框架那样优雅或简单除了这个简单性，这里有更多我喜欢materializeCSS的原因：

*   这很简单！ - 只是强调
*   它是开源的，你可以在这里git
*   一个社区也在围绕它发展
*   [有人](http://fezvrasta.github.io/bootstrap-material-design/)希望生成Bootstrap + Materialize的混合物。 Sweeet！

## 还要别的吗？

尝试一下，也许你会喜欢它。事实上，即使Android UI已经开始，这可能是一个很好的方式来让自己更好地在面向移动设备的网络应用程序（如[渐进式网络应用程序）的](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/#what-will-you-learn) Material设计

### 也许你不应该使用它......

它在alpha阶段正在发生变化。所以你可以跳过它，不要在关键项目上使用它，直到它成熟为止。