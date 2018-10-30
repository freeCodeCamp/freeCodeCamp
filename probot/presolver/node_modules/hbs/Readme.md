# hbs [![Build Status](https://travis-ci.org/pillarjs/hbs.svg?branch=master)](https://travis-ci.org/pillarjs/hbs)

[Express.js](http://github.com/visionmedia/express) view engine for
[handlebars.js](http://github.com/wycats/handlebars.js)

## Install ##

```
npm install hbs
```

## Use ##

Using *hbs* as the default view engine requires just one line of code in your app setup. This will render `.hbs` files when `res.render` is called.

```javascript
app.set('view engine', 'hbs');
```

To use a different extension (i.e. html) for your template files:

```javascript
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
```

## Helpers and Partials ##

hbs exposes the `registerHelper` and `registerPartial` method from handlebars.

```javascript
var hbs = require('hbs');

hbs.registerHelper('helper_name', function(...) { ... });
hbs.registerPartial('partial_name', 'partial value');
```

For convenience, `registerPartials` provides a quick way to load all partials from a specific directory:

```javascript
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials' [, callback]);
```

Partials that are loaded from a directory are named based on their filename, where spaces and hyphens are replaced with an underscore character:

```
template.html      -> {{> template}}
template 2.html    -> {{> template_2}}
login view.hbs     -> {{> login_view}}
template-file.html -> {{> template_file}}
```

See the [handlebars.js](http://github.com/wycats/handlebars.js) README and docs for more information.

**Note:** This method is async; meaning that the directory is walked in a non-blocking manner to app startup.

## Exposing locals as template data ##

hbs has the ability to expose the application and request locals within any context inside a view. To enable this functionality, simply call the `localsAsTemplateData` method and pass in your Express application instance.

```javascript
var hbs = require('hbs');
var express = require('express');

var app = express();
hbs.localsAsTemplateData(app);

app.locals.foo = "bar";
```

The local data can then be accessed using the `@property` syntax:

```
top level: {{@foo}}
{{#each items}}
  {{label}}: {{@foo}}
{{/each}}
```
Note: In partials and templates, local data can be accessed without using `@` prefix.

## handlebars ##

The handlebars require used by hbs can be accessed via the `handlebars` property on the `hbs` module.

If you wish to use handlebars methods like `SafeString` please do so on this property. Do not register helpers or partials in this way.

```
// hbs.handlebars is the handlebars module
hbs.handlebars === require('handlebars');
```

## Recipes ##

### more than one instance ###
You can create isolated instances of hbs using the `create()` function on the module object.

```
var hbs = require('hbs');

var instance1 = hbs.create();
var instance2 = hbs.create();

app.engine('html', instance1.__express);
app.engine('hbs', instance2.__express);
```

Each instance has the same methods/properties as the `hbs` module object. The module object is actually just an instance created for you automatically.

### extra scripts or styles ##
Sometimes it is useful to have custom scripts or stylesheets on your pages. Handlebars does not provide a way to import or extend a template, but through the use of helpers you can create a similar result.

We can take advantage of the fact that our body template is processed before the layout template. Knowing this, we can create two helpers `block` and `extend` which can be used to 'inject' custom stylesheets or scripts into the layout template. The `block` helper will act as a placeholder for values specified in earlier `extend` helpers.

See examples/extend for a working example. Note how the index.hbs file defines extra stylesheets and scripts to be injected into the layout. They are put into the head section and at the end of the body respectively. If this was not done, the stylesheet would be in the body and the script would print `foo bar` too soon.

## Helpful Modules ##

- **[hbs-utils](https://github.com/dpolivy/hbs-utils)**: A small utility library that provides helpers for registering and compiling partials, including automatic updates when partials are changed.
