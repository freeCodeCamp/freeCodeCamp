# wcwidth

Determine columns needed for a fixed-size wide-character string

----

wcwidth is a simple JavaScript port of [wcwidth](http://man7.org/linux/man-pages/man3/wcswidth.3.html) implemented in C by Markus Kuhn.

JavaScript port [originally](https://github.com/mycoboco/wcwidth.js) written by Woong Jun <woong.jun@gmail.com> (http://code.woong.org/)

## Example

```js
'한'.length    // => 1
wcwidth('한');   // => 2

'한글'.length    // => 2
wcwidth('한글'); // => 4
```

`wcwidth()` and its string version, `wcswidth()` are defined by IEEE Std
1002.1-2001, a.k.a. POSIX.1-2001, and return the number of columns used
to represent the given wide character and string.

Markus's implementation assumes the wide character given to those
functions to be encoded in ISO 10646, which is almost true for
JavaScript's characters.

[Further explaination here](docs)

## License

MIT
