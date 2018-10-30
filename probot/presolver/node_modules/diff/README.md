# jsdiff

[![Build Status](https://secure.travis-ci.org/kpdecker/jsdiff.svg)](http://travis-ci.org/kpdecker/jsdiff)
[![Sauce Test Status](https://saucelabs.com/buildstatus/jsdiff)](https://saucelabs.com/u/jsdiff)

A javascript text differencing implementation.

Based on the algorithm proposed in
["An O(ND) Difference Algorithm and its Variations" (Myers, 1986)](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927).

## Installation
```bash
npm install diff --save
```
or
```bash
bower install jsdiff --save
```

## API

* `JsDiff.diffChars(oldStr, newStr[, options])` - diffs two blocks of text, comparing character by character.

    Returns a list of change objects (See below).

    Options
    * `ignoreCase`: `true` to ignore casing difference. Defaults to `false`.

* `JsDiff.diffWords(oldStr, newStr[, options])` - diffs two blocks of text, comparing word by word, ignoring whitespace.

    Returns a list of change objects (See below).

    Options
    * `ignoreCase`: Same as in `diffChars`.

* `JsDiff.diffWordsWithSpace(oldStr, newStr[, options])` - diffs two blocks of text, comparing word by word, treating whitespace as significant.

    Returns a list of change objects (See below).

* `JsDiff.diffLines(oldStr, newStr[, options])` - diffs two blocks of text, comparing line by line.

    Options
    * `ignoreWhitespace`: `true` to ignore leading and trailing whitespace. This is the same as `diffTrimmedLines`
    * `newlineIsToken`: `true` to treat newline characters as separate tokens.  This allows for changes to the newline structure to occur independently of the line content and to be treated as such. In general this is the more human friendly form of `diffLines` and `diffLines` is better suited for patches and other computer friendly output.

    Returns a list of change objects (See below).

* `JsDiff.diffTrimmedLines(oldStr, newStr[, options])` - diffs two blocks of text, comparing line by line, ignoring leading and trailing whitespace.

    Returns a list of change objects (See below).

* `JsDiff.diffSentences(oldStr, newStr[, options])` - diffs two blocks of text, comparing sentence by sentence.

    Returns a list of change objects (See below).

* `JsDiff.diffCss(oldStr, newStr[, options])` - diffs two blocks of text, comparing CSS tokens.

    Returns a list of change objects (See below).

* `JsDiff.diffJson(oldObj, newObj[, options])` - diffs two JSON objects, comparing the fields defined on each. The order of fields, etc does not matter in this comparison.

    Returns a list of change objects (See below).

* `JsDiff.diffArrays(oldArr, newArr[, options])` - diffs two arrays, comparing each item for strict equality (===).

    Options
    * `comparator`: `function(left, right)` for custom equality checks

    Returns a list of change objects (See below).

* `JsDiff.createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader)` - creates a unified diff patch.

    Parameters:
    * `oldFileName` : String to be output in the filename section of the patch for the removals
    * `newFileName` : String to be output in the filename section of the patch for the additions
    * `oldStr` : Original string value
    * `newStr` : New string value
    * `oldHeader` : Additional information to include in the old file header
    * `newHeader` : Additional information to include in the new file header
    * `options` : An object with options. Currently, only `context` is supported and describes how many lines of context should be included.

* `JsDiff.createPatch(fileName, oldStr, newStr, oldHeader, newHeader)` - creates a unified diff patch.

    Just like JsDiff.createTwoFilesPatch, but with oldFileName being equal to newFileName.


* `JsDiff.structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options)` - returns an object with an array of hunk objects.

    This method is similar to createTwoFilesPatch, but returns a data structure
    suitable for further processing. Parameters are the same as createTwoFilesPatch. The data structure returned may look like this:

    ```js
    {
      oldFileName: 'oldfile', newFileName: 'newfile',
      oldHeader: 'header1', newHeader: 'header2',
      hunks: [{
        oldStart: 1, oldLines: 3, newStart: 1, newLines: 3,
        lines: [' line2', ' line3', '-line4', '+line5', '\\ No newline at end of file'],
      }]
    }
    ```

* `JsDiff.applyPatch(source, patch[, options])` - applies a unified diff patch.

    Return a string containing new version of provided data. `patch` may be a string diff or the output from the `parsePatch` or `structuredPatch` methods.

    The optional `options` object may have the following keys:

    - `fuzzFactor`: Number of lines that are allowed to differ before rejecting a patch. Defaults to 0.
    - `compareLine(lineNumber, line, operation, patchContent)`: Callback used to compare to given lines to determine if they should be considered equal when patching. Defaults to strict equality but may be overridden to provide fuzzier comparison. Should return false if the lines should be rejected.

* `JsDiff.applyPatches(patch, options)` - applies one or more patches.

    This method will iterate over the contents of the patch and apply to data provided through callbacks. The general flow for each patch index is:

    - `options.loadFile(index, callback)` is called. The caller should then load the contents of the file and then pass that to the `callback(err, data)` callback. Passing an `err` will terminate further patch execution.
    - `options.patched(index, content, callback)` is called once the patch has been applied. `content` will be the return value from `applyPatch`. When it's ready, the caller should call `callback(err)` callback. Passing an `err` will terminate further patch execution.

    Once all patches have been applied or an error occurs, the `options.complete(err)` callback is made.

* `JsDiff.parsePatch(diffStr)` - Parses a patch into structured data

    Return a JSON object representation of the a patch, suitable for use with the `applyPatch` method. This parses to the same structure returned by `JsDiff.structuredPatch`.

* `convertChangesToXML(changes)` - converts a list of changes to a serialized XML format


All methods above which accept the optional `callback` method will run in sync mode when that parameter is omitted and in async mode when supplied. This allows for larger diffs without blocking the event loop. This may be passed either directly as the final parameter or as the `callback` field in the `options` object.

### Change Objects
Many of the methods above return change objects. These objects consist of the following fields:

* `value`: Text content
* `added`: True if the value was inserted into the new string
* `removed`: True of the value was removed from the old string

Note that some cases may omit a particular flag field. Comparison on the flag fields should always be done in a truthy or falsy manner.

## Examples

Basic example in Node

```js
require('colors');
var jsdiff = require('diff');

var one = 'beep boop';
var other = 'beep boob blah';

var diff = jsdiff.diffChars(one, other);

diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  var color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log();
```
Running the above program should yield

<img src="images/node_example.png" alt="Node Example">

Basic example in a web page

```html
<pre id="display"></pre>
<script src="diff.js"></script>
<script>
var one = 'beep boop',
    other = 'beep boob blah',
    color = '',
    span = null;

var diff = JsDiff.diffChars(one, other),
    display = document.getElementById('display'),
    fragment = document.createDocumentFragment();

diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  span = document.createElement('span');
  span.style.color = color;
  span.appendChild(document
    .createTextNode(part.value));
  fragment.appendChild(span);
});

display.appendChild(fragment);
</script>
```

Open the above .html file in a browser and you should see

<img src="images/web_example.png" alt="Node Example">

**[Full online demo](http://kpdecker.github.com/jsdiff)**

## Compatibility

[![Sauce Test Status](https://saucelabs.com/browser-matrix/jsdiff.svg)](https://saucelabs.com/u/jsdiff)

jsdiff supports all ES3 environments with some known issues on IE8 and below. Under these browsers some diff algorithms such as word diff and others may fail due to lack of support for capturing groups in the `split` operation.

## License

See [LICENSE](https://github.com/kpdecker/jsdiff/blob/master/LICENSE).
