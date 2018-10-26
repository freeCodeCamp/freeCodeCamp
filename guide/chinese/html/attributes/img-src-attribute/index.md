---
title: Img Src Attribute
localeTitle: Img Src属性
---
## Img Src属性

`<img src>`属性指的是要显示的图像的来源。没有`src`属性， `img`标签不会显示图像。但是，如果将源设置为图像的位置，则可以显示任何图像。

freeCodeCamp徽标的图片位于`https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

您可以使用`src`属性将其设置为图像。

```html

<html> 
  <head> 
    <title>Img Src Attribute Example</title> 
  </head> 
  <body> 
    <img src="https://avatars0.githubusercontent.com/u/9892522?v=4&s=400"> 
  </body> 
 </html> 
```

上面的代码显示如下：

![freeCodeCamp头像](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

所有浏览器都支持`src`属性。

您还可以将本地托管的文件作为图像。

例如，只要'images'文件夹与`index.html`文件位于同一位置，如果你有一个名为`images`的文件夹里面有`freeCodeCamp.jpeg` ，那么`<img src="images/freeCodeCamp.jpeg>`就可以了。 。

`../files/index.html`

`..files/images/freeCodeCamp.jpeg`

### 更多信息：

*   [HTML.com](https://html.com/attributes/img-src/)
*   [W3学校](https://www.w3schools.com/tags/att_img_src.asp)