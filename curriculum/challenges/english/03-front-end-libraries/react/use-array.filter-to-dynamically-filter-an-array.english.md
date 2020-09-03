---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301416
---

## Description

<section id='description'>
The <code>map</code> array method is a powerful tool that you will use often when working with React. Another method related to <code>map</code> is <code>filter</code>, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property <code>online</code> which can be set to <code>true</code> or <code>false</code>, you can filter only those users that are online by writing:
<code>let onlineUsers = users.filter(user => user.online);</code>
</section>

## Instructions

<section id='instructions'>
In the code editor, <code>MyComponent</code>&apos;s <code>state</code> is initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use <code>filter</code> to return a new array containing only the users whose <code>online</code> property is <code>true</code>. Then, in the <code>renderOnline</code> variable, map over the filtered array, and return a <code>li</code> element for each user that contains the text of their <code>username</code>. Be sure to include a unique <code>key</code> as well, like in the last challenges.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should exist and render to the page.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length, 1);
  - text: <code>MyComponent</code>&apos;s state should be initialized to an array of six users.")
    testString: assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state('users')) === true && Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6);
  - text: <code>MyComponent</code> should return a <code>div</code>, an <code>h1</code>, and then an unordered list containing <code>li</code> elements for every user whose online status is set to <code>true</code>.
    testString: "(() => {
      const comp = Enzyme.mount(React.createElement(MyComponent));
      const users = (bool) => ({
        users: [
          { username: 'Jeff', online: bool },
          { username: 'Alan', online: bool },
          { username: 'Mary', online: bool },
          { username: 'Jim', online: bool },
          { username: 'Laura', online: bool },
        ],
      });
      const result = () => comp.find('li').length;
      const _1 = result();
      const _2 = () => {
        comp.setState(users(true));
        return result();
      };
      const _3 = () => {
        comp.setState(users(false));
        return result();
      };
      const _4 = () => {
        comp.setState({ users: [] });
        return result();
      };
      const _2_val = _2();
      const _3_val = _3();
      const _4_val = _4();
      assert(
        comp.find('div').length === 1 &&
          comp.find('h1').length === 1 &&
          comp.find('ul').length === 1 &&
          _1 === 4 &&
          _2_val === 5 &&
          _3_val === 0 &&
          _4_val === 0
      );
    })();
    "
  - text: <code>MyComponent</code> should render <code>li</code> elements that contain the username of each online user.
    testString: "(() => {
      const comp = Enzyme.mount(React.createElement(MyComponent));
      const users = (bool) => ({
        users: [
          { username: 'Jeff', online: bool },
          { username: 'Alan', online: bool },
          { username: 'Mary', online: bool },
          { username: 'Jim', online: bool },
          { username: 'Laura', online: bool },
        ],
      });
      const ul = () => {
        comp.setState(users(true));
        return comp.find('ul').html();
      };
      const html = ul();
      assert(
        html ===
          '<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>'
      );
    })();
    "
  - text: Each list item element should have a unique <code>key</code> attribute.
    testString: assert((() => { const ul = Enzyme.mount(React.createElement(MyComponent)).find('ul'); console.log(ul.debug()); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key() ]); return keys.size === 4; })());

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='jsx-seed'>

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
    };
  }
  render() {
    const usersOnline = null; // change code here
    const renderOnline = null; // change code here
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```js
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
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => {
      return user.online;
    });
    const renderOnline = usersOnline.map(user => {
      return <li key={user.username}>{user.username}</li>;
    });
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

</section>
