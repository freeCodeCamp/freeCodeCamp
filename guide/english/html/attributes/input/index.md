---
title: Input
---

# Input
The HTML `<input>` tag is used to create an element which allows a user to input data. Typically this would be within a `<form>` element, although it's not required.

## Example
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

In the above example, there is a form with two text fields which ask the user to enter their first and last names according to the labels specified. `<input type="submit">` is another type of input which is used to submit the form's data to the URL defined in the form's `action` attribute.

## Types
There are many types of `<input>` tags which can be specified with the input's `type` attribute. A few common types are:
- **Text** - Creates a simple text box
- **Password** - Creates a text field but masks the characters typed into the input
- **Checkbox**
- **Radio**
- **Submit** - Displays a button that submits the form when clicked
- **Hidden** - This is a special type that doesn't render on the page. It's typically used to pass additional data along with a form.
