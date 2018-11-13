---
title: Access Props Using this.props
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Access Props Using this.props

For this solution you need to remember first how to add props to your parent component:

 ```JSX
<ReturnTempPassword tempPassWord="xxxxxxxx" />
```

Once you have the prop set, you can use this.props in your child component.

```html
<p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
```
