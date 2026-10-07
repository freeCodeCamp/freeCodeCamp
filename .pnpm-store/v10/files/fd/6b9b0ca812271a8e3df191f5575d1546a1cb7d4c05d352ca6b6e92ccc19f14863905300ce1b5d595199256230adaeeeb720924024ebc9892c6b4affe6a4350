_Coming from V1 (or js client v2)?_ Read the [migration guide](https://github.com/algolia/algoliasearch-helper-js/wiki/Migration-guide-:-V1-to-V2) to the new version of the Helper.

_Coming from V2?_ Read the [migration guide](https://github.com/algolia/algoliasearch-helper-js/wiki/Migration-guide-:-V2-to-V3) to the new version of the Helper.

**The JavaScript helper is an advanced library we provide to our users. If you are looking to build a complete search interface, we recommend you to use [InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/). If you want to build an autocomplete menu, see [Autocomplete](https://github.com/algolia/autocomplete).**

# algoliasearch-helper

This module is the companion of the [algolia/algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript). It helps you keep track of the search parameters and provides a higher level API.

[See the helper in action](https://community.algolia.com/algoliasearch-helper-js/)

[![Version][version-svg]][package-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url] [![jsDelivr Hits][jsdelivr-badge]][jsdelivr-hits]

[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/algoliasearch-helper.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=algoliasearch-helper
[version-svg]: https://img.shields.io/npm/v/algoliasearch-helper.svg?style=flat-square
[package-url]: https://npmjs.org/package/algoliasearch-helper
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/algoliasearch-helper/badge
[jsdelivr-hits]: https://www.jsdelivr.com/package/npm/algoliasearch-helper

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Examples](#examples)
  - [Vanilla JavaScript](#vanilla-javascript)
  - [AngularJS module](#angularjs-module)
- [Helper cheatsheet](#helper-cheatsheet)
  - [Add the helper in your project](#add-the-helper-in-your-project)
  - [Regular `<script>` tag](#regular-script-tag)
  - [With npm](#with-npm)
  - [Init the helper](#init-the-helper)
  - [Helper lifecycle](#helper-lifecycle)
  - [Objects](#objects)
  - [Search](#search)
  - [Events](#events)
  - [Query](#query)
  - [Filtering results](#filtering-results)
  - [Facet utilities](#facet-utilities)
  - [Tags](#tags)
  - [Pagination](#pagination)
  - [Index](#index)
  - [One time query](#one-time-query)
  - [Query parameters](#query-parameters)
  - [Results format](#results-format)
- [Browser support](#browser-support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Search parameters management
- Facets exclusions
- Pagination
- Disjunctive faceting (search on two or more values of the same facet)

## Examples

### Vanilla JavaScript

A small example that uses Browserify to manage modules.

```js
var algoliasearch = require('algoliasearch');
var algoliasearchHelper = require('algoliasearch-helper');

var client = algoliasearch('appId', 'apiKey');

var helper = algoliasearchHelper(client, 'indexName', {
  facets: ['mainCharacterFirstName', 'year'],
  disjunctiveFacets: ['director'],
});

helper.on('result', function (event) {
  console.log(event.results);
});

helper.addDisjunctiveFacetRefinement('director', 'Clint Eastwood');
helper.addDisjunctiveFacetRefinement('director', 'Sofia Coppola');

helper.addNumericRefinement('year', '=', 2003);

// Search for any movie filmed in 2003 and directed by either C. Eastwood or S. Coppola
helper.search();
```

See more examples in the [examples folder](examples/)

### AngularJS module

```js
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.angular.js"></script>
<script src="dist/algoliasearch.helper.min.js"></script>

<script type="text/javascript">
angular.module('searchApp', ['ngSanitize', 'algoliasearch'])
.controller('searchController', ['$scope', '$sce', 'algolia', function($scope, $sce, algolia) {
  var algolia = algolia.Client('applicationId', 'apiKey');
  $scope.q = '';
  $scope.content = null;
  $scope.helper = algoliasearchHelper(algolia, 'indexName', {
    facets: ['type', 'shipping'],
    disjunctiveFacets: ['category', 'manufacturer'],
    hitsPerPage: 5,
  });
  $scope.helper.on('result', function(event) {
    $scope.$apply(function() {
      $scope.content = event.results;
    });
  });
  $scope.toggleRefine = function($event, facet, value) {
    $event.preventDefault();
    $scope.helper.toggleRefine(facet, value).search();
  };
  $scope.$watch('q', function(q) {
    $scope.helper.setQuery(q).search();
  });
  $scope.helper.search();
}]);
</script>
```

You can see the full [Angular example here](https://codepen.io/Algolia/pen/PzZobK)

## Helper cheatsheet

[There is also a complete JSDoc](https://community.algolia.com/algoliasearch-helper-js/reference.html)

### Add the helper in your project

### Regular `<script>` tag

Use our [jsDelivr](http://www.jsdelivr.com/) build:

`<script src="https://cdn.jsdelivr.net/algoliasearch.helper/2/algoliasearch.helper.min.js"></script>`

### With npm

`npm install algoliasearch-helper`

### Init the helper

```js
var helper = algoliasearchHelper(client, 'indexName' /*, parameters*/);
```

### Helper lifecycle

1. modify the parameters of the search (usually through user interactions)<br/> `helper.setQuery('iphone').addFacetRefinement('category', 'phone')`

2. trigger the search (after all the modification have been applied)<br/> `helper.search()`

3. read the results (with the event "result" handler) and update the UI with the results<br/> `helper.on('result', function(event) { updateUI(event.results); });`

4. go back to 1

### Objects

**AlgoliasearchHelper**: the helper. Keeps the state of the search, makes the queries and calls the handlers when an event happen.

**SearchParameters**: the object representing the state of the search. The current state is stored in `helperInstance.state`.

**SearchResults**: the object in which the Algolia answers are transformed into. This object is passed to the result event handler. An example of SearchResults in JSON is available at [the end of this readme](#results-format)

### Search

The search is triggered by the `search()` method.

It takes all the previous modifications to the search and uses them to create the queries to Algolia. The search parameters are immutable.

Example:

```js
var helper = algoliasearchHelper(client, indexName);

// Let's monitor the results with the console
helper.on('result', function (event) {
  console.log(event.results);
});

// Let's make an empty search
// The results are all sorted using the dashboard configuration
helper.search();

// Let's search for "landscape"
helper.setQuery('landscape').search();

// Let's add a category "photo"
// Will make a search with "photo" tag and "landscape" as the query
helper.addTag('photo').search();
```

### Events

The helper is a Node.js [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) instance.

`result`: get notified when new results are received. The handler function will receive two objects (`SearchResults` and `SearchParameters`).

`error`: get notified when errors are received from the API.

`change`: get notified when a property has changed in the helper

`search` : get notified when a request is sent to Algolia

#### Listen to the `result` event

```js
helper.on('result', updateTheResults);
```

#### Listen to a `result` event once

```js
helper.once('result', updateTheResults);
```

#### Remove a `result` listener

```js
helper.removeListener('result', updateTheResults);
```

#### Remove all `result` listeners

```js
helper.removeAllListeners('result');
```

All the methods from Node.js [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) class are available.

### Query

#### Do a search with the query "fruit"

```javscript
helper.setQuery('fruit').search();
```

### Filtering results

Facets are filters to retrieve a subset of an index having a specific value for a given attribute. First you need to define which attribute will be used as a facet in the dashboard: [https://www.algolia.com/explorer#?tab=display](https://www.algolia.com/explorer#?tab=display)

#### Regular (conjunctive) facets

Refinements are ANDed by default (Conjunctive selection).

##### Facet definition

```js
var helper = algoliasearchHelper(client, indexName, {
  facets: ['ANDFacet'],
});
```

##### Add a facet filter

```js
helper.addFacetRefinement('ANDFacet', 'valueOfANDFacet').search();
```

##### Remove a facet filter

```js
helper.removeFacetRefinement('ANDFacet', 'valueOfANDFacet').search();
```

#### Disjunctive facets

Refinements are ORed by default (Disjunctive selection).

##### Facet definition

```js
var helper = algoliasearchHelper(client, indexName, {
  disjunctiveFacets: ['ORFacet'],
});
```

##### Add a facet filter

```js
helper.addDisjunctiveFacetRefinement('ORFacet', 'valueOfORFacet').search();
```

##### Remove a facet filter

```js
helper.removeDisjunctiveFacetRefinement('ORFacet', 'valueOfORFacet').search();
```

#### Negative facets

Filter so that we do NOT get a given facet

##### Facet definition (same as "AND" facet)

```js
var helper = algoliasearchHelper(client, indexName, {
  facets: ['ANDFacet'],
}).search();
```

##### Exclude a value for a facet

```js
helper.addFacetExclusion('ANDFacet', 'valueOfANDFacetToExclude');
```

##### Remove an exclude from the list of excluded values

```js
helper.removeFacetExclusion('ANDFacet', 'valueOfANDFacetToExclude');
```

#### Numeric facets

Filter over numeric attributes with math operations like `=`, `>`, `<`, `>=`, `<=`. Can be used for numbers and dates (if converted to timestamp)

##### Facet definition

```js
var helper = algoliasearchHelper(client, indexName, {
  disjunctiveFacets: ['numericAttribute'],
});
```

##### Add numeric refinements

```js
helper.addNumericRefinement('numericAttribute', '=', '3').search();
// filter to only the results that match numericAttribute=3
helper.addNumericRefinement('numericAttribute', '=', '4').search();
// filter to only the results that match numericAttribute=3 AND numericAttribute=4

// On another numeric with no previous filter
helper
  .addNumericRefinement('numericAttribute2', '=', ['42', '56', '37'])
  .search();
// filter to only the results that match numericAttribute2=42 OR numericAttribute2=56 OR numericAttribute2=37
```

##### Remove a numeric refinement

```js
helper.removeNumericRefinement('numericAttribute', '=', '3').search();
```

##### Batch numeric filter removal

```js
// for the single operator = on numericAttribute
helper.removeNumericRefinement('numericAttribute', '=').search();
// for all the refinements on numericAttribute
helper.removeNumericRefinement('numericAttribute').search();
```

#### Hierarchical facets

Hierarchical facets are useful to build such navigation menus:

```txt
| products
  > fruits
    > citrus
    | strawberries
    | peaches
    | apples
```

Here, we refined the search this way:

- click on fruits
- click on citrus

##### Usage

To build such menu, you need to use hierarchical faceting:

```javascript
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [
    {
      name: 'products',
      attributes: ['categories.lvl0', 'categories.lvl1'],
    },
  ],
});
```

**Requirements:** All the specified `attributes` must be defined in your Algolia settings as attributes for faceting.

Given your objects looks like this:

```json
{
  "objectID": "123",
  "name": "orange",
  "categories": {
    "lvl0": "fruits",
    "lvl1": "fruits > citrus"
  }
}
```

And you refine `products`:

```js
helper.toggleFacetRefinement('products', 'fruits > citrus');
```

You will get a hierarchical presentation of your facet values: a navigation menu of your facet values.

```js
helper.on('result', function (event) {
  console.log(event.results.hierarchicalFacets[0]);
  // {
  //   'name': 'products',
  //   'count': null,
  //   'isRefined': true,
  //   'path': null,
  //   'data': [{
  //     'name': 'fruits',
  //     'path': 'fruits',
  //     'count': 1,
  //     'isRefined': true,
  //     'data': [{
  //       'name': 'citrus',
  //       'path': 'fruits > citrus',
  //       'count': 1,
  //       'isRefined': true,
  //       'data': null
  //     }]
  //   }]
  // }
});
```

To ease navigation, we always:

- provide the root level categories
- provide the current refinement sub categories (`fruits > citrus > *`: n + 1)
- provide the parent refinement (`fruits > citrus` => `fruits`: n -1) categories
- refine the search using the current hierarchical refinement

##### Multiple values per level

Your records can also share multiple categories between one another by using arrays inside your object:

```json
{
  "objectID": "123",
  "name": "orange",
  "categories": {
    "lvl0": ["fruits", "color"],
    "lvl1": ["fruits > citrus", "color > orange"]
  }
},
{
  "objectID": "456",
  "name": "grapefruit",
  "categories": {
    "lvl0": ["fruits", "color", "new"],
    "lvl1": ["fruits > citrus", "color > yellow", "new > citrus"]
  }
}
```

##### Specifying another separator

```js
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [
    {
      name: 'products',
      attributes: ['categories.lvl0', 'categories.lvl1'],
      separator: '|',
    },
  ],
});

helper.toggleFacetRefinement('products', 'fruits|citrus');
```

Would mean that your objects look like so:

```json
{
  "objectID": "123",
  "name": "orange",
  "categories": {
    "lvl0": "fruits",
    "lvl1": "fruits|citrus"
  }
}
```

##### Specifying a different sort order for values

The default sort for the hierarchical facet view is: `isRefined:desc (first show refined), name:asc (then sort by name)`.

You can specify a different sort order by using:

```js
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [
    {
      name: 'products',
      attributes: ['categories.lvl0', 'categories.lvl1'],
      sortBy: ['count:desc', 'name:asc'], // first show the most common values, then sort by name
    },
  ],
});
```

The available sort tokens are:

- count
- isRefined
- name
- path

##### Restrict results and hierarchical values to non-root level

Let's say you have a lot of levels:

```
- fruits
  - yellow
    - citrus
      - spicy
```

But you only want to get the values starting at "citrus", you can use `rootPath`

You can specify an root path to filter the hierarchical values

```
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [{
    name: 'products',
    attributes: ['categories.lvl0', 'categories.lvl1', 'categories.lvl2', 'categories.lvl3'],
    rootPath: 'fruits > yellow > citrus'
  }]
});
```

Having a rootPath will refine the results on it **automatically**.

##### Hide parent level of current parent level

By default the hierarchical facet is going to return the child and parent facet values of the current refinement.

If you do not want to get the parent facet values you can set showParentLevel to false

```js
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [
    {
      name: 'products',
      attributes: ['categories.lvl0', 'categories.lvl1'],
      showParentLevel: false,
    },
  ],
});
```

##### Asking for the current breadcrumb

```js
var helper = algoliasearchHelper(client, indexName, {
  hierarchicalFacets: [
    {
      name: 'products',
      attributes: ['categories.lvl0', 'categories.lvl1'],
      separator: '|',
    },
  ],
});

helper.toggleFacetRefinement('products', 'fruits|citrus');
var breadcrumb = helper.getHierarchicalFacetBreadcrumb('products');

console.log(breadcrumb);
// ['fruits', 'citrus']

console.log(breadcrumb.join(' | '));
// 'fruits | citrus'
```

#### Clearing filters

##### Clear all the refinements for all the refined attributes

```js
helper.clearRefinements().search();
```

##### Clear all the refinements for a specific attribute

```js
helper.clearRefinements('ANDFacet').search();
```

##### [ADVANCED] Clear only the exclusions on the "ANDFacet" attribute

```js
helper
  .clearRefinements(function (value, attribute, type) {
    return type === 'exclude' && attribute === 'ANDFacet';
  })
  .search();
```

### Facet utilities

#### Get the values of a facet with the default sort

```js
helper.on('result', function (event) {
  // Get the facet values for the attribute age
  event.results.getFacetValues('age');
  // It will be ordered :
  //  - refined facets first
  //  - then ordered by number of occurence (bigger count -> higher in the list)
  //  - then ordered by name (alphabetically)
});
```

#### Get the values of a facet with a custom sort

```js
helper.on('result', function (event) {
  // Get the facet values for the attribute age
  event.results.getFacetValues('age', { sortBy: ['count:asc'] });
  // It will be ordered by number of occurence (lower number => higher position)
  // Elements that can be sorted : count, name, isRefined
  // Type of sort : 'asc' for ascending order, 'desc' for descending order
});
```

#### Get the facet stats

_This only apply on numeric based facets/attributes._

```js
helper.on('result', function (event) {
  // Get the facet values for the attribute age
  event.results.getFacetStats('age');
});
```

### Tags

Tags are an easy way to do filtering. They are based on a special attribute in the records named `_tags`, which can be a single string value or an array of strings.

#### Add a tag filter for the value "landscape"

```js
helper.addTag('landscape').search();
```

#### Remove a tag filter for the value "landscape"

```js
helper.removeTag('landscape').search();
```

#### Clear all the tags filters

```js
helper.clearTags().search();
```

### Pagination

#### Get the current page

```js
helper.getPage();
```

#### Change page

```js
helper.setPage(3).search();
```

#### Automatic reset to page 0

During a search, changing the parameters will update the result set, which can then change the number of pages in the result set. Therefore, the behavior has been standardized so that any operation that may change the number of page will reset the pagination to page 0.

This may lead to some unexpected behavior. For example:

```js
helper.setPage(4);
helper.getPage(); // 4
helper.setQuery('foo');
helper.getPage(); // 0
```

Non exhaustive list of operations that trigger a reset:

- refinements (conjunctive, exclude, disjunctive, hierarchical, numeric)
- tags
- index (setIndex)
- setQuery
- setHitsPerPage
- setTypoTolerance

### Index

Index can be changed. The common use case is when you have several slaves with different sort order (sort by relevance, price or any other attribute).

#### Change the current index

```js
helper.setIndex('index_orderByPrice').search();
```

#### Get the current index

```js
var currentIndex = helper.getIndex();
```

### One time query

Sometime it's convenient to reuse the current search parameters with small changes without changing the state stored in the helper. That's why there is a function called `searchOnce`. This method does not trigger `change` or `error` events.

In the following, we are using `searchOnce` to fetch only a single element using all the other parameters already set in the search parameters.

#### Using searchOnce with a callback

```js
var state = helper.searchOnce(
  { hitsPerPage: 1 },
  function (error, content, state) {
    // if an error occured it will be passed in error, otherwise its value is null
    // content contains the results formatted as a SearchResults
    // state is the instance of SearchParameters used for this search
  }
);
```

#### Using searchOnce with a promise

```js
var state1 = helper.searchOnce({ hitsPerPage: 1 }).then(function (res) {
  // res contains
  // {
  //   content : SearchResults
  //   state : SearchParameters (the one used for this specific search)
  // }
});
```

### Query parameters

There are lots of other parameters you can set.

#### Set a parameter at the initialization of the helper

```js
var helper = algoliasearchHelper(client, indexName, {
  hitsPerPage: 50,
});
```

#### Set a parameter later

```js
helper.setQueryParameter('hitsPerPage', 20).search();
```

#### List of parameters that can be set

<table cellspacing="0" cellpadding="0" class="params">
  <tbody>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><b>Name</b></span></p>
      </td>
      <td valign="top" class="td2">
        <p class="p1"><span class="s1"><b>Type</b></span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><b>Description</b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">advancedSyntax</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Enable the advanced syntax.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/">advancedSyntax on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">allowTyposOnNumericTokens</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Should the engine allow typos on numerics.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/allowTyposOnNumericTokens/">allowTyposOnNumericTokens on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">analytics</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Enable the analytics</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/analytics/">analytics on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">analyticsTags</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Tag of the query in the analytics.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/analyticsTags/">analyticsTags on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">aroundLatLng</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Center of the geo search.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLng/">aroundLatLng on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">aroundLatLngViaIP</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Center of the search, retrieve from the user IP.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLngViaIP/">aroundLatLngViaIP on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">aroundPrecision</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Precision of the geo search.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/aroundPrecision/">aroundPrecision on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">aroundRadius</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Radius of the geo search.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/aroundRadius/">aroundRadius on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">minimumAroundRadius</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Minimum radius of the geo search.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/minimumAroundRadius/">minimumAroundRadius on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">attributesToHighlight</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">List of attributes to highlight</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/">attributesToHighlight on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">attributesToRetrieve</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">List of attributes to retrieve</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/attributesToRetrieve/">attributesToRetrieve on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">attributesToSnippet</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">List of attributes to snippet</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/">attributesToSnippet on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">disjunctiveFacets</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">Array.&lt;string&gt;</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p1"><span class="s1">All the declared disjunctive facets</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">distinct</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean|number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Remove duplicates based on the index setting attributeForDistinct</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/distinct/">distinct on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">facets</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">Array.&lt;string&gt;</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p1"><span class="s1">All the facets that will be requested to the server</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">filters</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p1"><span class="s1">Add filters to the query (similar to WHERE clauses)</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/filters/">filters on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">getRankingInfo</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">integer</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Enable the ranking informations in the response</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/getRankingInfo/">getRankingInfo on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">hitsPerPage</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Number of hits to be returned by the search API</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/hitsPerPage/">hitsPerPage on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">ignorePlurals</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Should the plurals be ignored</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/ignorePlurals/">ignorePlurals on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">insideBoundingBox</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Geo search inside a box.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/insideBoundingBox/">insideBoundingBox on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">insidePolygon</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Geo search inside a polygon.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/insidePolygon/">insidePolygon on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">maxValuesPerFacet</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Number of values for each facetted attribute</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/">maxValuesPerFacet on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">minWordSizefor1Typo</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Number of characters to wait before doing one character replacement.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/minWordSizefor1Typo/">minWordSizefor1Typo on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">minWordSizefor2Typos</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Number of characters to wait before doing a second character replacement.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/minWordSizefor2Typos/">minWordSizefor2Typos on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">optionalWords</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Add some optional words to those defined in the dashboard</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/optionalWords/">optionalWords on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">page</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">number</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">The current page number</span></p>
        <p class="p5"><span class="s1"><a href="algolia.com/doc/api-reference/api-parameters/page/">page on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">query</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Query string of the instant search. The empty string is a valid query.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/query/">query on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">queryType</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">How the query should be treated by the search engine. Possible values: prefixAll, prefixLast, prefixNone</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/queryType/">queryType on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">removeWordsIfNoResults</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Possible values are "lastWords" "firstWords" "allOptional" "none" (default)</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/removeWordsIfNoResults/">removeWordsIfNoResults on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">replaceSynonymsInHighlight</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Should the engine replace the synonyms in the highlighted results.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/replaceSynonymsInHighlight/">replaceSynonymsInHighlight on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">restrictSearchableAttributes</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Restrict which attribute is searched.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/restrictSearchableAttributes/">restrictSearchableAttributes on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">synonyms</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">boolean</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Enable the synonyms</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/synonyms/">synonyms on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">tagFilters</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">Contains the tag filters in the raw format of the Algolia API. Setting this parameter is not compatible with the of the add/remove/toggle methods of the tag api.</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/tagFilters/">tagFilters on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td4">
        <p class="p2"><span class="s2">typoTolerance</span></p>
      </td>
      <td valign="top" class="td5">
        <p class="p3"><span class="s1">string</span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1">How the typo tolerance behave in the search engine. Possible values: true, false, min, strict</span></p>
        <p class="p5"><span class="s1"><a href="https://www.algolia.com/doc/api-reference/api-parameters/typoTolerance/">typoTolerance on Algolia.com<span class="s3"></span></a></span></p>
      </td>
    </tr>
  </tbody>
</table>

### Results format

Here is an example of a result object you get with the `result` event.

```js
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
   ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
   ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
   ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
```

## Browser support

This project works on any [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition) browser, basically >= IE9+.
