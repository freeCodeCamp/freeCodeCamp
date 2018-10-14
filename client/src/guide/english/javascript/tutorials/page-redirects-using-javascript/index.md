---
title: Page Redirects Using JavaScript
---
## Page Redirects Using JavaScript

If you're trying to redirect a user to another page, you can easily use JavaScript to accomplish this task. It is important to note the following:

Even if you have the jQuery library loaded in your scripts, you might wish to use the pure JavaScript solution for page redirects for efficiency purposes. 

There are several different ways to go about this, but the simplest way is to use the `window.location` object to send the user to the page you wish them to be redirected to. The `window.location` object can use any valid URL value such as `http://www.yoururl.com`, `somepage.html`, etc.

```javascript
window.location = 'http://www.yoururl.com';
// window.location = 'somepage.html';
// etc.
```

### Special Case Redirect

You can use a special redirect method that is, by default, attached to the `window.location` object in every major browser named `replace()`. This method accepts the same valid URL values as just using `window.location`.



Here is an example of using this method (it will still work the same as just using `window.location` in other browsers):

```javascript
window.location.replace('http://www.yoururl.com');
// window.location.replace('somepage.html');
// etc.
```

### A Simple Timed Redirect Using JS

Here is an example of a simple timed redirect using the `setTimeout()` function. Timed redirects are useful so that you can explain to the user, via the content on the redirect page, the reason why they are being redirected to another page.

```javascript
// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens
// keep in mind that 1 second = 1000 milliseconds
setTimeout(function () {
    window.location = 'http://www.yoururl.com';
    // window.location = 'somepage.html';
    // etc.
}, 5000);
```

### Fallback

Sometimes users browse the internet with JavaScript disabled, and this would obviously present problems with a JS dependant redirect solution. I recommend setting a `<meta>` element that will refresh the browser with the new location. I would set the time for this meta element to be a second after the JS redirect is supposed to take place. So, if you have a redirect that happens in JS after 5 seconds, set the `<meta>` element redirect to take place at 6 seconds.

Place the `<meta>` element within the `<head>` of your document like so:

```html
<head>
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. -->
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com">
</head>
```

Keep in mind that not all browsers support the `<meta>` element (I'm looking at you, older versions of IE, and Safari), but most modern browsers do (Microsoft Edge, Google Chrome, Mozilla Firefox, Opera).
