# Cómo trabajar en una aplicación web de cliente localizada

La aplicación web de cliente basada en react que impulsa nuestra plataforma de aprendizaje se construyo utilizando Gatsby. Se traduce a varios idiomas utilizando [react-i18next](https://react.i18next.com/) y [i18next](https://www.i18next.com/).

Puedes obtener más información sobre cómo configurar la aplicación cliente localmente para su desarrollo siguiendo [nuestra guía de configuración local aquí](how-to-setup-freecodecamp-locally.md). Por defecto, la aplicación solo está disponible en inglés.

Una vez que hayas configurado el proyecto localmente, deberías poder seguir esta documentación para ejecutar el cliente en el idioma de tu elección de la lista de idiomas disponibles.

Esto podría ser útil cuando se está trabajando en una función que se dirige específicamente a algo que implica la localización, y requiere que valides, por ejemplo, la etiqueta de un botón en un idioma diferente.

> [!TIP] No necesitas seguir este documento para traducir el currículo de  freeCodeCamp  o para contribuir con la documentación. En su lugar, lee  [esta guia](how-to-translate-files.md).

Veamos cómo funcionan los marcos de trabajo y las theyrramientas de i18n.

## Estructura de archivos

La mayoría de los archivos para traducir la plataforma se encuentran en la carpeta [`client/i18n`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n). Cada idioma tiene una carpeta dentro que contiene archivos JSON con las traducciones.

```console
  config/i18n
  └── all-langs.ts
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
  └── validate-keys.ts
```

Algunos de estos archivos child traducidos en nuestra plataforma de traducción (Crowdin), otros no lo child.

**Archivos traducidos en nuestra plataforma de traducción:**

- El archivo `translations.json` contiene la mayor parte del texto que aparece en los elementos de la interfaz de usuario. Las claves child usadas en el código base para obtener el texto correcto de cualquier lenguaje que sea seleccionado. Este archivo debe tener exactamente las mismas claves en todos los idiomas.

- El archivo `intro.json` contiene los pares clave-valor para el texto de introducción en las páginas de certificación.

  Si quieres añadir/actualizar las traducciones para las claves por favor lee [esta guía aquí.](https://freecodecamp.crowdin.com/how-to-translate-files.md).

**Archivos que NO child traducidos en nuestra plataforma de traducciones:**

- Los archivos  `motivation.json` no requieren que tengan las mismas comillas, complementos o tamaños u orden. Simplemente la misma estructura JSON.

- El archivo `trending.json` contiene los títulos y enlaces para los artículos noticiosos en tendencia dentro del footer del sitio web.

- El archivo`meta-tags.json` contiene la información para nuestra informacion de la Meta etiqueta del sitio web.

  Los cambios en estos archivos child usualmente realizados por nuestro personal. Si ves algo raro o fuera de lo normal, deberías comunicarte con nosotros en el [chat de colaboradores](https://chat.freecodecamp.org/channel/contributors).

## Probando la app cliente en un idioma mundial

Puedes probar la app cliente en cualquier lenguaje disponible en la [lista de idiomas aquí](https://github.com/freeCodeCamp/freeCodeCamp/blob/6b4a6a02568b809fc216ea8566ff5df446d1da4e/config/i18n/all-langs.js#L5).

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

If you are working on a feature or a bug for the client web app, say for example adding new UI items on the settings page, you should follow the guidelines below. They will theylp you prepare the components for localization into all the supported world languages.

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
