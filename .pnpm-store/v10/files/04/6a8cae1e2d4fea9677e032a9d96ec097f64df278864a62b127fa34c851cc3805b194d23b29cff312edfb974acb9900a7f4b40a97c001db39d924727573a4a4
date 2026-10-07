# tr46

An JavaScript implementation of [Unicode Technical Standard #46: Unicode IDNA Compatibility Processing](https://unicode.org/reports/tr46/).

## API

### `toASCII(domainName[, options])`

Converts a string of Unicode symbols to a case-folded Punycode string of ASCII symbols.

Available options:

* [`checkBidi`](#checkbidi)
* [`checkHyphens`](#checkhyphens)
* [`checkJoiners`](#checkjoiners)
* [`ignoreInvalidPunycode`](#ignoreinvalidpunycode)
* [`transitionalProcessing`](#transitionalprocessing)
* [`useSTD3ASCIIRules`](#usestd3asciirules)
* [`verifyDNSLength`](#verifydnslength)

### `toUnicode(domainName[, options])`

Converts a case-folded Punycode string of ASCII symbols to a string of Unicode symbols.

Available options:

* [`checkBidi`](#checkbidi)
* [`checkHyphens`](#checkhyphens)
* [`checkJoiners`](#checkjoiners)
* [`ignoreInvalidPunycode`](#ignoreinvalidpunycode)
* [`transitionalProcessing`](#transitionalprocessing)
* [`useSTD3ASCIIRules`](#usestd3asciirules)

## Options

### `checkBidi`

Type: `boolean`
Default value: `false`
When set to `true`, any bi-directional text within the input will be checked for validation.

### `checkHyphens`

Type: `boolean`
Default value: `false`
When set to `true`, the positions of any hyphen characters within the input will be checked for validation.

### `checkJoiners`

Type: `boolean`
Default value: `false`
When set to `true`, any word joiner characters within the input will be checked for validation.

### `ignoreInvalidPunycode`

Type: `boolean`
Default value: `false`
When set to `true`, invalid Punycode strings within the input will be allowed.

### `transitionalProcessing`

Type: `boolean`
Default value: `false`
When set to `true`, uses [transitional (compatibility) processing](https://unicode.org/reports/tr46/#Compatibility_Processing) of the deviation characters.

### `useSTD3ASCIIRules`

Type: `boolean`
Default value: `false`
When set to `true`, input will be validated according to [STD3 Rules](http://unicode.org/reports/tr46/#STD3_Rules).

### `verifyDNSLength`

Type: `boolean`
Default value: `false`
When set to `true`, the length of each DNS label within the input will be checked for validation.
