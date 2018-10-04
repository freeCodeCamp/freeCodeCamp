---
title: jQuery Ajax Get Method
---
## jQuery Ajax Get Method
Sends an asynchronous http GET request to load data from the server. Its general form is:
```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] )
```

* url : is the only mandatory parameter. This string contains the adress to which to send the request. The returned data will be ignored if no other parameter is specified
* data : A plain object or string that is sent to the server with the request. 
* success : A callback function that is executed if the request succeeds.it takes as an argument the returned data. It is also passed the text status of the response.
* dataType : The type of data expected from the server. The default is Intelligent Guess (xml, json, script, text, html). if this parameter is provided, then the success callback must be provided as well.

#### Examples
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'});
```

requests `resource.json` from the server, sending additional data and ignoring the returned result:
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response){ 
      alert("success");
      $("#mypar").html(response.amount);
});
```
requests `resource.json` from the server, sending additional data and handling the returned response (json format). This example can be written in this format:
 ```javascript
$.get('http://example.com/resource.json', {category:'client', type:'premium'}).done(function(response){
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
`$.ajax()` provides way more options that can be found <a href='http://api.jquery.com/jquery.ajax/' target='_blank' rel='nofollow'>here</a> 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information, please visit the <a href='https://api.jquery.com/jquery.get/' target='_blank' rel='nofollow'>official website</a> 


