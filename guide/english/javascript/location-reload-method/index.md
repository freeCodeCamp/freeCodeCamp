---
title: Location Reload Method
---
## Location Reload Method

JavaScript `Location.reload()` method provides means to reload the page at current URL. 

The syntax is the following: 

`object.reload(forcedReload);`, where `forceReload` is an optional parameter.

To simply reload the page, you can input `window.location` as object.

Optional parameters `force reload` is a boolean value, which if set to:

 * `True` reloads the page from the server (e.g. does not store the data cached by the browser):
```
window.location.reload(true);
```
 * `False` reloads the page using the version of the page cached by the browser.
```
window.location.reload(false);
```
`False` is the default parameter, so if left blank, `object.reload()` reloads the page using the broswer's cached data, i.e. is identical to using the method as `object.reload(false)`.

To create the effect of browser-provided "Refresh"-option, you may want to create HTML-button and do either of the following:
 * attach `Location.reload()` to the HTML button-markup, like this:

```
<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
```
* assign on-click event to the button with the function that uses the method, where the button looks similar to 

```
<button type="button" onClick="reloadThePage()">Refresh!</button>

```
```
<script>
function reloadThePage(){
    window.location.reload();
} 
</script>
```


### Example:

```javascript
// Reload the current resources from the server
window.location.reload(true);

// Reload the current resources from the browser's cache
window.location.reload();
```


This will reload the page at the current URL from the server.

#### More Information:
* [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
* [W3 Schools](https://www.w3schools.com/jsref/met_loc_reload.asp)
