---
title: Learn About Jsonp
---
## JSONP
JSONP stands for "JSON with padding". Let's say you want to make AJAX requests to a different domain. Well, you can't do this with XMLHttpRequest, as you normally would, but you CAN do this with script tags, as seen [on StackOverflow](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about):

```javascript
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://www.someWebApiServer.com/some-data';
```

But this is ugly, now we have to get elements of a JSON out of a script tag, gross. Luckily, the creators of JSONP were thinking ahead, so instead of setting our scripts as we did above, we do this:

```javascript
script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback';
```
This triggers an automatic callback after the data has loaded, creating a function with the data desired inside of it. 


### More Information:
*   <a href='https://en.wikipedia.org/wiki/JSONP' target='_blank' rel='nofollow'>Wikipidea/JSONP</a>
*   <a href='https://learn.jquery.com/ajax/working-with-jsonp' target='_blank' rel='nofollow'>JSONP and JQuery</a>
*   <a href='http://api.jquery.com/jquery.getjson/#jsonp' target='_blank' rel='nofollow'>More JSONP with JQuery</a>
*   <a href='http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp' target='_blank' rel='nofollow'>Ajax and JSONP</a>
