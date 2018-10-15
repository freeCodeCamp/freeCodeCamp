---
title: Add To Homescreen
localeTitle: 添加到主屏幕
---
## 添加到主屏幕

这里的网络应用安装横幅专注于网络应用，具有添加到主屏幕的功能。

### 浏览器支持添加到主屏幕

目前支持添加到主屏幕功能：

*   铬
*   iOS Safari

您可以在[此处查看](https://caniuse.com/#feat=web-app-manifest)此功能的浏览器支持的最新状态。

### 在Android上

在Android上，如果您满足特定要求，则会自动显示“添加到主屏幕”横幅。这就是Android应该是这样的：

|添加到主屏幕提示|当应用程序启动时| | ：----------------------：| ：---------------：| | ![prompt](https://user-images.githubusercontent.com/15358452/31663686-860779f0-b375-11e7-85c9-1387d9b3bfcf.png "在android上添加到主屏幕提示") | ![launch](https://user-images.githubusercontent.com/15358452/31663690-89b0d998-b375-11e7-8a84-f3e33be9a2c2.png "从Homescreen启动") |

#### 要求

*   包含一个`manifest.json`文件，其中包含以下属性：
*   `short name`
*   `name`
*   `192x192`大小的`png`图标
*   `start_url`
*   包括已注册和激活的服务工作者
*   通过HTTPS提供的网站（您仍然可以在没有HTTPS的情况下使用localhost尝试此操作）
*   该网站符合Chrome定义的参与启发式

#### 的manifest.json

```json
{ 
  "name": "FreeCodeCamp", 
  "short_name": "FreeCodeCamp", 
  "theme_color": "#00FF00", 
  "background_color": "#00FF00", 
  "display": "standalone", 
  "Scope": "/", 
  "start_url": "/", 
  "icons": [ 
    { 
      "src": "assets/images/icons/icon-72x72.png", 
      "sizes": "72x72", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-96x96.png", 
      "sizes": "96x96", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-128x128.png", 
      "sizes": "128x128", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-144x144.png", 
      "sizes": "144x144", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-152x152.png", 
      "sizes": "152x152", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-192x192.png", 
      "sizes": "192x192", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-384x384.png", 
      "sizes": "384x384", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-512x512.png", 
      "sizes": "512x512", 
      "type": "image/png" 
    } 
  ], 
  "splash_pages": null 
 } 
```

*   `name`是Web应用程序的名称。 （它将在启动屏幕中显示）
*   `short name`是Web应用程序的简称。 （它将显示在手机菜单图标下方）
*   `theme_color`是浏览器顶部的颜色。
*   `background_color`是启动屏幕的背景颜色。
*   `display`是Web应用程序在手机上启动后应显示的方式。
*   `start_url`定义网站的起始网址。
*   `icons`是一个存储所有图像位置，大小和类型的数组。

### 在其他设备上

虽然此方法在iOS和Windows上不起作用，但有一种回退方法。

**iOS版**

在iOS上，必须手动添加“添加到主屏幕”按钮。将以下元标记添加到HTML的head部分以支持iOS Web应用程序图标。

```html

<meta name="apple-mobile-web-app-capable" content="yes"> 
 <meta name="apple-mobile-web-app-status-bar-style" content="green"> 
 <meta name="apple-mobile-web-app-title" content="FreeCodeCamp"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-72x72.png" sizes="72x72"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-96x96.png" sizes="96x96"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-128x128.png" sizes="128x128"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-144x144.png" sizes="144x144"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-152x152.png" sizes="152x152"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-384x384.png" sizes="384x384"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-512x512.png" sizes="512x512"> 
```

**视窗**

在Windows手机上，将以下元标记添加到HTML的head部分：

```html

<meta name="msapplication-TileImage" content="/assets/images/icons/icon-144x144.png"> 
 <meta name="msapplication-TileColor" content="green"> 
```

### 参考

1.  [superoo7，“渐进式Web应用程序的高级视图”发布日期：2017年12月18日。](https://steemit.com/web/@superoo7/a-high-level-view-of-progressive-web-app)
2.  [Matt Gaunt和Paul Kinlan，“Web App安装横幅”发布时间：2017年11月14日。](https://developers.google.com/web/fundamentals/app-install-banners/)