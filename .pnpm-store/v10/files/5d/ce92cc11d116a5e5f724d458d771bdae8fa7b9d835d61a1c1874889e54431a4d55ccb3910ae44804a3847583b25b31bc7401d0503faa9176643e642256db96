<div align="center">
<h1>jest-dom</h1>

<a href="https://www.emojione.com/emoji/1f989">
  <img
    height="80"
    width="80"
    alt="owl"
    src="https://raw.githubusercontent.com/testing-library/jest-dom/main/other/owl.png"
  />
</a>

<p>Custom jest matchers to test the state of the DOM</p>

</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-28-orange.svg?style=flat-square)](#contributors-)
[![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]
[![Discord][discord-badge]][discord]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]
<!-- prettier-ignore-end -->

## The problem

You want to use [jest][] to write tests that assert various things about the
state of a DOM. As part of that goal, you want to avoid all the repetitive
patterns that arise in doing so. Checking for an element's attributes, its text
content, its css classes, you name it.

## This solution

The `@testing-library/jest-dom` library provides a set of custom jest matchers
that you can use to extend jest. These will make your tests more declarative,
clear to read and to maintain.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [With `@jest/globals`](#with-jestglobals)
  - [With Vitest](#with-vitest)
  - [With TypeScript](#with-typescript)
  - [With another Jest-compatible `expect`](#with-another-jest-compatible-expect)
- [Custom matchers](#custom-matchers)
  - [`toBeDisabled`](#tobedisabled)
  - [`toBeEnabled`](#tobeenabled)
  - [`toBeEmptyDOMElement`](#tobeemptydomelement)
  - [`toBeInTheDocument`](#tobeinthedocument)
  - [`toBeInvalid`](#tobeinvalid)
  - [`toBeRequired`](#toberequired)
  - [`toBeValid`](#tobevalid)
  - [`toBeVisible`](#tobevisible)
  - [`toContainElement`](#tocontainelement)
  - [`toContainHTML`](#tocontainhtml)
  - [`toHaveAccessibleDescription`](#tohaveaccessibledescription)
  - [`toHaveAccessibleErrorMessage`](#tohaveaccessibleerrormessage)
  - [`toHaveAccessibleName`](#tohaveaccessiblename)
  - [`toHaveAttribute`](#tohaveattribute)
  - [`toHaveClass`](#tohaveclass)
  - [`toHaveFocus`](#tohavefocus)
  - [`toHaveFormValues`](#tohaveformvalues)
  - [`toHaveStyle`](#tohavestyle)
  - [`toHaveTextContent`](#tohavetextcontent)
  - [`toHaveValue`](#tohavevalue)
  - [`toHaveDisplayValue`](#tohavedisplayvalue)
  - [`toBeChecked`](#tobechecked)
  - [`toBePartiallyChecked`](#tobepartiallychecked)
  - [`toHaveRole`](#tohaverole)
  - [`toHaveErrorMessage`](#tohaveerrormessage)
  - [`toBePressed`](#tobepressed)
  - [`toBePartiallyPressed`](#tobepartiallypressed)
  - [`toAppearBefore`](#toappearbefore)
  - [`toAppearAfter`](#toappearafter)
- [Deprecated matchers](#deprecated-matchers)
  - [`toBeEmpty`](#tobeempty)
  - [`toBeInTheDOM`](#tobeinthedom)
  - [`toHaveDescription`](#tohavedescription)
  - [`toHaveSelection`](#tohaveselection)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Guiding Principles](#guiding-principles)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev @testing-library/jest-dom
```

or

for installation with [yarn](https://yarnpkg.com/) package manager.

```
yarn add --dev @testing-library/jest-dom
```

> Note: We also recommend installing the jest-dom eslint plugin which provides
> auto-fixable lint rules that prevent false positive tests and improve test
> readability by ensuring you are using the right matchers in your tests. More
> details can be found at
> [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom).

## Usage

Import `@testing-library/jest-dom` once (for instance in your [tests setup
file][]) and you're good to go:

[tests setup file]:
  https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array

```javascript
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```

### With `@jest/globals`

If you are using [`@jest/globals`][jest-globals announcement] with
[`injectGlobals: false`][inject-globals docs], you will need to use a different
import in your tests setup file:

```javascript
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom/jest-globals'
```

[jest-globals announcement]:
  https://jestjs.io/blog/2020/05/05/jest-26#a-new-way-to-consume-jest---jestglobals
[inject-globals docs]:
  https://jestjs.io/docs/configuration#injectglobals-boolean

### With Vitest

If you are using [vitest][], this module will work as-is, but you will need to
use a different import in your tests setup file. This file should be added to
the [`setupFiles`][vitest setupfiles] property in your vitest config:

```javascript
// In your own vitest-setup.js (or any other name)
import '@testing-library/jest-dom/vitest'

// In vitest.config.js add (if you haven't already)
setupFiles: ['./vitest-setup.js']
```

Also, depending on your local setup, you may need to update your
`tsconfig.json`:

```json
  // In tsconfig.json
  "compilerOptions": {
    ...
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": [
    ...
    "./vitest-setup.ts"
  ],
```

[vitest]: https://vitest.dev/
[vitest setupfiles]: https://vitest.dev/config/#setupfiles

### With TypeScript

If you're using TypeScript, make sure your setup file is a `.ts` and not a `.js`
to include the necessary types.

You will also need to include your setup file in your `tsconfig.json` if you
haven't already:

```json
  // In tsconfig.json
  "include": [
    ...
    "./jest-setup.ts"
  ],
```

### With another Jest-compatible `expect`

If you are using a different test runner that is compatible with Jest's `expect`
interface, it might be possible to use it with this library:

```javascript
import * as matchers from '@testing-library/jest-dom/matchers'
import {expect} from 'my-test-runner/expect'

expect.extend(matchers)
```

## Custom matchers

`@testing-library/jest-dom` can work with any library or framework that returns
DOM elements from queries. The custom matcher examples below are written using
matchers from `@testing-library`'s suite of libraries (e.g. `getByTestId`,
`queryByTestId`, `getByText`, etc.)

### `toBeDisabled`

```typescript
toBeDisabled()
```

This allows you to check whether an element is disabled from the user's
perspective. According to the specification, the following elements can be
[disabled](https://html.spec.whatwg.org/multipage/semantics-other.html#disabled-elements):
`button`, `input`, `select`, `textarea`, `optgroup`, `option`, `fieldset`, and
custom elements.

This custom matcher considers an element as disabled if the element is among the
types of elements that can be disabled (listed above), and the `disabled`
attribute is present. It will also consider the element as disabled if it's
inside a parent form element that supports being disabled and has the `disabled`
attribute present.

#### Examples

```html
<button data-testid="button" type="submit" disabled>submit</button>
<fieldset disabled><input type="text" data-testid="input" /></fieldset>
<a href="..." disabled>link</a>
```

```javascript
expect(getByTestId('button')).toBeDisabled()
expect(getByTestId('input')).toBeDisabled()
expect(getByText('link')).not.toBeDisabled()
```

> This custom matcher does not take into account the presence or absence of the
> `aria-disabled` attribute. For more on why this is the case, check
> [#144](https://github.com/testing-library/jest-dom/issues/144).

<hr />

### `toBeEnabled`

```typescript
toBeEnabled()
```

This allows you to check whether an element is not disabled from the user's
perspective.

It works like `not.toBeDisabled()`. Use this matcher to avoid double negation in
your tests.

> This custom matcher does not take into account the presence or absence of the
> `aria-disabled` attribute. For more on why this is the case, check
> [#144](https://github.com/testing-library/jest-dom/issues/144).

<hr />

### `toBeEmptyDOMElement`

```typescript
toBeEmptyDOMElement()
```

This allows you to assert whether an element has no visible content for the
user. It ignores comments but will fail if the element contains white-space.

#### Examples

```html
<span data-testid="not-empty"><span data-testid="empty"></span></span>
<span data-testid="with-whitespace"> </span>
<span data-testid="with-comment"><!-- comment --></span>
```

```javascript
expect(getByTestId('empty')).toBeEmptyDOMElement()
expect(getByTestId('not-empty')).not.toBeEmptyDOMElement()
expect(getByTestId('with-whitespace')).not.toBeEmptyDOMElement()
```

<hr />

### `toBeInTheDocument`

```typescript
toBeInTheDocument()
```

This allows you to assert whether an element is present in the document or not.

#### Examples

```html
<span data-testid="html-element"><span>Html Element</span></span>
<svg data-testid="svg-element"></svg>
```

```javascript
expect(
  getByTestId(document.documentElement, 'html-element'),
).toBeInTheDocument()
expect(getByTestId(document.documentElement, 'svg-element')).toBeInTheDocument()
expect(
  queryByTestId(document.documentElement, 'does-not-exist'),
).not.toBeInTheDocument()
```

> Note: This matcher does not find detached elements. The element must be added
> to the document to be found by toBeInTheDocument. If you desire to search in a
> detached element please use: [`toContainElement`](#tocontainelement)

<hr />

### `toBeInvalid`

```typescript
toBeInvalid()
```

This allows you to check if an element, is currently invalid.

An element is invalid if it has an
[`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)
with no value or a value of `"true"`, or if the result of
[`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
is `false`.

#### Examples

```html
<input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
```

```javascript
expect(getByTestId('no-aria-invalid')).not.toBeInvalid()
expect(getByTestId('aria-invalid')).toBeInvalid()
expect(getByTestId('aria-invalid-value')).toBeInvalid()
expect(getByTestId('aria-invalid-false')).not.toBeInvalid()

expect(getByTestId('valid-form')).not.toBeInvalid()
expect(getByTestId('invalid-form')).toBeInvalid()
```

<hr />

### `toBeRequired`

```typescript
toBeRequired()
```

This allows you to check if a form element is currently required.

An element is required if it is having a `required` or `aria-required="true"`
attribute.

#### Examples

```html
<input data-testid="required-input" required />
<input data-testid="aria-required-input" aria-required="true" />
<input data-testid="conflicted-input" required aria-required="false" />
<input data-testid="aria-not-required-input" aria-required="false" />
<input data-testid="optional-input" />
<input data-testid="unsupported-type" type="image" required />
<select data-testid="select" required></select>
<textarea data-testid="textarea" required></textarea>
<div data-testid="supported-role" role="tree" required></div>
<div data-testid="supported-role-aria" role="tree" aria-required="true"></div>
```

```javascript
expect(getByTestId('required-input')).toBeRequired()
expect(getByTestId('aria-required-input')).toBeRequired()
expect(getByTestId('conflicted-input')).toBeRequired()
expect(getByTestId('aria-not-required-input')).not.toBeRequired()
expect(getByTestId('optional-input')).not.toBeRequired()
expect(getByTestId('unsupported-type')).not.toBeRequired()
expect(getByTestId('select')).toBeRequired()
expect(getByTestId('textarea')).toBeRequired()
expect(getByTestId('supported-role')).not.toBeRequired()
expect(getByTestId('supported-role-aria')).toBeRequired()
```

<hr />

### `toBeValid`

```typescript
toBeValid()
```

This allows you to check if the value of an element, is currently valid.

An element is valid if it has no
[`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)s
or an attribute value of `"false"`. The result of
[`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
must also be `true` if it's a form element.

#### Examples

```html
<input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
```

```javascript
expect(getByTestId('no-aria-invalid')).toBeValid()
expect(getByTestId('aria-invalid')).not.toBeValid()
expect(getByTestId('aria-invalid-value')).not.toBeValid()
expect(getByTestId('aria-invalid-false')).toBeValid()

expect(getByTestId('valid-form')).toBeValid()
expect(getByTestId('invalid-form')).not.toBeValid()
```

<hr />

### `toBeVisible`

```typescript
toBeVisible()
```

This allows you to check if an element is currently visible to the user.

An element is visible if **all** the following conditions are met:

- it is present in the document
- it does not have its css property `display` set to `none`
- it does not have its css property `visibility` set to either `hidden` or
  `collapse`
- it does not have its css property `opacity` set to `0`
- its parent element is also visible (and so on up to the top of the DOM tree)
- it does not have the
  [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)
  attribute
- if `<details />` it has the `open` attribute

#### Examples

```html
<div data-testid="zero-opacity" style="opacity: 0">Zero Opacity Example</div>
<div data-testid="visibility-hidden" style="visibility: hidden">
  Visibility Hidden Example
</div>
<div data-testid="display-none" style="display: none">Display None Example</div>
<div style="opacity: 0">
  <span data-testid="hidden-parent">Hidden Parent Example</span>
</div>
<div data-testid="visible">Visible Example</div>
<div data-testid="hidden-attribute" hidden>Hidden Attribute Example</div>
<details>
  <summary>Title of hidden text</summary>
  Hidden Details Example
</details>
<details open>
  <summary>Title of visible text</summary>
  <div>Visible Details Example</div>
</details>
```

```javascript
expect(getByText('Zero Opacity Example')).not.toBeVisible()
expect(getByText('Visibility Hidden Example')).not.toBeVisible()
expect(getByText('Display None Example')).not.toBeVisible()
expect(getByText('Hidden Parent Example')).not.toBeVisible()
expect(getByText('Visible Example')).toBeVisible()
expect(getByText('Hidden Attribute Example')).not.toBeVisible()
expect(getByText('Hidden Details Example')).not.toBeVisible()
expect(getByText('Visible Details Example')).toBeVisible()
```

<hr />

### `toContainElement`

```typescript
toContainElement(element: HTMLElement | SVGElement | null)
```

This allows you to assert whether an element contains another element as a
descendant or not.

#### Examples

```html
<span data-testid="ancestor"><span data-testid="descendant"></span></span>
```

```javascript
const ancestor = getByTestId('ancestor')
const descendant = getByTestId('descendant')
const nonExistantElement = getByTestId('does-not-exist')

expect(ancestor).toContainElement(descendant)
expect(descendant).not.toContainElement(ancestor)
expect(ancestor).not.toContainElement(nonExistantElement)
```

<hr />

### `toContainHTML`

```typescript
toContainHTML(htmlText: string)
```

Assert whether a string representing a HTML element is contained in another
element. The string should contain valid html, and not any incomplete html.

#### Examples

```html
<span data-testid="parent"><span data-testid="child"></span></span>
```

```javascript
// These are valid uses
expect(getByTestId('parent')).toContainHTML('<span data-testid="child"></span>')
expect(getByTestId('parent')).toContainHTML('<span data-testid="child" />')
expect(getByTestId('parent')).not.toContainHTML('<br />')

// These won't work
expect(getByTestId('parent')).toContainHTML('data-testid="child"')
expect(getByTestId('parent')).toContainHTML('data-testid')
expect(getByTestId('parent')).toContainHTML('</span>')
```

> Chances are you probably do not need to use this matcher. We encourage testing
> from the perspective of how the user perceives the app in a browser. That's
> why testing against a specific DOM structure is not advised.
>
> It could be useful in situations where the code being tested renders html that
> was obtained from an external source, and you want to validate that that html
> code was used as intended.
>
> It should not be used to check DOM structure that you control. Please use
> [`toContainElement`](#tocontainelement) instead.

<hr />

### `toHaveAccessibleDescription`

```typescript
toHaveAccessibleDescription(expectedAccessibleDescription?: string | RegExp)
```

This allows you to assert that an element has the expected
[accessible description](https://w3c.github.io/accname/).

You can pass the exact string of the expected accessible description, or you can
make a partial match passing a regular expression, or by using
[expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)/[expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).

#### Examples

```html
<a
  data-testid="link"
  href="/"
  aria-label="Home page"
  title="A link to start over"
  >Start</a
>
<a data-testid="extra-link" href="/about" aria-label="About page">About</a>
<img src="avatar.jpg" data-testid="avatar" alt="User profile pic" />
<img
  src="logo.jpg"
  data-testid="logo"
  alt="Company logo"
  aria-describedby="t1"
/>
<span id="t1" role="presentation">The logo of Our Company</span>
<img
  src="logo.jpg"
  data-testid="logo2"
  alt="Company logo"
  aria-description="The logo of Our Company"
/>
```

```js
expect(getByTestId('link')).toHaveAccessibleDescription()
expect(getByTestId('link')).toHaveAccessibleDescription('A link to start over')
expect(getByTestId('link')).not.toHaveAccessibleDescription('Home page')
expect(getByTestId('extra-link')).not.toHaveAccessibleDescription()
expect(getByTestId('avatar')).not.toHaveAccessibleDescription()
expect(getByTestId('logo')).not.toHaveAccessibleDescription('Company logo')
expect(getByTestId('logo')).toHaveAccessibleDescription(
  'The logo of Our Company',
)
expect(getByTestId('logo2')).toHaveAccessibleDescription(
  'The logo of Our Company',
)
```

<hr />

### `toHaveAccessibleErrorMessage`

```typescript
toHaveAccessibleErrorMessage(expectedAccessibleErrorMessage?: string | RegExp)
```

This allows you to assert that an element has the expected
[accessible error message](https://w3c.github.io/aria/#aria-errormessage).

You can pass the exact string of the expected accessible error message.
Alternatively, you can perform a partial match by passing a regular expression
or by using
[expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)/[expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).

#### Examples

```html
<input
  aria-label="Has Error"
  aria-invalid="true"
  aria-errormessage="error-message"
/>
<div id="error-message" role="alert">This field is invalid</div>

<input aria-label="No Error Attributes" />
<input
  aria-label="Not Invalid"
  aria-invalid="false"
  aria-errormessage="error-message"
/>
```

```js
// Inputs with Valid Error Messages
expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage()
expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage(
  'This field is invalid',
)
expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage(
  /invalid/i,
)
expect(
  getByRole('textbox', {name: 'Has Error'}),
).not.toHaveAccessibleErrorMessage('This field is absolutely correct!')

// Inputs without Valid Error Messages
expect(
  getByRole('textbox', {name: 'No Error Attributes'}),
).not.toHaveAccessibleErrorMessage()

expect(
  getByRole('textbox', {name: 'Not Invalid'}),
).not.toHaveAccessibleErrorMessage()
```

<hr />

### `toHaveAccessibleName`

```typescript
toHaveAccessibleName(expectedAccessibleName?: string | RegExp)
```

This allows you to assert that an element has the expected
[accessible name](https://w3c.github.io/accname/). It is useful, for instance,
to assert that form elements and buttons are properly labelled.

You can pass the exact string of the expected accessible name, or you can make a
partial match passing a regular expression, or by using
[expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)/[expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).

#### Examples

```html
<img data-testid="img-alt" src="" alt="Test alt" />
<img data-testid="img-empty-alt" src="" alt="" />
<svg data-testid="svg-title"><title>Test title</title></svg>
<button data-testid="button-img-alt"><img src="" alt="Test" /></button>
<p><img data-testid="img-paragraph" src="" alt="" /> Test content</p>
<button data-testid="svg-button"><svg><title>Test</title></svg></p>
<div><svg data-testid="svg-without-title"></svg></div>
<input data-testid="input-title" title="test" />
```

```javascript
expect(getByTestId('img-alt')).toHaveAccessibleName('Test alt')
expect(getByTestId('img-empty-alt')).not.toHaveAccessibleName()
expect(getByTestId('svg-title')).toHaveAccessibleName('Test title')
expect(getByTestId('button-img-alt')).toHaveAccessibleName()
expect(getByTestId('img-paragraph')).not.toHaveAccessibleName()
expect(getByTestId('svg-button')).toHaveAccessibleName()
expect(getByTestId('svg-without-title')).not.toHaveAccessibleName()
expect(getByTestId('input-title')).toHaveAccessibleName()
```

<hr />

### `toHaveAttribute`

```typescript
toHaveAttribute(attr: string, value?: any)
```

This allows you to check whether the given element has an attribute or not. You
can also optionally check that the attribute has a specific expected value or
partial match using
[expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)/[expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp)

#### Examples

```html
<button data-testid="ok-button" type="submit" disabled>ok</button>
```

```javascript
const button = getByTestId('ok-button')

expect(button).toHaveAttribute('disabled')
expect(button).toHaveAttribute('type', 'submit')
expect(button).not.toHaveAttribute('type', 'button')

expect(button).toHaveAttribute('type', expect.stringContaining('sub'))
expect(button).toHaveAttribute('type', expect.not.stringContaining('but'))
```

<hr />

### `toHaveClass`

```typescript
toHaveClass(...classNames: string[], options?: {exact: boolean})
```

This allows you to check whether the given element has certain classes within
its `class` attribute. You must provide at least one class, unless you are
asserting that an element does not have any classes.

The list of class names may include strings and regular expressions. Regular
expressions are matched against each individual class in the target element, and
it is NOT matched against its full `class` attribute value as whole.

#### Examples

```html
<button data-testid="delete-button" class="btn extra btn-danger">
  Delete item
</button>
<button data-testid="no-classes">No Classes</button>
```

```javascript
const deleteButton = getByTestId('delete-button')
const noClasses = getByTestId('no-classes')

expect(deleteButton).toHaveClass('extra')
expect(deleteButton).toHaveClass('btn-danger btn')
expect(deleteButton).toHaveClass(/danger/, 'btn')
expect(deleteButton).toHaveClass('btn-danger', 'btn')
expect(deleteButton).not.toHaveClass('btn-link')
expect(deleteButton).not.toHaveClass(/link/)
expect(deleteButton).not.toHaveClass(/btn extra/) // It does not match

expect(deleteButton).toHaveClass('btn-danger extra btn', {exact: true}) // to check if the element has EXACTLY a set of classes
expect(deleteButton).not.toHaveClass('btn-danger extra', {exact: true}) // if it has more than expected it is going to fail

expect(noClasses).not.toHaveClass()
```

<hr />

### `toHaveFocus`

```typescript
toHaveFocus()
```

This allows you to assert whether an element has focus or not.

#### Examples

```html
<div><input type="text" data-testid="element-to-focus" /></div>
```

```javascript
const input = getByTestId('element-to-focus')

input.focus()
expect(input).toHaveFocus()

input.blur()
expect(input).not.toHaveFocus()
```

<hr />

### `toHaveFormValues`

```typescript
toHaveFormValues(expectedValues: {
  [name: string]: any
})
```

This allows you to check if a form or fieldset contains form controls for each
given name, and having the specified value.

> It is important to stress that this matcher can only be invoked on a [form][]
> or a [fieldset][] element.
>
> This allows it to take advantage of the [.elements][] property in `form` and
> `fieldset` to reliably fetch all form controls within them.
>
> This also avoids the possibility that users provide a container that contains
> more than one `form`, thereby intermixing form controls that are not related,
> and could even conflict with one another.

This matcher abstracts away the particularities with which a form control value
is obtained depending on the type of form control. For instance, `<input>`
elements have a `value` attribute, but `<select>` elements do not. Here's a list
of all cases covered:

- `<input type="number">` elements return the value as a **number**, instead of
  a string.
- `<input type="checkbox">` elements:
  - if there's a single one with the given `name` attribute, it is treated as a
    **boolean**, returning `true` if the checkbox is checked, `false` if
    unchecked.
  - if there's more than one checkbox with the same `name` attribute, they are
    all treated collectively as a single form control, which returns the value
    as an **array** containing all the values of the selected checkboxes in the
    collection.
- `<input type="radio">` elements are all grouped by the `name` attribute, and
  such a group treated as a single form control. This form control returns the
  value as a **string** corresponding to the `value` attribute of the selected
  radio button within the group.
- `<input type="text">` elements return the value as a **string**. This also
  applies to `<input>` elements having any other possible `type` attribute
  that's not explicitly covered in different rules above (e.g. `search`,
  `email`, `date`, `password`, `hidden`, etc.)
- `<select>` elements without the `multiple` attribute return the value as a
  **string** corresponding to the `value` attribute of the selected `option`, or
  `undefined` if there's no selected option.
- `<select multiple>` elements return the value as an **array** containing all
  the values of the [selected options][].
- `<textarea>` elements return their value as a **string**. The value
  corresponds to their node content.

The above rules make it easy, for instance, to switch from using a single select
control to using a group of radio buttons. Or to switch from a multi select
control, to using a group of checkboxes. The resulting set of form values used
by this matcher to compare against would be the same.

[selected options]:
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions
[form]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
[fieldset]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement
[.elements]:
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements

#### Examples

```html
<form data-testid="login-form">
  <input type="text" name="username" value="jane.doe" />
  <input type="password" name="password" value="12345678" />
  <input type="checkbox" name="rememberMe" checked />
  <button type="submit">Sign in</button>
</form>
```

```javascript
expect(getByTestId('login-form')).toHaveFormValues({
  username: 'jane.doe',
  rememberMe: true,
})
```

<hr />

### `toHaveStyle`

```typescript
toHaveStyle(css: string | object)
```

This allows you to check if a certain element has some specific css properties
with specific values applied. It matches only if the element has _all_ the
expected properties applied, not just some of them.

#### Examples

```html
<button
  data-testid="delete-button"
  style="display: none; background-color: red"
>
  Delete item
</button>
```

```javascript
const button = getByTestId('delete-button')

expect(button).toHaveStyle('display: none')
expect(button).toHaveStyle({display: 'none'})
expect(button).toHaveStyle(`
  background-color: red;
  display: none;
`)
expect(button).toHaveStyle({
  backgroundColor: 'red',
  display: 'none',
})
expect(button).not.toHaveStyle(`
  background-color: blue;
  display: none;
`)
expect(button).not.toHaveStyle({
  backgroundColor: 'blue',
  display: 'none',
})
```

This also works with rules that are applied to the element via a class name for
which some rules are defined in a stylesheet currently active in the document.
The usual rules of css precedence apply.

<hr />

### `toHaveTextContent`

```typescript
toHaveTextContent(text: string | RegExp, options?: {normalizeWhitespace: boolean})
```

This allows you to check whether the given node has a text content or not. This
supports elements, but also text nodes and fragments.

When a `string` argument is passed through, it will perform a partial
case-sensitive match to the node content.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

If you want to match the whole content, you can use a `RegExp` to do it.

#### Examples

```html
<span data-testid="text-content">Text Content</span>
```

```javascript
const element = getByTestId('text-content')

expect(element).toHaveTextContent('Content')
expect(element).toHaveTextContent(/^Text Content$/) // to match the whole content
expect(element).toHaveTextContent(/content$/i) // to use case-insensitive match
expect(element).not.toHaveTextContent('content')
```

<hr />

### `toHaveValue`

```typescript
toHaveValue(value: string | string[] | number)
```

This allows you to check whether the given form element has the specified value.
It accepts `<input>`, `<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

It also accepts elements with roles `meter`, `progressbar`, `slider` or
`spinbutton` and checks their `aria-valuenow` attribute (as a number).

For all other form elements, the value is matched using the same algorithm as in
[`toHaveFormValues`](#tohaveformvalues) does.

#### Examples

```html
<input type="text" value="text" data-testid="input-text" />
<input type="number" value="5" data-testid="input-number" />
<input type="text" data-testid="input-empty" />
<select multiple data-testid="select-number">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third" selected>Third Value</option>
</select>
```

##### Using DOM Testing Library

```javascript
const textInput = getByTestId('input-text')
const numberInput = getByTestId('input-number')
const emptyInput = getByTestId('input-empty')
const selectInput = getByTestId('select-number')

expect(textInput).toHaveValue('text')
expect(numberInput).toHaveValue(5)
expect(emptyInput).not.toHaveValue()
expect(selectInput).toHaveValue(['second', 'third'])
```

<hr />

### `toHaveDisplayValue`

```typescript
toHaveDisplayValue(value: string | RegExp | (string|RegExp)[])
```

This allows you to check whether the given form element has the specified
displayed value (the one the end user will see). It accepts `<input>`,
`<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

#### Examples

```html
<label for="input-example">First name</label>
<input type="text" id="input-example" value="Luca" />

<label for="textarea-example">Description</label>
<textarea id="textarea-example">An example description here.</textarea>

<label for="single-select-example">Fruit</label>
<select id="single-select-example">
  <option value="">Select a fruit...</option>
  <option value="banana">Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado">Avocado</option>
</select>

<label for="multiple-select-example">Fruits</label>
<select id="multiple-select-example" multiple>
  <option value="">Select a fruit...</option>
  <option value="banana" selected>Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado" selected>Avocado</option>
</select>
```

##### Using DOM Testing Library

```javascript
const input = screen.getByLabelText('First name')
const textarea = screen.getByLabelText('Description')
const selectSingle = screen.getByLabelText('Fruit')
const selectMultiple = screen.getByLabelText('Fruits')

expect(input).toHaveDisplayValue('Luca')
expect(input).toHaveDisplayValue(/Luc/)
expect(textarea).toHaveDisplayValue('An example description here.')
expect(textarea).toHaveDisplayValue(/example/)
expect(selectSingle).toHaveDisplayValue('Select a fruit...')
expect(selectSingle).toHaveDisplayValue(/Select/)
expect(selectMultiple).toHaveDisplayValue([/Avocado/, 'Banana'])
```

<hr />

### `toBeChecked`

```typescript
toBeChecked()
```

This allows you to check whether the given element is checked. It accepts an
`input` of type `checkbox` or `radio` and elements with a `role` of `checkbox`,
`radio` or `switch` with a valid `aria-checked` attribute of `"true"` or
`"false"`.

#### Examples

```html
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>

<input type="radio" checked value="foo" data-testid="input-radio-checked" />
<input type="radio" value="foo" data-testid="input-radio-unchecked" />
<div role="radio" aria-checked="true" data-testid="aria-radio-checked" />
<div role="radio" aria-checked="false" data-testid="aria-radio-unchecked" />
<div role="switch" aria-checked="true" data-testid="aria-switch-checked" />
<div role="switch" aria-checked="false" data-testid="aria-switch-unchecked" />
```

```javascript
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
expect(inputCheckboxChecked).toBeChecked()
expect(inputCheckboxUnchecked).not.toBeChecked()
expect(ariaCheckboxChecked).toBeChecked()
expect(ariaCheckboxUnchecked).not.toBeChecked()

const inputRadioChecked = getByTestId('input-radio-checked')
const inputRadioUnchecked = getByTestId('input-radio-unchecked')
const ariaRadioChecked = getByTestId('aria-radio-checked')
const ariaRadioUnchecked = getByTestId('aria-radio-unchecked')
expect(inputRadioChecked).toBeChecked()
expect(inputRadioUnchecked).not.toBeChecked()
expect(ariaRadioChecked).toBeChecked()
expect(ariaRadioUnchecked).not.toBeChecked()

const ariaSwitchChecked = getByTestId('aria-switch-checked')
const ariaSwitchUnchecked = getByTestId('aria-switch-unchecked')
expect(ariaSwitchChecked).toBeChecked()
expect(ariaSwitchUnchecked).not.toBeChecked()
```

<hr />

### `toBePartiallyChecked`

```typescript
toBePartiallyChecked()
```

This allows you to check whether the given element is partially checked. It
accepts an `input` of type `checkbox` and elements with a `role` of `checkbox`
with a `aria-checked="mixed"`, or `input` of type `checkbox` with
`indeterminate` set to `true`

#### Examples

```html
<input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>
<input type="checkbox" data-testid="input-checkbox-indeterminate" />
```

```javascript
const ariaCheckboxMixed = getByTestId('aria-checkbox-mixed')
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
const inputCheckboxIndeterminate = getByTestId('input-checkbox-indeterminate')

expect(ariaCheckboxMixed).toBePartiallyChecked()
expect(inputCheckboxChecked).not.toBePartiallyChecked()
expect(inputCheckboxUnchecked).not.toBePartiallyChecked()
expect(ariaCheckboxChecked).not.toBePartiallyChecked()
expect(ariaCheckboxUnchecked).not.toBePartiallyChecked()

inputCheckboxIndeterminate.indeterminate = true
expect(inputCheckboxIndeterminate).toBePartiallyChecked()
```

<hr />

### `toHaveRole`

This allows you to assert that an element has the expected
[role](https://www.w3.org/TR/html-aria/#docconformance).

This is useful in cases where you already have access to an element via some
query other than the role itself, and want to make additional assertions
regarding its accessibility.

The role can match either an explicit role (via the `role` attribute), or an
implicit one via the
[implicit ARIA semantics](https://www.w3.org/TR/html-aria/).

Note: roles are matched literally by string equality, without inheriting from
the ARIA role hierarchy. As a result, querying a superclass role like 'checkbox'
will not include elements with a subclass role like 'switch'.

```typescript
toHaveRole(expectedRole: string)
```

```html
<button data-testid="button">Continue</button>
<div role="button" data-testid="button-explicit">Continue</button>
<button role="switch button" data-testid="button-explicit-multiple">Continue</button>
<a href="/about" data-testid="link">About</a>
<a data-testid="link-invalid">Invalid link<a/>
```

```javascript
expect(getByTestId('button')).toHaveRole('button')
expect(getByTestId('button-explicit')).toHaveRole('button')
expect(getByTestId('button-explicit-multiple')).toHaveRole('button')
expect(getByTestId('button-explicit-multiple')).toHaveRole('switch')
expect(getByTestId('link')).toHaveRole('link')
expect(getByTestId('link-invalid')).not.toHaveRole('link')
expect(getByTestId('link-invalid')).toHaveRole('generic')
```

<hr />

### `toHaveErrorMessage`

> This custom matcher is deprecated. Prefer
> [`toHaveAccessibleErrorMessage`](#tohaveaccessibleerrormessage) instead, which
> is more comprehensive in implementing the official spec.

```typescript
toHaveErrorMessage(text: string | RegExp)
```

This allows you to check whether the given element has an
[ARIA error message](https://www.w3.org/TR/wai-aria/#aria-errormessage) or not.

Use the `aria-errormessage` attribute to reference another element that contains
custom error message text. Multiple ids is **NOT** allowed. Authors MUST use
`aria-invalid` in conjunction with `aria-errormessage`. Learn more from
[`aria-errormessage` spec](https://www.w3.org/TR/wai-aria/#aria-errormessage).

Whitespace is normalized.

When a `string` argument is passed through, it will perform a whole
case-sensitive match to the error message text.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

To perform a partial match, you can pass a `RegExp` or use
`expect.stringContaining("partial string")`.

#### Examples

```html
<label for="startTime"> Please enter a start time for the meeting: </label>
<input
  id="startTime"
  type="text"
  aria-errormessage="msgID"
  aria-invalid="true"
  value="11:30 PM"
/>
<span id="msgID" aria-live="assertive" style="visibility:visible">
  Invalid time: the time must be between 9:00 AM and 5:00 PM
</span>
```

```javascript
const timeInput = getByLabel('startTime')

expect(timeInput).toHaveErrorMessage(
  'Invalid time: the time must be between 9:00 AM and 5:00 PM',
)
expect(timeInput).toHaveErrorMessage(/invalid time/i) // to partially match
expect(timeInput).toHaveErrorMessage(expect.stringContaining('Invalid time')) // to partially match
expect(timeInput).not.toHaveErrorMessage('Pikachu!')
```

<hr />

### `toBePressed`

This allows to check whether given element is
[pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed).

It accepts elements with explicit or implicit `button` role and valid
`aria-pressed` attribute of `"true"` or `"false"`.

```typescript
toBePressed()
```

#### Examples

```html
<button aria-pressed="true">Pressed</button>
<button aria-pressed="false">Released</button>

<input type="button" aria-pressed="true" value="Pressed input button" />
<input type="button" aria-pressed="false" value="Released input button" />

<span role="button" aria-pressed="true">Pressed span</span>
<span role="button" aria-pressed="false">Released span</span>
```

##### Using DOM Testing Library

```javascript
screen.getByRole('button', {name: 'Pressed'}).toBePressed()
screen.getByRole('button', {name: 'Released'}).not.toBePressed()

screen.getByRole('button', {name: 'Pressed input button'}).toBePressed()
screen.getByRole('button', {name: 'Released input button'}).not.toBePressed()

screen.getByRole('button', {name: 'Pressed span'}).toBePressed()
screen.getByRole('button', {name: 'Released span'}).not.toBePressed()
```

<hr />

### `toBePartiallyPressed`

This allows to check whether given element is partially
[pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed).

It accepts elements with explicit or implicit `button` role and valid
`aria-pressed` attribute of `mixed`.

```typescript
toBePressed()
```

#### Examples

```html
<button aria-pressed="mixed">Partially pressed</button>
<input
  type="button"
  aria-pressed="mixed"
  value="Partially pressed input button"
/>
<span role="button" aria-pressed="mixed">Partially pressed span</span>
```

##### Using DOM Testing Library

```javascript
screen.getByRole('button', {name: 'Partially pressed'}).toBePartiallyPressed()
screen
  .getByRole('button', {name: 'Partially pressed input button'})
  .toBePartiallyPressed()
screen
  .getByRole('button', {name: 'Partially pressed span'})
  .toBePartiallyPressed()
```

<hr />

### `toAppearBefore`

This checks if a given element appears before another element in the DOM tree,
as per
[`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).

```typescript
toAppearBefore()
```

#### Examples

```html
<div>
  <span data-testid="text-a">Text A</span>
  <span data-testid="text-b">Text B</span>
</div>
```

```javascript
const textA = queryByTestId('text-a')
const textB = queryByTestId('text-b')

expect(textA).toAppearBefore(textB)
expect(textB).not.toAppearBefore(textA)
```

> Note: This matcher does not take into account CSS styles that may modify the
> display order of elements, eg:
>
> - `flex-direction: row-reverse`,
> - `flex-direction: column-reverse`,
> - `display: grid`

### `toAppearAfter`

This checks if a given element appears after another element in the DOM tree, as
per
[`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).

```typescript
toAppearAfter()
```

#### Examples

```html
<div>
  <span data-testid="text-a">Text A</span>
  <span data-testid="text-b">Text B</span>
</div>
```

```javascript
const textA = queryByTestId('text-a')
const textB = queryByTestId('text-b')

expect(textB).toAppearAfter(textA)
expect(textA).not.toAppearAfter(textB)
```

> Note: This matcher does not take into account CSS styles that may modify the
> display order of elements, see [`toAppearBefore()`](#toappearbefore)

## Deprecated matchers

### `toBeEmpty`

> Note: This matcher is being deprecated due to a name clash with
> `jest-extended`. See more info in #216. In the future, please use only
> [`toBeEmptyDOMElement`](#toBeEmptyDOMElement)

```typescript
toBeEmpty()
```

This allows you to assert whether an element has content or not.

#### Examples

```html
<span data-testid="not-empty"><span data-testid="empty"></span></span>
```

```javascript
expect(getByTestId('empty')).toBeEmpty()
expect(getByTestId('not-empty')).not.toBeEmpty()
```

<hr />

### `toBeInTheDOM`

> This custom matcher is deprecated. Prefer
> [`toBeInTheDocument`](#tobeinthedocument) instead.

```typescript
toBeInTheDOM()
```

This allows you to check whether a value is a DOM element, or not.

Contrary to what its name implies, this matcher only checks that you passed to
it a valid DOM element. It does not have a clear definition of what "the DOM"
is. Therefore, it does not check whether that element is contained anywhere.

This is the main reason why this matcher is deprecated, and will be removed in
the next major release. You can follow the discussion around this decision in
more detail [here](https://github.com/testing-library/jest-dom/issues/34).

As an alternative, you can use [`toBeInTheDocument`](#tobeinthedocument) or
[`toContainElement`](#tocontainelement). Or if you just want to check if a value
is indeed an `HTMLElement` you can always use some of
[jest's built-in matchers](https://jestjs.io/docs/en/expect#tobeinstanceofclass):

```js
expect(document.querySelector('.ok-button')).toBeInstanceOf(HTMLElement)
expect(document.querySelector('.cancel-button')).toBeTruthy()
```

> Note: The differences between `toBeInTheDOM` and `toBeInTheDocument` are
> significant. Replacing all uses of `toBeInTheDOM` with `toBeInTheDocument`
> will likely cause unintended consequences in your tests. Please make sure when
> replacing `toBeInTheDOM` to read through the documentation of the proposed
> alternatives to see which use case works better for your needs.

<hr />

### `toHaveDescription`

> This custom matcher is deprecated. Prefer
> [`toHaveAccessibleDescription`](#tohaveaccessibledescription) instead, which
> is more comprehensive in implementing the official spec.

```typescript
toHaveDescription(text: string | RegExp)
```

This allows you to check whether the given element has a description or not.

An element gets its description via the
[`aria-describedby` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
Set this to the `id` of one or more other elements. These elements may be nested
inside, be outside, or a sibling of the passed in element.

Whitespace is normalized. Using multiple ids will
[join the referenced elements’ text content separated by a space](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description).

When a `string` argument is passed through, it will perform a whole
case-sensitive match to the description text.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

To perform a partial match, you can pass a `RegExp` or use
`expect.stringContaining("partial string")`.

#### Examples

```html
<button aria-label="Close" aria-describedby="description-close">X</button>
<div id="description-close">Closing will discard any changes</div>

<button>Delete</button>
```

```javascript
const closeButton = getByRole('button', {name: 'Close'})

expect(closeButton).toHaveDescription('Closing will discard any changes')
expect(closeButton).toHaveDescription(/will discard/) // to partially match
expect(closeButton).toHaveDescription(expect.stringContaining('will discard')) // to partially match
expect(closeButton).toHaveDescription(/^closing/i) // to use case-insensitive match
expect(closeButton).not.toHaveDescription('Other description')

const deleteButton = getByRole('button', {name: 'Delete'})
expect(deleteButton).not.toHaveDescription()
expect(deleteButton).toHaveDescription('') // Missing or empty description always becomes a blank string
```

<hr />

### `toHaveSelection`

This allows to assert that an element has a
[text selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection).

This is useful to check if text or part of the text is selected within an
element. The element can be either an input of type text, a textarea, or any
other element that contains text, such as a paragraph, span, div etc.

NOTE: the expected selection is a string, it does not allow to check for
selection range indeces.

```typescript
toHaveSelection(expectedSelection?: string)
```

```html
<div>
  <input type="text" value="text selected text" data-testid="text" />
  <textarea data-testid="textarea">text selected text</textarea>
  <p data-testid="prev">prev</p>
  <p data-testid="parent">
    text <span data-testid="child">selected</span> text
  </p>
  <p data-testid="next">next</p>
</div>
```

```javascript
getByTestId('text').setSelectionRange(5, 13)
expect(getByTestId('text')).toHaveSelection('selected')

getByTestId('textarea').setSelectionRange(0, 5)
expect('textarea').toHaveSelection('text ')

const selection = document.getSelection()
const range = document.createRange()
selection.removeAllRanges()
selection.empty()
selection.addRange(range)

// selection of child applies to the parent as well
range.selectNodeContents(getByTestId('child'))
expect(getByTestId('child')).toHaveSelection('selected')
expect(getByTestId('parent')).toHaveSelection('selected')

// selection that applies from prev all, parent text before child, and part child.
range.setStart(getByTestId('prev'), 0)
range.setEnd(getByTestId('child').childNodes[0], 3)
expect(queryByTestId('prev')).toHaveSelection('prev')
expect(queryByTestId('child')).toHaveSelection('sel')
expect(queryByTestId('parent')).toHaveSelection('text sel')
expect(queryByTestId('next')).not.toHaveSelection()

// selection that applies from part child, parent text after child and part next.
range.setStart(getByTestId('child').childNodes[0], 3)
range.setEnd(getByTestId('next').childNodes[0], 2)
expect(queryByTestId('child')).toHaveSelection('ected')
expect(queryByTestId('parent')).toHaveSelection('ected text')
expect(queryByTestId('prev')).not.toHaveSelection()
expect(queryByTestId('next')).toHaveSelection('ne')
```

## Inspiration

This whole library was extracted out of Kent C. Dodds' [DOM Testing
Library][dom-testing-library], which was in turn extracted out of [React Testing
Library][react-testing-library].

The intention is to make this available to be used independently of these other
libraries, and also to make it more clear that these other libraries are
independent from jest, and can be used with other tests runners as well.

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

If you would like to further test the accessibility and validity of the DOM
consider [`jest-axe`](https://github.com/nickcolley/jest-axe). It doesn't
overlap with `jest-dom` but can complement it for more in-depth accessibility
checking (eg: validating `aria` attributes or ensuring unique id attributes).

## Guiding Principles

> [The more your tests resemble the way your software is used, the more
> confidence they can give you.][guiding-principle]

This library follows the same guiding principles as its mother library [DOM
Testing Library][dom-testing-library]. Go [check them out][guiding-principle]
for more details.

Additionally, with respect to custom DOM matchers, this library aims to maintain
a minimal but useful set of them, while avoiding bloating itself with merely
convenient ones that can be easily achieved with other APIs. In general, the
overall criteria for what is considered a useful custom matcher to add to this
library, is that doing the equivalent assertion on our own makes the test code
more verbose, less clear in its intent, and/or harder to read.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kentcdodds" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://audiolion.github.io"><img src="https://avatars1.githubusercontent.com/u/2430381?v=4?s=100" width="100px;" alt="Ryan Castner"/><br /><sub><b>Ryan Castner</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=audiolion" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.dnlsandiego.com"><img src="https://avatars0.githubusercontent.com/u/8008023?v=4?s=100" width="100px;" alt="Daniel Sandiego"/><br /><sub><b>Daniel Sandiego</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=dnlsandiego" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Miklet"><img src="https://avatars2.githubusercontent.com/u/12592677?v=4?s=100" width="100px;" alt="Paweł Mikołajczyk"/><br /><sub><b>Paweł Mikołajczyk</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=Miklet" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://co.linkedin.com/in/alejandronanez/"><img src="https://avatars3.githubusercontent.com/u/464978?v=4?s=100" width="100px;" alt="Alejandro Ñáñez Ortiz"/><br /><sub><b>Alejandro Ñáñez Ortiz</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=alejandronanez" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pbomb"><img src="https://avatars0.githubusercontent.com/u/1402095?v=4?s=100" width="100px;" alt="Matt Parrish"/><br /><sub><b>Matt Parrish</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Apbomb" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=pbomb" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=pbomb" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=pbomb" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wKovacs64"><img src="https://avatars1.githubusercontent.com/u/1288694?v=4?s=100" width="100px;" alt="Justin Hall"/><br /><sub><b>Justin Hall</b></sub></a><br /><a href="#platform-wKovacs64" title="Packaging/porting to new platform">📦</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/antoaravinth"><img src="https://avatars1.githubusercontent.com/u/1241511?s=460&v=4?s=100" width="100px;" alt="Anto Aravinth"/><br /><sub><b>Anto Aravinth</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=antoaravinth" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=antoaravinth" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=antoaravinth" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JonahMoses"><img src="https://avatars2.githubusercontent.com/u/3462296?v=4?s=100" width="100px;" alt="Jonah Moses"/><br /><sub><b>Jonah Moses</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=JonahMoses" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://team.thebrain.pro"><img src="https://avatars1.githubusercontent.com/u/4002543?v=4?s=100" width="100px;" alt="Łukasz Gandecki"/><br /><sub><b>Łukasz Gandecki</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=lgandecki" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=lgandecki" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=lgandecki" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sompylasar.github.io"><img src="https://avatars2.githubusercontent.com/u/498274?v=4?s=100" width="100px;" alt="Ivan Babak"/><br /><sub><b>Ivan Babak</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Asompylasar" title="Bug reports">🐛</a> <a href="#ideas-sompylasar" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jday3"><img src="https://avatars3.githubusercontent.com/u/4439618?v=4?s=100" width="100px;" alt="Jesse Day"/><br /><sub><b>Jesse Day</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jday3" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://gnapse.github.io"><img src="https://avatars0.githubusercontent.com/u/15199?v=4?s=100" width="100px;" alt="Ernesto García"/><br /><sub><b>Ernesto García</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=gnapse" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=gnapse" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=gnapse" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ociweb.com/mark/"><img src="https://avatars0.githubusercontent.com/u/79312?v=4?s=100" width="100px;" alt="Mark Volkmann"/><br /><sub><b>Mark Volkmann</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Amvolkmann" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=mvolkmann" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/smacpherson64"><img src="https://avatars1.githubusercontent.com/u/1659099?v=4?s=100" width="100px;" alt="smacpherson64"/><br /><sub><b>smacpherson64</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=smacpherson64" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=smacpherson64" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=smacpherson64" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jgoz"><img src="https://avatars2.githubusercontent.com/u/132233?v=4?s=100" width="100px;" alt="John Gozde"/><br /><sub><b>John Gozde</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Ajgoz" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=jgoz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/callada"><img src="https://avatars2.githubusercontent.com/u/7830590?v=4?s=100" width="100px;" alt="Iwona"/><br /><sub><b>Iwona</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=callada" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=callada" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=callada" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/6ewis"><img src="https://avatars0.githubusercontent.com/u/840609?v=4?s=100" width="100px;" alt="Lewis"/><br /><sub><b>Lewis</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=6ewis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.lourenci.com/"><img src="https://avatars3.githubusercontent.com/u/2339362?v=4?s=100" width="100px;" alt="Leandro Lourenci"/><br /><sub><b>Leandro Lourenci</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Alourenci" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=lourenci" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=lourenci" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=lourenci" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mufasa71"><img src="https://avatars1.githubusercontent.com/u/626420?v=4?s=100" width="100px;" alt="Shukhrat Mukimov"/><br /><sub><b>Shukhrat Mukimov</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Amufasa71" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dreyks"><img src="https://avatars3.githubusercontent.com/u/1481264?v=4?s=100" width="100px;" alt="Roman Usherenko"/><br /><sub><b>Roman Usherenko</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=dreyks" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=dreyks" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://josephhsu.com"><img src="https://avatars1.githubusercontent.com/u/648?v=4?s=100" width="100px;" alt="Joe Hsu"/><br /><sub><b>Joe Hsu</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jhsu" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/diegohaz"><img src="https://avatars3.githubusercontent.com/u/3068563?v=4?s=100" width="100px;" alt="Haz"/><br /><sub><b>Haz</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Adiegohaz" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=diegohaz" title="Code">💻</a> <a href="#ideas-diegohaz" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.revathskumar.com"><img src="https://avatars3.githubusercontent.com/u/463904?v=4?s=100" width="100px;" alt="Revath S Kumar"/><br /><sub><b>Revath S Kumar</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=revathskumar" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://raccoon.studio"><img src="https://avatars0.githubusercontent.com/u/4989733?v=4?s=100" width="100px;" alt="hiwelo."/><br /><sub><b>hiwelo.</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=hiwelo" title="Code">💻</a> <a href="#ideas-hiwelo" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/jest-dom/commits?author=hiwelo" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lukaszfiszer"><img src="https://avatars3.githubusercontent.com/u/1201711?v=4?s=100" width="100px;" alt="Łukasz Fiszer"/><br /><sub><b>Łukasz Fiszer</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=lukaszfiszer" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jeanchung"><img src="https://avatars0.githubusercontent.com/u/10778036?v=4?s=100" width="100px;" alt="Jean Chung"/><br /><sub><b>Jean Chung</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jeanchung" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=jeanchung" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CarlaTeo"><img src="https://avatars3.githubusercontent.com/u/9220147?v=4?s=100" width="100px;" alt="CarlaTeo"/><br /><sub><b>CarlaTeo</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=CarlaTeo" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=CarlaTeo" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YardenShoham"><img src="https://avatars3.githubusercontent.com/u/20454870?v=4?s=100" width="100px;" alt="Yarden Shoham"/><br /><sub><b>Yarden Shoham</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=YardenShoham" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jagascript.com"><img src="https://avatars0.githubusercontent.com/u/4562878?v=4?s=100" width="100px;" alt="Jaga Santagostino"/><br /><sub><b>Jaga Santagostino</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Akandros" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kandros" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kandros" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/connormeredith"><img src="https://avatars0.githubusercontent.com/u/4907463?v=4?s=100" width="100px;" alt="Connor Meredith"/><br /><sub><b>Connor Meredith</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=connormeredith" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=connormeredith" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=connormeredith" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pwolaq"><img src="https://avatars3.githubusercontent.com/u/10261750?v=4?s=100" width="100px;" alt="Pawel Wolak"/><br /><sub><b>Pawel Wolak</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=pwolaq" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=pwolaq" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt="Michaël De Boey"/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="#infra-MichaelDeBoey" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jzarzeckis"><img src="https://avatars3.githubusercontent.com/u/919350?v=4?s=100" width="100px;" alt="Jānis Zaržeckis"/><br /><sub><b>Jānis Zaržeckis</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jzarzeckis" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/koala-lava"><img src="https://avatars0.githubusercontent.com/u/15828770?v=4?s=100" width="100px;" alt="koala-lava"/><br /><sub><b>koala-lava</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=koala-lava" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jpblanco.dev"><img src="https://avatars1.githubusercontent.com/u/16567863?v=4?s=100" width="100px;" alt="Juan Pablo Blanco"/><br /><sub><b>Juan Pablo Blanco</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=JPBlancoDB" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benmonro"><img src="https://avatars3.githubusercontent.com/u/399236?v=4?s=100" width="100px;" alt="Ben Monro"/><br /><sub><b>Ben Monro</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=benmonro" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jeffbernstein.io"><img src="https://avatars1.githubusercontent.com/u/6685560?v=4?s=100" width="100px;" alt="Jeff Bernstein"/><br /><sub><b>Jeff Bernstein</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jeffbernst" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SergiCL"><img src="https://avatars3.githubusercontent.com/u/41625166?v=4?s=100" width="100px;" alt="Sergi"/><br /><sub><b>Sergi</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=SergiCL" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=SergiCL" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://skovy.dev"><img src="https://avatars1.githubusercontent.com/u/5247455?v=4?s=100" width="100px;" alt="Spencer Miskoviak"/><br /><sub><b>Spencer Miskoviak</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=skovy" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/jonrimmer"><img src="https://avatars1.githubusercontent.com/u/183786?v=4?s=100" width="100px;" alt="Jon Rimmer"/><br /><sub><b>Jon Rimmer</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jonrimmer" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=jonrimmer" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cloud-walker"><img src="https://avatars3.githubusercontent.com/u/1144075?v=4?s=100" width="100px;" alt="Luca Barone"/><br /><sub><b>Luca Barone</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=cloud-walker" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=cloud-walker" title="Tests">⚠️</a> <a href="#ideas-cloud-walker" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mfelmy"><img src="https://avatars2.githubusercontent.com/u/29504917?v=4?s=100" width="100px;" alt="Malte Felmy"/><br /><sub><b>Malte Felmy</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=mfelmy" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=mfelmy" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ghuser.io/Ishaan28malik"><img src="https://avatars3.githubusercontent.com/u/27343592?v=4?s=100" width="100px;" alt="Championrunner"/><br /><sub><b>Championrunner</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=Ishaan28malik" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://icing.space/"><img src="https://avatars0.githubusercontent.com/u/2635733?v=4?s=100" width="100px;" alt="Patrick Smith"/><br /><sub><b>Patrick Smith</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=BurntCaramel" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=BurntCaramel" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=BurntCaramel" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rubenmoya.dev"><img src="https://avatars3.githubusercontent.com/u/905225?v=4?s=100" width="100px;" alt="Rubén Moya"/><br /><sub><b>Rubén Moya</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=rubenmoya" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=rubenmoya" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=rubenmoya" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://danielavalero.com/"><img src="https://avatars1.githubusercontent.com/u/1307954?v=4?s=100" width="100px;" alt="Daniela Valero"/><br /><sub><b>Daniela Valero</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=DanielaValero" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=DanielaValero" title="Tests">⚠️</a> <a href="https://github.com/testing-library/jest-dom/commits?author=DanielaValero" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/missilev"><img src="https://avatars1.githubusercontent.com/u/33201468?v=4?s=100" width="100px;" alt="Vladislav Katsura"/><br /><sub><b>Vladislav Katsura</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=missilev" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=missilev" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stderr.timfischbach.de"><img src="https://avatars3.githubusercontent.com/u/26554?v=4?s=100" width="100px;" alt="Tim Fischbach"/><br /><sub><b>Tim Fischbach</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=tf" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=tf" title="Tests">⚠️</a> <a href="#ideas-tf" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://katieboedges.com/"><img src="https://avatars1.githubusercontent.com/u/8322476?v=4?s=100" width="100px;" alt="Katie Boedges"/><br /><sub><b>Katie Boedges</b></sub></a><br /><a href="#infra-kboedges" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/brrianalexis"><img src="https://avatars2.githubusercontent.com/u/51463930?v=4?s=100" width="100px;" alt="Brian Alexis"/><br /><sub><b>Brian Alexis</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=brrianalexis" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/boriscoder"><img src="https://avatars2.githubusercontent.com/u/812240?v=4?s=100" width="100px;" alt="Boris Serdiuk"/><br /><sub><b>Boris Serdiuk</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Ajust-boris" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=just-boris" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=just-boris" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://danawoodman.com"><img src="https://avatars1.githubusercontent.com/u/157695?v=4?s=100" width="100px;" alt="Dana Woodman"/><br /><sub><b>Dana Woodman</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=danawoodman" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MoSattler"><img src="https://avatars2.githubusercontent.com/u/64152453?v=4?s=100" width="100px;" alt="Mo Sattler"/><br /><sub><b>Mo Sattler</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=MoSattler" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/geoffrich"><img src="https://avatars2.githubusercontent.com/u/4992896?v=4?s=100" width="100px;" alt="Geoff Rich"/><br /><sub><b>Geoff Rich</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=geoffrich" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=geoffrich" title="Tests">⚠️</a> <a href="#ideas-geoffrich" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/jest-dom/issues?q=author%3Ageoffrich" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/syneva-runyan"><img src="https://avatars0.githubusercontent.com/u/20505588?v=4?s=100" width="100px;" alt="Syneva"/><br /><sub><b>Syneva</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=syneva-runyan" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://nickmccurdy.com/"><img src="https://avatars0.githubusercontent.com/u/927220?v=4?s=100" width="100px;" alt="Nick McCurdy"/><br /><sub><b>Nick McCurdy</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=nickmccurdy" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/issues?q=author%3Anickmccurdy" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=nickmccurdy" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://obedparla.com/"><img src="https://avatars1.githubusercontent.com/u/10674462?v=4?s=100" width="100px;" alt="Obed Marquez Parlapiano"/><br /><sub><b>Obed Marquez Parlapiano</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=obedparla" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/calebeby"><img src="https://avatars.githubusercontent.com/u/13206945?v=4?s=100" width="100px;" alt="Caleb Eby"/><br /><sub><b>Caleb Eby</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=calebeby" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=calebeby" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=calebeby" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcelbarner"><img src="https://avatars.githubusercontent.com/u/12788744?v=4?s=100" width="100px;" alt="Marcel Barner"/><br /><sub><b>Marcel Barner</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=marcelbarner" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=marcelbarner" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SevenOutman"><img src="https://avatars.githubusercontent.com/u/8225666?v=4?s=100" width="100px;" alt="Doma"/><br /><sub><b>Doma</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=SevenOutman" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=SevenOutman" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://everlong.org/"><img src="https://avatars.githubusercontent.com/u/454175?v=4?s=100" width="100px;" alt="Julien Wajsberg"/><br /><sub><b>Julien Wajsberg</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=julienw" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=julienw" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://lichess.org/@/StevenEmily"><img src="https://avatars.githubusercontent.com/u/58114641?v=4?s=100" width="100px;" alt="steven nguyen"/><br /><sub><b>steven nguyen</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=icecream17" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://tu4mo.com"><img src="https://avatars.githubusercontent.com/u/16735302?v=4?s=100" width="100px;" alt="tu4mo"/><br /><sub><b>tu4mo</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=tu4mo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://matan.io"><img src="https://avatars.githubusercontent.com/u/12711091?v=4?s=100" width="100px;" alt="Matan Borenkraout"/><br /><sub><b>Matan Borenkraout</b></sub></a><br /><a href="#platform-MatanBobi" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yannbf"><img src="https://avatars.githubusercontent.com/u/1671563?v=4?s=100" width="100px;" alt="Yann Braga"/><br /><sub><b>Yann Braga</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=yannbf" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/IanVS"><img src="https://avatars.githubusercontent.com/u/4616705?v=4?s=100" width="100px;" alt="Ian VanSchooten"/><br /><sub><b>Ian VanSchooten</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=IanVS" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://chantalbroeren.nl"><img src="https://avatars.githubusercontent.com/u/7499806?v=4?s=100" width="100px;" alt="Chantal Broeren"/><br /><sub><b>Chantal Broeren</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=cbroeren" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jeremie.astori.fr"><img src="https://avatars.githubusercontent.com/u/113730?v=4?s=100" width="100px;" alt="Jérémie Astori"/><br /><sub><b>Jérémie Astori</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=astorije" title="Code">💻</a> <a href="#ideas-astorije" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ashleyryan"><img src="https://avatars.githubusercontent.com/u/9469374?v=4?s=100" width="100px;" alt="Ashley Ryan"/><br /><sub><b>Ashley Ryan</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=ashleyryan" title="Code">💻</a> <a href="#ideas-ashleyryan" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://fotis.xyz"><img src="https://avatars.githubusercontent.com/u/3210764?v=4?s=100" width="100px;" alt="Fotis Papadogeorgopoulos"/><br /><sub><b>Fotis Papadogeorgopoulos</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=fpapado" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=fpapado" title="Documentation">📖</a> <a href="https://github.com/testing-library/jest-dom/commits?author=fpapado" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jakeboone02"><img src="https://avatars.githubusercontent.com/u/366438?v=4?s=100" width="100px;" alt="Jake Boone"/><br /><sub><b>Jake Boone</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=jakeboone02" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=jakeboone02" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.stekoe.de"><img src="https://avatars.githubusercontent.com/u/1809221?v=4?s=100" width="100px;" alt="Stephan Köninger"/><br /><sub><b>Stephan Köninger</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3ASteKoe" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=SteKoe" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kryops"><img src="https://avatars.githubusercontent.com/u/1042594?v=4?s=100" width="100px;" alt="Michael Manzinger"/><br /><sub><b>Michael Manzinger</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Akryops" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kryops" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kryops" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Dennis273"><img src="https://avatars.githubusercontent.com/u/19815164?v=4?s=100" width="100px;" alt="Dennis Chen"/><br /><sub><b>Dennis Chen</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=Dennis273" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tonyhallett"><img src="https://avatars.githubusercontent.com/u/11292998?v=4?s=100" width="100px;" alt="Tony Hallett"/><br /><sub><b>Tony Hallett</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Atonyhallett" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ddolcimascolo"><img src="https://avatars.githubusercontent.com/u/5468291?v=4?s=100" width="100px;" alt="David DOLCIMASCOLO"/><br /><sub><b>David DOLCIMASCOLO</b></sub></a><br /><a href="#maintenance-ddolcimascolo" title="Maintenance">🚧</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aleks-elkin"><img src="https://avatars.githubusercontent.com/u/55530374?v=4?s=100" width="100px;" alt="Aleksandr Elkin"/><br /><sub><b>Aleksandr Elkin</b></sub></a><br /><a href="#maintenance-aleks-elkin" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.vorant94.io/"><img src="https://avatars.githubusercontent.com/u/9719319?v=4?s=100" width="100px;" alt="Mordechai Dror"/><br /><sub><b>Mordechai Dror</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=vorant94" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.waynevanson.com"><img src="https://avatars.githubusercontent.com/u/29592214?v=4?s=100" width="100px;" alt="Wayne Van Son"/><br /><sub><b>Wayne Van Son</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=waynevanson" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=waynevanson" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/idanen"><img src="https://avatars.githubusercontent.com/u/1687893?v=4?s=100" width="100px;" alt="Idan Entin"/><br /><sub><b>Idan Entin</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=idanen" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=idanen" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mibcadet"><img src="https://avatars.githubusercontent.com/u/925500?v=4?s=100" width="100px;" alt="mibcadet"/><br /><sub><b>mibcadet</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=mibcadet" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://silviuaavram.com"><img src="https://avatars.githubusercontent.com/u/11275392?v=4?s=100" width="100px;" alt="Silviu Alexandru Avram"/><br /><sub><b>Silviu Alexandru Avram</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=silviuaavram" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=silviuaavram" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/G-Rath"><img src="https://avatars.githubusercontent.com/u/3151613?v=4?s=100" width="100px;" alt="Gareth Jones"/><br /><sub><b>Gareth Jones</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=G-Rath" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://billyjanitsch.com"><img src="https://avatars.githubusercontent.com/u/1158733?v=4?s=100" width="100px;" alt="Billy Janitsch"/><br /><sub><b>Billy Janitsch</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/issues?q=author%3Abillyjanitsch" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://xyynext.com"><img src="https://avatars.githubusercontent.com/u/26314308?v=4?s=100" width="100px;" alt="InfiniteXyy"/><br /><sub><b>InfiniteXyy</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=InfiniteXyy" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/issues?q=author%3AInfiniteXyy" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kretajak"><img src="https://avatars.githubusercontent.com/u/2963053?v=4?s=100" width="100px;" alt="Marcin Kulpa"/><br /><sub><b>Marcin Kulpa</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=kretajak" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=kretajak" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://nossbigg.github.io"><img src="https://avatars.githubusercontent.com/u/10845858?v=4?s=100" width="100px;" alt="Gibson C"/><br /><sub><b>Gibson C</b></sub></a><br /><a href="https://github.com/testing-library/jest-dom/commits?author=nossbigg" title="Code">💻</a> <a href="https://github.com/testing-library/jest-dom/commits?author=nossbigg" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[jest]: https://facebook.github.io/jest/
[dom-testing-library]: https://github.com/testing-library/dom-testing-library
[react-testing-library]:
  https://github.com/testing-library/react-testing-library
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/actions/workflow/status/testing-library/jest-dom/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/testing-library/jest-dom/actions?query=workflow%3Avalidate
[coverage-badge]: 
  https://img.shields.io/codecov/c/github/testing-library/jest-dom.svg?style=flat-square
[coverage]: https://codecov.io/github/testing-library/jest-dom
[version-badge]:
 https://img.shields.io/npm/v/@testing-library/jest-dom.svg?style=flat-square
[package]: https://www.npmjs.com/package/@testing-library/jest-dom
[downloads-badge]: 
  https://img.shields.io/npm/dm/@testing-library/jest-dom.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@testing-library/jest-dom
[license-badge]: 
  https://img.shields.io/npm/l/@testing-library/jest-dom.svg?style=flat-square
[license]: https://github.com/testing-library/jest-dom/blob/main/LICENSE
[prs-badge]: 
  https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: 
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: 
  https://github.com/testing-library/jest-dom/blob/main/other/CODE_OF_CONDUCT.md
[github-watch-badge]:
  https://img.shields.io/github/watchers/testing-library/jest-dom.svg?style=social
[github-watch]: https://github.com/testing-library/jest-dom/watchers
[github-star-badge]:
  https://img.shields.io/github/stars/testing-library/jest-dom.svg?style=social
[github-star]: https://github.com/testing-library/jest-dom/stargazers
[twitter]:
  https://twitter.com/intent/tweet?text=Check%20out%20jest-dom%20by%20%40gnapse%20https%3A%2F%2Fgithub.com%2Ftesting-library%2Fjest-dom%20%F0%9F%91%8D
[twitter-badge]:
  https://img.shields.io/twitter/url/https/github.com/testing-library/jest-dom.svg?style=social
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: 
  https://img.shields.io/github/all-contributors/testing-library/jest-dom?color=orange&style=flat-square
[guiding-principle]: https://testing-library.com/docs/guiding-principles
[discord-badge]: https://img.shields.io/discord/723559267868737556.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff&style=flat-square
[discord]: https://discord.gg/testing-library
<!-- prettier-ignore-end -->
