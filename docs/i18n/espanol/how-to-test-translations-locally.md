# Cómo probar las traducciones localmente

> [!NOTE] Este proceso no es requerido, pero esta documentado en caso de que quieras previsualizar como lucirán tus traducciones.

En caso de que quieras probar tus traducciones en una instancia local del sitio `/learn` de freeCodeCamp, primero asegúrate de haber [configurado la base de código](how-to-setup-freecodecamp-locally.md).

## Habilitando un lenguage

Hay algunos pasos a seguir para permitirle a la base de código compilar en tu lenguaje deseado.

Primero, visita el archivo `config/i18n/all-langs.ts` para agregar el idioma a la lista de lenguajes disponibles y configurar los valores. Hay cuatro objetos aquí.

- `avaliableLangs`: Tanto para el arreglo `client` como para el arreglo `curriculum`, añade el nombre en texto del lenguaje. Este es el valor que se utilizará en el archivo `.env` más tarde.
- `auditedCerts`: Agrega el nombre del texto como la _clave_, y añade un arreglo de variables de `SuperBlocks.{cert}` como el _value_. Esto le dice al cliente qué certificaciones están totalmente traducidas.
- `i18nextCodes`: Estos son los codigos de idioma ISO para cada lenguaje. Necesitarás añadir el código ISO apropiado para el idioma que estás activando. Estos deben ser únicos para cada lenguaje.
- `langDisplayNames`: Estos son los nombres que se muestran en el selector de idioma en el menú de navegación.
- `langCodes`: Estos son los códigos de idioma utilizados para el formateo de fechas y números. Estos deben ser códigos CLDR Unicode en lugar de códigos ISO.

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

A continuación, abre el archivo `client/src/utils/algolia-locale-setup.ts` file. Estos datos son utilizados por la barra de búsqueda que carga artículos de `/news` (noticias). Si bien es poco probable que pruebe esta funcionalidad, la falta de datos para su idioma puede provocar errores al intentar crear la base de código localmente.

Agregue un objeto para su idioma al objeto `algoliaIndices`. Debes usar los valores del objeto `english` para las pruebas locales, reemplazando la clave `english` con el valor `availableLangs` de tu idioma.

> [!NOTE] Si ya hemos desplegado una instancia de noticias en tu idioma de destino, puedes actualizar los valores para reflejar la instancia real. De lo contrario, utiliza los valores en inglés.

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

Finalmente, en tu archivo  `.env`, configura `CLIENT_LOCALE` y `CURRICULUM_LOCALE` a tu nuevo lenguaje (usa el valor `availableLangs`)

```txt
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## Habilitar Videos Localizados

Para los desafíos de vídeo, tienes que cambiar algunas cosas. Primero agregue la nueva configuración regional a la consulta GraphQL en el archivo `client/src/templates/Challenges/video/Show.tsx`. Por ejemplo, agregando Dothraki a la consulta:

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

Luego, agregue una identificación para el nuevo idioma a cualquier desafío de video en un bloque auditado. Por ejemplo, si `auditedCerts` en `all-langs.ts` incluye `scientific-computing-with-python` para `dothraki`, luego debe agregar una entrada `dothraki` en `videoLocaleIds`. La portada debería verse así:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Actualice la interfaz `VideoLocaleIds` en `client/src/redux/prop-types` para incluir el nuevo idioma.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Y finalmente actualice el esquema de desafío en `curriculum/schema/challengeSchema.js`.

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

Como el lenguaje no ha sido aprovado para producción, nuestros scripts aún no descargan las traducciones de manera automática. Sólo el personal tiene acceso a la descarga directa de traducciones. Eres bienvenido a comunicarte con nosotros en nuestra [sala de chat para contribuidores](https://chat.freecodecamp.org/channel/contributors), o puedes traducir los archivos markdown localmente con razones de testeo.

Una vez que poseas los archivos, necesitarás colocarlos en el directorio correcto. Para los retos del plan de estudios, debe colocar las carpetas de certificación (por ejemplo, `01-responsive-web-design`) dentro del directorio `curriculum/challenges/{lang}`. En el caso de nuestras traducciones al dothraki, sería `curriculum/challenges/dothraki`. Los archivos `.json` del cliente deberán colocarse en el directorio `client/i18n/locales/{lang}`.

Una vez que estos esten en su lugar, deberías ser capaz de correr `npm run develop` para ver tu versión traducida de freeCodeCamp.

> [!ATTENTION] Si bien puedes realizar traducciones localmente con motivos de prueba, le recordamos a todos que las traducciones _no_ deben ser enviadas a través de GitHub, estas deben ser enviadas únicamente a traves de Crowdin. Asegúrate de reestablecer tu base de código local despues de que hayas finalizado con las pruebas.
