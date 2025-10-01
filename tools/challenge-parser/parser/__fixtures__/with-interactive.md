# --interactive--

Intro paragraph for interactive section. Should be ignored by the add-interactive-elements plugin

Normal markdown

```html
<div>This is NOT an interactive element</div>
```

:::interactive_editor

```js
console.log('Interactive JS');
```

:::

:::interactive_editor

```html
<div>This is an interactive element</div>
```

:::


```html
<div>This contains the instructions, but is not interactive</div>
``` 

:::interactive_editor

```html
<div>This is an interactive element</div>
```

```js
console.log('Interactive JS');
```

:::

```html
<div>This contains the description, but is not interactive</div>
```
