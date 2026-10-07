#boolbase
This very simple module provides two basic functions, one that always returns true (`trueFunc`) and one that always returns false (`falseFunc`).

###WTF?

By having only a single instance of these functions around, it's possible to do some nice optimizations. Eg. [`CSSselect`](https://github.com/fb55/CSSselect) uses these functions to determine whether a selector won't match any elements. If that's the case, the DOM doesn't even have to be touched.

###And why is this a separate module?

I'm trying to modularize `CSSselect` and most modules depend on these functions. IMHO, having a separate module is the easiest solution to this problem.