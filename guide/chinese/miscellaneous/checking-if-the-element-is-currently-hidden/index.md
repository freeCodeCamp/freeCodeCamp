---
title: Checking if the Element Is Currently Hidden
localeTitle: 检查元素当前是否隐藏
---
如果您需要检查页面上某些元素的可见性状态，您可以使用简单的代码块（如下所示）使用jQuery库轻松完成。
```
var display = ( jQuery('#someElement').is(':visible') ); 
 var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' ); 
 var status = ( display && visibility ); 
 console.log( status ); 
```

因此，如果元素当前在页面上可见，则**`console.log(status)`**将返回`true` ，在任何其他情况下，它将返回`false` 。对于这两种情况，将返回`false`陈述：

*   如果元素有`display:none;`
*   如果元素具有`visibility: hidden`

对于像这样的更高级的检查： **是视口上可见的元素现在**我建议使用[jQuery onScreen插件](http://benpickles.github.io/onScreen/)