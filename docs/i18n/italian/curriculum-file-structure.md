# Struttura dei file del curriculum

Il nostro contenuto educativo centrale è situato nella cartella chiamata convenientemente `curriculum`. Questa pagina analizzerà come questi file sono organizzati.

## Terminologia

Questi sono alcuni termini che usiamo quando discutiamo il contenuto del nostro curriculum.

- `certification` : Quando riferito a una certificazione in questa istanza, sta parlando del certificato che gli utenti richiedono. Che è separato dal nome del superBlock.
- `superBlock` : Un superblock è il raggruppamento superiore di sfide. Ogni superblock corrisponde a una certificazione nel curriculum (per esempio Web Design Responsivo).
- `block` : Un block è una sezione in un superblock. Un blocco corrisponde a un gruppo di sfide in una certa certificazione (per esempio HTML Base e HTML5)
- `challenge` : Una sfida è una singola lezione nel curriculum (per esempio Fare conoscenza con gli elementi HTML)

## Albero dei file

Usando quei termini, ecco come la struttura dei file viene definita:

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

## La cartella `_meta`

La cartella `_meta` è una cartella speciale che contiene dei file `.json`. Questi file corrispondono ad ogni blocco nel curriculum e sono usati per determinare a quale superblocco corrisponde un certo blocco, e l'ordine delle sfide in quel blocco.

## Rinominare i file

Ci potrebbero essere volte in cui devi rinominare un certificato, superblocco, blocco o sfida. Questa sezione delinea gli step necessari per evitare errori di build nel farlo.

> [!ATTENTION] Rinominare i file nella struttura del curriculum spesso cambia il percorso (o l'URL) del contenuto sulla pagina web principale. Questo è da fare con cura, poiché bisogna configurare reindirizzamenti per ogni cambiamento che viene fatto.

### Rinominare una certificazione

Quando rinomini una certificazione, vorrai probabilmente rinominare il superblocco associato. Fai quanto segue per rinominare solo il certificato:

1. Rinomina la cartella `curriculum/challenges/_meta/{superBlock}-certficate` con il nuovo nome.
1. Nel file `meta.json` di quella cartella, rinomina i valori in `name`, `dashedName`, e `challengeOrder` con il nuovo nome.
1. In `curriculum/challenges/english/12-certificate`, rinomina la cartella `{superBlock}-certificate`, e il file YAML dentro di essa, con il nuovo nome.
1. Nel file YAML, cambia il titolo (`title`) con il nuovo nome.
1. Rinomina il file e la cartella dello step 3 nel resto delle lingue del curriculum.
1. Aggiorna `client/src/redux/index.ts` con il corretto `title`.
1. Facoltativamente, aggiorna il `certSlug` per il superblocco nello stesso file. **Nota** che rinominare un `certSlug` cambia l'URL della certificazione ed è da fare con attenta considerazione.
1. Aggiorna il `title` in `client/src/resources/cert-and-project-map.ts` al nuovo valore. **Nota** che cambiare `title` qui **romperà** la pagina superBlock per la certificazione associata. Fa affidamento sul titolo del superblocco per combaciare il titolo del certificato. Vorrai probabilmente rinominare il superblocco allo stesso tempo.
1. Se hai rinominato `certSlug` allo step 7, cambialo qui per il certificato e tutti i valori dei progetti annidati `projects`.
1. In `config/certification-settings.js`, aggiorna il valore di `certTypeTitleMap` al nuovo nome.
1. Se hai rinominato `certSlug` allo step 7, aggiorna la key di `certSlugTypeMap` nello stesso file.
1. Se necessario aggiorna il nome del certificato nell'array `legacyCerts` di `client/src/client-only-routes/show-project-links.tsx`.
1. Aggiorna il file `README.md` principale al nuovo nome.

### Rinominare un superblocco

> [!NOTE] Quando rinomini un superblocco, il nuovo nome della cartella è usato come percorso e dovrebbe essere considerato il nome "corretto". Tutti gli altri valori devono essere aggiornati per riflettere il cambiamento.

Also, you will likely want to rename the certificate and the `{superBlock}-projects` block when you rename a superBlock since they all shares a name. To rename only a superBlock you need to:

1. Rename the superBlock folder in the `curriculum/challenges/english` directory.
1. Rename the superBlock folder in *all* other `curriculum/challenges/{language}` directories.
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
1. Change the name of the same block folder in *all* of the other language directories to match. These must all be the same as the English structure or the build will error out.
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
1. Change the name of the file, and the `dashedName` in those files for *all* of the other language directories to match.
1. Update the name of the challenge in the relevant `meta.json` file. The challenge names here are not used in the build, but provide a user-friendly way to identify the challenge order.
1. If the challenge is a certificate project, update the YAML file in `curriculum/english/12-certificates/<superBlock>` to the new name.
1. If the challenge is a certificate project, update the `title` and `link` in `client/src/resources/cert-and-project-map.ts`
1. If the challenge is a certificate project, update the main `README.md` file to the new name.

## The `dashedName` Property

The `dashedName` property is used to generate the URL path for the superblock, block, or challenge. These should generally match what the `/utils/dasherize.js` helper would output for the file name.
