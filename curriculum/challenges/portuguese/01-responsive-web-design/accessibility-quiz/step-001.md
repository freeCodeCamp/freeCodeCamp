---
id: 614ccc21ea91ef1736b9b578
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

Bem-vindo(a) a primeira parte do Quiz de Acessibilidade. Como você está se tornando um desenvolvedor experiente de HTML e CSS, começamos com o boilerplate básico.

Comece esta jornada de acessibilidade fornecendo um atributo `lang` ao seu elemento `html`. Isso ajudará os leitores de tela a identificar o idioma da página.

# --hints--

Você deve dar ao elemento `html` um atributo `lang`. _Dica: você pode usar o valor `pt-br` para Português._

```js
assert.match(code, /<html\s+lang=('|")[\w\-]+?\1\s*>/i);
// TODO: Isto deve/ pode ser corrigido no builder.js
// assert.notThrow(Intl.getCanonicalLocales(document.querySelector('html').lang));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
--fcc-editable-region--
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>

  </body>
</html>
--fcc-editable-region--

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}
```
