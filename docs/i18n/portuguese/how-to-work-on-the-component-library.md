Bem-vindo à biblioteca `ui-components` do freeCodeCamp. Os componentes são construídos, em grande parte, do zero, com elementos HTML básicos e [Tailwind CSS](https://tailwindcss.com/).

# Como trabalhar na biblioteca de componentes

> [!NOTE]
> 
> O freeCodeCamp tem usado componentes do Bootstrap na interface do usuário. No entanto, estamos nos afastando disso e construindo nossa própria biblioteca de componentes, o que ajuda a padronizar nossos padrões de UX/UI e melhorar a acessibilidade. O projeto é acompanhado [nesta issue do GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/44668).

São recomendados os seguintes passos ao trabalhar em um novo componente:

- Pesquisar e planejar
- Implementar o componente
- Exibir os casos de uso no Storybook
- Escrever testes unitários

## Pesquisar e planejar

Antes de construir um componente, você precisa pesquisar e documentar como a versão existente se comporta e qual é sua aparência, para garantir que o novo tenha estilos correspondentes e suporte todos os usos atuais. Para atender aos requisitos de acessibilidade da web, você também deve prestar atenção ao aspecto de acessibilidade do componente, ver quais elementos HTML e atributos ARIA são usados por baixo dos panos.

Depois de coletar informações suficientes sobre o componente, você pode começar a pensar na interface de propriedades. Idealmente, a interface deveria ser o mais semelhante possível à versão atual, a fim de facilitar a adoção mais tarde. Como estamos usando componentes do Bootstrap, a abordagem mais simples é imitar a [implementação deles](https://github.com/react-bootstrap/react-bootstrap/tree/master/src).

Preferimos pull requests menores do que grandes, porque eles aceleram o tempo de revisão e reduzem a sobrecarga cognitiva para os revisores. Por essa razão, pense em como dividiria a implementação e apresentaria um plano de entrega.

Recomendamos abrir uma issue separada no GitHub para cada componente e incluir todas as observações na descrição da issue. Ela pode ser usada como um lugar para hospedar todas as suas notas de trabalho, assim como uma maneira de comunicar a abordagem aos revisores. Utilizaremos o tópico da issue para continuar a discussão, se necessário. [A issue sobre o componente Button](https://github.com/freeCodeCamp/freeCodeCamp/issues/45357) pode ser usada como uma referência.

## Implementar o componente

Um novo componente pode ser criado usando o seguinte comando a partir do diretório raiz:

```bash
cd tools/ui-components

npm run gen-component MyComponent
```

O comando gerará uma nova pasta dentro do diretório `ui-components`, com os seguintes arquivos:

| Nome do arquivo            | Finalidade                                                        |
| -------------------------- | ----------------------------------------------------------------- |
| `index.ts`                 | É utilizado para exportar os componentes e os seus tipos.         |
| `my-component.stories.tsx` | É utilizado para fazer a demonstração do componente no Storybook. |
| `my-component.test.tsx`    | É um arquivo de teste.                                            |
| `my-component.tsx`         | É onde implementamos o componente.                                |
| `types.ts`                 | É onde localizamos a interface e os tipos do componente.          |

Cada componente é diferente, mas, em geral, os componentes devem:

- Dar suporte à ref de encaminhamento
- Ser estilizados para temas claros e escuros
- Ser estilizados internamente com base em suas propriedades (os consumidores não devem precisar reestilizar o componente com a propriedade `className`)
- Usar o sistema de estilo integrado do Tailwind ao invés de ter estilos personalizados

### Using colors

There are two color "layers" in the component library:

- The base layer, where the color names describe what the colors are, e.g. `gray00`, `blue50`
- The semantic layer, where the color names describe what the colors are for, e.g. `foreground-primary`, `background-danger`

Generally when using colors in a component, you should choose semantic variables over the base ones. There are exceptions, however, specifically when you are styling the component's states such as hover, active, disabled, etc. In these cases, we recommend using the base variables directly instead of creating new semantic variables, since each component can have different styles for their states.

> [!NOTE] Color definition can be found in the [`colors.css` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). A color is only available for use if it is added to the [`tailwind.config.js` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) under the `colors` property.

### Links úteis

- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [React Bootstrap v0.33 Docs](https://react-bootstrap-v3.netlify.app)
- [Bootstrap 3.3.7 stylesheet](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [React Bootstrap current implementation](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [React Bootstrap current tests](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Exibir os casos de uso no Storybook

Use cases of the component should be added to the Storybook file (`.stories.tsx`).

To start Storybook, run the following command from the root directory:

```bash
npm run storybook
```

The Storybook page is available on [http://localhost:6006](http://localhost:6006).

## Escrever testes unitários

We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit tests. The tests should assert that the components behave as expected and are accessible.

To run tests against the component library, run the following command from the root directory:

```bash
npm run test-ui-components
```

### Useful links

- [Testing for Accessibility](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Order of priority of React Testing Library's queries](https://testing-library.com/docs/queries/about/#priority)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
