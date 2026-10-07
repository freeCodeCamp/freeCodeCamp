# github-from-package

return the github url from a package.json file

[![build status](https://secure.travis-ci.org/substack/github-from-package.png)](http://travis-ci.org/substack/github-from-package)

# example

For the `./package.json` file:

``` json
{
  "name": "beep-boop",
  "version": "1.2.3",
  "repository" : {
    "type" : "git",
    "url": "git@github.com:substack/beep-boop.git"
  }
}
```

``` js
var github = require('github-from-package');
var url = github(require('./package.json'));
console.log(url);
```

```
https://github.com/substack/beep-boop
```

# methods

``` js
var github = require('github-from-package')
```

## var url = github(pkg)

Return the most likely github url from the package.json contents `pkg`. If no
github url can be determined, return `undefined`.

# install

With [npm](https://npmjs.org) do:

```
npm install github-from-package
```

# license

MIT
