# stylehacks

> Detect/remove browser hacks from CSS files.


## Install

With [npm](https://npmjs.org/package/stylehacks) do:

```
npm install stylehacks --save
```


## Example

In its default mode, stylehacks will remove hacks from your CSS file, based on
the browsers that you wish to support.

### Input

```css
h1 {
    _color: white;
    color: rgba(255, 255, 255, 0.5);
}
```

### Output

```css
h1 {
    color: rgba(255, 255, 255, 0.5);
}
```


## API

### `stylehacks.detect(node)`

Type: `function`  
Returns: `boolean`

This method will take any PostCSS *node*, run applicable plugins depending on
its type, then will return a boolean depending on whether it found any of
the supported hacks. For example, if the `decl` node found below is passed to
the `detect` function, it will return `true`. But if the `rule` node is passed,
it will return `false` instead.

```css
h1 { _color: red }
```

### `postcss([ stylehacks(opts) ])`

stylehacks can also be consumed as a PostCSS plugin. See the
[documentation](https://github.com/postcss/postcss#usage) for examples for
your environment.

#### options

##### lint

Type: `boolean`  
Default: `false`

If lint mode is enabled, stylehacks will not remove hacks from the CSS; instead,
it will add warnings to `Result#messages`.


## Related

stylehacks works well with your existing PostCSS setup:

* [stylelint] - Comprehensive & modern CSS linter, to ensure that your code
  style rules are respected.


## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.


## License

MIT © [Ben Briggs](http://beneb.info)


[stylelint]: https://github.com/stylelint/stylelint
