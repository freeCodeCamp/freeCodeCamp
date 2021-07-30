---
id: 587d824f367417b2b2512c5c
title: Simular ações usando um navegador headless
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

Lembrando que este projeto está sendo construído a partir do [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), ou pose ser clonado no [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

Nos próximos desafios vamos simular a interação humana com uma página usando um dispositivo chamado 'navegador headless'.

Um navegador headless é um navegador da web sem interface gráfica. Esse tipo de ferramenta é particularmente útil para testar páginas da web, já que é capaz de renderizar e entender HTML, CSS e JavaScript da mesma maneira que um navegador.

Para estes desafios, estamos usando o Zombie.JS. É um navegador leve que é totalmente baseado no JS, sem depender de binários adicionais a serem instalados. Esse recurso o torna utilizável em um ambiente como o Replit. Existem muitas outras opções (mais poderosas).

O Mocha permite que você prepare o terreno executando algum código antes dos testes reais. Isto pode ser útil, por exemplo, para criar itens no banco de dados, que serão utilizados em testes sucessivos.

Com um navegador headless, antes dos testes reais, precisamos **visitar** a página que vamos inspecionar. O 'hook' `suiteSetup` é executado apenas uma vez na inicialização da suite. Outros tipos de hook diferentes podem ser executados antes de cada teste, após cada teste, ou no final de uma suite. Consulte a documentação do Mocha para obter mais informações.

# --instructions--

Dentro de `tests/2_functional-tests.js`, imediatamente após a declaração de `Browser`, adicione o URL do seu projeto à propriedade `site` da variável:

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

Se você estiver testando em um ambiente local, substitua a linha acima por

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

Dentro de `tests/2_functional-tests.js`, no nível de root da suite `'Functional Tests with Zombie.js'`, instancie uma nova instância do objeto `Browser` com o seguinte código:

```js
const browser = new Browser();
```

Em seguida, use o hook `suiteSetup` para direcionar o `browser` para a rota `/` com o seguinte código:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional').then(
    (data) => {
      data.slice(0, 4).forEach((test) => {
        assert.equal(test.state, 'passed');
      })
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
