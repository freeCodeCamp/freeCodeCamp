# 1.2.1
- fix version

# 1.2.0
- add `List.remove`
- build with LiveScript 1.6.0
- update dependencies
- remove coverage calculation

# 1.1.2
- add `Func.memoize`
- fix `zip-all` and `zip-with-all` corner case (no input)
- build with LiveScript 1.4.0

# 1.1.1
- curry `unique-by`, `minimum-by`

# 1.1.0
- added `List` functions: `maximum-by`, `minimum-by`, `unique-by`
- added `List` functions: `at`, `elem-index`, `elem-indices`, `find-index`, `find-indices`
- added `Str` functions: `capitalize`, `camelize`, `dasherize`
- added `Func` function: `over` - eg. ``same-length = (==) `over` (.length)``
- exported `Str.repeat` through main `prelude` object
- fixed definition of `foldr` and `foldr1`, the new correct definition is backwards incompatible with the old, incorrect one
- fixed issue with `fix`
- improved code coverage

# 1.0.3
- build browser versions

# 1.0.2
- bug fix for `flatten` - slight change with bug fix, flattens arrays only, not array-like objects

# 1.0.1
- bug fixes for `drop-while` and `take-while`

# 1.0.0
* massive update - separated functions into separate modules
* functions do not accept multiple types anymore - use different versions in their respective modules in some cases (eg. `Obj.map`), or use `chars` or `values` in other cases to transform into a list
* objects are no longer transformed into functions, simply use `(obj.)` in LiveScript to do that
* browser version now using browserify - use `prelude = require('prelude-ls')`
* added `compact`, `split`, `flatten`, `difference`, `intersection`, `union`, `count-by`, `group-by`, `chars`, `unchars`, `apply`
* added `lists-to-obj` which takes a list of keys and list of values and zips them up into an object, and the converse `obj-to-lists`
* added `pairs-to-obj` which takes a list of pairs (2 element lists) and creates an object, and the converse `obj-to-pairs`
* removed `cons`, `append` - use the concat operator
* removed `compose` - use the compose operator
* removed `obj-to-func` - use partially applied access (eg. `(obj.)`)
* removed `length` - use `(.length)`
* `sort-by` renamed to `sort-with`
* added new `sort-by`
* removed `compare` - just use the new `sort-by`
* `break-it` renamed `break-list`, (`Str.break-str` for the string version)
* added `Str.repeat` which creates a new string by repeating the input n times
* `unfold` as alias to `unfoldr` is no longer used
* fixed up style and compiled with LiveScript 1.1.1
* use Make instead of Slake
* greatly improved tests

# 0.6.0
* fixed various bugs
* added `fix`, a fixpoint (Y combinator) for anonymous recursive functions
* added `unfoldr` (alias `unfold`)
* calling `replicate` with a string now returns a list of strings
* removed `partial`, just use native partial application in LiveScript using the `_` placeholder, or currying
* added `sort`, `sortBy`, and `compare`

# 0.5.0
* removed `lookup` - use (.prop)
* removed `call` - use (.func arg1, arg2)
* removed `pluck` - use map (.prop), xs
* fixed buys wtih `head` and `last`
* added non-minifed browser version, as `prelude-browser.js`
* renamed `prelude-min.js` to `prelude-browser-min.js`
* renamed `zip` to `zipAll`
* renamed `zipWith` to `zipAllWith`
* added `zip`, a curried zip that takes only two arguments
* added `zipWith`, a curried zipWith that takes only two arguments

# 0.4.0
* added `parition` function
* added `curry` function
* removed `elem` function (use `in`)
* removed `notElem` function (use `not in`)

# 0.3.0
* added `listToObject`
* added `unique`
* added `objToFunc`
* added support for using strings in map and the like
* added support for using objects in map and the like
* added ability to use objects instead of functions in certain cases
* removed `error` (just use throw)
* added `tau` constant
* added `join`
* added `values`
* added `keys`
* added `partial`
* renamed `log` to `ln`
* added alias to `head`: `first`
* added `installPrelude` helper

# 0.2.0
* removed functions that simply warp operators as you can now use operators as functions in LiveScript
* `min/max` are now curried and take only 2 arguments
* added `call`

# 0.1.0
* initial public release
