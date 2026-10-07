# Internationalization

## Table of Contents

- [Usage](#usage)

- [Adding New Language](#adding-new-language)

## Usage

There are just a few functions that support I18n:

- [`format`](https://date-fns.org/docs/format)
- [`formatDistance`](https://date-fns.org/docs/formatDistance)
- [`formatDistanceStrict`](https://date-fns.org/docs/formatDistanceStrict)
- [`formatRelative`](https://date-fns.org/docs/formatRelative)

To use a locale, you need to require it and then pass
as an option to a function:

```js
import { formatDistance } from 'date-fns'
// Require Esperanto locale
import { eo } from 'date-fns/locale'

const result = formatDistance(
  new Date(2016, 7, 1),
  new Date(2015, 0, 1),
  {locale: eo} // Pass the locale as an option
)
//=> 'pli ol 1 jaro'
```

It might seem complicated to require and pass locales as options,
but unlike Moment.js which bloats your build with all the locales
by default date-fns forces developer to manually require locales when needed.
To make API simple, we encourage you to write tiny wrappers and use those
instead of original functions:

```js
// app/_lib/format.js

import { format } from 'date-fns'
import { enGB, eo, ru } from 'date-fns/locale'

const locales = {enGB, eo, ru}

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
export default function (date, formatStr = 'PP') {
  return format(date, formatStr, {
    locale: locales[window.__localeId__] // or global.__localeId__
  })
}

// Later:

import format from 'app/_lib/format'

window.__localeId__ = 'enGB'
format(friday13, 'EEEE d')
//=> 'Friday 13'

window.__localeId__ = 'eo'
format(friday13, 'EEEE d')
//=> 'vendredo 13'

// If the format string is omitted, it will take the default for the locale.
window.__localeId__ = 'enGB'
format(friday13)
//=> Jul 13, 2019

window.__localeId__ = 'eo'
format(friday13)
//=> 2019-jul-13

```

## Adding New Language

At the moment there is no definitive guide, so if you feel brave enough,
use this quick guide:

- First of all, [create an issue](https://github.com/date-fns/date-fns/issues/new?title=XXX%20language%20support)
  so you won't overlap with others.
- A detailed explanation of how to [add a new locale](https://github.com/date-fns/date-fns/blob/master/docs/i18nContributionGuide.md#adding-a-new-locale).
- Use [English locale](https://github.com/date-fns/date-fns/tree/master/src/locale/en-US)
  as the basis and then incrementally adjust the tests and the code.
- Directions on [adding a locale with the same language as another locale](https://github.com/date-fns/date-fns/blob/master/docs/i18nContributionGuide.md#creating-a-locale-with-the-same-language-as-another-locale).
- If you have questions or need guidance, leave a comment in the issue.

Thank you for your support!
