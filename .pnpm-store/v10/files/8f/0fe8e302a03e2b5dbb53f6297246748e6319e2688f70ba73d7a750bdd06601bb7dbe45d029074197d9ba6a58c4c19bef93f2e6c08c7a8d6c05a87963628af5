# `eslint-plugin-react` <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

===================

[![github actions][actions-image]][actions-url]
[![Maintenance Status][status-image]][status-url]
[![NPM version][npm-image]][npm-url]
[![Tidelift][tidelift-image]][tidelift-url]

React specific linting rules for `eslint`

## Installation

```sh
npm install eslint eslint-plugin-react --save-dev
```

It is also possible to install ESLint globally rather than locally (using `npm install -g eslint`). However, this is not recommended, and any plugins or shareable configs that you use must be installed locally in either case.

## Configuration (legacy: `.eslintrc*`) <a id="configuration"></a>

Use [our preset](#recommended) to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
```

If you are using the [new JSX transform from React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports), extend [`react/jsx-runtime`](https://github.com/jsx-eslint/eslint-plugin-react/blob/c8917b0885094b5e4cc2a6f613f7fb6f16fe932e/index.js#L163-L176) in your eslint config (add `"plugin:react/jsx-runtime"` to `"extends"`) to disable the relevant rules.

You should also specify settings that will be shared across all the plugin rules. ([More about eslint shared settings](https://eslint.org/docs/latest/use/configure/configuration-files#configuring-shared-settings))

```json5
{
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
      "defaultVersion": "", // Default React version to use when the version you have installed cannot be detected.
                            // If not provided, defaults to the latest React version.
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"},
        // for rules that check exact prop wrappers
        {"property": "forbidExtraProps", "exact": true}
    ],
    "componentWrapperFunctions": [
        // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
        "observer", // `property`
        {"property": "styled"}, // `object` is optional
        {"property": "observer", "object": "Mobx"},
        {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    "formComponents": [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      "CustomForm",
      {"name": "SimpleForm", "formAttribute": "endpoint"},
      {"name": "Form", "formAttribute": ["registerEndpoint", "loginEndpoint"]}, // allows specifying multiple properties if necessary
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "MyLink", "linkAttribute": "to"},
      {"name": "Link", "linkAttribute": ["to", "href"]}, // allows specifying multiple properties if necessary
    ]
  }
}
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "react" to the plugins section.

```json
{
  "plugins": [
    "react"
  ]
}
```

Enable JSX support.

With `eslint` 2+

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
```

### Shareable configs

#### Recommended

This plugin exports a `recommended` configuration that enforces React good practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"]
}
```

See [`eslint` documentation](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for more information about extending configuration files.

#### All

This plugin also exports an `all` configuration that includes every available rule.
This pairs well with the `eslint:all` rule.

```json
{
  "plugins": [
    "react"
  ],
  "extends": ["eslint:all", "plugin:react/all"]
}
```

**Note**: These configurations will import `eslint-plugin-react` and enable JSX in [parser options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options).

## Configuration (new: `eslint.config.js`)

From [`v8.21.0`](https://github.com/eslint/eslint/releases/tag/v8.21.0), eslint announced a new config system.
In the new system, `.eslintrc*` is no longer used. `eslint.config.js` would be the default config file name.
In eslint `v8`, the legacy system (`.eslintrc*`) would still be supported, while in eslint `v9`, only the new system would be supported.

And from [`v8.23.0`](https://github.com/eslint/eslint/releases/tag/v8.23.0), eslint CLI starts to look up `eslint.config.js`.
**So, if your eslint is `>=8.23.0`, you're 100% ready to use the new config system.**

You might want to check out the official blog posts,

- <https://eslint.org/blog/2022/08/new-config-system-part-1/>
- <https://eslint.org/blog/2022/08/new-config-system-part-2/>
- <https://eslint.org/blog/2022/08/new-config-system-part-3/>

and the [official docs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).

### Plugin

The default export of `eslint-plugin-react` is a plugin object.

```js
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  …
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
    // ... others are omitted for brevity
  },
  …
];
```

### Configuring shared settings

Refer to the [official docs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-shared-settings).

The schema of the `settings.react` object would be identical to that of what's already described above in the legacy config section.

<!-- markdownlint-disable-next-line no-duplicate-heading -->
### Flat Configs

This plugin exports 3 flat configs:

- `flat.all`
- `flat.recommended`
- `flat['jsx-runtime']`

The flat configs are available via the root plugin import. They will configure the plugin under the `react/` namespace and enable JSX in [`languageOptions.parserOptions`](https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options).

```js
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  …
  reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  reactPlugin.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  …
];
```

You can of course add/override some properties.

**Note**: Our shareable configs does not preconfigure `files` or [`languageOptions.globals`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuration-objects).
For most of the cases, you probably want to configure some properties by yourself.

```js
const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  …
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  …
];
```

The above example is same as the example below, as the new config system is based on chaining.

```js
const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  …
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  …
];
```

## List of supported rules

<!-- begin auto-generated rules list -->

💼 [Configurations](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs) enabled in.\
🚫 [Configurations](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs) disabled in.\
🏃 Set in the `jsx-runtime` [configuration](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs).\
☑️ Set in the `recommended` [configuration](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs).\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).\
💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).\
❌ Deprecated.

| Name                                                                                         | Description                                                                                                                                  | 💼 | 🚫 | 🔧 | 💡 | ❌  |
| :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :- | :- | :- | :- | :- |
| [boolean-prop-naming](docs/rules/boolean-prop-naming.md)                                     | Enforces consistent naming for boolean props                                                                                                 |    |    |    |    |    |
| [button-has-type](docs/rules/button-has-type.md)                                             | Disallow usage of `button` elements without an explicit `type` attribute                                                                     |    |    |    |    |    |
| [checked-requires-onchange-or-readonly](docs/rules/checked-requires-onchange-or-readonly.md) | Enforce using `onChange` or `readonly` attribute when `checked` is used                                                                      |    |    |    |    |    |
| [default-props-match-prop-types](docs/rules/default-props-match-prop-types.md)               | Enforce all defaultProps have a corresponding non-required PropType                                                                          |    |    |    |    |    |
| [destructuring-assignment](docs/rules/destructuring-assignment.md)                           | Enforce consistent usage of destructuring assignment of props, state, and context                                                            |    |    | 🔧 |    |    |
| [display-name](docs/rules/display-name.md)                                                   | Disallow missing displayName in a React component definition                                                                                 | ☑️ |    |    |    |    |
| [forbid-component-props](docs/rules/forbid-component-props.md)                               | Disallow certain props on components                                                                                                         |    |    |    |    |    |
| [forbid-dom-props](docs/rules/forbid-dom-props.md)                                           | Disallow certain props on DOM Nodes                                                                                                          |    |    |    |    |    |
| [forbid-elements](docs/rules/forbid-elements.md)                                             | Disallow certain elements                                                                                                                    |    |    |    |    |    |
| [forbid-foreign-prop-types](docs/rules/forbid-foreign-prop-types.md)                         | Disallow using another component's propTypes                                                                                                 |    |    |    |    |    |
| [forbid-prop-types](docs/rules/forbid-prop-types.md)                                         | Disallow certain propTypes                                                                                                                   |    |    |    |    |    |
| [forward-ref-uses-ref](docs/rules/forward-ref-uses-ref.md)                                   | Require all forwardRef components include a ref parameter                                                                                    |    |    |    | 💡 |    |
| [function-component-definition](docs/rules/function-component-definition.md)                 | Enforce a specific function type for function components                                                                                     |    |    | 🔧 |    |    |
| [hook-use-state](docs/rules/hook-use-state.md)                                               | Ensure destructuring and symmetric naming of useState hook value and setter variables                                                        |    |    |    | 💡 |    |
| [iframe-missing-sandbox](docs/rules/iframe-missing-sandbox.md)                               | Enforce sandbox attribute on iframe elements                                                                                                 |    |    |    |    |    |
| [jsx-boolean-value](docs/rules/jsx-boolean-value.md)                                         | Enforce boolean attributes notation in JSX                                                                                                   |    |    | 🔧 |    |    |
| [jsx-child-element-spacing](docs/rules/jsx-child-element-spacing.md)                         | Enforce or disallow spaces inside of curly braces in JSX attributes and expressions                                                          |    |    |    |    |    |
| [jsx-closing-bracket-location](docs/rules/jsx-closing-bracket-location.md)                   | Enforce closing bracket location in JSX                                                                                                      |    |    | 🔧 |    |    |
| [jsx-closing-tag-location](docs/rules/jsx-closing-tag-location.md)                           | Enforce closing tag location for multiline JSX                                                                                               |    |    | 🔧 |    |    |
| [jsx-curly-brace-presence](docs/rules/jsx-curly-brace-presence.md)                           | Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes |    |    | 🔧 |    |    |
| [jsx-curly-newline](docs/rules/jsx-curly-newline.md)                                         | Enforce consistent linebreaks in curly braces in JSX attributes and expressions                                                              |    |    | 🔧 |    |    |
| [jsx-curly-spacing](docs/rules/jsx-curly-spacing.md)                                         | Enforce or disallow spaces inside of curly braces in JSX attributes and expressions                                                          |    |    | 🔧 |    |    |
| [jsx-equals-spacing](docs/rules/jsx-equals-spacing.md)                                       | Enforce or disallow spaces around equal signs in JSX attributes                                                                              |    |    | 🔧 |    |    |
| [jsx-filename-extension](docs/rules/jsx-filename-extension.md)                               | Disallow file extensions that may contain JSX                                                                                                |    |    |    |    |    |
| [jsx-first-prop-new-line](docs/rules/jsx-first-prop-new-line.md)                             | Enforce proper position of the first property in JSX                                                                                         |    |    | 🔧 |    |    |
| [jsx-fragments](docs/rules/jsx-fragments.md)                                                 | Enforce shorthand or standard form for React fragments                                                                                       |    |    | 🔧 |    |    |
| [jsx-handler-names](docs/rules/jsx-handler-names.md)                                         | Enforce event handler naming conventions in JSX                                                                                              |    |    |    |    |    |
| [jsx-indent](docs/rules/jsx-indent.md)                                                       | Enforce JSX indentation                                                                                                                      |    |    | 🔧 |    |    |
| [jsx-indent-props](docs/rules/jsx-indent-props.md)                                           | Enforce props indentation in JSX                                                                                                             |    |    | 🔧 |    |    |
| [jsx-key](docs/rules/jsx-key.md)                                                             | Disallow missing `key` props in iterators/collection literals                                                                                | ☑️ |    |    |    |    |
| [jsx-max-depth](docs/rules/jsx-max-depth.md)                                                 | Enforce JSX maximum depth                                                                                                                    |    |    |    |    |    |
| [jsx-max-props-per-line](docs/rules/jsx-max-props-per-line.md)                               | Enforce maximum of props on a single line in JSX                                                                                             |    |    | 🔧 |    |    |
| [jsx-newline](docs/rules/jsx-newline.md)                                                     | Require or prevent a new line after jsx elements and expressions.                                                                            |    |    | 🔧 |    |    |
| [jsx-no-bind](docs/rules/jsx-no-bind.md)                                                     | Disallow `.bind()` or arrow functions in JSX props                                                                                           |    |    |    |    |    |
| [jsx-no-comment-textnodes](docs/rules/jsx-no-comment-textnodes.md)                           | Disallow comments from being inserted as text nodes                                                                                          | ☑️ |    |    |    |    |
| [jsx-no-constructed-context-values](docs/rules/jsx-no-constructed-context-values.md)         | Disallows JSX context provider values from taking values that will cause needless rerenders                                                  |    |    |    |    |    |
| [jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md)                               | Disallow duplicate properties in JSX                                                                                                         | ☑️ |    |    |    |    |
| [jsx-no-leaked-render](docs/rules/jsx-no-leaked-render.md)                                   | Disallow problematic leaked values from being rendered                                                                                       |    |    | 🔧 |    |    |
| [jsx-no-literals](docs/rules/jsx-no-literals.md)                                             | Disallow usage of string literals in JSX                                                                                                     |    |    |    |    |    |
| [jsx-no-script-url](docs/rules/jsx-no-script-url.md)                                         | Disallow usage of `javascript:` URLs                                                                                                         |    |    |    |    |    |
| [jsx-no-target-blank](docs/rules/jsx-no-target-blank.md)                                     | Disallow `target="_blank"` attribute without `rel="noreferrer"`                                                                              | ☑️ |    | 🔧 |    |    |
| [jsx-no-undef](docs/rules/jsx-no-undef.md)                                                   | Disallow undeclared variables in JSX                                                                                                         | ☑️ |    |    |    |    |
| [jsx-no-useless-fragment](docs/rules/jsx-no-useless-fragment.md)                             | Disallow unnecessary fragments                                                                                                               |    |    | 🔧 |    |    |
| [jsx-one-expression-per-line](docs/rules/jsx-one-expression-per-line.md)                     | Require one JSX element per line                                                                                                             |    |    | 🔧 |    |    |
| [jsx-pascal-case](docs/rules/jsx-pascal-case.md)                                             | Enforce PascalCase for user-defined JSX components                                                                                           |    |    |    |    |    |
| [jsx-props-no-multi-spaces](docs/rules/jsx-props-no-multi-spaces.md)                         | Disallow multiple spaces between inline JSX props                                                                                            |    |    | 🔧 |    |    |
| [jsx-props-no-spread-multi](docs/rules/jsx-props-no-spread-multi.md)                         | Disallow JSX prop spreading the same identifier multiple times                                                                               |    |    |    |    |    |
| [jsx-props-no-spreading](docs/rules/jsx-props-no-spreading.md)                               | Disallow JSX prop spreading                                                                                                                  |    |    |    |    |    |
| [jsx-sort-default-props](docs/rules/jsx-sort-default-props.md)                               | Enforce defaultProps declarations alphabetical sorting                                                                                       |    |    |    |    | ❌  |
| [jsx-sort-props](docs/rules/jsx-sort-props.md)                                               | Enforce props alphabetical sorting                                                                                                           |    |    | 🔧 |    |    |
| [jsx-space-before-closing](docs/rules/jsx-space-before-closing.md)                           | Enforce spacing before closing bracket in JSX                                                                                                |    |    | 🔧 |    | ❌  |
| [jsx-tag-spacing](docs/rules/jsx-tag-spacing.md)                                             | Enforce whitespace in and around the JSX opening and closing brackets                                                                        |    |    | 🔧 |    |    |
| [jsx-uses-react](docs/rules/jsx-uses-react.md)                                               | Disallow React to be incorrectly marked as unused                                                                                            | ☑️ | 🏃 |    |    |    |
| [jsx-uses-vars](docs/rules/jsx-uses-vars.md)                                                 | Disallow variables used in JSX to be incorrectly marked as unused                                                                            | ☑️ |    |    |    |    |
| [jsx-wrap-multilines](docs/rules/jsx-wrap-multilines.md)                                     | Disallow missing parentheses around multiline JSX                                                                                            |    |    | 🔧 |    |    |
| [no-access-state-in-setstate](docs/rules/no-access-state-in-setstate.md)                     | Disallow when this.state is accessed within setState                                                                                         |    |    |    |    |    |
| [no-adjacent-inline-elements](docs/rules/no-adjacent-inline-elements.md)                     | Disallow adjacent inline elements not separated by whitespace.                                                                               |    |    |    |    |    |
| [no-array-index-key](docs/rules/no-array-index-key.md)                                       | Disallow usage of Array index in keys                                                                                                        |    |    |    |    |    |
| [no-arrow-function-lifecycle](docs/rules/no-arrow-function-lifecycle.md)                     | Lifecycle methods should be methods on the prototype, not class fields                                                                       |    |    | 🔧 |    |    |
| [no-children-prop](docs/rules/no-children-prop.md)                                           | Disallow passing of children as props                                                                                                        | ☑️ |    |    |    |    |
| [no-danger](docs/rules/no-danger.md)                                                         | Disallow usage of dangerous JSX properties                                                                                                   |    |    |    |    |    |
| [no-danger-with-children](docs/rules/no-danger-with-children.md)                             | Disallow when a DOM element is using both children and dangerouslySetInnerHTML                                                               | ☑️ |    |    |    |    |
| [no-deprecated](docs/rules/no-deprecated.md)                                                 | Disallow usage of deprecated methods                                                                                                         | ☑️ |    |    |    |    |
| [no-did-mount-set-state](docs/rules/no-did-mount-set-state.md)                               | Disallow usage of setState in componentDidMount                                                                                              |    |    |    |    |    |
| [no-did-update-set-state](docs/rules/no-did-update-set-state.md)                             | Disallow usage of setState in componentDidUpdate                                                                                             |    |    |    |    |    |
| [no-direct-mutation-state](docs/rules/no-direct-mutation-state.md)                           | Disallow direct mutation of this.state                                                                                                       | ☑️ |    |    |    |    |
| [no-find-dom-node](docs/rules/no-find-dom-node.md)                                           | Disallow usage of findDOMNode                                                                                                                | ☑️ |    |    |    |    |
| [no-invalid-html-attribute](docs/rules/no-invalid-html-attribute.md)                         | Disallow usage of invalid attributes                                                                                                         |    |    |    | 💡 |    |
| [no-is-mounted](docs/rules/no-is-mounted.md)                                                 | Disallow usage of isMounted                                                                                                                  | ☑️ |    |    |    |    |
| [no-multi-comp](docs/rules/no-multi-comp.md)                                                 | Disallow multiple component definition per file                                                                                              |    |    |    |    |    |
| [no-namespace](docs/rules/no-namespace.md)                                                   | Enforce that namespaces are not used in React elements                                                                                       |    |    |    |    |    |
| [no-object-type-as-default-prop](docs/rules/no-object-type-as-default-prop.md)               | Disallow usage of referential-type variables as default param in functional component                                                        |    |    |    |    |    |
| [no-redundant-should-component-update](docs/rules/no-redundant-should-component-update.md)   | Disallow usage of shouldComponentUpdate when extending React.PureComponent                                                                   |    |    |    |    |    |
| [no-render-return-value](docs/rules/no-render-return-value.md)                               | Disallow usage of the return value of ReactDOM.render                                                                                        | ☑️ |    |    |    |    |
| [no-set-state](docs/rules/no-set-state.md)                                                   | Disallow usage of setState                                                                                                                   |    |    |    |    |    |
| [no-string-refs](docs/rules/no-string-refs.md)                                               | Disallow using string references                                                                                                             | ☑️ |    |    |    |    |
| [no-this-in-sfc](docs/rules/no-this-in-sfc.md)                                               | Disallow `this` from being used in stateless functional components                                                                           |    |    |    |    |    |
| [no-typos](docs/rules/no-typos.md)                                                           | Disallow common typos                                                                                                                        |    |    |    |    |    |
| [no-unescaped-entities](docs/rules/no-unescaped-entities.md)                                 | Disallow unescaped HTML entities from appearing in markup                                                                                    | ☑️ |    |    | 💡 |    |
| [no-unknown-property](docs/rules/no-unknown-property.md)                                     | Disallow usage of unknown DOM property                                                                                                       | ☑️ |    | 🔧 |    |    |
| [no-unsafe](docs/rules/no-unsafe.md)                                                         | Disallow usage of unsafe lifecycle methods                                                                                                   |    | ☑️ |    |    |    |
| [no-unstable-nested-components](docs/rules/no-unstable-nested-components.md)                 | Disallow creating unstable components inside components                                                                                      |    |    |    |    |    |
| [no-unused-class-component-methods](docs/rules/no-unused-class-component-methods.md)         | Disallow declaring unused methods of component class                                                                                         |    |    |    |    |    |
| [no-unused-prop-types](docs/rules/no-unused-prop-types.md)                                   | Disallow definitions of unused propTypes                                                                                                     |    |    |    |    |    |
| [no-unused-state](docs/rules/no-unused-state.md)                                             | Disallow definitions of unused state                                                                                                         |    |    |    |    |    |
| [no-will-update-set-state](docs/rules/no-will-update-set-state.md)                           | Disallow usage of setState in componentWillUpdate                                                                                            |    |    |    |    |    |
| [prefer-es6-class](docs/rules/prefer-es6-class.md)                                           | Enforce ES5 or ES6 class for React Components                                                                                                |    |    |    |    |    |
| [prefer-exact-props](docs/rules/prefer-exact-props.md)                                       | Prefer exact proptype definitions                                                                                                            |    |    |    |    |    |
| [prefer-read-only-props](docs/rules/prefer-read-only-props.md)                               | Enforce that props are read-only                                                                                                             |    |    | 🔧 |    |    |
| [prefer-stateless-function](docs/rules/prefer-stateless-function.md)                         | Enforce stateless components to be written as a pure function                                                                                |    |    |    |    |    |
| [prop-types](docs/rules/prop-types.md)                                                       | Disallow missing props validation in a React component definition                                                                            | ☑️ |    |    |    |    |
| [react-in-jsx-scope](docs/rules/react-in-jsx-scope.md)                                       | Disallow missing React when using JSX                                                                                                        | ☑️ | 🏃 |    |    |    |
| [require-default-props](docs/rules/require-default-props.md)                                 | Enforce a defaultProps definition for every prop that is not a required prop                                                                 |    |    |    |    |    |
| [require-optimization](docs/rules/require-optimization.md)                                   | Enforce React components to have a shouldComponentUpdate method                                                                              |    |    |    |    |    |
| [require-render-return](docs/rules/require-render-return.md)                                 | Enforce ES5 or ES6 class for returning value in render function                                                                              | ☑️ |    |    |    |    |
| [self-closing-comp](docs/rules/self-closing-comp.md)                                         | Disallow extra closing tags for components without children                                                                                  |    |    | 🔧 |    |    |
| [sort-comp](docs/rules/sort-comp.md)                                                         | Enforce component methods order                                                                                                              |    |    |    |    |    |
| [sort-default-props](docs/rules/sort-default-props.md)                                       | Enforce defaultProps declarations alphabetical sorting                                                                                       |    |    |    |    |    |
| [sort-prop-types](docs/rules/sort-prop-types.md)                                             | Enforce propTypes declarations alphabetical sorting                                                                                          |    |    | 🔧 |    |    |
| [state-in-constructor](docs/rules/state-in-constructor.md)                                   | Enforce class component state initialization style                                                                                           |    |    |    |    |    |
| [static-property-placement](docs/rules/static-property-placement.md)                         | Enforces where React component static properties should be positioned.                                                                       |    |    |    |    |    |
| [style-prop-object](docs/rules/style-prop-object.md)                                         | Enforce style prop value is an object                                                                                                        |    |    |    |    |    |
| [void-dom-elements-no-children](docs/rules/void-dom-elements-no-children.md)                 | Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children                                                                |    |    |    |    |    |

<!-- end auto-generated rules list -->

## Other useful plugins

- Rules of Hooks: [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- JSX accessibility: [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- React Native: [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)

## License

`eslint-plugin-react` is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-react
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-react.svg

[status-url]: https://github.com/jsx-eslint/eslint-plugin-react/pulse
[status-image]: https://img.shields.io/github/last-commit/jsx-eslint/eslint-plugin-react.svg

[tidelift-url]: https://tidelift.com/subscription/pkg/npm-eslint-plugin-react?utm_source=npm-eslint-plugin-react&utm_medium=referral&utm_campaign=readme
[tidelift-image]: https://tidelift.com/badges/package/npm/eslint-plugin-react?style=flat

[package-url]: https://npmjs.org/package/eslint-plugin-react
[npm-version-svg]: https://versionbadg.es/jsx-eslint/eslint-plugin-react.svg

[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/jsx-eslint/eslint-plugin-react
[actions-url]: https://github.com/jsx-eslint/eslint-plugin-react/actions
