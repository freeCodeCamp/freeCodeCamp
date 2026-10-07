# Changelog

## 1.7.1

### Security

- `launder` now uses and exports the best available naughtyHref function for detecting malicious URLs. sanitize-html now depends on it, and apostrophe now uses type: 'url' for the link URL field of image widgets, which leverages it. Prior to this fix, it was possible for any user with editing privileges, including a contributor, to trigger arbitrary JavaScript via a javascript: URL in the link URL field of an image widget. A migration has been included to strip any such malicious URLs already present in the database. All users of apostrophe are encouraged to upgrade to get this security fix. Thanks to [Muhammad Uwais](https://github.com/MuhammadUwais) for reporting the issue.

## 1.7.0 - 2023-05-03

- Modernize dependencies to correct installation warnings, and eliminate use of `var`.

## 1.6.0 - 2023-03-06

- `sms:` urls are now accepted. Thanks to [Ruben](https://github.com/reubendsouza) for this change.

## 1.5.1 - 2021-10-28

- The `date` method now correctly returns `null` if the date argument is unparseable and the `def` parameter is explicitly `null`. As was always documented, a default of `undefined` still returns the current date.

## 1.5.0

- The `url` method now accepts a third argument, `httpsFix`. If it is `true` and the URL passed in has no protocol, the URL will be prepended with `https://` rather than `http://`.

## 1.4.0

- `tel:` urls are now accepted.

## 1.3.0

- `booleanOrNull` accepts the string `'null'` as a synonym for `null`. Note that `'any'` was already accepted. `'null'` can be an attractive choice when the user will not see it in the query string and conflict with other uses of `'any'` is a concern.

## 1.2.0

- `idRegExp` option may be passed to change the rules for `launder.id`.

## 1.1.2

- linting.

## 1.1.1

- for improved bc, `launder.select` does not crash if some of the choices given to `select` are null or undefined. Although this is a developer error rather than a sanitization issue, versions prior to 1.1.0 did tolerate this situation, so 1.1.1 does so as well. Thanks to Anthony Tarlao for his code contributions, and to Michelin for making this fix possible via [Apostrophe Enterprise Support](https://apostrophecms.com/support/enterprise-support).

## 1.1.0

- `launder.select` now handles numeric values for choices gracefully. Specifically, if the value passed in is a string, it will be validated as a match for a choice that is a number, as long as they have the same string representation, and the number (not the string) will be returned. Previously there was no match in this situation.

Thanks to Michelin for making this possible via [Apostrophe Enterprise Support](https://apostrophecms.com/support/enterprise-support).

## 1.0.1

- `launder.time` will now also accept a `.` (dot) as the separator (until now only `:` colon was recognized). Thanks to Lars Houmark.

## 1.0.0

- switched to a maintained, secure fork of lodash 3, declared 1.0.0 as this has been a stable part of Apostrophe for years.

## 0.1.3

- `launder.booleanOrNull` broken out from `launder.addBooleanFilterCriteria` so that you can get the tri-state value without modifying a criteria object.

## 0.1.2

- `launder.tags` also accepts a comma-separated string.

## 0.1.1

- removed never-used and undocumented `parseTime` method.

## 0.1.0

- initial release. Based on stable code recently refactored from Apostrophe 0.5.x.
