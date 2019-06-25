---
title: Redux Selectors
---

## Redux Selectors

Redux selectors in their essence are functions that are used to select a subset of data from a Redux state, or in Redux terms, calculate derived data.

These functions take a state as an argument and make some computations and then return the data that is going to be passed down to any given component.


## Why use this pattern

One reason for using this pattern is to avoid duplicate data.

Given that we have a list of items in Redux, and we only need to show a filtered list. 

A naive approach with Redux would be to filter the list, store it in Redux and then pass it along to the specific component.

With this approach we would have two copies of the items and would be easier for the data to get out of sync. 

In case of any operation on the data it would be necessary to make the update twice.

Another naive approach would be to transform the data directly in the component making use of Redux mapStateToProps like how it's shown in the code below.


```javascript
 // reducer
 const listofItems=(state={items:[]},action)=>{
     switch(action.type){
         case "SHOW_ALL":
            return action.data.items;
         default:
            return state;
     }
 };
```
The items stored could be something like:

```javascript
{
    id:1,
    text:"Lorem ipsum dolor sit amet",
    complete:false
}
```
```javascript
    import React, { Component } from "react";
    import {connect} from "react-redux";

    class ItemShow extends Component{
        render(){
            const {incompleteItems}= this.props
            return (
                <ul>
                    {
                        incompleteItems.map(item=>(
                            <li key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
    const mapStateToProps =(state)=>{
        return {
            incompleteItems:state.listofItems.filter(item=>{
                return !item.complete
            });
        }
    };
    export default connect(mapStateToProps,null)(ItemShow);
```
With this it would make the components more coupled to the Redux state and less generic and reusable.

Also it would impact the performance of the application, because the mapStateToProps function gets called a lot during the lifecycle of the application and using it for this type of calculation is not a good practice.

## Selector function in action

To solve the problem above a selector function is going to be created.

As per good practices, this function should be near the reducer

Expanding the example above, now the reducer would be something like the code bellow.

```javascript
 // reducer
 const listofItems=(state={items:[]},action)=>{
     switch(action.type){
         case "SHOW_ALL":
            return action.data.items;
         default:
            return state;
     }
 };
 
 const getIncompleteItems=state=>{
     const {listofItems}=state;
     return listofItems.filter(item=>{
         return !item.complete
     });
 }
```

And the component would look like something like this
```javascript
    import React, { Component } from "react";
    import {connect} from "react-redux";

    class ItemShow extends Component{
        render(){
            const {incompleteItems}= this.props
            return (
                <ul>
                    {
                        incompleteItems.map(item=>(
                            <li key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
    const mapStateToProps =(state)=>{
        return {
            incompleteItems:getIncompleteItems(state);
        }
    };

    export default connect(mapStateToProps,null)(ItemShow);
```

#### More Information:
[Simple reselect explanation](https://guide.freecodecamp.org/redux/reselect)

[reselect official documentation](https://guide.freecodecamp.org/redux/reselect)


