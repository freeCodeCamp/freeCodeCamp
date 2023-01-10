---
id: 587d824f367417b2b2512c5c
title: Simular ações usando um navegador headless
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Nos próximos desafios, você vai simular a interação humana com uma página usando um navegador headless.

Navegadores headless são navegadores da web sem uma interface gráfica. Eles são capazes de renderizar e interpretar HTML, CSS e JavaScript da mesma maneira que um navegador regular faria, o que os torna particularmente úteis para testar páginas da web.

Para os desafios a seguir, você usará o Zombie.js, que é um navegador headless leve que não depende de binários adicionais para ser instalado. Esse recurso o torna utilizável em ambientes limitados, como o Replit. Porém, existem muitas outras opções mais poderosas de navegador headless.

O Mocha permite que você execute código antes de qualquer um dos testes ser executado. Isso pode ser útil para fazer coisas como adicionar entradas que serão usadas no resto dos testes a um banco de dados.

Com um navegador headless, antes de executar os testes, você precisa **visitar** a página que você vai testar.

O hook `suiteSetup` é executado apenas uma vez no começo da suite de teste.

Há vários outros tipos de hook que podem ser executados antes de cada teste, após cada teste, ou no final de uma suite de testes. Consulte a documentação do Mocha para obter mais informações.

# --instructions--

Dentro de `tests/2_functional-tests.js`, imediatamente após a declaração de `Browser`, adicione o URL do seu projeto à propriedade `site` da variável:

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

Então, no nível de root da suite `'Functional Tests with Zombie.js'`, instancie uma nova instância do objeto `Browser` com o seguinte código:

```js
const browser = new Browser();
```

Depois, use o hook `suiteSetup` para direcionar o `browser` para a rota `/` com o seguinte código:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
