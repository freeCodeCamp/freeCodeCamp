---
title: HTML Forms
---
## HTML Forms

HTML forms are used to get input entered by a user and send it to a server for further processing. They can be used for different kinds of user inputs, such as name, email, address, etc.

Forms contain control elements (such as ```input```) which are wrapped around ```<form> </form>``` tags. Input elements can be classified as 'types' such as:

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
- ```button```
- ```datetime-local```
- ```file```
- ```hidden```
- ```image```
- ```month```
- ```number```
- ```reset```
- ```tel```
- ```url```
- ```textarea``` - is a multiline box which is most often used for adding some text (e.g. comment). Size of textarea is defined by number of rows and columns.
- ```select``` - together with ```<option></option>``` tag creates drop-down select menu.
- ```button``` - The button element can be used to define a clickable button.
- ```fieldset```- It groups related elements in a form.
- ```legend```- It defines a caption for a <fieldset> element.

Code example:
```html
<form>
  <label for="username">Username:</label>
  <input type="text" name="username" id="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" name="password" id="password">
  <br>
  <label for="age">Age:</label>
  <input type="number" name="age" id="age">
  <input type="radio" name="gender" value="male">Male<br>
  <input type="radio" name="gender" value="female">Female<br>
  <input type="radio" name="gender" value="other">Other
  <input list="Options">
  <datalist id="Options">
    <option value="Option1">
    <option value="Option2">
    <option value="Option3">
  </datalist>
  <br>
  <input type="color">
  <br>
  <input type="checkbox" name="correct" value="correct">Correct
  <br>
  <input type="submit" value="Submit">
</form>
```
![Screenshot of Code Above](https://i.imgur.com/r0br52L.png "Screenshot of Code Above")

SETTING MINIMUM AND MAXIMUM VALUES ON INPUTS OF TYPE "NUMBER"

If you would like to require your user to enter a number value within a certain range, you can use the "min" and "max" attributes to the input element.

For example:
<input type="number" name="age" id="age" min="21" max="99">

You can use only min, only max or both to set your range. If the user enters a value outside of the range, the browser will automatically generate a notifcation alerting them to the requirement.

MORE INFORMATION ON HTML FORMS.

HTML Forms are required when you want to collect data from the site visitor. For example, during user registration you would like to collect information such as name, email address, credit card, etc.

A form will take input from the site visitor and then will post it to a back-end application such as CGI, ASP Script or PHP script etc. The back-end application will perform required processing on the passed data based on defined business logic inside the application.


The HTML `<form>` tag is used to create an HTML form and it has the following syntax −

``` html    
<form action="Script URL" method="POST">
  form elements like input, textarea etc.
</form>

<form action="Script URL" method="GET">
  form elements like input, textarea etc.
</form>
```
    
If the form method is not defined then it will default to "GET".
If you want to submit sensitive or large amounts of data you should prefer HTTP "POST" over "GET", since form data is visible in the URL when using "GET".

The form tag can also have an attribute named "target" which specifies where the link will open. It can open in the browser tab, a frame, or in the current window. If the target is not defined, the target URL will open in the current tab by default.

The action attribute defines the action to be performed when the form is submitted.
Normally, the form data is sent to a web page at the Script URL when the user clicks on the submit button. If the action attribute is omitted, the action is set to the current page.


## Form Validation
Form validation guarantees that user provided all the required data in a correct way. There are 2 broad types: **client-side** and **server-side** validation. Client-side validation can be done via JavaScript or HTML5 (required attribute for instance). It gives helpful and instant feedback to the user. Server-side validation is performed before data is saved to the database to avoid saving incorrect or even dangerous data. Usually, both types of validation should be implemented to get the best of the both worlds: great UX and proper security.

## More information
- [Wikipedia](https://en.wikipedia.org/wiki/Form_(HTML))
