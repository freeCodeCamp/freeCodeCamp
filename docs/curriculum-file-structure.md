# Curriculum File Structure

Our core instructional content is located within the conveniently named `curriculum` directory. This page will break down how these files are organized.

## Terminology

There are a few terms we use when discussing our curriculum content.

- `certification` : When referring to a certification in this instance, it is talking about the actual certificate that users claim. Which is separate from the name of the superBlock.
- `superBlock` : A superblock is the top level collection of challenges. Each superblock corresponds to a certification in the curriculum (e.g. Responsive Web Design).
- `block` : A block is a section within a superblock. A block corresponds to a group of challenges in a given certification (e.g. Basic HTML and HTML5)
- `challenge` : A challenge is a single lesson within the curriculum (e.g. Say Hello to HTML Elements)

## File Tree

Using those terms, here is how the file structure would be defined:

<!-- prettier-ignore -->
```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## The `_meta` Directory

The `_meta` directory is a special directory which contains `.json` files. These files correspond to each block in the curriculum, and are used to determine which superBlock a block belongs to, and the order of the challenges within that block.

## Renaming Files

There may be times when you need to rename a certificate, superblock, block, or challenge. This section will outline the steps needed to avoid build errors when doing so.

> [!ATTENTION]
> Renaming files within the curriculum structure will often change the path (or URL) of the content on the main webpage. Doing so should be done with care, as redirects have to be set up for each change that is made.

### Renaming a Certification

When renaming a certification, you will likely want to rename the associated superblock along with it. Do the following to rename only the certificate:

1. Rename the `curriculum/challenges/_meta/{superBlock}-certificate` folder to the new name.
1. In the `meta.json` file of that folder, rename the values in `name`, `dashedName`, and `challengeOrder` to the new cert name.
1. In `curriculum/challenges/english/12-certificate`, rename the `{superBlock}-certificate` folder, and the YAML file within it, to the new name.
1. In the YAML file, change the `title` to the new name.
1. Rename the file and folder from step 3 for the rest of the curriculum languages.
1. Update `client/src/redux/index.ts` to use the correct `title`.
1. Optionally, update the `certSlug` for the superblock in the same file. **Note** that renaming a `certSlug` will change the URL for certifications and should only be done with careful consideration.
1. Update the `title` in `client/src/resources/cert-and-project-map.ts` to the new value. **Note** that changing the `title` here **will break** the superBlock page for the associated certification. It relies on the superBlock title to match the certification title. You will likely want to rename the superBlock at the same time.
1. If you renamed the `certSlug` in step 7, change it here for the cert and all the nested `projects` values.
1. In `config/certification-settings.js`, update the value of `certTypeTitleMap` to the new name.
1. If you renamed the `certSlug` in step 7, update the key of `certSlugTypeMap` in the same file.
1. Update the certificate name in the `legacyCerts` array of the `client/src/client-only-routes/show-project-links.tsx` if needed.
1. Update the main `README.md` file to the new name.

### Renaming a Superblock

> [!NOTE]
> When you rename a superBlock, the new folder name is used as the path and should be considered the "correct" name. All other values should be updated to reflect that change.

Also, you will likely want to rename the certificate and the `{superBlock}-projects` block when you rename a superBlock since they all share a name. To rename only a superBlock you need to:

1. Rename the superBlock folder in the `curriculum/challenges/english` directory.
1. Rename the superBlock folder in _all_ other `curriculum/challenges/{language}` directories.
1. For each block within that superBlock, update the `superBlock` value in the `meta.json` file to its dashedName. You don't need to rename any folders here. Do that when renaming a block.
1. Rename the superblock folder in `client/src/pages/learn`.
1. Update the `index.md` file in the above folder, changing the `title` and `superBlock` values to the new name.
1. For each block folder within the above, update the `index.md` to use the correct `superBlock` value.
1. In the `client/src/resources/cert-and-project-map.ts` file, update the path for the cert at the top of the file, and the `title` value for that superBlock. **Note** that changing the `title` here **will break** the ability to view the actual certification for this superBlock. It relies on the superBlock title to match the certification title. You will likely want to rename the certification at the same time.
1. Update the `superBlockCertTypeMap` key in `config/certification-settings.js` to the new superBlock name.
1. Update the path value in `client/src/assets/icons/index.tsx`.
1. For each language in `client/i18n/locales`, update the `intro.json` file to use the new superBlock `dashedName`. In the English file, also update the `title`.
1. Check the `config/i18n/all-langs.js` file to see if the superBlock is enabled in i18n builds. Update all the values where it is used.
1. Update the main `README.md` file to the new name.

### Renaming a Block

When renaming a curriculum block, you need to:

1. Change the name of the block folder in the `curriculum/challenges/english/{superBlock}` directory.
1. Change the name of the same block folder in _all_ of the other language directories to match. These must all be the same as the English structure or the build will error out.
1. Change the name of the block folder in the `_meta` directory.
1. Update the `name` and `dashedName` property for that block's `meta.json` file.
1. Update the `client/utils/help-category-map.json` to use the new block name as the key.
1. Update the block folder in `client/src/pages/learn/{superBlock}`.
1. In the `index.md` file of the above folder, update the `block` value in the frontmatter.
1. In the `client/i18n/locales/{language}/intro.json` files, update the block name to the new name for all the languages. In the English `intro.json` file, update the `title` as well.
1. Update the main `README.md` file to the new name.

### Renaming a Challenge

When renaming a single challenge file, you need to:

1. Change the name of the challenge file in the `curriculum/challenges/english` directory.
1. Change the name of the `title` and `dashedName` within that file.
1. Change the name of the file, and the `dashedName` in those files for _all_ of the other language directories to match.
1. Update the name of the challenge in the relevant `meta.json` file. The challenge names here are not used in the build, but provide a user-friendly way to identify the challenge order.
1. If the challenge is a certificate project, update the YAML file in `curriculum/english/12-certificates/<superBlock>` to the new name.
1. If the challenge is a certificate project, update the `title` and `link` in `client/src/resources/cert-and-project-map.ts`
1. If the challenge is a certificate project, update the main `README.md` file to the new name.

## The `dashedName` Property

The `dashedName` property is used to generate the URL path for the superblock, block, or challenge. These should generally match what the `/utils/slugs.js` helper would output for the file name.
