---
id: 63ee354c0d8d4841c3a70921
videoId: LGQuIIv2RVA
title: Questão H sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-h
---

# --description--

O `CSS` em linha torna possível adicionar estilos diretamente em elementos em `HTML`, embora este método não seja recomendado:

```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

A primeira coisa a observar é que não há seletores aqui, já que os estilos estão sendo adicionados diretamente à tag de abertura da `<div>` em si. Em seguida, você tem o atributo do `style`, com seu valor dentro do par de aspas sendo as declarações.

Se você precisar adicionar um estilo único para um único elemento, este método pode funcionar bem. Geralmente, porém, essa não é exatamente a maneira recomendada de adicionar se CSS ao HTML por alguns motivos:

Pode se tornar um pouco confuso rapidamente quando você começar a adicionar diversas declarações a um único elemento, fazendo com que o seu arquivo HTML se torne desnecessariamente inchado. Se você quiser que muitos elementos tenham o mesmo estilo, você terá que copiar e colar o mesmo estilo para cada elemento individual, causando muitas repetições desnecessárias e mais inchaço. Qualquer CSS em linha sobrescreverá os outros dois métodos, o que pode causar resultados inesperados. (Enquanto não vejamos isso em detalhes aqui, é possível tirar vantagem desse método).

# --question--

## --text--

Qual das seguintes opções é a principal desvantagem de se usar CSS em linha?

## --answers--

Pode se tornar um pouco confuso rapidamente quando você começar a adicionar diversas declarações a um único elemento, fazendo com que o seu arquivo HTML se torne desnecessariamente inchado.

---

Requer o uso de seletores, o que pode ser complicado para iniciantes.

---

Qualquer CSS em linha sobrescreverá os outros dois métodos (interno e externo), o que pode causar resultados inesperados.


## --video-solution--

3
