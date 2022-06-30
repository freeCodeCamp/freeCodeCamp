# Cómo trabajar en una aplicación web de cliente localizada

La aplicación web de cliente basada en react que impulsa nuestra plataforma de aprendizaje se construyo utilizando Gatsby. Se traduce a varios idiomas utilizando [react-i18next](https://react.i18next.com/) y [i18next](https://www.i18next.com/).

Puedes obtener más información sobre cómo configurar la aplicación cliente localmente para su desarrollo siguiendo [nuestra guía de configuración local aquí](how-to-setup-freecodecamp-locally.md). Por defecto, la aplicación solo está disponible en inglés.

Una vez que hayas configurado el proyecto localmente, deberías poder seguir esta documentación para ejecutar el cliente en el idioma de tu elección de la lista de idiomas disponibles.

Esto podría ser útil cuando se está trabajando en una función que se dirige específicamente a algo que implica la localización, y requiere que valides, por ejemplo, la etiqueta de un botón en un idioma diferente.

> [!TIP] No necesitas seguir este documento para traducir el currículo de  freeCodeCamp  o para contribuir con la documentación. En su lugar, lee  [esta guia](how-to-translate-files.md).

Veamos cómo funcionan los marcos de trabajo y las herramientas de i18n.

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

Algunos de estos archivos son traducidos en nuestra plataforma de traducción (Crowdin), otros no lo son.

**Archivos traducidos en nuestra plataforma de traducción:**

- El archivo `translations.json` contiene la mayor parte del texto que aparece en los elementos de la interfaz de usuario. Las claves son usadas en el código base para obtener el texto correcto de cualquier lenguaje que sea seleccionado. Este archivo debe tener exactamente las mismas claves en todos los idiomas.

- El archivo `intro.json` contiene los pares clave-valor para el texto de introducción en las páginas de certificación.

  Si quieres añadir/actualizar las traducciones para las claves por favor lee [esta guía aquí.](https://freecodecamp.crowdin.com/how-to-translate-files.md).

**Archivos que NO son traducidos en nuestra plataforma de traducciones:**

- Los archivos  `motivation.json` no requieren que tengan las mismas comillas, complementos o tamaños u orden. Simplemente la misma estructura JSON.

- El archivo `trending.json` contiene los títulos y enlaces para los artículos noticiosos en tendencia dentro del footer del sitio web.

- El archivo`meta-tags.json` contiene la información para nuestra informacion de la Meta etiqueta del sitio web.

  Los cambios en estos archivos son usualmente realizados por nuestro personal. If you see something out of the ordinary we recommend you reach us in the [contributors chat room](https://discord.gg/PRyKn3Vbay).

## Probando la app cliente en un idioma mundial

Puedes probar la app cliente en cualquier lenguaje disponible en la [lista de idiomas aquí](https://github.com/freeCodeCamp/freeCodeCamp/blob/6b4a6a02568b809fc216ea8566ff5df446d1da4e/config/i18n/all-langs.js#L5).

```js
  const availableLangs = {
    client: ['english', 'espanol', 'chinese'],
    ...
  };
```

Si estas probando un nuevo idioma, crea una carpeta con el nombre del idioma como titulo junto al otro idioma y copia los archivos JSON desde el otro idioma dentro de la nueva carpeta.

Agrega el idioma al arreglo `cliente` como se ve arriba en el archivo[`config/i18n/all-langs.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n/all-langs.js).

A continuación, sigue las instrucciones en los comentarios en el mismo archivo para agregar/actualizar el resto de las variables tanto como se necesite.

Finalmente, establece la variable `CLIENT_LOCALE`  en tu archivo `.env`  en la configuración regional que quieres crear y estás listo.

## How to Structure Components

Si estás trabajando en una característica o en un error para el cliente de la app web, por ejemplo agregando unos nuevos elementos UI en la página de configuración, debes seguir las líneas de ayuda siguientes. Te ayudarán a preparar los componentes para localizarlo en todos los idiomas mundiales soportados.

### Componente funcional

```js
import { useTranslation } from 'react-i18next';

// en el método de renderizado:
const { t } = useTranslation();

// llamar la función "t" con una clave del archivo JSON:
<p>{t('key')}</p>; // más detalles abajo
```

### Componente de clase

```js
import { withTranslation } from 'react-i18next';

// withTranslation agregar la función "t" a props:
const { t } = this.props;

// llamar la función "t" con una clave del archivo JSON:
<h1>{t('key')}</h1> // más detalles abajo

// exportar sin redux:
export default withTranslation()(Component);

// o con renderizado:
export default connect(...)(withTranslation()(Component));
```

## Traducir utilizando la función "t"

### Traducción básica

```js
// en el componente:
<p>{t('p1')}</p>

// en el archivo JSON:
{
  "p1": "My paragraph"
}

// salida:
<p>My paragraph</p>
```

### Con datos dinámicos

```js
// en el componente:
const username = 'moT';

<p>{t('welcome', { username: username })}</p>

// en el archivo JSON:
{
  "welcome": "Welcome {{username}}"
}

// salida:
<p>Welcome moT</p>
```

Los ejemplos de arriba pasan un objeto a la función  `t` con una variable `username`. La variable deberá ser usada en el valor JSON donde está `{{username}}`.

## Traduce con el Componente `Trans`

La regla general es usar la función "t" cuando puedas. Pero hay un componente `Trans` para cuando eso no sea suficiente, generalmente cuando tienes un elemento insertado dentro del texto. Puedes usar el componente `Trans` con cualquier tipo de componente de react.

### Elementos básicos anidados

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
