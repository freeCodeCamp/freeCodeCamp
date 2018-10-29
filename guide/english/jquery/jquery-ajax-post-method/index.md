---
title: jQuery Ajax Post Method
---
## jQuery Ajax Post Method
Sends an asynchronous http POST request to load data from the server. Its general form is:
```javascript
jQuery.post( url [, data ] [, success ] [, dataType ] )
```

* url : is the only mandatory parameter. This string contains the adress to which to send the request. The returned data will be ignored if no other parameter is specified
* data : A plain object or string that is sent to the server with the request. 
* success : A callback function that is executed if the request succeeds.it takes as an argument the returned data. It is also passed the text status of the response.
* dataType : The type of data expected from the server. The default is Intelligent Guess (xml, json, script, text, html). if this parameter is provided, then the success callback must be provided as well.

#### Examples
```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'});
```

requests `form.php` from the server, sending additional data and ignoring the returned result
```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success");
      $("#mypar").html(response.amount);
});
```
requests `form.php` from the server, sending additional data and handling the returned response (json format). This example can be written in this format:
```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){
      alert("success");
      $("#mypar").html(response.amount);
});
```
The following example posts a form using Ajax and put results in a div
``` html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.post demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<form action="/" id="searchForm">
  <input type="text" name="s" placeholder="Search...">
  <input type="submit" value="Search">
</form>
<!-- the result of the search will be rendered inside this div -->
<div id="result"></div>
 
<script>
// Attach a submit handler to the form
$( "#searchForm" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    term = $form.find( "input[name='s']" ).val(),
    url = $form.attr( "action" );
 
  // Send the data using post
  var posting = $.post( url, { s: term } );
 
  // Put the results in a div
  posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
  });
});
</script>
 
</body>
</html>
```

The following example use the github api to fetch the list of repositories  of a user  using jQuery.ajax() and put results in a div
``` html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery Get demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<form id="userForm">
  <input type="text" name="username" placeholder="Enter gitHub User name">
  <input type="submit" value="Search">
</form>
<!-- the result of the search will be rendered inside this div -->
<div id="result"></div>
 
<script>
// Attach a submit handler to the form
$( "#userForm" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    username = $form.find( "input[name='username']" ).val(),
    url = "https://api.github.com/users/"+username+"/repos";
 
  // Send the data using post
  var posting = $.post( url, { s: term } );
 
  //Ajax Function to send a get request
  $.ajax({
    type: "GET",
    url: url,
    dataType:"jsonp"
    success: function(response){
        //if request if made successfully then the response represent the data

        $( "#result" ).empty().append( response );
    }
  });
  
});
</script>
 
</body>
</html>
```


### jQuery.ajax()
`$.post( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to:
```javascript
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

`$.ajax()` provides way more options that can be found <a href='http://api.jquery.com/jquery.ajax/' target='_blank' rel='nofollow'>here</a> 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information, please visit the <a href='https://api.jquery.com/jquery.post/' target='_blank' rel='nofollow'>official website</a>


