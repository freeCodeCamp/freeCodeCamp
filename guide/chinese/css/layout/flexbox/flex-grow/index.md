---
title: Flex-grow
localeTitle: Flex的成长
---
# Flex的成长

flex-grow属性是一个flexbox属性，允许您指定Flex容器中容器的可用空间分配。它为所有不需要的空间提供了解决方案！

它会把你的容器从这里转过来

![](https://cdn-media-1.freecodecamp.org/imgr/lFJaBUfh.png)

# **对此**

![](https://cdn-media-1.freecodecamp.org/imgr/4X8ITZih.png)

刚刚发生了什么？

好吧，我们在css语法中添加了两个东西。

HTML

```html

<p class = "ten">1</p> 
 <p class = "twenty">2</p> 
```

CSS

```css
body { 
  display:flex; 
 } 
 
 p { 
  flex-grow: 1; 
 } 
```

发生了两件事

1.  通过`display:flex`将父容器转换为flex-display
2.  然后剩余的“自由空间”以相等的比例分配给剩余的p容器，因为每个容器的flex-grow属性为1。

如果我们有p容器具有不同的flex-grow属性会发生什么？

我们来看一个例子吧。

首先让我们创建两个段落并启用display：flex;

![](https://cdn-media-1.freecodecamp.org/imgr/wPqUgsih.png)

注意一些事情

*   配色方案很好
*   两个盒子右边有一些空的空间。

那个空的空间是“自由空间”，将根据它们的flex-grow属性分配给每个不同的段落。

为了看到这一点，让第一个给出一个“十”类和一个flex-grow属性为1.让第二个给出一个“20”类和2个flex-grow属性。

![](https://cdn-media-1.freecodecamp.org/imgr/7n0V1G4h.png)

注意一些事情

1.  第二个的大小不是第一个的两倍，尽管flex-grow属性是第一个的两倍。
2.  整个空间都充满了。 （一些边缘被添加到侧面以使其更清楚地被看到。）

当我们调整屏幕大小时，我们还发现第一个缩小的速度是第二个缩小的两倍。

![](https://cdn-media-1.freecodecamp.org/imgr/pa4grM8h.png)

#### 更多信息：