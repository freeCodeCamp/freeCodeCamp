# tr46

An JavaScript implementation of [Unicode Technical Standard #46: Unicode IDNA Compatibility Processing](https://unicode.org/reports/tr46/).


## Installation

[Node.js](http://nodejs.org) ≥ 8 is required. To install, type this at the command line:
```shell
npm install tr46
# or
yarn add tr46
```


## API

### `toASCII(domainName[, options])`

Converts a string of Unicode symbols to a case-folded Punycode string of ASCII symbols.

Available options:
* [`checkBidi`](#checkBidi)
* [`checkHyphens`](#checkHyphens)
* [`checkJoiners`](#checkJoiners)
* [`processingOption`](#processingOption)
* [`useSTD3ASCIIRules`](#useSTD3ASCIIRules)
* [`verifyDNSLength`](#verifyDNSLength)

### `toUnicode(domainName[, options])`

Converts a case-folded Punycode string of ASCII symbols to a string of Unicode symbols.

Available options:
* [`checkBidi`](#checkBidi)
* [`checkHyphens`](#checkHyphens)
* [`checkJoiners`](#checkJoiners)
* [`processingOption`](#processingOption)
* [`useSTD3ASCIIRules`](#useSTD3ASCIIRules)


## Options

### `checkBidi`
Type: `Boolean`  
Default value: `false`  
When set to `true`, any bi-directional text within the input will be checked for validation.

### `checkHyphens`
Type: `Boolean`  
Default value: `false`  
When set to `true`, the positions of any hyphen characters within the input will be checked for validation.

### `checkJoiners`
Type: `Boolean`  
Default value: `false`  
When set to `true`, any word joiner characters within the input will be checked for validation.

### `processingOption`
Type: `String`  
Default value: `"nontransitional"`  
When set to `"transitional"`, symbols within the input will be validated according to the older IDNA2003 protocol. When set to `"nontransitional"`, the current IDNA2008 protocol will be used.

### `useSTD3ASCIIRules`
Type: `Boolean`  
Default value: `false`  
When set to `true`, input will be validated according to [STD3 Rules](http://unicode.org/reports/tr46/#STD3_Rules).

### `verifyDNSLength`
Type: `Boolean`  
Default value: `false`  
When set to `true`, the length of each DNS label within the input will be checked for validation.
