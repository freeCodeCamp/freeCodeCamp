# property-information

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info for properties and attributes on the web-platform (HTML, SVG, ARIA, XML,
XMLNS, XLink).

This package follows a sensible naming scheme as defined by [hast][].

## Install

[npm][]:

```sh
npm install property-information
```

## Contents

*   [Use](#use)
*   [API](#api)
    *   [`propertyInformation.find(schema, name)`](#propertyinformationfindschema-name)
    *   [`propertyInformation.normalize(name)`](#propertyinformationnormalizename)
    *   [`propertyInformation.html`](#propertyinformationhtml)
    *   [`propertyInformation.svg`](#propertyinformationsvg)
    *   [`hastToReact`](#hasttoreact)
*   [Support](#support)
*   [Related](#related)
*   [License](#license)

## Use

```js
var info = require('property-information')

console.log(info.find(info.html, 'className'))
// Or: info.find(info.html, 'class')
console.log(info.find(info.svg, 'horiz-adv-x'))
// Or: info.find(info.svg, 'horizAdvX')
console.log(info.find(info.svg, 'xlink:arcrole'))
// Or: info.find(info.svg, 'xLinkArcRole')
console.log(info.find(info.html, 'xmlLang'))
// Or: info.find(info.html, 'xml:lang')
console.log(info.find(info.html, 'ariaValueNow'))
// Or: info.find(info.html, 'aria-valuenow')
```

Yields:

```js
{ space: 'html',
  attribute: 'class',
  property: 'className',
  spaceSeparated: true }
{ space: 'svg',
  attribute: 'horiz-adv-x',
  property: 'horizAdvX',
  number: true }
{ space: 'xlink', attribute: 'xlink:arcrole', property: 'xLinkArcrole' }
{ space: 'xml', attribute: 'xml:lang', property: 'xmlLang' }
{ attribute: 'aria-valuenow', property: 'ariaValueNow', number: true }
```

## API

### `propertyInformation.find(schema, name)`

Look up info on a property.

In most cases, the given `schema` contains info on the property.
All standard, most legacy, and some non-standard properties are supported.
For these cases, the returned [`Info`][info] has hints about value of the
property.

`name` can be a [valid data attribute or property][data], in which case an
[`Info`][info] object with the correctly cased `attribute` and `property` is
returned.

`name` can be an unknown attribute, in which case an [`Info`][info] object
with `attribute` and `property` set to the given name is returned.
It is not recommended to provide unsupported legacy or recently specced
properties.

#### Parameters

*   `schema` ([`Schema`][schema])
    — Either `propertyInformation.html` or `propertyInformation.svg`
*   `name` (`string`)
    — An attribute-like or property-like name that is passed through
    [`normalize`][normalize] to find the correct info

#### Returns

[`Info`][info].

#### Note

`find` can be accessed directly from `require('property-information/find')` as
well.

#### Example

Aside from the aforementioned example, which shows known HTML, SVG, XML, XLink,
and ARIA support, data properties, and attributes are also supported:

```js
console.log(info.find(info.html, 'data-date-of-birth'))
// Or: info.find(info.html, 'dataDateOfBirth')
```

Yields:

```js
{ attribute: 'data-date-of-birth', property: 'dataDateOfBirth' }
```

Unknown values are passed through untouched:

```js
console.log(info.find(info.html, 'un-Known'))
```

Yields:

```js
{ attribute: 'un-Known', property: 'un-Known' }
```

### `propertyInformation.normalize(name)`

Get the cleaned case-insensitive form of an attribute or a property.

#### Parameters

*   `name` (`string`) — An attribute-like or property-like name

#### Returns

`string` that can be used to look up the properly cased property in a
[`Schema`][schema].

#### Note

`normalize` can be accessed directly from
`require('property-information/normalize')` as well.

#### Example

```js
info.html.normal[info.normalize('for')] // => 'htmlFor'
info.svg.normal[info.normalize('VIEWBOX')] // => 'viewBox'
info.html.normal[info.normalize('unknown')] // => undefined
info.html.normal[info.normalize('accept-charset')] // => 'acceptCharset'
```

### `propertyInformation.html`

### `propertyInformation.svg`

[`Schema`][schema] for either HTML or SVG, containing info on properties from
the primary space (HTML or SVG) and related embedded spaces (ARIA, XML, XMLNS,
XLink).

#### Note

`html` and `svg` can be accessed directly from
`require('property-information/html')` and `require('property-information/svg')`
as well.

#### Example

```js
console.log(info.html.property.htmlFor)
console.log(info.svg.property.viewBox)
console.log(info.html.property.unknown)
```

Yields:

```js
{ space: 'html',
  attribute: 'for',
  property: 'htmlFor',
  spaceSeparated: true }
{ space: 'svg', attribute: 'viewBox', property: 'viewBox' }
undefined
```

#### `Schema`

A schema for a primary space.

*   `space` (`'html'` or `'svg'`) — Primary space of the schema
*   `normal` (`Object.<string>`) — Object mapping normalized attributes and
    properties to properly cased properties
*   `property` ([`Object.<Info>`][info]) — Object mapping properties to info

#### `Info`

Info on a property.

*   `space` (`'html'`, `'svg'`, `'xml'`, `'xlink'`, `'xmlns'`, optional)
    — [Space][namespace] of the property
*   `attribute` (`string`) — Attribute name for the property that could be used
    in markup (for example: `'aria-describedby'`, `'allowfullscreen'`,
    `'xml:lang'`, `'for'`, or `'charoff'`)
*   `property` (`string`) — JavaScript-style camel-cased name, based on the
    DOM, but sometimes different (for example: `'ariaDescribedBy'`,
    `'allowFullScreen'`, `'xmlLang'`, `'htmlFor'`, `'charOff'`)
*   `boolean` (`boolean`) — The property is `boolean`.
    The default value of this property is false, so it can be omitted
*   `booleanish` (`boolean`) — The property is a `boolean`.
    The default value of this property is something other than false, so
    `false` must persist.
    The value can hold a string (as is the case with `ariaChecked` and its
    `'mixed'` value)
*   `overloadedBoolean` (`boolean`) — The property is `boolean`.
    The default value of this property is false, so it can be omitted.
    The value can hold a string (as is the case with `download` as its value
    reflects the name to use for the downloaded file)
*   `number` (`boolean`) — The property is `number`.
    These values can sometimes hold a string
*   `spaceSeparated` (`boolean`) — The property is a list separated by spaces
    (for example, `className`)
*   `commaSeparated` (`boolean`) — The property is a list separated by commas
    (for example, `srcSet`)
*   `commaOrSpaceSeparated` (`boolean`) — The property is a list separated by
    commas or spaces (for example, `strokeDashArray`)
*   `mustUseProperty` (`boolean`) — If a DOM is used, setting the property
    should be used for the change to take effect (this is true only for
    `'checked'`, `'multiple'`, `'muted'`, and `'selected'`)
*   `defined` (`boolean`) — The property is [defined by a space](#support).
    This is true for values in HTML (including data and ARIA), SVG, XML,
    XMLNS, and XLink.
    These values can only be accessed through `find`.

### `hastToReact`

> Accessible through `require('property-information/hast-to-react.json')`

[hast][] is close to [React][], but differs in a couple of cases.
To get a React property from a hast property, check if it is in
[`hast-to-react`][hast-to-react] (`Object.<string>`), if it is, then use the
corresponding value, otherwise, use the hast property.

## Support

<!--list start-->

| Property                     | Attribute                      | Space         |
| ---------------------------- | ------------------------------ | ------------- |
| `aLink`                      | `alink`                        | `html`        |
| `abbr`                       | `abbr`                         | `html`        |
| `about`                      | `about`                        | `svg`         |
| `accentHeight`               | `accent-height`                | `svg`         |
| `accept`                     | `accept`                       | `html`        |
| `acceptCharset`              | `accept-charset`               | `html`        |
| `accessKey`                  | `accesskey`                    | `html`        |
| `accumulate`                 | `accumulate`                   | `svg`         |
| `action`                     | `action`                       | `html`        |
| `additive`                   | `additive`                     | `svg`         |
| `align`                      | `align`                        | `html`        |
| `alignmentBaseline`          | `alignment-baseline`           | `svg`         |
| `allow`                      | `allow`                        | `html`        |
| `allowFullScreen`            | `allowfullscreen`              | `html`        |
| `allowPaymentRequest`        | `allowpaymentrequest`          | `html`        |
| `allowTransparency`          | `allowtransparency`            | `html`        |
| `allowUserMedia`             | `allowusermedia`               | `html`        |
| `alphabetic`                 | `alphabetic`                   | `svg`         |
| `alt`                        | `alt`                          | `html`        |
| `amplitude`                  | `amplitude`                    | `svg`         |
| `arabicForm`                 | `arabic-form`                  | `svg`         |
| `archive`                    | `archive`                      | `html`        |
| `ariaActiveDescendant`       | `aria-activedescendant`        |               |
| `ariaAtomic`                 | `aria-atomic`                  |               |
| `ariaAutoComplete`           | `aria-autocomplete`            |               |
| `ariaBusy`                   | `aria-busy`                    |               |
| `ariaChecked`                | `aria-checked`                 |               |
| `ariaColCount`               | `aria-colcount`                |               |
| `ariaColIndex`               | `aria-colindex`                |               |
| `ariaColSpan`                | `aria-colspan`                 |               |
| `ariaControls`               | `aria-controls`                |               |
| `ariaCurrent`                | `aria-current`                 |               |
| `ariaDescribedBy`            | `aria-describedby`             |               |
| `ariaDetails`                | `aria-details`                 |               |
| `ariaDisabled`               | `aria-disabled`                |               |
| `ariaDropEffect`             | `aria-dropeffect`              |               |
| `ariaErrorMessage`           | `aria-errormessage`            |               |
| `ariaExpanded`               | `aria-expanded`                |               |
| `ariaFlowTo`                 | `aria-flowto`                  |               |
| `ariaGrabbed`                | `aria-grabbed`                 |               |
| `ariaHasPopup`               | `aria-haspopup`                |               |
| `ariaHidden`                 | `aria-hidden`                  |               |
| `ariaInvalid`                | `aria-invalid`                 |               |
| `ariaKeyShortcuts`           | `aria-keyshortcuts`            |               |
| `ariaLabel`                  | `aria-label`                   |               |
| `ariaLabelledBy`             | `aria-labelledby`              |               |
| `ariaLevel`                  | `aria-level`                   |               |
| `ariaLive`                   | `aria-live`                    |               |
| `ariaModal`                  | `aria-modal`                   |               |
| `ariaMultiLine`              | `aria-multiline`               |               |
| `ariaMultiSelectable`        | `aria-multiselectable`         |               |
| `ariaOrientation`            | `aria-orientation`             |               |
| `ariaOwns`                   | `aria-owns`                    |               |
| `ariaPlaceholder`            | `aria-placeholder`             |               |
| `ariaPosInSet`               | `aria-posinset`                |               |
| `ariaPressed`                | `aria-pressed`                 |               |
| `ariaReadOnly`               | `aria-readonly`                |               |
| `ariaRelevant`               | `aria-relevant`                |               |
| `ariaRequired`               | `aria-required`                |               |
| `ariaRoleDescription`        | `aria-roledescription`         |               |
| `ariaRowCount`               | `aria-rowcount`                |               |
| `ariaRowIndex`               | `aria-rowindex`                |               |
| `ariaRowSpan`                | `aria-rowspan`                 |               |
| `ariaSelected`               | `aria-selected`                |               |
| `ariaSetSize`                | `aria-setsize`                 |               |
| `ariaSort`                   | `aria-sort`                    |               |
| `ariaValueMax`               | `aria-valuemax`                |               |
| `ariaValueMin`               | `aria-valuemin`                |               |
| `ariaValueNow`               | `aria-valuenow`                |               |
| `ariaValueText`              | `aria-valuetext`               |               |
| `as`                         | `as`                           | `html`        |
| `ascent`                     | `ascent`                       | `svg`         |
| `async`                      | `async`                        | `html`        |
| `attributeName`              | `attributeName`                | `svg`         |
| `attributeType`              | `attributeType`                | `svg`         |
| `autoCapitalize`             | `autocapitalize`               | `html`        |
| `autoComplete`               | `autocomplete`                 | `html`        |
| `autoCorrect`                | `autocorrect`                  | `html`        |
| `autoFocus`                  | `autofocus`                    | `html`        |
| `autoPlay`                   | `autoplay`                     | `html`        |
| `autoSave`                   | `autosave`                     | `html`        |
| `axis`                       | `axis`                         | `html`        |
| `azimuth`                    | `azimuth`                      | `svg`         |
| `background`                 | `background`                   | `html`        |
| `bandwidth`                  | `bandwidth`                    | `svg`         |
| `baseFrequency`              | `baseFrequency`                | `svg`         |
| `baseProfile`                | `baseProfile`                  | `svg`         |
| `baselineShift`              | `baseline-shift`               | `svg`         |
| `bbox`                       | `bbox`                         | `svg`         |
| `begin`                      | `begin`                        | `svg`         |
| `bgColor`                    | `bgcolor`                      | `html`        |
| `bias`                       | `bias`                         | `svg`         |
| `border`                     | `border`                       | `html`        |
| `borderColor`                | `bordercolor`                  | `html`        |
| `bottomMargin`               | `bottommargin`                 | `html`        |
| `by`                         | `by`                           | `svg`         |
| `calcMode`                   | `calcMode`                     | `svg`         |
| `capHeight`                  | `cap-height`                   | `svg`         |
| `capture`                    | `capture`                      | `html`        |
| `cellPadding`                | `cellpadding`                  | `html`        |
| `cellSpacing`                | `cellspacing`                  | `html`        |
| `char`                       | `char`                         | `html`        |
| `charOff`                    | `charoff`                      | `html`        |
| `charSet`                    | `charset`                      | `html`        |
| `checked`                    | `checked`                      | `html`        |
| `cite`                       | `cite`                         | `html`        |
| `classId`                    | `classid`                      | `html`        |
| `className`                  | `class`                        | `svg`, `html` |
| `clear`                      | `clear`                        | `html`        |
| `clip`                       | `clip`                         | `svg`         |
| `clipPath`                   | `clip-path`                    | `svg`         |
| `clipPathUnits`              | `clipPathUnits`                | `svg`         |
| `clipRule`                   | `clip-rule`                    | `svg`         |
| `code`                       | `code`                         | `html`        |
| `codeBase`                   | `codebase`                     | `html`        |
| `codeType`                   | `codetype`                     | `html`        |
| `colSpan`                    | `colspan`                      | `html`        |
| `color`                      | `color`                        | `svg`, `html` |
| `colorInterpolation`         | `color-interpolation`          | `svg`         |
| `colorInterpolationFilters`  | `color-interpolation-filters`  | `svg`         |
| `colorProfile`               | `color-profile`                | `svg`         |
| `colorRendering`             | `color-rendering`              | `svg`         |
| `cols`                       | `cols`                         | `html`        |
| `compact`                    | `compact`                      | `html`        |
| `content`                    | `content`                      | `svg`, `html` |
| `contentEditable`            | `contenteditable`              | `html`        |
| `contentScriptType`          | `contentScriptType`            | `svg`         |
| `contentStyleType`           | `contentStyleType`             | `svg`         |
| `controls`                   | `controls`                     | `html`        |
| `controlsList`               | `controlslist`                 | `html`        |
| `coords`                     | `coords`                       | `html`        |
| `crossOrigin`                | `crossorigin`                  | `svg`, `html` |
| `cursor`                     | `cursor`                       | `svg`         |
| `cx`                         | `cx`                           | `svg`         |
| `cy`                         | `cy`                           | `svg`         |
| `d`                          | `d`                            | `svg`         |
| `data`                       | `data`                         | `html`        |
| `dataType`                   | `datatype`                     | `svg`         |
| `dateTime`                   | `datetime`                     | `html`        |
| `declare`                    | `declare`                      | `html`        |
| `decoding`                   | `decoding`                     | `html`        |
| `default`                    | `default`                      | `html`        |
| `defaultAction`              | `defaultAction`                | `svg`         |
| `defer`                      | `defer`                        | `html`        |
| `descent`                    | `descent`                      | `svg`         |
| `diffuseConstant`            | `diffuseConstant`              | `svg`         |
| `dir`                        | `dir`                          | `html`        |
| `dirName`                    | `dirname`                      | `html`        |
| `direction`                  | `direction`                    | `svg`         |
| `disablePictureInPicture`    | `disablepictureinpicture`      | `html`        |
| `disableRemotePlayback`      | `disableremoteplayback`        | `html`        |
| `disabled`                   | `disabled`                     | `html`        |
| `display`                    | `display`                      | `svg`         |
| `divisor`                    | `divisor`                      | `svg`         |
| `dominantBaseline`           | `dominant-baseline`            | `svg`         |
| `download`                   | `download`                     | `svg`, `html` |
| `draggable`                  | `draggable`                    | `html`        |
| `dur`                        | `dur`                          | `svg`         |
| `dx`                         | `dx`                           | `svg`         |
| `dy`                         | `dy`                           | `svg`         |
| `edgeMode`                   | `edgeMode`                     | `svg`         |
| `editable`                   | `editable`                     | `svg`         |
| `elevation`                  | `elevation`                    | `svg`         |
| `enableBackground`           | `enable-background`            | `svg`         |
| `encType`                    | `enctype`                      | `html`        |
| `end`                        | `end`                          | `svg`         |
| `enterKeyHint`               | `enterkeyhint`                 | `html`        |
| `event`                      | `event`                        | `svg`, `html` |
| `exponent`                   | `exponent`                     | `svg`         |
| `externalResourcesRequired`  | `externalResourcesRequired`    | `svg`         |
| `face`                       | `face`                         | `html`        |
| `fill`                       | `fill`                         | `svg`         |
| `fillOpacity`                | `fill-opacity`                 | `svg`         |
| `fillRule`                   | `fill-rule`                    | `svg`         |
| `filter`                     | `filter`                       | `svg`         |
| `filterRes`                  | `filterRes`                    | `svg`         |
| `filterUnits`                | `filterUnits`                  | `svg`         |
| `floodColor`                 | `flood-color`                  | `svg`         |
| `floodOpacity`               | `flood-opacity`                | `svg`         |
| `focusHighlight`             | `focusHighlight`               | `svg`         |
| `focusable`                  | `focusable`                    | `svg`         |
| `fontFamily`                 | `font-family`                  | `svg`         |
| `fontSize`                   | `font-size`                    | `svg`         |
| `fontSizeAdjust`             | `font-size-adjust`             | `svg`         |
| `fontStretch`                | `font-stretch`                 | `svg`         |
| `fontStyle`                  | `font-style`                   | `svg`         |
| `fontVariant`                | `font-variant`                 | `svg`         |
| `fontWeight`                 | `font-weight`                  | `svg`         |
| `form`                       | `form`                         | `html`        |
| `formAction`                 | `formaction`                   | `html`        |
| `formEncType`                | `formenctype`                  | `html`        |
| `formMethod`                 | `formmethod`                   | `html`        |
| `formNoValidate`             | `formnovalidate`               | `html`        |
| `formTarget`                 | `formtarget`                   | `html`        |
| `format`                     | `format`                       | `svg`         |
| `fr`                         | `fr`                           | `svg`         |
| `frame`                      | `frame`                        | `html`        |
| `frameBorder`                | `frameborder`                  | `html`        |
| `from`                       | `from`                         | `svg`         |
| `fx`                         | `fx`                           | `svg`         |
| `fy`                         | `fy`                           | `svg`         |
| `g1`                         | `g1`                           | `svg`         |
| `g2`                         | `g2`                           | `svg`         |
| `glyphName`                  | `glyph-name`                   | `svg`         |
| `glyphOrientationHorizontal` | `glyph-orientation-horizontal` | `svg`         |
| `glyphOrientationVertical`   | `glyph-orientation-vertical`   | `svg`         |
| `glyphRef`                   | `glyphRef`                     | `svg`         |
| `gradientTransform`          | `gradientTransform`            | `svg`         |
| `gradientUnits`              | `gradientUnits`                | `svg`         |
| `hSpace`                     | `hspace`                       | `html`        |
| `handler`                    | `handler`                      | `svg`         |
| `hanging`                    | `hanging`                      | `svg`         |
| `hatchContentUnits`          | `hatchContentUnits`            | `svg`         |
| `hatchUnits`                 | `hatchUnits`                   | `svg`         |
| `headers`                    | `headers`                      | `html`        |
| `height`                     | `height`                       | `svg`, `html` |
| `hidden`                     | `hidden`                       | `html`        |
| `high`                       | `high`                         | `html`        |
| `horizAdvX`                  | `horiz-adv-x`                  | `svg`         |
| `horizOriginX`               | `horiz-origin-x`               | `svg`         |
| `horizOriginY`               | `horiz-origin-y`               | `svg`         |
| `href`                       | `href`                         | `svg`, `html` |
| `hrefLang`                   | `hreflang`                     | `svg`, `html` |
| `htmlFor`                    | `for`                          | `html`        |
| `httpEquiv`                  | `http-equiv`                   | `html`        |
| `id`                         | `id`                           | `svg`, `html` |
| `ideographic`                | `ideographic`                  | `svg`         |
| `imageRendering`             | `image-rendering`              | `svg`         |
| `imageSizes`                 | `imagesizes`                   | `html`        |
| `imageSrcSet`                | `imagesrcset`                  | `html`        |
| `in`                         | `in`                           | `svg`         |
| `in2`                        | `in2`                          | `svg`         |
| `initialVisibility`          | `initialVisibility`            | `svg`         |
| `inputMode`                  | `inputmode`                    | `html`        |
| `integrity`                  | `integrity`                    | `html`        |
| `intercept`                  | `intercept`                    | `svg`         |
| `is`                         | `is`                           | `html`        |
| `isMap`                      | `ismap`                        | `html`        |
| `itemId`                     | `itemid`                       | `html`        |
| `itemProp`                   | `itemprop`                     | `html`        |
| `itemRef`                    | `itemref`                      | `html`        |
| `itemScope`                  | `itemscope`                    | `html`        |
| `itemType`                   | `itemtype`                     | `html`        |
| `k`                          | `k`                            | `svg`         |
| `k1`                         | `k1`                           | `svg`         |
| `k2`                         | `k2`                           | `svg`         |
| `k3`                         | `k3`                           | `svg`         |
| `k4`                         | `k4`                           | `svg`         |
| `kernelMatrix`               | `kernelMatrix`                 | `svg`         |
| `kernelUnitLength`           | `kernelUnitLength`             | `svg`         |
| `kerning`                    | `kerning`                      | `svg`         |
| `keyPoints`                  | `keyPoints`                    | `svg`         |
| `keySplines`                 | `keySplines`                   | `svg`         |
| `keyTimes`                   | `keyTimes`                     | `svg`         |
| `kind`                       | `kind`                         | `html`        |
| `label`                      | `label`                        | `html`        |
| `lang`                       | `lang`                         | `svg`, `html` |
| `language`                   | `language`                     | `html`        |
| `leftMargin`                 | `leftmargin`                   | `html`        |
| `lengthAdjust`               | `lengthAdjust`                 | `svg`         |
| `letterSpacing`              | `letter-spacing`               | `svg`         |
| `lightingColor`              | `lighting-color`               | `svg`         |
| `limitingConeAngle`          | `limitingConeAngle`            | `svg`         |
| `link`                       | `link`                         | `html`        |
| `list`                       | `list`                         | `html`        |
| `loading`                    | `loading`                      | `html`        |
| `local`                      | `local`                        | `svg`         |
| `longDesc`                   | `longdesc`                     | `html`        |
| `loop`                       | `loop`                         | `html`        |
| `low`                        | `low`                          | `html`        |
| `lowSrc`                     | `lowsrc`                       | `html`        |
| `manifest`                   | `manifest`                     | `html`        |
| `marginHeight`               | `marginheight`                 | `html`        |
| `marginWidth`                | `marginwidth`                  | `html`        |
| `markerEnd`                  | `marker-end`                   | `svg`         |
| `markerHeight`               | `markerHeight`                 | `svg`         |
| `markerMid`                  | `marker-mid`                   | `svg`         |
| `markerStart`                | `marker-start`                 | `svg`         |
| `markerUnits`                | `markerUnits`                  | `svg`         |
| `markerWidth`                | `markerWidth`                  | `svg`         |
| `mask`                       | `mask`                         | `svg`         |
| `maskContentUnits`           | `maskContentUnits`             | `svg`         |
| `maskUnits`                  | `maskUnits`                    | `svg`         |
| `mathematical`               | `mathematical`                 | `svg`         |
| `max`                        | `max`                          | `svg`, `html` |
| `maxLength`                  | `maxlength`                    | `html`        |
| `media`                      | `media`                        | `svg`, `html` |
| `mediaCharacterEncoding`     | `mediaCharacterEncoding`       | `svg`         |
| `mediaContentEncodings`      | `mediaContentEncodings`        | `svg`         |
| `mediaSize`                  | `mediaSize`                    | `svg`         |
| `mediaTime`                  | `mediaTime`                    | `svg`         |
| `method`                     | `method`                       | `svg`, `html` |
| `min`                        | `min`                          | `svg`, `html` |
| `minLength`                  | `minlength`                    | `html`        |
| `mode`                       | `mode`                         | `svg`         |
| `multiple`                   | `multiple`                     | `html`        |
| `muted`                      | `muted`                        | `html`        |
| `name`                       | `name`                         | `svg`, `html` |
| `navDown`                    | `nav-down`                     | `svg`         |
| `navDownLeft`                | `nav-down-left`                | `svg`         |
| `navDownRight`               | `nav-down-right`               | `svg`         |
| `navLeft`                    | `nav-left`                     | `svg`         |
| `navNext`                    | `nav-next`                     | `svg`         |
| `navPrev`                    | `nav-prev`                     | `svg`         |
| `navRight`                   | `nav-right`                    | `svg`         |
| `navUp`                      | `nav-up`                       | `svg`         |
| `navUpLeft`                  | `nav-up-left`                  | `svg`         |
| `navUpRight`                 | `nav-up-right`                 | `svg`         |
| `noHref`                     | `nohref`                       | `html`        |
| `noModule`                   | `nomodule`                     | `html`        |
| `noResize`                   | `noresize`                     | `html`        |
| `noShade`                    | `noshade`                      | `html`        |
| `noValidate`                 | `novalidate`                   | `html`        |
| `noWrap`                     | `nowrap`                       | `html`        |
| `nonce`                      | `nonce`                        | `html`        |
| `numOctaves`                 | `numOctaves`                   | `svg`         |
| `object`                     | `object`                       | `html`        |
| `observer`                   | `observer`                     | `svg`         |
| `offset`                     | `offset`                       | `svg`         |
| `onAbort`                    | `onabort`                      | `svg`, `html` |
| `onActivate`                 | `onactivate`                   | `svg`         |
| `onAfterPrint`               | `onafterprint`                 | `svg`, `html` |
| `onAuxClick`                 | `onauxclick`                   | `html`        |
| `onBeforePrint`              | `onbeforeprint`                | `svg`, `html` |
| `onBeforeUnload`             | `onbeforeunload`               | `html`        |
| `onBegin`                    | `onbegin`                      | `svg`         |
| `onBlur`                     | `onblur`                       | `html`        |
| `onCanPlay`                  | `oncanplay`                    | `svg`, `html` |
| `onCanPlayThrough`           | `oncanplaythrough`             | `svg`, `html` |
| `onCancel`                   | `oncancel`                     | `svg`, `html` |
| `onChange`                   | `onchange`                     | `svg`, `html` |
| `onClick`                    | `onclick`                      | `svg`, `html` |
| `onClose`                    | `onclose`                      | `svg`, `html` |
| `onContextMenu`              | `oncontextmenu`                | `html`        |
| `onCopy`                     | `oncopy`                       | `svg`, `html` |
| `onCueChange`                | `oncuechange`                  | `svg`, `html` |
| `onCut`                      | `oncut`                        | `svg`, `html` |
| `onDblClick`                 | `ondblclick`                   | `svg`, `html` |
| `onDrag`                     | `ondrag`                       | `svg`, `html` |
| `onDragEnd`                  | `ondragend`                    | `svg`, `html` |
| `onDragEnter`                | `ondragenter`                  | `svg`, `html` |
| `onDragExit`                 | `ondragexit`                   | `svg`, `html` |
| `onDragLeave`                | `ondragleave`                  | `svg`, `html` |
| `onDragOver`                 | `ondragover`                   | `svg`, `html` |
| `onDragStart`                | `ondragstart`                  | `svg`, `html` |
| `onDrop`                     | `ondrop`                       | `svg`, `html` |
| `onDurationChange`           | `ondurationchange`             | `svg`, `html` |
| `onEmptied`                  | `onemptied`                    | `svg`, `html` |
| `onEnd`                      | `onend`                        | `svg`         |
| `onEnded`                    | `onended`                      | `svg`, `html` |
| `onError`                    | `onerror`                      | `svg`, `html` |
| `onFocus`                    | `onfocus`                      | `svg`, `html` |
| `onFocusIn`                  | `onfocusin`                    | `svg`         |
| `onFocusOut`                 | `onfocusout`                   | `svg`         |
| `onFormData`                 | `onformdata`                   | `html`        |
| `onHashChange`               | `onhashchange`                 | `svg`, `html` |
| `onInput`                    | `oninput`                      | `svg`, `html` |
| `onInvalid`                  | `oninvalid`                    | `svg`, `html` |
| `onKeyDown`                  | `onkeydown`                    | `svg`, `html` |
| `onKeyPress`                 | `onkeypress`                   | `svg`, `html` |
| `onKeyUp`                    | `onkeyup`                      | `svg`, `html` |
| `onLanguageChange`           | `onlanguagechange`             | `html`        |
| `onLoad`                     | `onload`                       | `svg`, `html` |
| `onLoadEnd`                  | `onloadend`                    | `html`        |
| `onLoadStart`                | `onloadstart`                  | `svg`, `html` |
| `onLoadedData`               | `onloadeddata`                 | `svg`, `html` |
| `onLoadedMetadata`           | `onloadedmetadata`             | `svg`, `html` |
| `onMessage`                  | `onmessage`                    | `svg`, `html` |
| `onMessageError`             | `onmessageerror`               | `html`        |
| `onMouseDown`                | `onmousedown`                  | `svg`, `html` |
| `onMouseEnter`               | `onmouseenter`                 | `svg`, `html` |
| `onMouseLeave`               | `onmouseleave`                 | `svg`, `html` |
| `onMouseMove`                | `onmousemove`                  | `svg`, `html` |
| `onMouseOut`                 | `onmouseout`                   | `svg`, `html` |
| `onMouseOver`                | `onmouseover`                  | `svg`, `html` |
| `onMouseUp`                  | `onmouseup`                    | `svg`, `html` |
| `onMouseWheel`               | `onmousewheel`                 | `svg`         |
| `onOffline`                  | `onoffline`                    | `svg`, `html` |
| `onOnline`                   | `ononline`                     | `svg`, `html` |
| `onPageHide`                 | `onpagehide`                   | `svg`, `html` |
| `onPageShow`                 | `onpageshow`                   | `svg`, `html` |
| `onPaste`                    | `onpaste`                      | `svg`, `html` |
| `onPause`                    | `onpause`                      | `svg`, `html` |
| `onPlay`                     | `onplay`                       | `svg`, `html` |
| `onPlaying`                  | `onplaying`                    | `svg`, `html` |
| `onPopState`                 | `onpopstate`                   | `svg`, `html` |
| `onProgress`                 | `onprogress`                   | `svg`, `html` |
| `onRateChange`               | `onratechange`                 | `svg`, `html` |
| `onRejectionHandled`         | `onrejectionhandled`           | `html`        |
| `onRepeat`                   | `onrepeat`                     | `svg`         |
| `onReset`                    | `onreset`                      | `svg`, `html` |
| `onResize`                   | `onresize`                     | `svg`, `html` |
| `onScroll`                   | `onscroll`                     | `svg`, `html` |
| `onSecurityPolicyViolation`  | `onsecuritypolicyviolation`    | `html`        |
| `onSeeked`                   | `onseeked`                     | `svg`, `html` |
| `onSeeking`                  | `onseeking`                    | `svg`, `html` |
| `onSelect`                   | `onselect`                     | `svg`, `html` |
| `onShow`                     | `onshow`                       | `svg`         |
| `onSlotChange`               | `onslotchange`                 | `html`        |
| `onStalled`                  | `onstalled`                    | `svg`, `html` |
| `onStorage`                  | `onstorage`                    | `svg`, `html` |
| `onSubmit`                   | `onsubmit`                     | `svg`, `html` |
| `onSuspend`                  | `onsuspend`                    | `svg`, `html` |
| `onTimeUpdate`               | `ontimeupdate`                 | `svg`, `html` |
| `onToggle`                   | `ontoggle`                     | `svg`, `html` |
| `onUnhandledRejection`       | `onunhandledrejection`         | `html`        |
| `onUnload`                   | `onunload`                     | `svg`, `html` |
| `onVolumeChange`             | `onvolumechange`               | `svg`, `html` |
| `onWaiting`                  | `onwaiting`                    | `svg`, `html` |
| `onWheel`                    | `onwheel`                      | `html`        |
| `onZoom`                     | `onzoom`                       | `svg`         |
| `opacity`                    | `opacity`                      | `svg`         |
| `open`                       | `open`                         | `html`        |
| `operator`                   | `operator`                     | `svg`         |
| `optimum`                    | `optimum`                      | `html`        |
| `order`                      | `order`                        | `svg`         |
| `orient`                     | `orient`                       | `svg`         |
| `orientation`                | `orientation`                  | `svg`         |
| `origin`                     | `origin`                       | `svg`         |
| `overflow`                   | `overflow`                     | `svg`         |
| `overlay`                    | `overlay`                      | `svg`         |
| `overlinePosition`           | `overline-position`            | `svg`         |
| `overlineThickness`          | `overline-thickness`           | `svg`         |
| `paintOrder`                 | `paint-order`                  | `svg`         |
| `panose1`                    | `panose-1`                     | `svg`         |
| `path`                       | `path`                         | `svg`         |
| `pathLength`                 | `pathLength`                   | `svg`         |
| `pattern`                    | `pattern`                      | `html`        |
| `patternContentUnits`        | `patternContentUnits`          | `svg`         |
| `patternTransform`           | `patternTransform`             | `svg`         |
| `patternUnits`               | `patternUnits`                 | `svg`         |
| `phase`                      | `phase`                        | `svg`         |
| `ping`                       | `ping`                         | `svg`, `html` |
| `pitch`                      | `pitch`                        | `svg`         |
| `placeholder`                | `placeholder`                  | `html`        |
| `playbackOrder`              | `playbackorder`                | `svg`         |
| `playsInline`                | `playsinline`                  | `html`        |
| `pointerEvents`              | `pointer-events`               | `svg`         |
| `points`                     | `points`                       | `svg`         |
| `pointsAtX`                  | `pointsAtX`                    | `svg`         |
| `pointsAtY`                  | `pointsAtY`                    | `svg`         |
| `pointsAtZ`                  | `pointsAtZ`                    | `svg`         |
| `poster`                     | `poster`                       | `html`        |
| `prefix`                     | `prefix`                       | `html`        |
| `preload`                    | `preload`                      | `html`        |
| `preserveAlpha`              | `preserveAlpha`                | `svg`         |
| `preserveAspectRatio`        | `preserveAspectRatio`          | `svg`         |
| `primitiveUnits`             | `primitiveUnits`               | `svg`         |
| `profile`                    | `profile`                      | `html`        |
| `prompt`                     | `prompt`                       | `html`        |
| `propagate`                  | `propagate`                    | `svg`         |
| `property`                   | `property`                     | `svg`, `html` |
| `r`                          | `r`                            | `svg`         |
| `radius`                     | `radius`                       | `svg`         |
| `readOnly`                   | `readonly`                     | `html`        |
| `refX`                       | `refX`                         | `svg`         |
| `refY`                       | `refY`                         | `svg`         |
| `referrerPolicy`             | `referrerpolicy`               | `svg`, `html` |
| `rel`                        | `rel`                          | `svg`, `html` |
| `renderingIntent`            | `rendering-intent`             | `svg`         |
| `repeatCount`                | `repeatCount`                  | `svg`         |
| `repeatDur`                  | `repeatDur`                    | `svg`         |
| `required`                   | `required`                     | `html`        |
| `requiredExtensions`         | `requiredExtensions`           | `svg`         |
| `requiredFeatures`           | `requiredFeatures`             | `svg`         |
| `requiredFonts`              | `requiredFonts`                | `svg`         |
| `requiredFormats`            | `requiredFormats`              | `svg`         |
| `resource`                   | `resource`                     | `svg`         |
| `restart`                    | `restart`                      | `svg`         |
| `result`                     | `result`                       | `svg`         |
| `results`                    | `results`                      | `html`        |
| `rev`                        | `rev`                          | `svg`, `html` |
| `reversed`                   | `reversed`                     | `html`        |
| `rightMargin`                | `rightmargin`                  | `html`        |
| `role`                       | `role`                         |               |
| `rotate`                     | `rotate`                       | `svg`         |
| `rowSpan`                    | `rowspan`                      | `html`        |
| `rows`                       | `rows`                         | `html`        |
| `rules`                      | `rules`                        | `html`        |
| `rx`                         | `rx`                           | `svg`         |
| `ry`                         | `ry`                           | `svg`         |
| `sandbox`                    | `sandbox`                      | `html`        |
| `scale`                      | `scale`                        | `svg`         |
| `scheme`                     | `scheme`                       | `html`        |
| `scope`                      | `scope`                        | `html`        |
| `scoped`                     | `scoped`                       | `html`        |
| `scrolling`                  | `scrolling`                    | `html`        |
| `seamless`                   | `seamless`                     | `html`        |
| `security`                   | `security`                     | `html`        |
| `seed`                       | `seed`                         | `svg`         |
| `selected`                   | `selected`                     | `html`        |
| `shape`                      | `shape`                        | `html`        |
| `shapeRendering`             | `shape-rendering`              | `svg`         |
| `side`                       | `side`                         | `svg`         |
| `size`                       | `size`                         | `html`        |
| `sizes`                      | `sizes`                        | `html`        |
| `slope`                      | `slope`                        | `svg`         |
| `slot`                       | `slot`                         | `html`        |
| `snapshotTime`               | `snapshotTime`                 | `svg`         |
| `spacing`                    | `spacing`                      | `svg`         |
| `span`                       | `span`                         | `html`        |
| `specularConstant`           | `specularConstant`             | `svg`         |
| `specularExponent`           | `specularExponent`             | `svg`         |
| `spellCheck`                 | `spellcheck`                   | `html`        |
| `spreadMethod`               | `spreadMethod`                 | `svg`         |
| `src`                        | `src`                          | `html`        |
| `srcDoc`                     | `srcdoc`                       | `html`        |
| `srcLang`                    | `srclang`                      | `html`        |
| `srcSet`                     | `srcset`                       | `html`        |
| `standby`                    | `standby`                      | `html`        |
| `start`                      | `start`                        | `html`        |
| `startOffset`                | `startOffset`                  | `svg`         |
| `stdDeviation`               | `stdDeviation`                 | `svg`         |
| `stemh`                      | `stemh`                        | `svg`         |
| `stemv`                      | `stemv`                        | `svg`         |
| `step`                       | `step`                         | `html`        |
| `stitchTiles`                | `stitchTiles`                  | `svg`         |
| `stopColor`                  | `stop-color`                   | `svg`         |
| `stopOpacity`                | `stop-opacity`                 | `svg`         |
| `strikethroughPosition`      | `strikethrough-position`       | `svg`         |
| `strikethroughThickness`     | `strikethrough-thickness`      | `svg`         |
| `string`                     | `string`                       | `svg`         |
| `stroke`                     | `stroke`                       | `svg`         |
| `strokeDashArray`            | `stroke-dasharray`             | `svg`         |
| `strokeDashOffset`           | `stroke-dashoffset`            | `svg`         |
| `strokeLineCap`              | `stroke-linecap`               | `svg`         |
| `strokeLineJoin`             | `stroke-linejoin`              | `svg`         |
| `strokeMiterLimit`           | `stroke-miterlimit`            | `svg`         |
| `strokeOpacity`              | `stroke-opacity`               | `svg`         |
| `strokeWidth`                | `stroke-width`                 | `svg`         |
| `style`                      | `style`                        | `svg`, `html` |
| `summary`                    | `summary`                      | `html`        |
| `surfaceScale`               | `surfaceScale`                 | `svg`         |
| `syncBehavior`               | `syncBehavior`                 | `svg`         |
| `syncBehaviorDefault`        | `syncBehaviorDefault`          | `svg`         |
| `syncMaster`                 | `syncMaster`                   | `svg`         |
| `syncTolerance`              | `syncTolerance`                | `svg`         |
| `syncToleranceDefault`       | `syncToleranceDefault`         | `svg`         |
| `systemLanguage`             | `systemLanguage`               | `svg`         |
| `tabIndex`                   | `tabindex`                     | `svg`, `html` |
| `tableValues`                | `tableValues`                  | `svg`         |
| `target`                     | `target`                       | `svg`, `html` |
| `targetX`                    | `targetX`                      | `svg`         |
| `targetY`                    | `targetY`                      | `svg`         |
| `text`                       | `text`                         | `html`        |
| `textAnchor`                 | `text-anchor`                  | `svg`         |
| `textDecoration`             | `text-decoration`              | `svg`         |
| `textLength`                 | `textLength`                   | `svg`         |
| `textRendering`              | `text-rendering`               | `svg`         |
| `timelineBegin`              | `timelinebegin`                | `svg`         |
| `title`                      | `title`                        | `svg`, `html` |
| `to`                         | `to`                           | `svg`         |
| `topMargin`                  | `topmargin`                    | `html`        |
| `transform`                  | `transform`                    | `svg`         |
| `transformBehavior`          | `transformBehavior`            | `svg`         |
| `translate`                  | `translate`                    | `html`        |
| `type`                       | `type`                         | `svg`, `html` |
| `typeMustMatch`              | `typemustmatch`                | `html`        |
| `typeOf`                     | `typeof`                       | `svg`         |
| `u1`                         | `u1`                           | `svg`         |
| `u2`                         | `u2`                           | `svg`         |
| `underlinePosition`          | `underline-position`           | `svg`         |
| `underlineThickness`         | `underline-thickness`          | `svg`         |
| `unicode`                    | `unicode`                      | `svg`         |
| `unicodeBidi`                | `unicode-bidi`                 | `svg`         |
| `unicodeRange`               | `unicode-range`                | `svg`         |
| `unitsPerEm`                 | `units-per-em`                 | `svg`         |
| `unselectable`               | `unselectable`                 | `html`        |
| `useMap`                     | `usemap`                       | `html`        |
| `vAlign`                     | `valign`                       | `html`        |
| `vAlphabetic`                | `v-alphabetic`                 | `svg`         |
| `vHanging`                   | `v-hanging`                    | `svg`         |
| `vIdeographic`               | `v-ideographic`                | `svg`         |
| `vLink`                      | `vlink`                        | `html`        |
| `vMathematical`              | `v-mathematical`               | `svg`         |
| `vSpace`                     | `vspace`                       | `html`        |
| `value`                      | `value`                        | `html`        |
| `valueType`                  | `valuetype`                    | `html`        |
| `values`                     | `values`                       | `svg`         |
| `vectorEffect`               | `vector-effect`                | `svg`         |
| `version`                    | `version`                      | `svg`, `html` |
| `vertAdvY`                   | `vert-adv-y`                   | `svg`         |
| `vertOriginX`                | `vert-origin-x`                | `svg`         |
| `vertOriginY`                | `vert-origin-y`                | `svg`         |
| `viewBox`                    | `viewBox`                      | `svg`         |
| `viewTarget`                 | `viewTarget`                   | `svg`         |
| `visibility`                 | `visibility`                   | `svg`         |
| `width`                      | `width`                        | `svg`, `html` |
| `widths`                     | `widths`                       | `svg`         |
| `wordSpacing`                | `word-spacing`                 | `svg`         |
| `wrap`                       | `wrap`                         | `html`        |
| `writingMode`                | `writing-mode`                 | `svg`         |
| `x`                          | `x`                            | `svg`         |
| `x1`                         | `x1`                           | `svg`         |
| `x2`                         | `x2`                           | `svg`         |
| `xChannelSelector`           | `xChannelSelector`             | `svg`         |
| `xHeight`                    | `x-height`                     | `svg`         |
| `xLinkActuate`               | `xlink:actuate`                | `xlink`       |
| `xLinkArcRole`               | `xlink:arcrole`                | `xlink`       |
| `xLinkHref`                  | `xlink:href`                   | `xlink`       |
| `xLinkRole`                  | `xlink:role`                   | `xlink`       |
| `xLinkShow`                  | `xlink:show`                   | `xlink`       |
| `xLinkTitle`                 | `xlink:title`                  | `xlink`       |
| `xLinkType`                  | `xlink:type`                   | `xlink`       |
| `xmlBase`                    | `xml:base`                     | `xml`         |
| `xmlLang`                    | `xml:lang`                     | `xml`         |
| `xmlSpace`                   | `xml:space`                    | `xml`         |
| `xmlns`                      | `xmlns`                        | `xmlns`       |
| `xmlnsXLink`                 | `xmlns:xlink`                  | `xmlns`       |
| `y`                          | `y`                            | `svg`         |
| `y1`                         | `y1`                           | `svg`         |
| `y2`                         | `y2`                           | `svg`         |
| `yChannelSelector`           | `yChannelSelector`             | `svg`         |
| `z`                          | `z`                            | `svg`         |
| `zoomAndPan`                 | `zoomAndPan`                   | `svg`         |

<!--list end-->

## Related

*   [`web-namespaces`][namespace]
    — List of web namespaces
*   [`space-separated-tokens`](https://github.com/wooorm/space-separated-tokens)
    — Parse/stringify space-separated tokens
*   [`comma-separated-tokens`](https://github.com/wooorm/comma-separated-tokens)
    — Parse/stringify comma-separated tokens
*   [`html-tag-names`](https://github.com/wooorm/html-tag-names)
    — List of HTML tags
*   [`mathml-tag-names`](https://github.com/wooorm/mathml-tag-names)
    — List of MathML tags
*   [`svg-tag-names`](https://github.com/wooorm/svg-tag-names)
    — List of SVG tags
*   [`html-void-elements`](https://github.com/wooorm/html-void-elements)
    — List of void HTML tag-names
*   [`svg-element-attributes`](https://github.com/wooorm/svg-element-attributes)
    — Map of SVG elements to allowed attributes
*   [`html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — Map of HTML elements to allowed attributes
*   [`aria-attributes`](https://github.com/wooorm/aria-attributes)
    — List of ARIA attributes

## License

[MIT][license] © [Titus Wormer][author]

Derivative work based on [React][source] licensed under
[BSD-3-Clause-Clear][source-license], © 2013-2015, Facebook, Inc.

[build-badge]: https://img.shields.io/travis/wooorm/property-information.svg

[build]: https://travis-ci.org/wooorm/property-information

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/property-information.svg

[coverage]: https://codecov.io/github/wooorm/property-information

[downloads-badge]: https://img.shields.io/npm/dm/property-information.svg

[downloads]: https://www.npmjs.com/package/property-information

[size-badge]: https://img.shields.io/bundlephobia/minzip/property-information.svg

[size]: https://bundlephobia.com/result?p=property-information

[npm]: https://docs.npmjs.com/cli/install

[author]: https://wooorm.com

[license]: license

[source]: https://github.com/facebook/react/blob/f445dd9/src/renderers/dom/shared/HTMLDOMPropertyConfig.js

[source-license]: https://github.com/facebook/react/blob/88cdc27/LICENSE

[data]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

[namespace]: https://github.com/wooorm/web-namespaces

[info]: #info

[schema]: #schema

[normalize]: #propertyinformationnormalizename

[react]: https://github.com/facebook/react

[hast-to-react]: hast-to-react.json

[hast]: https://github.com/syntax-tree/hast#propertyname
