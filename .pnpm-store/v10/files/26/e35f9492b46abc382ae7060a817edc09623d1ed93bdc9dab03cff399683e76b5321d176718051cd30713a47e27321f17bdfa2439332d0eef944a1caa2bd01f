2.2.0 / 2018-03-06
==================

  * Pass `token` as second argument to `encode` option (e.g. `encode(value, token)`)

2.1.0 / 2017-10-20
==================

  * Handle non-ending paths where the final character is a delimiter
    * E.g. `/foo/` before required either `/foo/` or `/foo//` to match in non-ending mode

2.0.0 / 2017-08-23
==================

  * New option! Ability to set `endsWith` to match paths like `/test?query=string` up to the query string
  * New option! Set `delimiters` for specific characters to be treated as parameter prefixes (e.g. `/:test`)
  * Remove `isarray` dependency
  * Explicitly handle trailing delimiters instead of trimming them (e.g. `/test/` is now treated as `/test/` instead of `/test` when matching)
  * Remove overloaded `keys` argument that accepted `options`
  * Remove `keys` list attached to the `RegExp` output
  * Remove asterisk functionality (it's a real pain to properly encode)
  * Change `tokensToFunction` (e.g. `compile`) to accept an `encode` function for pretty encoding (e.g. pass your own implementation)

1.7.0 / 2016-11-08
==================

  * Allow a `delimiter` option to be passed in with `tokensToRegExp` which will be used for "non-ending" token match situations

1.6.0 / 2016-10-03
==================

  * Populate `RegExp.keys` when using the `tokensToRegExp` method (making it consistent with the main export)
  * Allow a `delimiter` option to be passed in with `parse`
  * Updated TypeScript definition with `Keys` and `Options` updated

1.5.3 / 2016-06-15
==================

  * Add `\\` to the ignore character group to avoid backtracking on mismatched parens

1.5.2 / 2016-06-15
==================

  * Escape `\\` in string segments of regexp

1.5.1 / 2016-06-08
==================

  * Add `index.d.ts` to NPM package

1.5.0 / 2016-05-20
==================

  * Handle partial token segments (better)
  * Allow compile to handle asterisk token segments

1.4.0 / 2016-05-18
==================

  * Handle RegExp unions in path matching groups

1.3.0 / 2016-05-08
==================

  * Clarify README language and named parameter token support
  * Support advanced Closure Compiler with type annotations
  * Add pretty paths options to compiled function output
  * Add TypeScript definition to project
  * Improved prefix handling with non-complete segment parameters (E.g. `/:foo?-bar`)

1.2.1 / 2015-08-17
==================

  * Encode values before validation with path compilation function
  * More examples of using compilation in README

1.2.0 / 2015-05-20
==================

  * Add support for matching an asterisk (`*`) as an unnamed match everything group (`(.*)`)

1.1.1 / 2015-05-11
==================

  * Expose methods for working with path tokens

1.1.0 / 2015-05-09
==================

  * Expose the parser implementation to consumers
  * Implement a compiler function to generate valid strings
  * Huge refactor of tests to be more DRY and cover new parse and compile functions
  * Use chai in tests
  * Add .editorconfig

1.0.3 / 2015-01-17
==================

  * Optimised function runtime
  * Added `files` to `package.json`

1.0.2 / 2014-12-17
==================

  * Use `Array.isArray` shim
  * Remove ES5 incompatible code
  * Fixed repository path
  * Added new readme badges

1.0.1 / 2014-08-27
==================

  * Ensure installation works correctly on 0.8

1.0.0 / 2014-08-17
==================

  * No more API changes

0.2.5 / 2014-08-07
==================

  * Allow keys parameter to be omitted

0.2.4 / 2014-08-02
==================

  * Code coverage badge
  * Updated readme
  * Attach keys to the generated regexp

0.2.3 / 2014-07-09
==================

  * Add MIT license

0.2.2 / 2014-07-06
==================

  * A passed in trailing slash in non-strict mode will become optional
  * In non-end mode, the optional trailing slash will only match at the end

0.2.1 / 2014-06-11
==================

  * Fixed a major capturing group regexp regression

0.2.0 / 2014-06-09
==================

  * Improved support for arrays
  * Improved support for regexps
  * Better support for non-ending strict mode matches with a trailing slash
  * Travis CI support
  * Block using regexp special characters in the path
  * Removed support for the asterisk to match all
  * New support for parameter suffixes - `*`, `+` and `?`
  * Updated readme
  * Provide delimiter information with keys array

0.1.2 / 2014-03-10
==================

  * Move testing dependencies to `devDependencies`

0.1.1 / 2014-03-10
==================

  * Match entire substring with `options.end`
  * Properly handle ending and non-ending matches

0.1.0 / 2014-03-06
==================

  * Add `options.end`

0.0.2 / 2013-02-10
==================

  * Update to match current express
  * Add .license property to component.json
