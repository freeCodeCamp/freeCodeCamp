# 🏷 Typed `querySelector`

`querySelector` and `querySelectorAll` functions with better typing
by leveraging TypeScript 4.1 template literal type.

## 💿 Install

```
npm i -D typed-query-selector
```

## 🍉 Usage

### Automatic shim

All you need to do is to import this module,
then the `querySelector` and `querySelectorAll` function will be enhanced.

This module only works at type level and doesn't have any runtime code.

```typescript
import 'typed-query-selector'

document.querySelector('div#app') // ==> HTMLDivElement

document.querySelector('div#app > form#login') // ==> HTMLFormElement

document.querySelectorAll('span.badge') // ==> NodeListOf<HTMLSpanElement>

anElement.querySelector('button#submit') // ==> HTMLButtonElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEGYADcAxAEMwYBAEo4AenVwAvNoB8cABIAVALIAZACIyAopXZdGzVg558iQyjWgSpcxWBwBgBm0CCy5BAA5sAcqhpaugYmFgBiYXZork4sbJxuBB7C3lAAguTkEiRg8hzcAEbyGFFo8Zo6+nAAchAYaObAJDAA8sEAPCnmAjUcma56TtTk8lBocJTwtXP5AFxGZubbjvRb9vm8hYLFohL1eDC0HLIkePUgwDBtiZ2TAEL3jyOMHoQA)_

The example above assumes you're using bundlers or build tools with transpilers,
however, sometimes this may not match your situation.
For example, running `tsc` or Babel out of bundlers.
In this case, you can import this library like this:

```typescript
import type {} from 'typed-query-selector'

document.querySelector('div#app') // ==> HTMLDivElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gXzgMyhEOAciVQBMBaARwFcUpEKBnFAGxQGMZoiAoXshA40QKAHYwAdLXqIAym07coACiJlgANwDEAQzBgiASjgB6U3AC8lgHxwAEgBUAsgBkAIloCi7URKA)_

This looks ugly but it works.

If you aren't going to use ES Modules you can modify your `tsconfig.json`,
however this is NOT recommended, unless you know what you're doing.

```json
{
  "compilerOptions": {
    "types": ["typed-query-selector"]
  }
}
```

### Strict mode

> Available in v2.3+

In strict mode, the selector parser will perform additional syntax checks on input string.
If there're syntax errors, return type will be `never` instead of `Element`.

Example usage:

```ts
import 'typed-query-selector/strict'

const element = document.querySelector('div[test') // return `never`
```

This feature won't be enabled by default and you can opt-in.
If you want to enable this, change import entry:

```diff
- import 'typed-query-selector'
+ import 'typed-query-selector/strict'
```

That's all. If you pass an invalid selector,
because it returns `never`, TypeScript will prevent you from
accessing properties/methods on element or using element at somewhere.

Note that it doesn't guarantee that it can detect every kind of syntax errors,
since such parser will become very complex and compilation performance may go bad.

### Use the parser

If you just want to use the selector parser itself, we've exported for you:

```typescript
import type {
  ParseSelector,
  StrictlyParseSelector, // or use the strict parser
} from 'typed-query-selector/parser'

type MyElement = ParseSelector<'form#login'>
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3nACgQygZxQGUUAbFAYxmjgF84AzKCEOAciVQBMBaARwCuKKIh6FyVaAHoweQlDYAoRZzQBZRAFFyIFADt4AXmxziZStSgAeNg2ggAxKQgBzYHrYA+IA)_

Please note that you should import `typed-query-selector/parser`, not `typed-query-selector`.
This is safe because this import doesn't patch to the `querySelector` and `querySelectorAll` function.

Sometimes, you may want to specify another fallback type (such as `HTMLElement`, not default `Element` type)
when failed to parse selector or failed to look up, you can pass a fallback type as the second type parameter:

> Available in v2.4+

```ts
import type { ParseSelector } from 'typed-query-selector/parser'

type MyElement = ParseSelector<'unknown-tag', HTMLElement> // ==> HTMLElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3nACgQygZxQGUUAbFAYxmjgF84AzKCEOAciVQBMBaARwCuKKIh6FyVaAHoweQlDYAoRZzQBZRAFFyIFADt4AXmxziZStSgAeNgL0BrPRADuenjBwBzNgBo4ACQAVNQAZbRRdAwA+OCkpOENDGKDQ8MiYIA)_

## 💡 Supported Use Cases

### With class, ID, pseudo class or attribute

```typescript
import 'typed-query-selector'

document.querySelector('div.container') // ==> HTMLDivElement

document.querySelector('div#app') // ==> HTMLDivElement

document.querySelector('input[name=username]') // ==> HTMLInputElement

document.querySelector('input:first-child') // ==> HTMLInputElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEGYADduVCFwCGwDoQQBKOAHotcALx6AfHAASAFQCyAGQAiMgKKV2XRs1bOefIkMo1oEqWkAYkUwMA1tXQNjc2s7aUc0D1cWNk5PAm9hP3EEFTA8GABtDkV2PTwyKFL2AF0InX0jU0srAEkOAphE5KZUj15MwWzRCXzCgC4AM2AoEhgsKgALYHIMBqjm2PbOwp70oA)_

Even mix them:

```typescript
import 'typed-query-selector'

document.querySelector('input.form-control[name=username]') // ==> HTMLInputElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEwDmDw8AZtBBYqELlAjkA2hwCG7ALx4yUXewC6CAJRwA9Dbj79APjgAJACoBZADIBJabIAopTsXEA)_

And with `:is()` or `:where()`:

> Available in v2.5+

```typescript
import 'typed-query-selector'

document.querySelector(':is(div#id, span.class[k=v])') // ==> HTMLDivElement | HTMLSpanElement

document.querySelector(':where(div#id, span.class[k=v])') // ==> HTMLDivElement | HTMLSpanElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEALmAkxGYADcAxMAwAaOCTABDDtyrltJEgG0A1gF4FAXQCUCW3AD0TuBYsA+OAAkAKgFkAGQARRQBRSnYuOAAfHwDAgR0OCLQomEZmVnTeAiIhShpoCUkAdwALQjQ5RRV1TWT9Q2NzKzsHZ1d3Lz8g0IVU9Nj4oKTdQc4YIA)_

### Combinators

```typescript
import 'typed-query-selector'

document.querySelector('body div') // ==> HTMLDivElement

document.querySelector('body > form') // ==> HTMLFormElement

document.querySelector('h1 + p') // ==> HTMLParagraphElement

document.querySelector('h2 ~ p') // ==> HTMLParagraphElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEAIwgZkcDMABuCAJRwA9OrgBebQD44ACQAqAWQAyAESUBRSuy6NmrBzz5EhlGtAnTZcAwAzaBBVDS1dAxMLADEQuzRXJxY2TjcCD2FvcQQACwBGOABqODAwzR19IzNzAAUAQyh6gHMmsFyEpKYU114MwSzRCVyAJjgAP1LyiKrousaWto77NKA)_

### Grouping selectors

```typescript
import 'typed-query-selector'

document.querySelector('div, span') // ==> HTMLDivElement | HTMLSpanElement
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHowirxDQDsYA6fQ5AMoVqtKAAoEGYADcANHBJgAhhwQBKOAHpNcALy6AfHAASAFQCyAGQAiMgKKV2XOAB8TFywOUcHaJzCA)_

### Fallback

#### Custom Elements

If you passed an unknown tag, it will fall back to `Element`.

```typescript
import 'typed-query-selector'

document.querySelector('my-web-component') // ==> Element
```

However, you can override it by specifying a concrete type as a type argument.

```typescript
document.querySelector<MyComponent>('my-web-component') // ==> MyComponent
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHo2vIEMo04q2SS4BZZAGEI4CADs04+GgAeMKRj4AJACr8AMgFFKIKfADeAX0YYIVPHukA6fIWQBlCtVpQAFAhDEA7mgBGWFSikJLSCACUcAD0UXAAvHEAfHA6aFYwpuaW+rYERE6UNNAAPIIiYqEwiR5eWL4BQRX6EdGxCcllwRL6QA)_

Alternatively, you can use [global augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation) and [interface merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces) to extend `HTMLElementTagNameMap` with your custom elements.

```typescript
declare global {
  interface HTMLElementTagNameMap {
    'my-web-component': MyComponent
  }
}

document.querySelector('my-web-component') // ==> MyComponent
```

_[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAchgTzAUwCYFoCOBXNKZLAZzQBs0BjGaBAKHo2vIEMo04q2SS4BZZAGEI4CADs04+GgAeMKRj4AJACr8AMgFFKIKfADeAX0bNu7TgHNyEAEatycA-Tiu4waYQBmrKpzWaOmh60qqslgByrHr8rGBOLm5JCCDEAO5otlhUopCS0ggAXALCuRL6ANyJriYmTBBUeCEwAHT4hMgAyhTUtFAAFCnpmdll+TAIAJRwAPQzcAC8CwB8JSJi40A)_

#### Invalid selector

When passing an invalid selector which causes parsing error,
it will fall back to `Element`.

```typescript
import 'typed-query-selector'

document.querySelector('div#app >') // ==> Element

document.querySelector('div#app ?') // ==> Element
```

However, if you're using strict mode,
all `querySelector` calls above will return `never` type.
This can stop you from misusing it.

```ts
import 'typed-query-selector/strict'

const el = document.querySelector('div#app >')
el.className // TypeScript will report error when compiling
```

## 🔩 Technical Details

### Why returns `never` in strict mode?

In runtime, if you pass an invalid selector string to `querySelector` or
`querySelectorAll` function, it will throw an error instead of returning
`null` or `undefined` or anything else.
For details, please read [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type).

## 🔗 Related

- [Type Gymnastics](https://github.com/g-plane/type-gymnastics) - Collection of wonderful TypeScript type gymnastics code snippets.

## 📃 License

MIT License

Copyright (c) 2020-present Pig Fang
