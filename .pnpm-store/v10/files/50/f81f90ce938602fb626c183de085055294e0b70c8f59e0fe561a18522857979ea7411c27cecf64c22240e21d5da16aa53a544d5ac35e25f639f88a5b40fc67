# GrowthBook React SDK

[GrowthBook](https://www.growthbook.io) is a modular Feature Flagging and Experimentation platform.

This is the React client library that lets you evaluate feature flags and run experiments (A/B tests) within a React application. It is a thin wrapper around the [Javascript SDK](https://docs.growthbook.io/lib/js), so you might want to view those docs first to familiarize yourself with the basic classes and methods.

![Build Status](https://github.com/growthbook/growthbook/workflows/CI/badge.svg) ![GZIP Size](https://img.shields.io/badge/gzip%20size-7.84KB-informational) ![NPM Version](https://img.shields.io/npm/v/@growthbook/growthbook-react)

- **No external dependencies**
- **Lightweight and fast**
- Local targeting and evaluation, **no HTTP requests required**
- Works for both **client and server-side** rendering as well as **React Native**
- **No flickering** when running A/B tests
- Written in **Typescript** with extensive test coverage
- **Use your existing event tracking** (GA, Segment, Mixpanel, custom)
- Run mutually exclusive experiments with **namespaces**
- **Remote configuration** to change feature values without deploying new code
- Run **Visual Experiments** without writing code by using the GrowthBook Visual Editor

## Community

Join [our GrowthBook Users Slack community](https://slack.growthbook.io?ref=react-readme) if you need help, want to chat, or are thinking of a new feature. We're here to help - and to make GrowthBook even better.

## Installation

```
yarn add @growthbook/growthbook-react
```

or

```
npm install --save @growthbook/growthbook-react
```

## Quick Usage

### Step 1: Configure your app

```tsx
import { useEffect } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

// Create a GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Enable easier debugging during development
  enableDevMode: true,
  // Update the instance in realtime as features change in GrowthBook
  subscribeToChanges: true,
  // Only required for A/B testing
  // Called every time a user is put into an experiment
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
gb.init();

export default function App() {
  useEffect(() => {
    // Set user attributes for targeting (from cookie, auth system, etc.)
    gb.setAttributes({
      id: user.id,
      company: user.company,
    });
  }, [user]);

  return (
    <GrowthBookProvider growthbook={gb}>
      <OtherComponent />
    </GrowthBookProvider>
  );
}
```

### Step 2: Start feature flagging!

There are a few ways to use feature flags in GrowthBook:

#### Feature Hooks

```tsx
import { useFeatureValue, useFeatureIsOn } from "@growthbook/growthbook-react";

export default function OtherComponent() {
  // Boolean on/off features
  const newLogin = useFeatureIsOn("new-login-form");

  // String/Number/JSON features with a fallback value
  const buttonColor = useFeatureValue("login-button-color", "blue");

  if (newLogin) {
    return <NewLogin color={buttonColor} />;
  } else {
    return <Login color={buttonColor} />;
  }
}
```

#### Feature Wrapper Components

```tsx
import { IfFeatureEnabled, FeatureString } from "@growthbook/growthbook-react";

export default function OtherComponent() {
  return (
    <div>
      <h1>
        <FeatureString feature="site-h1" default="My Site" />
      </h1>
      <IfFeatureEnabled feature="welcome-message">
        <p>Welcome to our site!</p>
      </IfFeatureEnabled>
    </div>
  );
}
```

#### useGrowthBook hook

If you need low-level access to the GrowthBook instance for any reason, you can use the `useGrowthBook` hook.

One example is updating targeting attributes when a user logs in:

```jsx
import { useGrowthBook } from "@growthbook/growthbook-react";

export default function Auth() {
  const growthbook = useGrowthBook();

  const user = useUser();
  useEffect(() => {
    if (!user || !growthbook) return;
    growthbook.setAttributes({
      loggedIn: true,
      id: user.id,
      company: user.company,
      isPro: user.plan === "pro"
    })
  }, [user, growthbook])

  ...
}
```

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

### Waiting for Features to Load

There is a helper component `<FeaturesReady>` that lets you render a fallback component until features are done loading. This works for both built-in fetching and custom integrations.

```jsx
<FeaturesReady timeout={500} fallback={<LoadingSpinner />}>
  <ComponentThatUsesFeatures />
</FeaturesReady>
```

- `timeout` is the max time you want to wait for features to load (in ms). The default is `0` (no timeout).
- `fallback` is the component you want to display before features are loaded. The default is `null`.

If you want more control, you can use the `useGrowthBook()` hook and the `ready` flag:

```ts
const gb = useGrowthBook();

if (gb.ready) {
  // Do something
}
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
useFeatureIsOn("new-signup-form");
```

If the experiment came from a feature rule, `result.featureId` in the trackingCallback will contain the feature id, which may be useful for tracking/logging purposes.

### Visual Editor Experiments

Experiments created through the GrowthBook Visual Editor will run automatically as soon as their targeting conditions are met.

**Note**: Visual Editor experiments are only supported in a web browser environment. They will not run in React Native or during Server Side Rendering (SSR).

If you are using this SDK in a Single Page App (SPA), you will need to let the GrowthBook instance know when the URL changes so the active experiments can update accordingly.

For example, in Next.js, you could do this:

```js
function updateGrowthBookURL() {
  gb.setURL(window.location.href);
}

export default function MyApp() {
  // Subscribe to route change events and update GrowthBook
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", updateGrowthBookURL);
    return () => router.events.off("routeChangeComplete", updateGrowthBookURL);
  }, []);

  // ...
}
```

## Server Side Rendering (SSR)

This SDK fully supports server side rendering. The below examples use Next.js, but other frameworks should be similar.

There are 2 ways to use GrowthBook for SSR.

### SSR Only

With this approach, feature flags are evaluated once when the page is rendered. If a feature flag changes, the user would need to refresh the page to see it.

```js
export async function getServerSideProps(context) {
  // Create a GrowthBook instance and load features from the API
  const gb = new GrowthBook({
    apiHost: "https://cdn.growthbook.io",
    clientKey: "sdk-abc123",
    attributes: {
      // TODO: get more targeting attributes from request context
      id: context.req.cookies.DEVICE_ID,
    },
  });
  await gb.init();

  return {
    props: {
      title: gb.getFeatureValue("site-title", "fallback"),
      showBanner: gb.isOn("sale-banner"),
    },
  };
}

export default function MyPage({ title, showBanner }) {
  return (
    <div>
      <h1>{title}</h1>
      {showBanner && <div className="sale">There's a Sale!</div>}
    </div>
  );
}
```

### Hybrid (SSR + Client-side)

With this approach, you use the client-side hooks and components (e.g. `useFeatureValue`) and simply use SSR to make sure the initial load already has the latest features from the API.

You get the benefits of client-side rendering (interactivity, realtime feature flag updates) plus the benefits of SSR (no flickering, improved SEO). It does require a little more setup to get working though.

First, create a helper function to generate GrowthBook SSR props from an incoming request

```js
// util/gb-server.js
import { getGrowthBookSSRData } from "@growthbook/growthbook-react";

export async function generateGrowthBookSSRProps(context) {
  return getGrowthBookSSRData({
    apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
    clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
    attributes: {
      // TODO: get more targeting attributes from request context
      id: context.req.cookies.DEVICE_ID,
    },
  });
}
```

Then, follow the same steps as client-side rendering to wrap your app in a GrowthBookProvider:

```jsx
// pages/_app.jsx
import { useEffect } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

// Create a client-side GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Enable easier debugging of feature flags during development
  enableDevMode: true,
  // Update the instance in realtime as features change in GrowthBook
  subscribeToChanges: true,
});
gb.init();

export default function App() {
  useEffect(() => {
    // Set user attributes for targeting (use the same values as SSR when possible)
    gb.setAttributes({
      id: user.id,
    });
  }, [user]);

  return (
    <GrowthBookProvider growthbook={gb}>
      <OtherComponent />
    </GrowthBookProvider>
  );
}
```

Now, on a server rendered page, call the helper you made and pass it into the `useGrowthBookSSR` hook:

```jsx
// pages/server.jsx
import MyComponent from "../components/MyComponent";
import { generateGrowthBookSSRProps } from "../util/gb-server";
import { useGrowthBookSSR } from "@growthbook/growthbook-react";

export async function getServerSideProps(context) {
  const gbData = await generateGrowthBookSSRProps(context);
  return {
    props: {
      gbData,
    },
  };
}

export default function ServerPage({ gbData }) {
  // This is required once at the top of the SSR page
  useGrowthBookSSR(gbData);

  return <MyComponent />;
}
```

Lastly, in the rest of your app, use the client-side hooks and components just as you would if you weren't using SSR.

```jsx
// components/MyComponent.jsx
export default function MyComponent() {
  // Boolean on/off features
  const newLogin = useFeatureIsOn("new-login-form");

  // String/Number/JSON features with a fallback value
  const buttonColor = useFeatureValue("login-button-color", "blue");

  if (newLogin) {
    return <NewLogin color={buttonColor} />;
  } else {
    return <Login color={buttonColor} />;
  }
}
```

If you weren't using SSR, the initial render would use fallback values for the features, then after React hydrates the page, the proper values would pop in, potentially causing a flicker on slow connections. This approach solves that issue by ensuring the features have the proper values from the start.

## API Reference

There are a number of configuration options and settings that control how GrowthBook behaves.

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

#### Updating Attributes

If attributes change, you can call `setAttributes()` to update. This will completely overwrite any existing attributes. To do a partial update, use the following pattern:

```js
gb.setAttributes({
  // Only update the `url` attribute, keep the rest the same
  ...gb.getAttributes(),
  url: "/new-page",
});
```

### Feature Usage Callback

GrowthBook can fire a callback whenever a feature is evaluated for a user. This can be useful to update 3rd party tools like NewRelic or DataDog.

```ts
new GrowthBook({
  onFeatureUsage: (featureKey, result) => {
    console.log("feature", featureKey, "has value", result.value);
  },
});
```

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

### Inline Experiments

Depending on how you configure feature flags, they may run A/B tests behind the scenes to determine which value gets assigned to the user.

Sometimes though, you want to run an inline experiment without going through a feature flag first. For this, you can use either the `useExperiment` hook or the Higher Order Component `withRunExperiment`:

View the [Javascript SDK Docs](https://docs.growthbook.io/lib/js) for all of the options available for inline experiments

#### useExperiment hook

```tsx
import { useExperiment } from "@growthbook/growthbook-react";

export default function OtherComponent() {
  const { value } = useExperiment({
    key: "new-headline",
    variations: ["Hello", "Hi", "Good Day"],
  });

  return <h1>{value}</h1>;
}
```

#### withRunExperiment (class components)

**Note:** This library uses hooks internally, so still requires React 16.8 or above.

```tsx
import { withRunExperiment } from "@growthbook/growthbook-react";

class OtherComponent extends React.Component {
  render() {
    // The `runExperiment` prop is identical to the `useExperiment` hook
    const { value } = this.props.runExperiment({
      key: "headline-test",
      variations: ["Hello World", "Hola Mundo"],
    });
    return <h1>{value}</h1>;
  }
}
// Wrap your component in `withRunExperiment`
export default withRunExperiment(OtherComponent);
```

## Examples

- [React Native <ExternalLink />](https://github.com/growthbook/examples/tree/main/react-native-cli)
