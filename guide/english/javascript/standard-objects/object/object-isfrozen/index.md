---
title: Object isFrozen
---
## Object isFrozen

You can use <b>`Object.isFrozen()`</b> to figure out if an object is frozen or not. It returns a <b>`true`</b> or <b>`false`</b> boolean value. 

<b><h4>SYNTAX</h4></b>
```javascript
Object.isFrozen(obj)
```
<b>For Example:</b>

```javascript
var foods = {
    grain : "wheat",
    dairy  : "milk",
    vegetable : "carrot",
    fruit  : "grape"
};

var frozenFoods = Object.freeze(foods);

var areMyFoodsFrozen = Object.isFrozen(frozenFoods);

\\ returns true

```

Remember, a frozen object <b>cannot</b> have its properties changed. 
</br></br>
If you try to use <b>`Object.isFrozen()`</b> on a non-object argument, it will return `true`. 

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen' target='_blank' rel='nofollow'>MDN Object.isFrozen()</a></br>
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze' target='_blank' rel='nofollow'>MDN Object.freeze()</a>

