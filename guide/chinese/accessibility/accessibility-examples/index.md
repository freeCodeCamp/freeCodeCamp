---
title: Accessibility Examples
localeTitle: 辅助功能示例
---
## 实际应用中的可访问性示例

我正在撰写此简短指南，以提供有关如何在网站中实现辅助功能的实际示例。在学校期间没有强调可访问性，也没有在Web开发的现实世界中充分强调它。我希望这篇文章以及其他许多文章将鼓励开发人员从现在开始创建可访问的网站。它总是帮助我实际掌握如何做事的例子。因此，本指南将重点介绍我作为Web开发人员在日常生活中遇到的真实世界示例。

### 跳过导航

为了让有视力的用户在您的网站上获得愉快的体验，他们需要能够快速有效地获取内容。如果您从未通过屏幕阅读器体验过网站，我建议您这样做。这是测试为无视用户导航网站的最佳方式的最佳方式。 NVDA是一款非常好的屏幕阅读器应用程序，免费提供。但是，如果您使用屏幕阅读器并发现它有用，请考虑向开发团队捐款。屏幕阅读器可以从[nvaccess.org](https://www.nvaccess.org/download/)下载。

允许没视力的用户跳到网站的主要内容，并避免在所有主要导航链接中进行选项卡：

1.  创建一个直接位于开始`body`标记下方的“跳过导航链接”。

```html

<a tabindex="0" class="skip-link" href="#main-content">Skip to Main Content</a> 
```

`tabindex="0"`以确保链接可在所有浏览器上进行键盘调焦。有关键盘可访问性的更多信息，请访问[webaim.org](https://webaim.org/techniques/keyboard/tabindex) 。

2.  “跳过导航”链接需要使用ID标记与网页文档中的主html标记相关联。

```html

<main id="main-content"> 
  ...page content 
 </main> 
```

3.  默认情况下隐藏“跳过导航”链接。 这可确保链接仅在链接处于焦点时对有视力的用户可见。

*   为可以使用CSS设置样式的链接创建一个类。在我的例子中，我添加了类`skip-link` 。

```css
.skip-link { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  white-space: nowrap; 
  -webkit-clip-path: inset(50%); 
  clip-path: inset(50%); 
  border: 0; 
 } 
 .skip-link:active, .skip-link:focus { 
  position: static; 
  width: auto; 
  height: auto; 
  overflow: visible; 
  clip: auto; 
  white-space: normal; 
  -webkit-clip-path: none; 
  clip-path: none; 
 } 
```

这些CSS样式默认隐藏链接，仅在接收键盘焦点时显示链接。有关更多信息，请访问[a11yproject](http://a11yproject.com/posts/how-to-hide-content)和此[博客文章](http://hugogiraudel.com/2016/10/13/css-hide-and-seek/) 。

### 无障碍表格

### 无障碍标签