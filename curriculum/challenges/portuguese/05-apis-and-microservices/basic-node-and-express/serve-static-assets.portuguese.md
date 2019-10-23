---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
localeTitle: Ative os recursos estáticos
challengeType: 2
---

## Description
<section id='description'> 
Um servidor HTML geralmente possui um ou mais diretórios que são acessíveis pelo usuário. Você pode colocar aí os recursos estáticos necessários para sua aplicação (folhas de estilo, scripts, imagens). No Express, você pode colocar em prática essa funcionalidade usando o middleware <code>express.static(path)</code> , em que o parâmetro é o caminho absoluto da pasta que contém os ativos. Se você não sabe o que é um middleware, não se preocupe. Vamos discutir sobre isso mais tarde em detalhes. Basicamente middlewares são funções que interceptam manipuladores de rota, adicionando algum tipo de informação. Um middleware precisa ser montado usando o método <code>app.use(path, middlewareFunction)</code> . O primeiro argumento de caminho é opcional. Se você não passar, o middleware será executado para todas as requisições. 
Monte o middleware <code>express.static()</code> para todas as solicitações com <code>app.use()</code> . O caminho absoluto para a pasta de recursos é <code>__dirname + /public</code> . 
Agora, seu aplicativo deve poder exibir uma folha de estilo CSS. De fora a pasta pública aparecerá montada no diretório raiz. Sua primeira página deve parecer um pouco melhor agora! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu aplicativo deve exibir arquivos de recursos do diretório <code>/public</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
