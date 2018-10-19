---
title: Create Strings Using Template Literals
localeTitle: Criar Strings Usando Literais de Template
---
Em vez de usar a concatenação de strings, o ES6 oferece literais de modelo para criar strings. Nesse desafio, você precisa usar literais de modelo para criar uma matriz de avisos de texto.

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa e escrever seu próprio código.

### Explicação do Problema:

É necessário usar literais de modelo para retornar uma lista como todos os elementos da matriz, pois o elemento será agrupado em uma tag `<li></li>` .

## Sugestão: 1

*   Use a função `map()` para aplicar os literais do template em todos os elementos `arr`

> _tente resolver o problema agora_

## Dica: 2

*   Dentro do `map()` use uma função de seta que tenha `element` como um parâmetro e retorne `<li></li>` que possui a classe de aviso de texto e contém o `element` dentro dela

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

``const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);``

## Nenhuma solução de mapa ()

Apesar de ser uma solução menos flexível, se você souber o número de elementos antecipadamente, poderá enumerá-los como

``const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];``