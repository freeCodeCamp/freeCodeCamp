---
id: 699460b8cd3160713372860f
title: What are Type Assertions and How Do They Work?
challengeType: 19
dashedName: what-are-type-assertions-and-how-do-they-work
---

# --description--

Sometimes there will be situations where you will know more about a type than TypeScript does. This is where type assertions come in handy.

Here is an example using the `querySelector()` method to access an element with the `id` of `submit`:

```ts
const submitBtn = document.querySelector("#submit");
```

Right now, TypeScript only knows that this `submitBtn` is some sort of `Element` or possibly `null`. TypeScript will not look at the corresponding HTML to figure it out.

This is good place to use a type assertion to tell TypeScript what type of element this is. Here is an example:

```ts
const submitBtn = document.querySelector("#submit") as HTMLButtonElement;
```

Now, TypeScript will treat this as a `button` element because of that type assertion. 

There are limits to using the `as` keyword. For example, you can't do stuff like this without TypeScript throwing an error:

```ts
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
const age = "awesome" as number;
```

In this example, it doesn't make much sense to try and assert that the string `"awesome"` should be viewed as a number type. TypeScript only allows type assertions between compatible or overlapping types.

One way to remove that error would be to use a double assertion like this:

```ts
const age = "awesome" as unknown as number;
```

Even though this works in TypeScript, it is still not recommended because logically it doesn't make much sense.

Another way to write type assertions is to use angle bracket syntax like this:

```ts
const submitBtn = <HTMLButtonElement>document.querySelector("#submit");
```

You need to be careful with this syntax when using `tsx` files because TypeScript will think you are trying to render a component and throw an error like this:

```ts
// file: index.tsx
// This JSX tag requires 'React' to be in scope, but it could not be found.
// JSX element 'HTMLButtonElement' has no corresponding closing tag.
const submitBtn =  <HTMLButtonElement>document.querySelector("#submit");
```

In most situations, you will see the first syntax using the `as` keyword being used over the second option.

# --questions--

## --text--

What is the main purpose of a type assertion in TypeScript?

## --answers--

To convert a value at runtime to a different type.

### --feedback--

Refer back to the beginning of the lesson.

---

To tell TypeScript to treat a value as a more specific type.

---

To prevent values from being `null`.

### --feedback--

Refer back to the beginning of the lesson.

---

To automatically check the DOM for the correct element type.

### --feedback--

Refer back to the beginning of the lesson.

## --video-solution--

2

## --text--

Why does TypeScript throw an error for this code?

```ts
const age = "awesome" as number;
```

## --answers--

TypeScript does not allow type assertions with strings and numbers.

### --feedback--

Refer back to the middle of the lesson where limitations of the `as` keyword were discussed.

---

TypeScript requires using `unknown` for all type assertions.

### --feedback--

Refer back to the middle of the lesson where limitations of the `as` keyword were discussed.

---

String and number do not sufficiently overlap as types.

---

TypeScript requires using `any` for all type assertions.

### --feedback--

Refer back to the middle of the lesson where limitations of the `as` keyword were discussed.

## --video-solution--

3

## --text--

Why should you be careful when using angle bracket syntax for type assertions in `tsx` files?

## --answers--

It is deprecated in TypeScript.

### --feedback--

Refer to the end of the lesson.

---

It only works with primitive types.

### --feedback--

Refer to the end of the lesson.

---

It automatically converts values at runtime.

### --feedback--

Refer to the end of the lesson.

---

TypeScript may interpret it as JSX syntax.

## --video-solution--

4
