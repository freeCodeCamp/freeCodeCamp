---
title: Background Property
localeTitle: 背景资产
---
## 背景资产

CSS后台属性允许用一个简写声明1一次声明所有八个背景属性。

background属性指定为一个或多个背景图层，以逗号分隔以获取以下属性2 ：

*   背景颜色
*   背景图片
*   背景位置
*   背景大小
*   背景重复
*   背景起源
*   背景素材
*   背景附件

语法1 ：

```css
body { 
  /* Using a <background-color> */ 
  background: green; 
 } 
 
 .error { 
  /* Using a <bg-image> and <repeat-style> */ 
  background: url("test.jpg") repeat-y; 
 } 
 
 header { 
  /* Using a <box> and <background-color> */ 
  background: border-box red; 
 } 
 
 .topbanner { 
  /* A single image, centered and scaled */ 
  background: no-repeat center/80% url("../img/image.png"); 
 } 
```

### 来源

1.  [访问MDN的背景页面以获取更多信息。](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2.  [访问W3School的CSS背景属性页面以获取更多信息。](https://www.w3schools.com/cssref/css3_pr_background.asp)