# Implementando nuevos idiomas en `/learn`

Antes de poder publicar un nuevo idioma, tendrás que permitir que los idiomas se descarguen de Crowdin.

## Actualizando los ajustes de Crowdin

En los proyectos `Curriculum` y `Learn UI`, necesitarás seleccionar `Project Settings` en la barra lateral. Luego, busca la opción `Language Mapping`, donde encontrarás la opción de añadir códigos personalizados para los idiomas. Añade una nueva entrada para el idioma que publicarás: seleccionando `language` como el valor de `Placeholder` e ingresando el nombre del idioma en minúsculas para el valor de `Custom code`. Si estás inseguro sobre qué nombre usar, contáctanos en nuestro chat para colaboradores y te ayudaremos.

## Actualizando Workflows

Necesitarás añadir una instrucción al documento `crowdin-download.client-ui.yml` y al documento `crowdin-download.curriculum.yml`.  Los pasos a seguir en los dos casos son iguales. Por ejemplo, si quisieras habilitar las descargas de Dothraki, la instrucción a añadir en los dos documentos sería:

```yml
##### Download Dothraki #####
- name: Crowdin Download Dothraki Translations
  uses: crowdin/github-action@master
  # options: https://github.com/crowdin/github-action/blob/master/action.yml
  with:
    # uploads
    upload_sources: false
    upload_translations: false
    auto_approve_imported: false
    import_eq_suggestions: false

    # downloads
    download_translations: true
    download_language: mis
    skip_untranslated_files: false
    export_only_approved: true

    push_translations: false

    # pull-request
    create_pull_request: false

    # global options
    config: './crowdin-config.yml'
    base_url: ${{ secrets.CROWDIN_BASE_URL_FCC }}

    # Uncomment below to debug
    # dryrun_action: true
```

Ten en cuenta que la opción `download_language` deberá corresponder al código del idioma que aparece en Crowdin.

## Habilitando un idioma

> [!NOTA] La sección anterior con la actualización de los flujos de trabajo debería estar completos antes de continuar, estos deben hacerse en pasos separados o las compilaciones fallarán.

Hay algunos pasos a seguir para permitirle a la base de código compilarse a tu idioma de preferencia.

Primero, visita el archivo `config/i18n/all-langs.ts` para añadir el idioma a la lista de idiomas disponibles y configurar los valores. Aquí hay varios objetos.

- `availableLangs`: Tanto para el array `client` y `curriculum`, añade el nombre del idioma. Este es el valor que será utilizado en el archivo `.env` después.
- `auditedCerts`: Añade el nombre del idioma como _key_ y añade un array de variables de `SuperBlocks.{cert}` como _value_. Esto le dice al cliente que certificaciones están traducidas completamente.
- `i18nextCodes`: Estos son los códigos de idioma ISO para cada lenguaje. Necesitarás añadir el código ISO correspondiente para el idioma que estás activando. Estos deben ser únicos para cada lenguaje.
- `LangNames`: Estos son los nombres mostrados para el selector de idiomas en el menú de navegación.
- `LangCodes`: Estos son los códigos de idiomas usados para formatear fechas y números. Estos deben ser códigos Unicode CLDR en vez de los códigos ISO.
- `hiddenLangs`: Estos idiomas no se mostrarán en el menú de navegación. Esto es usado para los idiomas que todavía no están listos para su lanzamiento.

Por ejemplo, si quisieras activar Dothraki como un idioma, tus objetos `all-langs.js` deberían verse así:

```js
export const availableLangs = {
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

export const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

export enum LangNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  dothraki: 'Dothraki'
};

export enum LangCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

export const hiddenLangs = ['dothraki'];
```

> [!NOTE] Cuando un lenguage ha sido configurado en el pipeline de despliegue Y se ha publicado como `/news`, puede ser quitado del arreglo `hiddenLangs` y puede ser disponible para el público.

A continuación, abre el archivo: `client/src/utils/algolia-locale-setup.ts`. Estos datos son utilizados por la barra de búsqueda que carga artículos de `/news`. Si bien es poco probable que vayas a probar esta funcionalidad, lea falta de datos para tu lenguaje puede llevarle a errores al intentar construir el código base localmente.

Agrega un objeto para al objeto `algoliaIndices`. Deberñias usar los mismos valores del objeto `english` para pruebas locales, remplazando la clave `english` con el valor `avalaibleLangs` para tu idioma.

> [!NOTE] Si ya hemos desplegado una instancia de noticias en tu destino de idioma, puedes actualizar los valores para reflejar la instancia real. De lo contracio, use los valores del inglés.

Si tuvieras que añadir el idioma Dothraki:

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
  },
  dothraki: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  }
};
```

### Liberando un Superblock

Después de que un superbloque haya sido completamente traducido a un idioma, hay dos pasos para hacer si queremos liberarlo. Primero, añada el enum de superbloque al arreglo `auditedCerts` de ese idioma. Por lo tanto, si quisieras añadir el nuevo superbloque "Responsive Web Design" para Dothraki, el arreglo debería verse así:

```ts
export const auditedCerts = {
  // otros lenguajes
  dothraki: [
    SuperBlocks.RespWebDesignNew, // el superbloque recién traducido superblock
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};
```

Finalmente, si el superbloque está en un estado "nuevo" (es decir, reemplazando un superbloque heredado), el arreglo `languagesWitAuditedBetaReleases` deberia ser actualizado para incluir el nuevo lenguaje de la siguiente manera:

```ts
export const languagesWithAuditedBetaReleases: ['english', 'dothraki'];
```

This will move the new superblock to the correct place in the curriculum map on `/learn`.

## Enabling Localized Videos

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

## Client UI

You will need to take an additional step to handle the client UI translations.

The Crowdin workflows will automatically pull down _some_ of the UI translations, but there are a couple of files that need to be moved manually.

You will want to copy the following files from `/client/i18n/locales/english` to `/client/i18n/locales/<your-language>`, and apply translations as needed:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Testing Translations Locally

If you would like to test translations locally, before adding them to our main repository - skip the Crowdin workflow changes. Follow the steps for enabling a language, then download the translations from Crowdin and load them into your local code.

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Update your `.env` file to use your new language for `CLIENT_LOCALE` and `CURRICULUM_LOCALE`.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] While you may perform translations locally for the purpose of testing, we remind everyone that translations should _not_ be submitted through GitHub and should only be done through Crowdin. Be sure to reset your local codebase after you are done testing.
