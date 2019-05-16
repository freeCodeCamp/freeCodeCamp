---
title: Access Props Using this.props
---
## Access Props Using this.props
---

For this solution you need to remember first how to add props to your parent component:

 ```JSX
<ReturnTempPassword tempPassWord="xxxxxxxx" />
```

Once you have the prop set, you can use this.props in your child component.

```html
<p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
