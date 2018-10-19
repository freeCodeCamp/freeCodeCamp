---
title: Form Tag
---
## Form Tag

The `<form>` tag is used to create forms in HTML that are for user input. Once a user inputs data and submits it, the data is sent to the server to be processed.

Here's a basic example of how to use the `<form>` tag:
```html
<form action="/example.php" method="get">
Name: <input type="text"><br>
Email Address: <input type="text"><br>
<input type="submit" value="Submit">
</form>
```

###Action Attribute
Every `<form>` element needs an action attribute. The value of the action attribute is the URL on the server that will receive the data in the form when submitted.

Here's an example using the action attribute:
```html
<form action="http://www.google.com/form.php" method="get">
<p>Controls will appear inside here.</p>
</form>
```
As you can see, the form is submitting its data to the URL [http://www.google.com/from.php](http://www.google.com/from.php).

###Method
Forms can be submitted using either the GET or POST method.

- The GET method is ideal for shorter forms since it attaches data to the end of the URL specified inside of the action attribute.

- The POST method is ideal for forms that are longer, or when you are adding or deleting information from a database. With the POST method, the values of the form are being sent in HTTP headers.

###Elements
The `<form>` element will have at least have one of the following elements nested inside of it:

- [`<input>`](https://guide.freecodecamp.org/html/elements/input-tag "Input")
- [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "Button")
- [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "Label") 
- [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "Select")
- [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "Textarea")
- [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "Fieldset")

### Resources
- [W3 Schools Form Resource](https://www.w3schools.com/tags/tag_form.asp "W3 Schools")
- [Mozilla Form Resource](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "Mozilla Form")
