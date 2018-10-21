---
title: Window.localStorage
---
## window.localStorage

`localStorage` provides a way for your web applications to store data locally within the user’s browser.

Prior to HTML5, application data had to be stored in cookies. Cookies are included with every HTTP request, thereby slowing down your web application by transmitting the same data. Cookies are also limited to about 4 KB of data which might not be sufficient to store required data.

`localStorage` limit is larger than that of cookies with up to 10MB of data per domain and information is never transferred to the server.

### Types of localStorage

There are two main web storage types:

- Local storage: This stores data with no expiration date. The data in `localStorage` would persist even when the user’s       browser is closed and reopened.
- Session storage: This is similar to `localStorage`, except that it stores data for one session only. Once the user’s is       browser closed, that session would be lost and the persisted data will be deleted from the browser.

### HTML5 localStorage Methods

`localStorage` comes with a few different JavaScript methods that makes it very easy to work with, let’s look at some:

*NB: These methods apply to both web storage types(local storage and session storage)*

To set data, we need to do the following:

```javascript
localStorage.setItem('Name', 'somevalue');
```
To retrieve some data from storage:

```javascript
localStorage.getItem('Name');
```
For removing or deleting some data, we can do this:

```javascript
localStorage.removeItem('Name');
```
To clear the entire storage (not just an individual item), we can use:

```javascript
localStorage.clear();
```
To get the number of properties in the storage:

```javascript
localStorage.length;
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)




