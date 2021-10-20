# Come lavorare sul tema delle news degli sviluppatori di freeCodeCamp.org

Le notizie degli sviluppatori conosciute anche come il sito [`/news`](https://www.freecodecamp.org/news) è alimentato da [Ghost](https://ghost.org/). Usiamo un tema personalizzato per l'aspetto del sito. Il codice sorgente del tema è disponibile qui: <https://github.com/freeCodeCamp/news-theme>.

## Il Tema

Ghost utilizza un semplice linguaggio di modellazione chiamato [Handlebars](http://handlebarsjs.com/) per i suoi temi. Il tema utilizzato su `/news` è basato sul [tema casper](https://github.com/TryGhost/Casper) predefinito.

Il tema di default ha molti commenti così è abbastanza facile capire cosa sta succedendo semplicemente leggendo il codice e i commenti. Una volta che ti senti a tuo agio con il funzionamento del tutto, Ghost ha anche una completa [documentazione API per i temi](https://themes.ghost.org) che spiega ogni possibile helper Handlebars e modello.

**I file principali sono:**

- `default.hbs` - Il file del modello principale
- `index.hbs` - Utilizzato per la home page
- `post.hbs` - Utilizzato per singoli post
- `page.hbs` - Utilizzato per singole pagine
- `tag.hbs` - Utilizzato per archivi di tag
- `author.hbs` - Utilizzato per archivi d'autore

Uno trucco davvero pulito è che è anche possibile creare modelli una tantum personalizzati solo aggiungendo lo slug di una pagina a un file di modello. Per esempio:

- `page-about.hbs` - Modello personalizzato per la pagina `/about/`
- `tag-news.hbs` - Modello personalizzato per l'archivio `/tag/news/`
- `author-ali.hbs` - Modello personalizzato per l'archivio `/author/ali/`

## Sviluppo

1. Installare Ghost localmente.

   ```sh
   npm install -g ghost-cli@latest
   mkdir ghost-local-site
   cd ghost-local-site
   ```

   ```sh
   ghost install local
   ghost start
   ```

   > Nota: Attualmente freeCodeCamp utilizza la versione Ghost `2.9.0`, quindi assicurati di usare una versione superiore.

   Assicurati di eseguire i comandi `ghost` dalla directory `ghost-local-site`. Segui le istruzioni aggiuntive sulla documentazione ufficiale di [Ghost](https://docs.ghost.org) se non ha familiarità con la sua interfaccia.

2. Forka e clona il repository nella directory del tuo tema (sostituendo `YOUR_USERNAME` con il tuo username di GitHub):

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. Assicurati di avere tutti i prerequisiti.

   Gli stili del tema sono compilati usando Gulp/PostCSS per rispettare le future specifiche CSS. Avrai bisogno di [Node.js](https://nodejs.org/). Assicurati che la tua versione Node.js sia compatibile con `ghost`.

4. Installa le dipendenze e sviluppa il tema

   ```sh
   npm ci
   npm run develop
   ```

5. Ora puoi modificare automaticamente i file `/assets/css/`, che saranno compilati in `/assets/built/`.

6. Accedi al sito di sviluppo.

   a. Inserisci `http://localhost:2368/ghost/` nella barra degli indirizzi. Continua con la configurazione richiesta sulla pagina (se stai eseguendo ghost per la prima volta).

   b. _(Una sola volta durante la configurazione)_ Riavvia Ghost in un terminale separato per garantire che il tema sia disponibile.

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(Una sola volta durante l'installazione)_ Una volta fatto, vai su `http://localhost:2368/ghost/#/settings/design` e scorri verso il basso. Assicurati di cliccare attiva su `freecodecamp-news-theme`.

7. Zippa il codice finale e fai una pull request

   Il task `zip` di Gulp impacchetta i file del tema in `dist/<theme-name>. ip`, che potremo poi caricare sul sito di produzione.

   Quando fai una PR, assicurati di aver eseguito lo script sottostante prima di effettuare il commit del codice e di inviare una PR.

   ```sh
   npm run zip
   ```

## Altri riferimenti e risorse

### Funzionalità PostCSS Utilizzate

- Autoprefixer - Non preoccuparti di scrivere prefissi del browser di alcun tipo, è tutto fatto automaticamente con il supporto per le ultime 2 versioni principali di ogni browser.
- Variabili - Semplici variabili CSS pure
- [Funzione Color](https://github.com/postcss/postcss-color-function)

### Icone SVG

Il tema utilizza icone SVG in linea, incluse tramite dei partial di Handlebars. Puoi trovare tutte le icone all'interno di `/partials/icons`. Per usare un'icona basta includere il nome del file pertinente, ad es. Per includere l'icona SVG in `/partials/icons/rss.hbs` - usa `{{> "icons/rss"}}`.

È possibile aggiungere le proprie icone SVG nello stesso modo.
