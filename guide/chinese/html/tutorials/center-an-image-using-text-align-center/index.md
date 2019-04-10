---
title: Center an Image Using Text Align Center
localeTitle: 使用文本对齐中心居中图像
---
## 使用文本对齐中心居中图像

`<img>`元素是内联元素（ `inline-block`显示值）。它可以通过添加`text-align: center;`轻松居中`text-align: center;`父元素的CSS属性 包含它。

使用`text-align: center;`来居中图像`text-align: center;`您必须将`<img>`放在块级元素（如`div` 。 由于`text-align`属性仅适用于块级元素，因此请放置`text-align: center;`在包装块级元素上实现水平居中的`<img>` 。

### 例

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
      } 
    </style> 
  </head> 
  <body> 
    <div class="img-container"> <!-- Block parent element --> 
      <img src="user.png" alt="John Doe"> 
    </div> 
  </body> 
 </html> 
```

**注意：**父元素必须是块元素。如果它不是块元素，则应添加`display: block;` CSS属性以及`text-align`属性。

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
        display: block; 
      } 
    </style> 
  </head> 
  <body> 
    <span class="img-container"> <!-- Inline parent element --> 
      <img src="user.png" alt=""> 
    </span> 
  </body> 
 </html> 
```

**演示：** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## 文档

[**text-align** - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

[**\\ ** - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)