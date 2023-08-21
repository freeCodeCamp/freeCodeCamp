# Como adicionar testes do Playwright

## Instalação:

To install Playwright run:

```console
pnpm run playwright:install-build-tools
```

Alternatively you can follow official documentation referenced below:

Para instalar e configurar o Playwright na sua máquina, confira a [documentação](https://playwright.dev/docs/intro#installing-playwright)

Para aprender a escrever testes do Playwright ou 'specs', confira a [documentação](https://playwright.dev/docs/writing-tests) oficial.


## Onde adicionar um teste

- Os testes do Playwright estão no diretório `./e2e`.

- Os arquivos de teste do Playwright têm sempre uma extensão `.spec.ts`.

## Como executar testes


### 1. Veja se as aplicações de client e do MongoDB estão em execução

- [Inicie o MongoDB e crie o banco de dados](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Inicie também a aplicação de client do freeCodeCamp e o servidor da API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Execute os testes do Playwright

Para executar testes com o Playwright, verifique o seguinte

- Make sure you navigate to the e2e repo first
  ```console
  cd e2e
  ```

- Para executar testes no modo auxiliar de UI:

  ```console
  npx playwright test --ui
  ```

- Para executar um único teste:

  ```console
  npx playwright test <nome_do_arquivo>
  ```

  Por exemplo:

  ```console
  npx playwright test landing-page.spec.ts
  ```

- Para executar um conjunto de arquivos de teste nas respectivas pastas:

  ```console
  npx playwright test <caminho_da_pasta1> <caminho_da_pasta2>
  ```

  Por exemplo:
  ```console
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Para executar o teste com o título:

  ```console
  npx playwright test -g <título>
  ```

  Por exemplo:
  ```console
  npx playwright test -g "add a todo item"
  ```

### 3. Depuração dos testes

Como o Playwright é executado no Node.js, você pode depurá-lo com seu depurador preferido – por exemplo, usando console.log ou em seu IDE

- Depuração de todos os testes:

  ```console
  npx playwright test --debug
  ```

- Depuração de um arquivo de teste:

  ```console
  npx playwright test example.spec.ts --debug
  ```

### 4. Geração de relatórios de teste

O HTML Reporter mostra um relatório completo de seus testes, que permite filtrar o relatório por navegadores, testes que passaram, testes que falharam, testes ignorados e testes não confiáveis.

```console
npx playwright show-report 
```

### 5. Solução de problemas

O Playwright, geralmente, é uma ferramenta com pouquíssimas chances de erro. O colaborador já configurou os testes para serem executados em máquinas com todos os sistemas operacionais, incluindo as distribuições mais significativas do Windows, MacOS e Linux.

- (MacOs and Linux) If running Playwright results in an error due to kernel dependencies, run the following command:

  ```console
  pnpm run playwright:install-build-tools-linux
  ```

- Um erro comum visto no Playwright é o seguinte:

  ```console
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

  ```console
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
  ```console
  cp sample.env .env
  ```

- Crie um arquivo de configuração.
  ```console
  pnpm run create:config
  ```

- Crie o banco de dados
  ```console
  pnpm run seed
  ```

- Desenvolva o servidor e o client
  ```console
  pnpm run develop
  ```

### 2. Instale as ferramentas de compilação do Playwright

Para instalar as dependências necessárias para executar o Playwright, execute o seguinte comando:

```console
pnpm run playwright:install-build-tools
```


### 3. Execute os testes do Playwright no Gitpod

Para executar todos os testes do Playwright, execute o seguinte comando:

```console
npx playwright test
```