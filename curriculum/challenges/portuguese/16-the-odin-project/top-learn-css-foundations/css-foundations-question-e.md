---
id: 63ee35370d8d4841c3a7091e
videoId: LGQuIIv2RVA
title: Questão E sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-e
---

# --description--

Combinadores nos permitem combinar vários seletores de modo diferente do que por agrupamento ou encadeamento, pois mostram uma relação entre os seletores. Existem quatro tipos de combinadores no total, mas, por enquanto, mostraremos apenas o combinador descendente, que é representado no CSS por um espaço único entre seletores. Um combinador de descendente fará com que elementos que coincidam com o último seletor sejam selecionados se também tiverem um ancestral (pai, avô, etc.) que corresponda ao seletor anterior.

Então, algo como `.ancestor .child` selecionaria um elemento com a classe `child` se tiver um ancestral com a classe `ancestor`. Outro modo de pensar isso é imaginar que o filho só será selecionado se estiver aninhado dentro do `ancestor`, não importando o nível de aninhamento dentro desse ancestral. Dê uma olhada rápida no exemplo abaixo e veja se pode dizer quais elementos serão selecionados com base na regra de CSS fornecida:

```html
<!-- index.html -->

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
```

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

No exemplo acima, os dois primeiros elementos com a classe `contents` (`B` e `C`) seriam selecionados, mas o último elemento (`D`) não seria. Seu palpite estava correto?

Não há limite para quantos combinadores você pode adicionar a uma regra, então `.one .two .three .four` seria totalmente válido. Isso apenas selecionaria um elemento que tem uma classe `four` se tiver um ancestral com uma classe de `three` e se aquele ancestral tiver seu próprio ancestral com a classe `two` e assim por diante. No entanto, você geralmente vai quer evitar tentar selecionar elementos que precisam deste nível de aninhamento, pois pode ficar muito confuso e longo, além de causar problemas quando se trata de especificidade.

# --question--

## --text--

O que faz o combinador de descendente?

## --answers--

Ele agrupa certas classes que partilhem das mesmas declarações.

---

Ele dá a capacidade de selecionar um elemento que compartilhe a mesma `class` e o mesmo `id`.

---

Ele permite selecionar um elemento com base na sua relação com seu ancestral (pai, avô e assim por diante).


## --video-solution--

3
