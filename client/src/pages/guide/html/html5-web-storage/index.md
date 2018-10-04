---
title: HTML5 Web Storage
---
## HTML5 Web Storage

Web storage allows web applications to store up to 5MB of information in browser storage per origin (per domain and protocol).

### Types of Web Storage

There are two objects for storing data on the client:

`window.localStorage`: stores data with no expiration date and lives until removed.

```javascript
// Store Item
localStorage.setItem("foo", "bar");

// Get Item
localStorage.getItem("foo"); //returns "bar"
```

`window.sessionStorage`: stores data for one session, where data is lost when the browser / browser tab is closed.

```javascript
// Store Item
sessionStorage.setItem("foo", "bar");

// Get Item
sessionStorage.getItem("foo"); //returns "bar"
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target='_blank' rel='nofollow'>MDN</a>
<a href='https://www.html5rocks.com/en/features/storage' target='_blank' rel='nofollow'>HTML5 Rocks</a>
<a href='https://www.w3schools.com/html/html5_webstorage.asp' target='_blank' rel='nofollow'>W3 Schools</a>
