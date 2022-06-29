# The Official freeCodeCamp Language Lead Handbook

This handbook will help you set up and use the tools for your localization efforts.

## How to invite new contributors to Ghost

Ghost allows you to set contributors with different levels of authorizations.

Most of your invites will be for the "Contributor" level. This level allows the user to create drafts.

The "Author" level allows the user to create Drafts and publish them.

The "Editor" level allows the user to access all Drafts and publish them.

The "Administrator" level is reserved for freeCodeCamp staff and Language Leads.

## How to mention the original author of a translated article

The original author and the original article are linked automatically adding this code to the Code Injection -> head section in the Draft Settings on ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

With `link` being the link of the original article.

## How to update Crowdin Glossary

> [!TIP]
> An updated glossary helps in having an homogeneous translation of technical terms.

The Crowdin Glossary is kept in the [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries) repository.

In the `glossaries` folder there are various `*.csv` (comma separated values) files, one for each of the crowdin projects that have a glossary that can be updated from this workflow.

The `client.csv` file is for the Learn User Interface project, the `curriculum.csv` file is for the Coding Curriculum project, the `docs.csv` file is for the Contributing Documentation project.

To update the Crowdin Glossaries you need to clone this repo locally. Open the `.csv` file with an appropriate program, for example Microsoft Excel.

In the `.csv` file you will find that the English language occupies the first three columns, `Term:English` is the column for the English term, `Description:English` is the column for the English description, and `Part:English` is for the part of speech (e.g., noun, verb etc.) of the term.

Then, each target language has two columns. If you translate to Dothraki, you will be interested in the columns `Term:Dothraki` and `Description:Dothraki`. The column `Term:Dothraki` is for the translation of the term in Dothraki, and the column `Description:Dothraki` is for a description of the term in Dothraki.

> [!TIP]
> In programs like Microsoft Excel you can hide the columns of the other languages to free up screen real-estate and see the English columns and the target language columns near each other.

After you have made the changes and saved the file, you will need to make a PR with the proposed changes. After the PR is accepted, you will need to run the GitHub Action workflow to update the Crowdin Glossary. Your glossary changes will not have immediate effects, but they will come.
