---
id: 587d824a367417b2b2512c44
title: Verificador de preço de ações
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>.

Como todas as APIs de preço de ações confiáveis requerem uma chave de API, criamos uma solução alternativa. Use <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a> para obter informações atualizadas sobre o preço das ações sem precisar se inscrever para ter sua própria chave.

Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

1.  Defina `NODE_ENV` como `test` sem aspas e `DB` como sua string de conexão ao MongoDB
2.  Complete o projeto em `routes/api.js` ou criando um manipulador/controlador
3.  Você adicionará todas as funcionalidades de segurança ao `server.js`
4.  Você criará todos os testes funcionais em `tests/2_functional-tests.js`

**Observação** Considerações de privacidade: devido à exigência de que apenas uma curtida por IP deve ser aceita, você terá que salvar endereços IP. É importante manter a conformidade com as leis relativas à privacidade de dados, como o Regulamento Geral para a Proteção de Dados. Uma opção é obter permissão para salvar os dados do usuário, mas é muito mais simples deixar os dados anônimos. Para este desafio, lembre-se de anonimizar endereços IP antes de salvá-los no banco de dados. Se você precisa de ideias sobre como fazer isso, você pode optar por criptografar os dados (algoritmo hash), omitir parte deles, ou definir parte do endereço IP como 0.

Escreva os testes a seguir em `tests/2_functional-tests.js`:

-   Visualizar uma ação: faça a solicitação de GET para `/api/stock-prices/`
-   Visualizar uma ação e dizer que gostou dela: faça a solicitação de GET para `/api/stock-prices/`
-   Visualizar a mesma ação e dizer que gostou dela novamente: faça a solicitação de GET para `/api/stock-prices/`
-   Visualizar duas ações: faça a solicitação de GET para `/api/stock-prices/`
-   Visualizar duas ações e dizer que gostou delas: faça a solicitação de GET para `/api/stock-prices/`

# --hints--

Você pode fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Você deve definir as políticas de segurança do conteúdo para permitir apenas o carregamento de scripts e CSS do seu servidor.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

Você pode enviar uma requisição do tipo `GET` para `/api/stock-prices`, passando um símbolo de ação NASDAQ para um parâmetro de consulta `stock`. O objeto retornado conterá uma propriedade chamada `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

A propriedade `stockData` inclui o símbolo da ação `stock` como uma string, o preço `price` como um número e o número de curtidas `likes` como um número.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

Você também pode passar um campo `like` como `true` (booleano) para ter sua curtida adicionada à ação. Apenas 1 curtida por IP deve ser aceita.

```js

```

Se você passar 2 ações, o valor retornado será um array com informações sobre as duas. Em vez do número de curtidas `likes`, será exibida a propriedade `rel_likes` (a diferença de curtidas entre ambas as ações) para os dois objetos `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

Todos os 5 testes funcionais estão completos e passando.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
