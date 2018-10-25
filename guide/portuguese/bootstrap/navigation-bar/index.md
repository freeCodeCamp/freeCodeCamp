---
title: Navigation Bar
localeTitle: Barra de navegação
---
## Barra de navegação

A estrutura do Bootstrap fornece uma barra de navegação de chamada de recurso. Resumindo, uma barra de navegação (também chamada de navbars) é um cabeçalho na parte superior da página para exibir informações de navegação.

#### Como usar

Para usar as barras de navegação do Bootstrap, você adiciona um elemento `<nav>` ao topo dentro do elemento `<body>` da sua página da web. Existem vários estilos que você pode adicionar para personalizar a exibição de suas barras de navegação.

#### Exemplo de código

Este é o código necessário para criar uma barra de navegação básica.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Estilos de Navbar

O Bootstrap fornece um conjunto de classes na estrutura do Bootstrap para estilizar suas navbars. Essas classes são as seguintes:

*   `navbar navbar-default` Este é o estilo padrão para suas navbars.
*   `navbar navbar-inverse` É semelhante ao estilo padrão, exceto que as cores são invertidas.

#### Adicionando menus suspensos à barra de navegação

Você pode incluir um menu suspenso dentro de uma barra de navegação. Esse recurso exige que você inclua o arquivo javascript do Bootstrap para que ele funcione.

```html

<li class="dropdown"> 
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down 
    <span class="caret"></span> 
  </a> 
 <ul class="dropdown-menu"> 
    <li><a href="#">Item 1</a></li> 
    <li><a href="#">Item 2</a></li> 
    <li><a href="#">Item 3</a></li> 
  </ul> 
 </li> 
```

#### Adicionando botões à barra de navegação

Você pode adicionar botões na barra de navegação. As classes existentes do Botão Bootstrap funcionam, no entanto, você precisará incluir a classe `navbar-btn` no final da lista de classes.

```html

<button class="btn navbar-btn">Button</button> 
```

#### Adicionando formulários à barra de navegação

Você também pode adicionar formulários à barra de navegação. Isso pode ser usado para tarefas como um campo de pesquisa, um campo de login rápido, etc.

```html

<form class="navbar-form navbar-right"> 
  <div class="form-group"> 
      <input type="text" class="form-control" placeholder="Search"> 
  </div> 
  <button type="submit" class="btn btn-default">Search</button> 
 </form> 
```

#### Alinhando elementos à direita na barra de navegação

Em alguns casos, você pode querer alinhar elementos em uma barra de navegação à direita (por exemplo, um botão de login ou inscrição). Para fazer isso, você precisará usar a classe `navbar-right` da `navbar-right` .

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right"> 
      <li><a href="#">Action Link #1</a></li> 
      <li><a href="#">Action Link #2</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Exibindo a barra de navegação independente da rolagem

Em alguns casos, você pode querer manter a barra de navegação na parte superior ou inferior da tela, independentemente da rolagem. Você precisará adicionar a classe `navbar-fixed-top` ou `navbar-fixed-bottom` ao elemento `<nav>` .

```html

<nav class="navbar navbar-default navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Recolhendo a barra de navegação

Em uma tela pequena (como um telefone ou tablet), a barra de navegação ocupará muito espaço. Felizmente a opção de collase a navbar existe. Você pode fazer isso usando o seguinte exemplo.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Exemplos de Navbar

`navbar navbar-default`

[Nome do site](#navbar-default)

*   [Casa](#navbar-default)
*   [Página 1](#navbar-default)
*   [Página 2](#navbar-default)
*   [Página 3](#navbar-default)
Botão

*   [Link de ação 1](#navbar-default)
*   [Link de ação nº 2](#navbar-default)

`navbar navbar-inverse`

[Nome do site](#navbar-inverse)

*   [Casa](#navbar-inverse)
*   [Página 1](#navbar-inverse)
*   [Página 2](#navbar-inverse)
*   [Página 3](#navbar-inverse)
Botão

*   [Link de ação 1](#navbar-inverse)
*   [Link de ação nº 2](#navbar-inverse)

#### Mais Informações:

[Documentação de navbar do Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/)