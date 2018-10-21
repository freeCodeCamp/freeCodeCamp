---
title: Where to Get Fonts
localeTitle: 在哪里获取字体
---
## 在哪里获取字体

Google字体或Font Squirrel等在线字体服务提供了一种在您的网站上使用不同字体的简便方法，而无需担心查看您网站的人是否会在其系统上使用该字体。

### 下载字体

Font Squirrel等网站允许您下载您选择的字体文件。完成后，您必须在托管您网站的服务器上上传它们。要使用它们，您需要在CSS样式表中声明它们，这意味着告诉您的CSS要求用户的浏览器显示它。声明字体通常使用CSS样式表上的`@font-face` 。

```css
@font-face { 
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */ 
  src: url("/fontfolder/open-sans.woff"); /* path to the file */ 
 } 
 body { 
  font-family: "My Super Awesome Open Sans Font"; 
 } 
```

请注意，您还可以根据浏览器兼容性指定字体的格式，如下所示。

```css
@font-face { 
 font-family: "My Super Awesome Open Sans Font"; 
 src: url("/fontfolder/open-sans.woff"); format("woff"), 
 } 
```

### 谷歌字体

使用Google字体，您无需在网站上传字体文件，只需在网站的`head`某个链接即可。

要使用Google字体，请浏览[网站](https://fonts.google.com/)以查找最适合您项目的字体。选择后，单击字体旁边的加号（+）。屏幕底部会出现一个条形图。点击它。然后，您将获得几行代码。将HTML行复制并粘贴到现有HTML文件的头部元件。然后使用CSS并在样式表中的必要时使用它。

```html

<html> 
  <head> 
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> 
  </head> 
  <body> 
  Some text. 
  </body> 
 </html> 
```

```css
body{ 
  font-family: "Inconsolata", monospace; 
 } 
```

你完成了！您已成功为您的网站添加新字体。

##### 其他资源：

*   [谷歌字体](http://fonts.google.com)
*   [FontSpace](http://www.fontspace.com)
*   [字体松鼠](http://fontsquirrel.com)
*   [DaFont](http://www.dafont.com)
*   [1001个免费字体](http://www.1001freefonts.com)

#### 更多信息：

*   [Mozilla Developer Network的Web字体概述](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)