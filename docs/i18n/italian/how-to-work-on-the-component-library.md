Benvenuti nella libreria `ui-components` di freeCodeCamp. I componenti sono principalmente creati da zero con elementi HTML base e [Tailwind CSS](https://tailwindcss.com/).

# Come lavorare sulla libreria dei componenti

> [!NOTE]
> 
> freeCodeCamp stava utilizzando componeti Bootstrap nell'UI. Ma, ci stiamo pian piano allontanando da ciò e creando la nostra libreria componenti, il che aiuta a standardizzare i pattern UI/UX e a migliorare l'accessibilità. Teniamo traccia del progetto in [questa issue su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/44668).

I seguenti step sono raccomandati quando lavori su un nuovo componente:

- Ricerca e pianificazione
- Implementazione del componente
- Visualizzazione degli use case in Storybook
- Scrittura dei test unitari

## Ricerca e pianificazione

Prima di creare un componente, devi ricercare e documentare il comportamento e l'aspetto della versione esistente, per assicurarti che il nuovo componente combaci in stile e supporti tutti gli usi correnti. In modo da soddisfare tutti i requisiti di accessibilità web, dovresti prestare attenzione all'aspetto di accessibilità del componente, vedere quali elementi HTML e attributi ARIA sono usati.

Una volta che hai raccolto abbastanza informazioni sul componente, puoi iniziare a pensare alle proprietà dell'interfaccia. Idealmente, l'interfaccia dovrebbe essere quanto più simile possibile alla versione corrente, per renderne più semplice l'adozione in futuro. Visto che stiamo usando componenti Bootstrap, l'approccio più semplice è mimare [la loro implementazione](https://github.com/react-bootstrap/react-bootstrap/tree/master/src).

Preferiamo pull request piccole piuttosto che grandi, perché riducono la velocità di revisione e il carico cognitivo per i revisori. Per questa ragione dovresti pensare a come dividere l'implementazione in pezzi più piccoli e creare un piano di delivery.

Raccomandiamo di aprire una issue su GitHub separata per ogni componente e includere tutte le note nella descrizione della issue. Può essere usato come posto per ospitare tutte le tue note di lavoro, come pure un modo per comunicare l'approccio con i revisori. Useremo i commenti dell'issue per discussioni ulteriori se necessario. [La issue per il componente Button](https://github.com/freeCodeCamp/freeCodeCamp/issues/45357) può essere usata come referenza.

## Implementare il componente

Un nuovo componente può essere creato usando i seguenti comandi dalla root directory:

```bash
cd tools/ui-components

pnpm run gen-component MyComponent
```

Il comando genererà una nuova cartella dentro la directory `ui-components`, con i seguenti file:

| Nome file                  | Scopo                                                |
| -------------------------- | ---------------------------------------------------- |
| `index.ts`                 | Usato per esportare il componente e i suoi tipi.     |
| `my-component.stories.tsx` | Usato per fare la demo del componente con Storybook. |
| `my-component.test.tsx`    | file di test.                                        |
| `my-component.tsx`         | Dove implementiamo il componente.                    |
| `types.ts`                 | Dove mettiamo l'interfaccia e i tipi del componente. |

Ogni componente è diverso, ma in genere un componente dovrebbe:

- Supportare l'invio a ref
- Essere stilizzato sia per il tema chiaro che scuro
- Essere stilizzato internamente basato sulle proprietà (Il consumatore non dovrebbe avere bisogno di stilizzare il componente con la proprietà `className`)
- Utilizzare il sistema integrato di stilizzazione di Tailwind invece di usare stili personalizzati

### Uso dei colori

Ci sono due strati di colori nella libreria dei componenti:

- Lo strato base, dove i nomi dei colori descrivono cosa sono i colori, per esempio `gray00`, `blue50`
- Lo strato semantico, dove i nomi dei colori descrivono lo scopo de colori, per esempio `foreground-primary`, `background-danger`

In genere quando usi i colori in un componente dovresti preferire le variabili semantiche rispetto a quelle base. Però ci sono eccezioni, specialmente quando stai dando uno stile agli stati del componente, tipo hover, attivo, disabilitato, ecc. In questo caso, raccomandiamo l'uso delle variabili base invece di creare nuove variabili semantiche, visto che ogni compnente può avere diversi stili per i vari stati.

> [!NOTE] Le definizioni dei colori possono essere trovate nel [file `colors.css`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). Un colore è disponibile per l'uso solo se è aggiunto al [file `tailwind.config.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) sotto la proprietà `colors`.

### Link utili

- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [React Bootstrap v0.33 Docs](https://react-bootstrap-v3.netlify.app)
- [Bootstrap 3.3.7 stylesheet](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [Implementazione corrente di React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [Test attuali di React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Visualizzazione degli use case con Storybook

Gli use case di un componente dovrebbero essere aggiunti al file Storybook (`.stories.tsx`).

Per far partire Storybook, esegui i seguenti comandi dalla directory root:

```bash
pnpm run storybook
```

La pagina Storybook è disponibile a [http://localhost:6006](http://localhost:6006).

## Scrivere test unitari

Usiamo [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) per scrivere i test dell'unità. I test dovrebbero verificare che i componenti si comportano come previsto e sono accessibili.

Per eseguire i test sulla libreria componenti, esegui il seguente comando dalla directory root:

```bash
pnpm run test-ui-components
```

## Aggiungere pacchetti alla libreria dei componenti UI

Limitiamo l'aggiunta di nuovi pacchetti ai Componenti UI per facilitare la manutenzione del progetto. Nel raro caso in cui pensi che sia necessaria una dipendenza, per favore, fai prima una verifica con i manutentori e quindi utilizza il seguente comando per aggiungere un pacchetto:

```bash
cd tools/ui-components 
pnpm add package_name
```

### Link utili

- [Testare per accessibilità](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Ordine di priorità delle query di React Testing Library](https://testing-library.com/docs/queries/about/#priority)
- [Errori comuni con React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
