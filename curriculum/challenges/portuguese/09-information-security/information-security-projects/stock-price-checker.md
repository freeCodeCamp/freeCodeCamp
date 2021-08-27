---
id: 587d824a367417b2b2512c44
title: Verificador de preço de ações
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <https://stock-price-checker.freecodecamp.rocks/>.

Como todas as APIs de preço de ações confiáveis requerem uma chave de API, criamos uma solução alternativa. Use <https://stock-price-checker-proxy.freecodecamp.rocks/> para obter informações atualizadas sobre o preço das ações sem precisar se inscrever para ter sua própria chave.

Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) e complete o projeto localmente.
-   Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker) para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`. Como opção, envie também um link para o código-fonte do projeto no campo `GitHub Link`.

# --instructions--

1.  Defina `NODE_ENV` como `test` sem aspas e `DB` como sua string de conexão ao MongoDB
2.  Complete o projeto em `routes/api.js` ou criando um manipulador/controlador
3.  Você adicionará todas as funcionalidades de segurança ao `server.js`
4.  Você criará todos os testes funcionais em `tests/2_functional-tests.js`

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

Você pode enviar uma solicitação de `GET` para `/api/stock-prices`, passando um símbolo da ação na NASDAQ para um parâmetro de consulta de `stock`. O objeto retornado conterá uma propriedade chamada `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

A propriedade `stockData` inclui o símbolo de `stock` como uma string, o `price` como um número e `likes` como um número.

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

Você também pode passar adiante um campo `like` como `true` (booleano) para ter sua curtida adicionada ao(s) estoque(s). Apenas 1 curtida por IP deve ser aceita.

```js

```

Se você passar 2 ações, o valor retornado será um array com informações sobre as duas. Em vez de `likes`, será exibido `rel_likes` (a diferença entre curtidas entre ambas as ações) para os dois objetos de `stockData`.

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

Todos os 5 testes funcionais foram concluídos e deram aprovação.

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
