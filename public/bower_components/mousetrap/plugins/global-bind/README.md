# Global Bind

This extension allows you to specify keyboard events that will work anywhere including inside textarea/input fields.

Usage looks like:

```javascript
Mousetrap.bindGlobal('ctrl+s', function() {
    _save();
});
```

This means that a keyboard event bound using ``Mousetrap.bind`` will only work outside of form input fields, but using ``Moustrap.bindGlobal`` will work in both places.

If you wanted to create keyboard shortcuts that only work when you are inside a specific textarea you can do that too by creating your own extension.
