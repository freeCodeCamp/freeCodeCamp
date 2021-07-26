# Como testar traduções localmente

> [!NOTE] Esse processo não é obrigatório, mas documentado caso você queira visualizar como suas traduções ficarão.

Se você gostaria de testar suas traduções em uma instância local do site FreeCodeCamp `/learn`, primeiro certifique-se de que você tem que [configurar a base de código](how-to-setup-freecodecamp-locally.md).

## Habilitando um idioma

Existem algumas etapas a serem seguidas para permitir que a base de código seja compilada no idioma desejado.

Primeiro, visite o arquivo `config/i18n/all-langs.js` para adicionar o idioma à lista de idiomas disponíveis e configurar os valores. Existem quatro objetos aqui.

- `availableLangs`: tanto para o array `client` quanto para o array `curriculum`, adicione o nome do idioma. Esse valor é o que será usado no arquivo `.env` depois.
- `i18nextCodes`: esses são os códigos ISO de cada linguagem. Você vai precisar do código ISO apropriado para o idioma que você está habilitando. Eles precisam ser únicos para cada idioma.
- `langDisplayNames`: esses são os nomes dos idiomas que aparecerão para a seleção no menu de navegação.
- `langCodes`: esses são os códigos de idiomas usados para formatar datas e números. Esses deverão ser códigos Unicode CLDR ao invés de códigos ISO.

Como um exemplo, se você tivesse que habilitar o idioma Dothraki como seu idioma, os objetos  `all-langs.js` devem ficar assim:

```js
const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki'],
  curriculum: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki']
};

const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  'dothraki': 'mis',
};

const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  'dothraki': 'Dothraki',
};

const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  'dothraki': 'mis',
};
```

Agora, abra o arquivo `client/src/utils/algolia-locale-setup.js`. Esse dado é usado para a barra de busca que carrega os artigos `/news`. Embora seja improvável que você venha a testar essa funcionalidade, não ter os dados para o seu idioma pode levar a erros quando tentar criar a base de código localmente.

Adicione um objeto para seu idioma no objeto `algoliaIndices`. Você deve usar os valores do objeto `english` para o teste local, substituindo a chave `english` pelo valor de `availableLangs` do seu idioma.

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
  },
};
```

Depois, você precisará informar ao client quais certificações estão traduzidas e quais ainda estão em inglês. Abra o arquivo `utils/is-audited.js`. Dentro de `auditedCerts`, adicione uma nova chave com o valor de `availableLangs` de seu idioma. Atribua o valor daquela chave a um array que contém os *nomes hifenizados* para as certificações foram traduzidas. Consulte os dados existentes para aqueles nomes hifenizados.

Dando continuidade ao trabalho para habilitar o idioma Dothraki – traduzimos as três primeiras certificações:

```js
const auditedCerts = {
  espanol: [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures'
  ],
  chinese: [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-libraries',
    'data-visualization',
    'apis-and-microservices',
    'quality-assurance'
  ],
  'chinese-traditional': [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-libraries',
    'data-visualization',
    'apis-and-microservices',
    'quality-assurance'
  ],
  'dothraki': [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-libraries'
  ]
};
```

Por fim, em seu arquivo `.env`, definimos `CLIENT_LOCALE` e `CURRICULUM_LOCALE` com o valor de seu novo idioma (use o valor de `availableLangs`.)

```txt
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## Carregando traduções

Como o idioma ainda não foi aprovado para produção, nossos scripts ainda não estão baixando automaticamente as traduções. Somente membros da equipe têm acesso para baixar as traduções diretamente – entre em contato conosco quando quiser em nossa [sala de chat dos contribuidores](https://chat.freecodecamp.org/channel/contributors) ou traduza os arquivos de markdown em inglês localmente para fins de teste.

Quando tiver os arquivos em mãos, você precisará colocá-los no diretório correto. Para os desafios do currículo, você deve colocar as pastas de certificação (por exemplo, `01-responsive-web-design`) no diretório `curriculum/challenges/{lang}`. Para nossas traduções em Dothraki, esse diretório seria `curriculum/challenges/dothraki`. Os arquivos `.json` de tradução do client vão no diretório `client/i18n/locales/{lang}`.

Quando estes arquivos estiverem no local certo, você deve poder usar `npm run develop` para ver sua versão traduzida do freeCodeCamp.

> [!ATTENTION] Embora você possa realizar as traduções localmente para fins de teste, lembramos a todos que as traduções *não* devem ser enviadas pelo GitHub e devem ser feitas somente pelo Crowdin. Certifique-se de reiniciar sua base de código local após realizar os testes.
