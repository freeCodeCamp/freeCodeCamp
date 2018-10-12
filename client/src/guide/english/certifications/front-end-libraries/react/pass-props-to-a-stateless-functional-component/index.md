---
title: Pass Props to a Stateless Functional Component
---
## Pass Props to a Stateless Functional Component

### Hint 1

Define a prop named date in the Calendar component as follows:
```jsx
<CurrentDate date={Date()} />
````

### Hint 2

The syntax prop.propName is used to render a prop.

### Solution

Assign a prop named date in the Calendar component as follows and render it in the Calendar component, like:

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
```
