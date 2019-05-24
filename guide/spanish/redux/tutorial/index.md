---
title: React Redux Basic Setup
localeTitle: React Redux Basic Setup
---
## React Redux Basic Setup

En esta guía se presentará al lector cómo configurar una aplicación React y Redux simple.

Se basa en el principio de que una aplicación [Node.js](https://nodejs.org/) ya está creada y ejecutándose con [Express](https://expressjs.com/) y [Webpack](https://webpack.github.io/) .

## Instalación

Suponiendo que todo está configurado y funcionando correctamente, hay algunos paquetes que deben agregarse para que Redux funcione con React.

Abra un terminal dentro de la carpeta del proyecto que se creó y ejecute el siguiente comando
```shell
npm install --save react react react-dom react-redux react-router redux 
```

Lo que hace el comando anterior es instalar los paquetes localmente y agregar una referencia al archivo package.json bajo las dependencias.

También agregue a su navegador de su elección la siguiente herramienta [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) .

Esto permitirá al desarrollador ver el estado de la aplicación y sus cambios y qué acciones se están activando también.

## Estructura de la carpeta

Con todas las dependencias instaladas, se recomienda encarecidamente crear una estructura de carpetas dentro de su aplicación similar a la de abajo para una mejor capacidad de mantenimiento y organización del código.
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

## Descripción de los componentes de la aplicación y cómo interactúan entre sí y con redux

## Aplicación del punto de entrada de la aplicación.

*   /project\_root/index.js
    *   Es el punto de entrada para la aplicación, contendrá el punto de entrada para qué tienda y representará el archivo App.jsx.

A continuación se muestra un ejemplo del código que se declarará en el archivo.

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

En este ejemplo, las importaciones de reacción habituales se agregan al archivo, pero también algunas nuevas, como el Router, Route, browserHistory.

Estos son responsables de manejar las rutas si son necesarias para la aplicación.

Y también donde se agrega la tienda de aplicaciones y se le permite trabajar en la aplicación.

## Implementación del componente de aplicación

El siguiente archivo:

*   /client/App.jsx
*   Este archivo es el archivo de la aplicación de línea de base y en el que reaccionan y redux se comunican entre sí.

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

El ejemplo anterior muestra cómo se configura el componente de la aplicación base y cómo interactúa con la arquitectura redux.

También cómo enviar una acción definida desde el componente que se pasará a la tienda y realizar los cambios en el reductor de aplicaciones.

## Declaración de las Acciones de Aplicación.

El siguiente archivo:

*   /common/actions/appActions.js
    
*   Este archivo es donde cada una de las acciones definidas interactuará con el estado de la aplicación y el reductor.
    
*   Además, cualquier llamada de API externa que necesite la aplicación debe realizarse aquí y luego transmitirse al reductor mediante la llamada de una acción.
    
    \`\` \`javascript importar { APP _ACCION_ A, APP _ACCION_ B, APP _ACCION_ C } de '../constants/Actiontypes'; / \*\*
    
*   Es6 constante para comunicarse con el reductor para realizar una acción determinada.
    
*   @param {Objeto} valora un objeto o cualquier otro tipo que se va a configurar en el reductor **/ exportación const doActionA = valor => ({ tipo: APP _ACCION_ A, valor }); /**
    
*   Es6 constante para comunicarse con el reductor para realizar una acción determinada.
    
*   @param {Objeto} un objeto o cualquier otro tipo que se configurará en el reductor **/ exportación const doActionB = valor => ({ tipo: APP _ACCION_ B, valor }); /**
    
*   Es6 constante para comunicarse con el reductor para realizar una acción determinada.
    
*   @param {Objeto} un objeto o cualquier otro tipo que se configurará en el reductor **/ exportación const doActionC = valor => ({ tipo: APP _ACCION_ C, valor }); /**
    
*   Es6 constante que se conocerá al componente para que la interacción sea posible entre el componente y el estado.
    
*   @param {Objeto} valora un objeto o cualquier otro tipo que se va a configurar en el reductor **/ exportar const ActionA = value => dispatch => { despacho (doActionB (valor)); }; /**
    
*   Es6 constante que se conocerá al componente para que la interacción sea posible entre el componente y el estado. \*\* / exportar const ActionB = () => dispatch => { dispatch (doActionB (true)); }; `In the example code provided above, the item` ActionB\`\`\` estará disponible para el componente App.jsx y, cuando se active mediante el componente a través de un prop, activará la acción apropiada dentro de este archivo y luego al reductor y cambiará la Estado en consecuencia.
    

## Implementación de tipos de acciones

El siguiente archivo:

*   /common/constants/Actiontypes.js
*   Este archivo contendrá la declaración de cada uno de los tipos de acciones disponibles para ser utilizados por la aplicación.
*   Las declaraciones hechas aquí deberán estar disponibles para el archivo de acciones para que se manejen en la aplicación.

```javascript
export const APP_ACTION_A='MAKE_A'; 
 export const APP_ACTION_B='MAKE_B'; 
 export const APP_ACTION_C='MAKE_C'; 
```

En el ejemplo anterior, se declaran y exportan tres tipos de acciones para que estén disponibles para ser consumidas.

## Implementacion reductor

El siguiente archivo:

*   /common/reducers/appReducer.js
    *   El reductor en esencia no es más que una función pura de javascript que verificará si alguna de las condiciones cumple con la acción activada y realizará los cambios en el estado, nunca mutándola.

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

El código anterior ilustra cómo se define un reductor básico y realiza cambios en el estado, a través de la prueba de una determinada condición.

## Implementación de tienda

El archivo:

*   /common/store/store.js
*   Este archivo contendrá la definición del árbol de estado de la aplicación, para cambiar el estado interno, se debe enviar una actina aquí.
*   No es más que un objeto con métodos declarados en su interior, el más importante para crear la tienda.

\`\` \`javascript importar {createStore} desde 'redux'; ejemplo de importación desde '../reducers/ExampleAppReducer';

exportar por defecto createStore ( ejemplo ); \`\` \` El código anterior muestra cómo definir una tienda de aplicaciones simple.

Esta es la configuración básica de un reductor, se puede ampliar más y contener múltiples tiendas, por ejemplo, y también se le ha agregado algo de middleware.

## Otras lecturas

Como esta guía no es más que una introducción a cómo reaccionar y redux trabajar juntos y cómo implementar la arquitectura. Se recomienda encarecidamente al lector de esta guía leer los enlaces a continuación para leerlos, clonarlos y probarlos.

[Redux docs](http://redux.js.org/)

[Redux api](http://redux.js.org/docs/api/)

[Ejemplos de Redux](https://github.com/reactjs/redux/tree/master/examples)
