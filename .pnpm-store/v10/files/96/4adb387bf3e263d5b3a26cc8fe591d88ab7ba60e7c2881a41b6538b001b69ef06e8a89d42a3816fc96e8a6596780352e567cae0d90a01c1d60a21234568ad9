# WebIDL Type Conversions on JavaScript Values

This package implements, in JavaScript, the algorithms to convert a given JavaScript value according to a given [WebIDL](http://heycam.github.io/webidl/) [type](http://heycam.github.io/webidl/#idl-types).

The goal is that you should be able to write code like

```js
const conversions = require("webidl-conversions");

function doStuff(x, y) {
    x = conversions["boolean"](x);
    y = conversions["unsigned long"](y);
    // actual algorithm code here
}
```

and your function `doStuff` will behave the same as a WebIDL operation declared as

```webidl
void doStuff(boolean x, unsigned long y);
```

## API

This package's main module's default export is an object with a variety of methods, each corresponding to a different WebIDL type. Each method, when invoked on a JavaScript value, will give back the new JavaScript value that results after passing through the WebIDL conversion rules. (See below for more details on what that means.) Alternately, the method could throw an error, if the WebIDL algorithm is specified to do so: for example `conversions["float"](NaN)` [will throw a `TypeError`](http://heycam.github.io/webidl/#es-float).

## Status

All of the numeric types are implemented (float being implemented as double) and some others are as well - check the source for all of them. This list will grow over time in service of the [HTML as Custom Elements](https://github.com/dglazkov/html-as-custom-elements) project, but in the meantime, pull requests welcome!

I'm not sure yet what the strategy will be for modifiers, e.g. [`[Clamp]`](http://heycam.github.io/webidl/#Clamp). Maybe something like `conversions["unsigned long"](x, { clamp: true })`? We'll see.

We might also want to extend the API to give better error messages, e.g. "Argument 1 of HTMLMediaElement.fastSeek is not a finite floating-point value" instead of "Argument is not a finite floating-point value." This would require passing in more information to the conversion functions than we currently do.

## Background

What's actually going on here, conceptually, is pretty weird. Let's try to explain.

WebIDL, as part of its madness-inducing design, has its own type system. When people write algorithms in web platform specs, they usually operate on WebIDL values, i.e. instances of WebIDL types. For example, if they were specifying the algorithm for our `doStuff` operation above, they would treat `x` as a WebIDL value of [WebIDL type `boolean`](http://heycam.github.io/webidl/#idl-boolean). Crucially, they would _not_ treat `x` as a JavaScript variable whose value is either the JavaScript `true` or `false`. They're instead working in a different type system altogether, with its own rules.

Separately from its type system, WebIDL defines a ["binding"](http://heycam.github.io/webidl/#ecmascript-binding) of the type system into JavaScript. This contains rules like: when you pass a JavaScript value to the JavaScript method that manifests a given WebIDL operation, how does that get converted into a WebIDL value? For example, a JavaScript `true` passed in the position of a WebIDL `boolean` argument becomes a WebIDL `true`. But, a JavaScript `true` passed in the position of a [WebIDL `unsigned long`](http://heycam.github.io/webidl/#idl-unsigned-long) becomes a WebIDL `1`. And so on.

Finally, we have the actual implementation code. This is usually C++, although these days [some smart people are using Rust](https://github.com/servo/servo). The implementation, of course, has its own type system. So when they implement the WebIDL algorithms, they don't actually use WebIDL values, since those aren't "real" outside of specs. Instead, implementations apply the WebIDL binding rules in such a way as to convert incoming JavaScript values into C++ values. For example, if code in the browser called `doStuff(true, true)`, then the implementation code would eventually receive a C++ `bool` containing `true` and a C++ `uint32_t` containing `1`.

The upside of all this is that implementations can abstract all the conversion logic away, letting WebIDL handle it, and focus on implementing the relevant methods in C++ with values of the correct type already provided. That is payoff of WebIDL, in a nutshell.

And getting to that payoff is the goal of _this_ project—but for JavaScript implementations, instead of C++ ones. That is, this library is designed to make it easier for JavaScript developers to write functions that behave like a given WebIDL operation. So conceptually, the conversion pipeline, which in its general form is JavaScript values ↦ WebIDL values ↦ implementation-language values, in this case becomes JavaScript values ↦ WebIDL values ↦ JavaScript values. And that intermediate step is where all the logic is performed: a JavaScript `true` becomes a WebIDL `1` in an unsigned long context, which then becomes a JavaScript `1`.

## Don't Use This

Seriously, why would you ever use this? You really shouldn't. WebIDL is … not great, and you shouldn't be emulating its semantics. If you're looking for a generic argument-processing library, you should find one with better rules than those from WebIDL. In general, your JavaScript should not be trying to become more like WebIDL; if anything, we should fix WebIDL to make it more like JavaScript.

The _only_ people who should use this are those trying to create faithful implementations (or polyfills) of web platform interfaces defined in WebIDL.
