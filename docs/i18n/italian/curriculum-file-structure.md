# Struttura dei file del curriculum

Il nostro contenuto educativo centrale è situato nella cartella chiamata convenientemente `curriculum`. Questa pagina analizzerà come questi file sono organizzati.

## Terminologia

Questi sono alcuni termini che usiamo quando discutiamo il contenuto del nostro curriculum.

- `certification` : Quando riferito a una certificazione in questa istanza, sta parlando del certificato che gli utenti richiedono. Che è separato dal nome del superBlock.
- `superBlock` : Un superblock è il raggruppamento superiore di sfide. Ogni superblock corrisponde ad una certificazione nel curriculum (p.e. Responsive Web Design).
- `block` : Un block è una sezione in un superblock. Un blocco corrisponde a un gruppo di sfide in una certa certificazione (per esempio Basic HTML e HTML5)
- `challenge`: Una sfida è una singola lezione nel curriculum (p. e. Saluta gli elementi HTML)

## Albero dei file

Usando quei termini, ecco come la struttura dei file viene definita:

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

## La cartella `_meta`

La cartella `_meta` è una cartella speciale che contiene dei file `.json`. Questi file corrispondono ad ogni blocco nel curriculum e sono usati per determinare a quale superblocco corrisponde un certo blocco, e l'ordine delle sfide in quel blocco.

## Rinominare i file

Ci potrebbero essere volte in cui devi rinominare un certificato, superblocco, blocco o sfida. Questa sezione delinea gli step necessari per evitare errori di build nel farlo.

> [!ATTENTION] Rinominare i file nella struttura del curriculum spesso cambia il percorso (o l'URL) del contenuto sulla pagina web principale. Questo è da fare con cura, poiché bisogna configurare reindirizzamenti per ogni cambiamento che viene fatto.

### Rinominare una certificazione

Quando rinomini una certificazione, vorrai probabilmente rinominare il superblocco associato. Fai quanto segue per rinominare solo il certificato:

1. Rinomina la cartella `curriculum/challenges/_meta/{superBlock}-certificate` con il nuovo nome.
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

Inoltre, probabilmente vorrai rinominare il certificato e il blocco `{superBlock}-projects` quando rinomini un superblocco visto che condividono tutti un nome. Per rinominare solo un superblocco devi:

1. Rinominare la cartella del superblocco nella cartella `curriculum/challenges/english`.
1. Rinominare la cartella del superblocco in _tutte_ le altre cartelle `curriculum/challenges/{language}`.
1. Per ogni blocco dentro quel superblocco, aggiorna il valore `superBlock` nel file `meta.json` al suo nome a trattini. Non hai bisogno di rinominare alcuna cartella qui. Fallo quando rinomini un blocco.
1. Rinomina la cartella del superblocco in `client/src/pages/learn`.
1. Aggiorna il file `index.md` nella cartella qui sopra, cambiando i valori `title` e `superBlock` al nuovo nome.
1. Per ogni cartella di un blocco all'interno della precedente, aggiorna `index.md` affinché usi il valore corretto di `superBlock`.
1. Nel file `client/src/resources/cert-and-project-map.ts`, aggiorna il percorso per il certificato in cima al file, e il valore di `title` per quel superblocco. **Nota** che cambiare `title` qui **romperà** l'abilità di vedere la certificazione per questo superblocco. Fa affidamento sul titolo del superblocco per abbinare il titolo del certificato. Vorrai probabilmente rinominare la certificazione allo stesso tempo.
1. Aggiorna la key `superBlockCertTypeMap` in `config/certification-settings.js` al nuovo nome di superblocco.
1. Aggiorna il valore del percorso in `client/src/assets/icons/index.tsx`.
1. Per ogni lingua in `client/i18n/locales`, aggiorna il file `intro.json` file affinché usi il nuovo `dashedName` del superblocco. Nel file inglese aggiorna anche `title`.
1. Controlla `config/i18n/all-langs.js` per vedere se il superblocco è abilitato nelle build in altre lingue. Aggiorna il valore dove è usato.
1. Aggiorna il file principale `README.md` con il nuovo nome.

### Rinominare un blocco

Quando rinomini un blocco del curriculum, devi:

1. Cambiare il nome della cartella nella directory `curriculum/challenges/english/{superBlock}`.
1. Cambiare il nome della cartella dello stesso blocco in _tutte_ le directory delle altre lingue. Queste devono tutte essere uguali alla struttura inglese o il build avrà errori.
1. Cambia il nome della cartella del blocco nella directory `_meta`.
1. Aggiorna le proprietà `name` e `dashedName` per il `meta.json` di quel blocco.
1. Aggiorna `client/utils/help-category-map.json` inmodo che usi il nuovo nome del blocco come chiave.
1. Aggiorna la cartella del blocco in `client/src/pages/learn/{superBlock}`.
1. Nel file `index.md` della cartella sopra, aggiorna il valore di `block` nel frontespizio.
1. Nei file `client/i18n/locales/{language}/intro.json` aggiorna il nome del blocco con il nuovo nome per tutte le lingue. Nel file inglese `intro.json`, cambia anche `title`.
1. Aggiorna il file `README.md` principale al nuovo nome.

### Rinominare una sfida

Quando rinomini il file di una singola sfida, devi:

1. Cambiare il nome del file della sfida nella directory `curriculum/challenges/english`.
1. Cambiare i valori di `title` e `dashedName` in quel file.
1. Cambia il nome del file e il valore di `dashedName` in quei file per _tutte_ le directory delle altre lingue.
1. Cambiare il nome della sfida nel file `meta.json` rilevante. I nomi delle sfide qui non sono usati nel build, ma forniscono un metodo user-friendly per identificare l'ordine delle sfide.
1. Se la sfida è un progetto di un certificato, aggiorna il file YAML in `curriculum/english/12-certificates/<superBlock>` con il nuovo nome.
1. Se la sfida è un progetto di un certificato, aggiorna `title` e `link` in `client/src/resources/cert-and-project-map.ts`
1. Se la sfida è un progetto di un certificato, aggiorna il file `README.md` principale con il nuovo nome.

## La proprietà `dashedName`

La proprietà `dashedName` è usata per generare il percorso URL del superblocco, del blocco o della sfida. Questi devono in genere combaciare con ciò che l'aiutante `/utils/slugs.js` restituirebbe per il nome del file.
