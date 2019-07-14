---
title: Add a Submit Button to a Form
---
## Add a Submit Button to a Form

In this challenge you want to insert the submit button as the last element of the form ( just before the `</form>` closing tag) and to give it the attribute `type="submit"` (everything lowercase) and a text content of "Submit" (first letter uppercase) as specified in the challenge instruction.

1) the value `submit` of the attribute `type` is valid also inside an `input` tag and it will render a button with almost the same behaviour, but this is not the tag you want to use in this challenge.

```
<input type="submit">
```

If you do not specify a value, the button will have a default value choosen by your user agent (generally this is something like "Submit" or "Submit Query").

If you wish to specify a value like "Send Request" you can do so like this:

```
<input type="submit" value="Send Request">
```