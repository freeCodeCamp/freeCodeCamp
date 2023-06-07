---
id: 5895f70bf9fc0f352b528e64
title: Usar as capacidades de um mecanismo de modelos
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

Uma das maiores características do uso de um mecanismo de modelos (template engine) é poder passar variáveis do servidor para o arquivo de modelo antes de renderizá-lo em HTML.

No seu arquivo Pug, você pode usar uma variável fazendo referência ao nome da variável como `#{variable_name}` em linha com outro texto em um elemento ou usando um sinal de igual no elemento sem um espaço, como em `p=variable_name`, que atribui o valor da variável ao texto do elemento p.

O Pug tem a ver com usar o espaço em branco e as tabulações para mostrar elementos aninhados e diminuir a quantidade de código necessária para fazer um belo site.

Veja o seguinte código Pug, por exemplo:

```pug
head
  script(type='text/javascript').
    if (foo) bar(1 + 5);
body
  if youAreUsingPug
      p You are amazing
    else
      p Get on it!
```

O conteúdo acima fornece o seguinte HTML:

```html
<head>
  <script type="text/javascript">
    if (foo) bar(1 + 5);
  </script>
</head>
<body>
  <p>You are amazing</p>
</body>
```

O arquivo `index.pug`, incluído no projeto, usa as variáveis `title` e `message`.

Passe esses dados do servidor adicionando um objeto como um segundo argumento para a chamada de `res.render` com as variáveis e seus valores. Dê a `title` o valor de `Hello` e a `message` o valor de `Please log in`.

Deve ficar assim:

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

Agora atualize a página e você deve ver esses valores renderizados em sua visão no local correto, como estabelecido no arquivo `index.pug`!

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode conferir o <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">projeto concluído até este ponto</a>.

# --hints--

O Pug deve renderizar as variáveis corretamente.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /pug-variable("|')>Please log in/gi,
    'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
