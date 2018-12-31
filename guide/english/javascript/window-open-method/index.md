---
title: Window Open Method
---
## Window Open Method

The Window `open()` method can be used to load a specified resource into the browsing context (window or tab) with the specified name. If such name doesn't exist, then a new window is created and the resource is loaded into its context.

## Prameters

`url`
<br>
A DOMString indicating the resource to be loaded. This can be a path or URL to any resource which is supported by the browser.

`windowName`
<br>
A DOMString specifying the name of the browsing context (window or tab) into which the content will be loaded; if the name doesn't indicate an existing context, a new window is created and is given the name specified by windowName. This name can then be used as the target of links and forms by specifying it as the target attribute.

`windowFeatures` `optional`
<br>
A DOMString containing a comma-separated list of window features given with their corresponding values in the form "name=value". These features include options such as the window's default size and position etc.

## Syntax
```javascript
  var window =  window.open(url, windowName, [windowFeatures]);
```

## Example

```javascript
var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
}
```
<br>
If a window with the name already exists, then strURL is loaded into the existing window. In this case the return value of the method is the existing window and strWindowFeatures is ignored.

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/open' target='_blank' rel='nofollow'>MDN Docs</a>
