symbol-tree
===========
[![Travis CI Build Status](https://api.travis-ci.org/jsdom/js-symbol-tree.svg?branch=master)](https://travis-ci.org/jsdom/js-symbol-tree) [![Coverage Status](https://coveralls.io/repos/github/jsdom/js-symbol-tree/badge.svg?branch=master)](https://coveralls.io/github/jsdom/js-symbol-tree?branch=master)

Turn any collection of objects into its own efficient tree or linked list using `Symbol`.

This library has been designed to provide an efficient backing data structure for DOM trees. You can also use this library as an efficient linked list. Any meta data is stored on your objects directly, which ensures any kind of insertion or deletion is performed in constant time. Because an ES6 `Symbol` is used, the meta data does not interfere with your object in any way.

Node.js 4+, io.js and modern browsers are supported.

Example
-------
A linked list:

```javascript
const SymbolTree = require('symbol-tree');
const tree = new SymbolTree();

let a = {foo: 'bar'}; // or `new Whatever()`
let b = {foo: 'baz'};
let c = {foo: 'qux'};

tree.insertBefore(b, a); // insert a before b
tree.insertAfter(b, c); // insert c after b

console.log(tree.nextSibling(a) === b);
console.log(tree.nextSibling(b) === c);
console.log(tree.previousSibling(c) === b);

tree.remove(b);
console.log(tree.nextSibling(a) === c);
```

A tree:

```javascript
const SymbolTree = require('symbol-tree');
const tree = new SymbolTree();

let parent = {};
let a = {};
let b = {};
let c = {};

tree.prependChild(parent, a); // insert a as the first child
tree.appendChild(parent,c ); // insert c as the last child
tree.insertAfter(a, b); // insert b after a, it now has the same parent as a

console.log(tree.firstChild(parent) === a);
console.log(tree.nextSibling(tree.firstChild(parent)) === b);
console.log(tree.lastChild(parent) === c);

let grandparent = {};
tree.prependChild(grandparent, parent);
console.log(tree.firstChild(tree.firstChild(grandparent)) === a);
```

Testing
-------
Make sure you install the dependencies first:

    npm install

You can now run the unit tests by executing:

    npm test

The line and branch coverage should be 100%.

API Documentation
-----------------
<a name="module_symbol-tree"></a>

## symbol-tree
**Author:** Joris van der Wel <joris@jorisvanderwel.com>

* [symbol-tree](#module_symbol-tree)
    * [SymbolTree](#exp_module_symbol-tree--SymbolTree) ⏏
        * [new SymbolTree([description])](#new_module_symbol-tree--SymbolTree_new)
        * [.initialize(object)](#module_symbol-tree--SymbolTree+initialize) ⇒ <code>Object</code>
        * [.hasChildren(object)](#module_symbol-tree--SymbolTree+hasChildren) ⇒ <code>Boolean</code>
        * [.firstChild(object)](#module_symbol-tree--SymbolTree+firstChild) ⇒ <code>Object</code>
        * [.lastChild(object)](#module_symbol-tree--SymbolTree+lastChild) ⇒ <code>Object</code>
        * [.previousSibling(object)](#module_symbol-tree--SymbolTree+previousSibling) ⇒ <code>Object</code>
        * [.nextSibling(object)](#module_symbol-tree--SymbolTree+nextSibling) ⇒ <code>Object</code>
        * [.parent(object)](#module_symbol-tree--SymbolTree+parent) ⇒ <code>Object</code>
        * [.lastInclusiveDescendant(object)](#module_symbol-tree--SymbolTree+lastInclusiveDescendant) ⇒ <code>Object</code>
        * [.preceding(object, [options])](#module_symbol-tree--SymbolTree+preceding) ⇒ <code>Object</code>
        * [.following(object, [options])](#module_symbol-tree--SymbolTree+following) ⇒ <code>Object</code>
        * [.childrenToArray(parent, [options])](#module_symbol-tree--SymbolTree+childrenToArray) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.ancestorsToArray(object, [options])](#module_symbol-tree--SymbolTree+ancestorsToArray) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.treeToArray(root, [options])](#module_symbol-tree--SymbolTree+treeToArray) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.childrenIterator(parent, [options])](#module_symbol-tree--SymbolTree+childrenIterator) ⇒ <code>Object</code>
        * [.previousSiblingsIterator(object)](#module_symbol-tree--SymbolTree+previousSiblingsIterator) ⇒ <code>Object</code>
        * [.nextSiblingsIterator(object)](#module_symbol-tree--SymbolTree+nextSiblingsIterator) ⇒ <code>Object</code>
        * [.ancestorsIterator(object)](#module_symbol-tree--SymbolTree+ancestorsIterator) ⇒ <code>Object</code>
        * [.treeIterator(root, options)](#module_symbol-tree--SymbolTree+treeIterator) ⇒ <code>Object</code>
        * [.index(child)](#module_symbol-tree--SymbolTree+index) ⇒ <code>Number</code>
        * [.childrenCount(parent)](#module_symbol-tree--SymbolTree+childrenCount) ⇒ <code>Number</code>
        * [.compareTreePosition(left, right)](#module_symbol-tree--SymbolTree+compareTreePosition) ⇒ <code>Number</code>
        * [.remove(removeObject)](#module_symbol-tree--SymbolTree+remove) ⇒ <code>Object</code>
        * [.insertBefore(referenceObject, newObject)](#module_symbol-tree--SymbolTree+insertBefore) ⇒ <code>Object</code>
        * [.insertAfter(referenceObject, newObject)](#module_symbol-tree--SymbolTree+insertAfter) ⇒ <code>Object</code>
        * [.prependChild(referenceObject, newObject)](#module_symbol-tree--SymbolTree+prependChild) ⇒ <code>Object</code>
        * [.appendChild(referenceObject, newObject)](#module_symbol-tree--SymbolTree+appendChild) ⇒ <code>Object</code>

<a name="exp_module_symbol-tree--SymbolTree"></a>

### SymbolTree ⏏
**Kind**: Exported class
<a name="new_module_symbol-tree--SymbolTree_new"></a>

#### new SymbolTree([description])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [description] | <code>string</code> | <code>&quot;&#x27;SymbolTree data&#x27;&quot;</code> | Description used for the Symbol |

<a name="module_symbol-tree--SymbolTree+initialize"></a>

#### symbolTree.initialize(object) ⇒ <code>Object</code>
You can use this function to (optionally) initialize an object right after its creation,
to take advantage of V8's fast properties. Also useful if you would like to
freeze your object.

`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - object

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+hasChildren"></a>

#### symbolTree.hasChildren(object) ⇒ <code>Boolean</code>
Returns `true` if the object has any children. Otherwise it returns `false`.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+firstChild"></a>

#### symbolTree.firstChild(object) ⇒ <code>Object</code>
Returns the first child of the given object.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+lastChild"></a>

#### symbolTree.lastChild(object) ⇒ <code>Object</code>
Returns the last child of the given object.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+previousSibling"></a>

#### symbolTree.previousSibling(object) ⇒ <code>Object</code>
Returns the previous sibling of the given object.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+nextSibling"></a>

#### symbolTree.nextSibling(object) ⇒ <code>Object</code>
Returns the next sibling of the given object.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+parent"></a>

#### symbolTree.parent(object) ⇒ <code>Object</code>
Return the parent of the given object.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+lastInclusiveDescendant"></a>

#### symbolTree.lastInclusiveDescendant(object) ⇒ <code>Object</code>
Find the inclusive descendant that is last in tree order of the given object.

* `O(n)` (worst case) where `n` is the depth of the subtree of `object`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+preceding"></a>

#### symbolTree.preceding(object, [options]) ⇒ <code>Object</code>
Find the preceding object (A) of the given object (B).
An object A is preceding an object B if A and B are in the same tree
and A comes before B in tree order.

* `O(n)` (worst case)
* `O(1)` (amortized when walking the entire tree)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| [options] | <code>Object</code> |  |
| [options.root] | <code>Object</code> | If set, `root` must be an inclusive ancestor        of the return value (or else null is returned). This check _assumes_        that `root` is also an inclusive ancestor of the given `object` |

<a name="module_symbol-tree--SymbolTree+following"></a>

#### symbolTree.following(object, [options]) ⇒ <code>Object</code>
Find the following object (A) of the given object (B).
An object A is following an object B if A and B are in the same tree
and A comes after B in tree order.

* `O(n)` (worst case) where `n` is the amount of objects in the entire tree
* `O(1)` (amortized when walking the entire tree)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.root] | <code>Object</code> |  | If set, `root` must be an inclusive ancestor        of the return value (or else null is returned). This check _assumes_        that `root` is also an inclusive ancestor of the given `object` |
| [options.skipChildren] | <code>Boolean</code> | <code>false</code> | If set, ignore the children of `object` |

<a name="module_symbol-tree--SymbolTree+childrenToArray"></a>

#### symbolTree.childrenToArray(parent, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all children of the given object to an array.

* `O(n)` where `n` is the amount of children of the given `parent`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parent | <code>Object</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [options.filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [options.thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+ancestorsToArray"></a>

#### symbolTree.ancestorsToArray(object, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all inclusive ancestors of the given object to an array.

* `O(n)` where `n` is the amount of ancestors of the given `object`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [options.filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [options.thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+treeToArray"></a>

#### symbolTree.treeToArray(root, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all descendants of the given object to an array (in tree order).

* `O(n)` where `n` is the amount of objects in the sub-tree of the given `object`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>Object</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [options.filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [options.thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+childrenIterator"></a>

#### symbolTree.childrenIterator(parent, [options]) ⇒ <code>Object</code>
Iterate over all children of the given object

* `O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - An iterable iterator (ES6)

| Param | Type | Default |
| --- | --- | --- |
| parent | <code>Object</code> |  |
| [options] | <code>Object</code> |  |
| [options.reverse] | <code>Boolean</code> | <code>false</code> |

<a name="module_symbol-tree--SymbolTree+previousSiblingsIterator"></a>

#### symbolTree.previousSiblingsIterator(object) ⇒ <code>Object</code>
Iterate over all the previous siblings of the given object. (in reverse tree order)

* `O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - An iterable iterator (ES6)

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+nextSiblingsIterator"></a>

#### symbolTree.nextSiblingsIterator(object) ⇒ <code>Object</code>
Iterate over all the next siblings of the given object. (in tree order)

* `O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - An iterable iterator (ES6)

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+ancestorsIterator"></a>

#### symbolTree.ancestorsIterator(object) ⇒ <code>Object</code>
Iterate over all inclusive ancestors of the given object

* `O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - An iterable iterator (ES6)

| Param | Type |
| --- | --- |
| object | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+treeIterator"></a>

#### symbolTree.treeIterator(root, options) ⇒ <code>Object</code>
Iterate over all descendants of the given object (in tree order).

Where `n` is the amount of objects in the sub-tree of the given `root`:

* `O(n)` (worst case for a single iteration)
* `O(n)` (amortized, when completing the iterator)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - An iterable iterator (ES6)

| Param | Type | Default |
| --- | --- | --- |
| root | <code>Object</code> |  |
| options | <code>Object</code> |  |
| [options.reverse] | <code>Boolean</code> | <code>false</code> |

<a name="module_symbol-tree--SymbolTree+index"></a>

#### symbolTree.index(child) ⇒ <code>Number</code>
Find the index of the given object (the number of preceding siblings).

* `O(n)` where `n` is the amount of preceding siblings
* `O(1)` (amortized, if the tree is not modified)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Number</code> - The number of preceding siblings, or -1 if the object has no parent

| Param | Type |
| --- | --- |
| child | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+childrenCount"></a>

#### symbolTree.childrenCount(parent) ⇒ <code>Number</code>
Calculate the number of children.

* `O(n)` where `n` is the amount of children
* `O(1)` (amortized, if the tree is not modified)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| parent | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+compareTreePosition"></a>

#### symbolTree.compareTreePosition(left, right) ⇒ <code>Number</code>
Compare the position of an object relative to another object. A bit set is returned:

<ul>
    <li>DISCONNECTED : 1</li>
    <li>PRECEDING : 2</li>
    <li>FOLLOWING : 4</li>
    <li>CONTAINS : 8</li>
    <li>CONTAINED_BY : 16</li>
</ul>

The semantics are the same as compareDocumentPosition in DOM, with the exception that
DISCONNECTED never occurs with any other bit.

where `n` and `m` are the amount of ancestors of `left` and `right`;
where `o` is the amount of children of the lowest common ancestor of `left` and `right`:

* `O(n + m + o)` (worst case)
* `O(n + m)` (amortized, if the tree is not modified)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>

| Param | Type |
| --- | --- |
| left | <code>Object</code> |
| right | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+remove"></a>

#### symbolTree.remove(removeObject) ⇒ <code>Object</code>
Remove the object from this tree.
Has no effect if already removed.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - removeObject

| Param | Type |
| --- | --- |
| removeObject | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+insertBefore"></a>

#### symbolTree.insertBefore(referenceObject, newObject) ⇒ <code>Object</code>
Insert the given object before the reference object.
`newObject` is now the previous sibling of `referenceObject`.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - newObject
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| referenceObject | <code>Object</code> |
| newObject | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+insertAfter"></a>

#### symbolTree.insertAfter(referenceObject, newObject) ⇒ <code>Object</code>
Insert the given object after the reference object.
`newObject` is now the next sibling of `referenceObject`.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - newObject
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| referenceObject | <code>Object</code> |
| newObject | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+prependChild"></a>

#### symbolTree.prependChild(referenceObject, newObject) ⇒ <code>Object</code>
Insert the given object as the first child of the given reference object.
`newObject` is now the first child of `referenceObject`.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - newObject
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| referenceObject | <code>Object</code> |
| newObject | <code>Object</code> |

<a name="module_symbol-tree--SymbolTree+appendChild"></a>

#### symbolTree.appendChild(referenceObject, newObject) ⇒ <code>Object</code>
Insert the given object as the last child of the given reference object.
`newObject` is now the last child of `referenceObject`.

* `O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>
**Returns**: <code>Object</code> - newObject
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| referenceObject | <code>Object</code> |
| newObject | <code>Object</code> |

