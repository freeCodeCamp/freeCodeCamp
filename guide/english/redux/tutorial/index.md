---
title: React Redux Basic Setup
---
## React Redux Basic Setup

In this guide it will be presented to the reader how to setup a simple React and Redux application.

It's based on the principle that a [Node.js](https://nodejs.org/) application is already created and running with [Express](https://expressjs.com/) and [Webpack](https://webpack.github.io/).


## Installation
Assuming that all is setup and working correctly there are some packages that need to be added in order for Redux work with React.

Open a terminal inside the project folder that was created and issue the following command 
```sh
npm install --save react react react-dom react-redux react-router redux
```
What the command above does is install the packages locally and add a reference to the the package.json file under dependencies.

Also add to your browser of choice the following tool [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension).

This will allow the developer to see the state of the application and it's changes and what actions are being triggered also.

## Folder structure
With all the dependencies installed it's strongly recomended to create a structure of folders inside your application similar to the one bellow for better code maintainability and organization.

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
## Description of the application's components and how they interact with themselves and with redux



## Application entry point implementation
  - /project_root/index.js 
    - Is the entry point for the app it will contain the entry point for which store, and it will render the the App.jsx file.

Below is an example of the code that will be declared in the file:

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
In this example the usual react imports are added to the file, but also some new ones, like the Router,Route,browserHistory.

This ones are responsible for handling routes if they are needed to the application.

And also where the application store is added and allowed to work in the application.

## Application Component Implementation

The following file:

- /client/App.jsx
  - This file is the baseline application file and where react and redux will communicate between to each other.

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
The example above demonstrates how the base App component is setup and how it will interact with the redux architecture.

Also how to dispatch a defined action from the component which will be passed down to the store and make the changes on the application reducer.

## Declaration of the Application Actions

The following file:

- /common/actions/appActions.js
  - This file is where each of the actions defined are going to interact with the application state and the reducer.
  - And also any external api call needed by the application should be made in here and then passed down to the reducer via the call of a action.

 ```javascript
 import {
    APP_ACTION_A,
    APP_ACTION_B,
    APP_ACTION_C
} from '../constants/Actiontypes';
/**
* es6 constant to comunicate with reducer to perform a given action
* @param {Object} value an object or any other type to be set in the reducer
**/
export const doActionA=value=>({
    type:APP_ACTION_A,
    value
});
/**
* es6 constant to comunicate with reducer to perform a given action
* @param{Object} an object or any other type to be set in the reducer
**/
export const doActionB=value=>({
    type:APP_ACTION_B,
    value
});
/**
* es6 constant to comunicate with reducer to perform a given action
* @param {Object} an object or any other type to be set in the reducer
**/
export const doActionC=value=>({
    type:APP_ACTION_C,
    value
});
/**
* es6 constant that will be know to the component so that the interation be possible between the component and the state
* @param {Object} value an object or any other type to be set in the reducer
**/
export const ActionA=value=>dispatch=>{
    dispatch(doActionB(value));
};
/**
* es6 constant that will be know to the component so that the interation be possible between the component and the state
**/
export const ActionB=()=>dispatch=>{
    dispatch(doActionB(true));
};
 ```
In the example code provided above, the item ```ActionB``` will be made available to the App.jsx component and when it's triggered by the component via a prop it will trigger the appropriate action inside this file and then to the reducer and change the state accordingly.

## Action Types implementation

The following file:

- /common/constants/Actiontypes.js
  - This file will contain the declaration of each of the actions types available to be used by the application.
  - The declarations done here will have to made availale to the actions file in order for them do be handled in the application.

```javascript
export const APP_ACTION_A='MAKE_A';
export const APP_ACTION_B='MAKE_B';
export const APP_ACTION_C='MAKE_C';
```
In the example above three actions types are declared and exported in order to be made available to be consumed.

## Reducer implementation

The following file:

- /common/reducers/appReducer.js
    - The reducer in essence is nothing more than a javascript pure function that will check if any of the conditions meets the action triggered and make the changes to the state, never mutating it.

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
The code above ilustrates how a basic reducer is defined and makes changes to the state, via the testing of a certain condition.

## Store implementation

The file:

- /common/store/store.js
  - This file will contain the definition of the state tree of the app, in order to change the state inside, an actin needs to be dispatched to here.
  - It's nothing more than an object with methods declared inside, most important the one to create the store

```javascript
import {createStore} from 'redux';
import example from '../reducers/ExampleAppReducer';

export default createStore(
    example
);
  ```
The code above demonstrates how to define a simple application store. 

This is the basic setup of a reducer, it can be expanded further and contain multiple stores for instance and also have some middleware added to it.


## Further reading

As this guide is nothing more than a introduction to how react and redux work together and how to implement the architecture.
It's strongly recomended for the reader of this guide to read the links bellow to be read and clone the repos and try them.

[Redux Docs](http://redux.js.org/)

[Redux Api](http://redux.js.org/docs/api/)

[Redux Examples](https://github.com/reactjs/redux/tree/master/examples)
