---
title: Life Cycle Methods Of A Component
---

## Life Cycle Methods Of A Component

When we start working with components, we need to perform several actions to update state or to perform some actions when something changes in that component. In this scenario, life-cycle methods of a component comes handy !! So let us dive into them in this article.

Broadly, we can divide the life cycle methods into **3** categories.

1. Mounting
2. Updating
3. Unmounting

As life cycle methods are self explanatory, I'm just going to mention the method names. Please feel free to contribute to this article, if necessary.


## Mounting:

a. `constructor()`

b. `componentWillMount()`

c. `render()`

d. `componentDidMount()`


## Updating:

a. `componentWillReceiveProps()`

b. `shouldComponentUpdate()`

c. `componentWillUpdate()`

d. `render()`

e. `componentDidUpdate()`

## Unmounting:

a. `componentWillUnmount()`

## Some interesting facts to notice:

- `constructor`, `componentWillMount`, `componentDidMount` and `componentWillUnmount` will be called only once during the lifecycle of a component.
- `componentWillUpdate`,  and `componentDidUpdate` will only be executed if and only if `shouldComponentUpdate` returns true.
- `componentWillUnmount()`will be called just before unmounting any component and hence can be used to free up the used memory, close any connections to DB, etc.

Many things can be learned by diving into coding. So get your hands dirty by coding.


Note:

> "Deprecation warnings will be enabled with a future 16.x release, **but the legacy lifecycles will continue to work until version 17.**"<sup>1</sup>

> "Even in version 17, it will still be possible to use them, but they will be aliased with an “UNSAFE_” prefix to indicate that they might cause issues. We have also prepared an [automated script to rename them](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) in existing code."<sup>1</sup>

In other words, these previouse lifecycles methods will still be available as:
* `UNSAFE_componentWillMount`
* `UNSAFE_componentWillReceiveProps`
* `UNSAFE_componentWillUpdate`

## New Lifecycle Methods
New lifecycle methods will be introduced in React 17
* `getDerivedStateFromProps` will be a safer alternative to `componentWillReceiveProps`.
* `getSnapshotBeforeUpdate` will be added to support safely reading properties from the DOM updates are made


Many things can be learned by diving into coding. So get your hands dirty by coding.

### Sources
1. [Vaughn, Brian. "React v16.3.0: New lifecycles and context API". March 29, 2018. Accessed: May 22, 2018.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### Resources
[Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
