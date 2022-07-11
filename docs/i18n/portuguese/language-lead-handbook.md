# O manual oficial para os líderes de cada idioma do freeCodeCamp

Este manual o ajudará a configurar e utilizar as ferramentas para seus esforços de localização.

## Como convidar novos colaboradores para o Ghost

O Ghost permite que você defina colaboradores com diferentes níveis de autorização.

A maioria de seus convites será para o nível "Contributor" (Colaborador). Esse nível permite que o usuário crie rascunhos. Selecione esta função ao convidar um novo tradutor.

O nível "Author" (Autor) permite ao usuário criar rascunhos e publicá-los.

O nível "Editor" permite ao usuário acessar todos os rascunhos e publicá-los. Selecione esta função ao convidar um novo revisor.

O nível "Administrator" (Administrador) é reservado para funcionários e líderes de idiomas do freeCodeCamp.

## Como mencionar o autor original de um artigo traduzido

O autor original e o artigo original são vinculados automaticamente, adicionando este código à seção de cabeçalho Code Injection -> em Draft Setiings (Configurações de rascunho) no Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Sendo `link` o link do artigo original.

## How to update trending articles

> [!TIP] Changing the articles in the footer at least once a month means giving a boost to the linked articles on google results.

There two places in which to change the trending articles.

- [The curriculum repository](https://github.com/freeCodeCamp/freeCodeCamp/)
- [The CDN repository](https://github.com/freeCodeCamp/cdn)

For each article you will need to create a shorter title to use in the footer.

### Change trending articles in the curriculum

The trending articles in the curriculum footer can be changed by editing the file at `client/i18n/locales/<language>/trending.json`.

This file is a `*.json` file that has the shape of an object with property keys in the shape `article0title` and `article0link`.

Each number rapresents one of the 30 articles in the footer. Make sure to match the title and the link correctly.

This is an example of how part of the `trending.json` file has to look.

```json
{
  "article0title": "Unire CSV con Python",
  "article0link": "https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/",
  "article1title": "Il comando Git push",
  "article1link": "https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/",
  "article2title": "Centrare immagini in CSS",
  "article2link": "https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/",
  "article3title": "I codici Alt",
  "article3link": "https://www.freecodecamp.org/italian/news/codici-alt/",
  "article4title": "Tenere a bada il footer",
  "article4link": "https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/",
  "article5title": "Cosa è un'API?",
  "article5link": "https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/",
  ...
}
```

You will want to [build the translated client locally](how-to-test-translations-locally.md) to see if the titles have the right length. Each title must stay on a single line and not go to a new line.

### How to update the trending articles in the cdn

The file in the cdn repository is the file `universal/trending/<language>.yaml`.

This file is shaped differently, for example here the file content for the first 6 articles:

```yaml
article0title: 'Unire CSV con Python'
article0link: 'https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/'
article1title: 'Il comando Git push'
article1link: 'https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/'
article2title: 'Centrare immagini in CSS'
article2link: 'https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/'
article3title: 'I codici Alt'
article3link: 'https://www.freecodecamp.org/italian/news/codici-alt/'
article4title: 'Tenere a bada il footer'
article4link: 'https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/'
article5title: 'Cosa è API?'
article5link: 'https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/'
```

You can convert from one format to the other carefully changing it manually. Or you can use [the script in this repl](https://replit.com/@Ieahleen/convert-json-to-yaml).

> [!TIP] A new workflow is being worked on, there will be only one place to change in the future.

## How to translate the motivational quotes

The motivational quotes can be found in the [curriculum repository](https://github.com/freeCodeCamp/freeCodeCamp/) in the `/client/i18n/locales/<language>/motivation.json` file.

This file has a general structure of:

```json
{
  "compliments": [],
  "motivationalQuotes": []
}
```

The compliments are the short sentences that appear at the completion of a challenge.

You don't need to directly translate the sentences used in English, you can write a set of short sentences that are appropriate to show at the completion of a challenge.

The `compliments` array is an array of strings, so for example you would write:

```json
{
  "compliments": ["A tutta birra!", "Pikachu, scelgo te!"],
  "motivationalQuotes": []
}
```

> [!TIP] You should start with at least a dozen compliments to have some variety when users complete challenges.

The motivational quotes are the quotes that appear at https://freecodecamp.org/learn.

The `motivationalQuotes` array is an array of objects, these objects should include a `quote` property and an `author` property. like this:

```json
{
  "compliments": [],
  "motivationalQuotes": [
    {
      "quote": "Se i costruttori costruissero come i programmatori programmano, il primo picchio che passa potrebbe distruggere la civiltà.",
      "author": "Artur Bloch, Seconda legge di Weinberg"
    },
    {
      "quote": "I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere.",
      "author": "Eric Steven Raymond"
    }
  ]
}
```

> [!TIP] You should start with at least a dozen quotes, to have some variety. A new quote is shown every time the user reload the page.

## How to update the common links

We maintain a file of common links used throughout our [curriculum site](https://github.com/freecodecamp/freecodecamp) in the `/client/i18n/locales/<language>/links.json` file.

Some of these links will not change - but you should update the `/news` article links to point to your language's translated version of that article when it is published.

You should also update the `help` categories to point to your language's subforum (usually `language/category`, like `Italiano/HTML-CSS`). This will allow campers to create "help posts" in the correct forum location.

## How to update the site meta-data

The site meta-data is in the `/client/i18n/locales/<language>/meta-tags.json` file. This file has five keys: `title`, `description`, `social-description`, `keywords`, and `youre-unsubscribed`.

The `youre-unsubscribed` value should be directly translated. The other values will need to be translated as closely as possible, while also considering common search terms and phrases used in your language.

If you need help with this, reach out to us in the [contributor chat](https://discord.gg/PRyKn3Vbay)

## Pre-Translate Workflow on Crowdin

The Pre-Translate workflow can be used to apply translations from the Translation Memory to strings.

> [!TIP] Really useful to restore a lot of translations from the Translation Memory in bulk when a lot of files have been updated.

You can find the Pre-Translation workflow at the top of the page in the console of a project. If you see "Go to console" in the upper right corner, click there first.

![go to console button](./images/crowdin/pre-translate2.png)

![pre-translate workflow](./images/crowdin/pre-translate1.png)

You can choose "From Machine Translation" or "From Translation Memory". Choose "Translation Memory" to recover translations from memory.

Then there are three steps to complete:

1. Files. Choose which files to translate, you can do all the project, or specific folders or files.
2. Languages. Set your language here.
3. Existing Translations. The best combination here is "100% match" and "Apply to untranslated strings only". Do not approve automatically, as it's always best to have a human eye on things.

![pre-translate existing translations](./images/crowdin/pre-translate3.png)

When you have finished settngs this, press the Pre-Translate button, and wait. It will alert you once it has finished. It will take more or less time depending on how many untranslated strings are present in the files you have choosen.

## Como atualizar o glossário do Crowdin

> [!TIP] Um glossário atualizado ajuda a ter uma tradução dos termos técnicos mais homogênea.

O glossário do Crowdin é mantido no repositório [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

Na pasta `glossaries` há vários arquivos `*.csv` (valores separados por vírgulas, um para cada um dos projetos no Crowdin que têm um glossário que pode ser atualizado a partir deste fluxo de trabalho.

O arquivo `client.csv` é para o projeto "Learn User Interface" (Interface de aprendizagem do usuário), `curriculum.csv` é para o projeto "Coding Curriculum" (Currículo de programação) e o arquivo `docs.csv` é para o projeto "Contributing Documentation" (Documentação colaborativa).

Para atualizar os glossários do Crowdin você precisa clonar este repositório localmente. Abra o arquivo `.csv` com um programa apropriado - por exemplo, o Microsoft Excel.

No arquivo `.csv`, que você verá que a língua inglesa ocupa as primeiras três colunas, `Term:English` é a coluna para o termo em inglês, `Description:English` é a coluna para a descrição em inglês e `Part:English` é para a classe gramatical (por exemplo, substantivo, verbo etc.) do termo.

Depois delas, cada idioma-alvo tem duas colunas. Se você traduzir para o Dothraki, estará interessado nas colunas `Term:Dothraki` e `Description:Dothraki`. A coluna `Term:Dothraki` é para a tradução do termo em Dothraki, enquanto a coluna `Description:Dothraki` é para uma descrição do termo em Dothraki.

> [!TIP] Em programas como o Microsoft Excel, você pode ocultar as colunas dos outros idiomas para liberar espaço em tela e ver as colunas em inglês e as colunas do idioma de destino ao lado umas das outras.

Após ter feito as alterações e salvo o arquivo, você precisará fazer um PR com as alterações propostas. Depois de o PR ter sido aceito, você precisará executar o fluxo de trabalho do GitHub Action para atualizar o glossário do Crowdin. Suas alterações no glossário não terão efeitos imediatos, mas aparecerão em breve.
