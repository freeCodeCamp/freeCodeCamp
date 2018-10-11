---
title: jQuery Ajax Get Method
---
## jQuery Ajax Get Method
Sends an asynchronous http GET request to load data from the server. Its general form is:
```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] )
```

* `url`: The only mandatory parameter. This string contains the address to which to send the request. The returned data will be ignored if no other parameter is specified.
* `data`: A plain object or string sent to the server with the request. 
* `success`: A callback function executed if the request succeeds. It takes as an argument the returned data. It is also passed the text status of the response.
* `dataType`: The type of data expected from the server. The default is Intelligent Guess (xml, json, script, text, html). If this parameter is provided, the success callback also must be provided.

#### Examples

Request `resource.json` from the server, send additional data, and ignore the returned result:
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'});
```

Request `resource.json` from the server, send additional data, and handle the returned response (json format):
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) {
      alert("success");
      $("#mypar").html(response.amount);
});
```

The above example can also be written as:
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'})
      .done(function(response) {
            alert("success");
            $("#mypar").html(response.amount);
      });
```

### jQuery.ajax()
`$.get( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to:
 ```javascript
$.ajax({
      url: url,
      data: data,
      success: success,
      dataType: dataType
});
```

`$.ajax()` provides plenty of additional options, all of which are located <a href='http://api.jquery.com/jquery.ajax/' target='_blank' rel='nofollow'>here</a>.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information, please visit the <a href='https://api.jquery.com/jquery.get/' target='_blank' rel='nofollow'>official jQuery.get website</a>.


