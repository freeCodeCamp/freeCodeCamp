---
title: HTML Forms
---
## HTML Forms

Basically, forms are used to collect data entered by a user, which are then sent to the server for further processing. They can be used for different kinds of user inputs, such as name, email etc. 

Form contains control elements which are wrapped around ```<form></form>``` tags, like ```input```, which can have types like:

- ```text```
- ```email```
- ```password```
- ```checkbox```
- ```radio```
- ```submit```
- ```range```
- ```search```
- ```date```
- ```time```
- ```week```
- ```color```
- ```datalist```

Code example:
```html
<form>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password">
    <input type="radio" name="gender" value="male">Male<br>
    <input type="radio" name="gender" value="female">Female<br>
    <input type="radio" name="gender" value="other">Other
    <input list="Options">
    <datalist id="Options">
      <option value="Option1">
      <option value="Option2">
      <option value="Option3">
    </datalist> 
    <input type="submit" value="Submit">
    <input type="color">
    <input type="checkbox" name="correct" value="correct">Correct
</form>
```

Other elements that form can contain:

- ```textarea``` - is a multiline box which is most often used for adding some text eg. comment. Size of textarea is defined by number of rows and columns.
- ```select``` - together with ```<option></option>``` tag creates drop-down select menu.
- ```button``` - The button element can be used to define a clickable button.
- ```fieldset```- It groups related elements in a form.
- ```legend```- It defines a caption for a <fieldset> element.

MORE INFORMATION ON HTML FORMS.

HTML Forms are required when you want to collect some data from the site visitor. For example, during user registration you would like to collect information such as name, email address, credit card, etc.

A form will take input from the site visitor and then will post it to a back-end application such as CGI, ASP Script or PHP script etc. The back-end application will perform required processing on the passed data based on defined business logic inside the application.

There are various form elements available like text fields, textarea fields, drop-down menus, radio buttons, checkboxes, etc.

The HTML `<form>` tag is used to create an HTML form and it has following syntax −

``` html    
    <form action = "Script URL" method = "GET|POST">
         form elements like input, textarea etc.
    </form>
```
    
If the form method is not defined then it will default to "GET".

The form tag can also have an attribute named "target" which specifies where the link will open. It can open in the browser tab, a frame, or in the current window.

The action attribute defines the action to be performed when the form is submitted.
Normally, the form data is sent to a web page at the Script URL when the user clicks on the submit button. If the action attribute is omitted, the action is set to the current page.
