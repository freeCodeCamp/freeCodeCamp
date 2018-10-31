---
title: Create a Component with Composition
---

## Create a Component with Composition

### Hint 1

Add the component to be rendered in the component in which it is to be rendered.

### Hint 2

Use JSX self closing tags.

### Hint 3
The component to be rendered is ChildComponenet and it is to be rendered in ParentComponent

### Solution
The following will render the ChildComponent in the ParentComponent, as required:
````javascript
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
````