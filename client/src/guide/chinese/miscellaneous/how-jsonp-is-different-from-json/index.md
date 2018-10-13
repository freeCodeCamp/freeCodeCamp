---
title: How Jsonp Is Different from JSON
localeTitle: Jsonp与JSON的区别
---
JSONP只是JSON包装在一个回调函数中。

JSONP对于发出跨域请求很有用，出于安全原因，这些请求通常被浏览器禁止。
```
 // an example of JSON 
 {"weapon":"nunchucks","headband":"yellow"} 
 
 // an example of JSONP 
 myCallback({"weapon":"nunchucks","headband":"yellow"}); 
```

然后，要访问存储在JSONP中的数据，请定义回调函数：
```
myCallback = function(data){ 
  alert(data.weapon); 
 }; 

```