---
title: Input
---

## Input

The HTML `<input>` tag is typically used within a `<form>` element to declare an input element.
It allows the user to enter data, and can vary in many ways.

### Example
```html
<!DOCTYPE html>
<html>

   <head>
      <title>HTML input Tag</title>
   </head>
	
   <body>
      <form action="/my-form-action" method="get">
         <label for="first_name">First Name:</label>
            <input type="text" name="first_name" value="" maxlength="100" />
            <br />
            
            <label for="last_name">Last Name:</label> 
            <input type="text" name="last_name" value="" maxlength="100" />
              
            <input type="submit" value="Submit" />
      </form>
   </body>
	
</html>
```

In the above example, there are two input fields which ask the user to enter their first and last names according to the labels specified. 

Submit (`<input type="submit">`) is another type of input which is used to take the data entered by the user into the form and send it to some other location specified in the code.

### Input Types
The HTML `<input>` tag uses the attribute `type` to specify what kind of input element to display. Some of these include:
* `type = "text"` - This is the default type, and generates a one-line text field.
* `type = "password"`- This will generate a password field, and is used for (you guessed it!) passwords.
* `type = "hidden"` - This will generate a hidden input field.
* `type = "text"` - Creates a simple text box.
* `type = "password"` - Creates a text field but masks the characters typed into the input.
* `type = "checkbox"` - Creates a checkbox field that allows the user to select multiple options.
* `type = "radio"` - Creates a field that allows a user to select only one option.
* `type = "submit"` - Displays a button that submits the form when clicked.
* `type = "hidden"` - This is a special type that doesn't render on the page. It's typically used to pass additional data along with a form.

#### More Information:
[MDN - Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
