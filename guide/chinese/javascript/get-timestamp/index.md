---
title: Get Timestamp
localeTitle: 获取时间戳
---
您可以使用`Date.now()`来获取当前时间戳（以毫秒为单位）。

您可以轻松地将时间戳转换为秒，如下所示： `Math.floor(Date.now() / 1000)`

如果您的浏览器不支持`Date.now()` ，则可以使用`new Date().getTime()`来获取时间戳（以毫秒为单位）。