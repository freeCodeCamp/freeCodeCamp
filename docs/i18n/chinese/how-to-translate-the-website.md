The client/react side of our website is translated into various world languages using [react-i18next](https://react.i18next.com/) and [i18next](https://www.i18next.com/).

> [!NOTE] Curriculum lesson content is [translated separately](./how-to-translate-files.md).

## File Structure

The files for translating the website are located in the `client/i18n` folder. Each language has a folder within that containing JSON files with the translations.

The values in the `translations.json` file contain the majority of the text that appears on the website. The keys are used in the codebase to get the correct text for whatever language is set. This file needs to have the exact same keys in all languages.

The `intro.json` file contains the key-value pairs for the introduction text on the certification pages.

The `motivation.json` files are not required to have the same quotes, compliments, or array length. Just the same JSON structure. These are not translated via Crowdin.

The `trending.json` file contians the titles and links for the trending news articles in the website's footer. These are not translated via Crowdin.

The `meta-tags.json` file contains the information for our website's meta tag information. These are not translated via Crowdin.

## Adding a Language

To add a new language, create a folder with the language name as the title next to the other languages and copy the JSON files from another language into your new folder.

In the `all-langs.js` file, add the language to the `client` array in the first variable. Then, follow the instructions in the comments to add the rest of the necessary variables.

## How to Translate

Translating the `intro.json` and `translations.json` are done through [our translation site](https://translate.freecodecamp.org). View our [translation documentation for that site](/how-to-translate-files.md).

Modifications to the `trending.json`, `meta-tags.json`, and `motivation.json` files should typically only be done by staff.

## Running it Locally

Set the `CLIENT_LOCALE` variable in your `.env` file to the locale you want to build.

> [!NOTE] The value needs to be one of the client languages available in `config/i18n/all-langs.js`

## How to Structure Components

### Functional Component

```js
import { useTranslation } from 'react-i18next';

// in the render method:
const { t } = useTranslation();

// call the "t" function with a key from the JSON file:
<p>{t('key')}</p> // more details below
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

In the above example, the key is set in the attributes of the `Trans` component. The `<0>` and `</0>` in the JSON represent the first child of the component, in this case, the anchor element. If there were more children, they would just count up from there using the same syntax. You can find the children of a component in the react dev tools by inspecting it. `placeholder` is simply there because the linter was complaining at me about an empty `<a>` element.

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
