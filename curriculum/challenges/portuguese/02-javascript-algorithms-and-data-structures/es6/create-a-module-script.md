---
id: 5cddbfd622f1a59093ec611d
title: Separar seus scripts em módulos
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

O JavaScript nasceu com o objetivo de cumprir um pequeno papel em uma web onde tudo era, na maior parte, HTML. Hoje, o JavaScript é gigante. Para se ter noção, alguns websites são construídos quase que inteiramente em JavaScript. A fim de tornar o JavaScript mais modular, limpo e passível de manutenção, a versão ES6 introduziu uma forma mais simples de compartilhar códigos entre arquivos JavaScript. Dessa forma, você consegue exportar partes de um arquivo e usá-los em arquivos externos bem como importar as partes de que você precisa. Para tirar proveito dessa funcionalidade, você precisa criar uma tag script com o atributo `type` de valor `module` no seu documento HTML. Exemplo:

```html
<script type="module" src="filename.js"></script>
```

O script do exemplo acima agora é um módulo (`module`) e pode usar os recursos `import` e `export` (você aprenderá sobre eles nos próximos desafios).

# --instructions--

Adicione uma tag script ao documento HTML do tipo `module` e dê a ela o caminho do arquivo `index.js`

# --hints--

Você deve criar uma tag `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

A tag `script` deve ter o atributo `type` com o valor `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

A tag `script` deve ter o atributo `src` com o valor `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
