---
id: 637f4e7972c65bc8e73dfe2b
title: Questão E de Trabalhando com textos
challengeType: 15
dashedName: working-with-text-question-e
---

# --description--

Você deve ter notado que em todos os exemplos desta lição, você faz a indentação de elementos que estejam dentro de outros elementos. Isso é conhecido como aninhamento de elementos.

Quando você aninha elementos dentro de outros elementos, cria um relacionamento de pai e filho entre eles. Os elementos aninhados são os filhos e o elemento dentro dos quais eles estão aninhados é o pai.

No exemplo seguinte, `body` é o pai e o elemento `p` é o filho:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
```

Assim como nas relações humanas, os elementos-pai do HTML podem ter muitos filhos. Elementos no mesmo nível de aninhamento são considerados irmãos.

Por exemplo, os dois elementos `p` do código a seguir são irmãos, já que ambos são filhos de `body` e estão no mesmo nível de aninhamento um do outro:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
```

Você usa a indentação para tornar o nível de aninhamento claro e legível para você e para outros desenvolvedores que trabalharão com o seu HTML no futuro. Recomenda-se a indentação de qualquer elemento filho com dois espaços.

As relações de pai, filho e irmãos entre os elementos se tornarão muito mais importantes depois, ao começar a estilizar seu HTML com CSS e ao adicionar um comportamento com JavaScript. Agora, porém, é apenas importante conhecer a distinção entre o modo como os elementos estão relacionados e a terminologia utilizada para descrever as suas relações.

# --question--

## --text--

Que relação existe entre dois elementos se eles estiverem no mesmo nível de aninhamento?

## --answers--

Os elementos são os pais um do outro.

---

Os elementos são os filhos um do outro.

---

Os elementos são irmãos.

## --video-solution--

3
