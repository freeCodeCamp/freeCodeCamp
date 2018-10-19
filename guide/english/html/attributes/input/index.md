---
title: Input
---
## Input
The HTML `<input>` tag is used within a `<form>` element to declare an input element.
It allows the user to enter data, and can vary in many ways.

## Example
```html
<!DOCTYPE html>
<html>

   <head>
      <title>HTML input Tag</title>
   </head>
	
   <body>
      <form action = "/cgi-bin/hello_get.cgi" method = "get">
         First name: 
            <input type = "text" name = "first_name" value = "" maxlength = "100" />
            <br />
            
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" />
         <input type = "submit" value = "Submit" />
      </form>
   </body>
	
</html>
```

In the above example, there are two input fields which ask the user to enter their first and last names according to the labels specified. 
<br/>The 'submit' `<button type="submit">` is another type of input which is used to take the data entered by the user into the form and send it to some other location specified in the code.

#### More Information:
<a href="https://www.youtube.com/watch?v=qJ9ZkxmVf5s">Youtube</a>


## Input
The HTML `<input>` tag uses the attribute `type` to specify what kind of input element to display. Some of these include:
<br/>`type = "text"` - This is the default type, and generates a one-line text field.
<br/>`type = "password"`- This will generate a password field, and is used for (you guessed it!) passwords.
<br/>`type = "hidden"` - This will generate a hidden input field.

