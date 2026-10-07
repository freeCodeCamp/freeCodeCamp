<br />

<p align="center">
  <img src="media/msw-logo.svg" width="100" alt="The Mock Service Worker logo" />
</p>

<h1 align="center">Mock Service Worker</h1>
<p align="center">Industry standard API mocking for JavaScript.</p>

<p align="center">
   <a href="https://kettanaito.com/discord" target="_blank">Join our Discord server</a>
</p>

<br />
<br />

## Features

- **Seamless**. A dedicated layer of requests interception at your disposal. Keep your application's code and tests unaware of whether something is mocked or not.
- **Deviation-free**. Request the same production resources and test the actual behavior of your app. Augment an existing API, or design it as you go when there is none.
- **Familiar & Powerful**. Use [Express](https://github.com/expressjs/express)-like routing syntax to intercept requests. Use parameters, wildcards, and regular expressions to match requests, and respond with necessary status codes, headers, cookies, delays, or completely custom resolvers.

---

> "_I found MSW and was thrilled that not only could I still see the mocked responses in my DevTools, but that the mocks didn't have to be written in a Service Worker and could instead live alongside the rest of my app. This made it silly easy to adopt. The fact that I can use it for testing as well makes MSW a huge productivity booster._"
>
> — [Kent C. Dodds](https://twitter.com/kentcdodds)

## Documentation

This README will give you a brief overview of the library, but there's no better place to start with Mock Service Worker than its official documentation.

- [Documentation](https://mswjs.io/docs)
- [**Quick start**](https://mswjs.io/docs/quick-start)
- [FAQ](https://mswjs.io/docs/faq)

## Examples

- See the list of [**Usage examples**](https://github.com/mswjs/examples)

## Courses

We've partnered with Egghead to bring you quality paid materials to learn the best practices of API mocking on the web. Please give them a shot! The royalties earned from them help sustain the project's development. Thank you.

- 🚀 [**Mocking REST and GraphQL APIs with Mock Service Worker**](https://egghead.io/courses/mock-rest-and-graphql-apis-with-mock-service-worker-8d471ece?af=8mci9b)
- 🔌 [Mocking (and testing) WebSocket APIs with Mock Service Worker](https://egghead.io/courses/mocking-websocket-apis-with-mock-service-worker-9933b7f5)

## Browser

- [Learn more about using MSW in a browser](https://mswjs.io/docs/integrations/browser)
- [`setupWorker` API](https://mswjs.io/docs/api/setup-worker)

### How does it work?

In-browser usage is what sets Mock Service Worker apart from other tools. Utilizing the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), which can intercept requests for the purpose of caching, Mock Service Worker responds to intercepted requests with your mock definition on the network level. This way your application knows nothing about the mocking.

**Take a look at this quick presentation on how Mock Service Worker functions in a browser:**

[![What is Mock Service Worker?](https://raw.githubusercontent.com/mswjs/msw/main/media/msw-video-thumbnail.jpg)](https://youtu.be/HcQCqboatZk)

### How is it different?

- This library intercepts requests on the network level, which means _after_ they have been performed and "left" your application. As a result, the entirety of your code runs, giving you more confidence when mocking;
- Imagine your application as a box. Every API mocking library out there opens your box and removes the part that does the request, placing a blackbox in its stead. Mock Service Worker leaves your box intact, 1-1 as it is in production. Instead, MSW lives in a separate box next to yours;
- No more stubbing of `fetch`, `axios`, `react-query`, you-name-it;
- You can reuse the same mock definition for the unit, integration, and E2E testing. Did we mention local development and debugging? Yep. All running against the same network description without the need for adapters or bloated configurations.

### Usage example

```js
// 1. Import the library.
import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  http.get('https://github.com/octocat', ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: 'Mocked response',
      },
      {
        status: 202,
        statusText: 'Mocked status',
      },
    )
  }),
)

// 3. Start mocking by starting the Service Worker.
await worker.start()
```

Performing a `GET https://github.com/octocat` request in your application will result into a mocked response that you can inspect in your browser's "Network" tab:

![Chrome DevTools Network screenshot with the request mocked](https://github.com/mswjs/msw/blob/main/media/msw-quick-look-network.png?raw=true)

> **Tip:** Did you know that although Service Worker runs in a separate thread, your request handlers execute entirely on the client? This way you can use the same languages, like TypeScript, third-party libraries, and internal logic to create the mocks you need.

## Node.js

- [Learn more about using MSW in Node.js](https://mswjs.io/docs/integrations/node)
- [`setupServer` API](https://mswjs.io/docs/api/setup-server)

### How does it work?

There's no such thing as Service Workers in Node.js. Instead, MSW implements a [low-level interception algorithm](https://github.com/mswjs/interceptors) that can utilize the very same request handlers you have for the browser. This blends the boundary between environments, allowing you to focus on your network behaviors.

### How is it different?

- Does not stub `fetch`, `axios`, etc. As a result, your tests know _nothing_ about mocking;
- You can reuse the same request handlers for local development and debugging, as well as for testing. Truly a single source of truth for your network behavior across all environments and all tools.

### Usage example

Here's an example of using Mock Service Worker while developing your Express server:

```js
import express from 'express'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const app = express()
const server = setupServer()

app.get(
  '/checkout/session',
  server.boundary((req, res) => {
    // Describe the network for this Express route.
    server.use(
      http.get(
        'https://api.stripe.com/v1/checkout/sessions/:id',
        ({ params }) => {
          return HttpResponse.json({
            id: params.id,
            mode: 'payment',
            status: 'open',
          })
        },
      ),
    )

    // Continue with processing the checkout session.
    handleSession(req, res)
  }),
)
```

> This example showcases [`server.boundary()`](https://mswjs.io/docs/api/setup-server/boundary) to scope request interception to a particular closure, which is extremely handy!

## Sponsors

Mock Service Worker is trusted by hundreds of thousands of engineers around the globe. It's used by companies like Google, Microsoft, Spotify, Amazon, Netflix, and countless others. Despite that, it remains a hobby project maintained in a spare time and has no opportunity to financially support even a single full-time contributor.

**You can change that!** Consider [sponsoring the effort](https://github.com/sponsors/mswjs) behind one of the most innovative approaches around API mocking. Raise a topic of open source sponsorships with your boss and colleagues. Let's build sustainable open source together!

### Golden sponsors

> Become our _golden sponsor_ and get featured right here, enjoying other perks like issue prioritization and a personal consulting session with us.
>
> **Learn more on our [GitHub Sponsors profile](https://github.com/sponsors/mswjs)**.

<br />

<table>
  <tr>
    <td>
      <a href="https://www.github.com/" target="_blank">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="media/sponsors/github-light.svg" />
          <img src="media/sponsors/github.svg" alt="GitHub" height="64" />
        </picture>
      </a>
    </td>
    <td>
      <a href="https://www.codacy.com/" target="_blank">
        <img src="media/sponsors/codacy.svg" alt="Codacy" height="64" />
      </a>
    </td>
    <td>
      <a href="https://workleap.com/" target="_blank">
        <img src="media/sponsors/workleap.svg" alt="Workleap" height="64" width="174" />
      </a>
    </td>
    <td>
      <a href="https://www.chromatic.com/?ref=mswjs" target="_blank">
        <img src="media/sponsors/chromatic.svg" alt="Chromatic" height="64" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://stackblitz.com/" target="_blank">
        <img src="media/sponsors/stackblitz.svg" alt="StackBlitz" height="64" />
      </a>
    </td>
  </tr>
</table>

### Silver sponsors

> Become our _silver sponsor_ and get your profile image and link featured right here.
>
> **Learn more on our [GitHub Sponsors profile](https://github.com/sponsors/mswjs)**.

<br />

<table>
  <tr>
    <td>
      <a href="https://www.replay.io/" target="_blank">
        <img src="media/sponsors/replay.svg" alt="Replay" height="64" />
      </a>
    </td>
    <td>
      <a href="https://codemod.com/" target="_blank">
        <img src="media/sponsors/codemod.svg" alt="Codemod" height="64" width="128" />
      </a>
    </td>
    <td>
      <a href="https://github.com/ryanmagoon" target="_blank">
        <img src="https://github.com/ryanmagoon.png" alt="Ryan Magoon" height="64" />
      </a>
    </td>
  </tr>
</table>

### Bronze sponsors

> Become our _bronze sponsor_ and get your profile image and link featured in this section.
>
> **Learn more on our [GitHub Sponsors profile](https://github.com/sponsors/mswjs)**.

<br />

<table>
  <tr>
    <td>
      <a href="https://materialize.com/" target="_blank">
        <img src="media/sponsors/materialize.svg" alt="Materialize" height="64" />
      </a>
    </td>
    <td>
      <a href="https://trigger.dev/" target="_blank">
        <img src="media/sponsors/trigger-dev.png" alt="Trigger.dev" height="64" />
      </a>
    </td>
    <td>
      <a href="https://vital.io/" target="_blank">
        <img src="media/sponsors/vital.svg" alt="Vital" width="64" />
      </a>
    </td>
  </tr>
</table>

## Awards & mentions

We've been extremely humbled to receive awards and mentions from the community for all the innovation and reach Mock Service Worker brings to the JavaScript ecosystem.

<table>
  <tr valign="middle">
    <td width="124">
      <img src="https://raw.githubusercontent.com/mswjs/msw/main/media/tech-radar.png" width="124" alt="Technology Radar">
    </td>
    <td>
      <h4>Solution Worth Pursuing</h4>
      <p><em><a href="https://www.thoughtworks.com/radar/languages-and-frameworks/mock-service-worker">Technology Radar</a> (2020–2021)</em></p>
    </td>
  </tr>
  <tr>
    <td width="124">
      <img src="https://raw.githubusercontent.com/mswjs/msw/main/media/os-awards.png" width="124" alt="Open Source Awards 2020">
    </td>
    <td>
      <h4>The Most Exciting Use of Technology</h4>
      <p><em><a href="https://osawards.com/javascript/2020">Open Source Awards</a> (2020)</em></p>
    </td>
  </tr>
</table>
