---
title: Use Array.filter() to Dynamically Filter an Array
---
## Use Array.filter() to Dynamically Filter an Array

## Hint 1:

Use ```.filter()``` to create a new array that only shows users online.

```this.state.users.filter(i => i.online == true)```

## Hint 2:

Use ```.map()``` from previous the previous exercise to list out the online users and give them a unique key.

```usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)```

## Solution:

Both methods combined will first filter out the array, then list them individually.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(i => i.online == true); // change code here
    const renderOnline = usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>); // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
