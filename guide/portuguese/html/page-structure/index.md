---
title: Page Structure
localeTitle: Estrutura da Página
---
## Estrutura da Página

Para criar suas páginas em `HTML` , você precisa saber como estruturar uma página em `HTML` , basicamente, a estruturação de uma página segue a ordem abaixo:

```HTML
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Title of the Page</title> 
  </head> 
  <body> 
    <!-- Content --> 
  </body> 
 </html> 
```

1º - A declaração `<!DOCTYPE html>` deve ser sempre a primeira a aparecer em uma página `HTML` e informar ao navegador qual versão do idioma está sendo usada. Nesse caso, estamos trabalhando com o `HTML5` .

2º - As tags `<html>` e `</html>` informam ao navegador da web onde o código `HTML` inicia e termina.

3º - As tags `<head>` e `</head>` contêm informações sobre o site, exemplo: estilo, meta-tags, scripts, etc…

4º - As tags `<title>` e `</title>` dizem ao navegador qual é o título da página. O título pode ser visto identificando a guia no seu navegador da Internet. O texto definido entre essas tags também é o texto usado como título pelos mecanismos de pesquisa quando eles apresentam as páginas nos resultados de uma pesquisa.

5º - Entre as tags `<body>` e `</ body>` , é colocado o conteúdo da página, que é o que é exibido no navegador.

### Mudanças no HTML5

#### Introdução de tags semânticas

Em vez de usar `<div>` para todos os outros contêineres, várias semânticas (essas tags ajudam os leitores de tela que são usados ​​visualmente tags) como `<header>` `<footer>` . Portanto, é aconselhável usar essas tags em vez de genéricas `<div>` .

#### Mais Informações:

[HTML: Introdução](https://www.w3schools.com/html/html_intro.asp)