---
title: React Redux Basic Setup
localeTitle: React Redux Basic Setup
---
## React Redux Basic Setup

В этом руководстве читателю будет представлено, как настроить простое приложение React и Redux.

Он основан на принципе, что приложение [Node.js](https://nodejs.org/) уже создано и работает с помощью [Express](https://expressjs.com/) и [Webpack](https://webpack.github.io/) .

## Монтаж

Предполагая, что все настроено и работает правильно, есть некоторые пакеты, которые необходимо добавить, чтобы Redux работал с React.

Откройте терминал внутри созданной папки проекта и выполните следующую команду
```shell
npm install --save react react react-dom react-redux react-router redux 
```

То, что делает вышеприведенная команда, устанавливает локальные пакеты и добавляет ссылку на файл package.json в зависимостях.

Также добавьте в свой браузер следующий инструмент [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) .

Это позволит разработчику увидеть состояние приложения и его изменения и какие действия также инициируются.

## Структура папок

При установке всех зависимостей настоятельно рекомендуется создавать структуру папок внутри вашего приложения, аналогичную той, которая приведена ниже для улучшения обслуживания и организации кода.
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

## Описание компонентов приложения и то, как они взаимодействуют с самим собой и с сокращением

## Реализация точки входа приложения

*   /project\_root/index.js
    *   Является ли точкой входа для приложения, она будет содержать точку входа для хранилища, и она отобразит файл App.jsx.

Ниже приведен пример кода, который будет объявлен в файле

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

В этом примере к файлу добавляются обычные реакции импорта, но также и некоторые новые, такие как Router, Route, browserHistory.

Они отвечают за обработку маршрутов, если они необходимы для приложения.

А также там, где хранилище приложений добавлено и разрешено работать в приложении.

## Внедрение прикладных компонентов

Следующий файл:

*   /client/App.jsx
*   Этот файл является базовым файлом приложения, и где реакция и редукция будут связываться между собой.

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

В приведенном выше примере показано, как настраивается базовый компонент приложения и как он будет взаимодействовать с архитектурой сокращения.

Также как отправить определенное действие из компонента, который будет передан в хранилище, и внести изменения в редуктор приложения.

## Декларация о действиях приложения

Следующий файл:

*   /common/actions/appActions.js
    
*   В этом файле каждый из указанных действий будет взаимодействовать с состоянием приложения и редуктором.
    
*   А также любой внешний вызов api, необходимый приложению, должен быть здесь, а затем передан в редуктор по вызову действия.
    
    \`\` \`Javascript Импортировать { APP _ACTION_ A, APP _ACTION_ B, APP _ACTION_ C } из '../constants/Actiontypes'; / \*\*
    
*   es6 константа для общения с редуктором для выполнения заданного действия
    
*   @param {Object} значение объекта или любого другого типа, который должен быть установлен в редукторе **/ export const doActionA = значение => ({ тип: APP _ACTION_ A, значение }); /**
    
*   es6 константа для общения с редуктором для выполнения заданного действия
    
*   @param {Object} объект или любой другой тип, который должен быть установлен в редукторе **/ export const doActionB = value => ({ тип: APP _ACTION_ B, значение }); /**
    
*   es6 константа для общения с редуктором для выполнения заданного действия
    
*   @param {Object} объект или любой другой тип, который должен быть установлен в редукторе **/ export const doActionC = value => ({ тип: APP _ACTION_ C, значение }); /**
    
*   es6, которая будет знать компонент, чтобы было возможным взаимодействие между компонентом и состоянием
    
*   @param {Object} значение объекта или любого другого типа, который должен быть установлен в редукторе **/ export const ActionA = value => dispatch => { отправка (doActionB (значение)); }; /**
    
*   es6, которая будет знать компонент, чтобы было возможным взаимодействие между компонентом и состоянием \*\* / export const ActionB = () => dispatch => { отправка (doActionB (истина)); }; `In the example code provided above, the item` ActionB\`\`\` будет доступен для компонента App.jsx, и когда он будет запущен компонентом через опору, он вызовет соответствующие действия внутри этого файла, а затем к редуктору и изменит соответственно.
    

## Реализация типов действий

Следующий файл:

*   /common/constants/Actiontypes.js
*   Этот файл будет содержать объявление каждого из типов действий, доступных для использования приложением.
*   Заявки, сделанные здесь, должны будут сделать доступными для файла действий, чтобы они обрабатывались в приложении.

```javascript
export const APP_ACTION_A='MAKE_A'; 
 export const APP_ACTION_B='MAKE_B'; 
 export const APP_ACTION_C='MAKE_C'; 
```

В приведенном выше примере три типа действий объявляются и экспортируются, чтобы их можно было использовать для потребления.

## Редукторная реализация

Следующий файл:

*   /common/reducers/appReducer.js
    *   Редуктор по сути является не чем иным, как функцией javascript pure, которая проверяет, соответствует ли какое-либо из условий срабатыванию, и вносит изменения в состояние, никогда не изменяя его.

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

Приведенный выше код иллюстрирует, как определяется базовый редуктор и вносит изменения в состояние, посредством тестирования определенного состояния.

## Реализация магазина

Файл:

*   /common/store/store.js
*   Этот файл будет содержать определение дерева состояний приложения, чтобы изменить состояние внутри, для этого нужно отправить actin.
*   Это не что иное, как объект с объявленными внутри методами, наиболее важным для создания магазина

\`\` \`Javascript import {createStore} из 'redux'; пример импорта из «../reducers/ExampleAppReducer»;

экспорт по умолчанию createStore ( пример ); \`\` \` В приведенном выше коде показано, как определить простой магазин приложений.

Это базовая настройка редуктора, его можно расширить и содержать, например, несколько хранилищ, а также добавить к ней некоторое промежуточное ПО.

## дальнейшее чтение

Поскольку это руководство - не что иное, как введение в то, как реагировать и сокращать работу вместе и как реализовать архитектуру. Настоятельно рекомендуется читателю этого руководства прочитать ссылки ниже, чтобы их можно было читать и клонировать репозитории и попробовать их.

[Redux Docs](http://redux.js.org/)

[Redux Api](http://redux.js.org/docs/api/)

[Примеры Redux](https://github.com/reactjs/redux/tree/master/examples)
