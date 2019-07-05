---
title: Form Inputs
---

## Form Inputs

Bootstrap supports the following form controls:

1. input
2. textarea
3. checkbox
4. radio
5. select
6. range

## Example Code Snippets

#### 1. Input

Bootstrap supports all the HTML5 input types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.

**Note: Inputs will NOT be fully styled if their type is not properly declared!**

The following example contains two input elements; one of type text and one of type password:

```html
<div class="form-group">
  <label for="usr">Name:</label>
  <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd">
</div>
```

#### 2. Textarea

The following example contains a textarea:

```html
<div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
```

#### 3. Checkboxes

Checkboxes are used if you want the user to select any number of options from a list of preset options.

The following example contains three checkboxes. The last option is disabled:

```html
<div class="checkbox">
  <label>
  <input type="checkbox" value="">Option 1</label>
</div>
<div class="checkbox">
  <label>
  <input type="checkbox" value="">Option 2</label>
</div>
<div class="checkbox disabled">
  <label>
  <input type="checkbox" value="" disabled>Option 3</label>
</div>
```

Use the **.checkbox-inline** class if you want the checkboxes to appear on the same line:

```html
<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label>
<label class="checkbox-inline"><input type="checkbox" value="">Option 2</label>
<label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>
```

#### 4. Radio Buttons

Radio buttons are used if you want to limit the user to just one selection from a list of preset options.

The following example contains three radio buttons. The last option is disabled:

```html
<div class="radio">
  <label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
  <label><input type="radio" name="optradio">Option 2</label>
</div>
<div class="radio disabled">
  <label><input type="radio" name="optradio" disabled>Option 3</label>
</div>
```

Use the **.radio-inline** class if you want the checkboxes to appear on the same line:

```html
<label class="radio-inline"><input type="radio" name="optradio">Option 1</label>
<label class="radio-inline"><input type="radio" name="optradio">Option 2</label>
<label class="radio-inline"><input type="radio" name="optradio">Option 3</label>
```

#### 5. Select (List)

Select lists are used if you want to allow the user to pick from multiple options.

The following example contains a dropdown list (select list):

```html
<div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
```

#### 6. Range

Select lists are used if you want to allow the user to pick from multiple options.

The following example contains a dropdown list (select list):

```html
<form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>
```

## How to make Bootstrap Inputs Accessible

Input fields should have labels or some other form of identifier such as WAI-ARIA tags to meet the Web
Content Accessibility Guidelines or [WCAG](https://www.w3.org/WAI/tutorials/forms/) for short. In order
for screen readers to accurately convey to a user what labels are associated with which inputs the labels
should reference the corresponding input.

This can be done by utlizing the `for` parameter in the HTML:
```html
<label for="email-input">Enter Email</label>
<input type="email" class="form-control" id="email-input" placeholder="Enter Email">

```

The label `for` attribute **always** references the input field by its **ID**. This tells the screen reader
that this label is definitely for this input field which will minimize confusion for any users who are using
a screen reader to visit a web site. In the above example, if a user clicks on the actual word "Enter email", then the user will be able to type. If the 'for' attribute was not attached to the label, then if a user clicks on the words 'Enter email,' nothing would happen. The user would have to click on the actual email input field to be able to type.


### More Informations:
[Forms - Bootstrap](https://getbootstrap.com/docs/4.1/components/forms/)
Code examples are from [W3Schools - Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp).

