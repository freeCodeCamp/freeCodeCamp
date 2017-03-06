# Bind Dictionary

This extension overwrites the default bind behavior and allows you to bind multiple combinations in a single bind call.

Usage looks like:

```javascript
Mousetrap.bind({
    'a': function() { console.log('a'); },
    'b': function() { console.log('b'); }
});
```

You can optionally pass in ``keypress``, ``keydown`` or ``keyup`` as a second argument.

Other bind calls work the same way as they do by default.
