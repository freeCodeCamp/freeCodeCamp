# @html-eslint/core

Core HTML validation logic for html-eslint.

## Overview

This package provides framework-agnostic HTML validation utilities that can be used across different ESLint plugins (Angular, Svelte, etc.).

## Installation

```bash
npm install @html-eslint/core
```

## Usage

```javascript
import { noInvalidAttrValue } from "@html-eslint/core";

// Create a rule instance with options
const rule = noInvalidAttrValue({
  allow: [{ tag: "img", attr: "src", valuePattern: "^https://.*" }],
});

// Validate attributes using an adapter
const result = rule.checkAttributes(elementAdapter);
```

## License

MIT
