---
title: Textarea Tag
---
## Textarea Tag
The HTML textarea tag allows you to enter a box that will contain text for user feedback or interaction. In most cases, it is common to see the textarea used as part of a form.

Programmers use textarea tag to create multiline field for user input (useful especially in case when user should be able to put on the form longer text). Programmers may specify different attributes for textarea tags.

Sample code:

```html
    <form>
      <textarea name="comment" rows="8" cols="80" maxlength="500" placeholder="Enter your comment here..." required></textarea>
    </form>
```

Most common attributes:
`row` and `cols` attributes determine the height and width of the textarea
`placeholder` attribute specifies the text which is visible to the user, it helps the user to understand what data should be typed in
`maxlength` attribute determines the maximum length of the text which can be typed in the textarea, user cannot submit more characters
`required` attribute means that this field must be filled in before the form submission

For more information about textarea tag and its attributes visit [MDN]("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea") or [w3schools]("https://www.w3schools.com/tags/tag_textarea.asp").
