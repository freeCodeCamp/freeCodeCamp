# [postcss][postcss]-discard-comments

> Discard comments in your CSS files with PostCSS.


## Install

With [npm](https://npmjs.org/package/postcss-discard-comments) do:

```
npm install postcss-discard-comments --save
```


## Example

### Input

```css
h1/* heading */{
    margin: 0 auto
}
```

### Output

```css
h1 {
    margin: 0 auto
}
```

This module discards comments from your CSS files; by default, it will remove
all regular comments (`/* comment */`) and preserve comments marked as important
(`/*! important */`).

Note that this module does not handle source map comments because they are not
available to it; PostCSS handles this internally, so if they are removed then
you will have to [configure source maps in PostCSS][maps].

[maps]: https://github.com/postcss/postcss/blob/master/docs/source-maps.md


## API

### comments([options])

#### options

##### remove(function)

Type: `function`
Return: `boolean`
Variable: `comment` contains a comment without `/**/`

For each comment, return true to remove, or false to keep the comment.

```js
function(comment) {}
```

```js
var css = '/* headings *//*@ h1 */h1{margin:0 auto}/*@ h2 */h2{color:red}';
console.log(postcss(comments({
    remove: function(comment) { return comment[0] == "@"; }
})).process(css).css);
//=> /* headings */h1{margin:0 auto}h2{color:red}
```
**NOTE:** If you use the `remove` function other options will not be available.

##### removeAll

Type: `boolean`
Default: `false`

Remove all comments marked as important.

```js
var css = '/*! heading */h1{margin:0 auto}/*! heading 2 */h2{color:red}';
console.log(postcss(comments({removeAll: true})).process(css).css);
//=> h1{margin:0 auto}h2{color:red}
```

##### removeAllButFirst

Type: `boolean`
Default: `false`

Remove all comments marked as important, but the first one.

```js
var css = '/*! heading */h1{margin:0 auto}/*! heading 2 */h2{color:red}';
console.log(postcss(comments({removeAllButFirst: true})).process(css).css);
//=> /*! heading */h1{margin:0 auto}h2{color:red}
```


## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.


## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).


## License

MIT © [Ben Briggs](http://beneb.info)


[postcss]: https://github.com/postcss/postcss
