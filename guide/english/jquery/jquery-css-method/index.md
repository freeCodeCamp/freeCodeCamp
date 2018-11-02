---
title: CSS Method
---
## CSS Method

The jQuery `.css()` method gets the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.

### Getting

To return the value of a specified CSS property, use the following syntax:
```js
    $(selector).css(propertyName);
```

For eg: 
```js
    $('#element').css('background');
```
Note: Here we can use any css selector eg: element(HTML Tag selector), .element(Class Selector), #element(ID selector).
### Setting 

To set a specified CSS property, use the following syntax:
```js
    $(selector).css(propertyName,value);
```

For eg:

```js
    $('#element').css('background','red');
```

To set multiple CSS properties, you'll have to use the object literal syntax like this:

```js
    $('#element').css({
        'background': 'gray',
        'color': 'white'
    });
```

If you want to change a property labeled with more than one word, refer to this example:

To change `background-color` of an element

```js
    $('#element').css('background-color', 'gray');
```

#### More Information:

Documentation: <a href='http://api.jquery.com/css/' target='_blank' rel='nofollow'>api.jquery</a>
