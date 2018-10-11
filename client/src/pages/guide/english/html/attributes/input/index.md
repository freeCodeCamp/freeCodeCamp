---
title: Input
---
## Input
The HTML `<input>` tag is used within a form to declare an input element.
It allows the user to enter data.

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

In the above example, there are two input fields which ask the user to enter their first and last names according to the labels specified. The submit `<button type="submit">` is another type of input which is used to take the data entered by the user into the form and send it to some other location specified in the code.

#### More Information:
<a href="https://www.youtube.com/watch?v=qJ9ZkxmVf5s">Youtube</a>

