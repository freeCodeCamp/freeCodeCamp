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

pnpm run gen-component MyComponent
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

### Uso de cores

Existem duas "camadas" de cores na biblioteca de componentes:

- A camada de base, onde os nomes das cores descrevem o que são as cores, por exemplo, `gray00`, `blue50`
- A camada semântica, onde os nomes das cores descrevem para que servem as cores, por exemplo, `foreground-primary`, `background-danger`

Geralmente, ao usar cores em um componente, você deve preferir as variáveis semânticas às de base. No entanto, há exceções, especificamente quando você está estilizando os estados do componente como hover, active, disabled etc. Nestes casos, recomendamos o uso das variáveis de base diretamente em vez de criar variáveis semânticas, já que cada componente pode ter estilos diferentes para seus estados.

> [!NOTE] A definição de cor pode ser encontrada no arquivo [`colors.css`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). Uma cor só estará disponível para uso se for adicionada ao arquivo [`tailwind.config.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) abaixo da propriedade `colors`.

### Links úteis

- [Configuração do Tailwind CSS](https://tailwindcss.com/docs/configuration)
- [Documentação do React Bootstrap v0.33](https://react-bootstrap-v3.netlify.app)
- [Folha de estilos do Bootstrap 3.3.7](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [Implementação atual do React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [Testes atuais do React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Exibir os casos de uso no Storybook

Os casos de uso do componente devem ser adicionados ao arquivo Storybook (`.stories.tsx`).

Para iniciar o Storybook, execute o seguinte comando a partir do diretório raiz:

```bash
pnpm run storybook
```

A página do Storybook está disponível em [http://localhost:6006](http://localhost:6006).

## Escrever testes unitários

Usamos a [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (biblioteca de testes do React) para escrever testes unitários. Os testes devem investigar se os componentes se comportam como esperados e se estão acessíveis.

Para executar testes contra a biblioteca de componentes, execute o seguinte comando a partir do diretório raiz:

```bash
pnpm run test-ui-components
```

## Adicionar pacotes à biblioteca de componentes da UI

Restringimos a adição de novos pacotes aos componentes da UI para ajudar com a manutenção do projeto. Na hipótese de você achar que uma dependência é necessária, consulte os gestores primeiro e use o seguinte comando para adicionar um pacote:

```bash
cd tools/ui-components 
pnpm add package_name
```

### Links úteis

- [Testes de acessibilidade](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Ordem de prioridade das consultas da biblioteca de testes do React](https://testing-library.com/docs/queries/about/#priority)
- [Erros comuns com a biblioteca de testes do React](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
