---
title: Access Props Using this.props
---
# Access Props Using this.props


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

For this solution you need to remember first how to add props to your parent component:

```JSX
<ReturnTempPassword tempPassWord="xxxxxxxx" />
```

Once you have the prop set, you can use this.props in your child component.

```html
<p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
```

</details>