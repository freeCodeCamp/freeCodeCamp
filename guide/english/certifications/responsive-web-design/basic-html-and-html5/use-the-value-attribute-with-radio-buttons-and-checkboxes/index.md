---
title: Use the value attribute with Radio Buttons and Checkboxes
---
## Use the value attribute with Radio Buttons and Checkboxes
To pass the challenge, add the `value` attribute to the `input` elements of type `checkbox` and `radio`. Use the `input` label text, in lowercase, as the value for the attribute. The `value` attribute will make sure the choices are identifiable when the form is submitted.

Example form with value attributes:
```html
<form action="/submit-sandwich">

  <label><input type="radio" name="bread" value="wheat"> Wheat</label>
  <label><input type="radio" name="bread" value="ciabatta"> Ciabatta</label><br>

  <label><input type="checkbox" name="fillings" value="chicken"> Chicken</label>
  <label><input type="checkbox" name="fillings" value="tuna"> Tuna</label>
  <label><input type="checkbox" name="fillings" value="mayo"> Mayo</label><br>

  <textarea placeholder="Allergies, and extra information"></textarea><br>

  <button type="submit">Order Sandwich</button>
</form>
```