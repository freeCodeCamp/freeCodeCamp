# How to Work on Localized Client Webapp

The React-based client web app that powers our learning platform is built using Gatsby. Ele é traduzido em vários idiomas do mundo todo usando [react-i18next](https://react.i18next.com/) e  [i18next](https://www.i18next.com/).

Você pode aprender mais sobre configurar o cliente localmente para desenvolvimento seguindo [nosso guia de configuração aqui](how-to-setup-freecodecamp-locally.md). By default, the application is available only in English.

Once you have set up the project locally you should be able to follow this documentation to run the client in the language of your choice from the list of available languages.

Isso pode ser de grande ajuda quando você estiver trabalhando em uma nova feature que envolva tradução, em especial, e que necessite que você valide, por exemplo, uma label de botão em um idioma diferente.

> [!TIP] Você não precisa seguir esse documento para traduzir o currículo do freeCodeCamp ou contribuir com a documentação. Em vez disso, leia [esse guia aqui](how-to-translate-files.md).

Vamos entender como o framework i18n e suas ferramentas funcionam.

## Estrutura de arquivos

Most of the files for translating the platform are located in the [`client/i18n`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n) folder. Cada idioma tem uma pasta contendo arquivos JSON com as traduções.

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

Some of these files are translated on our translation platform (Crowdin) and some are translated or created via PR's on GitHub.

**Arquivos traduzidos na nossa plataforma de tradução:**

- O arquivo `translations.json` contém a maioria do texto que aparece nos elementos de interface de usuário. As chaves são usadas na base de código para obter o texto correto para qualquer idioma definido. This file needs to have the same keys in all languages.

- O arquivo `intro.json` contém os pares chave-valor para o texto de introdução nas páginas de certificação.

  Se você deseja adicionar/atualizar traduções para as chaves, [leia este guia aqui](how-to-translate-files.md).

**Arquivos NÃO traduzidos na nossa plataforma de tradução:**

- Os arquivos `motivation.json` não precisam ter as mesmas citações, elogios ou comprimento de array. Apenas a mesma estrutura do JSON.

- O arquivo `meta-tags.json` contém as informações para a tag meta do nosso site.

  Mudanças nesses arquivos são tipicamente feitos pelo time da staff. Se você vir algo fora do ordinário, nós recomendamos que você nos contate na [sala de chat dos contribuidores](https://discord.gg/PRyKn3Vbay).

## Testing the Client App in a World Language

Você pode testar o client app em qualquer linguagem disponível na [lista de idiomas disponíveis, `availableLangs`, aqui](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts).

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

Se você estiver testando um idioma novo, crie uma pasta com o nome do idioma como título próximo dos outros idiomas e copie os arquivos JSON de outro idioma para a sua pasta.

Adicione o novo idioma ao enum `Languages` e ao array `client` no topo do arquivo [`config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts).

A seguir, siga as instruções nos comentários dentro do mesmo arquivo para adicionar/atualizar o rest das variáveis se necessário.

Por fim, defina a variável `CLIENT_LOCALE` no seu arquivo `.env` arquivo para a string do idioma cujo build você deseja fazer a partir do enum `Languages` no arquivo acima.

## Como estruturar os componentes

Se você estiver trabalhando em uma feature ou em um bug para o cliente web, por exemplo: adicionado novos itens de IU na pagina de configuração, você deve seguir as diretrizes abaixo. Elas vão te ajudar a preparar os componentes para tradução em todos os idiomas mundiais suportados.

### Componente funcional

```js
import { useTranslation } from 'react-i18next';

// in the render method:
const { t } = useTranslation();

// call the "t" function with a key from the JSON file:
<p>{t('key')}</p>; // more details below
```

### Componente de classe

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

## Traduza usando a função "t"

### Tradução básica

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

### Com dados dinâmicos

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

O exemplo acima passa um objeto para a função `t` com uma variável `username`. A variável será usada no valor JSON onde `{{username}}` está.

## Traduza com o componente `Trans`

A regra geral é usar a função "t" quando puder. Mas existe o componente `Trans` para quando isso não for o suficiente, geralmente quando você tem elementos embutidos no texto. Você pode usar o componente `Trans` com qualquer tipo de componente React.

### Elementos básicos aninhados

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

You can place the key inside the component tags like in the above example if the text contains "simple" tags with no attributes. `br`, `strong`, `i` e `p` são padrões, mas essa lista pode ser expandida na configuração do i18n.

### Elementos complexos aninhados

Em outras situações, você vai querer ter um texto específico dentro de outro elemento, uma tag "a" é um bom exemplo:

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

No exemplo acima, a chave é definida nos atributos do componente `Trans`. O `<0>` e `</0>` no JSON representam o primeiro filho do componente, neste caso, o elemento âncora. Se há mais filhos, eles apenas vão se somar ali usando a mesma sintaxe. Você pode encontrar os filhos de um componente na ferramenta de desenvolvedor React fazendo uma inspeção. `placeholder` está ali pois o linter estava reclamando sobre um elemento `<a>` vazio.

### Com uma variável

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

No exemplo acima, a chave e a variável estão configuradas nos atributos do componente `Trans`. `{{ email }}` precisa estar em algum lugar no componente `Trans` também, não importa aonde.

## Mudando texto

Para mudar o texto no lado do cliente, vá para o arquivo `.json`, ache a chave usada no componente React, e mude o valor para o novo texto que você deseja. Você deve pesquisar na base do código por aquela chave para ter certeza de que não está sendo usada em outro lugar. Ou, se está, se as mudanças fazem sentido em todos os lugares.

## Adicionando texto

Se o texto que você deseja adicionar ao cliente existe no arquivo `.json`, use a chave existente. Caso contrário, crie uma nova chave.

O arquivo em inglês é a "fonte da verdade" para todos os arquivos `.json` que compartilham o mesmo nome. Se você precisa adicionar uma nova chave, a adicione lá. Então, adicione a chave em **todos** os arquivos `translations.json`.

> [!NOTE] Use texto em inglês para todos os idiomas se o arquivo está sendo traduzido via Crowdin. Os testes vão falhar se você não fizer isso.

Seria bom manter as chaves na mesma ordem entre todos os arquivos também. Além disso, tente colocar toda a pontuação, espaçamento, citações e tudo mais nos arquivos JSON, não nos componentes ou arquivos de servidor.

> [!NOTE] The underscore (`_`) is a reserved character for keys in the client-side files. Veja [a documentação](https://www.i18next.com/translation-function/plurals) para saber como são usados.

## Documentação útil

- [documentação react-i18next](https://react.i18next.com/latest/usetranslation-hook)
- [documentação i18next](https://www.i18next.com/translation-function/essentials)
