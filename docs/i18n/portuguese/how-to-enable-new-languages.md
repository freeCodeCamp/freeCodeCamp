# Implantar novos idiomas no `/learn`

Antes de lançar um novo idioma, você precisará permitir que os idiomas sejam baixados do Crowdin.

## Atualizar as configurações do Crowdin

Nos projetos `Curriculum` e `Learn UI`, você precisará selecionar `Projects Settings`, na barra lateral. Em seguida, desça até `Language Mapping`, onde você verá uma opção para adicionar códigos de idioma personalizados. Adicione uma nova entrada para o idioma que você está liberando, selecionando `language` como o valor de `Placeholder` e digitando um URL amigável em letras minúsculas do nome do seu idioma para o `Custom code`. Se você não tiver certeza do que usar, fale conosco pelo nosso chat de colaboradores e nós o ajudaremos.

## Atualizar os fluxos de trabalho

Você precisará adicionar um passo em `crowdin-download.client-ui.yml` e em `crowdin-download.curriculum.yml`. O passo para ambos será o mesmo. Por exemplo, se você quiser habilitar os downloads de Dothraki:

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

Observe que a chave `download_language` precisa ser definida como código do idioma exibido no Crowdin.

## Habilitar um idioma

> [!NOTE] A seção acima com a atualização dos fluxos de trabalho deve ser concluída antes de prosseguir - isso precisa ser feito em etapas separadas. Caso contrário, as compilações falharão.

Existem algumas etapas a serem seguidas para permitir que a base de código seja compilada no idioma desejado.

Primeiro, visite o arquivo `config/i18n/all-langs.ts` para adicionar o idioma à lista de idiomas disponíveis e configurar os valores. Existem vários objetos aqui.

- `availableLangs`: tanto para o array `client` quanto para o array `curriculum`, adicione o nome do idioma. Esse valor é o que será usado no arquivo `.env` depois.
- `auditedCerts`: adicione o nome do texto do idioma como a _chave_ e adicione um array de variáveis `SuperBlocks.{cert}` como o _valor_. Isto informa ao cliente quais certificações estão totalmente traduzidas.
- `i18nextCodes`: esses são os códigos ISO de cada linguagem. Você vai precisar do código ISO apropriado para o idioma que você está habilitando. Eles precisam ser únicos para cada idioma.
- `LangNames`: esses são os nomes dos idiomas que aparecerão para a seleção no menu de navegação.
- `LangCodes`: esses são os códigos de idiomas usados para formatar datas e números. Esses deverão ser códigos Unicode CLDR ao invés de códigos ISO.
- `hiddenLangs`: Esses idiomas não serão exibidos no menu de navegação. Isto é usado para idiomas que ainda não estão prontos para liberação.

Como um exemplo, se você tivesse que habilitar o idioma Dothraki como seu idioma, os objetos  `all-langs.js` devem ficar assim:

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

> [!NOTE] Quando um idioma for configurado no pipeline de implantação E tiver uma instância pública de `/news` ativa, ele pode ser removido da matriz `hiddenLangs` e ser disponibilizado ao público.

Agora, abra o arquivo `client/src/utils/algolia-locale-setup.ts`. Esse dado é usado para a barra de busca que carrega os artigos `/news`. Embora seja improvável que você venha a testar essa funcionalidade, não ter os dados para o seu idioma pode levar a erros quando tentar criar a base de código localmente.

Adicione um objeto para seu idioma no objeto `algoliaIndices`. Você deve usar os mesmos valores do objeto `english` para o teste local, substituindo a chave `english` pelo valor de `availableLangs` do seu idioma.

> [!NOTE] Se nós já implantamos uma instância do editorial em sua língua-alvo, você pode atualizar os valores para refletir a instância que já está implantada. Do contrário, use os valores em inglês.

Se você fosse adicionar Dothraki:

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

### Liberar um superbloco

Após um superbloco ter sido totalmente traduzido para um idioma, há duas etapas necessárias para seu lançamento. Primeiro, adicione o enum do superblock ao array `auditedCerts` do idioma. Assim, se você quiser liberar o novo superbloco de Design Responsivo para a Web para o dothraki, o array deverá ter essa aparência:

```ts
export const auditedCerts = {
  // other languages
  dothraki: [
    SuperBlocks.RespWebDesignNew, // the newly translated superblock
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};
```

Finalmente, se o superbloco estiver em um estado "new" (ou seja, substituindo um superbloco legado), o array de `languagesWithAuditedBetaReleases` deve ser atualizado para incluir o novo idioma, assim:

```ts
export const languagesWithAuditedBetaReleases: ['english', 'dothraki'];
```

Isso moverá o novo superbloco para o lugar correto no mapa do currículo em `/learn`.

## Ativando vídeos localizados

Para os desafios em vídeo, você precisa fazer algumas alterações. Primeiro, adicione o novo idioma (locale) à consulta do GraphQL no arquivo `client/src/templates/Challenges/video/Show.tsx`. Por exemplo, para adicionar Dothraki à consulta:

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

Em seguida, adicione um id para o novo idioma para qualquer desafio em vídeo em um bloco auditado. Por exemplo, se `auditedCerts` em `all-langs.ts` inclui `scientific-computing-with-python` para `dothraki`, você deve adicionar uma entrada em `dothraki` em `videoLocaleIds`. O frontmatter dever ter essa aparência:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
nomeComTracos: introducao-por-que-programa
---
```

Atualize a interface de `VideoLocaleIds` em `client/src/redux/prop-types` para que ela inclua o novo idioma.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Por fim, atualize o schema de desafios em `curriculum/schema/challengeSchema.js`.

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

## Interface do client

Você precisará dar um passo adicional para lidar com as traduções da interface do client.

Os fluxos de trabalho do Crowdin serão automaticamente puxados _algumas_ das traduções da UI, mas há alguns arquivos que precisam ser movidos manualmente.

Você vai querer copiar os seguintes arquivos de `/client/i18n/locales/english` para `/client/i18n/locales/<your-language>` e aplicar as traduções conforme necessário:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Testar traduções localmente

Se quiser testar as traduções localmente, antes de adicioná-las ao nosso repositório principal - pule as alterações de fluxo de trabalho do Crowdin. Siga as etapas para habilitar um idioma e, em seguida, baixe as traduções do Crowdin e as carregue em seu código local.

Como o idioma ainda não foi aprovado para produção, nossos scripts ainda não estão baixando automaticamente as traduções. Somente membros da equipe têm acesso para baixar as traduções diretamente – entre em contato conosco quando quiser em nossa [sala de chat dos contribuidores](https://discord.gg/PRyKn3Vbay) ou traduza os arquivos de markdown em inglês localmente para fins de teste.

Quando tiver os arquivos em mãos, você precisará colocá-los no diretório correto. Para os desafios do currículo, você deve colocar as pastas de certificação (por exemplo, `01-responsive-web-design`) no diretório `curriculum/challenges/{lang}`. Para nossas traduções em Dothraki, esse diretório seria `curriculum/challenges/dothraki`. Os arquivos `.json` de tradução do client vão no diretório `client/i18n/locales/{lang}`.

Atualize seu arquivo `.env` para usar seu novo idioma para `CLIENT_LOCALE` e `CURRICULUM_LOCALE`.

Quando estes arquivos estiverem no local certo, você deve poder usar `npm run develop` para ver sua versão traduzida do freeCodeCamp.

> [!ATTENTION] Embora você possa realizar as traduções localmente para fins de teste, lembramos a todos que as traduções _não_ devem ser enviadas pelo GitHub e devem ser feitas somente pelo Crowdin. Certifique-se de reiniciar sua base de código local após realizar os testes.

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
