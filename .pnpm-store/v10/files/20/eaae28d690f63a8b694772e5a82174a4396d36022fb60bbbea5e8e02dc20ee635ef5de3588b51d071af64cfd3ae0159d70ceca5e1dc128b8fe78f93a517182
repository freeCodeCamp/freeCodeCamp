# Tapable

The tapable package expose many Hook classes, which can be used to create hooks for plugins.

``` javascript
const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");
```

## Installation

``` shell
npm install --save tapable
```

## Usage

All Hook constructors take one optional argument, which is a list of argument names as strings.

``` js
const hook = new SyncHook(["arg1", "arg2", "arg3"]);
```

The best practice is to expose all hooks of a class in a `hooks` property:

``` js
class Car {
	constructor() {
		this.hooks = {
			accelerate: new SyncHook(["newSpeed"]),
			brake: new SyncHook(),
			calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
		};
	}

	/* ... */
}
```

Other people can now use these hooks:

``` js
const myCar = new Car();

// Use the tap method to add a consument
myCar.hooks.brake.tap("WarningLampPlugin", () => warningLamp.on());
```

It's required to pass a name to identify the plugin/reason.

You may receive arguments:

``` js
myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
```

For sync hooks, `tap` is the only valid method to add a plugin. Async hooks also support async plugins:

``` js
myCar.hooks.calculateRoutes.tapPromise("GoogleMapsPlugin", (source, target, routesList) => {
	// return a promise
	return google.maps.findRoute(source, target).then(route => {
		routesList.add(route);
	});
});
myCar.hooks.calculateRoutes.tapAsync("BingMapsPlugin", (source, target, routesList, callback) => {
	bing.findRoute(source, target, (err, route) => {
		if(err) return callback(err);
		routesList.add(route);
		// call the callback
		callback();
	});
});

// You can still use sync plugins
myCar.hooks.calculateRoutes.tap("CachedRoutesPlugin", (source, target, routesList) => {
	const cachedRoute = cache.get(source, target);
	if(cachedRoute)
		routesList.add(cachedRoute);
})
```

The class declaring these hooks need to call them:

``` js
class Car {
	/* ... */

	setSpeed(newSpeed) {
		this.hooks.accelerate.call(newSpeed);
	}

	useNavigationSystemPromise(source, target) {
		const routesList = new List();
		return this.hooks.calculateRoutes.promise(source, target, routesList).then(() => {
			return routesList.getRoutes();
		});
	}

	useNavigationSystemAsync(source, target, callback) {
		const routesList = new List();
		this.hooks.calculateRoutes.callAsync(source, target, routesList, err => {
			if(err) return callback(err);
			callback(null, routesList.getRoutes());
		});
	}
}
```

The Hook will compile a method with the most efficient way of running your plugins. It generates code depending on:
* The number of registered plugins (none, one, many)
* The kind of registered plugins (sync, async, promise)
* The used call method (sync, async, promise)
* The number of arguments
* Whether interception is used

This ensures fastest possible execution.

## Hook types

Each hook can be tapped with one or several functions. How they are executed depends on the hook type:

* Basic hook (without “Waterfall”, “Bail” or “Loop” in its name). This hook simply calls every function it tapped in a row.

* __Waterfall__. A waterfall hook also calls each tapped function in a row. Unlike the basic hook, it passes a return value from each function to the next function.

* __Bail__. A bail hook allows exiting early. When any of the tapped function returns anything, the bail hook will stop executing the remaining ones.

* __Loop__. TODO

Additionally, hooks can be synchronous or asynchronous. To reflect this, there’re “Sync”, “AsyncSeries”, and “AsyncParallel” hook classes:

* __Sync__. A sync hook can only be tapped with synchronous functions (using `myHook.tap()`).

* __AsyncSeries__. An async-series hook can be tapped with synchronous, callback-based and promise-based functions (using `myHook.tap()`, `myHook.tapAsync()` and `myHook.tapPromise()`). They call each async method in a row.

* __AsyncParallel__. An async-parallel hook can also be tapped with synchronous, callback-based and promise-based functions (using `myHook.tap()`, `myHook.tapAsync()` and `myHook.tapPromise()`). However, they run each async method in parallel.

The hook type is reflected in its class name. E.g., `AsyncSeriesWaterfallHook` allows asynchronous functions and runs them in series, passing each function’s return value into the next function.


## Interception

All Hooks offer an additional interception API:

``` js
myCar.hooks.calculateRoutes.intercept({
	call: (source, target, routesList) => {
		console.log("Starting to calculate routes");
	},
	register: (tapInfo) => {
		// tapInfo = { type: "promise", name: "GoogleMapsPlugin", fn: ... }
		console.log(`${tapInfo.name} is doing its job`);
		return tapInfo; // may return a new tapInfo object
	}
})
```

**call**: `(...args) => void` Adding `call` to your interceptor will trigger when hooks are triggered. You have access to the hooks arguments.

**tap**: `(tap: Tap) => void` Adding `tap` to your interceptor will trigger when a plugin taps into a hook. Provided is the `Tap` object. `Tap` object can't be changed.

**loop**: `(...args) => void` Adding `loop` to your interceptor will trigger for each loop of a looping hook.

**register**: `(tap: Tap) => Tap | undefined` Adding `register` to your interceptor will trigger for each added `Tap` and allows to modify it.

## Context

Plugins and interceptors can opt-in to access an optional `context` object, which can be used to pass arbitrary values to subsequent plugins and interceptors.

``` js
myCar.hooks.accelerate.intercept({
	context: true,
	tap: (context, tapInfo) => {
		// tapInfo = { type: "sync", name: "NoisePlugin", fn: ... }
		console.log(`${tapInfo.name} is doing it's job`);

		// `context` starts as an empty object if at least one plugin uses `context: true`.
		// If no plugins use `context: true`, then `context` is undefined.
		if (context) {
			// Arbitrary properties can be added to `context`, which plugins can then access.
			context.hasMuffler = true;
		}
	}
});

myCar.hooks.accelerate.tap({
	name: "NoisePlugin",
	context: true
}, (context, newSpeed) => {
	if (context && context.hasMuffler) {
		console.log("Silence...");
	} else {
		console.log("Vroom!");
	}
});
```

## HookMap

A HookMap is a helper class for a Map with Hooks

``` js
const keyedHook = new HookMap(key => new SyncHook(["arg"]))
```

``` js
keyedHook.tap("some-key", "MyPlugin", (arg) => { /* ... */ });
keyedHook.tapAsync("some-key", "MyPlugin", (arg, callback) => { /* ... */ });
keyedHook.tapPromise("some-key", "MyPlugin", (arg) => { /* ... */ });
```

``` js
const hook = keyedHook.get("some-key");
if(hook !== undefined) {
	hook.callAsync("arg", err => { /* ... */ });
}
```

## Hook/HookMap interface

Public:

``` ts
interface Hook {
	tap: (name: string | Tap, fn: (context?, ...args) => Result) => void,
	tapAsync: (name: string | Tap, fn: (context?, ...args, callback: (err, result: Result) => void) => void) => void,
	tapPromise: (name: string | Tap, fn: (context?, ...args) => Promise<Result>) => void,
	intercept: (interceptor: HookInterceptor) => void
}

interface HookInterceptor {
	call: (context?, ...args) => void,
	loop: (context?, ...args) => void,
	tap: (context?, tap: Tap) => void,
	register: (tap: Tap) => Tap,
	context: boolean
}

interface HookMap {
	for: (key: any) => Hook,
	tap: (key: any, name: string | Tap, fn: (context?, ...args) => Result) => void,
	tapAsync: (key: any, name: string | Tap, fn: (context?, ...args, callback: (err, result: Result) => void) => void) => void,
	tapPromise: (key: any, name: string | Tap, fn: (context?, ...args) => Promise<Result>) => void,
	intercept: (interceptor: HookMapInterceptor) => void
}

interface HookMapInterceptor {
	factory: (key: any, hook: Hook) => Hook
}

interface Tap {
	name: string,
	type: string
	fn: Function,
	stage: number,
	context: boolean
}
```

Protected (only for the class containing the hook):

``` ts
interface Hook {
	isUsed: () => boolean,
	call: (...args) => Result,
	promise: (...args) => Promise<Result>,
	callAsync: (...args, callback: (err, result: Result) => void) => void,
}

interface HookMap {
	get: (key: any) => Hook | undefined,
	for: (key: any) => Hook
}
```

## MultiHook

A helper Hook-like class to redirect taps to multiple other hooks:

``` js
const { MultiHook } = require("tapable");

this.hooks.allHooks = new MultiHook([this.hooks.hookA, this.hooks.hookB]);
```
