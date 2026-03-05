---
id: 698f5a3a492176259d1afcf9
title: What are Interfaces and How Do They Work?
challengeType: 19
dashedName: what-are-interfaces-and-how-do-they-work
---

# --description--

In a prior lesson, you learned how to work with type aliases and saw examples on how to name object types. 

As you recall, one way to name an object type would be to use the `type` keyword like this:

```ts
type ID = number | string;

type User = {
  id: ID;
  name: string;
};
```

Another way to name an object type would be to use an `interface` declaration like this:

```ts
type ID = number | string;

interface User {
  id: ID;
  name: string;
}
```

`type` and `interface` are similar but one key difference is that interfaces use the `extends` keyword to build on other interfaces, while `type` aliases use intersection types (`&`) to combine types.

Let's look at some examples:

```ts
interface User {
  id: number | string;
  name: string;
}

interface Admin extends User {
  role: string;
}

const adminUser: Admin = {
  id: 101,
  name: "Alice",
  role: "superadmin"
};
```

In this example, `User` starts with `id` and `name`. The `Admin` interface extends `User`, meaning it includes `id` and `name` and adds a new property called `role`.

If you wanted to extend a `type`, you would use an intersection type (`&`) like this:

```ts
type User = {
  id: number | string;
  name: string;
};

type Admin = User & {
  role: string;
};

const adminUser: Admin = {
  id: 101,
  name: "Alice",
  role: "superadmin"
};
```

`Admin` combines the `User` type with a new object type that includes `role`. The result is the same shape as the interface example which is an object with `id`, `name`, and `role`.

Both `type` and `interface` can describe the shape of an object. If you're unsure which to use, remember that `interface` is specifically designed for object shapes, while `type` is more flexible and can also represent union types, primitives, and more complex type combinations.

# --questions--

## --text--

Which TypeScript feature allows you to create a new type by combining multiple existing types using `&`?

## --answers--

`interface`

### --feedback--

Refer back to the middle of the lesson where intersection types were discussed.

---

`type`

---

`class`

### --feedback--

Refer back to the middle of the lesson where intersection types were discussed.

---

`enum`

### --feedback--

Refer back to the middle of the lesson where intersection types were discussed.

## --video-solution--

2

## --text--

Which of the following is the correct way to create an `interface`?

## --answers--

```ts
type ID = number | string;

interface User {
  id: ID;
  name: string;
}
```

---

```ts
type ID = number | string;

interface User == {
  id: ID;
  name: string;
}
```

### --feedback--

Refer to the beginning of the lesson.

---

```ts
type ID = number | string;

interface > User {
  id: ID;
  name: string;
}
```

### --feedback--

Refer to the beginning of the lesson.

---

```ts
type ID = number | string;

interface User >> {
  id: ID;
  name: string;
}
```

### --feedback--

Refer to the beginning of the lesson.

## --video-solution--

1

## --text--

Which of the following is true about type aliases in TypeScript?

## --answers--

They can represent unions and intersections.

---

They can only describe object shapes.

### --feedback--

Refer to the end of the lesson.

---

They must use extends to build on other types.

### --feedback--

Refer to the end of the lesson.

---

They cannot be assigned to variables.

### --feedback--

Refer to the end of the lesson.

## --video-solution--

1
