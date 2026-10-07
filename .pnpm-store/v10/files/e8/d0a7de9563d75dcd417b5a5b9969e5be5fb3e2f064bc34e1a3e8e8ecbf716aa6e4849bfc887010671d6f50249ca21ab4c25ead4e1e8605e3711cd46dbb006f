<p align="center">
  <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/actions">
    <img src="https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/jsx-eslint/eslint-plugin-jsx-a11y"
         alt="CI status" />
  </a>
  <a href="https://npmjs.org/package/eslint-plugin-jsx-a11y">
    <img src="https://img.shields.io/npm/v/eslint-plugin-jsx-a11y.svg"
         alt="npm version">
  </a>
  <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/LICENSE.md">
    <img src="https://img.shields.io/npm/l/eslint-plugin-jsx-a11y.svg"
         alt="license">
  </a>
  <a href='https://coveralls.io/github/jsx-eslint/eslint-plugin-jsx-a11y?branch=master'>
    <img src='https://coveralls.io/repos/github/jsx-eslint/eslint-plugin-jsx-a11y/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href='https://npmjs.org/package/eslint-plugin-jsx-a11y'>
    <img src='https://img.shields.io/npm/dt/eslint-plugin-jsx-a11y.svg'
    alt='Total npm downloads' />
  </a>
</p>

<a href='https://tidelift.com/subscription/pkg/npm-eslint-plugin-jsx-a11y?utm_source=npm-eslint-plugin-jsx-a11y&utm_medium=referral&utm_campaign=readme'>Get professional support for eslint-plugin-jsx-a11y on Tidelift</a>

# eslint-plugin-jsx-a11y

Static AST checker for accessibility rules on JSX elements.

#### _Read this in [other languages](https://github.com/ari-os310/eslint-plugin-jsx-a11y/blob/HEAD/translations/Translations.md)._

[Mexican Spanish🇲🇽](https://github.com/ari-os310/eslint-plugin-jsx-a11y/blob/HEAD/translations/README.mx.md)

## Why?

This plugin does a static evaluation of the JSX to spot accessibility issues in React apps. Because it only catches errors in static code, use it in combination with [@axe-core/react](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react) to test the accessibility of the rendered DOM. Consider these tools just as one step of a larger a11y testing process and always test your apps with assistive technology.

## Installation

**If you are installing this plugin via `eslint-config-airbnb`, please follow [these instructions](https://github.com/airbnb/javascript/tree/HEAD/packages/eslint-config-airbnb#eslint-config-airbnb-1).**

You'll first need to install [ESLint](https://eslint.org/docs/latest/user-guide/getting-started):

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Next, install `eslint-plugin-jsx-a11y`:

```sh
# npm
npm install eslint-plugin-jsx-a11y --save-dev

# yarn
yarn add eslint-plugin-jsx-a11y --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag in npm, or the `global` prefix in yarn) then you must also install `eslint-plugin-jsx-a11y` globally.

<a id="usage"></a>
## Usage - Legacy Config (`.eslintrc`)

Add `jsx-a11y` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jsx-a11y"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jsx-a11y/rule-name": 2
  }
}
```

You can also enable all the recommended or strict rules at once.
Add `plugin:jsx-a11y/recommended` or `plugin:jsx-a11y/strict` in `extends`:

```json
{
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

### Configurations

> As you are extending our configuration, you can omit `"plugins": ["jsx-a11y"]` from your `.eslintrc` configuration file.

```json
{
  "settings": {
    "jsx-a11y": {
      "polymorphicPropName": "as",
      "components": {
        "CityInput": "input",
        "CustomButton": "button",
        "MyButton": "button",
        "RoundButton": "button"
      },
      "attributes": {
        "for": ["htmlFor", "for"]
      }
    }
  }
}
```

## Usage - Flat Config (`eslint.config.js`)

The default export of `eslint-plugin-jsx-a11y` is a plugin object.

```js
const jsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = [
  …
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      'jsx-a11y/alt-text': 'error',
    },
    // ... others are omitted for brevity
  },
  …
];
```

### Shareable Configs

There are two shareable configs, provided by the plugin.

- `flatConfigs.recommended`
- `flatConfigs.strict`

#### CJS

```js
const jsxA11y = require('eslint-plugin-jsx-a11y');

export default [
  jsxA11y.flatConfigs.recommended,
  {
    // Your additional configs and overrides
  },
];
```

#### ESM

```js
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  jsxA11y.flatConfigs.recommended,
  {
    // Your additional configs and overrides
  },
];
```

**Note**: Our shareable configs do NOT configure `files` or [`languageOptions.globals`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuration-objects).
For most of the cases, you probably want to configure some of these properties yourself.

```js
const jsxA11y = require('eslint-plugin-jsx-a11y');
const globals = require('globals');

module.exports = [
  …
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  …
];
```

#### Component Mapping

To enable your custom components to be checked as DOM elements, you can set global settings in your configuration file by mapping each custom component name to a DOM element type.

#### Attribute Mapping

To configure the JSX property to use for attribute checking, you can set global settings in your configuration file by mapping each DOM attribute to the JSX property you want to check.
For example, you may want to allow the `for` attribute in addition to the `htmlFor` attribute for checking label associations.

#### Polymorphic Components

You can optionally use the `polymorphicPropName` setting to define the prop your code uses to create polymorphic components.
This setting will be used determine the element type in rules that require semantic context.

For example, if you set the `polymorphicPropName` setting to `as` then this element:

`<Box as="h3">Configurations </Box>`

will be evaluated as an `h3`. If no `polymorphicPropName` is set, then the component will be evaluated as `Box`.

To restrict polymorphic linting to specified components, additionally set `polymorphicAllowList` to an array of component names.

⚠️ Polymorphic components can make code harder to maintain; please use this feature with caution.

## Supported Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
🚫 Configurations disabled in.\
☑️ Set in the `recommended` configuration.\
🔒 Set in the `strict` configuration.\
❌ Deprecated.

| Name                                                                                                         | Description                                                                                                                         | 💼    | 🚫    | ❌  |
| :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---- | :---- | :- |
| [accessible-emoji](docs/rules/accessible-emoji.md)                                                           | Enforce emojis are wrapped in `<span>` and provide screen reader access.                                                            |       |       | ❌  |
| [alt-text](docs/rules/alt-text.md)                                                                           | Enforce all elements that require alternative text have meaningful information to relay back to end user.                           | ☑️ 🔒 |       |    |
| [anchor-ambiguous-text](docs/rules/anchor-ambiguous-text.md)                                                 | Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".                                                  |       | ☑️    |    |
| [anchor-has-content](docs/rules/anchor-has-content.md)                                                       | Enforce all anchors to contain accessible content.                                                                                  | ☑️ 🔒 |       |    |
| [anchor-is-valid](docs/rules/anchor-is-valid.md)                                                             | Enforce all anchors are valid, navigable elements.                                                                                  | ☑️ 🔒 |       |    |
| [aria-activedescendant-has-tabindex](docs/rules/aria-activedescendant-has-tabindex.md)                       | Enforce elements with aria-activedescendant are tabbable.                                                                           | ☑️ 🔒 |       |    |
| [aria-props](docs/rules/aria-props.md)                                                                       | Enforce all `aria-*` props are valid.                                                                                               | ☑️ 🔒 |       |    |
| [aria-proptypes](docs/rules/aria-proptypes.md)                                                               | Enforce ARIA state and property values are valid.                                                                                   | ☑️ 🔒 |       |    |
| [aria-role](docs/rules/aria-role.md)                                                                         | Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.                                                     | ☑️ 🔒 |       |    |
| [aria-unsupported-elements](docs/rules/aria-unsupported-elements.md)                                         | Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.                          | ☑️ 🔒 |       |    |
| [autocomplete-valid](docs/rules/autocomplete-valid.md)                                                       | Enforce that autocomplete attributes are used correctly.                                                                            | ☑️ 🔒 |       |    |
| [click-events-have-key-events](docs/rules/click-events-have-key-events.md)                                   | Enforce a clickable non-interactive element has at least one keyboard event listener.                                               | ☑️ 🔒 |       |    |
| [control-has-associated-label](docs/rules/control-has-associated-label.md)                                   | Enforce that a control (an interactive element) has a text label.                                                                   |       | ☑️ 🔒 |    |
| [heading-has-content](docs/rules/heading-has-content.md)                                                     | Enforce heading (`h1`, `h2`, etc) elements contain accessible content.                                                              | ☑️ 🔒 |       |    |
| [html-has-lang](docs/rules/html-has-lang.md)                                                                 | Enforce `<html>` element has `lang` prop.                                                                                           | ☑️ 🔒 |       |    |
| [iframe-has-title](docs/rules/iframe-has-title.md)                                                           | Enforce iframe elements have a title attribute.                                                                                     | ☑️ 🔒 |       |    |
| [img-redundant-alt](docs/rules/img-redundant-alt.md)                                                         | Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".                                                  | ☑️ 🔒 |       |    |
| [interactive-supports-focus](docs/rules/interactive-supports-focus.md)                                       | Enforce that elements with interactive handlers like `onClick` must be focusable.                                                   | ☑️ 🔒 |       |    |
| [label-has-associated-control](docs/rules/label-has-associated-control.md)                                   | Enforce that a `label` tag has a text label and an associated control.                                                              | ☑️ 🔒 |       |    |
| [label-has-for](docs/rules/label-has-for.md)                                                                 | Enforce that `<label>` elements have the `htmlFor` prop.                                                                            |       | ☑️ 🔒 | ❌  |
| [lang](docs/rules/lang.md)                                                                                   | Enforce lang attribute has a valid value.                                                                                           |       |       |    |
| [media-has-caption](docs/rules/media-has-caption.md)                                                         | Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.                                                  | ☑️ 🔒 |       |    |
| [mouse-events-have-key-events](docs/rules/mouse-events-have-key-events.md)                                   | Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.                              | ☑️ 🔒 |       |    |
| [no-access-key](docs/rules/no-access-key.md)                                                                 | Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader. | ☑️ 🔒 |       |    |
| [no-aria-hidden-on-focusable](docs/rules/no-aria-hidden-on-focusable.md)                                     | Disallow `aria-hidden="true"` from being set on focusable elements.                                                                 |       |       |    |
| [no-autofocus](docs/rules/no-autofocus.md)                                                                   | Enforce autoFocus prop is not used.                                                                                                 | ☑️ 🔒 |       |    |
| [no-distracting-elements](docs/rules/no-distracting-elements.md)                                             | Enforce distracting elements are not used.                                                                                          | ☑️ 🔒 |       |    |
| [no-interactive-element-to-noninteractive-role](docs/rules/no-interactive-element-to-noninteractive-role.md) | Interactive elements should not be assigned non-interactive roles.                                                                  | ☑️ 🔒 |       |    |
| [no-noninteractive-element-interactions](docs/rules/no-noninteractive-element-interactions.md)               | Non-interactive elements should not be assigned mouse or keyboard event listeners.                                                  | ☑️ 🔒 |       |    |
| [no-noninteractive-element-to-interactive-role](docs/rules/no-noninteractive-element-to-interactive-role.md) | Non-interactive elements should not be assigned interactive roles.                                                                  | ☑️ 🔒 |       |    |
| [no-noninteractive-tabindex](docs/rules/no-noninteractive-tabindex.md)                                       | `tabIndex` should only be declared on interactive elements.                                                                         | ☑️ 🔒 |       |    |
| [no-onchange](docs/rules/no-onchange.md)                                                                     | Enforce usage of `onBlur` over `onChange` on select menus for accessibility.                                                        |       |       | ❌  |
| [no-redundant-roles](docs/rules/no-redundant-roles.md)                                                       | Enforce explicit role property is not the same as implicit/default role property on element.                                        | ☑️ 🔒 |       |    |
| [no-static-element-interactions](docs/rules/no-static-element-interactions.md)                               | Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.                   | ☑️ 🔒 |       |    |
| [prefer-tag-over-role](docs/rules/prefer-tag-over-role.md)                                                   | Enforces using semantic DOM elements over the ARIA `role` property.                                                                 |       |       |    |
| [role-has-required-aria-props](docs/rules/role-has-required-aria-props.md)                                   | Enforce that elements with ARIA roles must have all required attributes for that role.                                              | ☑️ 🔒 |       |    |
| [role-supports-aria-props](docs/rules/role-supports-aria-props.md)                                           | Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.            | ☑️ 🔒 |       |    |
| [scope](docs/rules/scope.md)                                                                                 | Enforce `scope` prop is only used on `<th>` elements.                                                                               | ☑️ 🔒 |       |    |
| [tabindex-no-positive](docs/rules/tabindex-no-positive.md)                                                   | Enforce `tabIndex` value is not greater than zero.                                                                                  | ☑️ 🔒 |       |    |

<!-- end auto-generated rules list -->

The following rules have extra options when in _recommended_ mode:

### no-interactive-element-to-noninteractive-role

```js
'jsx-a11y/no-interactive-element-to-noninteractive-role': [
  'error',
  {
    tr: ['none', 'presentation'],
  },
]
```

### no-noninteractive-element-interactions

```js
'jsx-a11y/no-noninteractive-element-interactions': [
  'error',
  {
    handlers: [
      'onClick',
      'onMouseDown',
      'onMouseUp',
      'onKeyPress',
      'onKeyDown',
      'onKeyUp',
    ],
  },
]
```

### no-noninteractive-element-to-interactive-role

```js
'jsx-a11y/no-noninteractive-element-to-interactive-role': [
  'error',
  {
    ul: [
      'listbox',
      'menu',
      'menubar',
      'radiogroup',
      'tablist',
      'tree',
      'treegrid',
    ],
    ol: [
      'listbox',
      'menu',
      'menubar',
      'radiogroup',
      'tablist',
      'tree',
      'treegrid',
    ],
    li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
    table: ['grid'],
    td: ['gridcell'],
  },
]
```

### no-noninteractive-tabindex

```js
'jsx-a11y/no-noninteractive-tabindex': [
  'error',
  {
    tags: [],
    roles: ['tabpanel'],
  },
]
```

### no-static-element-interactions

```js
'jsx-a11y/no-noninteractive-element-interactions': [
  'error',
  {
    handlers: [
      'onClick',
      'onMouseDown',
      'onMouseUp',
      'onKeyPress',
      'onKeyDown',
      'onKeyUp',
    ],
  },
]
```

## Creating a new rule

If you are developing new rules for this project, you can use the `create-rule`
script to scaffold the new files.

```sh
./scripts/create-rule.js my-new-rule
```

## Some background on WAI-ARIA, the AX Tree and Browsers

### Accessibility API

An operating system will provide an accessibility API that maps application state and content onto input/output controllers such as a screen reader, braille device, keyboard, etc.

These APIs were developed as computer interfaces shifted from buffers (which are text-based and inherently quite accessible) to graphical user interfaces (GUIs). The first attempts to make GUIs accessible involved raster image parsing to recognize characters, words, etc. This information was stored in a parallel buffer and made accessible to assistive technology (AT) devices.

As GUIs became more complex, the raster parsing approach became untenable. Accessibility APIs were developed to replace them. Check out [NSAccessibility (AXAPI)](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Protocols/NSAccessibility_Protocol/index.html) for an example. See [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/) for more details.

### Browsers

Browsers support an Accessibility API on a per operating system basis. For instance, Firefox implements the MSAA accessibility API on Windows, but does not implement the AXAPI on OSX.

### The Accessibility (AX) Tree & DOM

From the [W3 Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/#intro_treetypes)

> The accessibility tree and the DOM tree are parallel structures. Roughly speaking the accessibility tree is a subset of the DOM tree. It includes the user interface objects of the user agent and the objects of the document. Accessible objects are created in the accessibility tree for every DOM element that should be exposed to assistive technology, either because it may fire an accessibility event or because it has a property, relationship or feature which needs to be exposed. Generally, if something can be trimmed out it will be, for reasons of performance and simplicity. For example, a `<span>` with just a style change and no semantics may not get its own accessible object, but the style change will be exposed by other means.

Browser vendors are beginning to expose the AX Tree through inspection tools. Chrome has an experiment available to enable their inspection tool.

You can also see a text-based version of the AX Tree in Chrome in the stable release version.

#### Viewing the AX Tree in Chrome

1. Navigate to `chrome://accessibility/` in Chrome.
1. Toggle the `accessibility off` link for any tab that you want to inspect.
1. A link labeled `show accessibility tree` will appear; click this link.
1. Balk at the wall of text that gets displayed, but then regain your conviction.
1. Use the browser's find command to locate strings and values in the wall of text.

### Pulling it all together

A browser constructs an AX Tree as a subset of the DOM. ARIA heavily informs the properties of this AX Tree. This AX Tree is exposed to the system level Accessibility API which mediates assistive technology agents.

We model ARIA in the [aria-query](https://github.com/a11yance/aria-query) project. We model AXObjects (that comprise the AX Tree) in the [axobject-query](https://github.com/A11yance/axobject-query) project. The goal of the WAI-ARIA specification is to be a complete declarative interface to the AXObject model. The [in-draft 1.2 version](https://github.com/w3c/aria/issues?q=is%3Aissue+is%3Aopen+label%3A%22ARIA+1.2%22) is moving towards this goal. But until then, we must consider the semantics constructs afforded by ARIA as well as those afforded by the AXObject model (AXAPI) in order to determine how HTML can be used to express user interface affordances to assistive technology users.

## License

eslint-plugin-jsx-a11y is licensed under the [MIT License](LICENSE.md).
