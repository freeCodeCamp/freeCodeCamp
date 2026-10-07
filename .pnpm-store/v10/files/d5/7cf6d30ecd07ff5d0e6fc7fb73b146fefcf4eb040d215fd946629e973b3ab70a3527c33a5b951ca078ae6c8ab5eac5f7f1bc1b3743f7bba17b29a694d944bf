# GrowthBook Javascript SDK

[GrowthBook](https://www.growthbook.io) is an open source Feature Flagging and Experimentation platform.

This is the Javascript client library that lets you evaluate feature flags and run experiments (A/B tests) within a Javascript application.

![Build Status](https://github.com/growthbook/growthbook/workflows/CI/badge.svg) ![GZIP Size](https://img.shields.io/badge/gzip%20size-6.9KB-informational) ![NPM Version](https://img.shields.io/npm/v/@growthbook/growthbook)

- **No external dependencies**
- **Lightweight and fast**
- Supports both **modern browsers and Node.js**
- Local targeting and evaluation, **no HTTP requests**
- **No flickering** when running A/B tests
- Written in **Typescript** with 100% test coverage
- **Use your existing event tracking** (GA, Segment, Mixpanel, custom)
- Run mutually exclusive experiments with **namespaces**
- **Remote configuration** to change feature values without deploying new code
- Run **Visual Experiments** without writing code by using the GrowthBook Visual Editor

## Installation

```
yarn add @growthbook/growthbook
```

or

```
npm i --save @growthbook/growthbook
```

or use directly in your HTML without installing first:

```html
<!-- Creates `window.growthbook` with all of the exported classes -->
<script src="https://cdn.jsdelivr.net/npm/@growthbook/growthbook/dist/bundles/index.js"></script>
```

## Quick Usage

### Step 1: Configure your app

```js
import { GrowthBook } from "@growthbook/growthbook";

// Create a GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Enable easier debugging during development
  enableDevMode: true,
  // Update the instance in realtime as features change in GrowthBook
  subscribeToChanges: true,
  // Targeting attributes
  attributes: {
    id: "123",
    country: "US",
  },
  // Only required for A/B testing
  // Called every time a user is put into an experiment
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

// Wait for features to be available
await gb.init();
```

### Step 2: Start Feature Flagging!

There are 2 main methods for evaluating features: `isOn` and `getFeatureValue`:

```js
// Simple boolean (on/off) feature flag
if (gb.isOn("my-feature")) {
  console.log("Feature enabled!");
}

// Get the value of a string/JSON/number feature with a fallback
const color = gb.getFeatureValue("button-color", "blue");
```

## Node.js

If using this SDK in a server-side environment, you may need to configure some polyfills for missing browser APIs.

```js
const { setPolyfills } = require("@growthbook/growthbook");

setPolyfills({
  // Required when using built-in feature loading and Node 17 or lower
  fetch: require("cross-fetch"),
  // Required when using encrypted feature flags and Node 18 or lower
  SubtleCrypto: require("node:crypto").webcrypto.subtle,
  // Optional, can make feature rollouts faster
  EventSource: require("eventsource"),
  // Optional, can reduce startup times by persisting cached feature flags
  localStorage: {
    // Example using Redis
    getItem: (key) => redisClient.get(key),
    setItem: (key, value) => redisClient.set(key, value),
  },
});
```

There are 2 ways to use GrowthBook in a Node.js environment depending on where you want to declare user attributes.

### Instance per Request

In this mode, you create a separate GrowthBook instance for every incoming request that includes user-specific attributes. This has more overhead, but ensures you only need to define user attributes once instead of passing them throughout your app.

This is easiest if you use a middleware:

```js
// Example using Express
app.use(function (req, res, next) {
  // Create a GrowthBook instance and store in the request
  req.growthbook = new GrowthBook({
    apiHost: "https://cdn.growthbook.io",
    clientKey: "sdk-abc123",
    // Set this to `false` to improve performance in server-side environments
    enableDevMode: false,
    // Important: make sure this is set to `false`, otherwise features may change in the middle of a request
    subscribeToChanges: false,
    // Any user/request specific attributes you want to use for targeting
    attributes: {
      id: req.user.id,
      url: req.url,
    },
  });

  // Clean up at the end of the request
  res.on("close", () => req.growthbook.destroy());

  // Wait for features to load (will be cached in-memory for future requests)
  req.growthbook
    .init()
    .then(() => next())
    .catch((e) => {
      console.error("Failed to load features from GrowthBook", e);
      next();
    });
});
```

Then, you can access the GrowthBook instance from any route:

```js
app.get("/", (req, res) => {
  const gb = req.growthbook;
  // ...
});
```

### Singleton

In this mode, you create a singleton GrowthBookClient instance that is shared between all requests and you pass in user attributes when calling feature methods like `isOn`.

This method is more efficient, but does require you to pass around a `userContext` throughout your code.

```js
// Create a multi-user GrowthBook instance without user-specific attributes
const gb = new GrowthBookClient({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
});
await gb.init();

app.get("/hello", (req, res) => {
  // User context to pass into feature methods
  const userContext = {
    attributes: {
      id: req.user.id,
      url: req.url,
    },
  };

  const spanish = gb.isOn("spanish-greeting", userContext);

  res.send(spanish ? "Hola Mundo" : "Hello World");
});
```

#### Tracking Experiment Views

With the singleton approach, you can either define a `trackingCallback` on the global instance:

```js
const gb = new GrowthBookClient({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Tracking callback gets the user context as the 3rd argument
  trackingCallback: (experiment, result, user) => {
    console.log("Experiment Viewed", user.attributes.id, {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
```

And/or define a `trackingCallback` within the user context:

```js
const userContext = {
  attributes: {
    id: req.user.id,
  },
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", req.user.id, {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
};
```

Note: No de-duping is performed. If you evaluate the same feature 5 times in your code, the `trackingCallback` will be called 5 times.

## Loading Features

In order for the GrowthBook SDK to work, it needs to have feature definitions from the GrowthBook API. There are 2 ways to get this data into the SDK.

### Built-in Fetching and Caching

If you pass an `apiHost` and `clientKey` into the GrowthBook constructor, it will handle the network requests, caching, retry logic, etc. for you automatically. If your feature payload is encrypted, you can also pass in a `decryptionKey`.

```ts
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Only required if you have feature encryption enabled in GrowthBook
  decryptionKey: "key_abc123",
  // Update the instance in realtime as features change in GrowthBook (default: false)
  subscribeToChanges: true,
});

// Wait for features to be downloaded
await gb.init({
  // If the network request takes longer than this (in milliseconds), continue
  // Default: `0` (no timeout)
  timeout: 2000,
});
```

Until features are loaded, all features will evaluate to `null`. If you're ok with a potential flicker in your application (features going from `null` to their real value), you can call `loadFeatures` without awaiting the result.

If you want to refresh the features at any time (e.g. when a navigation event occurs), you can call `gb.refreshFeatures()`.

#### Streaming Updates

By default, the SDK will open a streaming connection using Server-Sent Events (SSE) to receive feature updates in realtime as they are changed in GrowthBook. This is only supported on GrowthBook Cloud or if running a GrowthBook Proxy Server.

If you want to disable streaming updates (to limit API usage on GrowthBook Cloud for example), you can set `backgroundSync` to `false`.

```ts
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",

  // Disable background streaming connection
  backgroundSync: false,
});
```

### Custom Integration

If you prefer to handle the network and caching logic yourself, you can instead pass in a features JSON object directly. For example, you might store features in Postgres and send it down to your front-end as part of your app's initial bootstrap API call.

```ts
const gb = new GrowthBook({
  features: {
    "feature-1": {...},
    "feature-2": {...},
    "another-feature": {...},
  }
})
```

Note that you don't have to call `gb.init()` or `gb.loadFeatures()`. There's nothing to load - everything required is already passed in. No network requests are made to GrowthBook at all.

You can update features at any time by calling `gb.setFeatures()` with a new JSON object.

### Re-rendering When Features Change

When features change (e.g. by calling `gb.refreshFeatures()`), you need to re-render your app so that all of your feature flag checks can be re-evaluated. You can specify your own custom rendering function for this purpose:

```js
// Callback to re-render your app when feature flag values change
gb.setRenderer(() => {
  // TODO: re-render your app
});
```

## Experimentation (A/B Testing)

In order to run A/B tests, you need to set up a tracking callback function. This is called every time a user is put into an experiment and can be used to track the exposure event in your analytics system (Segment, Mixpanel, GA, etc.).

```js
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  trackingCallback: (experiment, result) => {
    // Example using Segment
    analytics.track("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
```

This same tracking callback is used for both feature flag experiments and Visual Editor experiments.

### Feature Flag Experiments

There is nothing special you have to do for feature flag experiments. Just evaluate the feature flag like you would normally do. If the user is put into an experiment as part of the feature flag, it will call the `trackingCallback` automatically in the background.

```js
// If this has an active experiment and the user is included,
// it will call trackingCallback automatically
const newLogin = gb.isOn("new-signup-form");
```

If the experiment came from a feature rule, `result.featureId` in the trackingCallback will contain the feature id, which may be useful for tracking/logging purposes.

### Visual Editor Experiments

Experiments created through the GrowthBook Visual Editor will run automatically as soon as their targeting conditions are met.

**Note**: Visual Editor experiments are only supported in a web browser environment. They will not run in Node.js, Mobile apps, or Desktop apps.

If you are using this SDK in a Single Page App (SPA), you will need to let the GrowthBook instance know when the URL changes so the active experiments can update accordingly.

```js
// Call this every time a navigation event happens in your SPA
function onRouteChange() {
  gb.setURL(window.location.href);
}
```

## TypeScript

When used in a TypeScript project, GrowthBook includes basic type inference out of the box:

```ts
// Type will be `string` based on the fallback provided ("blue")
const color = gb.getFeatureValue("button-color", "blue");

// You can manually specify types as well
// feature.value will be type `number`
const feature = gb.evalFeature<number>("font-size");
console.log(feature.value);

// Experiments will use the variations to infer the return value
// result.value will be type "string"
const result = gb.run({
  key: "my-test",
  variations: ["blue", "green"],
});
```

### Strict Typing

If you want to enforce stricter types in your application, you can do that when creating the GrowthBook instance:

```ts
// Define all your feature flags and types here
interface AppFeatures {
  "button-color": string;
  "font-size": number;
  "newForm": boolean;
}

// Pass into the GrowthBook instance
const gb = new GrowthBook<AppFeatures>({
  ...
});
```

Now, all feature flag methods will be strictly typed.

```ts
// feature.value will by type `number`
const feature = gb.evalFeature("font-size");
console.log(feature.value);

// Typos will cause compile-time errors
gb.isOn("buton-color"); // "buton" instead of "button"
```

Instead of defining the `AppFeatures` interface manually like above, you can auto-generate it from your GrowthBook account using the [GrowthBook CLI](https://docs.growthbook.io/tools/cli).

## GrowthBook Instance (reference)

### Attributes

You can specify attributes about the current user and request. These are used for two things:

1.  Feature targeting (e.g. paid users get one value, free users get another)
2.  Assigning persistent variations in A/B tests (e.g. user id "123" always gets variation B)

The following are some comonly used attributes, but use whatever makes sense for your application.

```ts
new GrowthBook({
  attributes: {
    id: "123",
    loggedIn: true,
    deviceId: "abc123def456",
    company: "acme",
    paid: false,
    url: "/pricing",
    browser: "chrome",
    mobile: false,
    country: "US",
  },
});
```

If you need to set or update attributes asynchronously, you can do so with `setAttributes()`. This will completely overwrite the attributes object with whatever you pass in. Also, be aware that changing attributes may change the assigned feature values. This can be disorienting to users if not handled carefully.

### Feature Usage Callback

GrowthBook can fire a callback whenever a feature is evaluated for a user. This can be useful to update 3rd party tools like NewRelic or DataDog.

```ts
new GrowthBook({
  onFeatureUsage: (featureKey, result) => {
    console.log("feature", featureKey, "has value", result.value);
  },
});
```

The `result` argument is the same thing returned from `gb.evalFeature`.

Note: If you evaluate the same feature multiple times (and the value doesn't change), the callback will only be fired the first time.

### Dev Mode

There is a [GrowthBook Chrome DevTools Extension](https://chrome.google.com/webstore/detail/growthbook-devtools/opemhndcehfgipokneipaafbglcecjia) that can help you debug and test your feature flags in development.

In order for this to work, you must explicitly enable dev mode when creating your GrowthBook instance:

```js
const gb = new GrowthBook({
  enableDevMode: true,
});
```

To avoid exposing all of your internal feature flags and experiments to users, we recommend setting this to `false` in production in most cases.

### evalFeature

In addition to the `isOn` and `getFeatureValue` helper methods, there is the `evalFeature` method that gives you more detailed information about why the value was assigned to the user.

```ts
// Get detailed information about the feature evaluation
const result = gb.evalFeature("my-feature");

// The value of the feature (or `null` if not defined)
console.log(result.value);

// Why the value was assigned to the user
// One of: `override`, `unknownFeature`, `defaultValue`, `force`, or `experiment`
console.log(result.source);

// The string id of the rule (if any) which was used
console.log(result.ruleId);

// Information about the experiment (if any) which was used
console.log(result.experiment);

// The result of the experiment (or `undefined`)
console.log(result.experimentResult);
```

### Inline Experiments

Instead of declaring all features up-front in the context and referencing them by ids in your code, you can also just run an experiment directly. This is done with the `gb.run` method:

```js
// These are the only required options
const { value } = gb.run({
  key: "my-experiment",
  variations: ["red", "blue", "green"],
});
```

#### Customizing the Traffic Split

By default, this will include all traffic and do an even split between all variations. There are 2 ways to customize this behavior:

```js
// Option 1: Using weights and coverage
gb.run({
  key: "my-experiment",
  variations: ["red", "blue", "green"],
  // Only include 10% of traffic
  coverage: 0.1,
  // Split the included traffic 50/25/25 instead of the default 33/33/33
  weights: [0.5, 0.25, 0.25],
});

// Option 2: Specifying ranges
gb.run({
  key: "my-experiment",
  variations: ["red", "blue", "green"],
  // Identical to the above
  // 5% of traffic in A, 2.5% each in B and C
  ranges: [
    [0, 0.05],
    [0.5, 0.525],
    [0.75, 0.775],
  ],
});
```

#### Hashing

We use deterministic hashing to assign a variation to a user. We hash together the user's id and experiment key, which produces a number between `0` and `1`. Each variation is assigned a range of numbers, and whichever one the user's hash value falls into will be assigned.

You can customize this hashing behavior:

```js
gb.run({
  key: "my-experiment",
  variations: ["A", "B"],

  // Which hashing algorithm to use
  // Version 2 is the latest and the one we recommend
  hashVersion: 2,

  // Use a different seed instead of the experiment key
  seed: "abcdef123456",

  // Use a different user attribute (default is `id`)
  hashAttribute: "device_id",
});
```

**Note**: For backwards compatibility, if no `hashVersion` is specified, it will fall back to using version `1`, which is deprecated. In the future, version `2` will become the default. We recommend specifying version `2` now for all new experiments to avoid migration issues down the line.

#### Meta Info

You can also define meta info for the experiment and/or variations. These do not affect the behavior, but they are passed through to the `trackingCallback`, so they can be used to annotate events.

```js
gb.run({
  key: "results-per-page",
  variations: [10, 20],

  // Experiment meta info
  name: "Results per Page",
  phase: "full-traffic"

  // Variation meta info
  meta: [
    {
      key: "control",
      name: "10 Results per Page",
    },
    {
      key: "variation",
      name: "20 Results per Page",
    },
  ]
})
```

#### Mutual Exclusion

Sometimes you want to run multiple conflicting experiments at the same time. You can use the `filters` setting to run mutually exclusive experiments.

We do this using deterministic hashing to assign users a value between 0 and 1 for each filter.

```js
// Will include 60% of users - ones with a hash between 0 and 0.6
gb.run({
  key: "experiment-1",
  variation: [0, 1],
  filters: [
    {
      seed: "pricing",
      attribute: "id",
      ranges: [[0, 0.6]],
    },
  ],
});

// Will include the other 40% of users - ones with a hash between 0.6 and 1
gb.run({
  key: "experiment-2",
  variation: [0, 1],
  filters: [
    {
      seed: "pricing",
      attribute: "id",
      ranges: [[0.6, 1.0]],
    },
  ],
});
```

**Note** - If a user is excluded from an experiment due to a filter, the rule will be skipped and the next matching rule will be used instead.

#### Holdout Groups

To use global holdout groups, use a nested experiment design:

```js
// The value will be `true` if in the holdout group, otherwise `false`
const holdout = gb.run({
  key: "holdout",
  variations: [true, false],
  // 10% of users in the holdout group
  weights: [0.1, 0.9],
});

// Only run your main experiment if the user is NOT in the holdout
if (!holdout.value) {
  const res = gb.run({
    key: "my-experiment",
    variations: ["A", "B"],
  });
}
```

#### Targeting Conditions

You can also define targeting conditions that limit which users are included in the experiment. These conditions are evaluated against the `attributes` passed into the GrowthBook context. The syntax for conditions is based on the MongoDB query syntax and is straightforward to read and write.

For example, if the attributes are:

```json
{
  "id": "123",
  "browser": {
    "vendor": "firefox",
    "version": 94
  },
  "country": "CA"
}
```

The following condition would evaluate to `true` and the user would be included in the experiment:

```js
gb.run({
  key: "my-experiment",
  variation: [0, 1],
  condition: {
    "browser.vendor": "firefox",
    country: {
      $in: ["US", "CA", "IN"],
    },
  },
});
```

#### Inline Experiment Return Value

A call to `gb.run(experiment)` returns an object with a few useful properties:

```ts
const {
  value,
  key,
  name,
  variationId,
  inExperiment,
  hashUsed,
  hashAttribute,
  hashValue,
} = gb.run({
  key: "my-experiment",
  variations: ["A", "B"],
});

// If user is included in the experiment
console.log(inExperiment); // true or false

// The index of the assigned variation
console.log(variationId); // 0 or 1

// The value of the assigned variation
console.log(value); // "A" or "B"

// The key and name of the assigned variation (if specified in `meta`)
console.log(key); // "0" or "1"
console.log(name); // ""

// If the variation was randomly assigned by hashing
console.log(hashUsed);

// The user attribute that was hashed
console.log(hashAttribute); // "id"

// The value of that attribute
console.log(hashValue); // e.g. "123"
```

The `inExperiment` flag will be false if the user was excluded from being part of the experiment for any reason (e.g. failed targeting conditions).

The `hashUsed` flag will only be true if the user was randomly assigned a variation. If the user was forced into a specific variation instead, this flag will be false.

## Feature Definitions (reference)

The feature definition JSON file contains information about all of the features in your application.

Each feature consists of a unique key, a list of possible values, and rules for how to assign those values to users.

```ts
{
  "feature-1": {...},
  "feature-2": {...},
  "another-feature": {...},
}
```

### Basic Feature

An empty feature always has the value `null`:

```js
{
  "my-feature": {}
}
```

#### Default Values

You can change the default assigned value with the `defaultValue` property:

```js
{
  "my-feature": {
    defaultValue: "green"
  }
}
```

### Rules

You can override the default value with **Rules**.

Rules give you fine-grained control over how feature values are assigned to users. There are 2 types of feature rules: `force` and `experiment`. Force rules give the same value to everyone. Experiment rules assign values to users randomly.

#### Rule Ids

Rules can specify a unique identifier with the `id` property. This can help with debugging and QA by letting you see exactly why a specific value was assigned to a user.

#### Rule Conditions

Rules can optionally define targeting conditions that limit which users the rule applies to. These conditions are evaluated against the `attributes` passed into the GrowthBook context. The syntax for conditions is based on the MongoDB query syntax and is straightforward to read and write.

For example, if the attributes are:

```json
{
  "id": "123",
  "browser": {
    "vendor": "firefox",
    "version": 94
  },
  "country": "CA"
}
```

The following condition would evaluate to `true`:

```json
{
  "browser.vendor": "firefox",
  "country": {
    "$in": ["US", "CA", "IN"]
  }
}
```

If a condition evaluates to `false`, the rule will be skipped. This means you can chain rules together with different conditions to support even the most complex use cases.

#### Force Rules

Force rules do what you'd expect - force a specific value for the feature

```js
// Firefox users in the US or Canada get "green"
// Everyone else gets the default "blue"
{
  "button-color": {
    defaultValue: "blue",
    rules: [
      {
        id: "rule-123",
        condition: {
          browser: "firefox",
          country: {
            $in: ["US", "CA"]
          }
        },
        force: "green"
      }
    ],
  }
}
```

##### Gradual Rollouts

You can specify a `range` for your rule, which determines what percent of users will get the rule applied to them. Users who do not get the rule applied will fall through to the next matching rule (or default value). You can also specify a `seed` that will be used for hashing.

In order to figure out if a user is included or not, we use deterministic hashing. By default, we use the user attribute `id` for this, but you can override this by specifying `hashAttribute` for the rule:

This is useful for gradually rolling out features to users (start with a small range and slowly increase).

```js
{
  "new-feature": {
    defaultValue: false,
    rules: [
      {
        force: true,
        hashAttribute: "device-id",
        seed: 'new-feature-rollout-abcdef123',
        // 20% of users
        range: [0, 0.2]
        // Increase to 40%:
        // range: [0, 0.4]
      }
    ]
  }
}
```

#### Experiment Rules

Experiment rules let you adjust the percent of users who get randomly assigned to each variation. This can either be used for hypothesis-driven A/B tests or to simply mitigate risk by gradually rolling out new features to your users.

```js
// Each variation gets assigned to a random 1/3rd of users
{
  "image-size": {
    rules: [
      {
        variations: ["small", "medium", "large"]
      }
    ]
  }
}
```

##### Customizing the Traffic Split

By default, an experiment rule will include all traffic and do an even split between all variations. There are 2 ways to customize this behavior:

```js
// Option 1: Using weights and coverage
{
  variations: ["red", "blue", "green"],
  // Only include 10% of traffic
  coverage: 0.1,
  // Split the included traffic 50/25/25 instead of the default 33/33/33
  weights: [0.5, 0.25, 0.25]
}

// Option 2: Specifying ranges
{
  variations: ["red", "blue", "green"],
  // Identical to the above
  // 5% of traffic in A, 2.5% each in B and C
  ranges: [
    [0, 0.05],
    [0.5, 0.525],
    [0.75, 0.775]
  ]
}
```

A user is assigned a number from 0 to 1 and whichever variation's range includes their number will be assigned to them.

##### Variation Meta Info

You can use the `meta` setting to provide additional info about the variations such as name.

```js
{
  "image-size": {
    rules: [
      {
        variations: ["sm", "md", "lg"],
        ranges: [
          [0, 0.5],
          [0.5, 0.75],
          [0.75, 1.0]
        ],
        meta: [
          {
            key: "control",
            name: "Small",
          },
          {
            key: "v1",
            name: "Medium",
          },
          {
            key: "v2",
            name: "Large",
          }
        ]
      }
    ]
  }
}
```

##### Tracking Key and Name

When a user is assigned a variation, we call the `trackingCallback` function so you can record the exposure with your analytics event tracking system. By default, we use the feature id to identify the experiment, but this can be overridden if needed with the `key` setting. You can also optionally provide a human-readable name.

```js
{
  "feature-1": {
    rules: [
      {
        // Use "my-experiment" as the key instead of "feature-1"
        key: "my-experiment",
        name: "My Experiment",
        variations: ["A", "B"]
      }
    ]
  },
}
```

##### Hash Attribute

We use deterministic hashing to make sure the same user always gets assigned the same value. By default, we use the attribute `id`, but this can be overridden with the `hashAttribute` setting:

```js
const gb = new GrowthBook({
  attributes: {
    id: "123",
    company: "acme",
  },
  features: {
    "my-feature": {
      rules: [
        // All users with the same "company" value
        // will be assigned the same variation
        {
          variations: ["A", "B"],
          hashAttribute: "company",
        },
        // If "company" is empty for the user (e.g. if they are logged out)
        // The experiment will be skipped and fall through to this next rule
        {
          force: "A",
        },
      ],
    },
  },
});
```

##### Filters

Sometimes you want to run multiple conflicting experiments at the same time. You can use the `filters` setting to run mutually exclusive experiments.

We do this using deterministic hashing to assign users a value between 0 and 1 for each filter.

```js
{
  "feature1": {
    rules: [
      // Will include 60% of users - ones with a hash between 0 and 0.6
      {
        variations: [false, true],
        filters: [
          {
            seed: "pricing",
            attribute: "id",
            ranges: [[0, 0.6]]
          }
        ]
      }
    ]
  },
  "feature2": {
    rules: [
      // Will include the other 40% of users - ones with a hash between 0.6 and 1
      {
        variations: [false, true],
        filters: [
          {
            seed: "pricing",
            attribute: "id",
            ranges: [[0.6, 1.0]]
          }
        ]
      },
    ]
  }
}
```

**Note** - If a user is excluded from an experiment due to a filter, the rule will be skipped and the next matching rule will be used instead.

## Examples

- [Typescript example app with strict typing <ExternalLink />](https://github.com/growthbook/examples/tree/main/vanilla-typescript).
