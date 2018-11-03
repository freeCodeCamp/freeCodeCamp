---
title: Redirect from an HTML Page
---
## Redirect from an HTML Page


If you've changed the URL of your HTML page and want to automatically redirect your visitors to the new location of the page, you can use a meta tag within the `<head>` area of your old HTML page. 

``` html
<head>
  <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" />
</head>
```
In the above example, visitors to the page would be redirected from your old html page to [http://freecodecamp.org/](http://freecodecamp.org/). The attribute of `content="0` means that the browser will redirect to the new page after 0 seconds. Changing the value to `content="2` would redirect after 2 seconds.

#### More Information:
* [MDN - Redirections in HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)
