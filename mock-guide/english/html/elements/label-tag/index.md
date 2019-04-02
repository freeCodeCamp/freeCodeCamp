---
title: Label Tag
---

# Label Tag
<***label***> defines a label for an <input> type element/tag.

### Usage
```
<label for="id">Label</label>
<input type="text" name="text" id="id" value="yourvalue"><br>
```
As you can see, the *for* attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.

### Platform Support
|Browser|Element Support|
|:-----:|:-------------:|
|Internet Explorer|:white_check_mark:|
|Mozilla Firefox|:white_check_mark:|
|Google Chrome|:white_check_mark:|
|Opera|:white_check_mark:|
|Safari|:white_check_mark:|

### Attributes
|Attribute|	Value|Description|
|:-------:|:----:|:---------:|
|for|	element_id|	Specifies which form element a label is bound to|
|form|form_id	|Specifies one or more forms the label belongs to|


### Global Attribute
The <**label**> tag supports the Global Attributes in HTML.

### Event Attribute
The <**label**> tag supports the Event Attributes in HTML.

> The <**label**> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <label> element, it toggles the control.



#### More Information:
[https://www.w3schools.com/jsref/dom_obj_label.asp](https://www.w3schools.com/jsref/dom_obj_label.asp)
=======

## Label
The `<label>` tag defines a label for an `<input>` element.

A label can be bound to an element either by using the "for" attribute, or by placing the element inside the <label> element.
```html
<label for="peas">Do you like peas?
  <input type="checkbox" name="peas" id="peas">
</label>
```

```html
<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

#### More Information:


<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label' target='_blank' rel='nofollow'>MDN - Tabel Tag</a>  
<a href='https://www.w3schools.com/tags/tag_label.asp' target='_blank' rel='nofollow'>W3School - Label Tag</a>