<p align="center">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/">
    <img alt="InstantSearch.js" src="https://github.com/algolia/instantsearch/blob/master/.github/banner.png?raw=true">
  </a>

  <p align="center">
    InstantSearch.js is a JavaScript library for building performant and instant search experiences with <a href="https://www.algolia.com/?utm_source=instantsearch.js&utm_campaign=repository">Algolia</a>.
  </p>
</p>

---

InstantSearch.js is a vanilla JavaScript library that lets you create an instant-search result experience using [Algolia][algolia-website]’s search API. It is part of the InstantSearch family:

**InstantSearch.js** | [React InstantSearch][instantsearch-github] | [Vue InstantSearch][instantsearch-github] | [React InstantSearch Native][instantsearch-github] | [InstantSearch Android][instantsearch-android-github] | [InstantSearch iOS][instantsearch-ios-github]

<details>
  <summary><strong>Table of contents</strong></summary>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Why](#why)
- [Getting started](#getting-started)
- [Installation](#installation)
  - [TypeScript users](#typescript-users)
- [Documentation](#documentation)
- [Demos](#demos)
- [Playground](#playground)
- [Browser support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</details>

## Why

You should be using InstantSearch if you want to:

- Design search experiences with best practices
- Customize your components at will
- Remain independent from external frameworks

## Getting started

Using InstantSearch.js is as simple as adding this JavaScript code to your page:

```javascript
// 1. Instantiate the search
const search = instantsearch({
  indexName: 'instant_search',
  searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
});

search.addWidgets([
  // 2. Create an interactive search box
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for products',
  }),

  // 3. Plug the search results into the product container
  instantsearch.widgets.hits({
    container: '#products',
    templates: {
      item: (hit, { html, components }) =>
        html`
          <h3>${components.Highlight({ attribute: 'name', hit })}</h3>
          <p>${components.Snippet({ attribute: 'description', hit })}</p>
        `,
    },
  }),

  // 4. Make the brands refinable
  instantsearch.widgets.refinementList({
    container: '#brand',
    attribute: 'brand',
  }),
]);

// 5. Start the search!
search.start();
```

<p align="center">
  <a href="https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/InstantSearch.js/getting-started" title="Edit on CodeSandbox">
    <img alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>
</p>

To learn more about the library, follow the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/) guide or check how to [add it to your own project](https://www.algolia.com/doc/guides/building-search-ui/installation/js/).

## Installation

```sh
npm install instantsearch.js algoliasearch
# or
yarn add instantsearch.js algoliasearch
```

### TypeScript users

To use InstantSearch.js in a TypeScript environment, depending on your [`algoliasearch`](https://github.com/algolia/algoliasearch-client-javascript) version, you need to import different types.

> You still need to import these types even if you don't use InstantSearch.js with [`algoliasearch`](https://github.com/algolia/algoliasearch-client-javascript).

#### `algoliasearch` v4.x

This version uses types provided by both `algoliasearch` and `@algolia/client-search`.

```bash
yarn add algoliasearch@4 @algolia/client-search
```

#### `algoliasearch` v3.x

```bash
yarn add @types/algoliasearch@3
```

> v3.x is deprecated and will soon no longer be supported.

## Documentation

The documentation is available on the [Algolia website](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/).

## Demos

| E-commerce | Media | Travel |
| --- | --- | --- |
| <a href="https://instantsearchjs.netlify.app/examples/e-commerce/"><img src="https://www.algolia.com/doc/assets/images/build-search-ui/demos/e-commerce-2c7ed6b6.png" width="250" alt="E-commerce demo preview"></a> | <a href="https://instantsearchjs.netlify.app/examples/media/"><img src="https://www.algolia.com/doc/assets/images/build-search-ui/demos/media-articles-abc153ab.png" width="250" alt="Media demo preview"></a> | <a href="https://instantsearchjs.netlify.app/examples/tourism/"><img src="https://instantsearchjs.netlify.app/examples/tourism/capture.png" width="250" alt="Tourism demo preview"></a> |

See more demos [on the website](https://www.algolia.com/doc/guides/building-search-ui/resources/demos/js/).

## Playground

You can get to know InstantSearch.js on [this playground](https://codesandbox.io/s/github/algolia/create-instantsearch-app/tree/templates/instantsearch.js).

Start by [adding widgets](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/) and tweaking the display. Once you feel familiar with the library, we recommend following the [getting started guide](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).

## Browser support

We support the **last two versions of major browsers** (Chrome, Edge, Firefox, Safari).

Please refer to the [browser support](https://www.algolia.com/doc/guides/building-search-ui/installation/js/#browser-support) section in the documentation to use InstantSearch.js on other browsers.

## Troubleshooting

Encountering an issue? Before reaching out to support, we recommend heading to our [FAQ](https://www.algolia.com/doc/guides/building-search-ui/troubleshooting/faq/js/) where you will find answers for the most common issues and gotchas with the library.

## Contributing

We welcome all contributors, from casual to regular 💙

- **Bug report**. Is something not working as expected? [Send a bug report][contributing-bugreport].
- **Feature request**. Would you like to add something to the library? [Send a feature request][contributing-featurerequest].
- **Documentation**. Did you find a typo in the doc? [Open an issue][contributing-newissue] and we'll take care of it.
- **Development**. If you don't know where to start, you can check the open issues that are [tagged easy][contributing-label-easy], the [bugs][contributing-label-bug] or [chores][contributing-label-chore].

To start contributing to code, you need to:

1.  [Fork the project](https://help.github.com/articles/fork-a-repo/)
1.  [Clone the repository](https://help.github.com/articles/cloning-a-repository/)
1.  Install the dependencies: `yarn`
1.  Run the development mode: `yarn storybook`
1.  [Open the stories](http://localhost:6006)

Please read [our contribution process](https://github.com/algolia/instantsearch/blob/master/CONTRIBUTING.md) to learn more.

## License

InstantSearch.js is [MIT licensed][license-url].

<!-- Links -->

[license-url]: LICENSE
[algolia-website]: https://www.algolia.com/?utm_source=instantsearch.js&utm_campaign=repository
[instantsearch-github]: https://github.com/algolia/instantsearch/
[instantsearch-android-github]: https://github.com/algolia/instantsearch-android
[instantsearch-ios-github]: https://github.com/algolia/instantsearch-ios
[contributing-bugreport]: https://github.com/algolia/instantsearch/issues/new?template=BUG_REPORT.yml&labels=triage,Library%3A%20InstantSearch.js
[contributing-featurerequest]: https://github.com/algolia/instantsearch/discussions/new?category=ideas&labels=triage,Library%3A%20InstantSearch.js&title=Feature%20request%3A%20
[contributing-newissue]: https://github.com/algolia/instantsearch/issues/new?labels=triage,Library%3A%20InstantSearch.js
[contributing-label-easy]: https://github.com/algolia/instantsearch/issues?q=is%3Aopen+is%3Aissue+label%3A%22Difficulty%3A+Easy%22+label%3A%22Library%3A%20InstantSearch.js%22
[contributing-label-bug]: https://github.com/algolia/instantsearch/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Bug%22+label%3A%22Library%3A%20InstantSearch.js%22
[contributing-label-chore]: https://github.com/algolia/instantsearch/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Chore%22+label%3A%22Library%3A%20InstantSearch.js%22
