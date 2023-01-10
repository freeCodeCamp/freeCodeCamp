---
id: 5f356ed6cf6eab5f15f5cfe6
title: Passo 20
challengeType: 0
dashedName: step-20
---

# --description--

Ao contrário dos outros elementos de conteúdo que você usou até agora, o elemento `div` é usado principalmente para fins de layout de design. Adicione um elemento `div` dentro do elemento `body` e, em seguida, mova todos os outros elementos dentro do novo `div`.

# --hints--

Você deve acrescentar uma tag de abertura `<div>`.

```js
assert(code.match(/<div>/i));
```

Você deve acrescentar uma tag de fechamento `</div>`.

```js
assert(code.match(/<\/div>/i));
```

Você deve manter o elemento `body` preexistente. Verifique se você não excluiu a tag de fechamento.

```js
assert($('body').length === 1);
```

O elemento `div` deve estar dentro do elemento `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

