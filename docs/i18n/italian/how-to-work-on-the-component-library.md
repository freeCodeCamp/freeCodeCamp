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

npm run gen-component MyComponent
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

### Using colors

There are two color "layers" in the component library:

- The base layer, where the color names describe what the colors are, e.g. `gray00`, `blue50`
- The semantic layer, where the color names describe what the colors are for, e.g. `foreground-primary`, `background-danger`

Generally when using colors in a component, you should choose semantic variables over the base ones. There are exceptions, however, specifically when you are styling the component's states such as hover, active, disabled, etc. In these cases, we recommend using the base variables directly instead of creating new semantic variables, since each component can have different styles for their states.

> [!NOTE] Color definition can be found in the [`colors.css` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). A color is only available for use if it is added to the [`tailwind.config.js` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) under the `colors` property.

### Link utili

- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [React Bootstrap v0.33 Docs](https://react-bootstrap-v3.netlify.app)
- [Bootstrap 3.3.7 stylesheet](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [React Bootstrap current implementation](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [React Bootstrap current tests](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Visualizzazione degli use case con Storybook

Use cases of the component should be added to the Storybook file (`.stories.tsx`).

To start Storybook, run the following command from the root directory:

```bash
npm run storybook
```

The Storybook page is available on [http://localhost:6006](http://localhost:6006).

## Scrivere test unitari

We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit tests. The tests should assert that the components behave as expected and are accessible.

To run tests against the component library, run the following command from the root directory:

```bash
npm run test-ui-components
```

### Useful links

- [Testing for Accessibility](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Order of priority of React Testing Library's queries](https://testing-library.com/docs/queries/about/#priority)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
