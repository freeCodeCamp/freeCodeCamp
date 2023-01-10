---
id: 587d78a9367417b2b2512ae9
title: Usar uma curva de Bézier para mover um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

Em um desafio anterior, tratamos da palavra-chave `ease-out`, que descreve uma mudança de animação que começa acelerando e desacelera ao final da animação. À direita, a diferença entre a palavra-chave `ease-out` (para o elemento azul) e a palavra-chave `linear` (para o elemento vermelho) é demonstrada. Progressões de animação semelhantes à palavra-chave `ease-out` podem ser alcançadas usando a função de curva de Bézier cúbica.

Em geral, alterar os pontos de ancoragem `p1` (ponto 1) e `p2` (ponto 2) leva à criação de diferentes curvas de Bézier, que controlam como a animação progride ao longo do tempo. Aqui está um exemplo de curva de Bézier usando valores para imitar o estilo `ease-out`:

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

Lembre-se de que todas as funções `cubic-bezier` começam com `p0` em (0, 0) e terminam com `p3` em (1, 1). Neste exemplo, a curva se move mais rápido através do eixo Y (começa em 0, vai para o valor de y 0 de `p1`, então vai para o valor de y 1 de `p2`). Então, ela se move através do eixo X (0 para o início, então 0 para `p1`, até 0.58 para `p2`). Como resultado, a mudança no elemento animado progride mais rápido do que o tempo da animação para aquele segmento. Perto do final da curva, a relação entre a mudança nos valores x e y se inverte - o valor de y se move de 1 para 1 (sem mudança) e o valor de x se move de 0.58 para 1, fazendo com que o progresso das mudanças na animação seja mais lento em comparação com a duração da animação.

# --instructions--

Para ver o efeito desta curva de Bézier em ação, altere a `animation-timing-function` do elemento com id de `red` para um `cubic-bezier` função com x1, y1, x2, y2 definidos respectivamente com os valores `0, 0, 0.58, 1`. Isso fará com que os dois elementos progridam na animação de maneira semelhante.

# --hints--

O valor da propriedade `animation-timing-function` do elemento com o id `red` deve ser uma função `cubic-bezier` com os valores x1, y1, x2, y2 definidos respectivamente como 0, 0, 0.58, 1.

```js
assert(
  $('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)'
);
```

O elemento com o id `red` não deve mais ter a propriedade `animation-timing-function` de valor `linear`.

```js
assert($('#red').css('animation-timing-function') !== 'linear');
```

O valor da propriedade `animation-timing-function` para o elemento com o id `blue` não deve ser alterado.

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $('#blue').css('animation-timing-function')
);
assert(
  blueBallAnimation == 'ease-out' ||
    blueBallAnimation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

# --solutions--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```
