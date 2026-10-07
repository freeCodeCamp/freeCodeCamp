<p align="center">
  <h1>Algolia Recommend</h1>

  <h4>The perfect starting point to integrate <a href="https://www.algolia.com/products/recommendations" target="_blank">Algolia Recommend</a> within your JavaScript project</h4>

  <p align="center">
    <a href="https://npmjs.org/package/@algolia/recommend"><img src="https://img.shields.io/npm/v/@algolia/recommend.svg?style=flat-square" alt="NPM version"></img></a>
    <a href="LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License"></a>
  </p>
</p>

<p align="center">
  <a href="https://www.algolia.com/doc/api-client/methods/recommend/" target="_blank">Documentation</a>  •
  <a href="https://www.algolia.com/doc/ui-libraries/recommend/introduction/what-is-recommend/" target="_blank">UI library</a>  •
  <a href="https://discourse.algolia.com" target="_blank">Community Forum</a>  •
  <a href="http://stackoverflow.com/questions/tagged/algolia" target="_blank">Stack Overflow</a>  •
  <a href="https://github.com/algolia/algoliasearch-client-javascript/issues" target="_blank">Report a bug</a>  •
  <a href="https://www.algolia.com/support" target="_blank">Support</a>
</p>

## ✨ Features

- Thin & **minimal low-level HTTP client** to interact with Algolia's Recommend API
- Works both on the **browser** and **node.js**
- **UMD compatible**, you can use it with any module loader
- Built with TypeScript

## 💡 Getting Started

First, install Algolia Recommend API Client via the [npm](https://www.npmjs.com/get-npm) package manager:

```bash
npm install @algolia/recommend
```

Then, let's retrieve recommendations:

```js
const algoliarecommend = require('@algolia/recommend');

const client = algoliarecommend('YourApplicationID', 'YourAdminAPIKey');

client
  .getFrequentlyBoughtTogether([
    {
      indexName: 'your_index_name',
      objectID: 'your_object_id',
    },
  ])
  .then(({ results }) => {
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  });

client
  .getRelatedProducts([
    {
      indexName: 'your_index_name',
      objectID: 'your_object_id',
    },
  ])
  .then(({ results }) => {
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  });
```

For full documentation, visit the **[online documentation](https://www.algolia.com/doc/api-client/methods/recommend/)**.

## 📄 License

Algolia Recommend API Client is an open-sourced software licensed under the [MIT license](LICENSE.md).
