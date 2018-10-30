0.6.1 / 2016-05-02
==================

  * perf: improve `Accept` parsing speed
  * perf: improve `Accept-Charset` parsing speed
  * perf: improve `Accept-Encoding` parsing speed
  * perf: improve `Accept-Language` parsing speed

0.6.0 / 2015-09-29
==================

  * Fix including type extensions in parameters in `Accept` parsing
  * Fix parsing `Accept` parameters with quoted equals
  * Fix parsing `Accept` parameters with quoted semicolons
  * Lazy-load modules from main entry point
  * perf: delay type concatenation until needed
  * perf: enable strict mode
  * perf: hoist regular expressions
  * perf: remove closures getting spec properties
  * perf: remove a closure from media type parsing
  * perf: remove property delete from media type parsing

0.5.3 / 2015-05-10
==================

  * Fix media type parameter matching to be case-insensitive

0.5.2 / 2015-05-06
==================

  * Fix comparing media types with quoted values
  * Fix splitting media types with quoted commas

0.5.1 / 2015-02-14
==================

  * Fix preference sorting to be stable for long acceptable lists

0.5.0 / 2014-12-18
==================

  * Fix list return order when large accepted list
  * Fix missing identity encoding when q=0 exists
  * Remove dynamic building of Negotiator class

0.4.9 / 2014-10-14
==================

  * Fix error when media type has invalid parameter

0.4.8 / 2014-09-28
==================

  * Fix all negotiations to be case-insensitive
  * Stable sort preferences of same quality according to client order
  * Support Node.js 0.6

0.4.7 / 2014-06-24
==================

  * Handle invalid provided languages
  * Handle invalid provided media types

0.4.6 / 2014-06-11
==================

  *  Order by specificity when quality is the same

0.4.5 / 2014-05-29
==================

  * Fix regression in empty header handling

0.4.4 / 2014-05-29
==================

  * Fix behaviors when headers are not present

0.4.3 / 2014-04-16
==================

  * Handle slashes on media params correctly

0.4.2 / 2014-02-28
==================

  * Fix media type sorting
  * Handle media types params strictly

0.4.1 / 2014-01-16
==================

  * Use most specific matches

0.4.0 / 2014-01-09
==================

  * Remove preferred prefix from methods
