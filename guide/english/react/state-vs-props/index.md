---
title: State vs Props
---
## State vs Props

When we start working with React components, we frequently hear two terms. These are `state` and `props`. So, in this article we will explore what those are and how they differ.

## State:

* State is something that a component owns. It belongs to that particular component where it is defined.
For example, A person's age is a state of that person.
* State is mutable. But it can be changed by only by the component itself, meaning it is private. As I only can change my age, no one else can.
* You can change the state by using `this.setState()`

See the below example to get an idea of state:

#### Person.js

```javascript
  import React from 'react';

  class Person extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        age:0
      this.incrementAge = this.incrementAge.bind(this)
    }

    incrementAge(){
      this.setState({
        age:this.state.age + 1;
      });
    }

    render(){
      return(
        <div>
          <label>My age is: {this.state.age}</label>
          <button onClick={this.incrementAge}>Grow me older !!</button>
        </div>
      );
    }
  }

  export default Person;
```
In the above example,  `age` is the state of `Person` component. 

## Props:

* Props are similar to method arguments. They are passed to a component when it is instantiated.
* Props are immutable. They are read-only.

See the below example to get an idea of Props:

#### Person.js

```javascript
  import React from 'react';

  class Person extends React.Component{
    render(){
      return(
        <div>
          <label>I am a {this.props.character} person.</label>
        </div>
      );
    }
  }

  export default Person;

  const person = <Person character = "good"></Person>
```

In the above example, `const person = <Person character = "good"></Person>` we are passing `character = "good"` prop to `Person` component.

It gives output as "I am a good person", in fact I am.

There is lot more to learn on State and Props. Many things can be learnt by actually diving into coding. So get your hands dirty by coding.

Reach me out on [twitter](https://twitter.com/getifyJr) if needed.

Happy Coding !!!
