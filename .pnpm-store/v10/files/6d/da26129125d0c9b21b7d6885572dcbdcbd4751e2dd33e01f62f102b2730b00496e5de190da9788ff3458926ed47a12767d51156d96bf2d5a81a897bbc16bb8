# Nodebox

Nodebox is a runtime for executing Node.js modules in the browser.

## Why we built Nodebox

With `sandpack-bundler`, we allowed any developer anywhere to instantly create a fast, local, shareable playground inside their browser, without having to wait forever to install dependencies and fight with devtools. This improves the learning, experimentation and sharing experience of client-side JavaScript code.

However, server-side JavaScript remained a challenge. At CodeSandbox we have solved this by using [Firecracker VMs](https://codesandbox.io/blog/how-we-clone-a-running-vm-in-2-seconds), allowing us to bring your entire development environment to the cloud regardless of the programming language or tooling you might be using. Unfortunately, as VMs live in the cloud, they require infrastructure and a network connection, resulting in a higher cost compared to our client-side sandboxes.

To solve this problem, we built Nodebox, a runtime that runs entirely in the browser, eliminating the need for a network connection and infrastructure.

Nodebox gives you the same user experience you have come to expect from Sandpack, which means a near-instant server-side JavaScript environment at the click of a button—built for experimentation, examples and documentation.

## The differences between a VM and Nodebox

As mentioned in the previous section, we solved server-side sandboxes in CodeSandbox by using Firecracker VMs. In this section, we'll explain the advantages and disadvantages of each approach.

### Advantages of VMs over Nodebox

- You get dedicated resources, with no resource limits enforced by the browser
- You have an entire Unix OS available
- You can run any language, database, command
- You can use network sockets
- You can run large and complex projects
- A perfect 1:1 environment as compared to your local setup (at least, if you're using a Unix-based system)
- No emulation, so Node.js would run exactly the same way as locally

### Advantages of Nodebox

- No need for any infrastructure
- No need for a network connection
- Instant feedback to any change
- Easy to get started
- Easy and instant reset - simply refresh the page/iframe
- Every page visitor gets their own Nodebox instance automatically

## What makes it different

Nodebox is currently the only cross-browser Node.js runtime supporting all the latest browsers:

- Chrome;
- Firefox;
- Safari \*

> - Support for iOS Safari is in beta

Nodebox does not emulate Node.js but is, instead, a Node.js-compatible runtime. This means that it implements as much of the Node.js API as possible while keeping a minimal performance imprint, using browser API where applicable and, in some cases, leaving out certain parts of Node.js due to browser [limitations](#Limitations) or complexity.

Nodebox uses an internal dependency manager that is fine-tuned to deliver optimal initial load time by utilizing dependency caching via [Sandpack CDN](https://github.com/codesandbox/sandpack-cdn). That CDN is an open-source Rust package manager that runs in the cloud and can be self-hosted pretty easily as well.

While there are alternatives to Nodebox, they are closer to mimicking a container-based environment, running commands step-by-step, or even the entire Linux distributive in your browser. That makes them slower and harder to use compared to Nodebox, which is optimized to run sandboxes fast and with as little friction as possible.

## Limitations

Unfortunately, any type of runtime that does not have access to operating system-level APIs will come with certain limitations. For Nodebox, those are the following:

- N-API modules
- net#Sockets pointing to external IPs
- Synchronous exec/spawn
- async_hooks (planned for implementation)
- Automatic process exiting - users now need to manually call `process.exit` before the process is exited (planned for implementation)

As we implement every module manually one by one, it is possible that some will not behave correctly. If this happens, feel free to open an issue here on GitHub and we'll make sure to fix it.

## Documentation

- [**Getting started**](#getting-started)
- [API documentation](https://github.com/codesandbox/nodebox-runtime/blob/main/packages/nodebox/api.md)

---

## Getting started

Nodebox is meant for usage in your client-side applications, granting them the capability of running actual Node.js code directly in the browser. Here are a couple of examples of when Nodebox can be used:

- Building interactive examples for server-side code in your documentation;
- Showcasing a UI component library in the actual framework it's built for;
- Generally any evaluation of Node.js code and previewing it in the browser.

In the context of this tutorial, we will be working on a documentation website that illustrates different examples of using a Next.js application. Bear in mind that our documentation itself can be written in any framework of our choosing.

### Install

Nodebox can be installed from NPM just like any other dependency:

```sh
npm install @codesandbox/nodebox
```

### Setup

Nodebox consists of two main parts:

- A runtime environment evaluating the code;
- A preview environment serving the result of the evaluation.

Corresponding to these two parts, let's create two iframes in our application:

```html
<!--
  The "nodebox" iframe will mount the Nodebox runtime,
  allowing it to communicate with the rest of the application.
-->
<iframe id="nodebox-iframe"></iframe>

<!--
  The "preview" iframe will contain the result of running
  the Next.js example we will configure in a moment.
-->
<iframe id="preview-iframe"></iframe>
```

Although the runtime environment can be self-hosted, we will use the default one pointing to the deployed Nodebox instance on CodeSandbox servers. We do need, however, to specify an `iframe` reference in our application where Nodebox should render its preview.

```js
import { Nodebox } from '@codesandbox/nodebox';

const runtime = new Nodebox({
  // Provide a reference to the <iframe> element in the DOM
  // where Nodebox should render the preview.
  iframe: document.getElementById('nodebox-iframe'),
});

// Establish a connection with the runtime environment.
await runtime.connect();
```

> Learn more about the [Nodebox API](https://github.com/codesandbox/nodebox-runtime/blob/main/packages/nodebox/api.md).

You want to establish **a single Nodebox instance** across your entire application. Bear that in mind during the setup phase and consult your framework's documentation and best practices regarding the most efficient way of achieving this.

Previews correspond to _commands_ executed in Nodebox, meaning that at this stage there will be no previews mounted at the given iframe because we haven't run any commands yet. Let's change that.

### Initialize file system

Much like your own project, the project you create in Nodebox needs files to work with. It can be a single JavaScript file or the entire project, like Astro or Next.js.

Let's describe a Next.js project that we need.

```js
// Populate the in-memory file system of Nodebox
// with a Next.js project files.
await runtime.fs.init({
  'package.json': JSON.stringify({
    name: 'nextjs-preview',
    dependencies: {
      '@next/swc-wasm-nodejs': '12.1.6',
      next: '12.1.6',
      react: '18.2.0',
      'react-dom': '18.2.0',
    },
  }),
  // On the index page, let's illustrate how server-side props
  // propagate to your page component in Next.js.
  'pages/index.jsx': `
export default function Homepage({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>The name "{name}" has been received from server-side props.</p>
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      name: 'John'
    }
  }
}
    `,
});
```

> You can reference standard Node.js modules, as well as external dependencies while writing your project files. Note that you **don't have to install** those dependencies as Nodebox will manage dependency installation, caching, and resolution automatically.

What we did above was outline a file system state of an actual Next.js project for Nodebox to run. The last step remaining is to run Next.js.

### Run project

To run the project, we will run the `npm dev` command using the Shell API provided by Nodebox.

```js
// First, create a new shell instance.
// You can use the same instance to spawn commands,
// observe stdio, restart and kill the process.
const shell = runtime.shell.create();

// Then, let's run the "dev" script that we've defined
// in "package.json" during the previous step.
const nextProcess = await shell.runCommand('npm', ['dev']);

// Find the preview by the process and mount it
// on the preview iframe on the page.
const previewInfo = await runtime.preview.getByShellId(nextProcess.id);
const previewIframe = document.getElementById('preview-iframe');
previewIframe.setAttribute('src', previewInfo.url);
```

> Note that you can treat `shell.runCommand` similar to `spawn` in Node.js. Learn more about the Shell API in the [documentation](https://github.com/codesandbox/nodebox-runtime/blob/main/packages/nodebox/api.md).

Once this command runs, it will return a shell reference we can use to retrieve the preview URL. By mounting that preview URL on our preview iframe from the setup, we can see the Next.js project running:

![](https://github.com/codesandbox/nodebox-runtime/blob/main/packages/nodebox/nextjs-preview.png)

That's it! 🎉 **Not a single server was spawned while running this Next.js application**. Everything was managed by Nodebox directly in your browser.

👉 Check out the [Sandbox for this tutorial](https://codesandbox.io/p/sandbox/nodebox-next-js-example-ji27x8).