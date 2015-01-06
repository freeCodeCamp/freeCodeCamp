# packaged angular

This repo is for distribution on `npm` and `bower`. The source for this module is in the
[main AngularJS repo](https://github.com/angular/angular.js).
Please file issues and pull requests against that repo.

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angular
```

Then add a `<script>` to your `index.html`:

```html
<script src="/node_modules/angular/angular.js"></script>
```

Note that this package is not in CommonJS format, so doing `require('angular')` will return `undefined`.
If you're using [Browserify](https://github.com/substack/node-browserify), you can use
[exposify](https://github.com/thlorenz/exposify) to have `require('angular')` return the `angular`
global.

### bower

```shell
bower install angular
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular/angular.js"></script>
```

## Documentation

Documentation is available on the
[AngularJS docs site](http://docs.angularjs.org/).

## License

The MIT License

Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
