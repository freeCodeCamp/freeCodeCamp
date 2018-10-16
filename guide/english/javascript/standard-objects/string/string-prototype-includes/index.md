---
title: String.prototype.includes
---
## String.prototype.includes

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The `includes()` method is used to determine whether or not one string can be found in another string. This method returns a boolean value (either `true` or `false`).

Important to note is that this method is case-sensitive.

**Syntax**

```js
string.includes(searchString[, position])
```

**Parameters**

This method requires only one parameter (searchString). However, by including a second parameter (position), you can start your search for a string within a string from a specific position (or index) in the searchString.

**Examples**

```js
let string = "Roses are red, violets are blue.";

string.includes('red'); // returns true
```

```javascript
let string = "Roses are red, violets are blue.";

string.includes('Red'); // returns false
```

```javascript
let string = "Roses are red, violets are blue.";

string.includes('red',12); // returns false because 'red' starts at position 9, and our search begins at position 12.
```


```javascript
let string = "Roses are red, violets are blue.";

string.includes('blue',12); // returns true because 'blue' starts after our search begins at position 12.
```

```javascript
let string = "Roses are red, violets are blue.";

string.includes('violets are blue'); // returns true
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes">MDN</a>

