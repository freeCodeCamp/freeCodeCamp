---
title: Manage Updates with Lifecycle Methods
localeTitle: Gerenciar atualizações com métodos de ciclo de vida
---
## Gerenciar atualizações com métodos de ciclo de vida

Este desafio permite criar algumas funções de ciclo de vida, componentWillUpdate e ComponentWillReceiveProps. Você receberá uma outra função chamada componentDidUpdate. Discutiremos como você os utiliza em cada estágio do ciclo de vida do componente e por que você deve usá-los quando estiver verificando diferentes estágios de seu componente.

Vamos falar sobre as funções e como você as estará usando. Os ciclos de vida dos componentes podem ser divididos em 4 etapas. Inicialização -> Montagem -> Atualização -> Desmontagem. Os componentes com os quais você trabalharão estarão no estágio de atualização.

A progressão na qual essas funções são chamadas é a seguinte: componentWillReceiveProps -> componentWillUpdate -> componentDidUpdate

Quando você cria componentWillReceiveProps, essa função verifica se há novos objetos sendo recebidos. Se o componente recebeu novos suportes, a função será chamada e dentro do bloco você pode comparar os dois estados prop. A função terá um argumento normalmente chamado nextProps e irá compará-lo com this.props. O desafio é criar essa função usando o argumento passado nextProps. Veja a função fornecida abaixo.

Em seguida, no component lifillcle componentWillUpdate será chamado, essa função verificará se houve alguma atualização em props ou state e será chamada antes que o componente seja renderizado. O desafio já lhe forneceu essa função e efetua o logout "O componente está prestes a ser atualizado".

Depois que o componente passar pela fase componentWillUpdate e o componente renderizar, componentDidUpdate será chamado. Neste estágio, você pode chamar this.setState para atualizar qualquer chanegra de estado que tenha ocorrido durante as duas primeiras fases. Nota: você só pode chamar setState se você quebrar dentro de uma condição. Uma vez que este desafio apenas o faz arranhar a superfície, eles gostariam que você fizesse logout que o "componente foi atualizado".

Depois de implementar todas as funções do ciclo de vida, você deverá ver alguns logs do console sendo exibidos. Primeiro, você verá o componentWillReceiveProps enviando this.props e nextProps. Em seguida, você verá um log do console avisando-o sobre o componentWillUpdate. Por fim, depois que o componente renderizar, ele chamará o componentDidUpdate e efetuará o logout "O componente foi atualizado".

Nota: Os componentes que você está criando foram descontinuados e estarão disponíveis para uso até a versão 17. Você pode encontrar mais informações sobre essas funções na seção de recursos abaixo.

```javascript
class Dialog extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  componentWillUpdate() { 
    console.log('Component is about to update...'); 
  } 
  // change code below this line 
 
  // Create componentWillReceiveProps 
  // Pass in argument nextProps and log out the current prop and next prop 
  componentWillReceiveProps(nextProps) { 
    // Log the current property and the next property 
    console.log(this.props, nextProps) 
  } 
 
  // Create function componentDidUpdate 
  // Log out that the component has updated 
  componentDidUpdate() { 
    console.log("Component has updated") 
  } 
 
  // change code above this line 
  render() { 
    return <h1>{this.props.message}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: 'First Message' 
    }; 
    this.changeMessage = this.changeMessage.bind(this); 
  } 
  changeMessage() { 
    this.setState({ 
      message: 'Second Message' 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.changeMessage}>Update</button> 
        <Dialog message={this.state.message}/> 
      </div> 
    ); 
  } 
 }; 
```

### Recursos

*   [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*   [React Component Lifecycle Visual](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)