---
title: HTML Forms
---
## HTML Forms

Html forms are used to collect data entered by a user and send it to the server for further processing. They can be used for different kinds of user inputs, such as name, email, address,  etc. 

A form will take input from the site visitor and then will post it to a back-end application such as CGI, ASP Script or PHP script etc. The back-end application will perform required processing on the passed data based on defined business logic inside the application.

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

Other elements that forms can contain:

- ```textarea``` - is a multiline box which is most often used for adding text. Size of textarea is defined by number of rows and columns.
- ```select``` - together with ```<option></option>``` tag creates a drop-down select menu.
- ```button``` - The button element is used to define a clickable button.

