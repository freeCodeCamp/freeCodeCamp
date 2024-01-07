---
id: 587d78aa367417b2b2512aed
title: Declarar o doctype de um documento HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

Os desafios, até o momento, trataram de elementos HTML específicos e de seus usos. No entanto, existem alguns elementos que garantem uma estrutura global à sua página, devendo ser incluídos em todos os documentos HTML.

Na parte superior do documento, você precisa informar ao navegador qual a versão do HTML você está utilizando. O HTML é uma linguagem em evolução, sendo atualizada regularmente. A maior parte dos navegadores mais conhecidos dá suporte à especificação mais recente, o HTML5. Páginas da web mais antigas, contudo, podem utilizar versões anteriores da linguagem.

Você informa isso ao navegador adicionando a tag `<!DOCTYPE ...>` na primeira linha, onde a parte que diz `...` é a versão do HTML. Para o HTML5, use apenas `<!DOCTYPE html>`.

O `!` e o `DOCTYPE` em letras maiúsculas são importantes, especialmente em navegadores mais antigos. O `html` não diferencia maiúsculas de minúsculas.

Em seguida, o resto do seu código HTML precisa ser colocado dentro de tags `html`. A tag de abertura `<html>` vai diretamente abaixo da linha que diz `<!DOCTYPE html>`, enquanto a tag de fechamento `</html>` vai ao final da página.

Aqui vemos um exemplo da estrutura inicial de uma página. Seu código HTML é colocado no espaço entre as duas tags `html`.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Adicione uma tag `DOCTYPE` na parte superior do documento HTML em branco no editor de código para utilizar a versão 5 do HTML. Abaixo dela, adicione as tags `html` de abertura e de fechamento, que ficarão ao redor do elemento `h1`. O cabeçalho pode incluir qualquer texto.

# --hints--

O código deve incluir a tag `<!DOCTYPE html>`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Deve haver um elemento `html`.

```js
assert($('html').length == 1);
```

As tags `html` devem estar ao redor do elemento `h1`.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
