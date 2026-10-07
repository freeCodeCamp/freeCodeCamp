## get-node-dimensions

[![npm version](https://badge.fury.io/js/get-node-dimensions.svg)](https://badge.fury.io/js/get-node-dimensions)

Get accurate element dimensions, even if it's hidden!

## Install

`npm install get-node-dimensions --save`

```html
<script src="https://unpkg.com/get-node-dimensions/dist/get-node-dimensions.js"></script>
(UMD library exposed as `getNodeDimensions`)
```

### Example

```js
import getNodeDimensions from 'get-node-dimensions'

const div = document.getElementById('div-to-measure')

console.log(getNodeDimensions(div)) // { width, height, top, right, bottom, left }
```

## Usage

### elementDimensions = getNodeDimensions(element[, options])

Returns element rect which includes `width`, `height`, `top`, `right`, `bottom`, `left`.

`createOptions`:

- **margin** {bool}: Whether or not to account for element margins in calculation
- **clone** {bool}: Whether or not to use a clone to measure. If no width/height found, the element will automatically be cloned in order to obtain proper dimensions
- **display|width|height** {string}: sets respective clone property
