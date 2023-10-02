---
id: 587d7faf367417b2b2512be8
title: Obter dados de geolocalização para encontrar as coordenadas de GPS de um usuário
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Outra coisa legal que você consegue fazer é acessar a localização atual do usuário. Cada navegador tem um modo de navegação incorporado que pode dar a você esta informação.

O modo de navegação obterá a longitude e a latitude atuais do usuário.

Será solicitado que você permita ou evite que este site conheça sua localização atual. O desafio pode ser concluído das duas maneiras, desde que o código esteja correto.

Ao selecionar que você permite, você verá o texto na saída do telefone mudar para sua latitude e longitude atuais.

Aqui está o código para fazer isso:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Primeiro, ele verifica se o objeto `navigator.geolocation` existe. Se existir, o método `getCurrentPosition` do objeto é chamado. Ele inicia uma solicitação assíncrona da posição do usuário. Se a solicitação tiver sucesso, a função de callback do método é executada. Essa função acessa os valores do objeto `position` para latitude e longitude usando a notação de ponto e atualiza o HTML.

# --instructions--

Adicione o código de exemplo entre as tags `script` para verificar a localização atual do usuário e coloque-o no HTML.

# --hints--

Seu código deve usar `navigator.geolocation` para acessar a localização atual do usuário.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Seu código deve usar `position.coords.latitude` para acessar a localização latitudinal do usuário.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Seu código deve usar `position.coords.longitude` para acessar a localização longitudinal do usuário.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Você deve exibir a posição do usuário dentro do elemento `div` com o `id="data"`.

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
