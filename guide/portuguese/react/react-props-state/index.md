---
title: React Props and State
localeTitle: React Props e State
---
## Props e State

Existem dois tipos de dados que controlam um componente: props e state. As props são definidas pelo pai e são fixadas durante a vida útil de um componente. Para os dados que vão mudar, temos que usar state.

### Props

A maioria dos componentes pode ser personalizada com parâmetros diferentes quando são criados. Esses parâmetros de criação são chamados de `props` .

Seus próprios componentes também podem usar props. Isso permite criar um único componente que é usado em muitos lugares diferentes do aplicativo, com propriedades ligeiramente diferentes em cada lugar. Consulte `this.props` na sua função de renderização:
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 const element = <Welcome name="neel" />; 
```

A linha `<Welcome name="neel" />` cria um nome de propriedade com o valor `"neel"` .

A propriedade é passada para o componente, semelhante como a forma que um argumento é passado para uma função. Na verdade, poderíamos até mesmo reescrever o componente para ser mais simples:
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

Podemos tornar a propriedade name opcional, adicionando defaultProps à classe Welcome:
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 Welcome.defaultProps = { 
  name: "world", 
 }; 
```

Se Welcome for chamado sem um nome, ele simplesmente renderizará `<h1> Hello world</h1>` .

Então `props` podem vir do pai, ou podem ser definidos pelo próprio componente.

Você costumava poder alterar props com setProps e replaceProps, mas estes foram **preteridos** . Durante o ciclo de vida de um componente, `props` não devem mudar (considere-os imutáveis).

Uma vez que as props são passadas, e elas não podem mudar, você pode pensar em qualquer componente React que use apenas props (e não state) como “puro”, isto é, ele sempre renderizará a mesma saída dada a mesma entrada. Isso os torna realmente fáceis de testar.

### State

Como `props` , o `state` contém informações sobre o componente. No entanto, o tipo de informação e como ela é tratada é diferente.

Por padrão, um componente não possui estado. O componente `Welcome` abaixo é chamado stateless:
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

Quando um componente precisa acompanhar as informações entre renderizações, o próprio componente pode criar, atualizar e usar state.

Trabalharemos com um componente bastante simples para ver o `state` funcionando em ação. Temos um botão que registra quantas vezes você clicou nele.

aqui está o código:
```
class Button extends React.Component { 
  constructor() { 
    super(); 
    this.state = { 
      count: 0, 
    }; 
  } 
 
  updateCount() { 
    this.setState((prevState, props) => { 
      return { count: prevState.count + 1 } 
    }); 
  } 
 
  render() { 
    return (<button 
              onClick={() => this.updateCount()} 
            > 
              Clicked {this.state.count} times 
            </button>); 
  } 
 } 
```

### State é criado no componente

Vamos ver o método `constructor` :
```
constructor() { 
  super(); 
  this.state = { 
    count: 0, 
  }; 
 } 
```

É aqui que o estado obtém seus dados iniciais. Os dados iniciais podem ser codificados (como abaixo), mas também podem vir de `props` .

### `state` é mutável

Aqui está o método `updateCount` :
```
updateCount() { 
  this.setState((prevState, props) => { 
    return { count: prevState.count + 1 } 
  }); 
 } 
```

Alteramos o state para acompanhar o número total de cliques. O bit importante é setState. Primeiro, observe que o setState tem uma função, porque o setState pode ser executado de forma assíncrona. Ele precisa ter uma função de retorno de chamada em vez de atualizar o state diretamente. Você pode ver que temos acesso a prevState dentro do callback, isso irá conter o state anterior, mesmo que o state já tenha sido atualizado em algum outro lugar.

Além disso, o React vai um passo a mais, o setState atualiza o objeto de `state` **e** re-renderiza o componente automaticamente.

### Avisos de `state`

> É tentador escrever `this.state.count = this.state.count + 1` .

**Não faça isso. O** React não permite autualização do state dessa maneira, portanto, seu componente não será renderizado novamente. Sempre use `setState` .

Também pode ser tentador escrever algo assim:
```
// DO NOT USE 
 this.setState({ 
  count: this.state.count + 1 
 }); 
```

Embora isso possa parecer razoável, não gera erros, e você pode encontrar exemplos que usam essa sintaxe on-line, está errado. Isso não leva em conta a natureza assíncrona que o `setState` pode usar e pode causar erros com dados de state fora de sincronia.

### Programa Continue !!!

E finalmente, `render`
```
render() { 
  return (<button 
            onClick={() => this.updateCount()} 
          > 
            Clicked {this.state.count} times 
          </button>); 
 } 
```

`onClick={() => this.updateCount()}` significa que quando o botão é clicado, o método updateCount será chamado. Precisamos usar **a arrow function do ES6** para que o updateCount tenha acesso ao state dessa instância.

O texto renderizado no botão é `Clicked {this.state.count} times` , que usará o que for this.state.count no momento da renderização.

Mais informações sobre: [**React props and state**](https://facebook.github.io/react-vr/docs/components-props-and-state.html)
