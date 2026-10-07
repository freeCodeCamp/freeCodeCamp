# jsdiff

[![Build Status](https://secure.travis-ci.org/kpdecker/jsdiff.svg)](http://travis-ci.org/kpdecker/jsdiff)
[![Sauce Test Status](https://saucelabs.com/buildstatus/jsdiff)](https://saucelabs.com/u/jsdiff)

A JavaScript text differencing implementation. Try it out in the **[online demo](https://kpdecker.github.io/jsdiff)**.

Based on the algorithm proposed in
["An O(ND) Difference Algorithm and its Variations" (Myers, 1986)](http://www.xmailserver.org/diff2.pdf).

## Installation
```bash
npm install diff --save
```

## Usage

Broadly, jsdiff's diff functions all take an old text and a new text and perform three steps:

1. Split both texts into arrays of "tokens". What constitutes a token varies; in `diffChars`, each character is a token, while in `diffLines`, each line is a token.

2. Find the smallest set of single-token *insertions* and *deletions* needed to transform the first array of tokens into the second.

   This step depends upon having some notion of a token from the old array being "equal" to one from the new array, and this notion of equality affects the results. Usually two tokens are equal if `===` considers them equal, but some of the diff functions use an alternative notion of equality or have options to configure it. For instance, by default `diffChars("Foo", "FOOD")` will require two deletions (`o`, `o`) and three insertions (`O`, `O`, `D`), but `diffChars("Foo", "FOOD", {ignoreCase: true})` will require just one insertion (of a `D`), since `ignoreCase` causes `o` and `O` to be considered equal.

3. Return an array representing the transformation computed in the previous step as a series of [change objects](#change-objects). The array is ordered from the start of the input to the end, and each change object represents *inserting* one or more tokens, *deleting* one or more tokens, or *keeping* one or more tokens.

### API

* `Diff.diffChars(oldStr, newStr[, options])` - diffs two blocks of text, treating each character as a token.

    Returns a list of [change objects](#change-objects).

    Options
    * `ignoreCase`: If `true`, the uppercase and lowercase forms of a character are considered equal. Defaults to `false`.

* `Diff.diffWords(oldStr, newStr[, options])` - diffs two blocks of text, treating each word and each word separator (punctuation, newline, or run of whitespace) as a token.

  (Whitespace-only tokens are automatically treated as equal to each other, so changes like changing a space to a newline or a run of multiple spaces will be ignored.)

    Returns a list of [change objects](#change-objects).

    Options
    * `ignoreCase`: Same as in `diffChars`. Defaults to false.

* `Diff.diffWordsWithSpace(oldStr, newStr[, options])` - same as `diffWords`, except whitespace-only tokens are not automatically considered equal, so e.g. changing a space to a tab is considered a change.

* `Diff.diffLines(oldStr, newStr[, options])` - diffs two blocks of text, treating each line as a token.

    Options
    * `ignoreWhitespace`: `true` to strip all leading and trailing whitespace characters from each line before performing the diff. Defaults to `false`.
    * `stripTrailingCr`: `true` to remove all trailing CR (`\r`) characters before performing the diff. Defaults to `false`.
      This helps to get a useful diff when diffing UNIX text files against Windows text files.
    * `newlineIsToken`: `true` to treat the newline character at the end of each line as its own token. This allows for changes to the newline structure to occur independently of the line content and to be treated as such. In general this is the more human friendly form of `diffLines`; the default behavior with this option turned off is better suited for patches and other computer friendly output. Defaults to `false`.

    Returns a list of [change objects](#change-objects).

* `Diff.diffTrimmedLines(oldStr, newStr[, options])` - diffs two blocks of text, comparing line by line, after stripping leading and trailing whitespace. Equivalent to calling `diffLines` with `ignoreWhitespace: true`.

    Options
    * `stripTrailingCr`: Same as in `diffLines`. Defaults to `false`.
    * `newlineIsToken`: Same as in `diffLines`. Defaults to `false`.

    Returns a list of [change objects](#change-objects).

* `Diff.diffSentences(oldStr, newStr[, options])` - diffs two blocks of text, treating each sentence as a token.

    Returns a list of [change objects](#change-objects).

* `Diff.diffCss(oldStr, newStr[, options])` - diffs two blocks of text, comparing CSS tokens.

    Returns a list of [change objects](#change-objects).

* `Diff.diffJson(oldObj, newObj[, options])` - diffs two JSON-serializable objects by first serializing them to prettily-formatted JSON and then treating each line of the JSON as a token. Object properties are ordered alphabetically in the serialized JSON, so the order of properties in the objects being compared doesn't affect the result.

    Returns a list of [change objects](#change-objects).
    
    Options
    * `stringifyReplacer`: A custom replacer function. Operates similarly to the `replacer` parameter to [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter), but must be a function.
    *  `undefinedReplacement`: A value to replace `undefined` with. Ignored if a `stringifyReplacer` is provided.

* `Diff.diffArrays(oldArr, newArr[, options])` - diffs two arrays of tokens, comparing each item for strict equality (===).

    Options
    * `comparator`: `function(left, right)` for custom equality checks

    Returns a list of [change objects](#change-objects).

* `Diff.createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr[, oldHeader[, newHeader[, options]]])` - creates a unified diff patch by first computing a diff with `diffLines` and then serializing it to unified diff format.

    Parameters:
    * `oldFileName` : String to be output in the filename section of the patch for the removals
    * `newFileName` : String to be output in the filename section of the patch for the additions
    * `oldStr` : Original string value
    * `newStr` : New string value
    * `oldHeader` : Optional additional information to include in the old file header. Default: `undefined`.
    * `newHeader` : Optional additional information to include in the new file header. Default: `undefined`.
    * `options` : An object with options. 
      - `context` describes how many lines of context should be included. You can set this to `Number.MAX_SAFE_INTEGER` or `Infinity` to include the entire file content in one hunk.
      - `ignoreWhitespace`: Same as in `diffLines`. Defaults to `false`.
      - `stripTrailingCr`: Same as in `diffLines`. Defaults to `false`.
      - `newlineIsToken`: Same as in `diffLines`. Defaults to `false`.

* `Diff.createPatch(fileName, oldStr, newStr[, oldHeader[, newHeader[, options]]])` - creates a unified diff patch.

    Just like Diff.createTwoFilesPatch, but with oldFileName being equal to newFileName.

* `Diff.formatPatch(patch)` - creates a unified diff patch.

    `patch` may be either a single structured patch object (as returned by `structuredPatch`) or an array of them (as returned by `parsePatch`).

* `Diff.structuredPatch(oldFileName, newFileName, oldStr, newStr[, oldHeader[, newHeader[, options]]])` - returns an object with an array of hunk objects.

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

* `Diff.applyPatch(source, patch[, options])` - attempts to apply a unified diff patch.

    If the patch was applied successfully, returns a string containing the patched text. If the patch could not be applied (because some hunks in the patch couldn't be fitted to the text in `source`), returns false.

    `patch` may be a string diff or the output from the `parsePatch` or `structuredPatch` methods.

    The optional `options` object may have the following keys:

    - `fuzzFactor`: Number of lines that are allowed to differ before rejecting a patch. Defaults to 0.
    - `compareLine(lineNumber, line, operation, patchContent)`: Callback used to compare to given lines to determine if they should be considered equal when patching. Defaults to strict equality but may be overridden to provide fuzzier comparison. Should return false if the lines should be rejected.

* `Diff.applyPatches(patch, options)` - applies one or more patches.

    `patch` may be either an array of structured patch objects, or a string representing a patch in unified diff format (which may patch one or more files).

    This method will iterate over the contents of the patch and apply to data provided through callbacks. The general flow for each patch index is:

    - `options.loadFile(index, callback)` is called. The caller should then load the contents of the file and then pass that to the `callback(err, data)` callback. Passing an `err` will terminate further patch execution.
    - `options.patched(index, content, callback)` is called once the patch has been applied. `content` will be the return value from `applyPatch`. When it's ready, the caller should call `callback(err)` callback. Passing an `err` will terminate further patch execution.

    Once all patches have been applied or an error occurs, the `options.complete(err)` callback is made.

* `Diff.parsePatch(diffStr)` - Parses a patch into structured data

    Return a JSON object representation of the a patch, suitable for use with the `applyPatch` method. This parses to the same structure returned by `Diff.structuredPatch`.

* `Diff.reversePatch(patch)` - Returns a new structured patch which when applied will undo the original `patch`.

    `patch` may be either a single structured patch object (as returned by `structuredPatch`) or an array of them (as returned by `parsePatch`).

* `Diff.convertChangesToXML(changes)` - converts a list of change objects to a serialized XML format

* `Diff.convertChangesToDMP(changes)` - converts a list of change objects to the format returned by Google's [diff-match-patch](https://github.com/google/diff-match-patch) library

#### Universal `options`

Certain options can be provided in the `options` object of *any* method that calculates a diff:

* `callback`: if provided, the diff will be computed in async mode to avoid blocking the event loop while the diff is calculated. The value of the `callback` option should be a function and will be passed the result of the diff as its second argument. The first argument will always be undefined. Only works with functions that return change objects, like `diffLines`, not those that return patches, like `structuredPatch` or `createPatch`.

  (Note that if the ONLY option you want to provide is a callback, you can pass the callback function directly as the `options` parameter instead of passing an object with a `callback` property.)
* `maxEditLength`: a number specifying the maximum edit distance to consider between the old and new texts. If the edit distance is higher than this, jsdiff will return `undefined` instead of a diff. You can use this to limit the computational cost of diffing large, very different texts by giving up early if the cost will be huge. Works for functions that return change objects and also for `structuredPatch`, but not other patch-generation functions.

* `timeout`: a number of milliseconds after which the diffing algorithm will abort and return `undefined`. Supported by the same functions as `maxEditLength`.

### Defining custom diffing behaviors

If you need behavior a little different to what any of the text diffing functions above offer, you can roll your own by customizing both the tokenization behavior used and the notion of equality used to determine if two tokens are equal.

The simplest way to customize tokenization behavior is to simply tokenize the texts you want to diff yourself, with your own code, then pass the arrays of tokens to `diffArrays`. For instance, if you wanted a semantically-aware diff of some code, you could try tokenizing it using a parser specific to the programming language the code is in, then passing the arrays of tokens to `diffArrays`.

To customize the notion of token equality used, use the `comparator` option to `diffArrays`.

For even more customisation of the diffing behavior, you can create a `new Diff.Diff()` object, overwrite its `castInput`, `tokenize`, `removeEmpty`, `equals`, and `join` properties with your own functions, then call its `diff(oldString, newString[, options])` method. The methods you can overwrite are used as follows:

* `castInput(value)`: used to transform the `oldString` and `newString` before any other steps in the diffing algorithm happen. For instance, `diffJson` uses `castInput` to serialize the objects being diffed to JSON. Defaults to a no-op.
* `tokenize(value)`: used to convert each of `oldString` and `newString` (after they've gone through `castInput`) to an array of tokens. Defaults to returning `value.split('')` (returning an array of individual characters).
* `removeEmpty(array)`: called on the arrays of tokens returned by `tokenize` and can be used to modify them. Defaults to stripping out falsey tokens, such as empty strings. `diffArrays` overrides this to simply return the `array`, which means that falsey values like empty strings can be handled like any other token by `diffArrays`.
* `equals(left, right)`: called to determine if two tokens (one from the old string, one from the new string) should be considered equal. Defaults to comparing them with `===`.
* `join(tokens)`: gets called with an array of consecutive tokens that have either all been added, all been removed, or are all common. Needs to join them into a single value that can be used as the `value` property of the [change object](#change-objects) for these tokens. Defaults to simply returning `tokens.join('')`.

### Change Objects
Many of the methods above return change objects. These objects consist of the following fields:

* `value`: The concatenated content of all the tokens represented by this change object - i.e. generally the text that is either added, deleted, or common, as a single string. In cases where tokens are considered common but are non-identical (e.g. because an option like `ignoreCase` or a custom `comparator` was used), the value from the *new* string will be provided here.
* `added`: True if the value was inserted into the new string
* `removed`: True if the value was removed from the old string
* `count`: How many tokens (e.g. chars for `diffChars`, lines for `diffLines`) the value in the change object consists of

(Change objects where `added` and `removed` are both falsey represent content that is common to the old and new strings.)

Note that some cases may omit a particular flag field. Comparison on the flag fields should always be done in a truthy or falsy manner.

## Examples

#### Basic example in Node

```js
require('colors');
const Diff = require('diff');

const one = 'beep boop';
const other = 'beep boob blah';

const diff = Diff.diffChars(one, other);

diff.forEach((part) => {
  // green for additions, red for deletions
  let text = part.added ? part.value.bgGreen :
             part.removed ? part.value.bgRed :
                            part.value;
  process.stderr.write(text);
});

console.log();
```
Running the above program should yield

<img src="images/node_example.png" alt="Node Example">

#### Basic example in a web page

```html
<pre id="display"></pre>
<script src="diff.js"></script>
<script>
const one = 'beep boop',
    other = 'beep boob blah',
    color = '';
    
let span = null;

const diff = Diff.diffChars(one, other),
    display = document.getElementById('display'),
    fragment = document.createDocumentFragment();

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? 'green' :
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

#### Example of generating a patch from Node

The code below is roughly equivalent to the Unix command `diff -u file1.txt file2.txt > mydiff.patch`:

```
const Diff = require('diff');
const file1Contents = fs.readFileSync("file1.txt").toString();
const file2Contents = fs.readFileSync("file2.txt").toString();
const patch = Diff.createTwoFilesPatch("file1.txt", "file2.txt", file1Contents, file2Contents);
fs.writeFileSync("mydiff.patch", patch);
```

#### Examples of parsing and applying a patch from Node

##### Applying a patch to a specified file

The code below is roughly equivalent to the Unix command `patch file1.txt mydiff.patch`:

```
const Diff = require('diff');
const file1Contents = fs.readFileSync("file1.txt").toString();
const patch = fs.readFileSync("mydiff.patch").toString();
const patchedFile = Diff.applyPatch(file1Contents, patch);
fs.writeFileSync("file1.txt", patchedFile);
```

##### Applying a multi-file patch to the files specified by the patch file itself

The code below is roughly equivalent to the Unix command `patch < mydiff.patch`:

```
const Diff = require('diff');
const patch = fs.readFileSync("mydiff.patch").toString();
Diff.applyPatches(patch, {
    loadFile: (patch, callback) => {
        let fileContents;
        try {
            fileContents = fs.readFileSync(patch.oldFileName).toString();
        } catch (e) {
            callback(`No such file: ${patch.oldFileName}`);
            return;
        }
        callback(undefined, fileContents);
    },
    patched: (patch, patchedContent, callback) => {
        if (patchedContent === false) {
            callback(`Failed to apply patch to ${patch.oldFileName}`)
            return;
        }
        fs.writeFileSync(patch.oldFileName, patchedContent);
        callback();
    },
    complete: (err) => {
        if (err) {
            console.log("Failed with error:", err);
        }
    }
});
```

## Compatibility

[![Sauce Test Status](https://saucelabs.com/browser-matrix/jsdiff.svg)](https://saucelabs.com/u/jsdiff)

jsdiff supports all ES3 environments with some known issues on IE8 and below. Under these browsers some diff algorithms such as word diff and others may fail due to lack of support for capturing groups in the `split` operation.

## License

See [LICENSE](https://github.com/kpdecker/jsdiff/blob/master/LICENSE).

## Deviations from the published Myers diff algorithm

jsdiff deviates from the published algorithm in a couple of ways that don't affect results but do affect performance:

* jsdiff keeps track of the diff for each diagonal using a linked list of change objects for each diagonal, rather than the historical array of furthest-reaching D-paths on each diagonal contemplated on page 8 of Myers's paper.
* jsdiff skips considering diagonals where the furthest-reaching D-path would go off the edge of the edit graph. This dramatically reduces the time cost (from quadratic to linear) in cases where the new text just appends or truncates content at the end of the old text.
