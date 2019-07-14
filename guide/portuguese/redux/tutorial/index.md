---
title: React Redux Basic Setup
localeTitle: React Redux Basic Setup
---
## React Redux Basic Setup

Neste guia, será apresentado ao leitor como configurar um aplicativo simples React e Redux.

Baseia-se no princípio de que um aplicativo [Node.js](https://nodejs.org/) já está criado e sendo executado com o [Express](https://expressjs.com/) e o [Webpack](https://webpack.github.io/) .

## Instalação

Assumindo que tudo esteja configurado e funcionando corretamente, existem alguns pacotes que precisam ser adicionados para que o Redux funcione com o React.

Abra um terminal dentro da pasta do projeto que foi criada e emita o seguinte comando
```shell
npm install --save react react react-dom react-redux react-router redux 
```

O que o comando acima faz é instalar os pacotes localmente e adicionar uma referência ao arquivo package.json nas dependências.

Também adicione ao seu navegador de escolha a seguinte ferramenta [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) .

Isso permitirá que o desenvolvedor veja o estado do aplicativo e suas alterações e quais ações estão sendo acionadas também.

## Estrutura de pastas

Com todas as dependências instaladas, é altamente recomendável criar uma estrutura de pastas dentro de seu aplicativo, semelhante a uma abaixo, para melhor manutenção e organização do código.
```
project_root 
 │   index.js 
 | 
 └───client 
 |   App.jsx 
 |   NotFound.jsx 
 | 
 └───common 
    │ 
    └───actions 
    |   │  appActions.js 
    | 
    └───constants 
    |   │  Actiontypes.js 
    | 
    └───reducers 
    |   │   appReducer.js 
    └───store 
        │   store.js 
```

## Descrição dos componentes do aplicativo e como eles interagem entre si e com o redux

## Implementação do ponto de entrada do aplicativo

*   /project\_root/index.js
    *   É o ponto de entrada para o aplicativo que irá conter o ponto de entrada para qual loja, e irá processar o arquivo App.jsx.

Abaixo está um exemplo do código que será declarado no arquivo

```javascript
import React from 'react'; 
 import {render} from 'react-dom'; 
 import {Router,Route,browserHistory} from 'react-router'; 
 import {Provider} from "react-redux"; 
 import store from "../common/store/store"; 
 import App from '../client/App'; 
 import NotFound from '../client/notFound'; 
 
 render( 
    <Provider store={store}> 
        <Router history={browserHistory}> 
            <Route path="/" component={App} /> 
            <Route path="*" component={NotFound}/> 
        </Router> 
    </Provider>, 
    document.getElementById('root') 
 ); 
```

Neste exemplo, as importações de reação usuais são adicionadas ao arquivo, mas também algumas novas, como o Roteador, Rota, browserHistory.

Esses são responsáveis ​​pelo manuseio de rotas, se elas forem necessárias para o aplicativo.

E também onde o armazenamento de aplicativos é adicionado e permitido trabalhar no aplicativo.

## Implementação de componente de aplicativo

O seguinte arquivo:

*   /client/App.jsx
*   Este arquivo é o arquivo de aplicativo de linha de base e onde react e redux se comunicarão entre si.

```javascript
import React, { Component } from 'react'; 
 import {connect} from 'react-redux'; 
 import PropTypes from 'prop-types'; 
 import {ActionA,ActionB,ActionC} from '../common/actions/appActions'; 
 class App extends Component{ 
 
    // example of triggering the action inside a component 
    foo=()=>{ 
        this.props.doStringMessage(`Hello World`); 
    } 
    //default render function of the component 
    render(){ 
        return( 
            // the base component 
        ); 
    } 
 } 
 /** 
 * es6 fat arrow function to get information from the application state 
 * @param {*} state current state of the application 
 */ 
 const mapStateToProps=state=>{ 
    return { 
        ArrayValue:state.example.exapleArray, 
        StringMessage:state.example.exampleString, 
        bookApploggedIn:state.example.exampleBool, 
        ObjectValue:state.example.exampleObject 
    }; 
 }; 
 /** 
 * es6 fat arrow function to connect the actions declared in the action file to the the component as if they were common react props 
 * @param {*} dispatch function send to action file to be later processed in the reducer 
 */ 
 const mapDispatchToProps=dispatch=>{ 
    return { 
        doStringMessage:(value)=>{ 
            dispatch(ActionA(value)); 
        }, 
        getArrayItems:()=>{ 
            dispatch(ActionB()); 
        }, 
        doBooleanChange:(value)=>{ 
            dispatch(ActionC(value)); 
        } 
    }; 
 }; 
 /** 
 * this function connects the application component to be possible to interact with the store 
 * @param {*} mapStateToProps allows the retrieval of information from the state of the application 
 * @param {*} mapDispatchToProps allows the state to change via the actions defined inside 
 */ 
 export default connect(mapStateToProps,mapDispatchToProps)(App); 
```

O exemplo acima demonstra como o componente base do aplicativo é configurado e como ele irá interagir com a arquitetura do redux.

Também como despachar uma ação definida do componente que será passada para o armazenamento e fazer as alterações no redutor do aplicativo.

## Declaração das Ações de Aplicação

O seguinte arquivo:

*   /common/actions/appActions.js
    
*   Este arquivo é onde cada uma das ações definidas irá interagir com o estado da aplicação e com o redutor.
    
*   E também qualquer chamada de API externa necessária para o aplicativo deve ser feita aqui e depois passada para o redutor através da chamada de uma ação.
    
    \`\` \`javascript importar { APP _AÇÃO_ A, APP _ACTION_ B, APP _ACTION_ C } de '../constants/Actiontypes'; / \*\*
    
*   es6 constante para comunicar com redutor para realizar uma determinada ação
    
*   @param {Object} valoriza um objeto ou qualquer outro tipo a ser definido no redutor **/ export const doActionA = value => ({ tipo: APP _AÇÃO_ A, valor }); /**
    
*   es6 constante para comunicar com redutor para realizar uma determinada ação
    
*   @param {Object} um objeto ou qualquer outro tipo a ser definido no redutor **/ export const doActionB = value => ({ tipo: APP _ACTION_ B, valor }); /**
    
*   es6 constante para comunicar com redutor para realizar uma determinada ação
    
*   @param {Object} um objeto ou qualquer outro tipo a ser definido no redutor **/ export const doActionC = value => ({ tipo: APP _ACTION_ C, valor }); /**
    
*   es6 constante que será conhecida pelo componente para que seja possível a interação entre o componente e o estado
    
*   @param {Object} valoriza um objeto ou qualquer outro tipo a ser definido no redutor **/ exportar const ActionA = value => dispatch => { despacho (doActionB (valor)); }; /**
    
*   es6 constante que será conhecida pelo componente para que seja possível a interação entre o componente e o estado \*\* / exportar const ActionB = () => dispatch => { expedição (doActionB (true)); }; `In the example code provided above, the item` ActionB\`\`\` será disponibilizado para o componente App.jsx e quando for acionado pelo componente por meio de um prop, ele acionará a ação apropriada dentro desse arquivo e, em seguida, para o redutor e alterará o declarar em conformidade.
    

## Implementação de tipos de ação

O seguinte arquivo:

*   /common/constants/Actiontypes.js
*   Este arquivo conterá a declaração de cada um dos tipos de ações disponíveis para serem usados ​​pelo aplicativo.
*   As declarações feitas aqui terão que disponibilizar o arquivo de ações para que elas sejam manipuladas no aplicativo.

```javascript
export const APP_ACTION_A='MAKE_A'; 
 export const APP_ACTION_B='MAKE_B'; 
 export const APP_ACTION_C='MAKE_C'; 
```

No exemplo acima, três tipos de ações são declarados e exportados para serem disponibilizados para serem consumidos.

## Implementação do redutor

O seguinte arquivo:

*   /common/reducers/appReducer.js
    *   O redutor, em essência, nada mais é do que uma função pura de javascript que irá verificar se alguma das condições atende a ação desencadeada e faz as alterações no estado, nunca alterando-a.

```javascript
 import { 
    APP_ACTION_A, 
    APP_ACTION_B, 
    APP_ACTION_C 
 } from '../constants/Actiontypes'; 
 
 /** 
 * es6 example of a declaration of the reducer 
 * @param {Object} state contains all the application's state properties needed 
 * @param {action} action the action that will trigger the state's changes 
 **/ 
 const ExampleAppReducer= (state = { 
    exampleBool:false, // boolean value 
    exampleString:'', // string value 
    exampleArray: [], // array value 
    onError:{ 
        A:'', 
        B:'', 
        C:'' 
    } // object with properties inside 
 }, action) => { 
    //switch statement that will test every case and make the necessary changes, never mutating the state as it's being preserved always 
    switch(action.type){ 
        case APP_ACTION_A:{ 
            return { 
                ...state, // es6 epread operator to make a copy of the existing state object 
                exampleBool:action.value // the state property changes accordingly to the value of the action triggered 
            }; 
        } 
        case APP_ACTION_B:{ 
            return { 
                ...state, 
                exampleString:action.value 
            }; 
        }, 
        case APP_ACTION_C:{ 
            return { 
                ...state, 
                exampleArray:action.value 
            }; 
        } 
        default:{ 
            return state; // if any of the actions triggered is not defined here it will return the default state 
        } 
    } 
 }; 
 export default ExampleAppReducer; 
```

O código acima ilustra como um redutor básico é definido e faz alterações no estado, através do teste de uma determinada condição.

## Implementação de loja

O arquivo:

*   /common/store/store.js
*   Este arquivo irá conter a definição da árvore de estados do aplicativo, a fim de alterar o estado interno, uma ação precisa ser enviada para aqui.
*   Não é nada mais do que um objeto com métodos declarados dentro, o mais importante para criar a loja

\`\` \`javascript import {createStore} de 'redux'; import example from '../reducers/ExampleAppReducer';

createStore padrão de exportação ( exemplo ); \`\` \` O código acima demonstra como definir um armazenamento de aplicativo simples.

Esta é a configuração básica de um redutor, ele pode ser expandido ainda mais e conter várias lojas, por exemplo, e também ter alguns middlewares adicionados a ele.

## Leitura adicional

Como este guia nada mais é do que uma introdução sobre como o reagir e o redux funcionam juntos e como implementar a arquitetura. É altamente recomendável que o leitor deste guia leia os links abaixo para ler e clonar os repositórios e testá-los.

[Redux Docs](http://redux.js.org/)

[Redux Api](http://redux.js.org/docs/api/)

[Exemplos de Redux](https://github.com/reactjs/redux/tree/master/examples)
