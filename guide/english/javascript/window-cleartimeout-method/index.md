---
title: Window clearTimeout Method
---
## Window clearTimeout Method

The 'clearTimeout()' method is used stop a timer set with the 'setTimeout()' method.

```js
    clearTimeout(setTimeout_ID); 
```

If the 'clearTimeout()' method is called before the timer has finished counting, the 'clearTimeout()' method will stop the 'setTimeout()' method from executing.

To be able to use the 'clearTimeout()' method, you must use a global variable. See the example below
```js
    myID = setTimeout(function, milliseconds); 
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout' target='_blank' rel='nofollow'>MDN</a> 
