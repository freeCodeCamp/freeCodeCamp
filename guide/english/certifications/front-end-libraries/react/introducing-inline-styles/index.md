---
title: Introducing Inline Styles
---
## Introducing Inline Styles

## Solution 
This one can be a little tricky because JSX is very similar to HTML but **NOT the same**.

Let's walkthrough the steps so that you understand the difference. 
First set your style tag to a **JavaScript object**.

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{}}>
        Big Red
      </div>
    );
  }
};
```
Now you have your style tag set to an empty object. Notice how there are two sets of curly braces. This is an important difference between JSX and HTML.<br>

Second, let's set the color to red. 

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{ color: 'red' }}>
        Big Red
      </div>
    );
  }
};
```

Finally, let's set the font size to 72px. 

### Spoiler
```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{ color: 'red', fontSize: '72'}}>
        Big Red
      </div>
    );
  }
};
```

Notice how the JSX attribute is **camelCase**. This is another important difference to remember about JSX.
Additionally, you probably noticed that there is no unit. In JSX, when setting the fontSize attribute the **unit is optional** and will automatically be set to px if not set manually. 
