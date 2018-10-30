# validator.js

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Downloads][downloads-image]][npm-url]

A library of string validators and sanitizers.

## Strings only

**This library validates and sanitizes strings only.**

If you're not sure if your input is a string, coerce it using `input + ''`.
Passing anything other than a string is an error.

## Installation and Usage

### Server-side usage

Install the library with `npm install validator`

#### No ES6

```javascript
var validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true
```

#### ES6

```javascript
import validator from 'validator';
```

Or, import only a subset of the library:

```javascript
import isEmail from 'validator/lib/isEmail';
```

### Client-side usage

The library can be loaded either as a standalone script, or through an [AMD][amd]-compatible loader

```html
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail('foo@bar.com'); //=> true
</script>
```

The library can also be installed through [bower][bower]

```bash
$ bower install validator-js
```

## Validators

Here is a list of the validators currently available.

Validator                               | Description
--------------------------------------- | --------------------------------------
***contains(str, seed)***               | check if the string contains the seed.
**equals(str, comparison)**             | check if the string matches the comparison.
**isAfter(str [, date])**               | check if the string is a date that's after the specified date (defaults to now).
**isAlpha(str [, locale])**             | check if the string contains only letters (a-zA-Z).<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`) and defaults to `en-US`. Locale list is `validator.isAlphaLocales`.
**isAlphanumeric(str [, locale])**      | check if the string contains only letters and numbers.<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`) and defaults to `en-US`. Locale list is `validator.isAlphanumericLocales`.
**isAscii(str)**                        | check if the string contains ASCII chars only.
**isBase64(str)**                       | check if a string is base64 encoded.
**isBefore(str [, date])**              | check if the string is a date that's before the specified date.
**isBoolean(str)**                      | check if a string is a boolean.
**isByteLength(str [, options])**          | check if the string's length (in UTF-8 bytes) falls in a range.<br/><br/>`options` is an object which defaults to `{min:0, max: undefined}`.
**isCreditCard(str)**                   | check if the string is a credit card.
**isCurrency(str [, options])**            | check if the string is a valid currency amount.<br/><br/>`options` is an object which defaults to `{symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}`.<br/>**Note:** The array `digits_after_decimal` is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3].
**isDataURI(str)**                      | check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).
**isMagnetURI(str)**                      | check if the string is a [magnet uri format](https://en.wikipedia.org/wiki/Magnet_URI_scheme).
**isDecimal(str [, options])**             | check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.<br/><br/>`options` is an object which defaults to `{force_decimal: false, decimal_digits: '1,', locale: 'en-US'}`<br/><br/>`locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`.<br/>**Note:** `decimal_digits` is given as a range like '1,3', a specific value like '3' or min like '1,'.
**isDivisibleBy(str, number)**          | check if the string is a number that's divisible by another.
**isEmail(str [, options])**            | check if the string is an email.<br/><br/>`options` is an object which defaults to `{ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false }`. If `allow_display_name` is set to true, the validator will also match `Display Name <email-address>`. If `require_display_name` is set to true, the validator will reject strings without the format `Display Name <email-address>`. If `allow_utf8_local_part` is set to false, the validator will not allow any non-English UTF8 character in email address' local part. If `require_tld` is set to false, e-mail addresses without having TLD in their domain will also be matched. If `allow_ip_domain` is set to true, the validator will allow IP addresses in the host part. If `domain_specific_validation` is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
**isEmpty(str [, options])**            | check if the string has a length of zero.<br/><br/>`options` is an object which defaults to `{ ignore_whitespace:false }`.
**isFQDN(str [, options])**             | check if the string is a fully qualified domain name (e.g. domain.com).<br/><br/>`options` is an object which defaults to `{ require_tld: true, allow_underscores: false, allow_trailing_dot: false }`.
**isFloat(str [, options])**            | check if the string is a float.<br/><br/>`options` is an object which can contain the keys `min`, `max`, `gt`, and/or `lt` to validate the float is within boundaries (e.g. `{ min: 7.22, max: 9.55 }`) it also has `locale` as an option.<br/><br/>`min` and `max` are equivalent to 'greater or equal' and 'less or equal', respectively while `gt` and `lt` are their strict counterparts.<br/><br/>`locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`. Locale list is `validator.isFloatLocales`.
**isFullWidth(str)**                    | check if the string contains any full-width chars.
**isHalfWidth(str)**                    | check if the string contains any half-width chars.
**isHash(str, algorithm)**              | check if the string is a hash of type algorithm.<br/><br/>Algorithm is one of `['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b']`
**isHexColor(str)**                     | check if the string is a hexadecimal color.
**isHexadecimal(str)**                  | check if the string is a hexadecimal number.
**isIdentityCard(str [, locale])**      | check if the string is a valid identity card code.<br/><br/>`locale` is one of `['ES']` OR `'any'`. If 'any' is used, function will check if any of the locals match.<br/><br/>Defaults to 'any'.
**isIP(str [, version])**               | check if the string is an IP (version 4 or 6).
**isIPRange(str)**                      | check if the string is an IP Range(version 4 only).
**isISBN(str [, version])**             | check if the string is an ISBN (version 10 or 13).
**isISSN(str [, options])**             | check if the string is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number).<br/><br/>`options` is an object which defaults to `{ case_sensitive: false, require_hyphen: false }`. If `case_sensitive` is true, ISSNs with a lowercase `'x'` as the check digit are rejected.
**isISIN(str)**                         | check if the string is an [ISIN][ISIN] (stock/security identifier).
**isISO8601(str)**                      | check if the string is a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
**isRFC3339(str)**                      | check if the string is a valid [RFC 3339](https://tools.ietf.org/html/rfc3339) date.
**isISO31661Alpha2(str)**               | check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
**isISO31661Alpha3(str)**               | check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
**isISRC(str)**                         | check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
**isIn(str, values)**                   | check if the string is in a array of allowed values.
**isInt(str [, options])**              | check if the string is an integer.<br/><br/>`options` is an object which can contain the keys `min` and/or `max` to check the integer is within boundaries (e.g. `{ min: 10, max: 99 }`). `options` can also contain the key `allow_leading_zeroes`, which when set to false will disallow integer values with leading zeroes (e.g. `{ allow_leading_zeroes: false }`). Finally, `options` can contain the keys `gt` and/or `lt` which will enforce integers being greater than or less than, respectively, the value provided (e.g. `{gt: 1, lt: 4}` for a number between 1 and 4).
**isJSON(str)**                         | check if the string is valid JSON (note: uses JSON.parse).
**isJWT(str)**                         | check if the string is valid JWT token.
**isLatLong(str)**                      | check if the string is a valid latitude-longitude coordinate in the format `lat,long` or `lat, long`.
**isLength(str [, options])**              | check if the string's length falls in a range.<br/><br/>`options` is an object which defaults to `{min:0, max: undefined}`. Note: this function takes into account surrogate pairs.
**isLowercase(str)**                    | check if the string is lowercase.
**isMACAddress(str)**                   | check if the string is a MAC address.<br/><br/>`options` is an object which defaults to `{no_colons: false}`. If `no_colons` is true, the validator will allow MAC addresses without the colons.
**isMD5(str)**                          | check if the string is a MD5 hash.
**isMimeType(str)**                     | check if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format
**isMobilePhone(str [, locale [, options]])**          | check if the string is a mobile phone number,<br/><br/>(locale is either an array of locales (e.g `['sk-SK', 'sr-RS']`) OR one of `['ar-AE', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY', 'bg-BG', 'bn-BD', 'cs-CZ', 'de-DE', 'da-DK', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-HK', 'en-IN',  'en-KE', 'en-NG', 'en-NZ', 'en-RW', 'en-SG', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-PK', 'es-ES', 'es-MX','et-EE', 'fa-IR', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU', 'it-IT', 'ja-JP', 'kk-KZ', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'pt-BR', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW']` OR defaults to 'any'. If 'any' or a falsey value is used, function will check if any of the locales match).<br/><br/>`options` is an optional object that can be supplied with the following keys: `strictMode`, if this is set to `true`, the mobile phone number must be supplied with the country code and therefore must start with `+`. Locale list is `validator.isMobilePhoneLocales`.
**isMongoId(str)**                      | check if the string is a valid hex-encoded representation of a [MongoDB ObjectId][mongoid].
**isMultibyte(str)**                    | check if the string contains one or more multibyte chars.
**isNumeric(str [, options])**                      | check if the string contains only numbers.<br/><br/>`options` is an object which defaults to `{no_symbols: false}`. If `no_symbols` is true, the validator will reject numeric strings that feature a symbol (e.g. `+`, `-`, or `.`).
**isPort(str)**                         | check if the string is a valid port number.
**isPostalCode(str, locale)**           | check if the string is a postal code,<br/><br/>(locale is one of `[ 'AD', 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MX', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'US', 'ZA', 'ZM' ]` OR 'any'. If 'any' is used, function will check if any of the locals match. Locale list is `validator.isPostalCodeLocales`.).
**isSurrogatePair(str)**                | check if the string contains any surrogate pairs chars.
**isURL(str [, options])**              | check if the string is an URL.<br/><br/>`options` is an object which defaults to `{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false }`.
**isUUID(str [, version])**             | check if the string is a UUID (version 3, 4 or 5).
**isUppercase(str)**                    | check if the string is uppercase.
**isVariableWidth(str)**                | check if the string contains a mixture of full and half-width chars.
**isWhitelisted(str, chars)**           | checks characters if they appear in the whitelist.
**matches(str, pattern [, modifiers])** | check if string matches the pattern.<br/><br/>Either `matches('foo', /foo/i)` or `matches('foo', 'foo', 'i')`.

## Sanitizers

Here is a list of the sanitizers currently available.

Sanitizer                              | Description
-------------------------------------- | -------------------------------
**blacklist(input, chars)**            | remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to escape some chars, e.g. `blacklist(input, '\\[\\]')`.
**escape(input)**                      | replace `<`, `>`, `&`, `'`, `"` and `/` with HTML entities.
**unescape(input)**                    | replaces HTML encoded entities with `<`, `>`, `&`, `'`, `"` and `/`.
**ltrim(input [, chars])**             | trim characters from the left-side of the input.
**normalizeEmail(email [, options])**  | canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use isEmail beforehand)<br/><br/>`options` is an object with the following keys and default values:<br/><ul><li>*all_lowercase: true* - Transforms the local part (before the @ symbol) of all email addresses to lowercase. Please note that this may violate RFC 5321, which gives providers the possibility to treat the local part of email addresses in a case sensitive way (although in practice most - yet not all - providers don't). The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.</li><li>*gmail_lowercase: true* - GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when *all_lowercase* is set to false. Please note that when *all_lowercase* is true, GMail addresses are lowercased regardless of the value of this setting.</li><li>*gmail_remove_dots: true*: Removes dots from the local part of the email address, as GMail ignores them (e.g. "john.doe" and "johndoe" are considered equal).</li><li>*gmail_remove_subaddress: true*: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@gmail.com" becomes "foo@gmail.com").</li><li>*gmail_convert_googlemaildotcom: true*: Converts addresses with domain @googlemail.com to @gmail.com, as they're equivalent.</li><li>*outlookdotcom_lowercase: true* - Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when *all_lowercase* is set to false. Please note that when *all_lowercase* is true, Outlook.com addresses are lowercased regardless of the value of this setting.</li><li>*outlookdotcom_remove_subaddress: true*: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@outlook.com" becomes "foo@outlook.com").</li><li>*yahoo_lowercase: true* - Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when *all_lowercase* is set to false. Please note that when *all_lowercase* is true, Yahoo Mail addresses are lowercased regardless of the value of this setting.</li><li>*yahoo_remove_subaddress: true*: Normalizes addresses by removing "sub-addresses", which is the part following a "-" sign (e.g. "foo-bar@yahoo.com" becomes "foo@yahoo.com").</li><li>*icloud_lowercase: true* - iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when *all_lowercase* is set to false. Please note that when *all_lowercase* is true, iCloud addresses are lowercased regardless of the value of this setting.</li><li>*icloud_remove_subaddress: true*: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@icloud.com" becomes "foo@icloud.com").</li></ul>
**rtrim(input [, chars])**             | trim characters from the right-side of the input.
**stripLow(input [, keep_new_lines])** | remove characters with a numerical value < 32 and 127, mostly control characters. If `keep_new_lines` is `true`, newline characters are preserved (`\n` and `\r`, hex `0xA` and `0xD`). Unicode-safe in JavaScript.
**toBoolean(input [, strict])**        | convert the input string to a boolean. Everything except for `'0'`, `'false'` and `''` returns `true`. In strict mode only `'1'` and `'true'` return `true`.
**toDate(input)**                      | convert the input string to a date, or `null` if the input is not a date.
**toFloat(input)**                     | convert the input string to a float, or `NaN` if the input is not a float.
**toInt(input [, radix])**             | convert the input string to an integer, or `NaN` if the input is not an integer.
**trim(input [, chars])**              | trim characters (whitespace by default) from both sides of the input.
**whitelist(input, chars)**            | remove characters that do not appear in the whitelist. The characters are used in a RegExp and so you will need to escape some chars, e.g. `whitelist(input, '\\[\\]')`.

### XSS Sanitization

XSS sanitization was removed from the library in [2d5d6999](https://github.com/chriso/validator.js/commit/2d5d6999541add350fb396ef02dc42ca3215049e).

For an alternative, have a look at Yahoo's [xss-filters library](https://github.com/yahoo/xss-filters) or at [DOMPurify](https://github.com/cure53/DOMPurify).

## Contributing

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
    2. Change or add tests if needed
    3. Run tests and make sure they pass
    4. Add changes to README.md if needed
4. Commit changes to your own branch
5. **Make sure** you merge the latest from "upstream" and resolve conflicts if there is any
6. Repeat step 3(3) above
7. Push your work back up to your fork
8. Submit a Pull request so that we can review your changes

## Tests

Tests are using mocha, to run the tests use:

```sh
$ npm test
```

## Maintainers

- [chriso](https://github.com/chriso) - **Chris O'Hara** (author)
- [profnandaa](https://github.com/profnandaa) - **Anthony Nandaa**

## Reading

Remember, validating can be troublesome sometimes. See [A list of articles about programming assumptions commonly made that aren't true](https://github.com/jameslk/awesome-falsehoods).

## License (MIT)

```
Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[downloads-image]: http://img.shields.io/npm/dm/validator.svg

[npm-url]: https://npmjs.org/package/validator
[npm-image]: http://img.shields.io/npm/v/validator.svg

[travis-url]: https://travis-ci.org/chriso/validator.js
[travis-image]: http://img.shields.io/travis/chriso/validator.js.svg

[amd]: http://requirejs.org/docs/whyamd.html
[bower]: http://bower.io/

[mongoid]: http://docs.mongodb.org/manual/reference/object-id/
[ISIN]: https://en.wikipedia.org/wiki/International_Securities_Identification_Number
