# Cum să lucrezi la tema documentelor

> [!NOTĂ] Un scurt memento că nu trebuie să setați nimic pentru a lucra la conținutul site-ului de documentație.
> 
> Pentru a lucra la ghidurile de contribuţie, puteţi edita sau adăuga fişiere în directorul `documente` [disponibil aici](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Atunci când modificările sunt îmbinate, acestea vor fi puse la dispoziție automat pe site-ul de documentare.

## Structura site-ului de documentare

Site-ul este generat folosind [`docsify`](https://docsify.js.org), și servit folosind pagini GitHub.

De obicei nu ar trebui să modificați nicio configurație sau să construiți site-ul local. În cazul în care sunteţi interesaţi, iată cum funcţionează:

- Sursa paginii principale pentru acest site este disponibilă în [`documente/index.html`](index.html).
- Noi servim acest fișier ca SPA folosind `docsify` și paginile GitHub.
- Scriptul `docsify` generează conținutul `markdown` fișierelor în `documente` la cerere.
- Pagina de start este generată din [`_coverpage.md`](_coverpage.md).
- navigarea pe bara laterală este generată de [`_sidebar.md`](_sidebar.md).

## Activarea site-ului de documentare local

Clonează freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve documente
```

Instalează `docsify`:

```sh
npm install -g docsify
```

și să deservească directorul `/docs`

```sh
docsify servește documente
```

Alternativ, dacă aţi instalat tabăra freeCodep local (a se vedea ghidul de configurare locală), grupăm CLI cu unelte de dezvoltare pentru a putea rula `npm run docs:serve` din rădăcina repoului.
