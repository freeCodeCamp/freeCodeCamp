---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
videoUrl: ''
localeTitle: Obter dados de localização geográfica para localizar coordenadas de GPS de um usuário
---

## Description
<section id="description"> Outra coisa legal que você pode fazer é acessar a localização atual do seu usuário. Cada navegador possui um navegador integrado que pode fornecer essas informações. O navegador obterá a longitude e a latitude atuais do usuário. Você verá um aviso para permitir ou bloquear este site de saber sua localização atual. O desafio pode ser concluído de qualquer forma, desde que o código esteja correto. Ao selecionar Permitir, você verá o texto no telefone de saída alterado para sua latitude e longitude. Aqui está o código que faz isso: <blockquote> if (navigator.geolocation) { <br> navigator.geolocation.getCurrentPosition (function (position) { <br> document.getElementById (&#39;data&#39;). innerHTML = &quot;latitude:&quot; + position.coords.latitude + &quot;&lt;br&gt; longitude:&quot; + position.coords.longitude; <br> }); <br> } </blockquote> Primeiro, verifica se o objeto <code>navigator.geolocation</code> existe. Em caso afirmativo, o método <code>getCurrentPosition</code> nesse objeto é chamado, o que inicia uma solicitação assíncrona para a posição do usuário. Se a solicitação for bem-sucedida, a função de retorno de chamada no método será executada. Essa função acessa os valores do objeto de <code>position</code> para latitude e longitude usando a notação de ponto e atualiza o HTML. </section>

## Instructions
<section id="instructions"> Adicione o código de exemplo dentro das tags de <code>script</code> para verificar a localização atual de um usuário e inseri-lo no HTML. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar <code>navigator.geolocation</code> para acessar a localização atual do usuário.
    testString: 'assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), "Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.");'
  - text: Seu código deve usar <code>position.coords.latitude</code> para exibir a localização latitudinal do usuário.
    testString: 'assert(code.match(/position\.coords\.latitude/g), "Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.");'
  - text: Seu código deve usar <code>position.coords.longitude</code> para exibir a localização longitudinal do usuário.
    testString: 'assert(code.match(/position\.coords\.longitude/g), "Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.");'
  - text: Você deve exibir a posição do usuário no elemento div de <code>data</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")data\1\s*?\)\.innerHTML/g), "You should display the user&#39;s position within the <code>data</code> div element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
