#### 10.8.0

- Added `isIdentityCard()`
  ([#846](https://github.com/chriso/validator.js/pull/846))
- Better error when validators are passed an invalid type
  ([#895](https://github.com/chriso/validator.js/pull/895))
- Locales are now exported
  ([#890](https://github.com/chriso/validator.js/pull/890),
   [#892](https://github.com/chriso/validator.js/pull/892))
- New locale
  ([#896](https://github.com/chriso/validator.js/pull/896))

#### 10.7.1

- Ignore case when checking URL protocol
  ([#887](https://github.com/chriso/validator.js/issues/887))
- Locale fix
  ([#889](https://github.com/chriso/validator.js/pull/889))

#### 10.7.0

- Added `isMagnetURI()` to validate [magnet URIs](https://en.wikipedia.org/wiki/Magnet_URI_scheme)
  ([#884](https://github.com/chriso/validator.js/pull/884))
- Added `isJWT()` to validate [JSON web tokens](https://en.wikipedia.org/wiki/JSON_Web_Token)
  ([#885](https://github.com/chriso/validator.js/pull/885))

#### 10.6.0

- Updated `isMobilePhone()` to match any locale's pattern by default
  ([#874](https://github.com/chriso/validator.js/pull/874))
- Added an option to ignore whitespace in `isEmpty()`
  ([#880](https://github.com/chriso/validator.js/pull/880))
- New and improved locales
  ([#878](https://github.com/chriso/validator.js/pull/878),
   [#879](https://github.com/chriso/validator.js/pull/879))

#### 10.5.0

- Disabled domain-specific email validation
  ([#873](https://github.com/chriso/validator.js/pull/873))
- Added support for IP hostnames in `isEmail()`
  ([#845](https://github.com/chriso/validator.js/pull/845))
- Added a `no_symbols` option to `isNumeric()`
  ([#848](https://github.com/chriso/validator.js/pull/848))
- Added a `no_colons` option to `isMACAddress()`
  ([#849](https://github.com/chriso/validator.js/pull/849))
- Updated `isURL()` to reject protocol relative URLs unless a flag is set
  ([#860](https://github.com/chriso/validator.js/issues/860))
- New and improved locales
  ([#801](https://github.com/chriso/validator.js/pull/801),
   [#856](https://github.com/chriso/validator.js/pull/856),
   [#859](https://github.com/chriso/validator.js/issues/859),
   [#861](https://github.com/chriso/validator.js/pull/861),
   [#862](https://github.com/chriso/validator.js/pull/862),
   [#863](https://github.com/chriso/validator.js/pull/863),
   [#864](https://github.com/chriso/validator.js/pull/864),
   [#870](https://github.com/chriso/validator.js/pull/870),
   [#872](https://github.com/chriso/validator.js/pull/872))

#### 10.4.0

- Added an `isIPRange()` validator
  ([#842](https://github.com/chriso/validator.js/pull/842))
- Accept an array of locales in `isMobilePhone()`
  ([#742](https://github.com/chriso/validator.js/pull/742))
- New locale
  ([#843](https://github.com/chriso/validator.js/pull/843))

#### 10.3.0

- Strict Gmail validation in `isEmail()`
  ([#832](https://github.com/chriso/validator.js/pull/832))
- New locales
  ([#831](https://github.com/chriso/validator.js/pull/831),
   [#835](https://github.com/chriso/validator.js/pull/835),
   [#836](https://github.com/chriso/validator.js/pull/836))

#### 10.2.0

- Export the list of supported locales in `isPostalCode()`
  ([#830](https://github.com/chriso/validator.js/pull/830))

#### 10.1.0

- Added an `isISO31661Alpha3()` validator
  ([#809](https://github.com/chriso/validator.js/pull/809))

#### 10.0.0

- Allow floating points in `isNumeric()`
  ([#810](https://github.com/chriso/validator.js/pull/810))
- Disallow GMail addresses with multiple consecutive dots, or leading/trailing dots
  ([#820](https://github.com/chriso/validator.js/pull/820))
- Added an `isRFC3339()` validator
  ([#816](https://github.com/chriso/validator.js/pull/816))
- Reject domain parts longer than 63 octets in `isFQDN()`, `isURL()` and `isEmail()`
  ([bb3e542](https://github.com/chriso/validator.js/commit/bb3e542))
- Added a new Amex prefix to `isCreditCard()`
  ([#805](https://github.com/chriso/validator.js/pull/805))
- Fixed `isFloat()` min/max/gt/lt filters when a locale with a comma decimal is used
  ([2b70821](https://github.com/chriso/validator.js/commit/2b70821))
- Normalize Yandex emails
  ([#807](https://github.com/chriso/validator.js/pull/807))
- New locales
  ([#803](https://github.com/chriso/validator.js/pull/803))

#### 9.4.1

- Patched a [REDOS](https://en.wikipedia.org/wiki/ReDoS) vulnerability in `isDataURI`
- New and improved locales
  ([#788](https://github.com/chriso/validator.js/pull/788))

#### 9.4.0

- Added an option to `isMobilePhone` to require a country code
  ([#769](https://github.com/chriso/validator.js/pull/769))
- New and improved locales
  ([#785](https://github.com/chriso/validator.js/pull/785))

#### 9.3.0

- New and improved locales
  ([#763](https://github.com/chriso/validator.js/pull/763),
   [#768](https://github.com/chriso/validator.js/pull/768),
   [#774](https://github.com/chriso/validator.js/pull/774),
   [#777](https://github.com/chriso/validator.js/pull/777),
   [#779](https://github.com/chriso/validator.js/pull/779))

#### 9.2.0

- Added an `isMimeType()` validator
  ([#760](https://github.com/chriso/validator.js/pull/760))
- New and improved locales
  ([#753](https://github.com/chriso/validator.js/pull/753),
   [#755](https://github.com/chriso/validator.js/pull/755),
   [#764](https://github.com/chriso/validator.js/pull/764))

#### 9.1.2

- Fixed a bug with the `isFloat` validator
  ([#752](https://github.com/chriso/validator.js/pull/752))

#### 9.1.1

- Locale fixes
  ([#738](https://github.com/chriso/validator.js/pull/738),
   [#739](https://github.com/chriso/validator.js/pull/739))

#### 9.1.0

- Added an `isISO31661Alpha2()` validator
  ([#734](https://github.com/chriso/validator.js/pull/734))
- New locales
  ([#735](https://github.com/chriso/validator.js/pull/735),
   [#737](https://github.com/chriso/validator.js/pull/737))

#### 9.0.0

- `normalizeEmail()` no longer validates the email address
  ([#725](https://github.com/chriso/validator.js/pull/725))
- Added locale-aware validation to `isFloat()` and `isDecimal()`
  ([#721](https://github.com/chriso/validator.js/pull/721))
- Added an `isPort()` validator
  ([#733](https://github.com/chriso/validator.js/pull/733))
- New locales
  ([#731](https://github.com/chriso/validator.js/pull/731))

#### 8.2.0

- Added an `isHash()` validator
  ([#711](https://github.com/chriso/validator.js/pull/711))
- Control decimal places in `isCurrency()`
  ([#713](https://github.com/chriso/validator.js/pull/713))
- New and improved locales
  ([#700](https://github.com/chriso/validator.js/pull/700),
   [#701](https://github.com/chriso/validator.js/pull/701),
   [#714](https://github.com/chriso/validator.js/pull/714),
   [#715](https://github.com/chriso/validator.js/pull/715),
   [#718](https://github.com/chriso/validator.js/pull/718))

#### 8.1.0

- Fix `require('validator/lib/isIS8601')` calls
  ([#688](https://github.com/chriso/validator.js/issues/688))
- Added an `isLatLong()` and `isPostalCode()` validator
  ([#684](https://github.com/chriso/validator.js/pull/684))
- Allow comma in email display names
  ([#692](https://github.com/chriso/validator.js/pull/692))
- Add missing string to `unescape()`
  ([#690](https://github.com/chriso/validator.js/pull/690))
- Fix `isMobilePhone()` with Node <= 6.x
  ([#681](https://github.com/chriso/validator.js/issues/681))
- New locales
  ([#695](https://github.com/chriso/validator.js/pull/695))

#### 8.0.0

- `isURL()` now requires the `require_tld: false` option to validate `localhost`
  ([#675](https://github.com/chriso/validator.js/issues/675))
- `isURL()` now rejects URLs that are protocol only
  ([#642](https://github.com/chriso/validator.js/issues/642))
- Fixed a bug where `isMobilePhone()` would silently return false if the locale was invalid or unsupported
  ([#657](https://github.com/chriso/validator.js/issues/657))

#### 7.2.0

- Added an option to validate any phone locale
  ([#663](https://github.com/chriso/validator.js/pull/663))
- Fixed a bug in credit card validation
  ([#672](https://github.com/chriso/validator.js/pull/672))
- Disallow whitespace, including unicode whitespace, in TLDs
  ([#677](https://github.com/chriso/validator.js/pull/677))
- New locales
  ([#673](https://github.com/chriso/validator.js/pull/673),
   [#676](https://github.com/chriso/validator.js/pull/676))

#### 7.1.0

- Added an `isISRC()` validator for [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code)
  ([#660](https://github.com/chriso/validator.js/pull/660))
- Fixed a bug in credit card validation
  ([#670](https://github.com/chriso/validator.js/pull/670))
- Reduced the maximum allowed address in `isEmail()` based on
  [RFC3696 errata](http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690)
  ([#655](https://github.com/chriso/validator.js/issues/655))
- New locales
  ([#647](https://github.com/chriso/validator.js/pull/647),
   [#667](https://github.com/chriso/validator.js/pull/667),
   [#667](https://github.com/chriso/validator.js/pull/667),
   [#671](https://github.com/chriso/validator.js/pull/671))

#### 7.0.0

- Remove `isDate()`

#### 6.3.0

- Allow values like `-.01` in `isFloat()`
  ([#618](https://github.com/chriso/validator.js/issues/618))
- New locales
  ([#616](https://github.com/chriso/validator.js/pull/616),
   [#622](https://github.com/chriso/validator.js/pull/622),
   [#627](https://github.com/chriso/validator.js/pull/627),
   [#630](https://github.com/chriso/validator.js/pull/630))

#### 6.2.1

- Disallow `<` and `>` in URLs
  ([#613](https://github.com/chriso/validator.js/issues/613))
- New locales
  ([#610](https://github.com/chriso/validator.js/pull/610))

#### 6.2.0

- Added an option to require an email display name
  ([#607](https://github.com/chriso/validator.js/pull/607))
- Added support for `lt` and `gt` to `isInt()`
  ([#588](https://github.com/chriso/validator.js/pull/588))
- New locales
  ([#601](https://github.com/chriso/validator.js/pull/601))

#### 6.1.0

- Added support for greater or less than in `isFloat()`
  ([#544](https://github.com/chriso/validator.js/issues/544))
- Added support for ISSN validation via `isISSN()`
  ([#593](https://github.com/chriso/validator.js/pull/593))
- Fixed a bug in `normalizeEmail()`
  ([#594](https://github.com/chriso/validator.js/issues/594))
- New locales
  ([#585](https://github.com/chriso/validator.js/pull/585))

#### 6.0.0

- Renamed `isNull()` to `isEmpty()`
  ([#574](https://github.com/chriso/validator.js/issues/574))
- Backslash is now escaped in `escape()`
  ([#516](https://github.com/chriso/validator.js/issues/516))
- Improved `normalizeEmail()`
  ([#583](https://github.com/chriso/validator.js/pull/583))
- Allow leading zeroes by default in `isInt()`
  ([#532](https://github.com/chriso/validator.js/pull/532))

#### 5.7.0

- Added support for IPv6 in `isURL()`
  ([#564](https://github.com/chriso/validator.js/issues/564))
- Added support for urls without a host (e.g. `file:///foo.txt`) in `isURL()`
  ([#563](https://github.com/chriso/validator.js/issues/563))
- Added support for regular expressions in the `isURL()` host whitelist and blacklist
  ([#562](https://github.com/chriso/validator.js/issues/562))
- Added support for MasterCard 2-Series BIN
  ([#576](https://github.com/chriso/validator.js/pull/576))
- New locales
  ([#575](https://github.com/chriso/validator.js/pull/575),
   [#552](https://github.com/chriso/validator.js/issues/552))

#### 5.6.0

- Added an `isMD5()` validator
  ([#557](https://github.com/chriso/validator.js/pull/557))
- Fixed an exceptional case in `isDate()`
  ([#566](https://github.com/chriso/validator.js/pull/566))
- New locales
  ([#559](https://github.com/chriso/validator.js/pull/559),
  [#568](https://github.com/chriso/validator.js/pull/568),
  [#571](https://github.com/chriso/validator.js/pull/571),
  [#573](https://github.com/chriso/validator.js/pull/573))

#### 5.5.0

- Fixed a regex denial of service in `trim()` and `rtrim()`
  ([#556](https://github.com/chriso/validator.js/pull/556))
- Added an Algerian locale to `isMobilePhone()`
  ([#540](https://github.com/chriso/validator.js/pull/540))
- Fixed the Hungarian locale in `isAlpha()` and `isAlphanumeric()`
  ([#541](https://github.com/chriso/validator.js/pull/541))
- Added a Polish locale to `isMobilePhone()`
  ([#545](https://github.com/chriso/validator.js/pull/545))

#### 5.4.0

- Accept Union Pay credit cards in `isCreditCard()`
  ([#539](https://github.com/chriso/validator.js/pull/539))
- Added Danish locale to `isMobilePhone()`
  ([#538](https://github.com/chriso/validator.js/pull/538))
- Added Hungarian locales to `isAlpha()`, `isAlphanumeric()` and `isMobilePhone()`
  ([#537](https://github.com/chriso/validator.js/pull/537))

#### 5.3.0

- Added an `allow_leading_zeroes` option to `isInt()`
  ([#532](https://github.com/chriso/validator.js/pull/532))
- Adjust Chinese mobile phone validation
  ([#523](https://github.com/chriso/validator.js/pull/523))
- Added a Canadian locale to `isMobilePhone()`
  ([#524](https://github.com/chriso/validator.js/issues/524))

#### 5.2.0

- Added a `isDataURI()` validator
  ([#521](https://github.com/chriso/validator.js/pull/521))
- Added Czech locales
  ([#522](https://github.com/chriso/validator.js/pull/522))
- Fixed a bug with `isURL()` when protocol was missing and "://" appeared in the query
  ([#518](https://github.com/chriso/validator.js/issues/518))

#### 5.1.0

- Added a `unescape()` HTML function
  ([#509](https://github.com/chriso/validator.js/pull/509))
- Added a Malaysian locale to `isMobilePhone()`
  ([#507](https://github.com/chriso/validator.js/pull/507))
- Added Polish locales to `isAlpha()` and `isAlphanumeric()`
  ([#506](https://github.com/chriso/validator.js/pull/506))
- Added Turkish locales to `isAlpha()`, `isAlphanumeric()` and `isMobilePhone()`
  ([#512](https://github.com/chriso/validator.js/pull/512))
- Allow >1 underscore in hostnames when using `allow_underscores`
  ([#510](https://github.com/chriso/validator.js/issues/510))

#### 5.0.0

- Migrate to ES6
  ([#496](https://github.com/chriso/validator.js/pull/496))
- Break the library up so that individual functions can be imported
  ([#496](https://github.com/chriso/validator.js/pull/496))
- Remove auto-coercion of input to a string
  ([#496](https://github.com/chriso/validator.js/pull/496))
- Remove the `extend()` function
  ([#496](https://github.com/chriso/validator.js/pull/496))
- Added Arabic locales to `isAlpha()` and `isAlphanumeric()`
  ([#496](https://github.com/chriso/validator.js/pull/496#issuecomment-184781730))
- Fix validation of very large base64 strings
  ([#503](https://github.com/chriso/validator.js/pull/503))

#### 4.9.0

- Added a Russian locale to `isAlpha()` and `isAlphanumeric()`
  ([#499](https://github.com/chriso/validator.js/pull/499))
- Remove the restriction on adjacent hyphens in hostnames
  ([#500](https://github.com/chriso/validator.js/issues/500))

#### 4.8.0

- Added Spanish, French, Portuguese and Dutch support for `isAlpha()` and `isAlphanumeric()`
  ([#492](https://github.com/chriso/validator.js/pull/492))
- Added a Brazilian locale to `isMobilePhone()`
  ([#489](https://github.com/chriso/validator.js/pull/489))
- Reject IPv4 addresses with invalid zero padding
  ([#490](https://github.com/chriso/validator.js/pull/490))
- Fix the client-side version when used with RequireJS
  ([#494](https://github.com/chriso/validator.js/issues/494))

#### 4.7.1

- Use [node-depd](https://github.com/dougwilson/nodejs-depd) to print deprecation notices
  ([#487](https://github.com/chriso/validator.js/issues/487))

#### 4.7.0

- Print a deprecation warning if validator input is not a string
  ([1f67e1e](https://github.com/chriso/validator.js/commit/1f67e1e15198c0ae735151290dc8dc2bf14da254)).
  Note that this will be an error in v5.
- Added a German locale to `isMobilePhone()`, `isAlpha()` and `isAlphanumeric()`
  ([#477](https://github.com/chriso/validator.js/pull/477))
- Added a Finnish locale to `isMobilePhone()`
  ([#455](https://github.com/chriso/validator.js/pull/455))

#### 4.6.1

- Fix coercion of objects: `Object.toString()` is `[object Object]` not `""`
  ([a57f3c8](https://github.com/chriso/validator.js/commit/a57f3c843c715fba2664ee22ec80e9e28e88e0a6))

#### 4.6.0

- Added a Spanish locale to `isMobilePhone()`
  ([#481](https://github.com/chriso/validator.js/pull/481))
- Fix string coercion of objects created with `Object.create(null)`
  ([#484](https://github.com/chriso/validator.js/issues/484))

#### 4.5.2

- Fix a timezone issue with short-form ISO 8601 dates, e.g.
  `validator.isDate('2011-12-21')`
  ([#480](https://github.com/chriso/validator.js/issues/480))

#### 4.5.1

- Make `isLength()` / `isByteLength()` accept `{min, max}` as options object.
  ([#474](https://github.com/chriso/validator.js/issues/474))

#### 4.5.0

- Add validation for Indian mobile phone numbers
  ([#471](https://github.com/chriso/validator.js/pull/471))
- Tweak Greek and Chinese mobile phone validation
  ([#467](https://github.com/chriso/validator.js/pull/467),
   [#468](https://github.com/chriso/validator.js/pull/468))
- Fixed a bug in `isDate()` when validating ISO 8601 dates without a timezone
  ([#472](https://github.com/chriso/validator.js/issues/472))

#### 4.4.1

- Allow triple hyphens in IDNA hostnames
  ([#466](https://github.com/chriso/validator.js/issues/466))

#### 4.4.0

- Added `isMACAddress()` validator
  ([#458](https://github.com/chriso/validator.js/pull/458))
- Added `isWhitelisted()` validator
  ([#462](https://github.com/chriso/validator.js/pull/462))
- Added a New Zealand locale to `isMobilePhone()`
  ([#452](https://github.com/chriso/validator.js/pull/452))
- Added options to control GMail address normalization
  ([#460](https://github.com/chriso/validator.js/pull/460))

#### 4.3.0

- Support Ember CLI module definitions
  ([#448](https://github.com/chriso/validator.js/pull/448))
- Added a Vietnam locale to `isMobilePhone()`
  ([#451](https://github.com/chriso/validator.js/pull/451))

#### 4.2.1

- Fix `isDate()` handling of RFC2822 timezones
  ([#447](https://github.com/chriso/validator.js/pull/447))

#### 4.2.0

- Fix `isDate()` handling of ISO8601 timezones
  ([#444](https://github.com/chriso/validator.js/pull/444))
- Fix the incorrect `isFloat('.') === true`
  ([#443](https://github.com/chriso/validator.js/pull/443))
- Added a Norwegian locale to `isMobilePhone()`
  ([#439](https://github.com/chriso/validator.js/pull/439))

#### 4.1.0

- General `isDate()` improvements
  ([#431](https://github.com/chriso/validator.js/pull/431))
- Tests now require node 4.0+
  ([#438](https://github.com/chriso/validator.js/pull/438))

#### 4.0.6

- Added a Taiwan locale to `isMobilePhone()`
  ([#432](https://github.com/chriso/validator.js/pull/432))
- Fixed a bug in `isBefore()` where it would return `null`
  ([#436](https://github.com/chriso/validator.js/pull/436))

#### 4.0.5

- Fixed a denial of service vulnerability in the `isEmail()` regex
  ([#152](https://github.com/chriso/validator.js/issues/152#issuecomment-131874928))

#### 4.0.4

- Reverted the leap year validation in `isDate()` as it introduced some regressions
  ([#422](https://github.com/chriso/validator.js/issues/422), [#423](https://github.com/chriso/validator.js/issues/423))

#### 4.0.3

- Added leap year validation to `isDate()`
  ([#418](https://github.com/chriso/validator.js/pull/418))

#### 4.0.2

- Fixed `isDecimal()` with an empty string
  ([#419](https://github.com/chriso/validator.js/issues/419))

#### 4.0.1

- Fixed `isByteLength()` with certain strings
  ([09f0c6d](https://github.com/chriso/validator.js/commit/09f0c6d2321f0c78af6a7de42e91b63955e4c01e))
- Put length restrictions on email parts
  ([#258](https://github.com/chriso/validator.js/issues/258#issuecomment-127173612))

#### 4.0.0

- Simplified the `isEmail()` regex and fixed some edge cases
  ([#258](https://github.com/chriso/validator.js/issues/258#issuecomment-127173612))
- Added ISO 8601 date validation via `isISO8601()`
  ([#373](https://github.com/chriso/validator.js/issues/373))
