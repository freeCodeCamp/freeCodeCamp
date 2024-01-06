# Como adicionar testes do Playwright

## Instalação

Para instalar o Playwright, execute:

```bash
pnpm run playwright:install-build-tools
```

Como alternativa, você pode seguir a documentação oficial referenciada abaixo:

Para instalar e configurar o Playwright na sua máquina, confira a [documentação](https://playwright.dev/docs/intro#installing-playwright).

Para aprender a escrever testes do Playwright ou 'specs', confira a [documentação](https://playwright.dev/docs/writing-tests) oficial.

## Onde adicionar um teste

- Os testes do Playwright estão no diretório `./e2e`.

- Os arquivos de teste do Playwright têm sempre uma extensão `.spec.ts`.

## Melhores práticas para a escrita de testes E2E

 Esta seção explicará em detalhes as melhores práticas para escrever e documentar testes E2E com base na documentação do Playwright e no nosso estilo de código comunitário.

### - Importações

Sempre comece com as importações necessárias no início do arquivo.

Por exemplo:

```ts
import { test, expect, type Page } from '@playwright/test';
```

### - Identificando um elemento do DOM

O Playwright vem com [vários localizadores integrados](https://playwright.dev/docs/locators#quick-guide), mas recomendamos a priorização dos seguintes localizadores:
  - `getByRole` para consultar elementos semânticos de função importante e que permitam que a tecnologia assistiva perceba a página corretamente.
  - `getByText` para consultar elementos não semânticos, como `div`, `span` ou `p`.

Por exemplo:
```ts
await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
await expect(page.getByText('Hello World')).toBeVisible();
```

Nos casos em que os elementos não podem ser consultados usando os localizadores mencionados acima, você pode usar o atributo `data-playwright-test-label` como último recurso. Esse atributo é usado para identificar elementos no DOM para testes somente com o playwright. Ele não é usado para estilização ou para qualquer outra finalidade.

Por exemplo:

```html
<div data-playwright-test-label="landing-page-figure">
  <img src="..." alt="..." />
</div>
```

No arquivo de teste, você pode usar o método `getByTestId` para identificar o elemento.

Por exemplo:

```ts
await expect(page.getByTestId('landing-page-figure')).toBeVisible();
```

### - Constantes

Defina quaisquer elementos constantes, conjuntos de dados ou configurações usadas durante seus testes para fácil referência.

Por exemplo:

```ts
const landingPageElements = { ... };
const superBlocks = [ ... ];
```

### - Contexto compartilhado

Se os testes dependem de um contexto compartilhado (como uma página da web carregada), use os hooks beforeAll e afterAll para configurar e encerrar esse contexto.

Por exemplo:

```ts
let page: Page;

beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
});
```

### - Nomes de testes descritivos

Cada bloco de teste deve ter um nome claro e conciso descrevendo exatamente o que ele está testando.

Por exemplo:

```ts
test('The component landing-top renders correctly', async ({ page }) => {
 // ...
});
```

### - Declarações legíveis

Cada declaração deve ser o mais legível possível. Isso torna mais fácil entender o que o teste está fazendo e o que está esperando.

Por exemplo:

```ts
await expect(landingHeading1).toHaveText('Learn to code — for free.');
```

### - Evite repetições

Certifique-se de que os testes não estão repetindo o mesmo código várias vezes. Se você estiver repetindo o mesmo código, considere refatorá-lo como um laço ou uma função.

Por exemplo:

```ts
for (const logo of await logos.all()) {
  await expect(logo).toBeVisible();
}
```

### - Testes para telas de dispositivos móveis

Use o argumento `'isMobile'` para executar testes que incluam lógica que varia para telas de dispositivos móveis.

Por exemplo:

```ts
test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
    isMobile
}) => {
  const landingPageImage = page.getByTestId('landing-page-figure');

  if (isMobile) {
    await expect(landingPageImage).toBeHidden();
  } else {
    await expect(landingPageImage).toBeVisible();
  }
});
```

### - Agrupamento de testes relacionados

Agrupe testes relacionados em conjunto usando blocos "descrite". Isso torna mais fácil entender o que os testes estão fazendo e o que estão testando.

Por exemplo:

```ts
describe('The campers landing page', () => {
  test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
    isMobile
  }) => {
    // ...
  });

  test('The campers landing page figure has the correct image', async () => {
      // ...
  });
});
```

## Como executar testes

### 1. Veja se as aplicações de client e do MongoDB estão em execução

- [Inicie o MongoDB e crie o banco de dados](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database). Para que os testes do Playwright funcionem, certifique-se de usar o comando `pnpm run seed:certified-user`.

- [Inicie também a aplicação de client do freeCodeCamp e o servidor da API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Execute os testes do Playwright

Para executar testes com o Playwright, verifique o seguinte

- Não se esqueça de navegar primeiro para o repositório e2e

  ```bash
  cd e2e
  ```

- Para executar testes no modo auxiliar de UI:

  ```bash
  npx playwright test --ui
  ```

- Para executar um único teste:

  ```bash
  npx playwright test <nome_do_arquivo>
  ```

  Por exemplo:

  ```bash
  npx playwright test landing-page.spec.ts
  ```

- Para executar um conjunto de arquivos de teste nas respectivas pastas:

  ```bash
  npx playwright test <caminho_da_pasta1> <caminho_da_pasta2>
  ```

  Por exemplo:

  ```bash
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Para executar o teste com o título:

  ```bash
  npx playwright test -g <título>
  ```

  Por exemplo:

  ```bash
  npx playwright test -g "add a todo item"
  ```

### 3. Depuração dos testes

Como o Playwright é executado no Node.js, você pode depurá-lo com seu depurador preferido – por exemplo, usando console.log ou em seu IDE

- Depuração de todos os testes:

  ```bash
  npx playwright test --debug
  ```

- Depuração de um arquivo de teste:

  ```bash
  npx playwright test example.spec.ts --debug
  ```

### 4. Geração de relatórios de teste

O HTML Reporter mostra um relatório completo de seus testes, que permite filtrar o relatório por navegadores, testes que passaram, testes que falharam, testes ignorados e testes não confiáveis.

```bash
npx playwright show-report 
```

### 5. Solução de problemas

O Playwright, geralmente, é uma ferramenta com pouquíssimas chances de erro. O colaborador já configurou os testes para serem executados em máquinas com todos os sistemas operacionais, incluindo as distribuições mais significativas do Windows, MacOS e Linux.

- (MacOs e Linux) Se executar o Playwright resultar em um erro devido a dependências do kernel, execute o seguinte comando:

  ```bash
  pnpm run playwright:install-build-tools-linux
  ```

- Um erro comum visto no Playwright é o seguinte:

  ```bash
    Error: page.goto: Could not connect: Connection refused
    =========================== logs ===========================
    navigating to "https://127.0.0.1:8000/", waiting until "load"
    ============================================================  
  ```

  Você pode corrigir o erro acima com os seguintes passos:

  1. **Verifique o URL:** confira se o URL que você está tentando navegar está certo e formatado corretamente. Certifique-se de que não há erros de digitação no URL.

  2. **Status do servidor:** confira se o servidor no URL está em execução e acessível. Você pode encontrar esse erro se o servidor não estiver em execução ou se não estiver acessível.

  3. **Disponibilidade da porta:** verifique se a porta mencionada no URL (8000, neste caso) é a porta correta e está disponível para uso. Certifique-se de que nenhum outro processo já esteja usando essa porta.

  4. **Firewall ou software de segurança:** às vezes, firewalls ou software de segurança podem bloquear conexões em portas específicas. Verifique as configurações do firewall para garantir que a porta seja permitida.

  5. **Conectividade de rede:** certifique-se de que seu sistema tenha uma conexão de rede ativa e possa acessar recursos externos.

- Outro erro comum visto no Playwright é o seguinte:

  ```bash
    Protocol error (Network.getResponseBody): Request content was evicted from inspector cache
  ```

  1. A solicitação de rede foi feita usando um método que não inclui um corpo de resposta, como HEAD ou CONNECT.
  2. A solicitação de rede foi feita através de uma conexão segura (HTTPS) e o corpo da resposta não está disponível por razões de segurança.
  3. A solicitação de rede foi feita por um recurso de terceiros (como um anúncio ou um pixel de rastreamento) que não é controlado pelo script.
  4. A solicitação de rede foi feita por um script que foi pausado ou interrompido antes de a resposta ser recebida.

**Para mais informações sobre essas questões, confira a documentação oficial.**

## Configuração do Playwright no Gitpod

### 1. Certifique-se que o ambiente de desenvolvimento está em execução

Se, ao iniciar o ambiente do Gitpod, o ambiente não foi desenvolvido automaticamente:

- Siga o [guia de instalação do MongoDB](https://www.mongodb.com/basics/get-started).

- Criar o arquivo .env

  ```bash
  cp sample.env .env
  ```

- Crie um arquivo de configuração.

  ```bash
  pnpm run create:shared
  ```

- Crie o banco de dados

  ```bash
  pnpm run seed:certified-user
  ```

- Desenvolva o servidor e o client

  ```bash
  pnpm run develop
  ```

### 2. Instale as ferramentas de compilação do Playwright

Para instalar as dependências necessárias para executar o Playwright, execute o seguinte comando:

```bash
pnpm run playwright:install-build-tools
```

### 3. Execute os testes do Playwright no Gitpod

Para executar todos os testes do Playwright, execute o seguinte comando:

```bash
cd e2e
npx playwright test
```
