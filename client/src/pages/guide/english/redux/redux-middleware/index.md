---
title: Redux Middleware	
---	
 ## Introduction
 In this guide it will be presented to the reader the basic concept of Redux Middleware.
 If the reader is already experienced with [node.js] and it's server side libraries like [Express] or [Koa], it should by now be familiar with the concept of middleware.
 Either in any of the above libraries, middleware is a piece of code that resides between the framework's incoming request and the response sent.
   
 For example some third party middlewares that can be applied to both these frameworks are :
 * [Helmet] - For some measure of security to applications
 * [Wiston] - For logging purposes
 * [Compression] - For compression of HTTP responses
   
 ## Redux Middleware

 In Redux, the middleware works in a similar pattern as described above, but addresses different problems.
 
 Here the middleware is a piece of code that intercepts every single action that comes through and modifies that specific action or cancel it altogether.
 All of this before reaching the reducer.

 One of the most common middleware packages used in conjunction with Redux is [Thunk](https://github.com/reduxjs/redux-thunk).
 
 More information on what are thunks and how to set it up is located [here](https://guide.freecodecamp.org/redux/redux-thunk)
 

 ## Simple Example

 The code bellow ilustrates a simple redux application and it will be used as an example on how a middleware could be implemented.
   
 ```javascript
 import {createStore} from  "redux";
   
 // the reducer
 const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return initialState+1;
    }
     else if (action.type==="DEC"){
        return initialState-1;
    }
    return initialState;
}
   
 // the redux store
 const store= createStore(reducer,1);
   
 // some actions that will be dispatched
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 ```
   
  
 Now to add a simple logging middleware some changes need to be made to the code.
   
 ```javascript
 import {createStore, applyMiddleware} from  "redux";
   
 // the reducer
 const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return  initialState+1;
    }
    else if (action.type==="DEC"){
        return  initialState-1;
    }
    return initialState;
}
   
 // the logging middleware 
 const logger=(store)=>(next)=>(action)=>{
  console.log("action fired",action)
  next(action);  // moves along the pipeline to the next middleware or if no more middleware defined to the reducer
 }  
 
 const middleware=applyMiddleware(logger);
   
 // the redux store
 const store= createStore(reducer,1,middleware);  // adds the defined middleware to the application
 // some actions that will be dispatched
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 ```
 When the code finishes running the browser console should output something like the following.
 ```javascript
  action fired Object {type: "INC"}
  action fired Object {type: "INC"}
  action fired Object {type: "INC"}
  action fired Object {type: "DEC"}
  action fired Object {type: "DEC"}
  action fired Object {type: "DEC"}
```

## Chaining multiple pieces of middleware

 Here like in [Express] , it's possible to chain multiple pieces of middlewares that will work together.
 
 The code bellow extends the basic logger already implemented and creates a new one for error handling.

 ```javascript
 import {createStore, applyMiddleware} from  "redux";
   
 // the reducer
  const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return initialState+1;
    }
    else if (action.type==="DEC"){
        return initialState-1;
    }
    else if (action.type==="ERROR"){
        throw new Error("There was an error on your application")
    }
    return initialState;
  }
   
 // the middleware
 const logger=(store)=>(next)=>(action)=>{
    console.log("action fired",action)
    next(action)  // moves along the pipeline to the next middleware or if no more middleware defined to the reducer
  };
 // the new logging error logger middleware
const error=(store)=>(next)=>(action)=>{
    try{
      next(action);  // moves along the pipeline to the next middleware or if no more middleware defined to the reducer
    }
    catch (e){
      console.log("An error ocurred",e)
    }
};
  
 const middleware=applyMiddleware(logger,error);
   
 // the redux store
 const store= createStore(reducer,1,middleware)  // adds the defined middleware to the application
 // some actions that will be dispatched
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"ERROR"})
```
 When the code finishes running the browser console should output something like the following.
 ```javascript
action fired Object {type: "INC"}
action fired Object {type: "INC"}
action fired Object {type: "INC"}
action fired Object {type: "DEC"}
action fired Object {type: "DEC"}
action fired Object {type: "DEC"}
action fired Object {types:"ERROR"}
An error ocurred: There was an error on your application
```
  

  
 #### More Information:
 [In depth Redux Middleware documentation](https://redux.js.org/advanced/middleware)

 [In depth Redux ApplyMiddleware documentation](https://redux.js.org/api/applymiddleware)

 [Redux Middleware List](https://redux.js.org/introduction/ecosystem#middleware)

<!-- Please add any articles you think might be helpful to read before writing the article -->
   
  
 [//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   
 [Express]: <https://expressjs.com/>
[node.js]: <http://nodejs.org>
[Koa]: <https://koajs.com/>
[Helmet]:<https://helmetjs.github.io/>
[Wiston]:<https://github.com/winstonjs/winston>
[Compression]: <https://github.com/expressjs/compression>