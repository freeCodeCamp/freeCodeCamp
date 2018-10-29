---
title: JavaScript Version of Jquerygetjson
localeTitle: Версия JavaScript Jquerygetjson
---
Если вы хотите работать с json-файлами с помощью только ванильного JavaScript.

## IE8 +
```
var request = new XMLHttpRequest(); 
 request.open('GET', '/my/url', true); 
 
 request.onreadystatechange = function() { 
  if (this.readyState === 4) { 
    if (this.status >= 200 && this.status < 400) { 
      // Success! 
      var data = JSON.parse(this.responseText); 
    } else { 
      // Error :( 
    } 
  } 
 }; 
 
 request.send(); 
 request = null; 
```

## IE9 +
```
var request = new XMLHttpRequest(); 
 request.open('GET', '/my/url', true); 
 
 request.onload = function() { 
  if (request.status >= 200 && request.status < 400) { 
    // Success! 
    var data = JSON.parse(request.responseText); 
  } else { 
    // We reached our target server, but it returned an error 
 
  } 
 }; 
 
 request.onerror = function() { 
  // There was a connection error of some sort 
 }; 
 
 request.send(); 
```

## IE10 +
```
var request = new XMLHttpRequest(); 
 request.open('GET', '/my/url', true); 
 
 request.onload = function() { 
  if (this.status >= 200 && this.status < 400) { 
    // Success! 
    var data = JSON.parse(this.response); 
  } else { 
    // We reached our target server, but it returned an error 
 
  } 
 }; 
 
 request.onerror = function() { 
  // There was a connection error of some sort 
 }; 
 
 request.send(); 

```