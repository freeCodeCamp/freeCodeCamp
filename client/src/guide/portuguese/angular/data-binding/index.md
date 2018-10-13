---
title: Data Binding
localeTitle: Ligação de dados
---
# Ligação de dados

#### Motivação

Os dados geralmente definem a aparência de um aplicativo. A interpretação desses dados na interface do usuário envolve lógica de classe ( `.component.html` ) e uma exibição de modelo ( `.component.ts` ). Angular conecta-os através da vinculação de dados. Pense na ligação de dados como uma ferramenta para interação de componentes.

#### Componente e Modelo

O componente armazena a maior parte de sua lógica e dados dentro de sua classe decorada com `@Component` . Esse decorador define a classe como um componente com HTML de modelo. O modelo do componente representa a classe dentro do aplicativo. O foco aqui precisa estar entre a classe do componente e o modelo HTML.

É aqui que ocorre a ligação de dados. Propriedades e eventos do elemento recebem valores atribuídos. Esses valores, definidos pela classe do componente, servem para uma das duas funções. Uma é produzir dados que o modelo recebe. O outro manipula eventos emitidos pelo elemento template.

![Exemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image4.png)

Tente usar essa imagem como um modelo mental para a próxima seção.

#### Direções de Encadernação

Existem duas maneiras de vincular os dados: unidirecional e bidirecional. Angular tecnicamente só usa fluxo de dados unidirecional. O fluxo bidirecional é basicamente unidirecional. Acontece em duas aplicações de fluxo unidirecional, uma vez para cada direção. Mais sobre isso depois.

O fluxo unidirecional define a interação unidirecional. O componente envia dados para o modelo ou o modelo emite um evento para a lógica do componente. As alterações de dados dentro do escopo do modelo não são percoladas na classe do componente. A emissão de eventos é uma transação unidirecional que começa nos elementos do modelo.

Bidirecional constitui ambas as direções. Isso significa que as alterações nos dados na lógica da classe ou no HTML do modelo persistem entre si. O escopo das mudanças é a visão do componente. A exibição inclui a classe e o modelo do componente juntos.

#### Propriedades do elemento

Para reconhecer propriedades de elemento vinculado a dados, o Angular usa uma sintaxe especial de colchetes.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  value:type = /* some value of type */; 
 } 
```

```html

<!-- my.component.html --> 
 <any-element [property]=“value”>innerHTML</any-element> 
```

Fique comigo neste.

`[property]` espelha a propriedade no nó de objeto do elemento DOM (Domain Object Model). Não confunda as propriedades do objeto com os atributos de um elemento DOM. Propriedades e atributos geralmente compartilham o mesmo nome e fazem a mesma coisa. Há uma distinção clara no entanto.

Lembre-se que `attr` (atributos) é uma propriedade única do objeto DOM subjacente. Ele é declarado na instanciação do DOM com valores de atributo correspondentes à definição do elemento. Mantém o mesmo valor depois disso. Cada propriedade possui seu próprio campo de valor-chave em um nó de objeto DOM. Essas propriedades são pós-instanciação mutável.

Conheça a diferença entre atributos e propriedades. Isso levará a um melhor entendimento de como o Angular vincula dados a propriedades (binding de propriedade). Angular dificilmente ligará dados aos atributos de um elemento. Exceções a isso são muito raras. Uma última vez: Angular liga os dados do componente às propriedades, não aos atributos!

Referindo-se ao exemplo, o `[ … ]` na atribuição da propriedade do elemento tem um significado especial. Os colchetes mostram que a `property` está vinculada ao `“value”` à direita da atribuição.

`value` também tem um significado especial dentro do contexto dos parênteses. `value` por si só é uma string literal. Angular lê e combina seu valor com os membros da classe do componente. Angular substituirá o valor do atributo de membro correspondente. Isso, é claro, refere-se à mesma classe de componente que hospeda o modelo HTML.

O fluxo unidirecional de dados do componente para o modelo está completo. O membro correspondido à designação direita da propriedade entre colchetes fornece o `value` . Observe que as alterações no valor do membro na classe do componente se filtram para o modelo. Essa é a detecção de alterações do Angular em funcionamento. Alterações no escopo do modelo não afetam o membro da classe do componente.

Key take-away: a classe de componentes fornece os dados enquanto o modelo os exibe.

Não mencionei que os valores dos dados também podem aparecer no `innerHTML` um componente. Este último exemplo implementa chaves duplas. O Angular reconhece essas chaves e interpola os dados correspondentes da classe do componente no `innerHTML` da `div` .

```html

<div>The value of the component class member 'value' is {{value}}.</div> 
```

#### Manipulação de eventos

Se o componente fornecer dados, o modelo fornecerá eventos.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  handler(event):void { 
      // function does stuff 
  } 
 } 
```

```html

// my.component.html 
 <any-element (event)=“handler($event)”>innerHTML</any-element> 
```

Isso funciona de maneira semelhante à vinculação de propriedade.

O `(event)` refere-se a qualquer tipo de evento válido. Por exemplo, um dos tipos de eventos mais comuns é o `click` . Emite quando você _clica no_ mouse. Independentemente do tipo, o `event` está vinculado ao `“handler”` no exemplo. Manipuladores de eventos são geralmente funções membro da classe de componentes.

Os `( … )` são especiais para o Angular. Parêntese informa ao Angular que um evento é limitado à atribuição correta do `handler` . O próprio evento é originado do elemento host.

Quando o evento emite, ele passa o objeto Event na forma de `$event` . O `handler` mapeado para a função de `handler` nome idêntico da classe do componente. A troca unidirecional do elemento ligado ao evento para a classe do componente é concluída.

Emitir eventos do manipulador, enquanto possível, não afeta o elemento de modelo. A ligação é unidirecional depois de tudo.

#### Vinculação Bidirecional

Os formulários de entrada fornecem um ótimo exemplo do motivo pelo qual a vinculação bidirecional é necessária. As ligações de dados bidirecionais são mais caras que as ligações de eventos ou de propriedades.

A ligação de dados bidirecional possui seu próprio módulo. Antes de dar uma olhada nisso, considere o seguinte exemplo.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 export class MyComponent { 
  inputValue:string = ""; 
 
  handler(event) { 
      this.inputValue = event.target.value; 
  } 
 } 
```

```html

<!-- my.component.html --> 
 <input (input)=“handler($event)” [value]=“inputValue”> 
```

Hora de quebrar isso.

Este exemplo combina os dois anteriores. Isso explica por que é mais caro. Seguindo a lógica, assuma que o usuário digita algo no elemento de entrada. O elemento emite um evento de `input` para o `handler` da classe de componentes do modelo. O manipulador atribui o membro de classe `inputValue` ao valor do evento emitido. Isso conclui o tratamento / vinculação do evento.

Agora na ligação da propriedade. O `inputValue` foi atribuído a um novo valor. Como `inputValue` está ligado ao `value` do elemento de entrada, sua alteração nos dados é transmitida para a propriedade de `value` do elemento de entrada. O `value` do elemento de entrada corresponde ao `inputValue` . Isso conclui a ligação da propriedade.

Lá você tem isso. A ligação de dados bidirecional ocorre com os dois aplicativos de ligação unidirecional aplicados consecutivamente. A sintaxe é um pouco confusa.

Felizmente, o Angular fornece o `NgModel` para simplificar a sintaxe. O exemplo abaixo é sinônimo do acima.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  inputValue:string = ""; 
 } 
```

```html

<!-- my.component.html --> 
 <input [(ngModel)]=“inputValue”> 
```

`ngModel` é uma ótima conveniência. Você precisa importar o FormsModule na raiz do aplicativo antes de usá-lo. Com isso eliminado, a ligação de dados bidirecional se torna muito mais fácil de se trabalhar.

Para reforçar tudo que você aprendeu, confira esta foto da [Documentação Angular](https://angular.io/guide/architecture-components#data-binding) oficial [1](https://angular.io/guide/architecture-components#data-binding) .

![Diagrama de fluxo de dados](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image2.png)

Você pode resumir visualmente tudo até este ponto com esta imagem. Documentação do Angular tem muitas outras imagens que vale a pena ver. Este deve ser suficiente, dado o escopo deste artigo.

#### Componente para Componente

Para vincular dados e eventos a diferentes componentes, você deve usar os decoradores @Input e @Output. Componentes angulares são escopo privado. Nenhum dos membros de um componente é acessível de qualquer lugar fora de sua visão nativa.

O decorador @Input indica que o valor de um membro é originado da função pai. Isso requer visualização para entender melhor.

![Exemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image3_.png)

Observe a passagem do membro de `value` do pai para o membro da `property` da criança. Isso não seria possível se a `property` não tivesse um decorador @Input. O compilador Angular depende disso.

Outro exemplo para @Output mostra como um evento viaja de filho para pai. Tenha em mente que @Output quase sempre se refere a ligações de eventos customizadas.

![Exemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image1.png)

Certifique-se de importar `EventEmitter` , `@Input` e `@Output` de `@angular/common` se você pretende replicar qualquer um desses exemplos.

#### Conclusão

Este é um bom lugar para parar. A ligação de dados abrange uma ampla variedade de casos de uso. Vale a pena explorar este tópico no [site da Angular](https://angular.io) . Essas não são as únicas maneiras de manipular dados no Angular. Veja os links em Recursos para mais informações.

### Fontes

1.  [Equipa Angular Introdução aos componentes. Google. Acessado em 26 de maio de 2018](https://angular.io/guide/architecture-components#data-binding)

### Recursos

*   [Documentação Angular](https://angular.io/docs)
    
*   [Repositório Angular GitHub](https://github.com/angular/angular)
    
*   [Mais sobre Componentes e Modelos em Angular](https://angular.io/guide/displaying-data)