# clipboard.js

[![Build Status](http://img.shields.io/travis/zenorocha/clipboard.js/master.svg?style=flat)](https://travis-ci.org/zenorocha/clipboard.js)
![Killing Flash](https://img.shields.io/badge/killing-flash-brightgreen.svg?style=flat)

> Modern copy to clipboard. No Flash. Just 3kb gzipped.

<a href="https://clipboardjs.com/"><img width="728" src="https://cloud.githubusercontent.com/assets/398893/16165747/a0f6fc46-349a-11e6-8c9b-c5fd58d9099c.png" alt="Demo"></a>

## Why

Copying text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load. But most of all, it shouldn't depend on Flash or any bloated framework.

That's why clipboard.js exists.

## Install

You can get it on npm.

```
npm install clipboard --save
```

Or bower, too.

```
bower install clipboard --save
```

If you're not into package management, just [download a ZIP](https://github.com/zenorocha/clipboard.js/archive/master.zip) file.

## Setup

First, include the script located on the `dist` folder or load it from [a third-party CDN provider](https://github.com/zenorocha/clipboard.js/wiki/CDN-Providers).

```html
<script src="dist/clipboard.min.js"></script>
```

Now, you need to instantiate it by [passing a DOM selector](https://github.com/zenorocha/clipboard.js/blob/master/demo/constructor-selector.html#L18), [HTML element](https://github.com/zenorocha/clipboard.js/blob/master/demo/constructor-node.html#L16-L17), or [list of HTML elements](https://github.com/zenorocha/clipboard.js/blob/master/demo/constructor-nodelist.html#L18-L19).

```js
new Clipboard('.btn');
```

Internally, we need to fetch all elements that matches with your selector and attach event listeners for each one. But guess what? If you have hundreds of matches, this operation can consume a lot of memory.

For this reason we use [event delegation](http://stackoverflow.com/questions/1687296/what-is-dom-event-delegation) which replaces multiple event listeners with just a single listener. After all, [#perfmatters](https://twitter.com/hashtag/perfmatters).

# Usage

We're living a _declarative renaissance_, that's why we decided to take advantage of [HTML5 data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) for better usability.

### Copy text from another element

A pretty common use case is to copy content from another element. You can do that by adding a `data-clipboard-target` attribute in your trigger element.

The value you include on this attribute needs to match another's element selector.

<a href="https://clipboardjs.com/#example-target"><img width="473" alt="example-2" src="https://cloud.githubusercontent.com/assets/398893/9983467/a4946aaa-5fb1-11e5-9780-f09fcd7ca6c8.png"></a>

```html
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```

### Cut text from another element

Additionally, you can define a `data-clipboard-action` attribute to specify if you want to either `copy` or `cut` content.

If you omit this attribute, `copy` will be used by default.

<a href="https://clipboardjs.com/#example-action"><img width="473" alt="example-3" src="https://cloud.githubusercontent.com/assets/398893/10000358/7df57b9c-6050-11e5-9cd1-fbc51d2fd0a7.png"></a>

```html
<!-- Target -->
<textarea id="bar">Mussum ipsum cacilds...</textarea>

<!-- Trigger -->
<button class="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
    Cut to clipboard
</button>
```

As you may expect, the `cut` action only works on `<input>` or `<textarea>` elements.

### Copy text from attribute

Truth is, you don't even need another element to copy its content from. You can just include a `data-clipboard-text` attribute in your trigger element.

<a href="https://clipboardjs.com/#example-text"><img width="147" alt="example-1" src="https://cloud.githubusercontent.com/assets/398893/10000347/6e16cf8c-6050-11e5-9883-1c5681f9ec45.png"></a>

```html
<!-- Trigger -->
<button class="btn" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
    Copy to clipboard
</button>
```

## Events

There are cases where you'd like to show some user feedback or capture what has been selected after a copy/cut operation.

That's why we fire custom events such as `success` and `error` for you to listen and implement your custom logic.

```js
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
```

For a live demonstration, open this [site](https://clipboardjs.com/) and just your console :)

## Advanced Options

If you don't want to modify your HTML, there's a pretty handy imperative API for you to use. All you need to do is declare a function, do your thing, and return a value.

For instance, if you want to dynamically set a `target`, you'll need to return a Node.

```js
new Clipboard('.btn', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
});
```

If you want to dynamically set a `text`, you'll return a String.

```js
new Clipboard('.btn', {
    text: function(trigger) {
        return trigger.getAttribute('aria-label');
    }
});
```

Also, if you are working with single page apps, you may want to manage the lifecycle of the DOM more precisely. Here's how you clean up the events and objects that we create.

```js
var clipboard = new Clipboard('.btn');
clipboard.destroy();
```

## Browser Support

This library relies on both [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) and [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) APIs. The first one is [supported by all browsers](http://caniuse.com/#search=selection) while the second one is supported in the following browsers.

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 10+ ✔ |

The good news is that clipboard.js gracefully degrades if you need to support older browsers. All you have to do is show a tooltip saying `Copied!` when `success` event is called and `Press Ctrl+C to copy` when `error` event is called because the text is already selected.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
