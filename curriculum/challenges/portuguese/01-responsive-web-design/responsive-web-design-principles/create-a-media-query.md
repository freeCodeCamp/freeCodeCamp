---
id: 587d78b0367417b2b2512b08
title: Criar media queries
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Media Queries são uma nova técnica introduzida no CSS3 que altera a apresentação do conteúdo baseando-se nas diferentes dimensões da janela de exibição (viewport). A janela de exibição é a área de uma página web visível para o usuário, e é diferente dependendo do dispositivo utilizado para acessar o site.

Media Queries consistem em um media type. Se esse media type corresponder ao tipo de dispositivo no qual o documento é exibido, os estilos são aplicados. Você pode ter quantos seletores e estilos quiser dentro de sua media query.

Aqui está um exemplo de media query que retorna o conteúdo quando a largura do dispositivo é menor ou igual a `100px`:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

e a media query a seguir retorna o conteúdo quando a altura do dispositivo é maior ou igual a `350px`:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Lembre-se de que o CSS dentro da media query é aplicado apenas se o tipo de mídia corresponder ao do dispositivo que está sendo usado.

# --instructions--

Adicione uma media query, de modo que a tag `p` tenha a propriedade `font-size` com o valor de `10px` quando a altura do dispositivo for menor ou igual a `800px`.

# --hints--

Você deve declarar uma `@media` query para dispositivos que possuam uma altura (`height`) menor ou igual a `800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

O elemento `p` deve ter um `font-size` de `10px` quando a altura (`height`) do dispositivo for menor ou igual a `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

O elemento `p` deve ter um `font-size` inicial de `20px` quando a altura (`height`) do dispositivo for menor ou igual a `800px`.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
