---
title: Embedding Youtube Videos
localeTitle: 嵌入Youtube视频
---
## 嵌入Youtube视频

可能很多时候你在自己喜欢的网站上看过嵌入式视频。今天我们将谈论嵌入YouTube视频，这很容易做到，即使您对此没有任何了解。对于此操作，我们将使用`<frame>`元素，这对嵌入其他HTML非常有用。它经常被用来推广一些产品作为补充。请注意，您不仅限于YouTube - 您还可以尝试其他文档。

### `<frame>`元素

#### 运用

您可以使用`<frame>`元素轻松放置所选视频。但请记住，您还需要定义播放器的高度和宽度，因此我们将使用属性的`height`和`width` 。

我们需要什么？

*   YouTube和网址上的视频
*   `<frame>`元素（别忘了关闭它！）
*   `width`和`height`属性

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es"> 
 </iframe> 
```

插入的值会被推荐，但您可以随意更改它们。

#### 自动播放

如果我们想让这个播放器自动开始播放，我们该怎么办？只需添加到您的链接值`?autoplay=1` 。但要小心，因为很多人访问你的网页会很烦人。

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1"> 
 </iframe> 

```