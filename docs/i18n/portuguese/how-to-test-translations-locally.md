# Como testar traduções localmente

> [!NOTE] Esse processo não é obrigatório, mas documentado caso você queira visualizar como suas traduções ficarão.

Se você gostaria de testar suas traduções em uma instância local do site FreeCodeCamp `/learn`, primeiro certifique-se de que você [configurou a base de código](how-to-setup-freecodecamp-locally.md).

## Habilitando um idioma

Existem algumas etapas a serem seguidas para permitir que a base de código seja compilada no idioma desejado.

Primeiro, visite o arquivo `config/i18n/all-langs.ts` para adicionar o idioma à lista de idiomas disponíveis e configurar os valores. Existem quatro objetos aqui.

- `availableLangs`: tanto para o array `client` quanto para o array `curriculum`, adicione o nome do idioma. Esse valor é o que será usado no arquivo `.env` depois.
- `auditedCerts`: adicione o nome do texto do idioma como a _chave_ e adicione um array de variáveis `SuperBlocks.{cert}` como o _valor_. Isto informa ao cliente quais certificações estão totalmente traduzidas.
- `i18nextCodes`: esses são os códigos ISO de cada linguagem. Você vai precisar do código ISO apropriado para o idioma que você está habilitando. Eles precisam ser únicos para cada idioma.
- `LangNames`: esses são os nomes dos idiomas que aparecerão para a seleção no menu de navegação.
- `LangCodes`: esses são os códigos de idiomas usados para formatar datas e números. Esses deverão ser códigos Unicode CLDR ao invés de códigos ISO.

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
```

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

Por fim, em seu arquivo `.env`, definimos `CLIENT_LOCALE` e `CURRICULUM_LOCALE` com o valor de seu novo idioma (use o valor de `availableLangs`.)

```txt
CLIENT_LOCALE=dothraki
CURRICULUM_LOCALE=dothraki
```

### Liberar um superbloco

Após um superbloco ter sido totalmente traduzido para um idioma, há duas etapas necessárias para seu lançamento. Primeiro, adicione o enum do superblock ao array `auditedCerts` do idioma. Assim, se você quiser liberar o novo superbloco de Design Responsivo para a Web para o dothraki, o array deverá ter essa aparência:

```ts
export const auditedCerts = {
  // outros idiomas
  dothraki: [
    SuperBlocks.RespWebDesignNew, // o superbloco recém-traduzido
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
```

Por fim, o array `languagesWithAuditedBetaReleases` deve ser atualizado para incluir o novo idioma, assim:

```ts
export const languagesWithAuditedBetaReleases: ['english', 'dothraki'];
```

Isso moverá o novo superbloco para o lugar correto no mapa do currículo em `/learn`.

## Ativando vídeos localizados

Para os desafios em vídeo, você precisa fazer algumas alterações. Primeiro, adicione o novo idioma (locale) à consilta do GraphQL no arquivo `client/src/templates/Challenges/video/Show.tsx`. Por exemplo, para adicionar Dothraki à consulta:

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

## Carregando traduções

Como o idioma ainda não foi aprovado para produção, nossos scripts ainda não estão baixando automaticamente as traduções. Somente membros da equipe têm acesso para baixar as traduções diretamente – entre em contato conosco quando quiser em nossa [sala de chat dos contribuidores](https://discord.gg/PRyKn3Vbay) ou traduza os arquivos de markdown em inglês localmente para fins de teste.

Quando tiver os arquivos em mãos, você precisará colocá-los no diretório correto. Para os desafios do currículo, você deve colocar as pastas de certificação (por exemplo, `01-responsive-web-design`) no diretório `curriculum/challenges/{lang}`. Para nossas traduções em Dothraki, esse diretório seria `curriculum/challenges/dothraki`. Os arquivos `.json` de tradução do client vão no diretório `client/i18n/locales/{lang}`.

Quando estes arquivos estiverem no local certo, você deve poder usar `npm run develop` para ver sua versão traduzida do freeCodeCamp.

> [!ATTENTION] Embora você possa realizar as traduções localmente para fins de teste, lembramos a todos que as traduções _não_ devem ser enviadas pelo GitHub e devem ser feitas somente pelo Crowdin. Certifique-se de reiniciar sua base de código local após realizar os testes.
