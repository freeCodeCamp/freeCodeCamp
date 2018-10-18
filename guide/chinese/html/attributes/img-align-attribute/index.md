---
title: Img Align Attribute
localeTitle: Img对齐属性
---
## Img对齐属性

图像的align属性指定图像应根据周围元素对齐的位置。

属性值：  
右 - 将图像右对齐 left - 将图像对齐到左侧  
顶部 - 将图像对齐到顶部  
bottom - 将图像对齐到底部  
中 - 将图像对齐到中间

例如：

```html

<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
   <title>Img Align Attribute</title> 
 </head> 
 <body> 
  <p>This is an example. <img src="image.png" alt="Image" align="middle"> More text right here 
  <img src="image.png" alt="Image" width="100"/> 
  </body> 
 </html> 
```

如果我们想要，我们也可以正确对齐：

```html

<p>This is another example<img src="image.png" alt="Image" align="right"></p> 
```

**请注意HTML5中不支持align属性，您应该使用CSS代替。但是，它仍然受到所有主流浏览器的支持。**

#### 更多信息：

[关于img标签及其属性的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)