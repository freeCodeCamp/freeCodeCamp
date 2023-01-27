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
  config
  └── i18n.ts
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
  │   │   └── translations.json
  ... ...
  │   ├── dothraki
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   └── translations.json
  ... ...
  │   ├── english
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   └── translations.json
  │   └── espanol
  │       ├── intro.json
  │       ├── links.json
  │       ├── meta-tags.json
  │       ├── motivation.json
  │       └── translations.json
  ├── locales.test.js
  ├── schema-validation.js
  └── validate-keys.ts
```

Some of these files are translated on our translation platform (Crowdin), some are translated or created via PR's on GitHub.

**Archivos traducidos en nuestra plataforma de traducción:**

- El archivo `translations.json` contiene la mayor parte del texto que aparece en los elementos de la interfaz de usuario. Las claves son usadas en el código base para obtener el texto correcto de cualquier lenguaje que sea seleccionado. Este archivo debe tener exactamente las mismas claves en todos los idiomas.

- El archivo `intro.json` contiene los pares clave-valor para el texto de introducción en las páginas de certificación.

  Si quieres añadir/actualizar las traducciones para las claves por favor lee [esta guía aquí.](https://freecodecamp.crowdin.com/how-to-translate-files.md).

**Archivos que NO son traducidos en nuestra plataforma de traducciones:**

- Los archivos  `motivation.json` no requieren que tengan las mismas comillas, complementos o tamaños u orden. Simplemente la misma estructura JSON.

- The `meta-tags.json` file contains the information for our website's meta tag information.

  Changes to these files are typically done by the staff team. If you see something out of the ordinary we recommend you reach us in the [contributors chat room](https://discord.gg/PRyKn3Vbay).

## Probando la app cliente en un idioma mundial

You can test the client app in any language available in the [list of `availableLangs` here](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts).

```js
export const availableLangs = {
  client: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTrandational,
    Languages.Italian,
    Languages.Portuguese,
    Languages.Ukrainian,
    Languages.Japanese,
    Languages.German,
    Languages.Arabic
  ],
  ...
};
```

Si estas probando un nuevo idioma, crea una carpeta con el nombre del idioma como titulo junto al otro idioma y copia los archivos JSON desde el otro idioma dentro de la nueva carpeta.

Add the new language to the `Languages` enum and the `client` array at the top of the [`config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts) file.

A continuación, sigue las instrucciones en los comentarios en el mismo archivo para agregar/actualizar el resto de las variables tanto como se necesite.

Finally, set the `CLIENT_LOCALE` variable in your `.env` file to the string of the locale you want to build from the `Languages` enum in the above file.

## Como estructurar los componentes

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
// en el componente
import { Trans } from 'react-i18next'

<p>
  <Trans>fcc.greeting</Trans>
</p>

// en el archivo JSON:
{
  "fcc": {
    "greeting": "Welcome to <strong>freeCodeCamp</strong>"
  }
}

// salida:
<p>Welcome to <strong>freeCodeCamp</strong></p>
```

Puedes colocar la clave dentro de la etiqueta del componente como en el ejemplo de arriba, si el texto contiene etiquetas "simples" sin atributos. `br`, `strong`, `i`, and `p` están por defecto, pero esa lista puede ser extendida en la configuración i18n.

### Elementos complejos anidados

En otros tiempos, querrás tener cierto texto dentro de otro elemento, una etiqueta de anclaje es un buen ejemplo:

```js
// en el componente:
<p>
  <Trans i18nKey='check-forum'>
    <a href='https://forum.freecodecamp.org/'>placeholder</a>
  </Trans>
</p>

// en el archivo JSON:
{
  "check-forum": "Check out <0>our forum</0>."
}

// salida:
<p>Check out <a href='https://forum.freecodecamp.org/'>our forum</a></p>
```

En el ejemplo de arriba, la clave es colocada en los atributos del componente `Trans`. El `<0>` y `</0>` en el JSON representa el primer hijo del componente, en este caso, el elemento ancla. Si hubiera más hijos, podrían contarlos después de que usen la misma sintaxis. Puedes encontrar el hijo de un componente en las herramientas dev de react inspeccionándolos. El `placeholder` están simplemente ahí debido a que el linter busca un elemento vacío `<a>`.

### Con una variable

```js
// en el componente:
const email = 'team@freecodecamp.org';

<p>
  <Trans email={email} i18nKey='fcc.email'>
    <a href={`mailto:${email}`}>
      {{ email }}
    </a>
  </Trans>
</p>

// en el archivo JSON:
{
  "fcc": {
    "email": "Send us an email at: <0>{{email}}</0>"
  }
}

// salida:
<p>Send us an email at: <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a><p>
```

En el ejemplo de arriba, la clave y la variable son establecidas en el atributo del componente  `Trans`. El `{{ email }}` necesita estar en algún lado del componente `Trans` tan bien, no importa donde.

## Cambiar texto

Para cambiar el texto de las cosas del lado del cliente, ve al archivo relevante `.json`, encuentra la clave que es usada en el componente React, y cambia el valor al nuevo texto que quieras. Deberías de buscar en la base del código para que esa clave para asegurarte de que no está siendo usada en ningún otro sitio. O, si es así, que el cambio tenga sentido en todos los sitios.

## Agregar texto

Si el texto que quieres añadir al cliente existe en el archivo pertinente, `.json`, usa la clave existente. En el caso contrario, crea una clave nueva.

El archivo English es la "fuente de la verdad" para todos los archivos `.json` que compartan el mismo nombre. Si necesitas añadir una nueva clave, añádela ahí. Después,  añade la clave **all** de los archivos  `translations.json`.

> [!NOTE] Utiliza texto en inglés para todos los idiomas si el archivo se traduce a través de Crowdin. La prueba se caerá si no lo haces.

Sería bueno mantener la clave en el mismo orden en todos los archivos también. Además, intenta poner todos los signos de puntuación, el espaciado, las comillas, etc. en los archivos JSON y no en los componentes o archivos del servidor.

> [!NOTE] El guion bajo (`_`) es un caracter especial para las claves en los archivos del lado del cliente. Vea  [the documentation](https://www.i18next.com/translation-function/plurals) de como debe ser usado.

## Documentación útil

- [Documentación de react-i18next ](https://react.i18next.com/latest/usetranslation-hook)
- [Documentación de i18next](https://www.i18next.com/translation-function/essentials)
