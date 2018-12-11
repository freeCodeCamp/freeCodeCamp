---
title: How to Create a Dropdown Menu with CSS and JavaScript
localeTitle: Como criar um menu suspenso com CSS e JavaScript
---
## Como criar um menu suspenso com CSS e JavaScript

Neste tutorial, você aprenderá a criar um menu suspenso simples com JavaScript, HTML e CSS. Vamos percorrer o código HTML, CSS e Javascript, mas prestando mais atenção à programação, já que este é um tutorial do JS. Usaremos apenas JS e CSS simples, sem frameworks ou pré-processadores. A única (espécie de exceção) será importar o arquivo CSS do [Font Awesome](https://fontawesome.com/) porque usaremos um de seus ícones.

Isso é direcionado a desenvolvedores que têm um entendimento médio de HTML, CSS e JS. Tentei torná-lo o mais limpo possível, mas não vou me concentrar muito nos detalhes aqui. Espero que todos gostem.

## Screenshots

É assim que o resultado do código se parece:

Tela inicial:

![](https://i.imgur.com/jrnu6mE.png)

Dropdown aberto:

![](https://i.imgur.com/gszPtRa.png)

Dropdown com a opção selecionada:

![](https://i.imgur.com/TKXxZGF.png)

#### HTML:

Nesta seção, discutiremos a implementação do código HTML para a página de demonstração. Para começar, vamos ver o código `<head>`

```html

<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <title>Dropdown Example</title> 
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"> 
    <link rel="stylesheet" href="styles.css"> 
 </head> 
```

Este é basicamente um texto padronizado em HTML, com a exceção das tags de `link` carregam as duas folhas de estilo CSS que usaremos neste tutorial: os estilos Font Awesome e o arquivo `styles.css` , onde definiremos os estilos desta página.

Então, há o resto do arquivo HTML, o corpo:

```html

<body> 
    <div class='dropdown'> 
        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div> 
 
        <div class='menu pointerCursor hide'> 
            <div class='option' id='option1'>Option 1</div> 
            <div class='option' id='option2'>Option 2</div> 
            <div class='option' id='option3'>Option 3</div> 
            <div class='option' id='option4'>Option 4</div> 
        </div> 
 
    </div> 
    <span id='result'>The result is: </span> 
    <script> 
      ... 
    </script> 
 </body> 
 </html> 
```

Esta seção pode ser dividida em 3 partes principais:

*   O `.dropdown` div, onde a estrutura do elemento dropdown será definida.
*   O elemento `#result` , que conterá a opção selecionada pelo usuário, no elemento suspenso.
*   O script escrito na tag `<script>` . Sua implementação está escondida aqui, porque seus detalhes serão explicados na última seção deste tutorial.

O elemento dropdown é um `div` contém um `title` e elementos de `menu` . O primeiro apenas define o texto que será apresentado no elemento antes que qualquer opção seja selecionada e o segundo definirá as opções que serão selecionáveis ​​pelo elemento.

O elemento de `result` existe apenas para mostrar a você qual opção está selecionada no momento.

#### Estilos:

Abaixo, você pode verificar o código css completo. Como você pode ver, ele faz uso da `transition` de CSS3 e `transform` construções.

Por favor, preste atenção às definições das classes `.dropdown` . Estes são usados ​​para definir o layout para o componente do contêiner suspenso, bem como seus elementos internos, como o `.title` e suas `.option` .

```css
body{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
 } 
 
 .hide { 
    max-height: 0 !important; 
 } 
 
 .dropdown{ 
    border: 0.1em solid black; 
    width: 10em; 
    margin-bottom: 1em; 
 } 
 
 .dropdown .title{ 
    margin: .3em .3em .3em .3em; 
    width: 100%; 
 } 
 
 .dropdown .title .fa-angle-right{ 
    float: right; 
    margin-right: .7em; 
    transition: transform .3s; 
 } 
 
 .dropdown .menu{ 
    transition: max-height .5s ease-out; 
    max-height: 20em; 
    overflow: hidden; 
 } 
 
 .dropdown .menu .option{ 
    margin: .3em .3em .3em .3em; 
    margin-top: 0.3em; 
 } 
 
 .dropdown .menu .option:hover{ 
    background: rgba(0,0,0,0.2); 
 } 
 
 .pointerCursor:hover{ 
    cursor: pointer; 
 } 
 
 .rotate-90{ 
    transform: rotate(90deg); 
 } 
```

#### JavaScript:

Agora vamos ver como a parte Javascript é implementada. Primeiro vamos passar pelas definições das funções e, em seguida, o código que chama essas funções para fazer as ações suspensas acontecerem.

Basicamente, existem 3 ações que ocorrem dependendo do que a interação do usuário é, como seus ouvintes são adicionados aos elementos DOM:

1.  Clicando no elemento suspenso
2.  Selecionando uma das opções suspensas
3.  Alterando a opção atualmente selecionada

Gostaria de deixar claro que estamos usando as funções de seta ( `() => {}` ) e a palavra-chave `const` , que são recursos do ES6. Você provavelmente é bom se estiver usando uma versão recente do seu navegador, mas lembre-se disso.

#### 1\. Clicar no elemento suspenso

```Javascript
function toggleClass(elem,className){ 
    if (elem.className.indexOf(className) !== -1){ 
        elem.className = elem.className.replace(className,''); 
    } 
    else{ 
        elem.className = elem.className.replace(/\s+/g,' ') +   ' ' + className; 
    } 
 
    return elem; 
 } 
 
 function toggleDisplay(elem){ 
    const curDisplayStyle = elem.style.display; 
 
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){ 
        elem.style.display = 'block'; 
    } 
    else{ 
        elem.style.display = 'none'; 
    } 
 } 
 
 
 function toggleMenuDisplay(e){ 
    const dropdown = e.currentTarget.parentNode; 
    const menu = dropdown.querySelector('.menu'); 
    const icon = dropdown.querySelector('.fa-angle-right'); 
 
    toggleClass(menu,'hide'); 
    toggleClass(icon,'rotate-90'); 
 } 
```

Quando o elemento suspenso é clicado, ele é aberto (se estiver fechado) ou fechado (se estiver aberto). Isso acontece vinculando `toggleMenuDisplay` ao listener de evento de clique no elemento suspenso. Esta função alterna a exibição de seu `menu` elemento pelo uso dos `toggleDisplay` e `toggleClass` funções.

#### 2\. Selecionando uma das opções suspensas

```Javascript
function handleOptionSelected(e){ 
    toggleClass(e.target.parentNode, 'hide'); 
 
    const id = e.target.id; 
    const newValue = e.target.textContent + ' '; 
    const titleElem = document.querySelector('.dropdown .title'); 
    const icon = document.querySelector('.dropdown .title .fa'); 
 
 
    titleElem.textContent = newValue; 
    titleElem.appendChild(icon); 
 
    //trigger custom event 
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); 
    //setTimeout is used so transition is properly shown 
    setTimeout(() => toggleClass(icon,'rotate-90',0)); 
 } 
```

#### 3\. Alterar a opção atualmente selecionada

```Javascript
function handleTitleChange(e){ 
    const result = document.getElementById('result'); 
 
    result.innerHTML = 'The result is: ' + e.target.textContent; 
 } 
```

A função `handleTitleChange` está vinculada ao evento de `change` personalizado no elemento `.title` , para alterar o conteúdo do elemento `#result` sempre que o elemento title for alterado. O acionamento deste evento é feito na seção anterior.

#### Código principal

```Javascript
//get elements 
 const dropdownTitle = document.querySelector('.dropdown .title'); 
 const dropdownOptions = document.querySelectorAll('.dropdown .option'); 
 
 //bind listeners to these elements 
 dropdownTitle.addEventListener('click', toggleMenuDisplay); 
 dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected)); 
 document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange); 
```

Na seção principal, há apenas um código simples para obter os elementos title e options do menu suspenso para vincular a eles os eventos discutidos na última seção.

## Demonstração

O código completo e a demonstração deste aplicativo podem ser encontrados [aqui](https://codepen.io/GCrispino/pen/EEXmYd) .

## Mais Informações

*   [Introdução ao ES6](https://guide.freecodecamp.org/javascript/es6)
*   [Funções de seta](https://guide.freecodecamp.org/javascript/es6/arrow-functions/)
*   [Deixe e Const](https://guide.freecodecamp.org/javascript/es6/let-and-const/)