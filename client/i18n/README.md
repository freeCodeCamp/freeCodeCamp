Move this over to the docs or maybe some of it to comments in the files

# i18next in our codebase

Skip to the syntax

`/client/i18n` contains the `i18next` configuration and translation files used to localize our website.

Set the locale you want to build in the `.env` file.

The `motivation.json` files are not required to have the same quotes, compliments, or array length. Just the same JSON structure.

The `translation.json` are required to have the exact same keys in all languages.


English is source of truth for the rest of the `translation.json` files


Notes for translating:
- Only translate the values in the json files
- Be sure to escape double quotes (`\"`) in the strings
- Try to keep punctuation and spacing
- Most of the time, when you see text wrapped in `<0></0>` tags, it's a link. It is okay to change the text that it is wrapped around. Just keep the same tags.
- A value that has something like `{{value}}` in it is a variable in the react component. Don't change any of those characters. You can move that whole group of characters around though.

Adding a new language:
- Create a folder in `i18n/locales` with the name of the new language.
- Create a `translation.json` and `motivation.json` files in that folder.
- The `translation.json` file must include all the keys in the english version of the file
- The `motivation.json` file must have the same structure as the english version, but does not have to have the same length of arrays
- In the `allLangs.js` file:
  - Add your new language to the `availableLangs.client` array
  - Add a display name for the language in `langDisplayNames['your-langauge']`
  - Add a locale for your language in the `langCodes` variable


Adding new text to the website:
- Create a key in the english `translation.json` file
- Add the same key in the `translation.json` files for all the other languages
- Use the appropriate method from the i18next usage area to get your value on the website

Changing existing text on the website:



## i18next usage:

### Functional Component:
```js
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

// get translated text from the json file:
<p>{t('key')}</p> // more details below
```

### Class Component:
```js
import { withTranslation } from 'react-i18next';

const { t } = this.props

// get translated text from the json file:
<h1>{t('key')}</h1> // more details below

// without redux:
export default withTranslation()(Component);

// with redux:
export default withTranslation()(
  connect(...)(Component)
);
```

### Translate using the "t" function:

#### Basic Translation:
```js
// in your component:
<p>{t('p1')}</p>

// in the json:
{ "p1": "My paragraph" }

// output:
<p>My paragraph</p>
```

#### With dynamic data:
```js
// in your component:
const username = 'moT';

<b>
  {t('welcome', { name: username })}
</b>

// in the json:
{
  "welcome": "Welcome, {{username}}"
}

// output:
<p>Welcome, moT</p>
```

The above example passes an object to the `t` function with a `username` variable. The variable will be placed in json where `{{username}}` is gett

### Translate with the `<Trans>` component:

The general rule is to use the "t" function when you can. But there's `Trans` component for that won't work. Usually when you have embedded elements in the text. You can use the `Trans` component in any type of react component.

#### Basic elements nested:

```js
import { Trans } from 'react-i18next'

<p>
  <Trans>fcc.greeting</Trans>
</p>

// the json:
{ 
  "fcc": {
    "greeting": "Welcome to <strong>freeCodeCamp</strong>"
  }
}

// output
<p>Welcome to <strong>freeCodeCamp</strong></p>
```

You can place the key inside the component tags like the above example when there's no child elements of `Trans`. The text in the json file can contain simple tags with no attributes. `br`, `strong`, `i`, and `p` are the default, but that list can be expanded in the i18n config. 


#### Nested elements:
Other times, you will want to have certain text inside another element, an achor tag is a good example:

```js
<p>
  <Trans i18nKey='check-forum'>
    <a href='https://forum.freecodecamp.org/'>placeholder</a>
  </Trans>
</p>

// the json:
{ 
  "check-forum": "Check out <0>our forum</0>."
}

// output
<p>Check out <a href='https://forum.freecodecamp.org/'>our forum</a></p>
```

In the above example, the key is set in the attributes of the `Trans` component. The `<0>` and `</0>` in the json represent the first child of the component, in this case, the anchor element. If there were more children, they would just count up from there using the same syntax. You can find the children of a component in the react dev tools by inspecting it. `placeholder` is simply there because the linter was complaining at me about an empty `<a>` element.


#### With a variable:
```js
const url = 'https://freecodecamp.org/'

<p>
  <Trans i18nKey='fcc.greeting' url={url} >
    <a href={url}>{{url}}</a>
  </Trans>
</p>

// the json:
{
  "fcc": {
    "greeting": "Welcome to <0>{{url}}</0>"
  }
}

// output
<p>Welcome to <a href='https://freecodecamp.org/'>

<p>
```

In the above example, the key and a variable are set in the attributes of the `Trans` component. The `url` will be used in place of `{{url}}` in the json. The `<0>` and `</0>` tags surrounding it represent the first child of the `Trans` component.

More resources:
[react-i18next docs](https://react.i18next.com/latest/usetranslation-hook)
[i18next docs](https://www.i18next.com/translation-function/essentials)
