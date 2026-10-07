<p align="center">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/">
    <img alt="React InstantSearch" src="https://github.com/algolia/instantsearch/blob/master/.github/react-instantsearch-banner.png?raw=true">
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [react-instantsearch](#react-instantsearch)
  - [Why](#why)
  - [Installation](#installation)
  - [Getting started](#getting-started)
  - [Documentation](#documentation)
  - [Playground](#playground)
  - [Contributing](#contributing)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# react-instantsearch

React InstantSearch is an open-source React library that lets you create an instant search result experience using [Algolia][algolia-website]’s search API. It is part of the InstantSearch family:

**React InstantSearch** | [InstantSearch.js][instantsearch-github] | [Vue InstantSearch][instantsearch-github] | [InstantSearch Android][instantsearch-android-github] | [InstantSearch iOS][instantsearch-ios-github]

## Why

You should be using React InstantSearch if you want to:

- Design search experiences with best practices
- Customize your components at will
- Follow React principles

Note: If you are working with React Native, or otherwise do not use the DOM, check out `react-instantsearch-core` instead.

## Installation

React InstantSearch is available on the npm registry. It relies on [`algoliasearch`](https://github.com/algolia/algoliasearch-client-javascript) to communicate with Algolia APIs.

```sh
yarn add algoliasearch react-instantsearch
# or
npm install algoliasearch react-instantsearch
```

## Getting started

Using React InstantSearch is as simple as adding these components to your app:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const App = () => (
  <InstantSearch indexName="bestbuy" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);
```

<p align="center">
  <a href="https://codesandbox.io/s/github/algolia/instantsearch/tree/master/examples/react/default-theme" title="Edit on CodeSandbox">
    <img alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>
</p>

To learn more about the library, follow the [getting started guide][doc-getting-started].

## Documentation

The documentation is available on [algolia.com/doc][doc].

## Playground

You can get to know React InstantSearch on [this playground][doc-playground].

Start by [adding components][doc-getting-started] and tweaking the display. Once you get more familiar with the library, you can learn more advanced concepts in [our guides][doc-guides].

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

Please read [our contribution process](https://github.com/algolia/instantsearch/blob/master/CONTRIBUTING.md) to learn more.

## License

React InstantSearch is [MIT licensed](../../LICENSE).

<!-- Links -->

[doc]: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/
[doc-getting-started]: https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/
[doc-guides]: https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/
[doc-playground]: https://codesandbox.io/s/github/algolia/instantsearch/tree/master/examples/react/default-theme
[algolia-website]: https://www.algolia.com/
[instantsearch-github]: https://github.com/algolia/instantsearch
[instantsearch-android-github]: https://github.com/algolia/instantsearch-android
[instantsearch-ios-github]: https://github.com/algolia/instantsearch-ios
[contributing-bugreport]: https://github.com/algolia/instantsearch/issues/new?template=BUG_REPORT.yml&labels=triage,Library%3A%20React+InstantSearch
[contributing-featurerequest]: https://github.com/algolia/instantsearch/discussions/new?category=ideas&labels=triage,Library%3A%20React+InstantSearch&title=Feature%20request%3A%20
[contributing-newissue]: https://github.com/algolia/instantsearch/issues/new?labels=triage,Library%3A%20React+InstantSearch
[contributing-label-easy]: https://github.com/algolia/instantsearch/issues?q=is%3Aopen+is%3Aissue+label%3A%22Difficulty%3A+Easy%22+label%3A%22Library%3A%20React+InstantSearch%22
[contributing-label-bug]: https://github.com/algolia/instantsearch/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Bug%22+label%3A%22Library%3A%20React+InstantSearch%22
[contributing-label-chore]: https://github.com/algolia/instantsearch/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Chore%22+label%3A%22Library%3A%20React+InstantSearch%22
