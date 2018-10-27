---
title: Props
---
### What are the props?
Props (short for properties) are the data passed into the component. They are immutable (read-only).

### Passing Props
As stated above, props are a way to pass data to different parts of your app. To pass a prop first you must assign the prop a name. This name can then be used to pass the data to a child component. Second, you need to assign the prop the value or piece of data that you want to pass.

```
render() {
  return (
    <Logo companyName={freeCodeCamp} />
  )
}
```
In the example above we have created a prop named 'name' and passed it the value freeCodeCamp. Now we can use that prop inside the Logo component by accessing the props property.

```
class Logo extends React.Component {
  render() {
    return (
      <h2>{this.props.companyName}</h2>
    )
  }
}
```
