---
id: 67d301cc87b84eaa42bdcdbe
title: What Is a tsconfig File, and Why Is It Important to Include in Your TypeScript Projects?
challengeType: 11
videoId: H-n6N7zmNCg
dashedName: what-is-a-tsconfig-file-and-why-is-it-important-to-include-in-your-typescript-projects
---

# --description--

Watch the video or read the transcript and answer the questions below.

# --transcript--

What is a tsconfig file, and why is it important to include in your TypeScript projects?

Let's learn about the tsconfig file!

TypeScript's compiler settings can be configured to meet your project's needs. That configuration lives in a `tsconfig.json` file in the root directory of your project. In fact, without it, the compiler will not run unless you pass it command flags directly. But what exactly does this file do? Well, let's take a look at an example file:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./prod",
    "lib": ["ES2023"],
    "target": "ES2023",
    "module": "ES2022",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["test/"]
}
```

This seems like a lot! So let's break it down. The `compilerOptions` property is going to contain the "meat" of your configuration - this is where you control how the TypeScript compiler behaves. Looking at that nested object…

The `rootDir` and `outDir` tell TypeScript which directory holds your source files, and which directory should contain the transpiled JavaScript code.

The `lib` property determines which type definitions the compiler uses, and allows you to include support for specific ES releases, the DOM, and more.

`module` and `moduleResolution` effectively work in tandem to manage how your package uses modules - either CommonJS or ECMAScript.

`esModuleInterop` allows for smoother interoperability between CommonJS and ES modules by automatically creating namespace objects for imports, making it easier to use modules from different systems together in your TypeScript projects, and the `skipLibCheck` option skips validating `.d.ts` files that aren't referenced by imports in your code.

And finally we reach the `strict` mode. One might argue that TypeScript isn't truly helpful without this flag enabled, as it toggles quite a few other checks, such as requiring you to properly handle nullable types, or warn when TypeScript can't infer a type and falls back to any.

Before we finish, a quick note about the top-level `exclude` property - when you've defined a source directory, you may have TypeScript code outside of that directory which you don't want compiled as part of your production code. For example, your test code. The `exclude` array tells the compiler to ignore these TypeScript files during compilation, but still allows tooling like Intellisense to expose potential issues.

There are a ton of other compiler options you can explore - over 50! I encourage you to explore the documentation and experiment to find the configuration that works for your project's needs.

# --questions--

## --text--

Which property in the `tsconfig.json` file affects how the compiler behaves?

## --answers--

`rootDir`

### --feedback--

This property is an object containing options for the compiler.

---

`compilerOptions`

---

`exclude`

### --feedback--

This property is an object containing options for the compiler.

---

`lib`

### --feedback--

This property is an object containing options for the compiler.

## --video-solution--

2

## --text--

What does the `strict` option in the `tsconfig.json` file do?

## --answers--

It only checks for nullable types.

### --feedback--

This option enables various checks, including handling of nullable types.

---

It enforces the use of CommonJS modules.

### --feedback--

This option enables various checks, including handling of nullable types.

---

It toggles several type-checking options.

---

It excludes test files from compilation.

### --feedback--

This option enables various checks, including handling of nullable types.

## --video-solution--

3

## --text--

What is the purpose of the `exclude` array in the `tsconfig.json` file?

## --answers--

To specify which files to compile.

### --feedback--

You can use this to exclude test code from compilation.

---

To list additional libraries to include.

### --feedback--

You can use this to exclude test code from compilation.

---

To ignore certain files during compilation.

---

To define output directories for compiled files.

### --feedback--

You can use this to exclude test code from compilation.

## --video-solution--

3
