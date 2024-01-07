---
id: 5b7d72c338cd7e35b63f3e14
title: Melhorar a compatibilidade do CSS com navegadores antigos
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

Ao trabalhar com CSS, você provavelmente terá problemas de compatibilidade entre navegadores em algum momento. É por isso que é importante pensar em um plano B para evitar possíveis problemas.

Quando o navegador analisa o CSS de uma página web, ele ignora todas as propriedades que não reconhece ou suporta. Por exemplo, se você usar uma variável CSS para atribuir uma cor de fundo em um site, o Internet Explorer vai ignorar a cor de fundo porque não oferece suporte a variáveis CSS. Nesse caso, o navegador usará qualquer outro valor que ele encontrar para essa propriedade. Se ele não conseguir encontrar nenhum outro valor definido para essa propriedade, ele reverterá para o valor padrão, que normalmente não é o ideal.

Para evitar esse comportamento, você pode criar um plano B. E isso é tão fácil quanto fornecer outro valor que possua um suporte mais amplo. Dessa forma, um navegador mais antigo terá algo em que se apoiar, enquanto que um navegador mais recente interpretará qualquer estilo declarado posteriormente.

# --instructions--

Parece que uma variável está sendo usada para definir a cor de fundo da classe `.red-box`. Vamos melhorar a compatibilidade do nosso código com os navegadores mais antigos adicionando outra propriedade, `background`, logo antes da propriedade que já existe e definir seu valor para `red`.

# --hints--

O seletor `.red-box` deve possuir uma propriedade reserva para a propriedade `background` existente. Crie outra propriedade `background` com o valor `red` imediatamente antes da propriedade de "background" existente.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
