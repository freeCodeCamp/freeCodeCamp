Note: If you find missing information about particular minor version, that version must have been changed without any functional change in this library.

**4.2.5 / 2023-06-22**
* change code implementation

**4.2.4 / 2023-06-06**
* fix security bug

**4.2.3 / 2023-06-05**
* fix security bug

**4.2.2 / 2023-04-18**
* fix #562: fix unpaired tag when it comes in last of a nested tag. Also throw error when unpaired tag is used as closing tag

**4.2.1 / 2023-04-18**
* fix: jpath after unpaired tags

**4.2.0 / 2023-04-09**
* support `updateTag` parser property

**4.1.4 / 2023-04-08**
* update typings to let user create XMLBuilder instance without options (#556) (By [Patrick](https://github.com/omggga))
* fix: IsArray option isn't parsing tags with 0 as value correctly #490 (#557) (By [Aleksandr Murashkin](https://github.com/p-kuen))
* feature: support `oneListGroup` to group repeated children tags udder single group
 
**4.1.3 / 2023-02-26**
* fix #546: Support complex entity value

**4.1.2 / 2023-02-12**
* Security Fix

**4.1.1 / 2023-02-03**
* Fix #540: ignoreAttributes breaks unpairedTags
* Refactor XML builder code

**4.1.0 / 2023-02-02**
* Fix '<' or '>' in DTD comment throwing an error. (#533) (By [Adam Baker](https://github.com/Cwazywierdo))
* Set "eNotation" to 'true' as default

**4.0.15 / 2023-01-25**
* make "eNotation" optional

**4.0.14 / 2023-01-22**
* fixed: add missed typing "eNotation" to parse values

**4.0.13 / 2023-01-07**
* preserveorder formatting (By [mdeknowis](https://github.com/mdeknowis))
* support `transformAttributeName` (By [Erik Rothoff Andersson](https://github.com/erkie))

**4.0.12 / 2022-11-19**
* fix typescript

**4.0.11 / 2022-10-05**
* fix #501: parse for entities only once

**4.0.10 / 2022-09-14**
* fix broken links in demo site (By [Yannick Lang](https://github.com/layaxx))
* fix #491: tagValueProcessor type definition (By [Andrea Francesco Speziale](https://github.com/andreafspeziale))
* Add jsdocs for tagValueProcessor


**4.0.9 / 2022-07-10**
* fix #470: stop-tag can have self-closing tag with same name
* fix #472: stopNode can have any special tag inside
* Allow !ATTLIST and !NOTATION with DOCTYPE
* Add transformTagName option to transform tag names when parsing (#469) (By [Erik Rothoff Andersson](https://github.com/erkie))

**4.0.8 / 2022-05-28**
* Fix CDATA parsing returning empty string when value = 0 (#451) (By [ndelanou](https://github.com/ndelanou))
* Fix stopNodes when same tag appears inside node (#456) (By [patrickshipe](https://github.com/patrickshipe))
* fix #468: prettify own properties only

**4.0.7 / 2022-03-18**
* support CDATA even if tag order is not preserved
* support Comments even if tag order is not preserved
* fix #446: XMLbuilder should not indent XML declaration

**4.0.6 / 2022-03-08**
* fix: call tagValueProcessor only once for array items
* fix: missing changed for #437

**4.0.5 / 2022-03-06**
* fix #437: call tagValueProcessor from XML builder

**4.0.4 / 2022-03-03**
* fix #435: should skip unpaired and self-closing nodes when set as stopnodes

**4.0.3 / 2022-02-15**
* fix: ReferenceError when Bundled with Strict (#431) (By [Andreas Heissenberger](https://github.com/aheissenberger))


**4.0.2 / 2022-02-04**
* builder supports `suppressUnpairedNode`
* parser supports `ignoreDeclaration` and `ignorePiTags`
* fix: when comment is parsed as text value if given as `<!--> ...` #423
* builder supports decoding `&`

**4.0.1 / 2022-01-08**
* fix builder for pi tag
* fix: support suppressBooleanAttrs by builder

**4.0.0 / 2022-01-06**
* Generating different combined, parser only, builder only, validator only browser bundles
* Keeping cjs modules as they can be imported in cjs and esm modules both. Otherwise refer `esm` branch.

**4.0.0-beta.8 / 2021-12-13**
* call tagValueProcessor for stop nodes

**4.0.0-beta.7 / 2021-12-09**
* fix Validator bug when an attribute has no value but '=' only
* XML Builder should suppress unpaired tags by default.
* documents update for missing features
* refactoring to use Object.assign
* refactoring to remove repeated code

**4.0.0-beta.6 / 2021-12-05**
* Support PI Tags processing
* Support `suppressBooleanAttributes` by XML Builder for attributes with value `true`.

**4.0.0-beta.5 / 2021-12-04**
* fix: when a tag with name "attributes"

**4.0.0-beta.4 / 2021-12-02**
* Support HTML document parsing
* skip stop nodes parsing when building the XML from JS object
* Support external entites without DOCTYPE
* update dev dependency: strnum v1.0.5 to fix long number issue

**4.0.0-beta.3 / 2021-11-30**
* support global stopNodes expression like "*.stop"
* support self-closing and paired unpaired tags
* fix: CDATA should not be parsed.
* Fix typings for XMLBuilder (#396)(By [Anders Emil Salvesen](https://github.com/andersem))
* supports XML entities, HTML entities, DOCTYPE entities

**⚠️ 4.0.0-beta.2 / 2021-11-19**
* rename `attrMap` to `attibutes` in parser output when `preserveOrder:true`
* supports unpairedTags

**⚠️ 4.0.0-beta.1 / 2021-11-18**
* Parser returns an array now
  * to make the structure common
  * and to return root level detail
* renamed `cdataTagName` to `cdataPropName`
* Added `commentPropName`
* fix typings

**⚠️ 4.0.0-beta.0 / 2021-11-16**
* Name change of many configuration properties.
  * `attrNodeName` to `attributesGroupName`
  * `attrValueProcessor` to `attributeValueProcessor`
  * `parseNodeValue` to `parseTagValue`
  * `ignoreNameSpace` to `removeNSPrefix`
  * `numParseOptions` to `numberParseOptions`
  * spelling correction for `suppressEmptyNode`
* Name change of cli and browser bundle to **fxparser**
* `isArray` option is added to parse a tag into array
* `preserveOrder` option is added to render XML in such a way that the result js Object maintains the order of properties same as in XML.
* Processing behaviour of `tagValueProcessor` and `attributeValueProcessor` are changes with extra input parameters
* j2xparser is renamed to XMLBuilder.
* You need to build XML parser instance for given options first before parsing XML.
* fix #327, #336: throw error when extra text after XML content
* fix #330: attribute value can have '\n', 
* fix #350: attrbiutes can be separated by '\n' from tagname

3.21.1 / 2021-10-31
* Correctly format JSON elements with a text prop but no attribute props ( By [haddadnj](https://github.com/haddadnj) )

3.21.0 / 2021-10-25
  * feat: added option `rootNodeName` to set tag name for array input when converting js object to XML.
  * feat: added option `alwaysCreateTextNode` to force text node creation (by: *@massimo-ua*)
  * ⚠️ feat: Better error location for unclosed tags. (by *@Gei0r*)
    * Some error messages would be changed when validating XML. Eg
      * `{ InvalidXml: "Invalid '[    \"rootNode\"]' found." }` → `{InvalidTag: "Unclosed tag 'rootNode'."}`
      * `{ InvalidTag: "Closing tag 'rootNode' is expected inplace of 'rootnode'." }` → `{ InvalidTag: "Expected closing tag 'rootNode' (opened in line 1) instead of closing tag 'rootnode'."}`
  * ⚠️ feat: Column in error response when validating XML
```js
{
  "code": "InvalidAttr",
  "msg":  "Attribute 'abc' is repeated.",
  "line": 1,
  "col": 22
}
```

3.20.1 / 2021-09-25
  * update strnum package

3.20.0 / 2021-09-10
  * Use strnum npm package to parse string to number
    * breaking change: long number will be parsed to scientific notation.

3.19.0 / 2021-03-14
  * License changed to MIT original
  * Fix #321 : namespace tag parsing

3.18.0 / 2021-02-05
  * Support RegEx and function in arrayMode option 
  * Fix #317 : validate nested PI tags

3.17.4 / 2020-06-07
  * Refactor some code to support IE11
  * Fix: `<tag >` space as attribute string

3.17.3 / 2020-05-23
  * Fix: tag name separated by \n \t
  * Fix: throw error for unclosed tags

3.17.2 / 2020-05-23
  * Fixed an issue in processing doctype tag
  * Fixed tagName where it should not have whitespace chars

3.17.1 / 2020-05-19
  * Fixed an issue in checking opening tag
  
3.17.0 / 2020-05-18
  * parser: fix '<' issue when it comes in aatr value
  * parser: refactoring to remove dependency from regex
  * validator: fix IE 11 issue for error messages
  * updated dev dependencies
  * separated benchmark module to sub-module
  * breaking change: comments will not be removed from CDATA data

3.16.0 / 2020-01-12
  * validaor: fix for ampersand characters (#215)
  * refactoring to support unicode chars in tag name
  * update typing for validator error

3.15.1 / 2019-12-09
  * validaor: fix multiple roots are not allowed

3.15.0 / 2019-11-23
  * validaor: improve error messaging
  * validator: add line number in case of error
  * validator: add more error scenarios to make it more descriptive

3.14.0 / 2019-10-25
  * arrayMode for XML to JS obj parsing

3.13.0 / 2019-10-02
  * pass tag/attr name to tag/attr value processor
  * inbuilt  optional validation with XML parser

3.12.21 / 2019-10-02
  * Fix validator for unclosed XMLs
  * move nimnjs dependency to dev dependency
  * update dependencies
  
3.12.20 / 2019-08-16
  * Revert:  Fix #167: '>' in attribute value as it is causing high performance degrade.
  
3.12.19 / 2019-07-28
  * Fix js to xml parser should work for date values. (broken: `tagValueProcessor` will receive the original value instead of string always) (breaking change)
  
3.12.18 / 2019-07-27
  * remove configstore dependency
  
3.12.17 / 2019-07-14
  * Fix #167: '>' in attribute value
  
3.12.16 / 2019-03-23
  * Support a new option "stopNodes". (#150)
Accept the list of tags which are not required to be parsed. Instead, all the nested tag and data will be assigned as string.
  * Don't show post-install message
  
3.12.12 / 2019-01-11
  * fix : IE parseInt, parseFloat error
  
3.12.11 / 2018-12-24
  * fix #132: "/" should not be parsed as boolean attr in case of self closing tags
  
3.12.9 / 2018-11-23
  * fix #129 : validator should not fail when an atrribute name is 'length'
  
3.12.8 / 2018-11-22
  * fix #128 : use 'attrValueProcessor' to process attribute value in json2xml parser
  
3.12.6 / 2018-11-10
  * Fix #126: check for type
  
3.12.4 / 2018-09-12
  * Fix: include tasks in npm package
  
3.12.3 / 2018-09-12
  * Fix CLI issue raised in last PR
  
3.12.2 / 2018-09-11
  * Fix formatting for JSON to XML output
  * Migrate to webpack (PR merged)
  * fix cli (PR merged)
  
3.12.0 / 2018-08-06
  * Support hexadecimal values
  * Support true number parsing 
  
3.11.2 / 2018-07-23
  * Update Demo for more options
  * Update license information
  * Update readme for formatting, users, and spelling mistakes
  * Add missing typescript definition for j2xParser
  * refactoring: change filenames
  
3.11.1 / 2018-06-05
  * fix #93: read the text after self closing tag
  
3.11.0 / 2018-05-20
  * return defaultOptions if there are not options in buildOptions function 
  * added localeRange declaration in parser.d.ts
  * Added support of cyrillic characters in validator XML
  * fixed bug in validator work when XML data with byte order marker
  
3.10.0 / 2018-05-13
  * Added support of cyrillic characters in parsing XML to JSON
  
3.9.11 / 2018-05-09
  * fix https://github.com/NaturalIntelligence/fast-xml-parser/issues/80 fix nimn chars
  * update package information
  * fix https://github.com/NaturalIntelligence/fast-xml-parser/issues/86: json 2 xml parser : property with null value should be parsed to self closing tag.
  * update online demo
  * revert zombiejs to old version to support old version of node
  * update dependencies
  
3.3.10 / 2018-04-23
  * fix #77 : parse even if closing tag has space before '>'
  * include all css & js lib in demo app
  * remove babel dependencies until needed
  
3.3.9 / 2018-04-18
  * fix #74 : TS2314 TypeScript compiler error
  
3.3.8 / 2018-04-17
  * fix #73 : IE doesn't support Object.assign
  
3.3.7 / 2018-04-14
  * fix: use let insted of const in for loop of validator
  * Merge pull request
    https://github.com/NaturalIntelligence/fast-xml-parser/issues/71 from bb/master
    first draft of typings for typescript
    https://github.com/NaturalIntelligence/fast-xml-parser/issues/69
  * Merge pull request
    https://github.com/NaturalIntelligence/fast-xml-parser/issues/70 from bb/patch-1
    fix some typos in readme
    
3.3.6 / 2018-03-21
  * change arrow functions to full notation for IE compatibility
  
3.3.5 / 2018-03-15
  * fix https://github.com/NaturalIntelligence/fast-xml-parser/issues/67 : attrNodeName invalid behavior
  * fix: remove decodeHTML char condition
  
3.3.4 / 2018-03-14
  * remove dependency on "he" package
  * refactor code to separate methods in separate files.
  * draft code for transforming XML to json string. It is not officially documented due to performance issue.
  
3.3.0 / 2018-03-05
  * use common default options for XML parsing for consistency. And add `parseToNimn` method.
  * update nexttodo
  * update README about XML to Nimn transformation and remove special notes about 3.x release
  * update CONTRIBUTING.ms mentioning nexttodo
  * add negative case for XML PIs
  * validate xml processing instruction tags    https://github.com/NaturalIntelligence/fast-xml-parser/issues/62
  * nimndata: handle array with object
  * nimndata: node with nested node and text node
  * nimndata: handle attributes and text node
  * nimndata: add options, handle array
  * add xml to nimn data converter
  * x2j: direct access property with tagname
  * update changelog
  * fix validator when single quote presents in value enclosed with double quotes or vice versa
  * Revert "remove unneded nimnjs dependency, move opencollective to devDependencies and replace it
    with more light opencollective-postinstall"
    This reverts commit d47aa7181075d82db4fee97fd8ea32b056fe3f46.
  * Merge pull request: https://github.com/NaturalIntelligence/fast-xml-parser/issues/63 from HaroldPutman/suppress-undefined
    Keep undefined nodes out of the XML output :     This is useful when you are deleting nodes from the JSON and rewriting XML.
    
3.2.4 / 2018-03-01
  * fix #59 fix in validator when open quote presents in attribute value
  * Create nexttodo.md
  * exclude static from bitHound tests
  * add package lock
  
3.2.3 / 2018-02-28
  * Merge pull request from  Delagen/master: fix namespaces can contain the same characters as xml names
  
3.2.2 / 2018-02-22
  * fix: attribute xmlns should not be removed if ignoreNameSpace is false
  * create CONTRIBUTING.md
  
3.2.1 / 2018-02-17
  * fix: empty attribute should be parsed
  
3.2.0 / 2018-02-16
  * Merge pull request : Dev to Master
  * Update README and version
  * j2x:add performance test
  * j2x: Remove extra empty line before closing tag
  * j2x: suppress empty nodes to self closing node if configured
  * j2x: provide option to give indentation depth
  * j2x: make optional formatting
  * j2x: encodeHTMLchat
  * j2x: handle cdata tag
  * j2x: handle grouped attributes
  * convert json to xml
    - nested object
    - array
    - attributes
    - text value
  * small refactoring
  * Merge pull request: Update cli.js to let user validate XML file or data
  * Add option for rendering CDATA as separate property
  
3.0.1 / 2018-02-09
  * fix CRLF: replace it with single space in attributes value only.
  
3.0.0 / 2018-02-08
  * change online tool with new changes
  * update info about new options
  * separate tag value processing to separate function
  * make HTML decoding optional
  * give an option to allow boolean attributes
  * change cli options as per v3
  * Correct comparison table format on README
  * update v3 information
  * some performance improvement changes
  * Make regex object local to the method and move some common methods to util
  * Change parser to
    - handle multiple instances of CDATA
    - make triming of value optionals
    - HTML decode attribute and text value
    - refactor code to separate files
  * Ignore newline chars without RE (in validator)
  * validate for XML prolog
  * Validate DOCTYPE without RE
  * Update validator to return error response
  * Update README to add detail about V3
  * Separate xmlNode model class
  * include vscode debug config
  * fix for repeated object
  * fix attribute regex for boolean attributes
  * Fix validator for invalid attributes
2.9.4 / 2018-02-02
  * Merge pull request: Decode HTML characters
  * refactor source folder name
  * ignore bundle / browser js to be published to npm
2.9.3 / 2018-01-26
  * Merge pull request: Correctly remove CRLF line breaks
  * Enable to parse attribute in online editor
  * Fix testing demo app test
  * Describe parsing options
  * Add options for online demo
2.9.2 / 2018-01-18
  * Remove check if tag starting with "XML"
  * Fix: when there are spaces before / after CDATA

2.9.1 / 2018-01-16
  * Fix: newline should be replaced with single space
  * Fix: for single and multiline comments
  * validate xml with CDATA
  * Fix: the issue when there is no space between 2 attributes
  * Fix: https://github.com/NaturalIntelligence/fast-xml-parser/issues/33: when there is newline char in attr val, it doesn't parse
  * Merge pull request: fix ignoreNamespace
    * fix: don't wrap attributes if only namespace attrs
    * fix: use portfinder for run tests, update deps
    * fix: don't treat namespaces as attributes when ignoreNamespace enabled

2.9.0 / 2018-01-10
  * Rewrite the validator to handle large files.
    Ignore DOCTYPE validation. 
  * Fix: When attribute value has equal sign

2.8.3 / 2017-12-15
  * Fix: when a tag has value along with subtags

2.8.2 / 2017-12-04
  * Fix value parsing for IE

2.8.1 / 2017-12-01
  * fix: validator should return false instead of err when invalid XML

2.8.0 / 2017-11-29
  * Add CLI option to ignore value conversion
  * Fix variable name when filename is given on CLI
  * Update CLI help text
  * Merge pull request: xml2js: Accept standard input
  * Test Node 8
  * Update dependencies
  * Bundle readToEnd
  * Add ability to read from standard input

2.7.4 / 2017-09-22
  * Merge pull request: Allow wrap attributes with subobject to compatible with other parsers output

2.7.3 / 2017-08-02
  * fix: handle CDATA with regx

2.7.2 / 2017-07-30
  * Change travis config for yarn caching
  * fix validator: when tag property is same as array property
  * Merge pull request: Failing test case in validator for valid SVG

2.7.1 / 2017-07-26
  * Fix: Handle val 0

2.7.0 / 2017-07-25
  * Fix test for arrayMode
  * Merge pull request: Add arrayMode option to parse any nodes as arrays

2.6.0 / 2017-07-14
  * code improvement
  * Add unit tests for value conversion for attr
  * Merge pull request: option of an attribute value conversion to a number (textAttrConversion) the same way as the textNodeConversion option does. Default value is false.

2.5.1 / 2017-07-01
  * Fix XML element name pattern
  * Fix XML element name pattern while parsing
  * Fix validation for xml tag element

2.5.0 / 2017-06-25
  * Improve Validator performance
  * update attr matching regex
  * Add perf tests
  * Improve atrr regex to handle all cases

2.4.4 / 2017-06-08
  * Bug fix: when an attribute has single or double quote in value

2.4.3 / 2017-06-05
  * Bug fix: when multiple CDATA tags are given
  * Merge pull request: add option "textNodeConversion"
  * add option "textNodeConversion"

2.4.1 / 2017-04-14
  * fix tests
  * Bug fix: preserve initial space of node value
  * Handle CDATA

2.3.1 / 2017-03-15
  * Bug fix: when single self closing tag
  * Merge pull request: fix .codeclimate.yml
  * Update .codeclimate.yml - Fixed config so it does not error anymore.
  * Update .codeclimate.yml

2.3.0 / 2017-02-26
  * Code improvement
  * add bithound config
  * Update usage
  * Update travis to generate bundle js before running tests
  * 1.Browserify, 2. add more tests for validator
  * Add validator
  * Fix CLI default parameter bug

2.2.1 / 2017-02-05
  * Bug fix: CLI default option
