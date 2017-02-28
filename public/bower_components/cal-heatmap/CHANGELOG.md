# Changelog

## v3.5.3 [2015-07-23]

* [fix] Fix #156 Remove trailing comma in object literal
* [fix] Fix #161 `domainDynamicDimension` not working with x_week subdomain

## v3.5.2 [2015-02-05]

* [fix] Fix #74: Let `empty` target cells with no data

## v3.5.1 [2015-01-19]

* [fix] Fix #97 Make "class" of all elements more dedicated
* [fix] Fix #93 Tooltip position due to legendOffset and domainLabel
* [fix] Fix #89 Add a `.future` class to future subdomain cells
* [fix] Fix false error output when no callback passed to `destroy()`

## v3.5.0 [2014-11-12]

* [fix] Fix #84 Fixing highlighting for week subdomain (Dominic Barnes)
* [new] Fix #85 Adding some CommonJS as well as Component support (Dominic Barnes)
* [fix] Fix #107 Fix connectors for week/month/year (Andreas Jaggi)
* [change] Use NPM to install jquery and qunit dev dependencies

## v3.4.0 [2014-02-02]

* [fix] Fix #57 display data values in subdomain

## v3.3.12 [2014-01-31]

* [fix] Fix #69 the 'now' and 'highlight' classes are not applied to subdomain text

## v3.3.11 [2014-01-26]

* [new] Only consider entries less than now (in the subdomain) as zero, when considering null as zero (Peter Schwarz)
* [change] Remove sourcemaps comment in js

## v3.3.10 [2013-12-03]

* [fix] Fix #58 Legend colors are shifted
* [fix] Fix #62 Bug when calendar container already have a style attribute

## v3.3.9 [2013-11-24]

* [new] Fix hidden day cells for leap year in some domain/subDomainc configuration
* [fix] Allow other data type to be passed to `data`
* [fix] Fix DST for time change occuring other than midnight

## v3.3.8 [2013-10-31]

* [new] Add `rewind()` method to navigate the calendar back to the starting date
* [change] Code improvement and cleaning

## v3.3.7 [2013-10-29]

* [fix] Fix `getSVG()` not returning all needed classes

## v3.3.6 [2013-10-28]

* [new] Add `destroy()` method

## v3.3.5 [2013-10-16]

* [new] Add `highlight()` method to change highlighted date after calendar initialization
* [new] CSV files works out-of-the-box, as long as the first 2 columns are the timestamp and value.
* [change] Fatal errors throws errors intead of a simply console.log()
* [fix] Fix bug when trying to load plain text file as datasource
* More test and code improvement

## v3.3.4 [2013-10-10]

* [fix] Fix #47: Increase d3 version dependency

## v3.3.3 [2013-10-09]

* [new] Add tooltip on date hover

## v3.3.2 [2013-10-08]

* [Fix] Fix #45: Fix loss of htmlClass (e.g. highlight) for graph rects with zero scale

## v3.3.1 [2013-10-07]

* [fix] Fix broken `afterLoadPreviousDomain` callback

## v3.3.0 [2013-10-07]

* [new] Add `jumpTo()` method to scroll the calendar to the specified date
* [new] `setLegend()` will redraw the legend if some of its settings (cellSize/padding, position, etc ...) were changed
* [new] Add `legendColors` setting, to dynamically control the heatmap colors
* [new] Add `showLegend()` and `removeLegend()` methods
* [new] `next()` and `previous()` now takes an argument, to scroll multiple domains at once
* [new] Add `legendOrientation` setting
* [new] Add `rowLimit` and `colLimit` setting to control the number of columns and rows in a domain
* [fix] Fix #37: two days get summed
* [change] All invalid data (not a number) will be ignored
* [change] `setLegend()` now takes a legend threshold array as first argument, and a color array as second argument


## v3.2.1 [2013-09-17]

* [fix] Fix #35: Can't load new domain with `next()` when the new domain's timestamp contains more character

## v3.2.0 [2013-09-12]

* [fix] Fix #33: domain browsing is incrementing the calendar's value when data is a json object
* [fix] Fix #34: Only the newly appended domain can be manipulated by `update()` after calling `next()` or `previous()`
* [new] Add `setLegend()` method to redefine legend threshold

## v3.1.0 [2013-08-08]

* [new] Add `update()` method, to update calendar data.
* [improvement] Use d3.js internal methods to bind data to subDomains

## v3.0.9 [2013-08-01]

* [new] Fix #26: add `considerMissingDataAsZero` option to consider missing value as zero

## v3.0.8 [2013-08-01]

* [new] Add `minDate`, `startDate` to limit domain navigation beyond certain dates
* [new] Add `onMaxDomainReached()` and `onMinDomainReached()` events, triggered when navigation is hitting the lower/upper domain limit
* [change] `next()` and `previous()` will now always return `true`, as long as there is more domain to load

## v3.0.7 [2013-07-24]

* [fix] Fix domain month class (`m_x`) beginning at `m_0` insted of `m_1`
* [new] Add new domain class: `dy_x` for the day of the week

## v3.0.6 [2013-07-24]

* [fix] Bring back the dynamic domain width/height
* [fix] Fix `day` subdomains displaying garbage when using domain other than `month`
* [new] Add `domainDynamicDimension` to disable dynamic domain width/height (default: true)

## v3.0.5 [2013-07-23]

* [fix] Fix domain month when using day subDomain

## v3.0.4 [2013-07-20]

* [Fix] Fix calendar crashing in IE when using d3.js >= v3.2.4
* [Fix] Fix overflow when adding/removing domains dynamically in IE

## v3.0.3 [2013-07-19]

* [fix] Fix `subDomainTitleFormat` not applying to subDomain with data

## v3.0.2 [2013-07-18]

* [fix] Fix `onComplete()` event not firing when loading data from a json object in `data` option

## v3.0.1 [2013-07-18]

* [fix] Add missing files

## v3.0.0 [2013-07-18]

> v3 is a major release, a lot of changes are not backward compatible with v2.
> See the [migration guide](http://kamisama.github.io/cal-heatmap/#migrating-from-2x) for update process.

* [new] Add Vertical orientation
* [new] Add option to display a date inside subDomain cells
* [new] Replace `id` with `itemSelector`, and accept any kind of CSS3 selector string
* [new] subDomain highlighting can highlight more that today
* [new] domain highlighting
* [new] `nextSelector` and `previousSelector` to attach domain navigation to any DOM Element
* [new] Add `tsv` to accepted dataType
* [new] More control about legend position and size
* [new] More control about domain label position and size
* [new] Label rotation, to display text vertically
* [new] `getSVG()` method to export SVG code


## v2.2.1 [2013-06-19]

* [new] Highlight today's rectangle (only available when subdomain is equal to "day")
* [fix] Fix plurals title (Issue #14)

## v2.2.0 [2013-05-05]

* [new] Add `afterLoadData` callback, to apply your own conversion function when the API don't return data in the expected format
* [new] Add `dataType` property to specify data source format type. Can use json (default), csv or txt.
* [fix] Fix wrong number of minutes when using minutes subdomain with a week domain

## v2.1.6 [2013-04-17]

* [new] Add `startWeekOnMonday` to choose whether to start the week on Monday or Sunday

## v2.1.5 [2013-04-17]

* [new] `x_day` subdomain to display days horizontally, grouped by week
* [new] `cellradius` property to apply rounded corner to subdomain cell

## v2.1.4 [2013-04-16]

[enhancement] More faster tests

## v2.1.3 [2013-04-09]

* [fix#6] Can now pass a function to date formatter, to format the date using an external library like moment.js

## v2.1.2 [2013-04-02]

* [fix#9] null values not interpreted as "empty" when rendering the title

## v2.1.1 [2013-03-28]

* [new] onComplete callback

## v2.1.0 [2013-03-28]

* [new#5] AfterLoad callback, called when the calendar is fully drawn, but not filled with datas yet
* [new#6] Add options to customize all text
* [fix] Handle not valid callback

> See [documentation](http://kamisama.github.com/cal-heatmap/) for i18n usage


## v2.0.3 [2013-03-21]

* [fix#8] Support for null values
* [fix#7] Wrong color for the last interval values

## v2.0.2 [2013-03-20]

* [fix] Floating number does not display in tooltip
* [enhancement] Change cursor to pointer on subdomain hover if it's associated to an onClick event

## v2.0.1 [2013-03-07]

* [fix] Fix domain positioning on Firefox

## v2.0.0 [2013-03-06]

* [new] Can know browse the calendar, by setting the new `browsing` property to `true`
* [new] Add animation when displaying the scale
* [change] Rename `scales` property to `scale`

## v1.1.1 [2013-02-28]

* [fix] Fix displaying week subdomain from a year domain
* [new] Add test code coverage in grunt

## v1.1.0 [2013-02-27]

* [new] Add Bower and Jam support
* [new] Change `uri` property to `data`. It can now accepts a file path to a JSON file, directly a JSON object, or a string template.

> The string template is usually a dynamic url to an API, like `api.com/get?start=xxx&end=yyy`, where *xxx* and *yyy* are respectively the first and last date of the calendar. You can use tokens to dynamically insert the calendar first and last date in the url. See [documentation](http://kamisama.github.com/cal-heatmap/) for accepted tokens.
> **Example** : `api?start={{t:start}}&end={{d:end}}` will fetch `api?start=1362006000&end=2013-02-27T23:00:00.000Z`


## v1.0.1 [2013-02-26]

* [new] Add AMD support

## v1.0.0 [2013-02-25]

* First release