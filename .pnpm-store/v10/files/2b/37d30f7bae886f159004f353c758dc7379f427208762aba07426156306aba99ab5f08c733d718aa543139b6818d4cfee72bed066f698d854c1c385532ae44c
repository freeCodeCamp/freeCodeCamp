![Hookified](site/logo.svg)

# Event Emitting and Middleware Hooks

[![tests](https://github.com/jaredwray/hookified/actions/workflows/tests.yaml/badge.svg)](https://github.com/jaredwray/hookified/actions/workflows/tests.yaml)
[![GitHub license](https://img.shields.io/github/license/jaredwray/hookified)](https://github.com/jaredwray/hookified/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/jaredwray/hookified/graph/badge.svg?token=nKkVklTFdA)](https://codecov.io/gh/jaredwray/hookified)
[![npm](https://img.shields.io/npm/dm/hookified)](https://npmjs.com/package/hookified)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/hookified/badge)](https://www.jsdelivr.com/package/npm/hookified)
[![npm](https://img.shields.io/npm/v/hookified)](https://npmjs.com/package/hookified)

# Features
- Simple replacement for EventEmitter
- Async / Sync Middleware Hooks for Your Methods 
- ESM / CJS with Types and Nodejs 20+
- Browser Support and Delivered via CDN
- Ability to throw errors in hooks
- Ability to pass in a logger (such as Pino) for errors
- Enforce consistent hook naming conventions with `enforceBeforeAfter`
- Deprecation warnings for hooks with `deprecatedHooks`
- Control deprecated hook execution with `allowDeprecated`
- No package dependencies and only 200KB in size
- Fast and Efficient with [Benchmarks](#benchmarks)
- Maintained on a regular basis!

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Using it in the Browser](#using-it-in-the-browser)
- [API - Hooks](#api---hooks)
  - [.throwOnHookError](#throwhookerror)
  - [.logger](#logger)
  - [.enforceBeforeAfter](#enforcebeforeafter)
  - [.deprecatedHooks](#deprecatedhooks)
  - [.allowDeprecated](#allowdeprecated)
  - [.onHook(eventName, handler)](#onhookeventname-handler)
  - [.onHookEntry(hookEntry)](#onhookentryhookentry)
  - [.addHook(eventName, handler)](#addhookeventname-handler)
  - [.onHooks(Array)](#onhooksarray)
  - [.onceHook(eventName, handler)](#oncehookeventname-handler)
  - [.prependHook(eventName, handler)](#prependhookeventname-handler)
  - [.prependOnceHook(eventName, handler)](#prependoncehookeventname-handler)
  - [.removeHook(eventName)](#removehookeventname)
  - [.removeHooks(Array)](#removehooksarray)
  - [.hook(eventName, ...args)](#hookeventname-args)
  - [.callHook(eventName, ...args)](#callhookeventname-args)
  - [.beforeHook(eventName, ...args)](#beforehookeventname-args)
  - [.afterHook(eventName, ...args)](#afterhookeventname-args)
  - [.hookSync(eventName, ...args)](#hooksync-eventname-args)
  - [.hooks](#hooks)
  - [.getHooks(eventName)](#gethookseventname)
  - [.clearHooks(eventName)](#clearhookeventname)
- [API - Events](#api---events)
  - [.throwOnEmitError](#throwonemitterror)
  - [.throwOnEmptyListeners](#throwonemptylisteners)
  - [.on(eventName, handler)](#oneventname-handler)
  - [.off(eventName, handler)](#offeventname-handler)
  - [.emit(eventName, ...args)](#emiteventname-args)
  - [.listeners(eventName)](#listenerseventname)
  - [.removeAllListeners(eventName)](#removealllistenerseventname)
  - [.setMaxListeners(maxListeners: number)](#setmaxlistenersmaxlisteners-number)
  - [.once(eventName, handler)](#oneventname-handler-1)
  - [.prependListener(eventName, handler)](#prependlistenereventname-handler)
  - [.prependOnceListener(eventName, handler)](#prependoncelistenereventname-handler)
  - [.eventNames()](#eventnames)
  - [.listenerCount(eventName?)](#listenercounteventname)
  - [.rawListeners(eventName?)](#rawlistenerseventname)
- [Logging](#logging)
- [Benchmarks](#benchmarks)
- [How to Contribute](#how-to-contribute)
- [License and Copyright](#license-and-copyright)

# Installation
```bash
npm install hookified --save
```

# Usage
This was built because we constantly wanted hooks and events extended on libraires we are building such as [Keyv](https://keyv.org) and [Cacheable](https://cacheable.org). This is a simple way to add hooks and events to your classes.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World'); //using Emittery
  }

  //with hooks you can pass data in and if they are subscribed via onHook they can modify the data
  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}
```

You can even pass in multiple arguments to the hooks:

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    let data2 = { some: 'data2' };
    // do something
    await this.hook('before:myMethod2', data, data2);

    return data;
  }
}
```

# Using it in the Browser

```html
<script type="module">
  import { Hookified } from 'https://cdn.jsdelivr.net/npm/hookified/dist/browser/index.js';

  class MyClass extends Hookified {
    constructor() {
      super();
    }

    async myMethodEmittingEvent() {
      this.emit('message', 'Hello World'); //using Emittery
    }

    //with hooks you can pass data in and if they are subscribed via onHook they can modify the data
    async myMethodWithHooks() Promise<any> {
      let data = { some: 'data' };
      // do something
      await this.hook('before:myMethod2', data);

      return data;
    }
  }
</script>
```

if you are not using ESM modules, you can use the following:

```html
<script src="https://cdn.jsdelivr.net/npm/hookified/dist/browser/index.global.js"></script>
<script>
  class MyClass extends Hookified {
    constructor() {
      super();
    }

    async myMethodEmittingEvent() {
      this.emit('message', 'Hello World'); //using Emittery
    }

    //with hooks you can pass data in and if they are subscribed via onHook they can modify the data
    async myMethodWithHooks() Promise<any> {
      let data = { some: 'data' };
      // do something
      await this.hook('before:myMethod2', data);

      return data;
    }
  }
</script>
```

# API - Hooks

## .throwOnHookError

If set to true, errors thrown in hooks will be thrown. If set to false, errors will be only emitted.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super({ throwOnHookError: true });
  }
}

const myClass = new MyClass();

console.log(myClass.throwOnHookError); // true. because it is set in super

try {
  myClass.onHook('error-event', async () => {
    throw new Error('error');
  });

  await myClass.hook('error-event');
} catch (error) {
  console.log(error.message); // error
}

myClass.throwOnHookError = false;
console.log(myClass.throwOnHookError); // false
```

## .logger
If set, errors thrown in hooks will be logged to the logger. If not set, errors will be only emitted.

```javascript
import { Hookified } from 'hookified';
import pino from 'pino';

const logger = pino(); // create a logger instance that is compatible with Logger type

class MyClass extends Hookified {
  constructor() {
    super({ logger });
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async () => {
  throw new Error('error');
});

// when you call before:myMethod2 it will log the error to the logger
await myClass.hook('before:myMethod2');
```

## .enforceBeforeAfter

If set to true, enforces that all hook names must start with 'before' or 'after'. This is useful for maintaining consistent hook naming conventions in your application. Default is false.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super({ enforceBeforeAfter: true });
  }
}

const myClass = new MyClass();

console.log(myClass.enforceBeforeAfter); // true

// These will work fine
myClass.onHook('beforeSave', async () => {
  console.log('Before save hook');
});

myClass.onHook('afterSave', async () => {
  console.log('After save hook');
});

myClass.onHook('before:validation', async () => {
  console.log('Before validation hook');
});

// This will throw an error
try {
  myClass.onHook('customEvent', async () => {
    console.log('This will not work');
  });
} catch (error) {
  console.log(error.message); // Hook event "customEvent" must start with "before" or "after" when enforceBeforeAfter is enabled
}

// You can also change it dynamically
myClass.enforceBeforeAfter = false;
myClass.onHook('customEvent', async () => {
  console.log('This will work now');
});
```

The validation applies to all hook-related methods:
- `onHook()`, `addHook()`, `onHookEntry()`, `onHooks()`
- `prependHook()`, `onceHook()`, `prependOnceHook()`
- `hook()`, `callHook()`
- `getHooks()`, `removeHook()`, `removeHooks()`

Note: The `beforeHook()` and `afterHook()` helper methods automatically generate proper hook names and work regardless of the `enforceBeforeAfter` setting.

## .deprecatedHooks

A Map of deprecated hook names to deprecation messages. When a deprecated hook is used, a warning will be emitted via the 'warn' event and logged to the logger (if available). Default is an empty Map.

```javascript
import { Hookified } from 'hookified';

// Define deprecated hooks with custom messages
const deprecatedHooks = new Map([
  ['oldHook', 'Use newHook instead'],
  ['legacyMethod', 'This hook will be removed in v2.0'],
  ['deprecatedFeature', ''] // Empty message - will just say "deprecated"
]);

class MyClass extends Hookified {
  constructor() {
    super({ deprecatedHooks });
  }
}

const myClass = new MyClass();

console.log(myClass.deprecatedHooks); // Map with deprecated hooks

// Listen for deprecation warnings
myClass.on('warn', (event) => {
  console.log(`Deprecation warning: ${event.message}`);
  // event.hook contains the hook name
  // event.message contains the full warning message
});

// Using a deprecated hook will emit warnings
myClass.onHook('oldHook', () => {
  console.log('This hook is deprecated');
});
// Output: Hook "oldHook" is deprecated: Use newHook instead

// Using a deprecated hook with empty message
myClass.onHook('deprecatedFeature', () => {
  console.log('This hook is deprecated');
});
// Output: Hook "deprecatedFeature" is deprecated

// You can also set deprecated hooks dynamically
myClass.deprecatedHooks.set('anotherOldHook', 'Please migrate to the new API');

// Works with logger if provided
import pino from 'pino';
const logger = pino();

const myClassWithLogger = new Hookified({ 
  deprecatedHooks,
  logger 
});

// Deprecation warnings will be logged to logger.warn
```

The deprecation warning system applies to all hook-related methods:
- Registration: `onHook()`, `addHook()`, `onHookEntry()`, `onHooks()`, `prependHook()`, `onceHook()`, `prependOnceHook()`
- Execution: `hook()`, `callHook()`
- Management: `getHooks()`, `removeHook()`, `removeHooks()`

Deprecation warnings are emitted in two ways:
1. **Event**: A 'warn' event is emitted with `{ hook: string, message: string }`
2. **Logger**: Logged to `logger.warn()` if a logger is configured and has a `warn` method

## .allowDeprecated

Controls whether deprecated hooks are allowed to be registered and executed. Default is true. When set to false, deprecated hooks will still emit warnings but will be prevented from registration and execution.

```javascript
import { Hookified } from 'hookified';

const deprecatedHooks = new Map([
  ['oldHook', 'Use newHook instead']
]);

class MyClass extends Hookified {
  constructor() {
    super({ deprecatedHooks, allowDeprecated: false });
  }
}

const myClass = new MyClass();

console.log(myClass.allowDeprecated); // false

// Listen for deprecation warnings (still emitted even when blocked)
myClass.on('warn', (event) => {
  console.log(`Warning: ${event.message}`);
});

// Try to register a deprecated hook - will emit warning but not register
myClass.onHook('oldHook', () => {
  console.log('This will never execute');
});
// Output: Warning: Hook "oldHook" is deprecated: Use newHook instead

// Verify hook was not registered
console.log(myClass.getHooks('oldHook')); // undefined

// Try to execute a deprecated hook - will emit warning but not execute
await myClass.hook('oldHook');
// Output: Warning: Hook "oldHook" is deprecated: Use newHook instead
// (but no handlers execute)

// Non-deprecated hooks work normally
myClass.onHook('validHook', () => {
  console.log('This works fine');
});

console.log(myClass.getHooks('validHook')); // [handler function]

// You can dynamically change the setting
myClass.allowDeprecated = true;

// Now deprecated hooks can be registered and executed
myClass.onHook('oldHook', () => {
  console.log('Now this works');
});

console.log(myClass.getHooks('oldHook')); // [handler function]
```

**Behavior when `allowDeprecated` is false:**
- **Registration**: All hook registration methods (`onHook`, `addHook`, `prependHook`, etc.) will emit warnings but skip registration
- **Execution**: Hook execution methods (`hook`, `callHook`) will emit warnings but skip execution  
- **Management**: Hook management methods (`getHooks`, `removeHook`) will emit warnings and return undefined/skip operations
- **Warnings**: Deprecation warnings are always emitted regardless of `allowDeprecated` setting

**Use cases:**
- **Development**: Keep `allowDeprecated: true` to maintain functionality while seeing warnings
- **Testing**: Set `allowDeprecated: false` to ensure no deprecated hooks are accidentally used
- **Migration**: Gradually disable deprecated hooks during API transitions
- **Production**: Disable deprecated hooks to prevent legacy code execution

## .onHook(eventName, handler)

Subscribe to a hook event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});
```

## .onHookEntry(hookEntry)

This allows you to create a hook with the `HookEntry` type which includes the event and handler. This is useful for creating hooks with a single object.

```javascript
import { Hookified, HookEntry } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHookEntry({
  event: 'before:myMethod2',
  handler: async (data) => {
    data.some = 'new data';
  },
});
```

## .addHook(eventName, handler)

This is an alias for `.onHook(eventName, handler)` for backwards compatibility.

## .onHooks(Array)

Subscribe to multiple hook events at once

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    await this.hook('before:myMethodWithHooks', data);
    
    // do something here with the data
    data.some = 'new data';

    await this.hook('after:myMethodWithHooks', data);

    return data;
  }
}

const myClass = new MyClass();
const hooks = [
  {
    event: 'before:myMethodWithHooks',
    handler: async (data) => {
      data.some = 'new data1';
    },
  },
  {
    event: 'after:myMethodWithHooks',
    handler: async (data) => {
      data.some = 'new data2';
    },
  },
];
```

## .onceHook(eventName, handler)

Subscribe to a hook event once.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();

myClass.onHookOnce('before:myMethod2', async (data) => {
  data.some = 'new data';
});

myClass.myMethodWithHooks();

console.log(myClass.hooks.length); // 0
```

## .prependHook(eventName, handler)

Subscribe to a hook event before all other hooks.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});
myClass.preHook('before:myMethod2', async (data) => {
  data.some = 'will run before new data';
});
```

## .prependOnceHook(eventName, handler)

Subscribe to a hook event before all other hooks. After it is used once it will be removed.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});
myClass.preHook('before:myMethod2', async (data) => {
  data.some = 'will run before new data';
});
```

## .removeHook(eventName)

Unsubscribe from a hook event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
const handler = async (data) => {
  data.some = 'new data';
};

myClass.onHook('before:myMethod2', handler);

myClass.removeHook('before:myMethod2', handler);
```

## .removeHooks(Array)
Unsubscribe from multiple hooks.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    await this.hook('before:myMethodWithHooks', data);
    
    // do something
    data.some = 'new data';
    await this.hook('after:myMethodWithHooks', data);

    return data;
  }
}

const myClass = new MyClass();

const hooks = [
  {
    event: 'before:myMethodWithHooks',
    handler: async (data) => {
      data.some = 'new data1';
    },
  },
  {
    event: 'after:myMethodWithHooks',
    handler: async (data) => {
      data.some = 'new data2';
    },
  },
];
myClass.onHooks(hooks);

// remove all hooks
myClass.removeHook(hooks);
```

## .hook(eventName, ...args)

Run a hook event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}
```

in this example we are passing multiple arguments to the hook:

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    let data2 = { some: 'data2' };
    // do something
    await this.hook('before:myMethod2', data, data2);

    return data;
  }
}

const myClass = new MyClass();

myClass.onHook('before:myMethod2', async (data, data2) => {
  data.some = 'new data';
  data2.some = 'new data2';
});

await myClass.myMethodWithHooks();
```

## .callHook(eventName, ...args)

This is an alias for `.hook(eventName, ...args)` for backwards compatibility.

## .beforeHook(eventName, ...args)

This is a helper function that will prepend a hook name with `before:`.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // the event name will be `before:myMethod2`
    await this.beforeHook('myMethod2', data);

    return data;
  }
}
```

## .afterHook(eventName, ...args)

This is a helper function that will prepend a hook name with `after:`.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // the event name will be `after:myMethod2`
    await this.afterHook('myMethod2', data);

    return data;
  }
}
```

## .hookSync(eventName, ...args)

Run a hook event synchronously. Async handlers (functions declared with `async` keyword) are silently skipped and only synchronous handlers are executed.

> **Note:** The `.hook()` method is preferred as it executes both sync and async functions. Use `.hookSync()` only when you specifically need synchronous execution.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  myMethodWithSyncHooks() {
    let data = { some: 'data' };
    // Only synchronous handlers will execute
    this.hookSync('before:myMethod', data);

    return data;
  }
}

const myClass = new MyClass();

// This sync handler will execute
myClass.onHook('before:myMethod', (data) => {
  data.some = 'modified';
});

// This async handler will be silently skipped
myClass.onHook('before:myMethod', async (data) => {
  data.some = 'will not run';
});

myClass.myMethodWithSyncHooks(); // Only sync handler runs
```

## .hooks

Get all hooks.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});

console.log(myClass.hooks);
```

## .getHooks(eventName)

Get all hooks for an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();
myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});

console.log(myClass.getHooks('before:myMethod2'));
```

## .clearHooks(eventName)

Clear all hooks for an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}

const myClass = new MyClass();

myClass.onHook('before:myMethod2', async (data) => {
  data.some = 'new data';
});

myClass.clearHooks('before:myMethod2');
```

# API - Events

## .throwOnEmitError

If set to true, errors emitted as `error` will be thrown if there are no listeners. If set to false, errors will be only emitted.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodWithHooks() Promise<any> {
    let data = { some: 'data' };
    // do something
    await this.hook('before:myMethod2', data);

    return data;
  }
}
```

## .throwOnEmptyListeners

If set to true, errors will be thrown when emitting an `error` event with no listeners. This follows the standard Node.js EventEmitter behavior. Default is false. In version 2, this will be set to true by default.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super({ throwOnEmptyListeners: true });
  }
}

const myClass = new MyClass();

console.log(myClass.throwOnEmptyListeners); // true

// This will throw because there are no error listeners
try {
  myClass.emit('error', new Error('Something went wrong'));
} catch (error) {
  console.log(error.message); // Something went wrong
}

// Add an error listener - now it won't throw
myClass.on('error', (error) => {
  console.log('Error caught:', error.message);
});

myClass.emit('error', new Error('This will be caught')); // No throw, listener handles it

// You can also change it dynamically
myClass.throwOnEmptyListeners = false;
console.log(myClass.throwOnEmptyListeners); // false
```

**Difference between `throwOnEmitError` and `throwOnEmptyListeners`:**
- `throwOnEmitError`: Throws when emitting 'error' event every time.
- `throwOnEmptyListeners`: Throws only when there are NO error listeners registered

When both are set to `true`, `throwOnEmitError` takes precedence.

## .on(eventName, handler)

Subscribe to an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});
```

## .off(eventName, handler)

Unsubscribe from an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}

const myClass = new MyClass();
myClass.on('message', (message) => {
  console.log(message);
});

myClass.off('message', (message) => {
  console.log(message);
});
```

## .emit(eventName, ...args)

Emit an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}
```

## .listeners(eventName)

Get all listeners for an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});

console.log(myClass.listeners('message'));
```

## .removeAllListeners(eventName)

Remove all listeners for an event.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});

myClass.removeAllListeners('message');
```

## .setMaxListeners(maxListeners: number)

Set the maximum number of listeners and will truncate if there are already too many.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }

  async myMethodEmittingEvent() {
    this.emit('message', 'Hello World');
  }
}

const myClass = new MyClass();

myClass.setMaxListeners(1);

myClass.on('message', (message) => {
  console.log(message);
});

myClass.on('message', (message) => {
  console.log(message);
}); // this will not be added and console warning

console.log(myClass.listenerCount('message')); // 1
```

## .once(eventName, handler)

Subscribe to an event once.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.once('message', (message) => {
  console.log(message);
});

myClass.emit('message', 'Hello World');

myClass.emit('message', 'Hello World'); // this will not be called
```

## .prependListener(eventName, handler)

Prepend a listener to an event. This will be called before any other listeners.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.prependListener('message', (message) => {
  console.log(message);
});
```

## .prependOnceListener(eventName, handler)

Prepend a listener to an event once. This will be called before any other listeners.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.prependOnceListener('message', (message) => {
  console.log(message);
});

myClass.emit('message', 'Hello World');
```

## .eventNames()

Get all event names.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});

console.log(myClass.eventNames());
```

## .listenerCount(eventName?)

Get the count of listeners for an event or all events if evenName not provided.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});

console.log(myClass.listenerCount('message')); // 1
```

## .rawListeners(eventName?)

Get all listeners for an event or all events if evenName not provided.

```javascript
import { Hookified } from 'hookified';

class MyClass extends Hookified {
  constructor() {
    super();
  }
}

const myClass = new MyClass();

myClass.on('message', (message) => {
  console.log(message);
});

console.log(myClass.rawListeners('message'));
```

# Logging

Hookified integrates logging directly into the event system. When a logger is configured, all emitted events are automatically logged to the appropriate log level based on the event name.

## How It Works

When you emit an event, Hookified automatically sends the event data to the configured logger using the appropriate log method:

| Event Name | Logger Method |
|------------|---------------|
| `error`    | `logger.error()` |
| `warn`     | `logger.warn()` |
| `debug`    | `logger.debug()` |
| `trace`    | `logger.trace()` |
| `fatal`    | `logger.fatal()` |
| Any other  | `logger.info()` |

The logger receives two arguments:
1. **message**: A string extracted from the event data (error messages, object messages, or JSON stringified data)
2. **context**: An object containing `{ event: eventName, data: originalData }`

## Setting Up a Logger

Any logger that implements the `Logger` interface is compatible. This includes popular loggers like [Pino](https://github.com/pinojs/pino), [Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan), and others.

```typescript
type Logger = {
  trace: (message: string, ...args: unknown[]) => void;
  debug: (message: string, ...args: unknown[]) => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
  fatal: (message: string, ...args: unknown[]) => void;
};
```

## Usage Example with Pino

```javascript
import { Hookified } from 'hookified';
import pino from 'pino';

const logger = pino();

class MyService extends Hookified {
  constructor() {
    super({ logger });
  }

  async processData(data) {
    // This will log to logger.info with the data
    this.emit('info', { action: 'processing', data });

    try {
      // ... process data
      this.emit('debug', { action: 'completed', result: 'success' });
    } catch (err) {
      // This will log to logger.error with the error message
      this.emit('error', err);
    }
  }
}

const service = new MyService();

// All events are automatically logged
service.emit('info', 'Service started');        // -> logger.info()
service.emit('warn', { message: 'Low memory' }); // -> logger.warn()
service.emit('error', new Error('Failed'));      // -> logger.error()
service.emit('custom-event', { foo: 'bar' });    // -> logger.info() (default)
```

You can also set or change the logger after instantiation:

```javascript
const service = new MyService();
service.logger = pino({ level: 'debug' });

// Or remove the logger
service.logger = undefined;
```

# Benchmarks

We are doing very simple benchmarking to see how this compares to other libraries using `tinybench`. This is not a full benchmark but just a simple way to see how it performs. Our goal is to be as close or better than the other libraries including native (EventEmitter).

## Hooks

|         name          |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|-----------------------|:---------:|----------:|----------:|:--------:|----------:|
|  Hookified (v1.15.1)  |    🥇     |       5M  |    199ns  |  ±0.01%  |       5M  |
|  Hookable (v6.0.1)    |   -62%    |       2M  |    578ns  |  ±0.01%  |       2M  |

## Emits

This shows how on par `hookified` is to the native `EventEmitter` and popular `eventemitter3`. These are simple emitting benchmarks to see how it performs.

|           name            |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|---------------------------|:---------:|----------:|----------:|:--------:|----------:|
|  EventEmitter3 (v5.0.4)   |    🥇     |      14M  |     85ns  |  ±0.02%  |      12M  |
|  Hookified (v1.15.1)      |   -6.9%   |      13M  |     88ns  |  ±0.02%  |      11M  |
|  EventEmitter (v24.11.1)  |   -9.5%   |      13M  |     89ns  |  ±0.02%  |      11M  |
|  Emittery (v1.2.0)        |   -92%    |       1M  |    993ns  |  ±0.01%  |       1M  |

_Note: the `EventEmitter` version is Nodejs versioning._

# How to Contribute

Hookified is written in TypeScript and tests are written in `vitest`. To run the tests, use the following command:

To setup the environment and run the tests:

```bash
pnpm i && pnpm test
```

Note that we are using `pnpm` as our package manager. If you don't have it installed, you can install it globally with:

```bash
npm install -g pnpm
```

To contribute follow the [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

```bash
pnpm i && pnpm test
```

Note that we are using `pnpm` as our package manager. If you don't have it installed, you can install it globally with:

```bash
npm install -g pnpm
```

To contribute follow the [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

# License and Copyright

[MIT & © Jared Wray](LICENSE)




