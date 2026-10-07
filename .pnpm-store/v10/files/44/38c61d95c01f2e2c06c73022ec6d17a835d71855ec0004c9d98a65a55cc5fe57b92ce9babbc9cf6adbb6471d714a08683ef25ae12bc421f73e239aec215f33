[![Financial Contributors on Open Collective](https://opencollective.com/webpack-merge/all/badge.svg?label=financial+contributors)](https://opencollective.com/webpack-merge) [![build status](https://secure.travis-ci.org/survivejs/webpack-merge.svg)](http://travis-ci.org/survivejs/webpack-merge) [![codecov](https://codecov.io/gh/survivejs/webpack-merge/branch/master/graph/badge.svg)](https://codecov.io/gh/survivejs/webpack-merge)

# webpack-merge - Merge designed for Webpack

**webpack-merge** provides a `merge` function that concatenates arrays and merges objects creating a new object. If functions are encountered, it will execute them, run the results through the algorithm, and then wrap the returned values within a function again.

This behavior is particularly useful in configuring webpack although it has uses beyond it. Whenever you need to merge configuration objects, **webpack-merge** can come in handy.

## **`merge(...configuration | [...configuration])`**

`merge` is the core, and the most important idea, of the API. Often this is all you need unless you want further customization.

```javascript
const { merge } = require('webpack-merge');

// Default API
const output = merge(object1, object2, object3, ...);

// You can pass an array of objects directly.
// This works with all available functions.
const output = merge([object1, object2, object3]);

// Keys matching to the right take precedence:
const output = merge(
  { fruit: "apple", color: "red" },
  { fruit: "strawberries" }
);
console.log(output);
// { color: "red", fruit: "strawberries"}
```

### Limitations

Note that `Promise`s are not supported! If you want to return a configuration wrapped within a `Promise`, `merge` inside one. Example: `Promise.resolve(merge({ ... }, { ... }))`.

The same goes for configuration level functions as in the example below:

**webpack.config.js**

```javascript
const commonConfig = { ... };

const productionConfig = { ... };

const developmentConfig = { ... };

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}
```

You can choose the configuration you want by using `webpack --mode development` assuming you are using _webpack-cli_.

## **`mergeWithCustomize({ customizeArray, customizeObject })(...configuration | [...configuration])`**

In case you need more flexibility, `merge` behavior can be customized per field as below:

```javascript
const { mergeWithCustomize } = require('webpack-merge');

const output = mergeWithCustomize(
  {
    customizeArray(a, b, key) {
      if (key === 'extensions') {
        return _.uniq([...a, ...b]);
      }

      // Fall back to default merging
      return undefined;
    },
    customizeObject(a, b, key) {
      if (key === 'module') {
        // Custom merging
        return _.merge({}, a, b);
      }

      // Fall back to default merging
      return undefined;
    }
  }
)(object1, object2, object3, ...);
```

For example, if the previous code was invoked with only `object1` and `object2`
with `object1` as:

```javascript
{
    foo1: ['object1'],
    foo2: ['object1'],
    bar1: { object1: {} },
    bar2: { object1: {} },
}
```

and `object2` as:

```javascript
{
    foo1: ['object2'],
    foo2: ['object2'],
    bar1: { object2: {} },
    bar2: { object2: {} },
}
```

then `customizeArray` will be invoked for each property of `Array` type, i.e:

```javascript
customizeArray(["object1"], ["object2"], "foo1");
customizeArray(["object1"], ["object2"], "foo2");
```

and `customizeObject` will be invoked for each property of `Object` type, i.e:

```javascript
customizeObject({ object1: {} }, { object2: {} }, bar1);
customizeObject({ object1: {} }, { object2: {} }, bar2);
```

## **`customizeArray`** and **`customizeObject`**

`customizeArray` and `customizeObject` provide small strategies to for `mergeWithCustomize`. They support `append`, `prepend`, `replace`, and wildcards for field names.

```javascript
const { mergeWithCustomize, customizeArray, customizeObject } = require('webpack-merge');

const output = mergeWithCustomize({
  customizeArray: customizeArray({
    'entry.*': 'prepend'
  }),
  customizeObject: customizeObject({
    entry: 'prepend'
  })
})(object1, object2, object3, ...);
```

## **`unique(<field>, <fields>, field => field)`**

`unique` is a strategy used for forcing uniqueness within configuration. It's most useful with plugins when you want to make sure there's only one in place.

The first `<field>` is the config property to look through for duplicates.

`<fields>` represents the values that should be unique when you run the field => field function on each duplicate.

When the order of elements of the `<field>` in the first configuration differs from the order in the second configuration, the latter is preserved.

```javascript
const { mergeWithCustomize, unique } = require("webpack-merge");

const output = mergeWithCustomize({
  customizeArray: unique(
    "plugins",
    ["HotModuleReplacementPlugin"],
    (plugin) => plugin.constructor && plugin.constructor.name
  ),
})(
  {
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  {
    plugins: [new webpack.HotModuleReplacementPlugin()],
  }
);

// Output contains only single HotModuleReplacementPlugin now and it's
// going to be the last plugin instance.
```

## **`mergeWithRules`**

To support advanced merging needs (i.e. merging within loaders), `mergeWithRules` includes additional syntax that allows you to match fields and apply strategies to match. Consider the full example below:

```javascript
const a = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "sass-loader" }],
      },
    ],
  },
};
const b = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
const result = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};

assert.deepStrictEqual(
  mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace",
        },
      },
    },
  })(a, b),
  result
);
```

The way it works is that you should annotate fields to match using `match` (or `CustomizeRule.Match` if you are using TypeScript) matching your configuration structure and then use specific strategies to define how particular fields should be transformed. If a match doesn't exist above a rule, then it will apply the rule automatically.

**Supported annotations:**

- `match` (`CustomizeRule.Match`) - Optional matcher that scopes merging behavior to a specific part based on similarity (think DOM or jQuery selectors)
- `append` (`CustomizeRule.Append`) - Appends items
- `prepend` (`CustomizeRule.Prepend`) - Prepends items
- `replace` (`CustomizeRule.Replace`) - Replaces items
- `merge` (`CustomizeRule.Merge`) - Merges objects (shallow merge)

## Using with TypeScript

**webpack-merge** supports TypeScript out of the box. You should pass `Configuration` type from webpack to it as follows:

```typescript
import { Configuration } from "webpack";
import { merge } from "webpack-merge";

const config = merge<Configuration>({...}, {...});

...
```

## Development

1. `nvm use`
1. `npm i`
1. `npm run build -- --watch` in one terminal
1. `npm t -- --watch` in another one

Before contributing, please [open an issue](https://github.com/survivejs/webpack-merge/issues/new) where to discuss.

## Further Information and Support

Check out [SurviveJS - Webpack 5](http://survivejs.com/) to dig deeper into webpack. The free book uses **webpack-merge** extensively and shows you how to compose your configuration to keep it maintainable.

I am also available as a consultant in case you require specific assistance. I can contribute particularly in terms of improving maintainability of the setup while speeding it up and pointing out better practices. In addition to improving developer productivity, the work has impact on the end users of the product in terms of reduced application size and loading times.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/survivejs/webpack-merge/graphs/contributors"><img src="https://opencollective.com/webpack-merge/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/webpack-merge/contribute)]

#### Individuals

<a href="https://opencollective.com/webpack-merge"><img src="https://opencollective.com/webpack-merge/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/webpack-merge/contribute)]

<a href="https://opencollective.com/webpack-merge/organization/0/website"><img src="https://opencollective.com/webpack-merge/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/1/website"><img src="https://opencollective.com/webpack-merge/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/2/website"><img src="https://opencollective.com/webpack-merge/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/3/website"><img src="https://opencollective.com/webpack-merge/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/4/website"><img src="https://opencollective.com/webpack-merge/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/5/website"><img src="https://opencollective.com/webpack-merge/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/6/website"><img src="https://opencollective.com/webpack-merge/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/7/website"><img src="https://opencollective.com/webpack-merge/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/8/website"><img src="https://opencollective.com/webpack-merge/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/webpack-merge/organization/9/website"><img src="https://opencollective.com/webpack-merge/organization/9/avatar.svg"></a>

## License

**webpack-merge** is available under MIT. See LICENSE for more details.
