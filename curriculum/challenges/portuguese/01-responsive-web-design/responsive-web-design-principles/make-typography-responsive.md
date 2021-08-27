---
id: 587d78b1367417b2b2512b0c
title: Tornar a tipografia responsiva
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

Em vez de usar `em` ou `px` para dimensionar o texto, você pode usar unidades relativas à viewport para ter uma tipografia responsiva. As unidades de viewport, como as porcentagens, são unidades relativas, mas são baseadas em itens diferentes. As unidades de viewport são relativas às dimensões da viewport (largura ou altura) de um dispositivo e as porcentagens são relativas ao tamanho do elemento pai.

As quatro unidades de viewport são:

<ul><li><code>vw</code> (largura da viewport): <code>10vw</code> seria 10% da largura da viewport.</li><li><code>vh</code> (altura da viewport): <code>3vh</code> seria 3% da altura da viewport.</li><li><code>vmin</code> (mínimo da viewport): <code>70vmin</code> seria 70% da menor dimensão da viewport (altura ou largura).</li><li><code>vmax</code> (máximo da viewport): <code>100vmax</code> seria 100% da maior dimensão da viewport (altura ou largura).</li></ul>

Vemos aqui um exemplo que define a largura da tag `body` para 30% da largura da viewport.

```css
body { width: 30vw; }
```

# --instructions--

Defina a largura (`width`) da tag `h2` para 80% da largura da viewport e a largura (`width`) do parágrafo para 75% da menor dimensão da viewport.

# --hints--

A tag `h2` deve ter a propriedade `width` com o valor de 80vw.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

A tag `p` deve ter a propriedade `width` com o valor de 75vmin.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
