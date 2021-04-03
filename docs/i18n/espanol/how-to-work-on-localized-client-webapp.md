# How to work on localized client webapp

The react based client web app that powers our learning platform is built using Gatsby. It is translated into various world languages using [react-i18next](https://react.i18next.com/) and [i18next](https://www.i18next.com/).

You can learn more about setting up the client application locally for development by following [our local setup guide here](/how-to-setup-freecodecamp-locally). By default the application is available only in English.

Once you have setup the project locally you should be able to follow this documentation to run the client in the language of your choice from the list of available languages.

This could be helpful when you are working on a feature that specifically targets something that involves localization, and requires you to validate for instance a button's label in a different language.

> [!TIP] You do not need to follow this document for translating freeCodeCamp's curriculum or contributing documentation. Read [this guide here](./how-to-translate-files.md) instead.

Let's understand how the i18n frameworks and tooling work.

## File Structure

Most of files for translating the platform are located in the [`client/i18n`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n) folder. Each language has a directory within that containing JSON files with the translations.

```console
  config/i18n
  └── all-langs.js
  ...
  client/i18n
  ├── configForTests.js
  ├── config.js
  ├── locales
  │   ├── chinese
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  ... ...
  │   ├── dothraki
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  ... ...
  │   ├── english
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  │   └── espanol
  │       ├── intro.json
  │       ├── links.json
  │       ├── meta-tags.json
  │       ├── motivation.json
  │       ├── translations.json
  │       └── trending.json
  ├── locales.test.js
  ├── schema-validation.js
  └── validate-keys.js
```

Some of these files are translated on our translation platform (Crowdin), some are not.

**Files translated on our translation platform:**

- The `translations.json` file contains the majority of the text that appears on the user interface elements. The keys are used in the codebase to get the correct text for whatever language is set. This file needs to have the exact same keys in all languages.

- The `intro.json` file contains the key-value pairs for the introduction text on the certification pages.

  If you want to add/update translations for the keys please [read this guide here](/how-to-translate-files.md).

**Files NOT translated on our translations platform:**

- The `motivation.json` files are not required to have the same quotes, compliments, or array length. Just the same JSON structure.

- The `trending.json` file contains the titles and links for the trending news articles in the website's footer.

- The `meta-tags.json` file contains the information for our website's meta tag information.

  Changes to these files are typically done by the staff team. If you see something out of the ordinary we recommend you reach us in the [translators chat room](https://chat.freecodecamp.org/channel/translators).

## Testing the client app in a world language

You can test the client app in any language available in the [list of languages here](https://github.com/freeCodeCamp/freeCodeCamp/blob/6b4a6a02568b809fc216ea8566ff5df446d1da4e/config/i18n/all-langs.js#L5).

```js
  const availableLangs = {
    client: ['english', 'espanol', 'chinese'],
    ...
  };
```

If you are testing a new language, create a folder with the language name as the title next to the other languages and copy the JSON files from another language into your new folder.

Add the language to the `client` array as seen above in the [`config/i18n/all-langs.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n/all-langs.js) file.

Next, follow the instructions in the comments in the same file to add/update the rest of the variables as needed.

Finally, set the `CLIENT_LOCALE` variable in your `.env` file to the locale you want to build and you're ready.

## How to Structure Components

If you are working on a feature or a bug for the client web app, say for example adding new UI items on the settings page, you should follow the guidelines below. They will help you prepare the components for localization into all the supported world languages.

### Functional Component

```js
import { useTranslation } from 'react-i18next';

// in the render method:
const { t } = useTranslation();

// call the "t" function with a key from the JSON file:
<p>{t('key')}</p>; // more details below
```

### Class Component

```js
import { withTranslation } from 'react-i18next';

// withTranslation adds the "t" function to props:
const { t } = this.props;

// call the "t" function with a key from the JSON file:
<h1>{t('key')}</h1> // more details below

// export without redux:
export default withTranslation()(Component);

// or with redux:
export default connect(...)(withTranslation()(Component));
```

## Translate Using the "t" Function

### Basic Translation

```js
// in the component:
<p>{t('p1')}</p>

// in the JSON file:
{
  "p1": "My paragraph"
}

// output:
<p>My paragraph</p>
```

### With Dynamic Data

```js
// in the component:
const username = 'moT';

<p>{t('welcome', { username: username })}</p>

// in the JSON file:
{
  "welcome": "Welcome {{username}}"
}

// output:
<p>Welcome moT</p>
```

The above example passes an object to the `t` function with a `username` variable. The variable will be used in the JSON value where `{{username}}` is.

## Translate with the `Trans` Component

The general rule is to use the "t" function when you can. But there's a `Trans` component for when that isn't enough, usually when you have elements embedded in the text. You can use the `Trans` component with any type of react component.

### Basic Elements Nested

```js
// in the component:
import { Trans } from 'react-i18next'

<p>
  <Trans>fcc.greeting</Trans>
</p>

// in the JSON file:
{
  "fcc": {
    "greeting": "Welcome to <strong>freeCodeCamp</strong>"
  }
}

// output:
<p>Welcome to <strong>freeCodeCamp</strong></p>
```

You can place the key inside the component tags like the above example if the text contains "simple" tags with no attributes. `br`, `strong`, `i`, and `p` are the default, but that list can be expanded in the i18n config.

### Complex Elements Nested

Other times, you will want to have certain text inside another element, an anchor tag is a good example:

```js
// in the component:
<p>
  <Trans i18nKey='check-forum'>
    <a href='https://forum.freecodecamp.org/'>placeholder</a>
  </Trans>
</p>

// in the JSON file:
{
  "check-forum": "Check out <0>our forum</0>."
}

// output:
<p>Check out <a href='https://forum.freecodecamp.org/'>our forum</a></p>
```

In the above example, the key is set in the attributes of the `Trans` component. The `<0>` and `</0>` in the JSON represent the first child of the component, in this case, the anchor element. If there were more children, they would just count up from there using the same syntax. You can find the children of a component in the react dev tools by inspecting it. `placeholder` is simply there because the linter complains about empty `<a>` elements.

### With a Variable

```js
// in the component:
const email = 'team@freecodecamp.org';

<p>
  <Trans email={email} i18nKey='fcc.email'>
    <a href={`mailto:${email}`}>
      {{ email }}
    </a>
  </Trans>
</p>

// in the JSON file:
{
  "fcc": {
    "email": "Send us an email at: <0>{{email}}</0>"
  }
}

// output:
<p>Send us an email at: <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a><p>
```

In the above example, the key and a variable are set in the attributes of the `Trans` component. `{{ email }}` needs to be somewhere in the `Trans` component as well, it doesn't matter where.

## Changing Text

To change text on the client side of things, go to the relevant `.json` file, find the key that is being used in the React component, and change the value to the new text you want. You should search the codebase for that key to make sure it isn't being used elsewhere. Or, if it is, that the changes make sense in all places.

## Adding Text

If the text you want to add to the client exists in the relevant `.json` file, use the existing key. Otherwise, create a new key.

The English file is the "source of truth" for all of the `.json` files sharing the same name. If you need to add a new key, add it there. Then, add the key to **all** of the `translations.json` files.

> [!NOTE] Use English text for all languages if the file is translated through Crowdin. The tests will fail if you don't.

It would be nice to keep the keys in the same order across all the files as well. Also, try to put all punctuation, spacing, quotes, etc in the JSON files and not in the components or server files.

> [!NOTE] The underscore (`_`) is a reserved character for keys in the client side files. See [the documentation](https://www.i18next.com/translation-function/plurals) for how they are used.

## Helpful Documentation

- [react-i18next docs](https://react.i18next.com/latest/usetranslation-hook)
- [i18next docs](https://www.i18next.com/translation-function/essentials)
