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

Esto moverà el nuevo superblock al lugar correcto ubicar en el mapa curricular en `/learn`.

## Habilitar Videos Localizados

Para los desafìos de video, debe cambiar algunas cosas. Primero agregue la nueva configuración regional a la consulta de GraphQL en el archivo `client/src/templates/Challenges/video/Show.tsx`. Por ejemplo, agregando a Dothraki para la consulta:

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

Luego agregue un ID para el nuevo idioma a cualquier desafío de video en un bloque auditado. Por ejemplo, si `auditedCerts` en `all-langs.ts` incluye  `scientific-computing-with-python` para  `dothraki`, luego debe agregar una entrada  `dothraki` en  `videoLocaleIds`. La parte delantera debería verse así:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Actualice la interfaz  `VideoLocaleIds` en  `client/src/redux/prop-types` para incluir el nuevo idioma.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Y finalmente actualice el esquema de desafío en  `curriculum/schema/challenge/challengeSchema.js`.

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

## IU del cliente

Necesitará dar un paso adicional para manejar las traducciones de la interfaz de usuario del cliente.

Los flujos de trabajo de Crowdin bajarán automáticamente  _algunas_ traducciones de la interfaz de usuario, pero hay un par de ficheros que necesitan ser movidos manualmente.

Usted quedrá copiar los siguientes archivos desde `/client/i18n/locales/english` a `/client/i18n/locales/<your-language>` y aplicar las traducciones según sea necesario:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Pevisualiza las traducciones localmente

Si desea probar las traducciones localmente, antes de añadirlas a nuestro repositorio principal, salte los cambios del flujo de trabajo de Crowdin. Siga los pasos para activar un idioma, luego descargue las traducciones de Crowdin y cargue las traducciones en su código local.

Como el lenguaje no ha sido aprovado para producción, nuestros scripts aún no descargan las traducciones de manera automática. Sólo el personal tiene acceso a la descarga directa de traducciones. Eres bienvenido a comunicarte con nosotros en nuestra [contributors chat room](https://discord.gg/PRyKn3Vbay), o puedes traducir los archivos markdown localmente con razones de testeo.

Una vez que poseas los archivos, necesitarás colocarlos en el directorio correcto. Para los desafíos de currículum, deberías colocar las carpetas de certificación (i.e. `01-responsive-web-design`) dentro del directorio `curriculum/challenges/{lang}`. Para nuestras traducciones al Dothraki, deberia ser `curriculum/challenges/dothraki`. La traducción del cliente `.json` archivos irá al directorio `client/i18n/locales/{lang}`.

Actualice su archivo `.env` para usar su nuevo idioma para `CLIENT_LOCALE` y `CURRICULUM_LOCALE`.

Una vez que estos esten en su lugar, deberías ser capaz de correr `npm run develop` para ver tu versión traducida de freeCodeCamp.

> [!ATTENTION] Si bien puedes realizar traducciones localmente con motivos de prueba, le recordamos a todos que las traducciones _no_ deben ser enviadas a través de GitHub, estas deben ser enviadas únicamente a traves de Crowdin. Asegúrate de reestablecer tu base de código local despues de que hayas finalizado con las pruebas.

# Deploying New Languages on `/news`

To deploy News for a new language, you'll need to create two PRs. One PR will be to the [CDN repo](https://github.com/freeCodeCamp/cdn), and the other will be to the [News repo](https://github.com/freeCodeCamp/news).

## Prep the CDN Repo for the New Language

News sources trending links and article titles from our CDN during the build and adds them to the footer. News also fetches Day.js files from the CDN during the build to localize dates and times for each language.

### Add a YAML File for Trending Articles

Clone the [CDN repo](https://github.com/freeCodeCamp/cdn) and create a new branch.

In the [`build/universal/trending`](https://github.com/freeCodeCamp/cdn/tree/main/build/universal/trending) directory, create a new file and name it `language.yaml`. For example, if you are launching Dothraki News, name the file `dothraki.yaml`.

Then copy the contents of the [`english.yaml`](https://github.com/freeCodeCamp/cdn/blob/main/build/universal/trending/english.yaml) trending file and paste it into the new YAML file you just created.

The contents will look something like this:

```yaml
article0title: 'Learn JavaScript'
article0link: 'https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/'
article1title: 'Linux ln Example'
article1link: 'https://www.freecodecamp.org/news/linux-ln-how-to-create-a-symbolic-link-in-linux-example-bash-command'
article2title: 'JS document.ready()'
article2link: 'https://www.freecodecamp.org/news/javascript-document-ready-jquery-example/'
article3title: ...
article3link: ...
  ...
```

### Add a Day.js Locale File for the New Language

By default, Day.js only includes English as a locale. To enable it to work with other languages, you need to add a new Day.js locale file to the CDN.

In the [`build/news-assets/dayjs/<version>/locale`](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) directory, create a new file and name it `isocode.min.js`. For example, if you are launching Dothraki News, name the file `mis.min.js`.

> [!NOTE] The version number will change as the dependencies are updated.

Then, visit [this page on cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) with all available Day.js files for the version we're using, find the `https://cdnjs.cloudflare.com/ajax/libs/dayjs/<version>/locale/isocode.min.js` link for the new language, and open it in a new tab.

> [!NOTE] You only need to add the .../dayjs/\<version\>/_locale_/isocode.min.js locale file. You do not need to add any other Day.js files.

Copy the Day.js locale code from the new tab into the new file you created. For example, here is an un-minified version of the English locale code for Day.js:

```js
!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define(n)
    : (e.dayjs_locale_en = n());
})(this, function () {
  'use strict';
  return {
    name: 'en',
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_'
    ),
    months:
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      )
  };
});
```

Then open a PR to the CDN repo to add both the YAML and Day.js files for review.

## Prep the News Repo for the New Language

The [News repo](https://github.com/freeCodeCamp/news) pulls data from a Ghost instance, the files you added to the CDN, builds News, and deploys it.

> [!WARN] Pull requests to the news repo _must_ come from the same repo. You should not work off of a fork for this step.

### Modify the Main Config File

Clone the News repo and create a new branch.

Open the `config/index.js` file to add the new language and configure the necessary values. There are a few objects and arrays to modify:

- `locales`: This array contains the active and upcoming News languages. These are the values that are used in the `.env` file to choose the Ghost instance and UI to use for each build. Add the text name of the new language in lowercase to this array.
- `localeCodes`: This object is a map of ISO codes for each language, and is used to configure i18next before building the UI. To add a new language, use the lowercase language name as the _key_ and the ISO 639-1 language code as the _value_.
- `algoliaIndices`: This object is a map of Algolia indices for each language. To add a new language, use the lowercase language name as the _key_, and `news-` followed by the lowercase ISO 639-1 language code as the _value_.

> [!NOTE] If you are unsure about the string to use while setting `algoliaIndices`, send a message to Kris (@scissorsneedfoodtoo), or someone else with access to Algolia, and ask them to check.

For example, if you are launching Dothraki News, here are what the objects / arrays above should look like:

```js
const locales = ['arabic', 'bengali', 'chinese', 'english', 'dothraki'];

const localeCodes = {
  arabic: 'ar',
  bengali: 'bn',
  chinese: 'zh',
  english: 'en',
  dothraki: 'mis'
};

const algoliaIndices = {
  arabic: 'news-ar',
  bengali: 'news-bn',
  chinese: 'news-zh',
  english: 'news',
  dothraki: 'news-mis'
};
```

### Add the i18next JSON Files for the New Language

Next, go to the `config/i18n/locales` directory, create a new folder, and give it the name of the new language you're adding. For example, if you're launching Dothraki News, create a new folder named `dothraki`.

Then copy the JSON files from the `english` directory to your new folder.

In your new folder, open the `serve.json` file and replace its contents with the following:

```json
{
  "redirects": []
}
```

Then commit and push your branch directly to the News repo.

> [!NOTE] You need to be on one of the teams with access to the News repo to push branches directly to News. Currently, only the dev, i18n, and staff teams are allowed to do this.

Finally, open a PR for review.

Once both your PRs to the CDN and News repo have been approved, they can be merged. Deployment will be handled subsequently by the staff.
