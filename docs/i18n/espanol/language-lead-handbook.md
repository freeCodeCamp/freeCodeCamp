# El manual oficial de liderazgo de idioma Freecodecamp

Este manual lo ayudará a configurar y utilizar las herramientas para sus esfuerzos de localización.

## Cómo invitar a los nuevos contribuyentes a Ghost

Ghost le permite establecer contribuyentes con diferentes niveles de autorizaciones.

La mayoría de tus invitaciones serán para el nivel de "Colaborador". Este nivel permite al usuario crear borradores. Selecciona este rol cuando invitas a un nuevo traductor.

El nivel "autor" permite al usuario crear borradores y publicarlos.

El nivel "Editor" permite al usuario acceder a todos los Borradores y publicarlos. Seleccione este rol al invitar a un nuevo revisor (proofreader).

El nivel "Administrador" está reservado para el personal de freeCodeCamp y los líderes de idiomas.

### How are the articles built

We use a [JAMStack](https://www.google.com/search?q=what+is+jamstack)-based approach to build and deploy the articles. This strategy makes for a speedy static site cached and served from a CDN.

[Ghost](https://ghost.org) acts as our content management platform, and [11ty](https://11ty.dev) builds the articles into static assets – plain HTML, JavaScript, and CSS. Only these static assets are deployed to our servers.

This process is automated and runs periodically. If you publish something now, it will be available on the news site in a few hours.

You can find the up-to-date build schedules and status here: https://github.com/freeCodeCamp/news#build

## Cómo mencionar al autor original de un artículo traducido

El autor original y el artículo original están vinculados automáticamente agregando este código a la Inyección de Código -> sección principal en la Configuración de Borradores en Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Con `link` siendo el enlace del artículo original.

## Cómo actualizar artículos en tendencia

> [!TIP] Cambiar los artículos en el pie de la página al menos una vez al mes significaria darle un impulso a los artículos vinculados con los resultados de Google.

Hay dos lugares en los que cambiar las tendencias de artículos.

- [El repositorio del currículo](https://github.com/freeCodeCamp/freeCodeCamp/)
- [El repositorio CDN](https://github.com/freeCodeCamp/cdn)

Para cada artículo necesitarás crear un título más corto para usar en el pie de página.

### Change trending articles in the curriculum

The trending articles in the curriculum footer can be changed by editing the file at `client/i18n/locales/<language>/trending.json`.

This file is a `*.json` file that has the shape of an object with property keys in the shape `article0title` and `article0link`.

Each number rapresents one of the 30 articles in the footer. Make sure to match the title and the link correctly.

Este es un ejemplo de cómo tiene que verse parte del archivo `trending.json`.

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

You will want to [build the translated client locally](how-to-enable-new-languages.md) to see if the titles have the right length. Each title must stay on a single line and not go to a new line.

### Cómo actualizar los artículos de tendencia en el cdn

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

## How to translate articles in the footer links

There are some links listed at the bottom of the footer (About, Alumni Network, Open Source etc.) and some of them can be translated into your language in the same way as other articles.

Articles that can be translated:

- About
- Support
- Academic Honesty
- Code of Conduct

The following articles should **not** be translated:

- Shop
- Sponsors
- Privacy Policy
- Terms of Service
- Copyright Policy

The following links are pointing to external sites and cannot be translated:

- Alumni Network
- Open Source

### Change the footer links in the news

Once you have translated and published the articles listed as "can be translated" above, you can update the links in the footer for `/news` by editing the file at `news/config/i18n/locales/<your language>/links.json` in the [freeCodeCamp/news](https://github.com/freeCodeCamp/news) repository.

> [!NOTE] Pull requests to this repository are currently limited to staff only. If you want to update this file, ask someone on the staff team for help.

Update the following part in the file:

```json
{
  ...
  "footer": {
    "about": "https://www.freecodecamp.org/news/about/",
    "support": "https://www.freecodecamp.org/news/support/",
    "honesty": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc": "https://www.freecodecamp.org/news/code-of-conduct/"
  }
}
```

### Change the footer links in the curriculum

When you have translated and published the articles listed as "can be translated" above, as well as when the curriculum in your language is ready for launch, you can update the links in the footer for `/learn` by editing the file at `client/i18n/locales/<your language>/links.json` in the [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) repository.

> [!WARNING] Only "About", "Support", "Academic Honesty", and "Code of Conduct" can be translated. Leave other URLs unchanged.

Update the following part in the file:

```json
{
  ...
  "footer": {
    "about-url": "https://www.freecodecamp.org/news/about/",
    "shop-url": "https://www.freecodecamp.org/shop/",
    "support-url": "https://www.freecodecamp.org/news/support/",
    "sponsors-url": "https://www.freecodecamp.org/news/sponsors/",
    "honesty-url": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc-url": "https://www.freecodecamp.org/news/code-of-conduct/",
    "privacy-url": "https://www.freecodecamp.org/news/privacy-policy/",
    "tos-url": "https://www.freecodecamp.org/news/terms-of-service/",
    "copyright-url": "https://www.freecodecamp.org/news/copyright-policy/"
  },
  ...
}
```

## How to translate the info boxes headers in the documentation

You can find these boxes all around the documentation:

> [!NOTE] I am a note box

> [!TIP] I am a tip box

> [!WARNING] I am a warning box

> [!ATTENTION] I am an attention box

By default, their headers appear in English even in the translated docs.

You can have the headers translated in the docs in your language by changing the file `docs/index.html`, in this way:

Inside the `script` element there is an object, find the `flexibleAlerts` property, which has this shape:

```js
flexibleAlerts: {
  note: {
    label: {
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/': 'Attention'
    }
  }
}
```

Inside the object of the label property, before the `'/'` property, you would add a new property for your language, like `/i18n/<language>/`.

For example, adding the translations for Portuguese would appear like this:

```js
flexibleAlerts: {
  note: {
    label: {
      '/i18n/portuguese/': 'Observação',
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/i18n/portuguese/': 'Dica',
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/i18n/portuguese/': 'Aviso',
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/i18n/portuguese/': 'Atenção',
      '/': 'Attention'
    }
  }
}
```

## Cómo traducir las citas motivacionales

The motivational quotes can be found in the [curriculum repository](https://github.com/freeCodeCamp/freeCodeCamp/) in the `/client/i18n/locales/<language>/motivation.json` file.

Este archivo tiene una estructura general de:

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

When you have finished setting this, press the Pre-Translate button and wait. It will alert you once it has finished. The time it takes depends on how many untranslated strings are in the chosen files.

## How to update Crowdin Glossary

> [!TIP] An updated glossary helps in having an homogeneous translation of technical terms.

The Crowdin Glossary is kept in the [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries) repository.

In the `glossaries` folder there are various `*.csv` (comma separated values) files, one for each of the crowdin projects that have a glossary that can be updated from this workflow.

The `client.csv` file is for the Learn User Interface project, the `curriculum.csv` file is for the Coding Curriculum project, the `docs.csv` file is for the Contributing Documentation project.

To update the Crowdin Glossaries you need to clone this repo locally. Open the `.csv` file with an appropriate program, for example Microsoft Excel.

In the `.csv` file you will find that the English language occupies the first three columns, `Term:English` is the column for the English term, `Description:English` is the column for the English description, and `Part:English` is for the part of speech (e.g., noun, verb etc.) of the term.

Then, each target language has two columns. If you translate to Dothraki, you will be interested in the columns `Term:Dothraki` and `Description:Dothraki`. The column `Term:Dothraki` is for the translation of the term in Dothraki, and the column `Description:Dothraki` is for a description of the term in Dothraki.

> [!TIP] In programs like Microsoft Excel you can hide the columns of the other languages to free up screen real-estate and see the English columns and the target language columns near each other.

After you have made the changes and saved the file, you will need to make a PR with the proposed changes. After the PR is accepted, you will need to run the GitHub Action workflow to update the Crowdin Glossary. Your glossary changes will not have immediate effects, but they will come.

## How to Promote a Contributor to Proofreader

If you consider that a contributor could become a Crowdin Proofreader, you can give the proofreader role to them in this way:

In Crowdin, individuate the `User management` on the left hand side menu.

This will open the user management tools, you will be able to see the list of all the users.

Search for the user that will become proofreader. Use the three dots menu on the user row to open a menu and select "Add to team". The proofreader teams have a standard name of `Proof Readers (<language>)`, you can search the team using the language name. Once you have selected the team, use the "ADD" button at the bottom of the page to finalize the thing.

The user is now a proofreader.

> [!TIP] The newly promoted proofreader could benefit from reading the [How to Proofread Files](how-to-proofread-files.md) documentation.
