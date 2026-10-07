Cursors
-------

Cursors allow you to hold a reference to a path in a nested immutable data
structure, allowing you to pass smaller sections of a larger nested
collection to portions of your application while maintaining a central point
aware of changes to the entire data structure: an `onChange` function which is
called whenever a cursor or sub-cursor calls `update`.

This is particularly useful when used in conjuction with component-based UI
libraries like [React](http://facebook.github.io/react/) or to simulate
"state" throughout an application while maintaining a single flow of logic.


```javascript
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var data = Immutable.fromJS({ a: { b: { c: 1 } } });
var cursor = Cursor.from(data, ['a', 'b'], newData => {
  data = newData;
});

// ... elsewhere ...

cursor.get('c'); // 1
cursor = cursor.update('c', x => x + 1);
cursor.get('c'); // 2

// ... back to data ...

data.getIn(['a', 'b', 'c']); // 2
```
