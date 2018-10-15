---
title: Collapse
localeTitle: Colapso
---
## Colapso

O Collapse é um plug-in que ajuda a ocultar ou revelar elementos usando uma animação suave. Os desenvolvedores geralmente usam o colapso de bootstrap para ocultar ou revelar detalhes secundários da seção da página da Web. Por exemplo, você pode ter uma lista de itens com descrições muito longas. A exibição de tudo consome muito espaço para que o colapso do bootstrap possa ser usado para ocultar e revelar a descrição.

O colapso do Bootstrap é fornecido como um plug-in separado chamado collapse.js, o que significa que ele pode ser usado fora do ambiente de bootstrap. O plugin em si pode ser encontrado aqui http://getbootstrap.com/2.0.4/javascript.html#collapse.

O colapso de bootstrap pode ser usado com alguns elementos, um botão, tag âncora ou painel. Para usar o colapso você precisa de pelo menos dois elementos, um elemento controlará o estado de ocultar ou revelar do outro elemento.

O plug-in de colapso funciona alterando a classe no elemento recolhível. Existem três classes possíveis:

*   .collapse - esta classe esconde o elemento
*   .collapsing - essa classe se apega durante a transição
*   .collapse.in - esta classe mostra o elemento

### Como usá-lo

Para usar o colapso, você pode fazer isso de duas maneiras:

*   Usando `href` na tag `<a>`
*   Usando o `data-target` na tag `<button>`

O valor em `href` ou `data-target` será o seletor do elemento a ser recolhido. Se você decidir usar a tag `<a>` ou `<button>` , é necessário o `data-toggle="collapse"` .

O elemento a recolher deve conter a classe `.collapse` .

### Exemplos com botões

```html

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Link with href 
 </a> 
 <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Button with data-target 
 </button> 
 
 <div class="collapse" id="collapseExample"> 
  <div class="well"> 
    ... 
  </div> 
 </div> 
```

No exemplo acima, usamos um botão e uma tag âncora para controlar um elemento div. O botão e a âncora que são os elementos de controle precisam de duas coisas, um atributo para especificar que o elemento de controle é para o recolhimento e outro atributo para especificar qual elemento ele controla (oculta ou revela).

Ambos têm um atributo de _alternância de dados_ com o _colapso_ do valor que especifica que eles devem ser usados ​​para _recolher_ um elemento. A marca de âncora usa um atributo _href_ para especificar o elemento que ele controla, enquanto o botão usa um atributo _data-target_ para especificar o elemento que ele controla.

> Você pode ver uma demonstração do botão aqui https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible&stacked=h
> 
> Você pode ver uma demonstração da marca de âncora aqui https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible2&stacked=h

## Exemplo com acordeão

```html

<div class="panel panel-default"> 
    <div class="panel-heading" role="tab" id="headingOne"> 
      <h4 class="panel-title"> 
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
          Collapsible Group Item #1 
        </a> 
      </h4> 
    </div> 
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> 
      <div class="panel-body"> 
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
      </div> 
    </div> 
  </div> 
```

No exemplo acima, usamos o colapso de bootstrap para criar um acordeão. O acordeão é simplesmente um painel de bootstrap no qual o cabeçalho é exibido e é usado para controlar o corpo do painel.

A cabeça do painel contém uma tag âncora que é usada para controlar o estado de colapso do corpo. Portanto, anexamos a _alternância de dados_ para especificar que esse elemento é usado para recolher e _href_ para especificar o elemento que ele oculta ou revela. Também podemos ter um grupo de painéis para criar um grupo de painéis que possa ser recolhido no painel.

> Você pode ver uma demonstração do colapso do painel aqui https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs acordeão _desmontável_ e empilhado = h

### Elemento de conteúdo

Um parágrafo!

```html

<p>Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

1.  Adicione a classe `.collapse` para declarar que o parágrafo é um elemento que pode ser `.collapse` .
2.  Adicione o `id` para tornar este elemento colapsível acessível para o elemento controlador.

```html

<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

### Elemento controlador

Um botão!

```html

<button>Click Me To See Some Magic!</button> 
```

1.  Adicione o atributo `data-toggle="collapse"` para controlar o elemento colapsável.
2.  Adicione o atributo `data-target="#id"` para referenciar o elemento recolhível com seu id.

```html

<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button> 
```

## Exemplo

```html

<p> 
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Link with href 
  </a> 
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Button with data-target 
  </button> 
 </p> 
 <div class="collapse" id="collapseExample"> 
  <div class="card card-block"> 
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
  </div> 
 </div> 
```

### Usando com JavaScript

Este plug-in permite usá-lo com JavaScript, onde você só precisa selecionar o elemento que deseja recolher para habilitá-lo:

```js
$('.collapsible-element').collapse(); 
```

O `collapse` método aceita um objeto opcional onde você pode definir o estado inicial do elemento dobrável. As opções são:

*   `toggle` : Ele irá esconder ou mostrar o elemento dependendo do seu estado. Se estiver oculto, será mostrado, se for mostrado, ficará oculto.
*   `hide` : `hide` o elemento.
*   `show` : Mostra o elemento.

```js
$('.collapsible-element').collapse('hide'); 
```

Além disso, existem alguns métodos expostos para conectar-se à funcionalidade de recolhimento:

*   `show.bs.collapse` : dispara imediatamente quando o método da instância de `show` é chamado.
*   `shown.bs.collapse` : `shown.bs.collapse` quando um elemento de `shown.bs.collapse` foi tornado visível para o usuário (aguardará a conclusão das transições CSS).
*   `hide.bs.collapse` : Disparado imediatamente quando o método `hide` foi chamado.
*   `hidden.bs.collapse` : `hidden.bs.collapse` quando um elemento de `hidden.bs.collapse` foi ocultado do usuário (aguardará a conclusão das transições CSS).

```js
$('.collapsible-element').on('show.bs.collapse', function() { 
  // for example you want to make an AJAX call to get some data to put in the collapsible element. 
 }) 
```

### Veja em Ação

![Texto alternativo](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### Mais Informações:

[O guia oficial do Bootstrap 4 sobre o colapso](https://v4-alpha.getbootstrap.com/components/collapse/)