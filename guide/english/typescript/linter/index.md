---
title: Linter
---
## Linter

![TSLint](https://2.bp.blogspot.com/-w7oeP1geosE/V82a740bTbI/AAAAAAAAAu4/-zJxZsmmH6garbdmUplX0n5Yz5zDsvcVQCLcB/s1600/tslint.png)

A <a href='https://www.wikiwand.com/en/Lint_(software' target='_blank' rel='nofollow'>linter</a> is defined as a tool that detects and flags errors in programming languages, including stylistic errors.

For TypeScript, <a href='http://palantir.github.io/tslint' target='_blank' rel='nofollow'>TSLint</a> is the most popular linter option.

TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors.

It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

### Installing TSLint

This command will globally install the `TSLint` package using `npm`, a popular package manager.

```bash
npm i -g tslint
```

### Configuring TSLint Rules

By default TSLint is looking in the root directory for a .tslint.json file containing the rules to apply.

```json
{
  "rules": {
    "curly": true,
    "eofline": false,
    "align": [true, "parameters"],
    "class-name": true,
    "indent": [true, "spaces"],
    "max-line-length": [true, 150],
    "no-consecutive-blank-lines": [true],
    "no-trailing-whitespace": true,
    "no-duplicate-variable": true,
    "no-var-keyword": true,
    "no-empty": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-var-requires": true,
    "no-require-imports": true,
    "one-line": [true,
      "check-else",
      "check-whitespace",
      "check-open-brace"],
    "quotemark": [true,
      "single",
      "avoid-escape"],
    "semicolon": [true, "always"],
    "typedef-whitespace": [true, {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    }],
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"]
  }
}

For more details about the different rules see  <a href='https://palantir.github.io/tslint/rules/' target='_blank' rel='nofollow'>TSLint
