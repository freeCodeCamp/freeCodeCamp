---
title: Add an Accessible Date Picker
---
## Add an Accessible Date Picker
`<input>` elements of type date create input fields that let the user enter a date, either using a text box that automatically validates the content, or using a special date picker interface. The resulting value includes the year, month, and day, but not the time. The time and datetime-local input types support time and date/time inputs.

### Example
```HTML
<form>
  <div>
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday">
  </div>
</form>
```
The example above shows the basic usage of the date picker.

### Example:
```HTML
<form>
  <div>
    <label for="party">Choose your preferred party date:</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-30">
  </div>
</form>
```
By adding the `min` and `max` attributes you can restrict the range that can be selected from
### Example:
```HTML
<form>
  <div>
    <label for="party">Choose your preferred party date (required, April 1st to 20th):</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-20" required>
    <input type="submit">
  </div>
</form>
```
You can validate the date picker by adding the `required` attribute to the end of the `date` input

### More information
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date" target="_blank"> MDN web docs: HTML input type date</a><br>
- <a href="https://www.w3schools.com/tags/att_input_type_date.asp" target="_blank">W3schools: HTML input type date</a><br>
