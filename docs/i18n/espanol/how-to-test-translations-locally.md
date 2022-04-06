# Cómo probar las traducciones localmente

> [!NOTE] Este proceso no es requerido, pero esta documentado en caso de que quieras previsualizar como lucirán tus traducciones.

En caso de que quieras probar tus traducciones en una instancia local del sitio `/learn` de freeCodeCamp, primero asegúrate de haber [configurado la base de código](how-to-setup-freecodecamp-locally.md).

## Habilitando un lenguage

Hay algunos pasos a seguir para permitirle a la base de código compilar en tu lenguaje deseado.

Primero, visita el archivo `config/i18n/all-langs.ts` para agregar el idioma a la lista de lenguajes disponibles y configurar los valores. Hay cuatro objetos aquí.

- `avaliableLangs`: Tanto para el arreglo `client` como para el arreglo `curriculum`, añade el nombre en texto del lenguaje. Este es el valor que se utilizará en el archivo `.env` más tarde.
- `auditedCerts`: Add the text name of the language as the _key_, and add an array of `SuperBlocks.{cert}` variables as the _value_. Esto le dice al cliente qué certificaciones están totalmente traducidas.
- `i18nextCodes`: Estos son los codigos de idioma ISO para cada lenguaje. You will need to add the appropriate ISO code for the language you are enabling. These do need to be unique for each language.
- `langDisplayNames`: These are the display names for the language selector in the navigation menu.
- `langCodes`: These are the language codes used for formatting dates and numbers. These should be Unicode CLDR codes instead of ISO codes.

Por ejemplo, si quisieras habilitar Dothraki como un lenguaje, tus objetos `all-langs.js` deberían verse así:

```js
const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki'],
  curriculum: [
    'english',
    'espanol',
    'chinese',
    'chinese-traditional',
    'dothraki'
  ]
};

export const auditedCerts = {
  espanol: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis
  ],
  chinese: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  'chinese-traditional': [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  dothraki: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};

const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  dothraki: 'Dothraki'
};

const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};
```

Next, open the `client/src/utils/algolia-locale-setup.ts` file. Estos datos son utilizados por la barra de búsqueda que carga artículos de `/news` (noticias). Si bien es poco probable que pruebe esta funcionalidad, la falta de datos para su idioma puede provocar errores al intentar crear la base de código localmente.

Agregue un objeto para su idioma al objeto `algoliaIndices`. Debes usar los valores del objeto `english` para las pruebas locales, reemplazando la clave `english` con el valor `availableLangs` de tu idioma.

> [!NOTE] If we have already deployed an instance of news in your target language, you can update the values to reflect the live instance. Otherwise, use the English values.

Si tuvieras que agregar Dothraki:

```js
const algoliaIndices = {
  english: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  espanol: {
    name: 'news-es',
    searchPage: 'https://www.freecodecamp.org/espanol/news/search/'
  },
  chinese: {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search/'
  },
  'chinese-traditional': {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search'
  };
```

Finally, in your `.env` file, set `CLIENT_LOCALE` and `CURRICULUM_LOCALE` to your new language (use the `availableLangs` value.)

```txt
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## Habilitar Videos Localizados

For the video challenges, you need to change a few things. First add the new locale to the GraphQL query in the `client/src/templates/Challenges/video/Show.tsx` file. For example, adding Dothraki to the query:

```tsx
  query VideoChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      videoId
      videoLocaleIds {
        espanol
        italian
        portuguese
        dothraki
      }
      ...
```

Then add an id for the new language to any video challenge in an audited block. For example, if `auditedCerts` in `all-langs.ts` includes `scientific-computing-with-python` for `dothraki`, then you must add a `dothraki` entry in `videoLocaleIds`. The frontmatter should then look like this:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Update the `VideoLocaleIds` interface in `client/src/redux/prop-types` to include the new language.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

And finally update the challenge schema in `curriculum/schema/challengeSchema.js`.

```js
videoLocaleIds: Joi.when('challengeType', {
  is: challengeTypes.video,
  then: Joi.object().keys({
    espanol: Joi.string(),
    italian: Joi.string(),
    portuguese: Joi.string(),
    dothraki: Joi.string()
  })
}),
```

## Cargando traducciones

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://chat.freecodecamp.org/channel/contributors), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] While you may perform translations locally for the purpose of testing, we remind everyone that translations should _not_ be submitted through GitHub and should only be done through Crowdin. Be sure to reset your local codebase after you are done testing.
