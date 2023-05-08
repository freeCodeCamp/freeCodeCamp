# How to Work on Documentation

## Work on the Content of the Docs

コントリビューションガイドラインを編集するには、`docs` [ディレクトリ](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs) のファイルを編集または追加します。 When your changes are merged, they will be made available automatically at the documentation site.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### How to Create an Internal Link

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// リンク先セクションが同じページ内にある場合、ファイル名を省略できます
[Link text](#target-section-heading-id)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### 内部リンクのあるドキュメントを翻訳する

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Work on the Docs Theme

> [!NOTE] A quick reminder that you do not need to set up anything for working on the content for the documentation site.
> 
> コントリビューションガイドラインを編集するには、[ドキュメントの内容に貢献する](#ドキュメントの内容に貢献する) セクションを参照してください。

### Structure of the Docs Website

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- このサイト向けのホームページのソースは、[`docs/index.html`](index.html) にあります。
- `docsify` と GitHub Pages を使用して、このファイルを SPA として提供します。
- The `docsify` script generates the content of `markdown` files in the `docs` directory on demand.
- ホームページは [`_coverpage.md`](_coverpage.md) から生成されます。
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Serving the Documentation Site Locally

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run the command below as needed from the root of the repo:

#### Serve and Launch the Documentation Site

```console
pnpm run docs:serve
```

> The documentation site should be available at <http://localhost:3400>
