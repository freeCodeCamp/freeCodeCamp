---
title: Manipulating Cookies
---
## Manipulating Cookies

Getting or setting cookies is a straightforward operation that can be achived by accessing the cookie property on the browser's document object.

You find an amazing and informative recipe website to cook a foreign meal for your guests but it's in foreign language, luckily you are able to change the language on the site website using a selection dropdown. A couple of days later you visit the same site again to make a dish for your mother, but now you see the website in your native language by default. 

*The website remembers language you selected on your last visit and stores it in form of a **cookie**. Now it automatically selected your preferred language by reading that cookie.*

`userLanguage:french`

Cookies are used to store data in form of `name:value` pair on the client side part. It lets a website store user specific information on the browser for later use. The  stored information could be `sessionID`, `userCountry`, `visitorLanguage` etc.

Another way to store the data on the client side is `localstorage`.

### Set Cookie

A cookie can be set using the syntax below but a library, like the one mentioned at the end, is highly recommended to make development easier for everyone. While setting the cookie, you can set the expiry for it as well. If skipped, cookie is erased when browser is closed.

**Keep in mind a cookie set by a particular domain can only be read by that domain & its subdomains only.**

```javascript
// Using vanilla javascript
document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/';

//Using JS cookie library
Cookies.set('userLanguage', 'french', { expires: 7, path: '/' });
```
*Cookie expires in 7 days*


### Get Cookie


```javascript
// Using vanilla javascript
console.log(document.cookie)

// => "_ga=GA1.2.1266762736.1473341790; userLanguage=french"

// Using JS cookie library
Cookies.get('userLanguage');

// => "french"

```


### Delete Cookie

In order to delete a cookie set the expires date to something in the past.

```javascript
// Using vanilla javascript
document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';

//Using JS cookie library
Cookies.remove('userLanguage');
```

*If you find yourself playing with cookies a lot in your project, please use a library like this [JS Cookie](https://github.com/js-cookie/js-cookie) and save yourself a ton of time.*

#### More Information:
- [Cookie explained](https://www.quirksmode.org/js/cookies.html)
- [MDN Cookie Guide](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
- [Udacity Cookie Video](https://www.youtube.com/watch?v=xdH9zsW1CK0)
- [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
