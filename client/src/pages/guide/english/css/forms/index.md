---
title: Forms
---
## Forms

HTML Form element defines a form that is used to collect user input.
Examples:
```html
<form>
  contents
</form>
```
An HTML form contains form elements.

Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.

Inside the form tags there are also some important attribute which are:
-action : the page that the data will sent to
-method : type of request which are: 'GET' and 'POST'.

-GET: 
1.Appends form-data into the URL in name/value pairs , so never use GET to send sensitive data.
2.The length of a URL is limited (about 3000 characters).

-POST: 
1.This method does not display the submitted form data in the page address field.
2. Has no size limitation.

### The input element
It is the most important form element.Different types of input element are:

1.Text:Defines a one-line text input field.
```html
<input type="text">
```
2.Radio:Defines a radio button (for selecting one of many choices)
```html
<input type="radio">
```
3.Checkboxes:Checkboxes let a user select ZERO or MORE options of a limited number of choices.
```html
<form>
  <input type="checkbox" name="food1" value="mango"> mango<br>
  <input type="checkbox" name="food2" value="apple">apple
</form>
```
4.Submit:Defines a submit button (for submitting the form)
```html
<input type="submit">
```

### The NAME attribute
If you want to submit the form that the input fields must contain the name attribute,if it is not present,
the data of that input field will not be sent at all.
In the below given example,only input type corresponding to first name will be submitted.

```html
<form action="my.php" method="post">
First name:<input type="text" name="firstname">
Last name:<input type="text">
<input type="submit" value="submit">
</form>
```



