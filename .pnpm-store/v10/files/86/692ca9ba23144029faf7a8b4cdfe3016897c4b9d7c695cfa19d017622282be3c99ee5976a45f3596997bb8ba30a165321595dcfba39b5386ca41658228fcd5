# DOM Mutator

For those times you need to apply persistent DOM changes on top of HTML you don’t control.

View demo: https://growthbook.github.io/dom-mutator/

```ts
const mutation = mutate.html('#greeting', (html) => html + ' world');

// works even if the selector doesn't exist yet
document.body.innerHTML += "<div id='greeting'>hello</div>";

// "hello world"

// re-applies if there's an external change
document.getElementById('greeting').innerHTML = 'hola';

// "hola world"

// Revert to the last externally set value
mutation.revert();

// "hola"
```

```ts
import mutate from 'dom-mutator';

mutate.html('h1', (html) => html.toUpperCase());

mutate.classes('div.greeting', (classes) => classes.add('new-class'));

mutate.attribute(
    '.get-started',
    'title',
    (oldVal) => 'This is my new title attribute'
);
```

Features:

-   No dependencies, written in Typescript, 100% test coverage
-   Super fast and light-weight (1Kb gzipped)
-   Persists mutations even if the underlying element is updated externally (e.g. by a React render)
-   Picks up new matching elements that are added to the DOM
-   Easily remove a mutation at any time

![Build Status](https://github.com/growthbook/dom-mutator/workflows/CI/badge.svg)

## Installation

Install with npm or yarn (recommended):

`yarn add dom-mutator` OR `npm install --save dom-mutator`.

```js
import mutate from "dom-mutator";
...
```

OR use with unpkg:

```html
<script type="module">
    import mutate from "https://unpkg.com/dom-mutator/dist/dom-mutator.esm.js";
    ...
</script>
```

## Usage

There are 4 mutate methods available: `html`, `classes`, `attribute`, and `declarative`.

### html

Mutate an element's innerHTML

```ts
// Signature
mutate.html(selector: string, (oldInnerHTML: string) => string);

// Example
mutate.html("h1", x => x.toUpperCase());
```

### classes

Mutate the set of classes for an element

```ts
// Signature
mutate.classes(selector: string, (classes: Set<string>) => void);

// Example
mutate.classes("h1", (classes) => {
  classes.add("green");
  classes.remove("red");
});
```

### attribute

Mutate the value of an HTML element's attribute

```ts
// Signature
mutate.attribute(selector: string, attribute: string, (oldValue: string) => string);

// Example
mutate.attribute(".link", "href", (href) => href + "?foo");
```

### position

Mutate the position of an HTML element by supplying a target parent element to append it to (and optional sibling element to place it next to).

```ts
// Signature
mutate.position(selector: string, () => ({ parentSelector: string; insertBeforeSelector?: string; }));

// Example
mutate.attribute(".link", () => ({ parentSelector: '.parent', insertBeforeSelector: 'p.body' }));
```

### declarative

Mutate the html, classes, or attributes using a declarative syntax instead of callbacks.
Perfect for serialization.

```ts
// Signature
mutate.declarative({
    selector: string,
    action: 'set' | 'append' | 'remove',
    attribute: 'html' | 'class' | string,
    value: string,
});

// Examples
const mutations = [
    {
        selector: 'h1',
        action: 'set',
        attribute: 'html',
        value: 'new text',
    },
    {
        selector: '.get-started',
        action: 'remove',
        attribute: 'class',
        value: 'green',
    },
    {
        selector: 'a',
        action: 'append',
        attribute: 'href',
        value: '?foo',
    },
    {
        selector: 'a',
        action: 'set',
        attribute: 'position',
        parentSelector: '.header',
        insertBeforeSelector: '.menu-button',
    },
];
mutations.forEach((m) => mutate.declarative(m));
```

## How it Works

When you create a mutation, we start watching the document for elements matching the selector to appear. We do this with a single shared MutationObserver on the body.

When a matching element is found, we attach a separate MutationObserver filtered to the exact attribute being mutated. If an external change happens (e.g. from a React render), we re-apply your mutation on top of the new baseline value.

When `revert` is called, we undo the change and go back to the last externally set value. We also disconnect the element's MutationObserver to save resources.

## Pausing / Resuming the Global MutationObserver

While the library is waiting for elements to appear, it runs `document.querySelectorAll` every time a batch of elements is added or removed from the DOM.

This is performant enough in most cases, but if you want more control, you can pause and resume the global MutationObserver on demand.

One example use case is if you are making a ton of DOM changes that you know have nothing to do with the elements you are watching. You would pause right before making the changes and resume after.

```ts
import { disconnectGlobalObserver, connectGlobalObserver } from 'dom-mutator';

// Pause
disconnectGlobalObserver();

// ... do a bunch of expensive DOM updates

// Resume
connectGlobalObserver();
```

## Developing

Built with [TSDX](https://github.com/formium/tsdx).

`npm start` or `yarn start` to rebuild on file change.

`npm run build` or `yarn build` to bundle the package to the `dist` folder.

`npm test --coverage` or `yarn test --coverage` to run the Jest test suite with coverage report.

`npm run lint --fix` or `yarn lint --fix` to lint your code and autofix problems when possible.
